// src/components/FormatSection.tsx
import Image from 'next/image';

export default function FormatSection() {
  const formatItems = [
    { name: 'Item 1', image: '/images/format-item-1.jpg' },
    { name: 'Item 2', image: '/images/format-item-2.jpg' },
    { name: 'Item 3', image: '/images/format-item-3.jpg' },
    { name: 'Item 4', image: '/images/format-item-4.jpg' },
    { name: 'Item 5', image: '/images/format-item-5.jpg' },
  ];

  const pricing = {
    amount: 'Rp 500.000',
    description: 'Harga spesial untuk akses penuh seumur hidup!',
  };

  const commonItemClasses = "flex flex-col items-center text-center w-full max-w-[150px] sm:max-w-[180px]";
  const commonImageClasses = "rounded-xl object-cover w-full h-[150px] sm:h-[180px] mb-4 shadow-md";
  const commonNameTagClasses = "bg-white text-gray-800 px-4 py-2 rounded-lg shadow-sm font-medium whitespace-nowrap";

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Card */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gray-100 rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Pilih Format yang Anda Inginkan</h2>

          {/* Bagian Item untuk Tampilan MOBILE (<= md) */}
          <div className="md:hidden flex flex-col items-center"> {/* Hidden on md and up */}
            {/* Baris Mobile 1: Item 1 & 2 */}
            <div className="grid grid-cols-2 gap-8 mb-8 justify-items-center w-full">
              {formatItems.slice(0, 2).map((item, index) => (
                <div key={`mobile-${index}`} className={commonItemClasses}>
                  <Image src={item.image} alt={item.name} width={150} height={150} className={commonImageClasses} />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* Baris Mobile 2: Item 3 & 4 */}
            <div className="grid grid-cols-2 gap-8 mb-8 justify-items-center w-full">
              {formatItems.slice(2, 4).map((item, index) => (
                <div key={`mobile-${index + 2}`} className={commonItemClasses}>
                  <Image src={item.image} alt={item.name} width={150} height={150} className={commonImageClasses} />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* Baris Mobile 3: Item 5 (di tengah) */}
            <div className="flex justify-center w-full">
              {formatItems.slice(4, 5).map((item, index) => (
                <div key={`mobile-${index + 4}`} className={commonItemClasses}>
                  <Image src={item.image} alt={item.name} width={150} height={150} className={commonImageClasses} />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian Item untuk Tampilan DESKTOP (>= md) */}
          <div className="hidden md:flex flex-col items-center"> {/* Hidden on less than md */}
            {/* Baris Desktop 1: Item 1, 2, 3 */}
            <div className="grid grid-cols-3 gap-8 mb-8 justify-items-center w-full">
              {formatItems.slice(0, 3).map((item, index) => (
                <div key={`desktop-${index}`} className={commonItemClasses}>
                  <Image src={item.image} alt={item.name} width={180} height={180} className={commonImageClasses.replace('h-[150px] sm:h-[180px]', 'h-[180px]')} />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* Baris Desktop 2: Item 4, 5 */}
            <div className="grid grid-cols-2 gap-8 justify-items-center w-full max-w-[400px]"> {/* Add max-width to center 2 items in 3-col desktop layout */}
              {formatItems.slice(3, 5).map((item, index) => (
                <div key={`desktop-${index + 3}`} className={commonItemClasses}>
                  <Image src={item.image} alt={item.name} width={180} height={180} className={commonImageClasses.replace('h-[150px] sm:h-[180px]', 'h-[180px]')} />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto max-w-6xl mt-16 text-center relative z-10">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4">{pricing.amount}</h3>
        <p className="text-xl text-gray-700 mb-8">{pricing.description}</p>
        <button className="px-10 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105">
          Bayar Sekarang
        </button>
      </div>

      {/* GRADASI DI BAWAH PRICING KE GAMBAR FULL SIZE */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white z-0"></div>
    </section>
  );
}