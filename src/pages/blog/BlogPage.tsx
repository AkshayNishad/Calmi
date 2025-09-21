import React from 'react';
import { Footer } from '../../components/ui/Footer';

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-gradient-to-r from-purple-300 to-purple-600 dark:from-purple-800 dark:to-purple-900 text-white py-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-3xl mb-6 font-semibold leading-tight">The Science Behind Mindfulness: How 10 Minutes a Day Can Transform Your Mental Health</h1>
          {/* <p className="text-lg opacity-90 font-normal">By Dr. Sarah Johnson • Mental Health Specialist & Wellness Coach</p> */}
        </div>
      </header>

      <main className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <article>


            <div className="flex flex-col md:flex-row gap-2 md:gap-5 mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-600">
              <span className="text-purple-600 text-sm font-semibold">Published on January 15, 2025</span>
              <span className="text-purple-600 text-sm font-semibold">5 min read</span>
            </div>

            <div className="leading-relaxed text-gray-600 dark:text-gray-300 text-left space-y-6">
              <p className="text-lg">
                In our fast-paced world, finding moments of peace can feel impossible. However, research consistently shows that just 10 minutes of daily mindfulness practice can create profound changes in our mental well-being.
              </p>

              <p className="text-lg">
                Mindfulness isn't just a trendy wellness practice—it's a scientifically-backed approach to mental health that has been studied extensively. When we engage in mindful breathing, meditation, or simple awareness exercises, we're literally rewiring our brains for better emotional regulation and stress management.
              </p>

              <h3 className="text-purple-600 dark:text-purple-400 text-xl md:text-lg my-8 font-semibold text-left">The Neurological Benefits</h3>
              <p className="text-lg">
                Studies using brain imaging technology have revealed that regular mindfulness practice increases gray matter density in areas associated with learning, memory, and emotional regulation. The amygdala, our brain's alarm system, becomes less reactive to stress, while the prefrontal cortex—responsible for executive function—becomes more active.
              </p>

              <h3 className="text-purple-600 dark:text-purple-400 text-xl md:text-lg my-8 font-semibold text-left">Simple Steps to Get Started</h3>
              <p className="text-lg">
                You don't need special equipment or years of training. Start with these simple practices:
              </p>
              <ul className="my-6 pl-8 list-disc text-left space-y-3">
                <li className="text-gray-600 dark:text-gray-300">Set aside 10 minutes each morning for deep breathing</li>
                <li className="text-gray-600 dark:text-gray-300">Practice mindful walking during your lunch break</li>
                <li className="text-gray-600 dark:text-gray-300">Use guided meditation apps for structured sessions</li>
                <li className="text-gray-600 dark:text-gray-300">Focus on one task at a time throughout your day</li>
              </ul>

              <p className="text-lg">
                Remember, consistency matters more than perfection. Even on busy days, a few mindful breaths can make a difference. Your mental health journey is unique, and every small step counts toward building resilience and inner peace.
              </p>
            </div>

            <div className="mt-12 p-8 bg-purple-50 dark:bg-gray-800 rounded-xl border-l-4 border-purple-600 text-left">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">Mental Health Specialist & Wellness Coach</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed m-0">
                    <strong>About the Author:</strong> Dr. Sarah Johnson is a licensed clinical psychologist with over 15 years of experience in mental health and wellness. She specializes in mindfulness-based interventions and has helped thousands of individuals develop healthier relationships with stress and anxiety.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};