import Image from 'next/image';
import Card from '../common/Card';

export default function AboutUsSection() {
  const aboutText = `
    Iman Boost adalah produk digital Islami yang dirancang untuk membantu Gen Z dan milenial Muslim memperkuat spiritualitas mereka di tengah kehidupan modern yang sibuk dan penuh distraksi.

    Produk ini bukan sekedar audio islami biasa, melainkan spiritual toolkit harian yang memadukan pendekatan ruhani dan psikologis untuk membentuk kebiasaan baik, meningkatkan kedekatan dengan Allah, serta menumbuhkan ketenangan jiwa.
  `;

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <Card 
          className="pt-6 pl-6 pr-6 sm:pt-8 sm:pl-8 sm:pr-8 lg:pt-10 lg:pl-10 lg:pr-10 pb-0 rounded-lg" 
          titleString="Tentang Iman Boost"
          variant="primary">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-gray-700 text-center sm:text-lg leading-relaxed">
              <p className="mb-4 font-semibold text-green-950">
                {aboutText.split('\n\n')[0]}
              </p>
              <p className="text-green-900">
                {aboutText.split('\n\n')[1]}
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/temp_placeholder.webp"
                alt="Tentang Produk"
                width={300}
                height={300}
                className="shadow-lg object-cover w-[23rem] h-auto max-h-80 md:max-h-96"
                style={{ borderRadius: '50% 50% 0 0', border: '1rem #c8bebe solid', borderBottom: 'none' }}
                unoptimized
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}