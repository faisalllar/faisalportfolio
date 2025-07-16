import { useState } from "react";
import { ExternalLink, Github, Palette, Code, Globe, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const projects = {
    web: [
      {
        title: "E-Commerce Dashboard",
        description: "Dashboard admin untuk mengelola toko online dengan fitur analytics, inventory management, dan customer tracking.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
        category: "web",
        status: "Completed",
        github: "#",
        demo: "#"
      },
      {
        title: "Learning Management System",
        description: "Platform pembelajaran online untuk mahasiswa dengan fitur video streaming, quiz, dan progress tracking.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
        category: "web", 
        status: "In Progress",
        github: "#",
        demo: "#"
      },
      {
        title: "Real Estate Platform",
        description: "Website marketplace properti dengan fitur pencarian advanced, virtual tour, dan sistem booking.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
        category: "web",
        status: "Completed",
        github: "#",
        demo: "#"
      }
    ],
    mobile: [
      {
        title: "JurnalKuu Mobile",
        description: "Aplikasi mobile untuk mencatat kegiatan harian, mood tracking, dan refleksi pribadi dengan interface yang intuitif.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        technologies: ["React Native", "Firebase", "AsyncStorage"],
        category: "mobile",
        status: "Completed",
        github: "#",
        demo: "#"
      },
      {
        title: "ResepKuu App",
        description: "Aplikasi resep masakan dengan fitur bookmark, grocery list, dan timer memasak terintegrasi.",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        technologies: ["Flutter", "Dart", "SQLite"],
        category: "mobile",
        status: "In Progress", 
        github: "#",
        demo: "#"
      }
    ],
    design: [
      {
        title: "PHAM Brand Identity",
        description: "Desain sistem identitas visual lengkap untuk brand PHAM termasuk logo, color palette, dan brand guidelines.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
        category: "design",
        status: "Completed",
        github: "#",
        demo: "#"
      },
      {
        title: "Fintech App UI/UX",
        description: "Desain interface dan user experience untuk aplikasi fintech dengan fokus pada kemudahan dan keamanan pengguna.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
        technologies: ["Figma", "Principle", "User Research"],
        category: "design",
        status: "Completed",
        github: "#",
        demo: "#"
      }
    ]
  };

  const allProjects = [...projects.web, ...projects.mobile, ...projects.design];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent text-accent-foreground";
      case "In Progress":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Globe className="w-4 h-4" />;
      case "mobile":
        return <Smartphone className="w-4 h-4" />;
      case "design":
        return <Palette className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section className="section-padding" id="portfolio">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Portfolio</span> Proyek
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya kerjakan, mulai dari web development, 
            mobile app, hingga UI/UX design.
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all" className="text-xs sm:text-sm">Semua</TabsTrigger>
            <TabsTrigger value="web" className="text-xs sm:text-sm">Web</TabsTrigger>
            <TabsTrigger value="mobile" className="text-xs sm:text-sm">Mobile</TabsTrigger>
            <TabsTrigger value="design" className="text-xs sm:text-sm">Design</TabsTrigger>
          </TabsList>

          {/* Projects Grid */}
          <TabsContent value={selectedCategory} className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="portfolio-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" className="shadow-lg">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute top-3 left-3">
                      <div className="bg-background/90 p-2 rounded-full backdrop-blur-sm">
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="glass border-primary/20 max-w-lg mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3">Punya Proyek Menarik?</h3>
              <p className="text-muted-foreground mb-6">
                Saya selalu terbuka untuk proyek baru dan kolaborasi yang menantang. 
                Mari diskusikan ide Anda!
              </p>
              <Button className="btn-hero">
                Mulai Diskusi Proyek
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;