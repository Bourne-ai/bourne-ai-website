import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Video, Coffee } from "lucide-react";

export default function BookConsultation() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Free <span className="text-[#ff7b47]">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss your AI training needs and find the perfect package for you. 
              This 15-minute consultation is completely free with no obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Consultation Type</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-gray-800 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="w-10 h-10 text-[#ff7b47]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Online Consultation</h3>
                <p className="text-gray-300 mb-6">
                  Quick and convenient video call to discuss your needs and answer any questions.
                </p>
                <ul className="text-left text-gray-300 mb-8 space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 text-[#ff7b47] mr-3" />
                    15 minutes duration
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 text-[#ff7b47] mr-3" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <Video className="w-4 h-4 text-[#ff7b47] mr-3" />
                    Screen sharing available
                  </li>
                </ul>
                <Button className="w-full bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300">
                  Schedule Online Call
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-gray-800 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-10 h-10 text-[#ff7b47]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Coffee Meeting</h3>
                <p className="text-gray-300 mb-6">
                  Meet in person at a local coffee shop for a relaxed, informal discussion.
                </p>
                <ul className="text-left text-gray-300 mb-8 space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 text-[#ff7b47] mr-3" />
                    20-30 minutes duration
                  </li>
                  <li className="flex items-center">
                    <Coffee className="w-4 h-4 text-[#ff7b47] mr-3" />
                    Relaxed environment
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 text-[#ff7b47] mr-3" />
                    Local area meetups
                  </li>
                </ul>
                <Button className="w-full bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300">
                  Schedule Coffee Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ff7b47]">We'll Discuss:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  Your current role and daily tasks
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  Specific challenges you're facing
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  Your goals with AI integration
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  Which training package suits you best
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ff7b47]">You'll Get:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  Clear understanding of AI opportunities
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  Personalized training recommendations
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  Honest assessment of time commitment
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#ff7b47] rounded-full mr-3 mt-2"></div>
                  No pressure sales approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prefer to Email Instead?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Send your questions directly to Ben and he'll get back to you within 24 hours.
          </p>
          <Button variant="outline" className="border-2 border-[#ff7b47] text-[#ff7b47] px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47] hover:text-white transition-all duration-300">
            <a href="mailto:ben@bourne-ai.com">Email ben@bourne-ai.com</a>
          </Button>
        </div>
      </section>
    </div>
  );
}