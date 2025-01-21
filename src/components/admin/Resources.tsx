import React, { useState } from 'react';
import Modal from '../ui/Modal'; // Import the existing Modal component

const Resources: React.FC = () => {
  const [blogs] = useState([
    {
      title: 'The Necessity of Financial Consultancy in a Rapidly Evolving Digital Landscape',
      content: `In today's fast-paced financial environment, the role of financial consultancy has become increasingly critical. As we enter 2025, the financial services sector is undergoing significant transformations driven by digital advancements and changing consumer expectations. Financial consultants are essential in guiding organizations through these changes, ensuring they adapt to new technologies and regulatory requirements.
      Digital Transformation: The rise of generative AI and machine learning is reshaping how financial institutions operate, from loan approvals to fraud detection. Consultants can help organizations implement these technologies effectively, ensuring they remain competitive and enhance customer experiences.
      Customer-Centric Innovations: With consumers expecting personalized services, financial consultants play a vital role in developing strategies that leverage data analytics to tailor products to individual needs. This hyper-personalization is crucial for retaining clients in a crowded marketplace.
      Regulatory Compliance: As regulations evolve, particularly concerning digital currencies and data privacy, financial consultants are indispensable in helping firms navigate compliance challenges while fostering innovation. Their expertise ensures that organizations balance regulatory adherence with the need for agility in service delivery.`,
    },
    {
      title: 'Adapting to Financial Inclusion: The Role of Consultancy',
      content: `As financial inclusion takes center stage in 2025, the demand for consultancy services that focus on equitable access to financial resources is growing. Financial consultants are uniquely positioned to assist institutions in developing strategies that cater to underserved populations.
      Mobile-First Banking Solutions: With the rise of mobile banking, consultants can guide banks in creating user-friendly platforms that reach remote areas, breaking down barriers to access.
      Alternative Credit Scoring Methods: By utilizing non-traditional data sources for credit assessments, consultants can help lenders expand their customer base and promote economic empowerment among marginalized communities.
      Community Engagement Strategies: Financial consultants can develop outreach programs that educate potential clients about available services, ensuring they understand their options and fostering trust within communities.`,
    },
    {
      title: 'The Importance of Strategic Planning in Financial Consultancy',
      content: `In an era characterized by uncertainty and rapid change, strategic planning is paramount for financial institutions. Consultants are essential in helping organizations formulate robust strategies that address both current challenges and future opportunities.
      Market Analysis and Forecasting: Consultants provide valuable insights into market trends, enabling organizations to make informed decisions about product offerings and service enhancements. This foresight is crucial for staying ahead of competitors.
      Risk Management Frameworks: As geopolitical risks and regulatory scrutiny increase, financial consultants can assist firms in developing comprehensive risk management strategies that protect assets while ensuring compliance with evolving regulations.
      Technology Integration: With the growing importance of AI and digital tools in finance, consultants can guide institutions on integrating these technologies into their operations effectively, enhancing efficiency and customer satisfaction.`,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<{ title: string; content: string } | null>(null);

  const openModal = (blog: { title: string; content: string }) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div>
      <h2>Resources Section</h2>
      <h3>Latest Blogs</h3>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <button onClick={() => openModal(blog)}>{blog.title}</button>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedBlog && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedBlog.title}>
          <p>{selectedBlog.content}</p>
        </Modal>
      )}
    </div>
  );
};

export default Resources;
