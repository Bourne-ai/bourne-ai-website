import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, Target, Users, TrendingUp, Clock } from "lucide-react";

export default function TrainingBenefits() {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-[#ff7b47]" />,
      title: "Clarity on AI's Real Value",
      description: "Cut through the hype and understand exactly what AI can and can't do for your specific role and industry.",
      details: [
        "Practical assessment of AI tools for your workflow",
        "Clear understanding of time savings potential",
        "Realistic expectations and achievable goals",
        "Industry-specific use cases and examples"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-[#ff7b47]" />,
      title: "Hands-on Tool Setup",
      description: "Don't just learn about AI tools—get them working for you with guided implementation and setup.",
      details: [
        "Step-by-step tool configuration",
        "Custom workflows designed for your needs",
        "Integration with existing systems",
        "Troubleshooting and optimization"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ff7b47]" />,
      title: "Daily Confidence Building",
      description: "Build the confidence to use AI tools naturally in your everyday work, not just when you remember.",
      details: [
        "Habit formation strategies",
        "Daily practice routines",
        "Common pitfall avoidance",
        "Progressive skill building"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff7b47]" />,
      title: "Long-term Growth Roadmap",
      description: "Develop a clear path for continuing to improve and scale your AI usage over time.",
      details: [
        "3, 6, and 12-month improvement plans",
        "Advanced technique introduction",
        "Scaling strategies for teams",
        "Future-proofing your skills"
      ]
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
              What You'll <span className="text-[#ff7b47]">Achieve</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our training isn't just about learning AI tools—it's about transforming how you work. 
              Here's exactly what you can expect from your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    {benefit.description}
                  </p>
                  <ul className="space-y-3">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-[#ff7b47] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't just learn about AI—start using it effectively in your daily work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-[#ff7b47] text-white px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
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