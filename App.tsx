import React from 'react';
import {
  Eye,
  Brain,
  BookOpen,
  Navigation,
  UserCheck,
  Battery,
  Volume2,
  Glasses,
  Mic,
  Smartphone,
  Wifi,
  ChevronRight,
  PlayCircle,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617722537193-0fccfbf48af7?auto=format&fit=crop&q=80"
            alt="Smart glasses background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Empowering Vision Through Innovation
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Smart Glasses for the Visually Impaired
          </p>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            Discover the next generation of assistive technology. Our smart glasses are designed to enhance
            the independence, mobility, and confidence of people with visual impairments — bringing the
            world closer, one step at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center gap-2">
              Learn More <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center gap-2">
              Watch Demo <PlayCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe that accessibility should be built into every aspect of life. Our mission is
                to create cutting-edge wearable technology that transforms how visually impaired
                individuals interact with the world around them — seamlessly, intuitively, and with
                dignity.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Smart Glasses?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Traditional tools can be limiting. Our smart glasses go beyond magnification or audio
                cues. Using a combination of AI-powered object detection, real-time text-to-speech,
                navigation assistance, and facial recognition, we offer a comprehensive tool for
                everyday independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Real-Time Object Recognition"
              description="Identify everyday objects, obstacles, and landmarks with AI-powered detection."
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Text-to-Speech"
              description="Reads printed text — books, signs, menus, and more — directly into your ear."
            />
            <FeatureCard
              icon={<Navigation className="w-8 h-8" />}
              title="Navigation Support"
              description="GPS and indoor navigation to help you move confidently through any environment."
            />
            <FeatureCard
              icon={<UserCheck className="w-8 h-8" />}
              title="Facial Recognition"
              description="Identify familiar faces and get real-time social cues for smoother communication."
            />
            <FeatureCard
              icon={<Battery className="w-8 h-8" />}
              title="Lightweight & Long Battery"
              description="All-day comfort with powerful performance."
            />
            <FeatureCard
              icon={<Wifi className="w-8 h-8" />}
              title="Smart Connectivity"
              description="Seamless integration with smartphones and cloud services."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              icon={<Glasses className="w-8 h-8" />}
              title="Wear the Glasses"
              description="Lightweight, comfortable, and stylish."
              step={1}
            />
            <StepCard
              icon={<Mic className="w-8 h-8" />}
              title="Activate with Voice or Touch"
              description="Simple and intuitive controls."
              step={2}
            />
            <StepCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Receive Feedback Instantly"
              description="Through discreet audio or vibration cues."
              step={3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="These glasses gave me back a sense of independence I hadn't felt in years."
              author="Sophie M."
              role="teacher and mother"
            />
            <TestimonialCard
              quote="I can now walk around confidently without needing constant help. Life-changing!"
              author="Rahul D."
              role="university student"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">FAQs</h2>
          <div className="space-y-8">
            <FaqItem
              question="Is it suitable for all types of visual impairment?"
              answer="Our smart glasses are designed to assist people with partial to severe vision loss. They may not replace guide dogs or canes but are a powerful complement."
            />
            <FaqItem
              question="Can I use them indoors and outdoors?"
              answer="Yes! Our technology adapts to different lighting and environments."
            />
            <FaqItem
              question="Is internet required?"
              answer="Some features work offline, while advanced AI tools use cloud connectivity for best performance."
            />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Involved</h2>
          <p className="text-gray-300 text-lg mb-12">
            Whether you're a user, caregiver, investor, or organization, we'd love to hear from you.
            Together, we can build a more accessible future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Request a Demo
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Partner with Us
            </button>
            <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Eye className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold">VisionAssist Pro</span>
          </div>
          <p>&copy; 2025 VisionAssist Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function StepCard({ icon, title, description, step }: { icon: React.ReactNode; title: string; description: string; step: number }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mb-4">
        {step}
      </div>
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-slate-800 p-8 rounded-xl">
      <Volume2 className="w-8 h-8 text-blue-400 mb-6" />
      <blockquote className="text-xl text-gray-300 italic mb-6">{quote}</blockquote>
      <p className="text-white font-semibold">{author}</p>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
}

export default App;