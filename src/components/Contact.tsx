import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faisal@pham.dev",
      href: "mailto:faisal@pham.dev",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      href: "https://wa.me/6281234567890",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Bandung, Indonesia",
      href: "#",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/faisal",
      color: "text-gray-600 dark:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/faisal",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/faisal",
      color: "text-pink-500"
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      href: "https://t.me/faisal",
      color: "text-blue-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih! Saya akan merespon dalam 24 jam.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mari <span className="gradient-text">Berkolaborasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Punya proyek menarik atau ingin berdiskusi tentang teknologi? 
            Jangan ragu untuk menghubungi saya. Mari wujudkan ide Anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <p className="text-muted-foreground">
                  Silakan hubungi saya melalui berbagai channel yang tersedia. 
                  Saya selalu terbuka untuk project baru dan kolaborasi.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className={`p-2 rounded-lg bg-background ${contact.color} group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        <div className="text-sm text-muted-foreground">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-muted hover:bg-muted/70 transition-all hover:scale-110 ${social.color}`}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">Response Time</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="text-xl font-bold text-accent">&lt; 24h</div>
                      <div className="text-xs text-muted-foreground">Email Response</div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="text-xl font-bold text-primary">&lt; 2h</div>
                      <div className="text-xs text-muted-foreground">WhatsApp Response</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
                <p className="text-muted-foreground">
                  Atau kirim pesan langsung melalui form di bawah ini. 
                  Saya akan merespon secepat mungkin.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        placeholder="Masukkan nama Anda"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nama@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Topik pesan Anda"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      placeholder="Ceritakan tentang proyek atau ide Anda..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-hero group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Dengan mengirim pesan ini, Anda setuju bahwa saya akan menghubungi Anda 
                    kembali melalui email atau WhatsApp untuk membahas kebutuhan proyek Anda.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="glass border-primary/20 max-w-lg mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3">Butuh Diskusi Langsung?</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Untuk diskusi yang lebih mendalam atau urgent, 
                langsung hubungi saya via WhatsApp.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;