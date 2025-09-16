import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RefreshCw, Clock, CheckCircle, Mail, Phone } from 'lucide-react';

const Refund = () => {
  const lastUpdated = "March 1, 2024";

  const refundTimeline = [
    {
      step: 1,
      title: "Contact Customer Service",
      description: "Reach out to our support team within the refund period",
      timeframe: "Within refund window"
    },
    {
      step: 2,
      title: "Request Review",
      description: "Our team reviews your refund request and account details",
      timeframe: "1-2 business days"
    },
    {
      step: 3,
      title: "Equipment Return",
      description: "Return any leased equipment in good condition",
      timeframe: "14 days after approval"
    },
    {
      step: 4,
      title: "Refund Processing",
      description: "Approved refunds are processed to your original payment method",
      timeframe: "5-7 business days"
    }
  ];

  const services = [
    {
      service: "Residential Internet Plans",
      refundPeriod: "30 days",
      conditions: [
        "Full refund of monthly service charges",
        "Installation fees may be refunded if service is cancelled within 7 days",
        "Equipment must be returned in original condition"
      ]
    },
    {
      service: "Business Internet Plans",
      refundPeriod: "30 days",
      conditions: [
        "Pro-rated refund based on usage period",
        "Setup and installation fees are non-refundable after 7 days",
        "Early termination fees may apply to contract customers"
      ]
    },
    {
      service: "Equipment Purchases",
      refundPeriod: "14 days",
      conditions: [
        "Equipment must be in original packaging",
        "All accessories and documentation must be included",
        "Custom or configured equipment may not be returnable"
      ]
    },
    {
      service: "Installation Services",
      refundPeriod: "7 days",
      conditions: [
        "Refundable if service cannot be properly installed",
        "Customer satisfaction guarantee applies",
        "Repeat visits due to customer changes are billable"
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
              <RefreshCw className="w-4 h-4" />
              <span>Refund Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hassle-Free Refund Policy
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
              We stand behind our services with a comprehensive refund policy designed to ensure 
              your complete satisfaction with View Prime.
            </p>

            <p className="text-white/80">
              Last updated: <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">30-Day Satisfaction Guarantee</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Try our services risk-free! If you're not completely satisfied within the first 30 days, 
                we'll provide a full refund of your monthly service charges.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">30 Days</div>
                  <div className="text-gray-600">Risk-free trial</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600">Money back guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Simple <span className="text-gradient">Refund Process</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our streamlined refund process ensures quick and fair resolution of your request.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {refundTimeline.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                      {item.step}
                    </div>
                    {item.step < refundTimeline.length && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-purple-200 -translate-y-1/2"></div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="inline-flex items-center space-x-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{item.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific Refund Policies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Refund Policies by <span className="text-gradient">Service Type</span>
              </h2>
              <p className="text-xl text-gray-600">
                Different services have specific refund terms designed to be fair and reasonable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.service}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.refundPeriod}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.conditions.map((condition, conditionIndex) => (
                      <li key={conditionIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Important <span className="text-gradient">Refund Information</span>
            </h2>

            <div className="space-y-8">
              
              {/* Eligibility */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Eligibility</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Refund requests must be made within the specified timeframe for each service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Account must be in good standing with no outstanding balances</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>All leased equipment must be returned in good working condition</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Service cancellation must be requested through proper channels</span>
                  </li>
                </ul>
              </div>

              {/* Non-Refundable Items */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Non-Refundable Charges</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Third-party service charges and taxes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Custom installation work beyond standard setup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Services used beyond the refund period</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Damaged or missing equipment replacement costs</span>
                  </li>
                </ul>
              </div>

              {/* Processing Time */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Processing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Processing Timeline</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>Credit card refunds: 5-7 business days</li>
                      <li>Bank transfer refunds: 7-10 business days</li>
                      <li>Check refunds: 10-14 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Refund Method</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>Refunds issued to original payment method</li>
                      <li>Alternative methods require approval</li>
                      <li>Processing fees may apply to check refunds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Refunds */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl border border-purple-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to Request a Refund?</h2>
                <p className="text-xl text-gray-600">
                  Our customer service team is here to help with your refund request.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak with a customer service representative</p>
                  <a 
                    href="tel:+1-833-840-2117" 
                    className="btn-primary inline-flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (833) 840-2117
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us your refund request details</p>
                  <a 
                    href="mailto:refunds@viewprime.com" 
                    className="btn-secondary inline-flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    refunds@viewprime.com
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/70 rounded-lg text-center">
                <p className="text-sm text-gray-600">
                  <strong>Customer Service Hours:</strong><br />
                  Monday - Friday: 8:00 AM - 8:00 PM<br />
                  Saturday - Sunday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refund;