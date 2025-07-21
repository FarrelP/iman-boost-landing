// src/components/AboutUsSection.tsx (Versi yang Disesuaikan)
import Image from 'next/image';

export default function AboutUsSection() {
  const productName = "Produk Unggulan"; // Ganti dengan nama produk Anda
  const aboutText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Kami berkomitmen untuk menyediakan solusi terbaik yang inovatif dan relevan dengan kebutuhan pasar saat ini. Fokus kami adalah menciptakan pengalaman pengguna yang mulus dan memberikan nilai tambah yang signifikan bagi setiap klien.
  `;

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8"> {/* Hapus 'relative' di sini */}
      <div className="container mx-auto max-w-6xl"> {/* Hapus 'relative z-10' di sini */}
        {/* Main Card */}
        <div className="bg-gray-100 rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
          {/* Title Card */}
          <div className="w-fit mx-auto -mt-16 mb-8 px-6 py-3 bg-blue-600 text-white text-center font-semibold rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl whitespace-nowrap">Tentang {productName}</h2>
          </div>

          {/* Content Division (Left: Text, Right: Image) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Section: Text Explanation */}
            <div className="md:w-1/2 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className="mb-4">
                {aboutText.split('\n\n')[0]} {/* Paragraf pertama */}
              </p>
              <p>
                {aboutText.split('\n\n')[1]} {/* Paragraf kedua */}
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/about-product.jpg" // Ganti dengan path gambar Anda
                alt="Tentang Produk"
                width={500} // Sesuaikan lebar gambar
                height={350} // Sesuaikan tinggi gambar
                className="rounded-lg shadow-lg object-cover w-full h-auto max-h-80 md:max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}