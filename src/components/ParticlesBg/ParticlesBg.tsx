import { type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import { useWidthBreakpoint } from "../../util/breakpoint";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const md = useWidthBreakpoint(900);
  const options: ISourceOptions = useMemo(
    () => ({
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
    }),
    []
  );

  return init ? <Particles options={options} id="tsparticles" /> : <></>;
};

export default ParticlesBg;
