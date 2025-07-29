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
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo_dark-theme.svg`}
              alt="Nama Perusahaan Logo"
              width={150}
              height={50}
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
            <div className="flex flex-col space-y-4">
              <Link href="https://instagram.com/Official.Imanboost" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icon_instagram.png`} alt="Instagram" style={{ width: '2rem' }} width={32} height={32} unoptimized />
                <span className="text-white">Official.Imanboost</span>
              </Link>
              <Link href="https://tiktok.com/@Official.Imanboost" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icon_tiktok.png`} alt="TikTok" style={{ width: '1.4rem' }} width={32} height={32} unoptimized />
                <span className="text-white">Official.Imanboost</span>
              </Link>
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