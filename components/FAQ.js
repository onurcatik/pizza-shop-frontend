// components/FAQ.js
"use client";

import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Nasıl çalışır?',
      answer:
        'Menümüzden dilediğiniz ürünleri seçerek sepetinize ekleyin ve ödeme adımlarını takip ederek siparişinizi tamamlayabilirsiniz.'
    },
    {
      question: 'Teslimat ne kadar sürer?',
      answer:
        'Teslimat süremiz bulunduğunuz bölgeye bağlı olarak genellikle 30 dakika ile 1 saat arasında değişmektedir.'
    },
    {
      question: 'Büyük partiler için sipariş verebilir miyim?',
      answer:
        'Evet, büyük etkinlikler ve organizasyonlar için önceden haber vererek toplu sipariş verebilirsiniz. Lütfen detaylar için bizimle iletişime geçin.'
    },
    {
      question: 'İçeriğinde ne kadar protein var?',
      answer:
        'Ürünlerimiz hakkında detaylı içerik bilgisi için menümüzden ilgili ürünün açıklamalarına göz atabilirsiniz. Ayrıca alerjen bilgileri de mevcuttur.'
    },
    {
      question: 'Yağ ile mi pişirilir?',
      answer:
        'Evet, menümüzde vegan ve vejetaryen müşterilerimiz için özel seçenekler bulunmaktadır. Daha fazla bilgi için menümüzü inceleyin.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h1 className="heading">Sıkça Sorulan Sorular</h1>
      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`accordion ${activeIndex === index ? 'active' : ''}`}>
            <div className="accordion-heading" onClick={() => toggleAccordion(index)}>
              <span>{faq.question}</span>
              <i className="fas fa-angle-down"></i>
            </div>
            {activeIndex === index && (
              <p className="accrodion-content">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
