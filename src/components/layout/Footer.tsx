// src/components/FooterSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Bagian 1: Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
            <Image
              src="/images/your-logo.png" // Ganti dengan path logo Anda
              alt="Nama Perusahaan Logo"
              width={150} // Sesuaikan ukuran logo
              height={50} // Sesuaikan ukuran logo
              className="mb-4"
              unoptimized
            />
            <p className="text-sm text-gray-300">
              Visi kami adalah menjadi penyedia solusi teknologi terkemuka, menciptakan dampak positif bagi bisnis dan masyarakat.
            </p>
          </div>

          {/* Bagian 2: Informasi A */}
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Email: info@namaperusahaan.com</li>
              <li>Telepon: (123) 456-7890</li>
              <li>Alamat: Jl. Contoh No. 123, Kota Anda, Negara Anda</li>
            </ul>
          </div>

          {/* Bagian 3: Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.svg" alt="Instagram" width={32} height={32} unoptimized />
              </Link>
              <Link href="https://tiktok.com/@your-tiktok" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/tiktok.svg" alt="TikTok" width={32} height={32} unoptimized />
              </Link>
              {/* Tambahkan ikon media sosial lain jika diperlukan */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Nama Perusahaan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}