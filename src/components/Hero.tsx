import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const moveTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);

      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }

      moveTimeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 200);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Fixed Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${Math.max(0, scrollY * -0.3)}px) scale(${Math.max(1, 1 + scrollY * 0.0001)})`
        }}
      >
        {/* Multi-layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse bg-gradient-to-r from-primary to-secondary" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse bg-gradient-to-l from-secondary to-accent" 
             style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute animate-float opacity-5 ${i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rotate-12' : '-rotate-12'}`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 8)}%`,
              width: `${20 + (i * 5)}px`,
              height: `${20 + (i * 5)}px`,
              background: `hsl(var(--${i % 2 === 0 ? 'primary' : 'secondary'}))`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`,
              borderRadius: i % 2 === 0 ? '50%' : '4px',
            }}
          />
        ))}
      </div>

      {/* Enhanced Cursor-interactive elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic cursor-following particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full transition-all duration-300 ease-out ${
              isMouseMoving ? 'opacity-60 scale-110' : 'opacity-30 scale-100'
            }`}
            style={{
              width: `${8 + (i * 2)}px`,
              height: `${8 + (i * 2)}px`,
              background: `hsl(var(--${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'}))`,
              left: `${mousePosition.x + Math.sin((i * Math.PI) / 6) * (60 + i * 10) - (4 + i)}px`,
              top: `${mousePosition.y + Math.cos((i * Math.PI) / 6) * (60 + i * 10) - (4 + i)}px`,
              transition: `all ${0.2 + i * 0.05}s cubic-bezier(0.4, 0, 0.2, 1)`,
              filter: 'blur(1px)',
              boxShadow: `0 0 ${10 + i * 2}px hsl(var(--${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'})/0.4)`,
            }}
          />
        ))}
        
        {/* Enhanced cursor glow with multiple layers */}
        <div
          className={`absolute rounded-full blur-3xl transition-all duration-500 ease-out ${
            isMouseMoving ? 'opacity-30 scale-125' : 'opacity-15 scale-100'
          }`}
          style={{
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, hsl(var(--primary)/0.4) 0%, hsl(var(--secondary)/0.3) 40%, hsl(var(--accent)/0.2) 70%, transparent 100%)`,
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        />
        
        {/* Secondary glow layer */}
        <div
          className={`absolute rounded-full blur-2xl transition-all duration-700 ease-out ${
            isMouseMoving ? 'opacity-25 animate-pulse' : 'opacity-10'
          }`}
          style={{
            width: '600px',
            height: '600px',
            background: `conic-gradient(from 0deg, hsl(var(--primary)/0.2), hsl(var(--secondary)/0.2), hsl(var(--accent)/0.2), hsl(var(--primary)/0.2))`,
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
            animationDuration: '3s',
          }}
        />

        {/* Ripple effects */}
        {isMouseMoving && (
          <>
            <div
              className="absolute rounded-full border border-primary/20 animate-ping"
              style={{
                left: `${mousePosition.x - 40}px`,
                top: `${mousePosition.y - 40}px`,
                width: '80px',
                height: '80px',
                animationDuration: '1.5s',
              }}
            />
            <div
              className="absolute rounded-full border border-secondary/15 animate-ping"
              style={{
                left: `${mousePosition.x - 60}px`,
                top: `${mousePosition.y - 60}px`,
                width: '120px',
                height: '120px',
                animationDuration: '2s',
                animationDelay: '0.3s',
              }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Aditya Dandotia
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Crafting robust web solutions with Laravel, WordPress, and modern JavaScript frameworks
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-effect group"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-secondary/10 border border-secondary/30 hover:bg-secondary/20 text-secondary hover:text-secondary group"
              onClick={() => {
                // Create a temporary link to download the resume
                const link = document.createElement('a');
                link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
                link.download = 'Aditya_Dandotia_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/webpro-aditya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-dandotia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:webpro.aditya@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
