import React from "react";
import { Home, Building2, Sprout, Bug, Shield, Zap } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Fumigation",
      description:
        "Complete home pest control including termites, cockroaches, ants, and rodents.",
      features: [
        "Pre-treatment inspection",
        "Safe for families & pets",
        "6-month warranty",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Pest Control",
      description:
        "Comprehensive pest management for offices, restaurants, and warehouses.",
      features: [
        "Monthly maintenance",
        "Health compliance",
        "Emergency response",
      ],
    },
    {
      icon: Bug,
      title: "Termite Treatment",
      description:
        "Specialized termite elimination and prevention for lasting protection.",
      features: [
        "Pre & post-construction",
        "Soil treatment",
        "5-year guarantee",
      ],
    },
    {
      icon: Sprout,
      title: "Garden & Lawn Care",
      description:
        "Protect your outdoor spaces from harmful pests and diseases.",
      features: [
        "Organic options",
        "Plant-safe formulas",
        "Regular monitoring",
      ],
    },
    {
      icon: Shield,
      title: "Preventive Maintenance",
      description:
        "Regular inspection and treatment to prevent pest infestations.",
      features: ["Quarterly visits", "Early detection", "Customized plans"],
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description: "24/7 emergency pest control for urgent situations.",
      features: ["Same-day service", "Rapid response", "Available weekends"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold mb-4">Our Services</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Pest Control Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From residential homes to commercial properties, we offer tailored
            pest control solutions to meet your specific needs and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                {/* <span className="text-2xl font-bold text-blue-600">
                  {service.price}
                </span> */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6">
              Contact us for a personalized pest control plan tailored to your
              specific needs.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
