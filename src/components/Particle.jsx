import { random } from "nanoid";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

  return (
    <Particles
      options={{
        particles: {
          color: {
            value: "#fff",
          },
          number: {
            value: 80,
          },
          opacity: {
            value: { min: 0.3, max: 0.4 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
          move: {
            direction:random,
            enable: true,
            speed: { min: 0.01, max: 0.5 },
            straight: false,
          },
        },
      }}
      init={init}
    />
  );
};

export default Particle;
