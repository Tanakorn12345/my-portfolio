"use client";
import Image from "next/image";

const DetailLayout = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt = "Project Image", 
  children,
  index = 0
}) => {
  // เช็คว่าเป็นแถวเลขคู่หรือคี่ เพื่อสลับด้านซ้าย-ขวา
  const isEven = index % 2 === 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-24 md:mb-32">
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 lg:gap-16 items-center`}>
        
        {/* ส่วนรูปภาพ (Image) */}
        <div className="w-full md:w-1/2 relative group">
          {/* กรอบพื้นหลังที่ลอยเหลื่อมออกมาเพื่อเพิ่มมิติ (Decorative background) */}
          <div className={`absolute -inset-4 md:-inset-6 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-xl ${isEven ? 'bg-gradient-to-br from-blue-400 to-indigo-500' : 'bg-gradient-to-bl from-purple-400 to-pink-500'}`}></div>
          
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-zinc-800/50 bg-gray-100 dark:bg-zinc-900 transform transition-transform duration-700 hover:scale-[1.02]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt || title || 'Project detail image'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-400 font-medium text-lg">
                No Image Available
              </div>
            )}
            
            {/* Overlay Gradient เล็กน้อยเพื่อให้รูปดูมีมิติ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* ส่วนข้อความ (Content / Text) */}
        <div className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:pl-6 lg:pl-10' : 'md:pr-6 lg:pr-10'}`}>
          <div className="relative">
            {/* เส้นตกแต่ง */}
            <div className={`absolute -left-6 top-2 bottom-2 w-1.5 rounded-full hidden md:block opacity-80 ${isEven ? 'bg-gradient-to-b from-blue-500 to-indigo-500' : 'bg-gradient-to-b from-purple-500 to-pink-500'}`}></div>
            
            <div className="mb-6">
              {subtitle && (
                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4 shadow-sm border border-white/10 ${isEven ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'}`}>
                  {subtitle}
                </span>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-2">
                {title}
              </h2>
            </div>
            
            {/* เนื้อหาด้านในที่ถูกส่งเข้ามา (เช่น h3, p, buttons) */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              {children}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailLayout;