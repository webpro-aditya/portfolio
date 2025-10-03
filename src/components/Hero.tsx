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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Fixed Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed sm:bg-scroll"
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

      {/* Animated Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large animated orbs - Responsive sizing */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-10 animate-pulse bg-gradient-to-r from-primary to-secondary" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full blur-3xl opacity-15 animate-pulse bg-gradient-to-l from-secondary to-accent" 
             style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        
        {/* Floating geometric shapes - Reduced on mobile */}
        {[...Array(window.innerWidth > 768 ? 8 : 4)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute animate-float opacity-5 ${i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rotate-12' : '-rotate-12'}`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 8)}%`,
              width: `${15 + (i * 3)}px`,
              height: `${15 + (i * 3)}px`,
              background: `hsl(var(--${i % 2 === 0 ? 'primary' : 'secondary'}))`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`,
              borderRadius: i % 2 === 0 ? '50%' : '4px',
            }}
          />
        ))}
      </div>

      {/* Enhanced Cursor-interactive elements - Hidden on touch devices */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Dynamic cursor-following particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full transition-all duration-300 ease-out ${
              isMouseMoving ? 'opacity-60 scale-110' : 'opacity-30 scale-100'
            }`}
            style={{
              width: `${6 + (i * 1.5)}px`,
              height: `${6 + (i * 1.5)}px`,
              background: `hsl(var(--${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'}))`,
              left: `${mousePosition.x + Math.sin((i * Math.PI) / 6) * (40 + i * 8) - (3 + i * 0.75)}px`,
              top: `${mousePosition.y + Math.cos((i * Math.PI) / 6) * (40 + i * 8) - (3 + i * 0.75)}px`,
              transition: `all ${0.2 + i * 0.05}s cubic-bezier(0.4, 0, 0.2, 1)`,
              filter: 'blur(1px)',
              boxShadow: `0 0 ${8 + i * 1.5}px hsl(var(--${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'})/0.4)`,
            }}
          />
        ))}
        
        {/* Enhanced cursor glow with multiple layers */}
        <div
          className={`absolute rounded-full blur-3xl transition-all duration-500 ease-out ${
            isMouseMoving ? 'opacity-30 scale-125' : 'opacity-15 scale-100'
          }`}
          style={{
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, hsl(var(--primary)/0.4) 0%, hsl(var(--secondary)/0.3) 40%, hsl(var(--accent)/0.2) 70%, transparent 100%)`,
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
          }}
        />
        
        {/* Secondary glow layer */}
        <div
          className={`absolute rounded-full blur-2xl transition-all duration-700 ease-out ${
            isMouseMoving ? 'opacity-25 animate-pulse' : 'opacity-10'
          }`}
          style={{
            width: '400px',
            height: '400px',
            background: `conic-gradient(from 0deg, hsl(var(--primary)/0.2), hsl(var(--secondary)/0.2), hsl(var(--accent)/0.2), hsl(var(--primary)/0.2))`,
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            animationDuration: '3s',
          }}
        />

        {/* Ripple effects */}
        {isMouseMoving && (
          <>
            <div
              className="absolute rounded-full border border-primary/20 animate-ping"
              style={{
                left: `${mousePosition.x - 30}px`,
                top: `${mousePosition.y - 30}px`,
                width: '60px',
                height: '60px',
                animationDuration: '1.5s',
              }}
            />
            <div
              className="absolute rounded-full border border-secondary/15 animate-ping"
              style={{
                left: `${mousePosition.x - 45}px`,
                top: `${mousePosition.y - 45}px`,
                width: '90px',
                height: '90px',
                animationDuration: '2s',
                animationDelay: '0.3s',
              }}
            />
          </>
        )}
      </div>

      {/* Content - Enhanced mobile responsiveness */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text block sm:inline mt-2 sm:mt-0">
                Aditya Dandotia
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Crafting robust web solutions with Laravel, WordPress, and modern JavaScript frameworks
            </p>
          </div>

          {/* Buttons - Improved mobile layout */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-effect group w-full sm:w-auto min-w-[160px]"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto min-w-[140px]"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-secondary/10 border border-secondary/30 hover:bg-secondary/20 text-secondary hover:text-secondary group w-full sm:w-auto min-w-[180px]"
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
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Social Links - Better mobile spacing */}
          <div className="flex gap-6 sm:gap-8 justify-center pt-6 sm:pt-8">
            <a 
              href="https://github.com/webpro-aditya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-dandotia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a 
              href="mailto:webpro.aditya@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center p-1 sm:p-2">
          <div className="w-1 h-1.5 sm:w-1 sm:h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
