import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useWidthBreakpoint } from "../../util/breakpoint";

const ParticlesBg = () => {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const md = useWidthBreakpoint(900);

  return (
    <Particles
      options={{
        particles: {
          move: {
            direction: "right",
            enable: true,
            speed: md ? 0.5 : 1,
            straight: true,
          },
          size: {
            value: { min: 2, max: 4 },
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
            value: { min: 0, max: 0.8 },
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: md ? 25 : 15,
          },
          zIndex: {
            value: -10,
          },
        },
      }}
      init={customInit}
    />
  );
};

export default ParticlesBg;
