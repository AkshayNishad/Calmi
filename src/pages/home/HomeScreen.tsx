import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/ui/Footer';
import { TRANSLATIONS } from '../../utils/constants/app_constants';

// Import assets
import illustration3 from '../../assets/Illustration_3.png';
import illustration4 from '../../assets/illustration_4.png';
import darkLogo from '../../assets/dark_logo.svg';
import whiteLogo from '../../assets/white_logo2.svg';

export const HomeScreen: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const t = TRANSLATIONS.en;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 mt-0 pb-20 px-5 text-center overflow-hidden">
        <div className="flex justify-center mb-0 mt-0 pt-0">
          <img src={whiteLogo} alt="Calmi Logo" className="w-80 h-80 block dark:hidden" />
          <img src={darkLogo} alt="Calmi Logo" className="h-10 hidden dark:block" />
        </div>
        <div className="max-w-4xl mx-auto" mt-0 pt-0>
          <h1 className="text-5xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t.heroTitle}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.heroSubtitle}</p>
        </div>
        {/* <div className="absolute top-4 right-4 z-20">
          <ThemeToggle />
        </div> */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32"
          viewBox="0 0 500 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,160 350,-20 500,60 L500,120 L0,120 Z"
            fill="currentColor" className="text-purple-50 dark:text-gray-800"
          />
        </svg>
      </section>

      {/* Prioritize Section */}
      <section className="bg-purple-50 dark:bg-gray-800 py-16 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t.prioritizeTitle}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t.prioritizeText}</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">{t.prioritizeButton}</button>
          </div>
          <div className="flex justify-center">
            <img src={illustration3} alt="Meditation Illustration" className="max-w-md w-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-5 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">{t.servicesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{t.service1Title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t.service1Desc}</p>
              <button onClick={() => navigate('/blog')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">{t.service1Button}</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{t.service2Title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t.service2Desc}</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">{t.service2Button}</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{t.service3Title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t.service3Desc}</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">{t.service3Button}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">{t.testimonialsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{t.testimonial1Text}"</p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t.testimonial1Author}</h4>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{t.testimonial2Text}"</p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t.testimonial2Author}</h4>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{t.testimonial3Text}"</p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t.testimonial3Author}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-5 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">{t.faqTitle}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" onClick={() => toggleFaq(0)}>
                  <h3 className="flex justify-between items-center font-semibold text-gray-800 dark:text-gray-100">
                    {t.faq1Question}
                    <span className="text-purple-600 text-xl">
                      {openFaq === 0 ? '−' : '+'}
                    </span>
                  </h3>
                  {openFaq === 0 && <p className="mt-3 text-gray-600 dark:text-gray-300">{t.faq1Answer}</p>}
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" onClick={() => toggleFaq(1)}>
                  <h3 className="flex justify-between items-center font-semibold text-gray-800 dark:text-gray-100">
                    {t.faq2Question}
                    <span className="text-purple-600 text-xl">
                      {openFaq === 1 ? '−' : '+'}
                    </span>
                  </h3>
                  {openFaq === 1 && <p className="mt-3 text-gray-600 dark:text-gray-300">{t.faq2Answer}</p>}
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" onClick={() => toggleFaq(2)}>
                  <h3 className="flex justify-between items-center font-semibold text-gray-800 dark:text-gray-100">
                    {t.faq3Question}
                    <span className="text-purple-600 text-xl">
                      {openFaq === 2 ? '−' : '+'}
                    </span>
                  </h3>
                  {openFaq === 2 && <p className="mt-3 text-gray-600 dark:text-gray-300">{t.faq3Answer}</p>}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={illustration4} alt="FAQ Illustration" className="max-w-xs w-full" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};