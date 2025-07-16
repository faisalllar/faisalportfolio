import { Sparkles, BookOpen, ChefHat, Calendar, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import phamLogoWhite from "@/assets/pham-logo-white.png";
import phamLogoBlack from "@/assets/pham-logo-black.png";

const PhamBrand = () => {
  const { theme } = useTheme();

  const products = [
    {
      name: "JurnalKuu",
      description: "Aplikasi jurnal digital untuk mencatat kegiatan harian, mood tracking, dan refleksi pribadi dengan interface yang intuitif.",
      icon: BookOpen,
      status: "Live",
      features: ["Daily Journaling", "Mood Tracking", "Photo Memories", "Export PDF"],
      users: "1.2K+"
    },
    {
      name: "ResepKuu", 
      description: "Platform resep masakan dengan fitur bookmark, grocery list, timer memasak, dan sharing resep dengan komunitas.",
      icon: ChefHat,
      status: "Beta",
      features: ["Recipe Collection", "Grocery List", "Cooking Timer", "Community"],
      users: "800+"
    },
    {
      name: "PlanKuu",
      description: "Aplikasi productivity dan task management dengan fitur calendar, reminder, dan progress tracking untuk goals pribadi.",
      icon: Calendar,
      status: "Coming Soon",
      features: ["Task Management", "Goal Setting", "Calendar Sync", "Analytics"],
      users: "Soon"
    }
  ];

  const stats = [
    { label: "Total Users", value: "2K+", icon: Users },
    { label: "Apps Released", value: "2", icon: Sparkles },
    { label: "User Rating", value: "4.8", icon: Star },
  ];

  return (
    <section className="section-padding bg-secondary" id="pham">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-32 h-16 mb-6">
            <img 
              src={theme === 'dark' ? phamLogoWhite : phamLogoBlack} 
              alt="PHAM Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inovasi Digital untuk Kehidupan Sehari-hari
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PHAM adalah brand yang saya kembangkan untuk menciptakan aplikasi-aplikasi 
            yang membantu meningkatkan produktivitas dan kualitas hidup pengguna.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-slide-in-left">
          {stats.map((stat, index) => (
            <Card key={index} className="border">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="border hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded bg-secondary">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    className={`
                      ${product.status === 'Live' ? 'bg-accent text-accent-foreground' : ''}
                      ${product.status === 'Beta' ? 'bg-secondary text-secondary-foreground' : ''}
                      ${product.status === 'Coming Soon' ? 'bg-muted text-muted-foreground' : ''}
                    `}
                  >
                    {product.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Count */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{product.users} users</span>
                  </div>
                  
                  {product.status !== 'Coming Soon' && (
                    <Button size="sm" className="btn-pham">
                      Coba Sekarang
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brand Vision */}
        <div className="text-center animate-fade-in">
          <Card className="border max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Visi PHAM Brand
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Menciptakan ekosistem aplikasi yang terintegrasi untuk membantu setiap orang 
                menjalani kehidupan yang lebih terorganisir, produktif, dan bermakna melalui 
                teknologi yang mudah digunakan dan dapat diandalkan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-pham">
                  Lihat Semua Produk
                </Button>
                <Button variant="outline" size="lg">
                  Partnership Inquiry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhamBrand;