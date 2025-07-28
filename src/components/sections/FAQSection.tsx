'use client'; // Penting: Tambahkan ini untuk menggunakan useState dan interaktivitas klien

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // State untuk melacak FAQ mana yang terbuka

  
  const faqHTML = ``

  const faqs = [
    {
      question: 'Mengapa Brain Boost Muslim?',
      answer: 
        <>
        <p className="text-black uppercase">Muslim butuh solusi mental dan spiritualis yang relevan</p>
        <p className="text-black mb-0 uppercase">Data :</p>
        <ul className="list-disc text-black pl-6">
          <li>78% masyarakat Indonesia mengalami gangguan psikologis ringan-sedang pasca pandemi (Kemenkes, 2022)</li>
          <li>79% Gen Z Muslim mengaku sering overthinking, insecure, dan merasa jauh dari Allah.</li>
        </ul>
        <p className="text-black">(Sumber: Populix Research on Gen Z & Mental Wellness, 2023)</p>
        </>
      ,
    },
    {
      question: 'Kenapa Iman Boost Berdurasi 15 Menit?',
      answer: 
        <>
        <p className="text-black uppercase">Dirancang untuk konsistensi, bukan sekedar konsumsi.</p>
        <ul className="list-disc text-black pl-6">
          <li>Target utama kami adalah Daily Active Users (DAU), bukan sekedar download tinggi di awal.</li>
          <li>Data dari aplikasi global seperti Headspace dan Fabulous menunjukkan bahwa durasi ideal konten harian adalah 10-20 menit, karena pengguna cenderung konsisten pada format singkat (micro-habit).</li>
          <li>Kami menerapkan insigt ini untuk pengguna Muslim yang ingin meningkatkan spiritualitas tanpa beban waktu</li>
        </ul><br />
        <p className="text-black uppercase">Efektif dan relevan dengan kehidupan muslim.</p>
        <ul className="list-disc text-black pl-6">
          <li>Format 15 menit kami menggambungkan affirmasi Qur&apos;ani, tafsir sederhana, dan refleksi terarah dalam satu sesi.</li>
          <li>Cukup padat untuk memberikan dampak, namun ringan untuk diulang setiap hari. Tidak mengganggu ritme ibadah utama, justru memperkuatnya.</li>
        </ul><br />
        <p className="text-black uppercase">Sesuai momen spiritualis.</p>
        <ul className="list-disc text-black pl-6">
          <li>Disarankan didengarkan setelah Subuh, Zuhur, atau Magrib—momen dimana mental sedang segar atau butuh &quot;recharge&quot;.</li>
          <li>Format ini mudah diintegrasikan ke kehidupan sehari-hari pengguna Muslim aktif, terutama Gen Z & Milenia.</li>
        </ul>
        </>
      ,
    },
    {
      question: 'Kenapa bukan untuk tidur (Sleep Mode)?',
      answer: 
      <>
      <p className="text-black uppercase">Karena kami membangun MVP dengan fokus dan diferensiasi yang jelas.</p>
      <p className="text-black mb-0 uppercase">Konten tidur perlu format khusus</p>
      <ul className="list-disc text-black pl-6">
          <li>Audio tidur Islami yang efektif membutuhkan pendekatan berbeda: lebih panjang, repetitif, dengan suara alam dan dzikir lembut.</li>
          <li>Kami melihatnya sebagai produk lanjutan (Sleep Therapy Series) yang akan dirilis setelah MVP sukses.</li>
        </ul><br />
        <p className="text-black uppercase">Faktor syariah & psikologis.</p>
        <ul className="list-disc text-black pl-6">
          <li>Banyak Muslim merasa tidak nyaman mendengarkan audio Qur&apos;an saat tidur, karena dianggap kurang sopan (meskipun ada perbedaan pendapat dalam fiqh).</li>
          <li>Maka, kami menjadikannya fitur tambahan berbasis preferensi personal, bukan pengalaman utama.</li>
        </ul><br />
      </>,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="border-b border-black"> {/* Border bawah untuk FAQ terakhir */}
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-black py-6"> {/* Border top hitam untuk setiap FAQ */}
              <button
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-1 text-gray-600 leading-relaxed pr-8">
                  {/* <p>{faq.answer}</p> */}
                  <>{faq.answer}</>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}