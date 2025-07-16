import { Code2, Palette, Database, Brain, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "text-primary",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5/CSS3"]
    },
    {
      category: "Backend Development", 
      icon: Database,
      color: "text-accent",
      technologies: ["Node.js", "Express.js", "Python", "PHP", "MySQL", "MongoDB"]
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      color: "text-pham-primary",
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "User Research", "Prototyping"]
    },
    {
      category: "Soft Skills",
      icon: Brain,
      color: "text-orange-500",
      technologies: ["Problem Solving", "Team Collaboration", "Project Management", "Critical Thinking"]
    }
  ];

  const achievements = [
    {
      title: "Mahasiswa Informatika ITENAS",
      period: "2022 - Sekarang",
      description: "Sedang menempuh pendidikan S1 Teknik Informatika dengan fokus pada pengembangan software dan sistem informasi."
    },
    {
      title: "Active Project Developer",
      period: "2023 - Sekarang", 
      description: "Aktif mengembangkan berbagai proyek kampus dan personal, dari web application hingga mobile app."
    },
    {
      title: "PHAM Brand Founder",
      period: "2024 - Sekarang",
      description: "Membangun brand PHAM dengan berbagai produk digital seperti JurnalKuu, ResepKuu, dan aplikasi productivity lainnya."
    }
  ];

  return (
    <section className="section-padding bg-muted/30" id="about">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seorang mahasiswa informatika yang passionate dalam teknologi dan inovasi, 
            selalu siap untuk belajar hal baru dan menghadapi tantangan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content - Bio & Story */}
          <div className="animate-slide-in-left">
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Profil Singkat
                </h3>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Saya adalah mahasiswa Teknik Informatika di <span className="font-semibold text-primary">Institut Teknologi Nasional (ITENAS) Bandung</span>. 
                    Dengan passion yang tinggi dalam bidang teknologi, saya fokus pada pengembangan aplikasi web dan mobile 
                    yang dapat memberikan solusi nyata untuk berbagai permasalahan.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Selain aktif dalam perkuliahan, saya juga mengembangkan brand personal <span className="font-semibold text-pham-primary">PHAM</span> 
                    yang menciptakan berbagai produk digital inovatif. Saya percaya bahwa teknologi harus dapat diakses 
                    dan bermanfaat untuk semua orang.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Saat ini saya terbuka untuk peluang <span className="font-semibold text-accent">freelance</span>, 
                    <span className="font-semibold text-accent"> magang</span>, dan 
                    <span className="font-semibold text-accent"> kolaborasi proyek</span> yang menantang dan 
                    dapat mengembangkan kemampuan saya lebih lanjut.
                  </p>
                </div>

                {/* Achievements Timeline */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Perjalanan Saya
                  </h4>
                  
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-primary/20 last:border-l-0">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                        <div className="pb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h5 className="font-medium text-foreground">{achievement.title}</h5>
                            <span className="text-sm text-primary font-medium">{achievement.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Skills */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Keahlian & Teknologi</h3>
              
              {skills.map((skill, index) => (
                <Card key={index} className="service-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-muted ${skill.color}`}>
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-lg">{skill.category}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Contact Info */}
              <Card className="glass border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Mari Berkolaborasi!</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Tertarik untuk bekerja sama atau ingin berdiskusi tentang proyek? 
                    Jangan ragu untuk menghubungi saya.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Badge variant="outline" className="border-primary text-primary">
                      Available for Work
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      Open to Opportunities
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;