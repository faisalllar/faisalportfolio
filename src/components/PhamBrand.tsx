import { Sparkles, BookOpen, ChefHat, Calendar, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PhamBrand = () => {
  const products = [
    {
      name: "JurnalKuu",
      description: "Aplikasi jurnal digital untuk mencatat kegiatan harian, mood tracking, dan refleksi pribadi dengan interface yang intuitif.",
      icon: BookOpen,
      color: "text-blue-500",
      status: "Live",
      features: ["Daily Journaling", "Mood Tracking", "Photo Memories", "Export PDF"],
      users: "1.2K+"
    },
    {
      name: "ResepKuu", 
      description: "Platform resep masakan dengan fitur bookmark, grocery list, timer memasak, dan sharing resep dengan komunitas.",
      icon: ChefHat,
      color: "text-orange-500",
      status: "Beta",
      features: ["Recipe Collection", "Grocery List", "Cooking Timer", "Community"],
      users: "800+"
    },
    {
      name: "PlanKuu",
      description: "Aplikasi productivity dan task management dengan fitur calendar, reminder, dan progress tracking untuk goals pribadi.",
      icon: Calendar,
      color: "text-green-500", 
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
    <section className="section-padding bg-gradient-dark text-white relative overflow-hidden" id="pham">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pham-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pham-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pham-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-pham-primary/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-pham-accent" />
            <span className="text-pham-accent font-medium">PHAM Brand</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inovasi Digital untuk{" "}
            <span className="bg-gradient-to-r from-pham-primary to-pham-accent bg-clip-text text-transparent">
              Kehidupan Sehari-hari
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            PHAM adalah brand yang saya kembangkan untuk menciptakan aplikasi-aplikasi 
            yang membantu meningkatkan produktivitas dan kualitas hidup pengguna.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-slide-in-left">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-pham-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-pham animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/20 ${product.color}`}>
                    <product.icon className="w-6 h-6" />
                  </div>
                  <Badge 
                    className={`
                      ${product.status === 'Live' ? 'bg-green-500/20 text-green-300 border-green-500/30' : ''}
                      ${product.status === 'Beta' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : ''}
                      ${product.status === 'Coming Soon' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : ''}
                    `}
                  >
                    {product.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl text-white">{product.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Count */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pham-accent" />
                    <span className="text-sm text-gray-300">{product.users} users</span>
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
          <Card className="bg-gradient-pham border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Visi PHAM Brand
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Menciptakan ekosistem aplikasi yang terintegrasi untuk membantu setiap orang 
                menjalani kehidupan yang lebih terorganisir, produktif, dan bermakna melalui 
                teknologi yang mudah digunakan dan dapat diandalkan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-pham-primary hover:bg-white/90">
                  Lihat Semua Produk
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pham-primary">
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