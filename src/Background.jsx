import { useEffect, useRef } from "react";

export default function Background() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA && window.VANTA.GLOBE && vantaRef.current) {
      const effect = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x23153c,
        color: 0xff2f79, 
        shininess: 90,
        waveHeight: 15, 
        waveSpeed: 1, 
        zoom: 1.0,
      });

      return () => effect.destroy();
    }
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-screen -z-10"
    ></div>
  );
}
