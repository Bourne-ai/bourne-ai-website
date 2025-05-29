import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-[#ff7b47]">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bundle and Save:<br/>
              • Starter Pack – £545 (Kickstart + Booster)<br/>
              • Full Transformation – £995 (All 4 Phases)<br/>
              • Ongoing Mentoring – £150/month
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ben@bourne-ai.com" className="flex items-center group hover:bg-[#ff7b47]/10 p-4 rounded-lg transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#ff7b47]/30 transition-colors">
                  <Mail className="w-6 h-6 text-[#ff7b47]" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-[#ff7b47] transition-colors">Email Us</h4>
                  <p className="text-gray-300">ben@bourne-ai.com</p>
                </div>
              </a>
              
              <a href="/book-consultation" className="flex items-center group hover:bg-[#ff7b47]/10 p-4 rounded-lg transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#ff7b47]/30 transition-colors">
                  <Phone className="w-6 h-6 text-[#ff7b47]" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-[#ff7b47] transition-colors">Book a Chat</h4>
                  <p className="text-gray-300">Schedule your free consultation</p>
                </div>
              </a>
              
              <a href="/book-consultation" className="flex items-center group hover:bg-[#ff7b47]/10 p-4 rounded-lg transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#ff7b47]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#ff7b47]/30 transition-colors">
                  <MapPin className="w-6 h-6 text-[#ff7b47]" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-[#ff7b47] transition-colors">Meet In Person</h4>
                  <p className="text-gray-300">Online sessions or coffee meetings available</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Content - Contact Form */}
          <Card className="glass-card border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Start Your AI Journey</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-[#1a2332]/50 border-gray-600 focus:border-[#ff7b47]"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-[#1a2332]/50 border-gray-600 focus:border-[#ff7b47]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium mb-2">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-[#1a2332]/50 border-gray-600 focus:border-[#ff7b47]"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">Tell Us About Your Goals</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-[#1a2332]/50 border-gray-600 focus:border-[#ff7b47] resize-none"
                    placeholder="What would you like to achieve with AI? Any specific challenges you're facing?"
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300 transform hover:scale-105"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
