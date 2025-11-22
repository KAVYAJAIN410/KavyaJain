import Image from "next/image";
interface BannerProp {
  projectOpen: boolean;
  title: any;
  img: any;
}
const ImageBanner: React.FC<BannerProp> = ({ projectOpen, title, img }) => {
  const bubbleStyling = {
    WebkitBoxShadow:
      "0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgb(137, 98, 253)",
    MozBoxShadow:
      "0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgb(137, 98, 253)",
    boxShadow:
      "0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgb(137, 98, 253)",
  };
  return (
    <>
      <div className="img-container w-[100%] md:w-[100%] m-auto h-[20vh] lg:h-[40vh]  overflow-hidden bg-cover bg-center relative">
        <div
          className={`hidden md:flex outline-content heading-text w-full h-full  justify-center items-center md:text-[max(8vw,5rem)] absolute z-[400] font-coolvetica tracking-wider text-transparent ${
            projectOpen
              ? "translate-y-0 "
              : "lg:-translate-y-[40vh] -translate-y-[20vh] "
          } transition-all duration-[600ms] delay-700`}
          style={{ textShadow: "0px 0px 15px rgba(0,0,0,0.4)" }}
        >
          {title}
        </div>
        <div
          className={`md:hidden text-white heading-text w-full h-full flex justify-center items-center text-[3rem]  absolute z-[400] font-coolvetica tracking-wider text-transparent ${
            projectOpen ? "translate-y-0 " : "-translate-y-[400px] "
          } transition-all duration-[600ms] delay-700`}
          style={{ textShadow: "0px 0px 15px rgba(0,0,0,0.4)" }}
        >
          {title}
        </div>
        {/* <Image
          src={`/images/${img}`}
          width={1000}
          height={400}
          alt="banner-img"
          //   ${
          //     projectOpen ? "translate-y-[0px]" : "translate-y-[300px]"
          //   }
          className={`imgBanner absolute h-full w-full blur-[4px] md:blur-[8px]`}
        /> */}
        <div className="absolute w-full h-full ">
          <div id="background-wrap">
            <div className="bubble x1"></div>
            <div className="bubble x2"></div>
            <div className="bubble x3"></div>
            <div className="bubble x4"></div>
            <div className="bubble x5"></div>
            <div className="bubble x6"></div>
            <div className="bubble x7"></div>
            <div className="bubble x8"></div>
            <div className="bubble x9"></div>
            <div className="bubble x10"></div>
          </div>
        </div>
        {/* <div
          className={`overlay absolute  w-[100%] h-[200%] -top-[-100%] bg-black transition-all duration-1000 delay-[1000ms] ease-linear ${
            projectOpen ? "-top-[200%]" : "top-[0]"
          }`}
        ></div> */}
      </div>
    </>
  );
};
export default ImageBanner;
