import React from 'react';

interface CardProps {
  children: React.ReactNode; // Konten yang akan ditampilkan di dalam tombol (teks, ikon, dll.)
  className?: string;        // Kelas Tailwind CSS tambahan yang bisa ditambahkan dari parent
  titleString?: string;      // Judul yang akan ditampilkan jika useTitle adalah true
  variant?: 'primary' | 'secondary'; // Varian desain tombol
}

export default function Card({ children, className, titleString, variant }: CardProps) {
  const baseClasses = "bg-gray-100 shadow-xl";
  
  const baseTitleClasses = "w-fit mx-auto text-center font-semibold rounded-lg shadow-md";
  const primaryTitleClasses = "-mt-16 mb-8 px-6 py-3 bg-gradient-to-r from-[#164d2e] to-[#006737] text-white";
  const secondaryTitleClasses = "absolute -top-4 px-3 py-1 bg-white";

  const isPrimary = variant === 'primary';
  const variantClasses = isPrimary ? primaryTitleClasses : secondaryTitleClasses;

  return (
    <div className={`${baseClasses} ${className || ''}`}>
      {titleString && (
        <div className={`${baseTitleClasses} ${variantClasses}`}>
          <h2 className={`${isPrimary ? 'text-white text-xl sm:text-2xl' : 'text-green-950 text-md : sm:text-lg'} whitespace-nowrap`}>{titleString}</h2>
        </div>
      )}
        {children}
    </div>
  );
}