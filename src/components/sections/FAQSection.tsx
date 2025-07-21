// src/components/FAQSection.tsx
'use client'; // Penting: Tambahkan ini untuk menggunakan useState dan interaktivitas klien

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // State untuk melacak FAQ mana yang terbuka

  const faqs = [
    {
      question: 'Apa itu Produk Unggulan Anda?',
      answer: 'Produk Unggulan kami adalah solusi inovatif yang dirancang untuk meningkatkan efisiensi operasional dan memberikan pengalaman pengguna yang tak tertandingi. Kami fokus pada teknologi terkini untuk memenuhi kebutuhan pasar yang dinamis.',
    },
    {
      question: 'Bagaimana cara mendaftar atau membeli produk?',
      answer: 'Anda dapat mendaftar atau membeli produk kami dengan mudah melalui halaman pricing. Ikuti langkah-langkah yang tertera, dan tim kami akan memandu Anda melalui proses aktivasi.',
    },
    {
      question: 'Apakah ada dukungan teknis yang tersedia?',
      answer: 'Tentu saja! Kami menyediakan dukungan teknis 24/7 melalui email, chat, dan telepon. Tim ahli kami siap membantu Anda dengan segala pertanyaan atau masalah yang mungkin Anda hadapi.',
    },
    {
      question: 'Apakah produk ini kompatibel dengan semua perangkat?',
      answer: 'Produk kami dirancang dengan fleksibilitas tinggi dan kompatibel dengan berbagai perangkat modern, termasuk desktop, laptop, tablet, dan smartphone. Anda dapat mengaksesnya kapan saja dan di mana saja.',
    },
    {
      question: 'Bisakah saya mendapatkan demo gratis?',
      answer: 'Kami tidak menyediakan demo gratis secara publik, tetapi tim sales kami dapat memberikan presentasi produk personal yang disesuaikan dengan kebutuhan spesifik Anda. Silakan hubungi kami untuk menjadwalkan demo.',
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
        <div className="border-b border-gray-300"> {/* Border bawah untuk FAQ terakhir */}
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
                <div className="mt-4 text-gray-600 leading-relaxed pr-8">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}