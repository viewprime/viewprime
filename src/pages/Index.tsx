import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { 
  Wifi, Home, Building2, Monitor, 
  Star, Users, Globe, Phone, 
  ChevronDown, ChevronUp, Play,
  ArrowRight, CheckCircle, Zap, Shield, Clock
} from 'lucide-react';
import homeInternetImg from '@/assets/home-internet.jpg';
import businessInternetImg from '@/assets/business-internet.jpg';

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Wifi,
      title: "Fiber Internet",
      description: "Ultra-fast fiber optic internet with speeds up to 1000 Mbps for seamless streaming and gaming.",
      image: homeInternetImg,
      features: ["Up to 1000 Mbps", "99.9% Uptime", "No Data Caps"]
    },
    {
      icon: Home,
      title: "Home Wi-Fi Setup",
      description: "Professional installation and optimization of your home Wi-Fi network for complete coverage.",
      image: homeInternetImg,
      features: ["Mesh Network", "Smart Device Setup", "Security Config"]
    },
    {
      icon: Building2,
      title: "Business Internet",
      description: "Dedicated fiber connections for businesses with priority support and SLA guarantees.",
      image: businessInternetImg,
      features: ["Dedicated Lines", "24/7 Support", "SLA Guarantee"]
    },
    {
      icon: Monitor,
      title: "TV & Streaming",
      description: "Premium streaming packages with all your favorite channels and on-demand content.",
      image: homeInternetImg,
      features: ["4K Streaming", "Live TV", "On-Demand"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Work from Home Professional",
      content: "View Prime's fiber internet has been a game-changer for my remote work. Crystal clear video calls and instant file uploads!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mark Thompson",
      role: "Small Business Owner",
      content: "The business internet package is incredible. Our productivity has increased dramatically with the reliable connection.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      role: "Gaming Enthusiast",
      content: "Zero lag gaming with View Prime! The low latency and high speeds make online gaming a dream.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "99.9%", label: "Network Uptime", icon: Globe },
    { number: "24/7", label: "Expert Support", icon: Phone },
    { number: "1000", label: "Mbps Max Speed", icon: Zap }
  ];

  const faqs = [
    {
      question: "What internet speeds do you offer?",
      answer: "We offer a range of speeds from 100 Mbps to 1000 Mbps (1 Gig) to meet different needs and budgets. All plans include unlimited data with no caps or throttling."
    },
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-4 hours. Our certified technicians will schedule a convenient time and ensure your network is optimized before leaving."
    },
    {
      question: "Is there a data cap on your plans?",
      answer: "No! All View Prime internet plans come with unlimited data. Stream, game, and work without worrying about overage fees or speed throttling."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your service, we'll work to resolve any issues or provide a full refund."
    },
    {
      question: "Do you offer business internet solutions?",
      answer: "Yes! We provide dedicated business internet with SLA guarantees, priority support, and symmetric upload/download speeds perfect for businesses of all sizes."
    }
  ];

  const blogPosts = [
    {
      title: "Why Fiber Internet is the Future of Home Connectivity",
      excerpt: "Discover the advantages of fiber optic technology and how it's revolutionizing internet speeds and reliability for modern homes.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "fiber-internet-future-connectivity"
    },
    {
      title: "Home Office Setup: Optimizing Your Internet for Remote Work",
      excerpt: "Learn how to create the perfect home office setup with reliable internet that supports video calls, file sharing, and productivity.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      date: "March 10, 2024",
      readTime: "7 min read",
      slug: "home-office-internet-setup"
    },
    {
      title: "Gaming Without Lag: The Ultimate Internet Guide for Gamers",
      excerpt: "Explore how low latency and high-speed internet can transform your gaming experience and give you the competitive edge.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      date: "March 5, 2024",
      readTime: "6 min read",
      slug: "gaming-internet-guide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full text-purple-700 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Trusted by 50,000+ customers</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Journey to Better <span className="text-gradient">Connectivity</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded in 2015, View Prime started with a simple mission: provide fast, reliable internet 
                that actually works when you need it most. Today, we're proud to serve thousands of homes 
                and businesses with cutting-edge fiber technology.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "100% fiber optic network infrastructure",
                  "Local customer support team",
                  "Transparent pricing with no hidden fees",
                  "Community-focused service approach"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 stars from 2,500+ reviews</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src={homeInternetImg} 
                alt="View Prime team working on fiber installation" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">50,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete <span className="text-gradient">Internet Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From blazing-fast home internet to enterprise-grade business solutions, 
              we have the perfect plan for your connectivity needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full btn-glass text-purple-600 hover:bg-purple-50">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Lightning-Fast Internet?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've upgraded to View Prime's fiber network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Check Availability
              </button>
              <a href="#pricing" className="btn-glass">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real customers who've experienced the View Prime difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest <span className="text-gradient">News & Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends in internet technology and connectivity solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
          aria-label="Back to top"
        >
          <ArrowRight className="w-6 h-6 rotate-[-90deg] mx-auto" />
        </button>
      )}
    </div>
  );
};

export default Index;
