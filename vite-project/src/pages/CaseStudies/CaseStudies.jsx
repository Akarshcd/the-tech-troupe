// import { useTheme } from '../contexts/ThemeContext';

const CaseStudies = () => {
  // const { darkMode } = useTheme();
  
  // Updated case studies data with redirect URLs
  const caseStudies = [
    {
      id: 1,
      title: 'Dil Se Destination',
      logo: "src/assets/images/Dilse.png",
      redirectUrl: "https://dilsedestination.com/",
      services: [
        { name: 'Web Design', id: 1 },
        { name: 'UI/UX Design', id: 2 },
        { name: 'Responsive Development', id: 3 },
        { name: 'Brand Integration', id: 4 }
      ],
      industry: [
        { name: 'Adventure Travel', id: 1 },
        { name: 'Cultural Tourism', id: 2 },
        { name: 'Religious Tourism', id: 3 }
      ]
    },
    {
      id: 2,
      title: 'tamira.in',
      logo: 'src/assets/images/tamira.webp',
      redirectUrl: "https://tamira.in/",
      services: [
        { name: 'Web Design', id: 1 },
        { name: 'Brand Development', id: 2 },
        { name: 'Content Strategy', id: 3 },
        { name: 'UI/UX Design', id: 4 }
      ],
      industry: [
        { name: 'Luxury Housing', id: 1 },
        { name: 'Property Developer', id: 2 },
        { name: 'Book a Site Visit', id: 3 }
      ]
    },
    {
      id: 3,
      title: 'London Prime',
      logo: 'src/assets/images/london.webp',
      redirectUrl: "https://www.londonprimecosmetics.com/",
      services: [
        { name: 'Web Design', id: 1 },
        { name: 'Brand Identity', id: 2 },
        { name: 'UI/UX Design', id: 3 },
        { name: 'Mobile Optimization', id: 4 }
      ],
      industry: [
        { name: 'Skincare', id: 1 },
        { name: 'Makeup', id: 2 },
        { name: 'Anti-aging', id: 3 }
      ]
    },
    {
      id:4,
      title: 'RedRealm',
      logo: 'src/assets/images/red.png',
      redirectUrl: "https://www.redrealm.co.in/",
      services: [
        { name: 'Web Design', id: 1 },
        { name: 'Brand Identity', id: 2 },
        { name: 'UI/UX Design', id: 3 },
        { name: 'Mobile Optimization', id: 4 }
      ],
      industry: [
        { name: 'Fashion Brand', id: 1 },
        { name: 'Education Industries', id: 2 },
        { name: 'Realtors', id: 3 }
      ]
    }
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-green-400 mb-2">Case Studies</p>
          <h1 className="text-5xl font-bold mb-4 text-white">Our Success Stories</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Explore how we've transformed digital experiences across diverse industries, delivering
            impactful results for our clients.
          </p>
        </div>
        
        {/* Case Studies List */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="bg-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-green-400/10 cursor-pointer"
              onClick={() => handleCardClick(study.redirectUrl)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Logo Section */}
                <div className="w-full md:w-2/5 bg-gray-900 p-12 flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                  <img 
                    src={study.logo} 
                    alt={`${study.title} logo`} 
                    className="w-48 h-auto transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 hover:bg-gray-900/50 transition-colors duration-300">
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {study.title}
                    <span className="inline-block ml-2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </h2>
                  
                  {/* Services Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <span 
                          key={service.id} 
                          className="px-3 py-1 text-xs rounded-full bg-gray-800 text-white hover:bg-green-400 hover:text-black transition-colors duration-200"
                        >
                          {service.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Industry Section */}
                  <div>
                    <h3 className="text-gray-400 mb-3">Industry</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.industry.map((item) => (
                        <span 
                          key={item.id} 
                          className="px-3 py-1 text-xs rounded-full border border-gray-700 text-white hover:border-green-400 hover:text-green-400 transition-colors duration-200"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;