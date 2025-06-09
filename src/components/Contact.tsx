import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// Inside your component:

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showEmergencyNumber, setShowEmergencyNumber] = useState(false);
  const emergencyNumber = "+234 7067653341";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xpwrpdpo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New contact form submission - ${formData.service}`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+234 7067653341",
      description: "Available 24/7 for emergencies",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      content: "+234 7067653341",
      description: "We'll respond within 2 hours",
      link: "https://wa.me/2347067653341",
    },

    {
      icon: MapPin,
      title: "Visit Us",
      content:
        " 10, Along Osanoyen Street, Idowina Qtrs, Isihor, Benin City, Edo state, Nigeria.",
      description: "Serving all major cities",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sun: 8AM - 6PM",
      description: "Emergency services 24/7",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold mb-4">Contact Us</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get Your Free Pest Control Quote
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to protect your property? Contact us today for a free
            consultation and customized pest control solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Fumigation</option>
                  <option value="commercial">Commercial Pest Control</option>
                  <option value="termite">Termite Treatment</option>
                  <option value="garden">Garden & Lawn Care</option>
                  <option value="maintenance">Preventive Maintenance</option>
                  <option value="emergency">Emergency Response</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your pest problem..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full ${
                  isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                } text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Rest of your component remains the same */}
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Ready to solve your pest problem? Our team of experts is
                standing by to help. Choose the contact method that works best
                for you.
              </p>
            </div>
            {/* <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-lg text-blue-600 font-semibold mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        info.title.includes("WhatsApp")
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      <info.icon
                        className={`h-6 w-6 ${
                          info.title.includes("WhatsApp")
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-lg font-semibold mb-1 hover:underline ${
                            info.title.includes("WhatsApp")
                              ? "text-green-600"
                              : "text-blue-600"
                          }`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-lg text-blue-600 font-semibold mb-1">
                          {info.content}
                        </p>
                      )}
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-800 mb-2">
                Emergency Pest Control
              </h4>
              <p className="text-red-700 mb-4">
                Dealing with a severe infestation? Our emergency response team
                is available 24/7.
              </p>

              {showEmergencyNumber ? (
                <a
                  href={`tel:${emergencyNumber.replace(/\s+/g, "")}`}
                  className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {emergencyNumber}
                </a>
              ) : (
                <button
                  onClick={() => setShowEmergencyNumber(true)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Call Emergency Line
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
