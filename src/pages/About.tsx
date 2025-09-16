import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Heart, Award, ArrowRight, CheckCircle } from 'lucide-react';
import aboutTeamImg from '@/assets/about-team.jpg';

const About = () => {
  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a vision to bring fiber internet to underserved communities."
    },
    {
      year: "2017",
      title: "First 1,000 Customers",
      description: "Reached our first milestone and expanded our fiber network infrastructure."
    },
    {
      year: "2019",
      title: "Business Solutions Launch",
      description: "Introduced dedicated business internet packages with SLA guarantees."
    },
    {
      year: "2021",
      title: "50,000 Customers",
      description: "Became the leading fiber provider in the region with award-winning service."
    },
    {
      year: "2024",
      title: "Next-Gen Technology",
      description: "Launching 10-Gig speeds and smart home integration services."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Reliability First",
      description: "We prioritize network stability and consistent performance above all else."
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "Every decision we make is guided by what's best for our customers."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We're committed to strengthening the communities we serve."
    },
    {
      icon: Award,
      title: "Innovation Leader",
      description: "Continuously investing in cutting-edge technology and infrastructure."
    }
  ];

  const leadership = [
    {
      name: "Sarah Mitchell",
      role: "Chief Executive Officer",
      bio: "15+ years in telecommunications, former VP at major ISP",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Network infrastructure expert with extensive fiber deployment experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Customer Experience",
      bio: "Dedicated to delivering exceptional customer service and support",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Johnson",
      role: "VP Engineering",
      bio: "Leading our technical team to build the most advanced network infrastructure",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const partners = [
    "Cisco", "Juniper", "Nokia", "Corning", "CommScope", "Adtran"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutTeamImg} 
            alt="View Prime team working together" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-600/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center min-h-screen py-20">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white/90 text-sm font-medium">
                <Users className="w-4 h-4" />
                <span>About View Prime</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Connecting Communities with 
                <span className="block text-gradient mt-2">Purpose & Innovation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Since 2015, we've been on a mission to bring reliable, high-speed fiber internet 
                to homes and businesses. Our commitment to excellence drives everything we do.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#our-story" className="btn-primary group text-lg px-8 py-4">
                  <span>Our Story</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#team" className="btn-secondary group text-lg px-8 py-4">
                  <span>Meet the Team</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section id="our-story" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading fiber internet provider, here's how we've grown 
              while staying true to our core mission.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-purple-200"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`glass-card p-6 rounded-xl ml-16 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:mr-8 lg:w-5/12' : 'lg:ml-8 lg:w-5/12'
                  }`}>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Mission & Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe everyone deserves access to fast, reliable internet. These core values 
              guide our commitment to exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in 
              telecommunications, technology, and customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                <div className="text-purple-600 font-medium mb-3">{leader.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted <span className="text-gradient">Technology Partners</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with industry leaders to deliver the most reliable network infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="glass-card px-6 py-4 rounded-lg text-gray-600 font-medium hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the View Prime Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with a company that truly cares about 
              your connectivity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#check-availability" className="btn-secondary">
                <span>Check Availability</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/#contact" className="btn-glass">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;