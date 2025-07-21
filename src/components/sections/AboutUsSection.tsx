// src/components/AboutUsSection.tsx (Versi yang Disesuaikan)
import Image from 'next/image';

export default function AboutUsSection() {
  const aboutText = `
    Iman Boost adalah produk digital Islami yang dirancang untuk membantu Gen Z dan milenial Muslim memperkuat spiritualitas mereka di tengah kehidupan modern yang sibuk dan penuh distraksi.

    Produk ini bukan sekedar audio islami biasa, melainkan spiritual toolkit harian yang memadukan pendekatan ruhani dan psikologis untuk membentuk kebiasaan baik, meningkatkan kedekatan dengan Allah, serta menumbuhkan ketenangan jiwa.
  `;

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8"> {/* Hapus 'relative' di sini */}
      <div className="container mx-auto max-w-6xl"> {/* Hapus 'relative z-10' di sini */}
        {/* Main Card */}
        <div className="bg-gray-100 rounded-lg shadow-xl pt-6 pl-6 pr-6 sm:pt-8 sm:pl-8 sm:pr-8 lg:pt-10 lg:pl-10 lg:pr-10 pb-0">
          {/* Title Card */}
          <div className="w-fit mx-auto -mt-16 mb-8 px-6 py-3 bg-gradient-to-r from-[#164d2e] to-[#006737] text-white text-center font-semibold rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl whitespace-nowrap">Tentang Iman Boost</h2>
          </div>

          {/* Content Division (Left: Text, Right: Image) */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Section: Text Explanation */}
            <div className="md:w-1/2 text-gray-700 text-center sm:text-lg leading-relaxed">
              <p className="mb-4 font-semibold text-green-950">
                {aboutText.split('\n\n')[0]} {/* Paragraf pertama */}
              </p>
              <p className="text-green-900">
                {aboutText.split('\n\n')[1]} {/* Paragraf kedua */}
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/temp_placeholder.webp"
                alt="Tentang Produk"
                width={300} // Sesuaikan lebar gambar
                height={300} // Sesuaikan tinggi gambar
                className="shadow-lg object-cover w-[23rem] h-auto max-h-80 md:max-h-96"
                style={{ borderRadius: '50% 50% 0 0', border: '1rem #c8bebe solid', borderBottom: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}