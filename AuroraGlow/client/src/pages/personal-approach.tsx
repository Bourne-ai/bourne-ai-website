import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Coffee, Video, MessageCircle, Calendar, User, Target } from "lucide-react";

export default function PersonalApproach() {
  const approaches = [
    {
      icon: <Video className="w-8 h-8 text-[#ff7b47]" />,
      title: "Online Sessions",
      description: "Convenient video calls that work around your schedule",
      features: [
        "Screen sharing for hands-on guidance",
        "Record sessions for later reference",
        "Flexible scheduling across time zones",
        "No travel time required"
      ]
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#ff7b47]" />,
      title: "Coffee Meetings",
      description: "Face-to-face sessions in a relaxed, informal setting",
      features: [
        "Personal connection and rapport building",
        "Comfortable, non-intimidating environment",
        "Local coffee shops or office visits",
        "Natural conversation flow"
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#ff7b47]" />,
      title: "No Jargon Communication",
      description: "Plain English explanations that actually make sense",
      features: [
        "Technical concepts in everyday language",
        "Real-world examples and analogies",
        "Check for understanding at each step",
        "Written summaries after each session"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-[#ff7b47]" />,
      title: "Results-Focused",
      description: "Every session ends with something practical you can use",
      features: [
        "Immediate actionable outcomes",
        "Tools set up and ready to use",
        "Clear next steps defined",
        "Progress tracking and measurement"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a conversation about your current work, challenges, and what you'd like to achieve with AI."
    },
    {
      step: "02",
      title: "Tailored Planning",
      description: "Based on your needs, we create a customized approach that fits your schedule and learning style."
    },
    {
      step: "03",
      title: "Hands-on Implementation",
      description: "We work together to set up tools, create workflows, and build your confidence through practical application."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Follow-up support ensures you continue to succeed and can tackle new challenges as they arise."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="text-[#ff7b47] text-xl font-bold">Bourne-ai</div>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:text-[#ff7b47]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Personal <span className="text-[#ff7b47]">Approach</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              One-to-one sessions designed around you. No corporate training rooms, no generic presentations—
              just practical, personal guidance that fits your schedule and learning style.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work Together</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <Card key={index} className="glass-card border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mr-4">
                      {approach.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{approach.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    {approach.description}
                  </p>
                  <ul className="space-y-3">
                    {approach.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <Card key={index} className="glass-card border-gray-800 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#ff7b47] mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Personal Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Personal Matters
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                AI training isn't one-size-fits-all. Your industry, role, and workflow are unique. 
                Generic online courses and group workshops can't address your specific challenges 
                or answer your particular questions.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                In our one-to-one sessions, we focus entirely on your situation. We can deep-dive 
                into your specific tools, troubleshoot your particular challenges, and ensure 
                you're comfortable before moving to the next step.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="w-6 h-6 text-[#ff7b47] mr-4" />
                  <span>Tailored specifically to your role and industry</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-[#ff7b47] mr-4" />
                  <span>Flexible scheduling around your availability</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-[#ff7b47] mr-4" />
                  <span>Immediate practical application to your work</span>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="One-on-one mentoring session" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Personal AI Training?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your specific needs and create a training approach that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-[#ff7b47] text-white px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105">
                Book Your Session
              </Button>
            </Link>
            <Link href="/training-packages">
              <Button variant="outline" className="border-2 border-[#ff7b47] text-[#ff7b47] px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47] hover:text-white transition-all duration-300">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}