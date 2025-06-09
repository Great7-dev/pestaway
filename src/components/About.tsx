import React from "react";
import { Users, Award, Clock, Leaf } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: "1000+", label: "Satisfied Customers" },
    { icon: Award, number: "8+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Service" },
    { icon: Leaf, number: "100%", label: "Eco-Friendly" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="text-blue-600 font-semibold mb-4">
              About PestAway
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Pest Control Excellence
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              With over 8 years of experience in the pest control industry,
              we've built our reputation on delivering safe, effective, and
              environmentally responsible fumigation services throughout
              Nigeria.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of certified professionals uses the latest techniques and
              eco-friendly products to ensure your property is protected while
              keeping your family and pets safe.
            </p>

            <div className="space-y-4">
              {[
                "Licensed and certified pest control technicians",
                "State-of-the-art equipment and eco-friendly solutions",
                "Comprehensive inspection and customized treatment plans",
                "Follow-up services and maintenance programs",
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional pest control team"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-900/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
