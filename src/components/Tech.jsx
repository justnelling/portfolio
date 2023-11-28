import { BallCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      {technologies.map((technology) => (
        <div className="block-container w-28 h-28 justify-center items-center mt-6 mx-6" key={technology.name}>
          {/* <BallCanvas icon={technology.icon}/> */}
          <div className="btn-back rounded-xl mt-10" />
          <div className="btn-front rounded-xl justify-center items-center">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-1/2 h-1/2 object-contain mx-auto mt-5"
            />
            <p className="flex flex-row justify-center">{technology.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
