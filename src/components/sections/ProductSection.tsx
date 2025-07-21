// src/components/ProductSection.tsx
import Image from 'next/image';

export default function ProductSection() {
  const shortText = `
    Jelajahi beragam fitur dan kapabilitas unggulan dari produk kami yang dirancang untuk memenuhi setiap kebutuhan Anda. Kami menghadirkan inovasi terbaru untuk meningkatkan efisiensi dan kreativitas dalam setiap aspek pekerjaan Anda.
  `;

  return (
    <section className="bg-green-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Section: Short Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Fitur Unggulan Produk Kami</h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              {shortText}
            </p>
          </div>

          {/* Right Section: Two Illustrations */}
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-8 justify-center">
            {/* Illustration A Card */}
            <div className="relative bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center w-full max-w-sm sm:w-1/2">
              {/* Title Card for Illustration A */}
              <div className="absolute -top-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md">
                <h3 className="text-lg whitespace-nowrap">Ilustrasi A</h3>
              </div>
              <Image
                src="/images/product-ilustrasi-a.jpg" // Ganti dengan path gambar Ilustrasi A
                alt="Ilustrasi A Produk"
                width={300} // Sesuaikan lebar gambar
                height={200} // Sesuaikan tinggi gambar
                className="mt-8 rounded-2xl object-cover w-full h-auto"
              />
              <p className="text-gray-800 text-center mt-4">Deskripsi singkat Ilustrasi A.</p>
            </div>

            {/* Illustration B Card */}
            <div className="relative bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center w-full max-w-sm sm:w-1/2">
              {/* Title Card for Illustration B */}
              <div className="absolute -top-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md">
                <h3 className="text-lg whitespace-nowrap">Ilustrasi B</h3>
              </div>
              <Image
                src="/images/product-ilustrasi-b.jpg" // Ganti dengan path gambar Ilustrasi B
                alt="Ilustrasi B Produk"
                width={300} // Sesuaikan lebar gambar
                height={200} // Sesuaikan tinggi gambar
                className="mt-8 rounded-2xl object-cover w-full h-auto"
              />
              <p className="text-gray-800 text-center mt-4">Deskripsi singkat Ilustrasi B.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}