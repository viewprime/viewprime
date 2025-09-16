import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wifi, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
  ];

  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.pathname === '/' && window.location.hash === path.substring(1);
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-lg border-b border-purple-100 shadow-lg' 
          : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gradient">View Prime</h1>
              <p className="text-xs text-muted-foreground leading-none">Internet Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 hover:text-purple-600 ${
                  isActiveLink(item.path) 
                    ? 'text-purple-600' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
                {isActiveLink(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="tel:+1-855-847-7463" 
                className={`flex items-center space-x-1 transition-colors duration-300 hover:text-purple-600 ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>(855) 847-7463</span>
              </a>
            </div>
            <Link
              to="/#check-availability"
              className="btn-primary text-sm"
            >
              Check Availability
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-lg border-t border-purple-100">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  isActiveLink(item.path)
                    ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a 
                href="tel:+1-855-847-7463" 
                className="flex items-center space-x-2 py-2 px-4 text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>(855) 847-7463</span>
              </a>
              <Link
                to="/#check-availability"
                onClick={() => setIsMenuOpen(false)}
                className="block btn-primary text-center"
              >
                Check Availability
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;