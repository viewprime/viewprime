import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, AlertCircle, Scale } from 'lucide-react';

const Terms = () => {
  const lastUpdated = "March 1, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: [
        "By accessing and using View Prime's services, you accept and agree to be bound by these Terms & Conditions.",
        "If you do not agree to these terms, you may not access or use our services.",
        "We reserve the right to modify these terms at any time with notice to users."
      ]
    },
    {
      id: "services",
      title: "Description of Services",
      content: [
        "View Prime provides fiber internet, cable internet, and related telecommunications services.",
        "Service availability may vary by location and is subject to technical feasibility.",
        "We reserve the right to modify, suspend, or discontinue any service at any time."
      ]
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      content: [
        "Users must provide accurate and complete information when signing up for services.",
        "Users are responsible for maintaining the confidentiality of their account information.",
        "Users must comply with all applicable laws and regulations when using our services.",
        "Users must not use services for illegal activities or to harm others."
      ]
    },
    {
      id: "payment-billing",
      title: "Payment and Billing",
      content: [
        "All charges for services are due and payable in advance unless otherwise specified.",
        "Late payment fees may apply to overdue accounts as specified in your service agreement.",
        "You authorize us to charge your designated payment method for all applicable fees.",
        "Price changes will be communicated with at least 30 days advance notice."
      ]
    },
    {
      id: "service-level",
      title: "Service Level and Availability",
      content: [
        "We strive to provide reliable service but cannot guarantee 100% uptime.",
        "Scheduled maintenance windows may result in temporary service interruptions.",
        "Service credits may be available for extended outages as outlined in your service agreement.",
        "Actual speeds may vary based on network conditions and equipment limitations."
      ]
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use Policy",
      content: [
        "Services may not be used for illegal activities, spam, or malicious software distribution.",
        "Excessive bandwidth usage that impacts other users may result in service limitations.",
        "Users may not resell or redistribute services without explicit written permission.",
        "Any activity that damages our network or equipment is strictly prohibited."
      ]
    },
    {
      id: "privacy-data",
      title: "Privacy and Data Protection",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for details on data collection and use.",
        "We may monitor network traffic for security and performance optimization purposes.",
        "Personal information will be protected in accordance with applicable privacy laws.",
        "We do not sell your personal information to third parties for marketing purposes."
      ]
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: [
        "Our liability for service interruptions is limited to service credits as outlined in your agreement.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "Total liability for any claim shall not exceed the amount paid for services in the preceding month.",
        "Some jurisdictions do not allow limitation of liability, so these limits may not apply to you."
      ]
    },
    {
      id: "termination",
      title: "Termination",
      content: [
        "Either party may terminate services with appropriate notice as specified in your service agreement.",
        "We may terminate services immediately for violation of these terms or non-payment.",
        "Upon termination, you remain responsible for all charges incurred up to the termination date.",
        "Equipment must be returned in good condition or replacement fees will apply."
      ]
    },
    {
      id: "governing-law",
      title: "Governing Law and Disputes",
      content: [
        "These terms are governed by the laws of the jurisdiction where services are provided.",
        "Disputes will be resolved through binding arbitration unless otherwise specified.",
        "Class action lawsuits are waived except where prohibited by law.",
        "Any legal proceedings must be brought within one year of the occurrence of the dispute."
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
              <FileText className="w-4 h-4" />
              <span>Terms & Conditions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Terms & Conditions
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
              Please read these terms carefully before using our services. These terms govern 
              your relationship with View Prime Internet Solutions.
            </p>

            <p className="text-white/80">
              Last updated: <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Legal Notice</h3>
                <p className="text-yellow-700 leading-relaxed">
                  These terms constitute a legally binding agreement between you and View Prime Internet Solutions. 
                  By using our services, you agree to these terms. If you do not agree, please discontinue use of our services.
                </p>
              </div>
            </div>
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

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These Terms and Conditions ("Terms") govern your use of internet and telecommunications 
                    services provided by View Prime Internet Solutions ("View Prime," "we," "us," or "our"). 
                    These Terms constitute a binding legal agreement between you and View Prime.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These Terms apply to all users of our services, including but not limited to residential 
                    internet customers, business internet customers, and website visitors. Specific service 
                    agreements may contain additional terms that supplement these general terms.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By signing up for our services, accessing our website, or using any of our products, 
                    you acknowledge that you have read, understood, and agree to be bound by these Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
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

            {/* Additional Legal Information */}
            <div className="mt-16 space-y-8">
              
              {/* Severability */}
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-start space-x-4 mb-4">
                  <Scale className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-gray-900">Severability and Enforcement</h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-12">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision 
                  will be limited or eliminated to the minimum extent necessary so that these Terms will 
                  otherwise remain in full force and effect. The failure of View Prime to enforce any 
                  right or provision of these Terms will not be deemed a waiver of such right or provision.
                </p>
              </div>

              {/* Entire Agreement */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Entire Agreement</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms, together with any specific service agreements you may have with View Prime, 
                  constitute the entire agreement between you and View Prime regarding the use of our services. 
                  These Terms supersede all prior or contemporaneous communications and proposals between you and View Prime.
                </p>
              </div>

              {/* Contact for Legal Questions */}
              <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms & Conditions, please contact our legal department:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong className="text-gray-900">Email:</strong><br />
                    <a href="mailto:legal@viewprime.com" className="text-purple-600 hover:text-purple-700">
                      legal@viewprime.com
                    </a>
                  </div>
                  <div>
                    <strong className="text-gray-900">Phone:</strong><br />
                    <a href="tel:1-800-VIEW-PRIME" className="text-purple-600 hover:text-purple-700">
                      (800) VIEW-PRIME
                    </a>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white/70 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Legal Department</strong><br />
                    View Prime Internet Solutions<br />
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

export default Terms;