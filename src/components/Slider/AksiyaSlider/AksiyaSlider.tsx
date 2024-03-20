import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AksiyaSlider = () => {
  return (
    <div className="AksiyaSlider w-full bg-[#F7F7F7] h-12 items-center flex justify-center">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex items-center justify-center gap-8">
            <h4 className="text-base  font-medium tracking-wide">
              <span className="text-[#EC1026] font-extrabold">30%</span> Cкидка
              при первом заказе!
            </h4>
            <Button
              variant={"outline"}
              className="border-black border-2 h-6 uppercase flex items-center justify-center hover:text-white hover:bg-black sm:hidden"
            >
              подробнее
            </Button>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-8">
            <h4 className="text-base  font-medium tracking-wide">
              <span className="text-[#EC1026] font-extrabold">30%</span> Cкидка
              при первом заказе!
            </h4>
            <Button
              variant={"outline"}
              className="border-black border-2 h-5 uppercase flex items-center justify-center hover:text-white hover:bg-black sm:hidden"
            >
              подробнее
            </Button>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-8">
            <h4 className="text-base  font-medium tracking-wide">
              <span className="text-[#EC1026] font-extrabold">30%</span> Cкидка
              при первом заказе!
            </h4>
            <Button
              variant={"outline"}
              className="border-black border-2 h-5 uppercase flex items-center justify-center hover:text-white hover:bg-black sm:hidden"
            >
              подробнее
            </Button>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="sm:translate-x-[66px]" />
        <CarouselNext className="sm:-translate-x-[66px]" />
      </Carousel>
    </div>
  );
};

export default AksiyaSlider;
