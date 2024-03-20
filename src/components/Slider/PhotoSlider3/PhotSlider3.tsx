import { Carousel } from "antd";
import PPimg4 from "@/assets/PPimg4.png";
import { Button } from "@/components/ui/button";
import "@/components/Slider/PhotoSlider2/Smth2.css";

const PhotoSlider3 = () => {
  return (
    <div>
      <Carousel autoplay className="w-[360px] h-[191px]" dotPosition="bottom">
        <div>
          <div className="bg-[#00B6BA] flex w-[360px] items-center p-2.5 h-[191px] gap-20">
            <div className="w-[193px] flex flex-col h-full  justify-between">
              <div className="">
                <h1 className="text-xl text-white">Скачать презентацию</h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img
                src={PPimg4}
                alt="img"
                className="w-[183px] h-[168px] absolute -translate-x-[115px] -translate-y-[105px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[360px] items-center p-2.5 h-[191px] gap-20">
            <div className="w-[193px] flex flex-col h-full  justify-between">
              <div className="">
                <h1 className="text-xl text-white">Скачать презентацию</h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img
                src={PPimg4}
                alt="img"
                className="w-[183px] h-[168px] absolute -translate-x-[115px] -translate-y-[105px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[360px] items-center p-2.5 h-[191px] gap-20">
            <div className="w-[193px] flex flex-col h-full  justify-between">
              <div className="">
                <h1 className="text-xl text-white">Скачать презентацию</h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img
                src={PPimg4}
                alt="img"
                className="w-[183px] h-[168px] absolute -translate-x-[115px] -translate-y-[105px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[360px] items-center p-2.5 h-[191px] gap-20">
            <div className="w-[193px] flex flex-col h-full  justify-between">
              <div className="">
                <h1 className="text-xl text-white">Скачать презентацию</h1>
              </div>
              <div className="buttons flex items-center justify-between w-full">
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  заказать
                </Button>
                <Button
                  variant={"outline"}
                  className="uppercase w-[94px] bg-transparent text-white"
                >
                  скачать
                </Button>
              </div>
            </div>
            <div className="">
              <img
                src={PPimg4}
                alt="img"
                className="w-[183px] h-[168px] absolute -translate-x-[115px] -translate-y-[105px]"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoSlider3;
