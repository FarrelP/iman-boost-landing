import Image from 'next/image';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative h-[58vh] min-h-[300px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/background_desktop.webp"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Gradasi dari bagian atas (gambar) ke bagian bawah (putih) */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
      </div>

      {/* Bagian Bawah: Copywriting Utama & CTA Buttons */}
      <div className="bg-white py-18 px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed mb-8 text-green-900">
            Aplikasi Audio Harian Islami untuk Reset Pikiran & Hati<br/>
            Membangun mental kuat & iman kokoh dalam <span className="font-bold">15 menit sehari</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary">
              Daftar Sekarang
            </Button>
            <Button variant="secondary">
              Sudah Punya Akun?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}