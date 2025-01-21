import React, { useState } from 'react';
import { BookOpen, Calculator } from 'lucide-react';
import SIPCalculator from './calculators/SIPCalculator';
import RetirementCalculator from './calculators/RetirementCalculator';
import TaxCalculator from './calculators/TaxCalculator';
import Modal from './ui/Modal';

interface BlogPost {
  title: string;
  content: string;
  created_at: string;
  profiles: { email: string };
}

interface ResourceItem {
  label: string;
  onClick: () => void;
}

const Resources: React.FC = () => {
  const [isSIPCalculatorOpen, setIsSIPCalculatorOpen] = useState(false);
  const [isRetirementCalculatorOpen, setIsRetirementCalculatorOpen] = useState(false);
  const [isTaxCalculatorOpen, setIsTaxCalculatorOpen] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [blogPosts] = useState<BlogPost[]>([
    {
      title: "The Necessity of Financial Consultancy in a Rapidly Evolving Digital Landscape",
      content: "In today's fast-paced financial environment, the role of financial consultancy has become increasingly critical. As we enter 2025, the financial services sector is undergoing significant transformations driven by digital advancements and changing consumer expectations. Financial consultants are essential in guiding organizations through these changes, ensuring they adapt to new technologies and regulatory requirements.",
      created_at: new Date().toISOString(),
      profiles: { email: "WealthVate" }
    },
    {
      title: "Adapting to Financial Inclusion: The Role of Consultancy",
      content: "As financial inclusion takes center stage in 2025, the demand for consultancy services that focus on equitable access to financial resources is growing. Financial consultants are uniquely positioned to assist institutions in developing strategies that cater to underserved populations.",
      created_at: new Date().toISOString(),
      profiles: { email: "WealthVate" }
    },
    {
      title: "The Importance of Strategic Planning in Financial Consultancy",
      content: "In an era characterized by uncertainty and rapid change, strategic planning is paramount for financial institutions. Consultants are essential in helping organizations formulate robust strategies that address both current challenges and future opportunities. Market Analysis and Forecasting: Consultants provide valuable insights into market trends, enabling organizations to make informed decisions about product offerings and service enhancements4. This foresight is crucial for staying ahead of competitors. Risk Management Frameworks: As geopolitical risks and regulatory scrutiny increase, financial consultants can assist firms in developing comprehensive risk management strategies that protect assets while ensuring compliance with evolving regulations9. Technology Integration: With the growing importance of AI and digital tools in finance, consultants can guide institutions on integrating these technologies into their operations effectively, enhancing efficiency and customer satisfaction.",
      created_at: new Date().toISOString(),
      profiles: { email: "WealthVate" }
    }
  ]);

  const resources = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Latest Blog Posts",
      items: blogPosts.map(post => ({
        label: post.title.split(' ').slice(0, 5).join(' '), // Show only the first 5 words of the title
        onClick: () => setSelectedBlogPost(post)
      }))
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Financial Calculators",
      items: [
        { label: "SIP Calculator", onClick: () => setIsSIPCalculatorOpen(true) },
        { label: "Retirement Planning Calculator", onClick: () => setIsRetirementCalculatorOpen(true) },
        { label: "Tax Calculator", onClick: () => setIsTaxCalculatorOpen(true) }
      ] as ResourceItem[] // Specify type for items
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empower yourself with our educational resources and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center"> {/* Center the items */}
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                {resource.icon}
                <h3 className="text-xl font-semibold ml-4">{resource.title}</h3>
              </div>
              <ul className="space-y-4">
                {resource.items.map((item: ResourceItem, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <button
                      onClick={item.onClick}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <SIPCalculator
        isOpen={isSIPCalculatorOpen}
        onClose={() => setIsSIPCalculatorOpen(false)}
      />
      <RetirementCalculator
        isOpen={isRetirementCalculatorOpen}
        onClose={() => setIsRetirementCalculatorOpen(false)}
      />
      <TaxCalculator
        isOpen={isTaxCalculatorOpen}
        onClose={() => setIsTaxCalculatorOpen(false)}
      />

      {selectedBlogPost && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedBlogPost(null)}
          title={selectedBlogPost.title}
        >
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">
              By {selectedBlogPost.profiles?.email} • {new Date(selectedBlogPost.created_at).toLocaleDateString()}
            </p>
            <div className="whitespace-pre-line text-gray-600">
              {selectedBlogPost.content}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Resources;
