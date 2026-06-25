import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { ips } = await request.json();

    if (!ips || !Array.isArray(ips) || ips.length === 0) {
      return NextResponse.json({ error: 'No IPs provided' }, { status: 400 });
    }

    // ip-api.com batch endpoint allows up to 100 IPs per request
    // We will chunk the IPs just in case
    const chunkSize = 100;
    let allResults = [];

    for (let i = 0; i < ips.length; i += chunkSize) {
      const chunk = ips.slice(i, i + chunkSize);
      
      // We request fields: query (the IP), status, country, regionName (Province), city (District), isp
      const response = await fetch('http://ip-api.com/batch?fields=query,status,country,regionName,city,isp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(chunk)
      });

      if (response.ok) {
        const data = await response.json();
        allResults = allResults.concat(data);
      }
    }

    // Map results by IP
    const ipMap = {};
    allResults.forEach(result => {
      if (result.status === 'success') {
        // Build location string: City (District), RegionName (Province), Country
        let locationParts = [];
        if (result.city) locationParts.push(result.city);
        if (result.regionName && result.regionName !== result.city) locationParts.push(result.regionName);
        if (result.country) locationParts.push(result.country);

        ipMap[result.query] = {
          location: locationParts.join(', '),
          isp: result.isp || 'Unknown'
        };
      }
    });

    return NextResponse.json(ipMap);
  } catch (error) {
    console.error('IP Info fetch error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
