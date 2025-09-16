import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "March 1, 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you create an account, sign up for our services, or contact us for support.",
        "Personal information may include your name, email address, phone number, billing address, and payment information.",
        "We automatically collect certain information about your device and usage when you access our services."
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our internet services",
        "To process transactions and send related information",
        "To communicate with you about our services, including customer support",
        "To detect, investigate, and prevent fraudulent transactions and other illegal activities"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
        "We may share information with service providers who assist us in operating our services.",
        "We may disclose information if required by law or to protect our rights and the rights of our users."
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information.",
        "All sensitive information is transmitted via Secure Socket Layer (SSL) technology.",
        "Your information is stored on secure servers with restricted access."
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can opt out of receiving promotional communications from us.",
        "You may request a copy of the personal information we hold about you."
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Similar Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our website.",
        "You can set your browser to refuse cookies, but some features may not function properly.",
        "We use analytics services to help us understand how our website is used."
      ]
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: [
        "Our services are not intended for children under 13 years of age.",
        "We do not knowingly collect personal information from children under 13.",
        "If we learn we have collected information from a child under 13, we will delete it immediately."
      ]
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
        "We will notify you of any material changes by posting the new policy on this page and updating the 'Last Updated' date.",
        "Your continued use of our services after changes constitutes acceptance of the updated policy."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 to-purple-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Privacy Matters to Us
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
              We are committed to protecting your personal information and being transparent about 
              how we collect, use, and share your data.
            </p>

            <p className="text-white/80">
              Last updated: <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="glass-card p-4 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium group-hover:bg-purple-600 group-hover:text-white transition-all">
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                      {section.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    View Prime Internet Solutions ("we," "our," or "us") respects your privacy and is committed to protecting 
                    your personal data. This privacy policy will inform you about how we look after your personal data 
                    when you visit our website or use our services.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This policy applies to all users of our internet services, website visitors, and anyone who 
                    interacts with our company. Please read this policy carefully to understand our views and 
                    practices regarding your personal data.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By using our services or visiting our website, you acknowledge that you have read and understood 
                    this privacy policy and agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="glass-card p-8 rounded-2xl">
                    <div className="flex items-start space-x-4 mb-6">
                      <span className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 text-white rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    
                    <div className="ml-16">
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start space-x-3">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-16">
              <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Your Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this privacy policy or how we handle 
                  your personal data, please don't hesitate to contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email Us</div>
                      <a href="mailto:privacy@viewprime.com" className="text-purple-600 hover:text-purple-700">
                        privacy@viewprime.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Call Us</div>
                      <a href="tel:1-800-VIEW-PRIME" className="text-purple-600 hover:text-purple-700">
                        (800) VIEW-PRIME
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/70 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Mailing Address:</strong><br />
                    View Prime Internet Solutions<br />
                    Privacy Department<br />
                    123 Technology Drive<br />
                    Innovation City, IC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;