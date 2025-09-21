import React from 'react';
import './BlogPage.css';

export const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <div className="header-content">
          <h1 className="header-title">Dr. Sarah Johnson</h1>
          <p className="header-subtitle">Mental Health Specialist & Wellness Coach</p>
        </div>
      </header>

      <main className="blog-main">
        <div className="blog-container">
          <article>
            <h2 className="article-title">The Science Behind Mindfulness: How 10 Minutes a Day Can Transform Your Mental Health</h2>
            
            <div className="article-meta">
              <span className="meta-item">Published on January 15, 2025</span>
              <span className="meta-item">5 min read</span>
            </div>

            <div className="article-content">
              <p>
                In our fast-paced world, finding moments of peace can feel impossible. However, research consistently shows that just 10 minutes of daily mindfulness practice can create profound changes in our mental well-being.
              </p>

              <p>
                Mindfulness isn't just a trendy wellness practice—it's a scientifically-backed approach to mental health that has been studied extensively. When we engage in mindful breathing, meditation, or simple awareness exercises, we're literally rewiring our brains for better emotional regulation and stress management.
              </p>

              <h3 className="section-title">The Neurological Benefits</h3>
              <p>
                Studies using brain imaging technology have revealed that regular mindfulness practice increases gray matter density in areas associated with learning, memory, and emotional regulation. The amygdala, our brain's alarm system, becomes less reactive to stress, while the prefrontal cortex—responsible for executive function—becomes more active.
              </p>

              <h3 className="section-title">Simple Steps to Get Started</h3>
              <p>
                You don't need special equipment or years of training. Start with these simple practices:
              </p>
              <ul className="practice-list">
                <li>Set aside 10 minutes each morning for deep breathing</li>
                <li>Practice mindful walking during your lunch break</li>
                <li>Use guided meditation apps for structured sessions</li>
                <li>Focus on one task at a time throughout your day</li>
              </ul>

              <p>
                Remember, consistency matters more than perfection. Even on busy days, a few mindful breaths can make a difference. Your mental health journey is unique, and every small step counts toward building resilience and inner peace.
              </p>
            </div>

            <div className="author-bio">
              <p>
                <strong>About the Author:</strong> Dr. Sarah Johnson is a licensed clinical psychologist with over 15 years of experience in mental health and wellness. She specializes in mindfulness-based interventions and has helped thousands of individuals develop healthier relationships with stress and anxiety.
              </p>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dr. Sarah Johnson</h3>
            <p className="text-gray-300 text-sm">Licensed clinical psychologist specializing in mindfulness-based interventions and mental wellness.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Dr. Sarah Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};