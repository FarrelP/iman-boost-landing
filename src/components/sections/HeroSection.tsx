import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Gambar Latar Belakang */}
      <Image
        src="/images/background_desktop.webp"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay untuk meningkatkan kontras teks */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Konten Hero Section */}
      <div className="relative z-20 p-8 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Transformasi Digital untuk Masa Depan Anda
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow">
          Kami menyediakan solusi inovatif yang disesuaikan untuk kebutuhan bisnis Anda,
          membantu Anda mencapai potensi penuh di era digital.
        </p>
        <button className="px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-xl hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105">
          Mulai Petualangan Anda
        </button>
      </div>

      {/* LAPISAN GRADASI BARU DI BAWAH HERO SECTION */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent z-20"></div>
      {/* Penjelasan Lapisan Gradasi:
          - absolute inset-x-0 bottom-0: Memposisikan div ini di bagian paling bawah dan selebar parent-nya.
          - h-48: Memberikan tinggi gradasi sekitar 192px. Anda bisa menyesuaikan tinggi ini.
          - bg-gradient-to-t: Gradien mengarah ke atas (bottom to top).
          - from-white: Gradien dimulai dengan warna putih di bagian paling bawah.
          - to-transparent: Gradien berakhir dengan transparan di bagian atasnya.
          - z-20: Penting untuk memastikan gradien ini berada di atas gambar latar belakang (z-0) dan overlay hitam (z-10), sehingga efek memudar ini diterapkan pada gambar.
      */}
    </section>
  );
}