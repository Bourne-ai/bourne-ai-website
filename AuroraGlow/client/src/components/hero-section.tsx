import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Abstract technology background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/90 to-[#1a2332]/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI Training for<br/>
              <span className="gradient-text">Busy Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Build confidence. Save time. Stay ahead.<br/><br/>
              At Bourne AI, we help professionals unlock the power of AI—without the overwhelm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#ff7b47] text-white px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-2 border-[#ff7b47] text-[#ff7b47] px-8 py-4 h-auto font-semibold hover:bg-[#ff7b47] hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Content - AI Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass-card rounded-2xl p-8 w-80 h-80 flex flex-col items-center justify-center hero-glow">
              <div className="w-32 h-32 bg-[#ff7b47] rounded-full flex items-center justify-center mb-6 shadow-2xl">
                <span className="text-4xl font-bold text-[#1a2332]">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-[#ff7b47] text-center">Bourne-ai</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
