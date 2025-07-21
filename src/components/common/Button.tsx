import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // Konten yang akan ditampilkan di dalam tombol (teks, ikon, dll.)
  onClick?: () => void;      // Fungsi opsional yang dijalankan saat tombol diklik
  className?: string;        // Kelas Tailwind CSS tambahan yang bisa ditambahkan dari parent
  variant?: 'primary' | 'secondary'; // Varian desain tombol
}

export default function Button({ children, onClick, className, variant = 'primary' }: ButtonProps) {
  // Kelas dasar yang akan selalu diterapkan pada tombol
  const baseClasses = "px-10 py-4 font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer";

  // Kelas spesifik untuk setiap varian desain
  const primaryClasses = "bg-gradient-to-r from-[#164d2e] to-[#006737] text-white hover:from-[#006737] hover:to-[#164d2e]";
  const secondaryClasses = "bg-[#e1dada] text-black hover:bg-lime-100";

  // Pilih kelas varian berdasarkan prop 'variant'
  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}