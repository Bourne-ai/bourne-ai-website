import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Rocket, Users, Shield, Clock } from "lucide-react";

export default function TrainingPackages() {
  const packages = [
    {
      icon: <Rocket className="w-12 h-12 text-[#ff7b47]" />,
      name: "AI Kickstart",
      price: "£195",
      duration: "2-3 hours",
      description: "Perfect for getting started—explore your biggest opportunities and get clear direction.",
      features: [
        "AI opportunity assessment for your role",
        "Tool recommendations tailored to your needs",
        "Quick wins identification",
        "30-day action plan",
        "Follow-up email support"
      ],
      ideal: "New to AI or wanting to understand the potential",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-12 h-12 text-[#ff7b47]" />,
      name: "Workflow Booster",
      price: "£395",
      duration: "4-6 hours",
      description: "Hands-on setup of tools and workflows that will save you hours each week.",
      features: [
        "Complete tool setup and configuration",
        "Custom workflow design",
        "Integration with existing systems",
        "Time-saving automation implementation",
        "2 weeks of optimization support"
      ],
      ideal: "Ready to implement and see immediate time savings",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#ff7b47]" />,
      name: "Confidence Builder",
      price: "£295",
      duration: "3-4 hours",
      description: "Build habits and embed AI seamlessly into your weekly routine.",
      features: [
        "Habit formation strategies",
        "Daily practice routines",
        "Common mistake prevention",
        "Confidence-building exercises",
        "Monthly check-in for 3 months"
      ],
      ideal: "Want to make AI a natural part of your work",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Clock className="w-12 h-12 text-[#ff7b47]" />,
      name: "Strategy & Scale",
      price: "£175",
      duration: "2 hours",
      description: "Review progress, optimize existing setups, and plan what's next.",
      features: [
        "Current setup review and optimization",
        "Advanced technique introduction",
        "Scaling strategies",
        "Future roadmap planning",
        "Resource recommendations"
      ],
      ideal: "Already using AI but want to level up",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const bundles = [
    {
      name: "Starter Pack",
      price: "£545",
      originalPrice: "£590",
      includes: ["AI Kickstart", "Workflow Booster"],
      savings: "£45",
      description: "Get started and implement immediately"
    },
    {
      name: "Full Transformation",
      price: "£995",
      originalPrice: "£1,060",
      includes: ["All 4 Phases"],
      savings: "£65",
      description: "Complete AI integration journey"
    },
    {
      name: "Ongoing Mentoring",
      price: "£150/month",
      originalPrice: "",
      includes: ["Monthly 1-hour sessions", "Email support", "Resource updates"],
      savings: "",
      description: "Continuous support and growth"
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
              Training <span className="text-[#ff7b47]">Packages</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that fits your current situation and goals. All sessions are one-to-one, 
              practical, and designed to give you real results.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Packages */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Individual Packages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="glass-card border-gray-800 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mr-6">
                      {pkg.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-[#ff7b47]">{pkg.price}</div>
                      <div className="text-sm text-gray-400">{pkg.duration}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-[#ff7b47]">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#ff7b47] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-[#ff7b47]">Ideal For:</h4>
                    <p className="text-gray-300">{pkg.ideal}</p>
                  </div>
                  
                  <Link href={`/book-package?package=${encodeURIComponent(pkg.name)}`}>
                    <Button className="w-full bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105">
                      Choose {pkg.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Bundle & Save</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <Card key={index} className="glass-card border-gray-800 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{bundle.name}</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-[#ff7b47] mb-2">{bundle.price}</div>
                    {bundle.originalPrice && (
                      <div className="text-sm text-gray-400">
                        <span className="line-through mr-2">{bundle.originalPrice}</span>
                        <span className="text-green-400">Save {bundle.savings}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{bundle.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-[#ff7b47]">Includes:</h4>
                    <ul className="space-y-2 text-left">
                      {bundle.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ff7b47] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={`/book-package?package=${encodeURIComponent(bundle.name)}`}>
                    <Button className="w-full bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105">
                      Choose {bundle.name}
                    </Button>
                  </Link>
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
            Not Sure Which Package to Choose?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free 15-minute consultation to discuss your needs and find the perfect fit.
          </p>
          <Link href="/#contact">
            <Button className="bg-[#ff7b47] text-white px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}