import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Tag, Clock, ArrowRight, Filter } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Why Fiber Internet is the Future of Home Connectivity",
      slug: "fiber-internet-future-connectivity",
      excerpt: "Discover the advantages of fiber optic technology and how it's revolutionizing internet speeds and reliability for modern homes. Learn why fiber is the gold standard for internet connectivity.",
      content: "Full article content here...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      author: "Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["Fiber", "Technology", "Home Internet"],
      featured: true
    },
    {
      id: 2,
      title: "Home Office Setup: Optimizing Your Internet for Remote Work",
      slug: "home-office-internet-setup",
      excerpt: "Learn how to create the perfect home office setup with reliable internet that supports video calls, file sharing, and productivity tools without interruption.",
      content: "Full article content here...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      tags: ["Remote Work", "Home Office", "Productivity"],
      featured: false
    },
    {
      id: 3,
      title: "Gaming Without Lag: The Ultimate Internet Guide for Gamers",
      slug: "gaming-internet-guide",
      excerpt: "Explore how low latency and high-speed internet can transform your gaming experience and give you the competitive edge in online gaming.",
      content: "Full article content here...",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      tags: ["Gaming", "Performance", "Technology"],
      featured: false
    },
    {
      id: 4,
      title: "Smart Home Integration: How Fast Internet Powers IoT Devices",
      slug: "smart-home-internet-iot",
      excerpt: "Understanding how reliable internet connectivity is essential for smart home devices, from security cameras to voice assistants and automation systems.",
      content: "Full article content here...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      author: "David Johnson",
      date: "February 28, 2024",
      readTime: "8 min read",
      tags: ["Smart Home", "IoT", "Technology"],
      featured: true
    }
  ];

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.some(tag => 
      tag.toLowerCase() === selectedTag.toLowerCase()
    );
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || searchTerm || selectedTag !== 'all');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-600 to-purple-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Internet Insights & 
              <span className="block text-white/90 mt-2">Technology News</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Stay informed with the latest trends in internet technology, connectivity solutions, 
              and digital lifestyle tips from our experts.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                      className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none bg-white"
                    >
                      {allTags.map(tag => (
                        <option key={tag} value={tag}>
                          {tag === 'all' ? 'All Topics' : tag}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && !searchTerm && selectedTag === 'all' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured <span className="text-gradient">Article</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <article className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="lg:flex">
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map(tag => (
                        <span 
                          key={tag}
                          className="inline-flex items-center space-x-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>By {featuredPost.author}</span>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center space-x-2 text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300 group/link"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {searchTerm || selectedTag !== 'all' ? 'Search Results' : 'Latest'} <span className="text-gradient">Articles</span>
            </h2>
            {filteredPosts.length === 0 && (
              <p className="text-gray-600">No articles found matching your criteria.</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <article 
                key={post.id} 
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center space-x-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300 group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          {filteredPosts.length > 6 && (
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;