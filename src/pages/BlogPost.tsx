import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, this would fetch the post data based on the slug
  const getPostData = (slug: string) => {
    const posts = {
      'fiber-internet-future-connectivity': {
        title: "Why Fiber Internet is the Future of Home Connectivity",
        excerpt: "Discover the advantages of fiber optic technology and how it's revolutionizing internet speeds and reliability for modern homes.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
        author: "Sarah Mitchell",
        date: "March 15, 2024",
        readTime: "5 min read",
        tags: ["Fiber", "Technology", "Home Internet"],
        content: `
          <p>In today's digital age, reliable internet connectivity isn't just a luxury—it's a necessity. As our homes become increasingly connected with smart devices, streaming services, and remote work requirements, the limitations of traditional broadband are becoming more apparent. Enter fiber optic internet: the gold standard for modern connectivity.</p>

          <h2>What Makes Fiber Internet Different?</h2>
          <p>Fiber optic internet uses thin strands of glass or plastic to transmit data using light signals. This fundamental difference from traditional copper-based connections (like DSL or cable) offers several key advantages:</p>

          <ul>
            <li><strong>Lightning-fast speeds:</strong> Fiber can deliver speeds up to 1000 Mbps (1 Gigabit) and beyond</li>
            <li><strong>Symmetrical upload/download:</strong> Unlike cable internet, fiber offers equal upload and download speeds</li>
            <li><strong>Minimal latency:</strong> Data travels at nearly the speed of light through fiber cables</li>
            <li><strong>Weather resistance:</strong> Fiber cables aren't affected by weather conditions like copper lines</li>
          </ul>

          <h2>The Smart Home Revolution</h2>
          <p>Modern homes are becoming increasingly connected. The average household now has over 25 connected devices, from smartphones and laptops to smart TVs, security cameras, and IoT devices. Each of these devices requires bandwidth, and traditional internet connections can quickly become overwhelmed.</p>

          <p>Fiber internet provides the backbone needed to support:</p>
          <ul>
            <li>Multiple 4K/8K streaming sessions simultaneously</li>
            <li>Cloud gaming and virtual reality experiences</li>
            <li>Smart home automation systems</li>
            <li>High-quality video conferencing for remote work</li>
            <li>Large file uploads and downloads</li>
          </ul>

          <h2>Remote Work and Productivity</h2>
          <p>The shift to remote work has highlighted the importance of reliable home internet. Video conferences, file sharing, and cloud-based applications all demand consistent, high-speed connectivity. Fiber internet eliminates the frustration of dropped calls, slow uploads, and buffering during important presentations.</p>

          <h2>Future-Proofing Your Home</h2>
          <p>Technology continues to evolve rapidly. What seems like adequate internet speed today may feel sluggish tomorrow. Fiber internet provides the capacity to handle emerging technologies like:</p>
          <ul>
            <li>Virtual and augmented reality applications</li>
            <li>AI-powered home assistants</li>
            <li>Advanced smart home systems</li>
            <li>Next-generation streaming and gaming platforms</li>
          </ul>

          <h2>Making the Switch</h2>
          <p>If you're considering upgrading to fiber internet, now is an excellent time. Fiber networks are expanding rapidly, and providers like View Prime are making installation more affordable and accessible than ever.</p>

          <p>The investment in fiber internet pays dividends in improved productivity, entertainment experiences, and overall quality of life. As we continue to rely more heavily on digital connectivity, fiber internet isn't just the future—it's the present necessity for modern homes.</p>
        `
      },
      'home-office-internet-setup': {
        title: "Home Office Setup: Optimizing Your Internet for Remote Work",
        excerpt: "Learn how to create the perfect home office setup with reliable internet that supports video calls, file sharing, and productivity tools.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
        author: "Michael Chen",
        date: "March 10, 2024",
        readTime: "7 min read",
        tags: ["Remote Work", "Home Office", "Productivity"],
        content: `
          <p>The rise of remote work has transformed our homes into professional workspaces. A reliable internet connection is the foundation of any successful home office. Here's your comprehensive guide to optimizing your internet setup for maximum productivity.</p>

          <h2>Understanding Your Internet Needs</h2>
          <p>Different remote work activities have varying bandwidth requirements:</p>

          <ul>
            <li><strong>Video conferencing:</strong> 1-4 Mbps for HD quality</li>
            <li><strong>File sharing:</strong> Higher upload speeds for cloud sync</li>
            <li><strong>VPN connections:</strong> Stable, low-latency connection</li>
            <li><strong>Multiple applications:</strong> Adequate bandwidth for multitasking</li>
          </ul>

          <h2>Router Placement and Wi-Fi Optimization</h2>
          <p>The location of your router significantly impacts your home office connectivity:</p>

          <ul>
            <li>Place the router in a central location, preferably elevated</li>
            <li>Avoid walls, metal objects, and electronic interference</li>
            <li>Consider a mesh network system for larger homes</li>
            <li>Use 5GHz band for less congested, faster connections</li>
          </ul>

          <h2>Wired vs. Wireless Connections</h2>
          <p>While Wi-Fi is convenient, a wired Ethernet connection offers several advantages for home offices:</p>

          <ul>
            <li>More stable connection with consistent speeds</li>
            <li>Lower latency for video calls and real-time applications</li>
            <li>Better security for sensitive work data</li>
            <li>No interference from other devices</li>
          </ul>

          <h2>Essential Home Office Internet Tools</h2>
          <p>Equip your home office with these connectivity essentials:</p>

          <ul>
            <li><strong>Quality Router:</strong> Invest in a business-grade router with advanced features</li>
            <li><strong>Ethernet Cables:</strong> Cat6 or Cat6a cables for future-proofing</li>
            <li><strong>Powerline Adapters:</strong> Alternative to running cables through walls</li>
            <li><strong>Backup Internet:</strong> Mobile hotspot for redundancy</li>
          </ul>

          <h2>Security Considerations</h2>
          <p>Working from home requires attention to network security:</p>

          <ul>
            <li>Use WPA3 encryption on your Wi-Fi network</li>
            <li>Change default router passwords</li>
            <li>Set up a guest network for visitors</li>
            <li>Keep router firmware updated</li>
            <li>Consider VPN for enhanced security</li>
          </ul>

          <h2>Troubleshooting Common Issues</h2>
          <p>Be prepared to handle common connectivity problems:</p>

          <ul>
            <li><strong>Slow speeds:</strong> Check for background downloads, reset router</li>
            <li><strong>Dropped calls:</strong> Switch to wired connection, check bandwidth usage</li>
            <li><strong>Intermittent connectivity:</strong> Update network drivers, check cable connections</li>
          </ul>

          <h2>Monitoring and Optimization</h2>
          <p>Regular monitoring helps maintain optimal performance:</p>

          <ul>
            <li>Use speed test tools to verify your connection</li>
            <li>Monitor data usage to identify bandwidth-heavy applications</li>
            <li>Schedule automatic updates during off-work hours</li>
            <li>Consider Quality of Service (QoS) settings to prioritize work traffic</li>
          </ul>

          <p>A well-optimized home office internet setup is an investment in your productivity and professional success. Take the time to properly configure your network, and you'll enjoy seamless remote work experiences.</p>
        `
      },
      'gaming-internet-guide': {
        title: "Gaming Without Lag: The Ultimate Internet Guide for Gamers",
        excerpt: "Explore how low latency and high-speed internet can transform your gaming experience and give you the competitive edge.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop",
        author: "Emily Rodriguez",
        date: "March 5, 2024",
        readTime: "6 min read",
        tags: ["Gaming", "Performance", "Technology"],
        content: `
          <p>In competitive gaming, milliseconds matter. The difference between victory and defeat often comes down to your internet connection's performance. Here's everything you need to know about optimizing your internet for the ultimate gaming experience.</p>

          <h2>Understanding Gaming Internet Requirements</h2>
          <p>Gaming internet needs differ significantly from general browsing or streaming:</p>

          <ul>
            <li><strong>Low Latency:</strong> More important than raw speed for most games</li>
            <li><strong>Stable Connection:</strong> Consistent performance prevents dropped connections</li>
            <li><strong>Upload Speed:</strong> Critical for real-time multiplayer communication</li>
            <li><strong>Jitter:</strong> Variations in latency can cause gameplay issues</li>
          </ul>

          <h2>The Science of Ping and Latency</h2>
          <p>Latency, measured in milliseconds (ms), is the time it takes for data to travel from your device to the game server and back:</p>

          <ul>
            <li><strong>Under 20ms:</strong> Excellent for competitive gaming</li>
            <li><strong>20-50ms:</strong> Good for most online games</li>
            <li><strong>50-100ms:</strong> Playable but may notice slight delays</li>
            <li><strong>Over 100ms:</strong> Noticeable lag affecting gameplay</li>
          </ul>

          <h2>Optimizing Your Gaming Setup</h2>
          <p>Several factors influence your gaming internet performance:</p>

          <h3>1. Connection Type</h3>
          <ul>
            <li><strong>Fiber:</strong> Best option with low latency and high speeds</li>
            <li><strong>Cable:</strong> Good speeds but higher latency than fiber</li>
            <li><strong>DSL:</strong> Limited speeds and higher latency</li>
            <li><strong>Satellite:</strong> High latency makes competitive gaming difficult</li>
          </ul>

          <h3>2. Wired vs. Wireless</h3>
          <p>For serious gaming, a wired Ethernet connection is essential:</p>
          <ul>
            <li>Consistent latency without wireless interference</li>
            <li>Maximum bandwidth utilization</li>
            <li>No packet loss from Wi-Fi congestion</li>
          </ul>

          <h3>3. Router Configuration</h3>
          <ul>
            <li>Enable Gaming Mode or Game Accelerator features</li>
            <li>Configure Quality of Service (QoS) to prioritize gaming traffic</li>
            <li>Use gaming-specific routers with advanced features</li>
            <li>Position router for optimal signal strength</li>
          </ul>

          <h2>Advanced Gaming Optimizations</h2>
          <p>Take your gaming performance to the next level:</p>

          <h3>Port Forwarding and UPnP</h3>
          <p>Open the necessary ports for your games to improve connection quality and reduce NAT-related issues.</p>

          <h3>DNS Optimization</h3>
          <p>Use faster DNS servers like Cloudflare (1.1.1.1) or Google (8.8.8.8) for quicker name resolution.</p>

          <h3>Gaming VPN Considerations</h3>
          <p>While VPNs typically increase latency, gaming VPNs can sometimes provide better routes to game servers.</p>

          <h2>Troubleshooting Gaming Lag</h2>
          <p>Common causes and solutions for gaming lag:</p>

          <ul>
            <li><strong>Background downloads:</strong> Pause updates and downloads while gaming</li>
            <li><strong>Network congestion:</strong> Game during off-peak hours when possible</li>
            <li><strong>Outdated hardware:</strong> Upgrade routers and network adapters</li>
            <li><strong>ISP throttling:</strong> Contact your provider about gaming optimization</li>
          </ul>

          <h2>Game-Specific Optimizations</h2>
          <p>Different genres have varying requirements:</p>

          <ul>
            <li><strong>FPS Games:</strong> Prioritize low latency over high bandwidth</li>
            <li><strong>MMORPGs:</strong> Balance latency and stability for large-scale battles</li>
            <li><strong>Racing Games:</strong> Extremely low latency for precise timing</li>
            <li><strong>Streaming Games:</strong> High download speeds for cloud gaming platforms</li>
          </ul>

          <h2>Future of Gaming Internet</h2>
          <p>Emerging technologies are reshaping gaming connectivity:</p>

          <ul>
            <li><strong>5G Networks:</strong> Low-latency mobile gaming</li>
            <li><strong>Edge Computing:</strong> Game servers closer to players</li>
            <li><strong>Cloud Gaming:</strong> High-bandwidth streaming requirements</li>
            <li><strong>Wi-Fi 6E:</strong> Improved wireless gaming performance</li>
          </ul>

          <p>Investing in quality internet infrastructure isn't just about faster downloads—it's about gaining a competitive edge in the games you love. With the right setup and optimizations, you can minimize lag and maximize your gaming potential.</p>
        `
      },
      'smart-home-internet-iot': {
        title: "Smart Home Integration: How Fast Internet Powers IoT Devices",
        excerpt: "Understanding how reliable internet connectivity is essential for smart home devices, from security cameras to voice assistants.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
        author: "David Johnson",
        date: "February 28, 2024",
        readTime: "8 min read",
        tags: ["Smart Home", "IoT", "Technology"],
        content: `
          <p>The Internet of Things (IoT) has transformed our homes into intelligent ecosystems where devices communicate, automate, and enhance our daily lives. But behind every smart home success story is a robust internet connection that powers this technological symphony.</p>

          <h2>The Smart Home Connectivity Landscape</h2>
          <p>Today's smart homes feature an impressive array of connected devices:</p>

          <ul>
            <li><strong>Security Systems:</strong> Cameras, door locks, motion sensors</li>
            <li><strong>Climate Control:</strong> Smart thermostats, air quality monitors</li>
            <li><strong>Entertainment:</strong> Smart TVs, streaming devices, multi-room audio</li>
            <li><strong>Appliances:</strong> Refrigerators, washing machines, robotic vacuums</li>
            <li><strong>Lighting:</strong> Smart bulbs, switches, and automated systems</li>
            <li><strong>Voice Assistants:</strong> Smart speakers and displays</li>
          </ul>

          <h2>Bandwidth Requirements for IoT Devices</h2>
          <p>Different smart home devices have varying internet requirements:</p>

          <h3>Low Bandwidth Devices (1-5 Mbps)</h3>
          <ul>
            <li>Smart thermostats and sensors</li>
            <li>Smart plugs and switches</li>
            <li>Voice assistants (for commands)</li>
            <li>Smart door locks</li>
          </ul>

          <h3>Medium Bandwidth Devices (5-25 Mbps)</h3>
          <ul>
            <li>Smart speakers with music streaming</li>
            <li>Basic security cameras</li>
            <li>Smart displays</li>
            <li>Home automation hubs</li>
          </ul>

          <h3>High Bandwidth Devices (25+ Mbps)</h3>
          <ul>
            <li>4K security cameras</li>
            <li>Smart TVs streaming 4K content</li>
            <li>Video doorbells</li>
            <li>Multiple simultaneous streams</li>
          </ul>

          <h2>Network Architecture for Smart Homes</h2>
          <p>A well-designed network architecture is crucial for smart home success:</p>

          <h3>Mesh Network Systems</h3>
          <p>Mesh networks provide comprehensive coverage for smart homes:</p>
          <ul>
            <li>Eliminate dead zones throughout the house</li>
            <li>Automatically route traffic for optimal performance</li>
            <li>Easy expansion as your smart home grows</li>
            <li>Seamless device handoffs between access points</li>
          </ul>

          <h3>Network Segmentation</h3>
          <p>Separate your smart home devices for security and performance:</p>
          <ul>
            <li>Create isolated networks for IoT devices</li>
            <li>Protect sensitive devices from security breaches</li>
            <li>Manage bandwidth allocation effectively</li>
            <li>Simplify troubleshooting network issues</li>
          </ul>

          <h2>Reliability and Redundancy</h2>
          <p>Smart home systems require consistent connectivity:</p>

          <h3>Internet Redundancy</h3>
          <ul>
            <li>Backup internet connections for critical systems</li>
            <li>Cellular backup for security cameras</li>
            <li>Local processing capabilities when internet fails</li>
            <li>Battery backup for network equipment</li>
          </ul>

          <h3>Device Reliability</h3>
          <ul>
            <li>Choose devices with offline functionality</li>
            <li>Implement local control systems</li>
            <li>Regular firmware updates for stability</li>
            <li>Monitor device health and connectivity</li>
          </ul>

          <h2>Security Considerations</h2>
          <p>Smart home security extends beyond device security to network protection:</p>

          <h3>Network Security Best Practices</h3>
          <ul>
            <li>Use WPA3 encryption on all wireless networks</li>
            <li>Change default passwords on all devices</li>
            <li>Enable automatic security updates</li>
            <li>Monitor network traffic for unusual activity</li>
            <li>Implement network access control (NAC)</li>
          </ul>

          <h3>Device Security Management</h3>
          <ul>
            <li>Regular security audits of connected devices</li>
            <li>Disable unnecessary features and services</li>
            <li>Use strong, unique passwords for each device</li>
            <li>Enable two-factor authentication where available</li>
          </ul>

          <h2>Future-Proofing Your Smart Home Network</h2>
          <p>Prepare your network for evolving smart home technologies:</p>

          <h3>Emerging Technologies</h3>
          <ul>
            <li><strong>Wi-Fi 6E and Wi-Fi 7:</strong> Next-generation wireless standards</li>
            <li><strong>Matter Standard:</strong> Universal smart home interoperability</li>
            <li><strong>Edge Computing:</strong> Local processing for faster response times</li>
            <li><strong>5G Integration:</strong> Enhanced mobile connectivity options</li>
          </ul>

          <h3>Scalability Planning</h3>
          <ul>
            <li>Choose expandable network infrastructure</li>
            <li>Plan for increased bandwidth requirements</li>
            <li>Consider professional installation for complex setups</li>
            <li>Budget for regular technology updates</li>
          </ul>

          <h2>Common Smart Home Connectivity Issues</h2>
          <p>Troubleshoot common problems with these solutions:</p>

          <h3>Device Connection Problems</h3>
          <ul>
            <li>Check Wi-Fi signal strength at device locations</li>
            <li>Verify network credentials and security settings</li>
            <li>Restart devices and network equipment</li>
            <li>Update device firmware and mobile apps</li>
          </ul>

          <h3>Performance Issues</h3>
          <ul>
            <li>Monitor bandwidth usage and upgrade if necessary</li>
            <li>Optimize QoS settings for critical devices</li>
            <li>Check for interference from other electronics</li>
            <li>Consider additional access points for coverage</li>
          </ul>

          <h2>Choosing the Right Internet Plan</h2>
          <p>Select an internet plan that supports your smart home ambitions:</p>

          <ul>
            <li><strong>Small Smart Home (10-20 devices):</strong> 100-200 Mbps</li>
            <li><strong>Medium Smart Home (20-40 devices):</strong> 200-500 Mbps</li>
            <li><strong>Large Smart Home (40+ devices):</strong> 500+ Mbps</li>
            <li><strong>Upload Speed:</strong> At least 10-25 Mbps for security cameras</li>
          </ul>

          <p>A reliable, high-speed internet connection is the foundation that makes smart home magic possible. By understanding your devices' needs and planning your network accordingly, you can create a seamless, intelligent home environment that enhances your daily life.</p>
        `
      }
    };

    return posts[slug as keyof typeof posts] || null;
  };

  const post = getPostData(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = [
    {
      title: "Best Internet Plans for Small Businesses",
      slug: "business-internet-plans",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop"
    },
    {
      title: "Understanding Internet Speed vs. Bandwidth",
      slug: "internet-speed-bandwidth",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Article Title Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="inline-flex items-center space-x-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-white/90">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{
                      lineHeight: '1.8',
                      fontSize: '1.125rem'
                    }}
                  />
                </div>

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <a 
                      href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </a>
                    
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </a>
                    
                    <a 
                      href={`https://linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 glass-card p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Upgrade Your Internet?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Experience the difference with View Prime's fiber internet solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/#check-availability" className="btn-primary">
                      Check Availability
                    </Link>
                    <Link to="/about" className="btn-secondary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/4 space-y-8">
                
                {/* Related Articles */}
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <Link 
                        key={index}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                              {relatedPost.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest internet tips and technology news delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                    />
                    <button type="submit" className="w-full btn-primary text-sm py-2">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;