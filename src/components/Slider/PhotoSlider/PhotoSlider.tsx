import { Carousel } from "antd";
import PPimg4 from "@/assets/PPimg4.png";
import { Button } from "@/components/ui/button";

const PhotoSlider = () => {
  return (
    <div>
      <Carousel autoplay className="w-[830px] h-[410px]" dotPosition="right">
        <div>
          <div className="bg-[#00B6BA] flex w-[830px] items-center p-5 h-[410px] gap-8">
            <div className="w-[340px] flex flex-col h-full items-center justify-between">
              <h1 className="text-5xl text-white mt-8">скачать презентацию</h1>
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
              <img src={PPimg4} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[830px] items-center p-5 h-[410px] gap-8">
            <div className="w-[340px] flex flex-col h-full items-center justify-between">
              <h1 className="text-5xl text-white  mt-8">скачать презентацию</h1>
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
              <img src={PPimg4} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[830px] items-center p-5 h-[410px] gap-8">
            <div className="w-[340px] flex flex-col h-full items-center justify-between">
              <h1 className="text-5xl text-white mt-8">скачать презентацию</h1>
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
              <img src={PPimg4} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#00B6BA] flex w-[830px] items-center p-5 h-[410px] gap-8">
            <div className="w-[340px] flex flex-col h-full items-center justify-between">
              <h1 className="text-5xl text-white mt-8">скачать презентацию</h1>
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
              <img src={PPimg4} alt="img" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoSlider;
