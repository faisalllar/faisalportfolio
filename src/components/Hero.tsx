import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/faisal-profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce-gentle" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-pham-primary/10 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Bandung, Indonesia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Halo, saya{" "}
              <span className="gradient-text">
                Muhammad Faisal Abdurrahman
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              Mahasiswa <span className="text-primary font-semibold">Informatika ITENAS</span> yang passionate dalam 
              <span className="text-foreground font-medium"> Frontend Development</span>, 
              <span className="text-foreground font-medium"> Backend Development</span>, dan 
              <span className="text-foreground font-medium"> UI/UX Design</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Saya aktif mengerjakan proyek kampus, belajar teknologi terbaru, dan terbuka untuk 
              peluang <span className="text-primary font-medium">freelance</span> serta 
              <span className="text-primary font-medium"> kolaborasi bisnis</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="btn-hero group">
                Lihat Portofolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="btn-outline-hero group">
                <Download className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover-lift">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse-glow" />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={profileImage}
                  alt="Muhammad Faisal Abdurrahman"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl"
                />
                
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-pulse" />
              </div>
              
              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;