import React from 'react';
import { Shield, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-green-400 font-semibold">Professional Pest Control</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Safe & Effective
              <span className="text-yellow-400 block">Fumigation Services</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Protect your home and business with our eco-friendly pest control solutions. 
              Fast response, guaranteed results, and long-lasting protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
                Call: +234 7067653341
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: CheckCircle, text: "Licensed & Insured" },
                { icon: Star, text: "24/7 Emergency Service" },
                { icon: Shield, text: "100% Satisfaction" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-blue-100">
                  <feature.icon className="h-5 w-5 text-green-400" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional fumigation service"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">1000+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-green-500 text-white rounded-2xl p-4 shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-sm font-medium">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;