import { Link } from 'react-router-dom';
import { Wifi, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/#services' },
    { label: 'Pricing', path: '/#pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/#contact' },
  ];

  const services = [
    { label: 'Fiber Internet', path: '/#services' },
    { label: 'Home Wi-Fi Setup', path: '/#services' },
    { label: 'Business Internet', path: '/#services' },
    { label: 'TV & Streaming', path: '/#services' },
    { label: 'Technical Support', path: '/#contact' },
    { label: 'Speed Test', path: '/#speed-test' },
  ];

  const legal = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Refund Policy', path: '/refund' },
    { label: 'Service Agreement', path: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Wifi className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gradient">View Prime</h2>
                <p className="text-sm text-gray-400 leading-none">Internet Solutions</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Delivering fast, reliable internet solutions for homes and businesses. 
              Experience the future of connectivity with View Prime.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+18558477463" 
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>(855) 847-7463</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Legal & Support</h3>
            <ul className="space-y-3 mb-8">
              {legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} View Prime Internet Solutions. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-purple-400 transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-purple-400 transition-colors duration-300">
                Terms
              </Link>
              <Link to="/refund" className="hover:text-purple-400 transition-colors duration-300">
                Refund Policy
              </Link>
              <span>Made with ❤️ for fast internet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;