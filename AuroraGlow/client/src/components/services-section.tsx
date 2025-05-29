import { Card, CardContent } from "@/components/ui/card";
import { Brain, Bot, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function ServicesSection() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-[#ff7b47]" />,
      title: "What You'll Get",
      description: "• Clarity on what AI can actually do for you\n• Hands-on help to set up tools that save hours each week\n• Confidence to use AI in your everyday work\n• A roadmap to keep improving and scaling over time",
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/training-benefits"
    },
    {
      icon: <Bot className="w-8 h-8 text-[#ff7b47]" />,
      title: "Training Packages",
      description: "Choose from AI Kickstart (£195), Workflow Booster (£395), Confidence Builder (£295), or Strategy & Scale (£175). Bundle and save with our Starter Pack or Full Transformation packages.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/training-packages"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ff7b47]" />,
      title: "Personal Approach",
      description: "One-to-one sessions with no jargon, just results. Whether we meet online or over coffee, you'll always leave with something useful in place and more confidence in how you work.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/personal-approach"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Training <span className="text-[#ff7b47]">That Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're just getting curious or ready to automate parts of your work, our hands-on training and tailored support will meet you where you are and guide you step-by-step.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-gray-800 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover rounded-lg mb-6 group-hover:opacity-90 transition-opacity"
                />
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                </div>
                <div className="text-gray-300 mb-6 whitespace-pre-line">
                  {service.description}
                </div>
                <Link href={service.link}>
                  <button className="text-[#ff7b47] font-semibold hover:text-white transition-colors group-hover:underline">
                    Learn More →
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
