import { Carousel } from "antd";
import PPimg5 from "@/assets/PPimg5.png";
import { Button } from "@/components/ui/button";
import "@/components/Slider/PhotoSlider2/Smth2.css";

const PhotoSlider2 = () => {
  return (
    <div>
      <Carousel autoplay className="w-[690px] h-[345px]" dotPosition="top">
        <div>
          <div className="bg-[#00B6BA] flex w-[690px] items-center p-5 h-[345px] gap-20">
            <div className="w-[340px] flex flex-col h-full  justify-between">
              <div className="">
                <Button
                  variant={"outline"}
                  className="uppercase w-[166px] bg-transparent text-white py-0 h-[20px] text-[10px] tracking-wider"
                >
                  корпоративные подарки
                </Button>
                <h1 className="text-5xl text-white">
                  давайте займемся подарками!
                </h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img src={PPimg5} alt="img" className="w-[100px] h-[305px]" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[690px] items-center p-5 h-[345px] gap-20">
            <div className="w-[340px] flex flex-col h-full  justify-between">
              <div className="">
                <Button
                  variant={"outline"}
                  className="uppercase w-[166px] bg-transparent text-white py-0 h-[20px] text-[10px] tracking-wider"
                >
                  корпоративные подарки
                </Button>
                <h1 className="text-5xl text-white">
                  давайте займемся подарками!
                </h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img src={PPimg5} alt="img" className="w-[100px] h-[305px]" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[690px] items-center p-5 h-[345px] gap-20">
            <div className="w-[340px] flex flex-col h-full  justify-between">
              <div className="">
                <Button
                  variant={"outline"}
                  className="uppercase w-[166px] bg-transparent text-white py-0 h-[20px] text-[10px] tracking-wider"
                >
                  корпоративные подарки
                </Button>
                <h1 className="text-5xl text-white">
                  давайте займемся подарками!
                </h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img src={PPimg5} alt="img" className="w-[100px] h-[305px]" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[690px] items-center p-5 h-[345px] gap-20">
            <div className="w-[340px] flex flex-col h-full  justify-between">
              <div className="">
                <Button
                  variant={"outline"}
                  className="uppercase w-[166px] bg-transparent text-white py-0 h-[20px] text-[10px] tracking-wider"
                >
                  корпоративные подарки
                </Button>
                <h1 className="text-5xl text-white">
                  давайте займемся подарками!
                </h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[160px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img src={PPimg5} alt="img" className="w-[100px] h-[305px]" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoSlider2;
