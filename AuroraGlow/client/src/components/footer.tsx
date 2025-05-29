import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2332]/50 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-[#ff7b47] text-2xl font-bold mb-4">Bourne-ai</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping busy professionals unlock the power of AI through hands-on training and tailored support—without the overwhelm.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ben-golob-4541211/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#ff7b47]/20 rounded-full flex items-center justify-center hover:bg-[#ff7b47]/30 transition-colors">
                <Linkedin className="w-5 h-5 text-[#ff7b47]" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Packages</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">AI Kickstart - £195</a></li>
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">Workflow Booster - £395</a></li>
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">Confidence Builder - £295</a></li>
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">Strategy & Scale - £175</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Bundles</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">Starter Pack - £545</a></li>
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">Full Transformation - £995</a></li>
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">Ongoing Mentoring - £150/month</a></li>
              <li><a href="#" className="hover:text-[#ff7b47] transition-colors">Free Consultation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 Bourne-ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
