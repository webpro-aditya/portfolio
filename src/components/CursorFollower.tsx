import { useEffect, useState, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  id: number;
}

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const moveTimeoutRef = useRef<NodeJS.Timeout>();
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Add new trail point
      setTrail(prev => {
        const newPoint: TrailPoint = {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          scale: 1,
          id: trailIdRef.current++
        };
        
        // Keep only last 8 trail points
        const newTrail = [newPoint, ...prev.slice(0, 7)];
        return newTrail;
      });

      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }

      // Set moving to false after 150ms of no movement
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  // Animate trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => 
        prev.map((point, index) => ({
          ...point,
          opacity: Math.max(0, point.opacity - 0.08),
          scale: Math.max(0.3, point.scale - 0.05)
        })).filter(point => point.opacity > 0.1)
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary glow with enhanced animation */}
      <div
        className={`absolute w-[800px] h-[800px] rounded-full blur-[120px] transition-all duration-700 ease-out ${
          isMoving ? 'opacity-40 scale-110' : 'opacity-25 scale-100'
        } ${isHovering ? 'opacity-50' : ''}`}
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary)/0.3) 40%, transparent 70%)`,
          left: `${mousePosition.x - 400}px`,
          top: `${mousePosition.y - 400}px`,
          transform: `translate3d(0, 0, 0) ${isMoving ? 'scale(1.1)' : 'scale(1)'}`,
        }}
      />
      
      {/* Secondary glow with pulsing animation */}
      <div
        className={`absolute w-[500px] h-[500px] rounded-full blur-[90px] transition-all duration-1000 ease-out ${
          isMoving ? 'opacity-30 animate-pulse' : 'opacity-15'
        }`}
        style={{
          background: `radial-gradient(circle, hsl(var(--secondary)) 0%, hsl(var(--secondary)/0.2) 50%, transparent 70%)`,
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          animationDuration: '2s',
        }}
      />

      {/* Tertiary accent glow */}
      <div
        className={`absolute w-[300px] h-[300px] rounded-full blur-[60px] transition-all duration-500 ease-out ${
          isMoving ? 'opacity-25' : 'opacity-10'
        }`}
        style={{
          background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)`,
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
        }}
      />
      
      {/* Main cursor dot with enhanced effects */}
      <div
        className={`absolute w-3 h-3 rounded-full transition-all duration-200 ease-out ${
          isMoving ? 'bg-primary/80 scale-125 shadow-lg shadow-primary/50' : 'bg-primary/60 scale-100'
        }`}
        style={{
          left: `${mousePosition.x - 6}px`,
          top: `${mousePosition.y - 6}px`,
          boxShadow: isMoving ? '0 0 20px hsl(var(--primary)/0.6), 0 0 40px hsl(var(--primary)/0.3)' : '0 0 10px hsl(var(--primary)/0.4)',
        }}
      />

      {/* Outer ring */}
      <div
        className={`absolute w-8 h-8 rounded-full border border-primary/30 transition-all duration-300 ease-out ${
          isMoving ? 'scale-150 opacity-60' : 'scale-100 opacity-30'
        }`}
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
        }}
      />

      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 blur-[0.5px] transition-all duration-100 ease-out"
          style={{
            left: `${point.x - 3}px`,
            top: `${point.y - 3}px`,
            opacity: point.opacity * (1 - index * 0.1),
            transform: `scale(${point.scale * (1 - index * 0.1)})`,
          }}
        />
      ))}

      {/* Floating particles around cursor */}
      {isMoving && (
        <>
          <div
            className="absolute w-1 h-1 rounded-full bg-secondary/60 blur-[0.5px] animate-bounce"
            style={{
              left: `${mousePosition.x + Math.sin(Date.now() * 0.01) * 30 - 2}px`,
              top: `${mousePosition.y + Math.cos(Date.now() * 0.01) * 30 - 2}px`,
              animationDuration: '1.5s',
              animationDelay: '0s',
            }}
          />
          <div
            className="absolute w-1 h-1 rounded-full bg-accent/60 blur-[0.5px] animate-bounce"
            style={{
              left: `${mousePosition.x + Math.sin(Date.now() * 0.015 + Math.PI) * 25 - 2}px`,
              top: `${mousePosition.y + Math.cos(Date.now() * 0.015 + Math.PI) * 25 - 2}px`,
              animationDuration: '1.8s',
              animationDelay: '0.3s',
            }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full bg-primary/80 blur-[0.3px] animate-pulse"
            style={{
              left: `${mousePosition.x + Math.sin(Date.now() * 0.02 + Math.PI/2) * 20 - 1}px`,
              top: `${mousePosition.y + Math.cos(Date.now() * 0.02 + Math.PI/2) * 20 - 1}px`,
              animationDuration: '1.2s',
            }}
          />
        </>
      )}

      {/* Ripple effect on movement */}
      {isMoving && (
        <div
          className="absolute rounded-full border border-primary/20 animate-ping"
          style={{
            left: `${mousePosition.x - 25}px`,
            top: `${mousePosition.y - 25}px`,
            width: '50px',
            height: '50px',
            animationDuration: '1s',
          }}
        />
      )}
    </div>
  );
};

export default CursorFollower;
