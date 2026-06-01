import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth follow with lerp (0.15 = fast follow, 0.08 = slower/smooth)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.15;

      if (glow1Ref.current) {
        glow1Ref.current.style.transform = `translate(${currentPos.current.x - 200}px, ${currentPos.current.y - 200}px)`;
      }
      if (glow2Ref.current) {
        glow2Ref.current.style.transform = `translate(${currentPos.current.x - 150}px, ${currentPos.current.y - 150}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main glow following cursor */}
      <div
        ref={glow1Ref}
        className="absolute w-[400px] h-[400px] rounded-full will-change-transform"
        style={{
          left: 0,
          top: 0,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(129, 140, 248, 0.08) 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      {/* Secondary purple glow */}
      <div
        ref={glow2Ref}
        className="absolute w-[300px] h-[300px] rounded-full will-change-transform"
        style={{
          left: 0,
          top: 0,
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, rgba(129, 140, 248, 0.05) 50%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
};

export default CursorGlow;
