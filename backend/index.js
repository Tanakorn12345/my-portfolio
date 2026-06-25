const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })

dotenv.config();

const app = express();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Upload Endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // We return a relative path or full URL. Better to return full URL or just the path and the frontend appends.
  // Using relative path so it's host agnostic if the backend is deployed
  const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// Basic health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running' });
});

// Get Profile
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await prisma.profile.findFirst();
    res.json(profile || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Profile
app.post('/api/profile', async (req, res) => {
  try {
    const profile = await prisma.profile.create({
      data: req.body
    });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Profile
app.put('/api/profile/:id', async (req, res) => {
  try {
    const profile = await prisma.profile.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: 'asc' }
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Project
// GET single project
app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id },
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching project' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const project = await prisma.project.create({
      data: req.body
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Project
app.put('/api/projects/:id', async (req, res) => {
  try {
    const project = await prisma.project.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Project
app.delete('/api/projects/:id', async (req, res) => {
  try {
    await prisma.project.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Internships
app.get('/api/internships', async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      orderBy: { order: 'asc' }
    });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Internship
// GET single internship
app.get('/api/internships/:id', async (req, res) => {
  try {
    const internship = await prisma.internship.findUnique({
      where: { id: req.params.id },
    });
    if (!internship) return res.status(404).json({ error: 'Internship not found' });
    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching internship' });
  }
});

app.post('/api/internships', async (req, res) => {
  try {
    const internship = await prisma.internship.create({
      data: req.body
    });
    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Internship
app.put('/api/internships/:id', async (req, res) => {
  try {
    const internship = await prisma.internship.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Internship
app.delete('/api/internships/:id', async (req, res) => {
  try {
    await prisma.internship.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Internship deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const UAParser = require('ua-parser-js');

// Create Visitor Log
app.post('/api/visitors', async (req, res) => {
  try {
    const userAgentString = req.headers['user-agent'];
    const parser = new UAParser(userAgentString);
    const result = parser.getResult();

    // Get IP Address
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const browser = result.browser.name ? `${result.browser.name} ${result.browser.version || ''}`.trim() : 'Unknown';
    const os = result.os.name ? `${result.os.name} ${result.os.version || ''}`.trim() : 'Unknown';
    
    let device = 'Desktop';
    if (result.device.type === 'mobile' || result.device.type === 'tablet') {
      device = result.device.model ? `${result.device.vendor || ''} ${result.device.model}`.trim() : (result.device.type === 'mobile' ? 'Mobile' : 'Tablet');
    } else if (result.device.model) {
      device = result.device.model;
    }

    const visitor = await prisma.visitorLog.create({
      data: {
        ipAddress: String(ipAddress),
        browser,
        device,
        os
      }
    });
    res.json(visitor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Visitor Logs (Admin)
app.get('/api/visitors', async (req, res) => {
  try {
    const visitors = await prisma.visitorLog.findMany({
      orderBy: { visitedAt: 'desc' },
      take: 1000 // limit to last 1000 visits for performance
    });
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Clear Visitor Logs (Admin)
app.delete('/api/visitors', async (req, res) => {
  try {
    await prisma.visitorLog.deleteMany({});
    res.json({ message: 'All visitor logs have been cleared.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete specific visitor log (Optional, but good to have)
app.delete('/api/visitors/:id', async (req, res) => {
  try {
    await prisma.visitorLog.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Visitor log deleted.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
