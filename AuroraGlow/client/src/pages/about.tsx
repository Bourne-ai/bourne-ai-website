import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Users, Target, Award, Coffee, Linkedin } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-[#ff7b47]" />,
      title: "Personal Approach",
      description: "Every session is one-to-one, tailored to your specific needs and learning style."
    },
    {
      icon: <Target className="w-8 h-8 text-[#ff7b47]" />,
      title: "Practical Focus",
      description: "No theory for theory's sake. Everything we do has immediate practical application."
    },
    {
      icon: <Award className="w-8 h-8 text-[#ff7b47]" />,
      title: "Results-Driven",
      description: "You'll leave every session with something concrete you can implement right away."
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#ff7b47]" />,
      title: "No Jargon",
      description: "Complex concepts explained in plain English, in a relaxed, approachable way."
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
              About <span className="text-[#ff7b47]">Bourne AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Helping busy professionals unlock the power of AI through practical, 
              hands-on training that fits around your schedule and learning style.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                AI doesn't have to be overwhelming. At Bourne AI, we believe that every professional 
                should have access to practical AI training that actually makes a difference in their 
                daily work.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We cut through the hype and jargon to focus on what really matters: helping you save time, 
                increase efficiency, and stay ahead in your field through the smart use of AI tools and techniques.
              </p>
              <p className="text-lg text-gray-300">
                No corporate training rooms, no one-size-fits-all courses. Just personal, practical guidance 
                that meets you where you are and takes you where you want to be.
              </p>
            </div>
            <div className="lg:text-center">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration and learning" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mr-4">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Ben Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:text-center">
              <div className="w-80 h-80 bg-[#ff7b47]/20 rounded-lg shadow-2xl mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#ff7b47] mb-4">BG</div>
                  <div className="text-lg text-gray-300">Ben Golob</div>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="https://www.linkedin.com/in/ben-golob-4541211/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#ff7b47] hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Ben Golob
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Ben founded Bourne AI with a simple belief: AI training should be practical, 
                personal, and free from unnecessary complexity.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                With years of experience coaching professionals, 
                Ben has seen firsthand how the right guidance can transform not just productivity, 
                but confidence in using these powerful tools.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Whether you're meeting over coffee or in an online session, Ben's approach is 
                always the same: start with where you are, focus on what matters to you, and 
                make sure you leave with something practical you can implement immediately.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-4"></div>
                  <span>Practical AI implementation specialist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-4"></div>
                  <span>One-to-one training methodology expert</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-4"></div>
                  <span>Believer in jargon-free communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bourne AI?</h2>
          <div className="space-y-8">
            <Card className="glass-card border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#ff7b47]">No Generic Courses</h3>
                <p className="text-lg text-gray-300">
                  Every session is designed around your specific role, industry, and goals. 
                  We don't believe in one-size-fits-all training.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#ff7b47]">Immediate Results</h3>
                <p className="text-lg text-gray-300">
                  You'll implement tools and workflows during our sessions, not weeks later. 
                  Every meeting ends with something concrete you can use right away.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#ff7b47]">Flexible Scheduling</h3>
                <p className="text-lg text-gray-300">
                  Busy professional? We get it. Choose online sessions that fit your calendar 
                  or relaxed coffee meetings that don't feel like work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's have a conversation about where you are and where you'd like to be with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation">
              <Button className="bg-[#ff7b47] text-white px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/training-packages">
              <Button variant="outline" className="border-2 border-[#ff7b47] text-[#ff7b47] px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47] hover:text-white transition-all duration-300">
                View Training Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}