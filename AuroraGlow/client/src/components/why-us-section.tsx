import { Rocket, Users, Shield, Clock } from "lucide-react";
import { Link } from "wouter";

export default function WhyUsSection() {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-[#ff7b47]" />,
      title: "AI Kickstart",
      description: "£195 - Explore your biggest opportunities and get a clear direction"
    },
    {
      icon: <Users className="w-8 h-8 text-[#ff7b47]" />,
      title: "Workflow Booster",
      description: "£395 - Set up tools and workflows to reduce admin and free up time"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#ff7b47]" />,
      title: "Confidence Builder",
      description: "£295 - Build habits and embed AI into your weekly routine"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff7b47]" />,
      title: "Strategy & Scale",
      description: "£175 - Review, optimise, and explore what's next"
    }
  ];

  return (
    <section id="why-us" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern business office" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#1a2332]/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-[#ff7b47]">Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible training options designed around your schedule and needs. Start where you are, grow at your pace.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={index} href={`/book-package?package=${encodeURIComponent(feature.title)}`}>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff7b47]/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <div className="mt-4 text-[#ff7b47] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Book Now →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
