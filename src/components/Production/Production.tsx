import Product1 from "@/assets/Production1.png";
import Product2 from "@/assets/Production2.png";
import Product3 from "@/assets/Production3.png";
import Product4 from "@/assets/Production4.png";
import Product5 from "@/assets/Production5.png";
import Product6 from "@/assets/Production6.png";
import Product7 from "@/assets/Production7.png";
import Product8 from "@/assets/Production8.png";
import Product9 from "@/assets/Production9.png";
import Product10 from "@/assets/Production10.png";
import Product11 from "@/assets/Production11.png";
import Product12 from "@/assets/Production12.png";
import Product13 from "@/assets/Production13.png";
import Product14 from "@/assets/Production14.png";

const Production = () => {
  return (
    <div className="Production-section w-full flex items-start flex-col justify-start px-6 mt-20 sm:px-4">
      <div className="Production w-full flex items-center justify-center">
        <div className="Production-row flex flex-col w-full gap-2.5">
          <div className="Production-1 flex gap-2.5 justify-center sm:flex-col">
            <div className="flex flex-col w-[550px] gap-5 sm:w-[360px]">
              <div className="flex flex-col gap-5 sm:gap-0">
                <h1 className="text-3xl font-medium  leading-[64px] text-[#E94B67] sm:text-2xl">
                  Сувенирная продукция
                </h1>
                <h2 className="text-[22px] font-normal sm:text-[15px]">
                  Каталог «от ручки до ракеты» «от промо до VIP» Более{" "}
                  <b>1 000 000 </b>
                  бизнес сувениров со всего мира
                </h2>
              </div>
              <img src={Product1} alt="img" className="w-full" />
            </div>
            <div className="flex flex-col w-[410px] gap-2.5 sm:w-[360px]">
              <img src={Product2} alt="img" className="w-full" />
              <div className="flex gap-2.5">
                <img
                  src={Product3}
                  alt="img"
                  className="w-[200px] sm:w-[175px]"
                />
                <img
                  src={Product4}
                  alt="img"
                  className="w-[200px] sm:w-[175px]"
                />
              </div>
            </div>
            <img
              src={Product5}
              alt="img5"
              className="w-[410px] h-[480px] sm:w-[360px] sm:h-[421px]"
            />
          </div>
          <div className="Production-2  flex gap-2.5 justify-center sm:flex-col">
            <div className="flex gap-2.5">
              <img
                src={Product6}
                alt="img6"
                className="w-[200px] sm:w-[87px]"
              />
              <img
                src={Product7}
                alt="img7"
                className="w-[620px] sm:w-[269px]"
              />
            </div>
            <img src={Product8} alt="img8" className="w-[550px] sm:[360px]" />
          </div>
          <div className="Production-3 flex gap-2.5 justify-center sm:flex-col">
            <div className="flex gap-2.5">
              <img
                src={Product9}
                alt="img10"
                className="w-[550px] sm:w-[239px]"
              />
              <div className="flex flex-col gap-2.5 w-[270px] sm:w-[117px]">
                <img src={Product10} alt="img11" className="w-full" />
                <img src={Product11} alt="img12" className="w-full" />
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2.5">
              <img
                src={Product12}
                alt="img12"
                className="w-[340px] sm:w-[223px]"
              />
              <div className="flex flex-col gap-2.5 w-[200px] sm:w-[131px]">
                <img src={Product13} alt="img13" className="w-full" />
                <img src={Product14} alt="img14" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-28 text-[40px] font-medium uppercase text-[#9D9C98] group sm:text-xl sm:mt-[70px]">
        <a href="/" className=" group-hover:underline">
          хочу задать <br /> вопрос
        </a>
      </h1>
    </div>
  );
};

export default Production;
