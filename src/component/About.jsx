import Bbout from "../assets/About.png";

const About = () => {
  return (
    <section className="px-16 flex py-14 items-center bg-[#111111]">
        <div>
          <img src={Bbout} alt="" className="w-[2050px]" />
        </div>
        <div className="font-poppins px-16 p-4 space-y-5 justify-center ">
          <h1 className="text-white font-medium text-3xl ">About Us.</h1>
          <p className="text-white text-[16px] font-light leading-7">
            Lorem ipsum dolor sit amet consectetur. A ornare rutrum eros lacinia
            egestas blandit malesuada arcu praesent. Sagittis mauris lacinia
            placerat arcu vestibulum et amet felis amet. Sed quam diam
            pellentesque cursus.
          </p>
          <p className="text-white text-[16px] font-light leading-7">
            Lorem ipsum dolor sit amet consectetur. A ornare rutrum eros lacinia
            pellentesque cursus egestas blandit malesuada arcu praesent. Sagittis mauris lacinia
            placerat arcu vestibulum et amet felis amet. Sed quam diam
            pellentesque cursus..
          </p>
        
          <button className="text-white border-[2px]  w-[150px] h-[60px] border-[#60B6F3] font-semibold">Learn more</button>
          </div>
    </section>
  );
};

export default About;
