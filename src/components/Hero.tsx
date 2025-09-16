import { useState, useEffect } from 'react';
import { Play, CheckCircle, ArrowRight, Wifi, Zap, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

interface CheckAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckAvailabilityModal = ({ isOpen, onClose }: CheckAvailabilityModalProps) => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zipCode: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Checking availability for:', formData);
    alert('Thanks! We\'ll check availability and contact you soon.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="glass-card max-w-md w-full p-6 rounded-2xl relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Availability</h3>
        <p className="text-gray-600 mb-6">Enter your address to see available plans in your area</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="123 Main Street"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="City"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
              <input
                type="text"
                required
                pattern="[0-9]{5}"
                value={formData.zipCode}
                onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="12345"
              />
            </div>
          </div>
          
          <button type="submit" className="w-full btn-primary">
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Fast, Reliable Internet",
    "Lightning-Speed Fiber",
    "Seamless Connectivity",
    "Next-Gen Networks"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Up to 1000 Mbps speeds"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "99.9% uptime guarantee"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert help anytime"
    }
  ];

  const partnerLogos = [
    "Netflix", "Disney+", "Amazon Prime", "Hulu", "HBO Max", "Apple TV+"
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fiber optic cables with purple light" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-600/20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-screen py-20">
          
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Animated Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white/90 text-sm font-medium">
                <Wifi className="w-4 h-4" />
                <span>Premium Internet Provider</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block transition-all duration-500 ease-in-out">
                  {heroTexts[currentText]}
                </span>
                <span className="block text-gradient mt-2">
                  Powered for Home & Business
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Experience ultra-fast fiber internet with speeds up to 1000 Mbps. 
                Perfect for streaming, gaming, working from home, and smart devices. (833) 840-2117
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary group text-lg px-8 py-4"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a href="#pricing" className="btn-secondary group text-lg px-8 py-4">
                <span>View Plans</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20 max-w-3xl mx-auto">
              <p className="text-white/70 text-sm mb-4">Trusted by top streaming services:</p>
              <div className="flex flex-wrap justify-center gap-4 items-center">
                {partnerLogos.map((logo) => (
                  <div 
                    key={logo} 
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-white/90 text-sm font-medium hover:bg-white/15 transition-all cursor-default"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check Availability Modal */}
      <CheckAvailabilityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;