import React from "react";
import { Star, Quote } from "lucide-react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Abraham Omogiate",
      location: "Lagos",
      rating: 5,
      text: "PestAway eliminated our termite problem completely. Their team was professional, punctual, and the results speak for themselves. Highly recommended!",
      service: "Termite Treatment",
    },
    {
      name: "Blessing Iguma",
      location: "Abuja",
      rating: 5,
      text: "Excellent service! They helped us get rid of cockroaches in our restaurant. Fast, effective, and very reasonable pricing. Will definitely use again.",
      service: "Commercial Pest Control",
    },
    {
      name: "Precious Ejike",
      location: "Port Harcourt",
      rating: 5,
      text: "I was impressed by their eco-friendly approach. Safe for my kids and pets, yet completely effective against ants and rodents. Great customer service too!",
      service: "Residential Fumigation",
    },
    {
      name: "Emmanuel Chinedu",
      location: "Ibadan",
      rating: 5,
      text: "Quick response time and professional service. They explained everything clearly and followed up to ensure the problem was completely resolved.",
      service: "Emergency Response",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold mb-4">
            Customer Reviews
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our pest control services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-blue-600 mr-4" />
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-gray-600 text-sm">{review.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-semibold text-sm">
                    {review.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
