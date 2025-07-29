import Image from 'next/image';
import Card from '../common/Card';

export default function ProductSection() {
  const productText = `
    Serangkaian audio harian dan panduan kebiasaan yang membantu pengguna menjemput rezeki dengan cara spiritual, syar'i dan penuh makna.

    di dalam Iman Boost adalah bagian khusus dari konten audio dan modul spiritual yang dirancang untuk membantu Muslim membangun mindset berbasi ajaran Islam, bukan sekedar afirmasi kosong.
  `;

  const illustrationCardArr = [
    {
      title: "Magnet Rezeki",
      imageSrc: "/images/temp_placeholder.webp",
      altText: "Ilustrasi A Produk",
    },
    {
      title: "Anxiety",
      imageSrc: "/images/temp_placeholder.webp",
      altText: "Ilustrasi B Produk",
    },
  ];
  const borderCardName = "relative bg-white rounded-3xl shadow-xl flex flex-col items-center w-full max-w-sm sm:w-1/2";
  const borderImageStyle = { border: ".6rem #c8bebe solid" };

  return (
    <section className="bg-green-950 pt-14 pb-10 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Section: Short Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Produk Audio</h2>
            <p className="sm:text-xl leading-relaxed font-thin">
              <span className="font-semibold">Magnet Rezeki</span> {productText.split('\n\n')[0]}
            </p>
            <br />
            <p className="sm:text-xl leading-relaxed font-thin">
              <span className="font-semibold">Anxiety</span> {productText.split('\n\n')[1]}
            </p>
          </div>

          {/* Right Section: Two Illustrations */}
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-8 justify-center">
            {illustrationCardArr.map((item) => (
              <Card 
                key={item.title}
                className={borderCardName} 
                titleString={item.title} 
                variant="secondary"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${item.imageSrc}`}
                  alt={item.altText}
                  width={300}
                  height={200}
                  className="rounded-3xl object-cover w-full h-full"
                  style={borderImageStyle}
                  unoptimized
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}