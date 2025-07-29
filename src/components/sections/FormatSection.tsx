// src/components/FormatSection.tsx
import Image from 'next/image';
import Button from '../common/Button';

export default function FormatSection() {
  const formatItems = [
    { name: "Audio Harian (affirmation + ayat qur'an + musik healing)", image: "/images/temp_placeholder_3d.webp" },
    { name: "Habit Tracker", image: "/images/temp_placeholder_3d.webp" },
    { name: "Kalender Spiritual", image: "/images/temp_placeholder_3d.webp" },
    { name: "Premium Audio & Komunitas", image: "/images/temp_placeholder_3d.webp" },
    { name: "Lifetime Access", image: "/images/temp_placeholder_3d.webp" },
  ];

  const pricing = {
    amount: 'Idr 299.000',
    description: 'Harga spesial untuk akses penuh seumur hidup!',
  };

  const commonItemClasses = "flex flex-col items-center text-center w-full max-w-[150px] sm:max-w-[240px]";
  const commonImageClasses = "rounded-xl object-cover w-full h-[150px] sm:h-[180px] mb-4";
  const commonNameTagClasses = "bg-white text-green-900 px-4 py-2 rounded-lg shadow-sm font-medium w-full";

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Card */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-[#efe9e9] rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Pilih Format yang Anda Inginkan</h2>

          {/* Bagian Item untuk Tampilan MOBILE (<= md) */}
          <div className="md:hidden flex flex-col items-center"> {/* Hidden on md and up */}
            {/* Baris Mobile 1: Item 1 & 2 */}
            <div className="grid grid-cols-2 gap-8 mb-8 justify-items-center w-full">
              {formatItems.slice(0, 2).map((item, index) => (
                <div key={`mobile-${index}`} className={commonItemClasses}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${item.image}`} alt={item.name} width={150} height={150} className={commonImageClasses} unoptimized />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* Baris Mobile 2: Item 3 & 4 */}
            <div className="grid grid-cols-2 gap-8 mb-8 justify-items-center w-full">
              {formatItems.slice(2, 4).map((item, index) => (
                <div key={`mobile-${index + 2}`} className={commonItemClasses}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${item.image}`} alt={item.name} width={150} height={150} className={commonImageClasses} unoptimized />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* Baris Mobile 3: Item 5 (di tengah) */}
            <div className="flex justify-center w-full">
              {formatItems.slice(4, 5).map((item, index) => (
                <div key={`mobile-${index + 4}`} className={commonItemClasses}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${item.image}`} alt={item.name} width={150} height={150} className={commonImageClasses} unoptimized />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian Item untuk Tampilan DESKTOP (>= md) */}
          <div className="hidden md:flex flex-col items-center"> {/* Hidden on less than md */}
            {/* Baris Desktop 1: Item 1, 2, 3 */}
            <div className="grid grid-cols-3 gap-1 mb-8 justify-items-center w-full">
              {formatItems.slice(0, 3).map((item, index) => (
                <div key={`desktop-${index}`} className={commonItemClasses}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${item.image}`} alt={item.name} width={180} height={180} className={commonImageClasses.replace('h-[150px] sm:h-[180px]', 'h-[180px]')} unoptimized />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* Baris Desktop 2: Item 4, 5 */}
            <div className="grid grid-cols-2 gap-8 justify-items-center w-full max-w-[512px]"> {/* Add max-width to center 2 items in 3-col desktop layout */}
              {formatItems.slice(3, 5).map((item, index) => (
                <div key={`desktop-${index + 3}`} className={commonItemClasses}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${item.image}`} alt={item.name} width={180} height={180} className={commonImageClasses.replace('h-[150px] sm:h-[180px]', 'h-[180px]')} unoptimized />
                  <div className={commonNameTagClasses}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto max-w-6xl mt-16 text-center relative z-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">Mulai sekarang</h3>
        <div className="border border-green-900 mb-4 w-fit px-16 m-auto p-4 rounded-lg">
          <p className="text-2xl text-black mb-1">Lifetime Access</p>
          <p className="text-xl text-black font-bold">{pricing.amount}</p>
        </div>
        <p className="text-lg text-black mb-1 lg:w-[42rem] md:w-[38rem] sm:w-[10rem] mx-auto mb-4">Setelah langganan anda hanya membayar Rp.299.000,00 untuk menikmati semua produk audio iman boost. Syarat & Ketentuan | Batalkan kapan saja</p>
        <Button className="lg:w-[18rem] md:w-[14rem] sm:w-[10rem] mb-4" variant="primary">
          Bayar Sekarang
        </Button>
      </div>
    </section>
  );
}