import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "PHAM Brand", href: "#pham" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const phamProducts = [
    { name: "JurnalKuu", href: "#" },
    { name: "ResepKuu", href: "#" },
    { name: "PlanKuu", href: "#" }
  ];

  return (
    <footer className="bg-gradient-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pham-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Muhammad Faisal <span className="gradient-text">Abdurrahman</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mahasiswa Informatika ITENAS Bandung yang passionate dalam teknologi. 
              Mengembangkan solusi digital melalui brand PHAM dan terbuka untuk 
              kolaborasi proyek yang menantang.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="https://github.com/faisal" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="https://linkedin.com/in/faisal" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="mailto:faisal@pham.dev">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* PHAM Products */}
          <div>
            <h4 className="font-semibold mb-4">PHAM Products</h4>
            <ul className="space-y-2">
              {phamProducts.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-gray-300 hover:text-pham-accent transition-colors text-sm"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-3 bg-pham-primary/20 rounded-lg border border-pham-primary/30">
              <p className="text-xs text-pham-accent">
                Explore innovative apps that boost your productivity and quality of life.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>&copy; {currentYear} Muhammad Faisal Abdurrahman.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>in Bandung, Indonesia</span>
            </div>
            
            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white hover:bg-white/10 group"
            >
              Back to Top
              <ArrowUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-4">
                <span>Built with React.js + Tailwind CSS</span>
                <span>•</span>
                <span>Hosted on me</span>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;