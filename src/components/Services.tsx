import React, { useState } from 'react';
import { TrendingUp, Shield, PieChart, Briefcase} from 'lucide-react';
import Modal from './ui/Modal';
import { HandCoins } from 'lucide-react';
import { ReceiptIcon } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { Gem } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Mutual Fund Advisory",
      description: "Expert guidance on mutual fund investments tailored to your risk profile and goals.",
      fullContent: `Our Mutual Fund Advisory service provides comprehensive guidance for your investment journey. We offer:
        • Personalized portfolio construction based on your risk profile
        • Regular portfolio monitoring and rebalancing
        • Tax-efficient investment strategies
        • Access to exclusive mutual fund schemes
        • Quarterly performance reviews
        • Goal-based investment planning`
    },
    {
      icon: <PieChart className="w-12 h-12 text-blue-600" />,
      title: "Personal Finance And Tax Planning",
      description: "Comprehensive financial planning to secure your future and achieve your dreams.",
      fullContent: `Our Personal Finance Planning service helps you create a robust financial foundation:
        • Detailed analysis of your current financial situation
        • Custom budget planning and expense tracking
        • Emergency fund planning
        • Debt management strategies
        • Investment allocation recommendations
        • Regular financial health check-ups`
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Insurance Solutions",
      description: "Protection strategies to safeguard your family's financial future.",
      fullContent: `Comprehensive Insurance Solutions to protect what matters most:
        • Life insurance policy analysis and recommendations
        • Health insurance coverage optimization
        • Critical illness protection planning
        • Term insurance guidance
        • Family floater policy advice
        • Regular policy reviews and updates`
    },
    {
      icon: <HandCoins className="w-12 h-12 text-blue-600" />,
      title: "Stock Broking",
      description: "Expert guidance for building a diversified stock portfolio to maximize returns.",
      fullContent: `Our Stock Investment service focuses on empowering clients with informed decisions:
        • Providing stock broking solutions through trading platform.
        • Application for direct stock investing.`
    },

    {
      icon: <ReceiptIcon className="w-12 h-12 text-blue-600" />,
      title: "Unlisted Shares",
      description: "Access to high-potential investments in unlisted companies for strategic growth.",
      fullContent: `Our Unlisted Shares service provides unique investment opportunities:
        • In-depth analysis of private companies
        • Guidance on valuation and investment timing
        • Access to exclusive investment rounds
        • Risk assessment and management strategies
        • Portfolio diversification through alternative assets
        • Ongoing monitoring and reporting of investments`
    },

    {
      icon: <Wallet className="w-12 h-12 text-blue-600" />,
      title: "PMS and AIFs",
      description: "Professional management of portfolios through Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs).",
      fullContent: `Our PMS and AIFs service offers tailored investment solutions:
        • Offering PMS and AIF products.
        • Distributing products based on client requirements.
        • Tailoring solutions to risk appetite for long-term wealth creation.`
    },

    {
      icon: <Gem className="w-12 h-12 text-blue-600" />,
      title: "Bonds Advisory",
      description: "Stable income generation through strategic bond investments.",
      fullContent: `Our Bonds service focuses on providing reliable fixed-income solutions:
        • Analysis of government and corporate bonds
        • Interest rate risk assessment and management
        • Laddering strategies to optimize yield
        • Tax-efficient bond investing options
        • Regular portfolio reviews to adjust for market changes
        • Education on bond market dynamics and trends`
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button 
                onClick={() => setSelectedService(service)}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="prose max-w-none">
            <div className="flex items-center mb-6">
              {selectedService.icon}
              <h3 className="text-2xl font-semibold ml-4">{selectedService.title}</h3>
            </div>
            <div className="whitespace-pre-line text-gray-600">
              {selectedService.fullContent}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Services;
