import { Code, Palette, Database, Smartphone, Globe, Zap, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Pengembangan website modern dan responsif menggunakan teknologi terkini seperti React, Next.js, dan Node.js.",
      icon: Globe,
      color: "text-blue-500",
      pricing: "Mulai dari Rp 2.5jt",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Admin Dashboard",
        "Database Integration"
      ],
      timeline: "1-3 minggu",
      popular: true
    },
    {
      title: "Mobile App Development",
      description: "Pembuatan aplikasi mobile untuk Android dan iOS dengan React Native atau Flutter.",
      icon: Smartphone,
      color: "text-green-500",
      pricing: "Mulai dari Rp 4jt",
      features: [
        "Cross Platform",
        "Native Performance",
        "Push Notifications",
        "Offline Support",
        "App Store Ready"
      ],
      timeline: "2-4 minggu",
      popular: false
    },
    {
      title: "UI/UX Design",
      description: "Desain interface yang user-friendly dan menarik dengan riset user experience yang mendalam.",
      icon: Palette,
      color: "text-purple-500",
      pricing: "Mulai dari Rp 1.5jt",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design System",
        "Usability Testing"
      ],
      timeline: "1-2 minggu",
      popular: false
    },
    {
      title: "Backend Development",
      description: "Pengembangan sistem backend yang scalable dan secure untuk mendukung aplikasi web dan mobile.",
      icon: Database,
      color: "text-orange-500",
      pricing: "Mulai dari Rp 3jt",
      features: [
        "RESTful API",
        "Database Design",
        "Authentication",
        "Cloud Deployment",
        "Performance Optimization"
      ],
      timeline: "1-3 minggu",
      popular: false
    },
    {
      title: "Konsultasi IT",
      description: "Konsultasi teknologi untuk startup dan bisnis dalam memilih tech stack dan strategi development.",
      icon: Code,
      color: "text-red-500",
      pricing: "Rp 200rb/jam",
      features: [
        "Tech Stack Planning",
        "Architecture Review",
        "Code Review",
        "Performance Audit",
        "Security Assessment"
      ],
      timeline: "Fleksibel",
      popular: false
    },
    {
      title: "MVP Development",
      description: "Pengembangan Minimum Viable Product untuk startup yang ingin cepat masuk ke pasar.",
      icon: Zap,
      color: "text-yellow-500",
      pricing: "Mulai dari Rp 5jt",
      features: [
        "Rapid Prototyping",
        "Core Features",
        "User Testing",
        "Iteration Support",
        "Launch Ready"
      ],
      timeline: "2-3 minggu",
      popular: false
    }
  ];

  const workProcess = [
    {
      step: "1",
      title: "Konsultasi & Briefing",
      description: "Diskusi kebutuhan, goals, dan ekspektasi proyek secara detail."
    },
    {
      step: "2", 
      title: "Planning & Proposal",
      description: "Pembuatan proposal timeline, budget, dan technical specification."
    },
    {
      step: "3",
      title: "Development & Updates",
      description: "Proses development dengan update progress secara berkala."
    },
    {
      step: "4",
      title: "Testing & Delivery",
      description: "Quality assurance, testing, dan delivery final product."
    }
  ];

  return (
    <section className="section-padding bg-muted/30" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Layanan</span> Freelance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saya menawarkan berbagai layanan development dan konsultasi IT 
            untuk membantu mewujudkan ide digital Anda menjadi kenyataan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`service-card relative ${service.popular ? 'border-primary shadow-glow' : ''} animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-xl bg-muted ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <div className="text-primary font-semibold text-sm">{service.pricing}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-sm">Yang Anda Dapatkan:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Estimasi: {service.timeline}</span>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${service.popular ? 'btn-hero' : ''}`}
                  variant={service.popular ? 'default' : 'outline'}
                >
                  Konsultasi Gratis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Work Process */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-12">Proses Kerja</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((process, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="glass border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Siap Memulai Proyek?</h3>
              <p className="text-muted-foreground mb-6">
                Konsultasi awal gratis untuk membahas kebutuhan dan solusi terbaik untuk proyek Anda. 
                No hidden cost, timeline yang jelas, dan hasil yang memuaskan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  Mulai Konsultasi Gratis
                </Button>
                <Button variant="outline" size="lg">
                  Lihat Portfolio
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Konsultasi Gratis</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Revisi Unlimited</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Support 30 Hari</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;