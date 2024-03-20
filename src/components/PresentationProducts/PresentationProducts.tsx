import PPimg1 from "@/assets/PPimg1.png";
import PPimg2 from "@/assets/PPimg2.png";
import PPimg3 from "@/assets/PPimg3.png";
import PPimg6 from "@/assets/PPimg6.png";
import PPimg7 from "@/assets/PPimg7.png";
import PPimg8 from "@/assets/PPimg8.png";
import PPimg9 from "@/assets/PPimg9.png";

import { Button } from "../ui/button";
import PhotoSlider from "../Slider/PhotoSlider/PhotoSlider";
import PhotoSlider2 from "../Slider/PhotoSlider2/PhottoSlider2";
import PhotoSlider3 from "../Slider/PhotoSlider3/PhotSlider3";

const PProducts = () => {
  return (
    <div className="PresentationProducts-section">
      <div className="PresentationProducts">
        <div className="PresentationProducts-header flex items-center justify-start h-[50px] px-6 border-b-2 border-opacity-[0.5] border-[#E1DFDA] sm:hidden">
          <h4 className="text-sm text-[#222220]">
            <span className="opacity-50">Промо одежда /</span>
            <span className="opacity-50">Портативные колонки /</span>
            <span className="opacity-50">Беспроводная колонка Chubby /</span>
            <span className="text-[#EC1026]">Артикул 7557.30</span>
          </h4>
        </div>
        <div className="PresentationProducts-content w-full px-6 py-5 flex justify-center gap-2.5 sm:flex 2xl:hidden sm:flex-col items-center sm:px-4">
          <div>
            <PhotoSlider3 />
          </div>
          <div className="flex gap-2.5 w-full">
            <a
              href="/"
              className="group w-[175px]  h-[360px] flex  bg-[#F7F7F7]"
            >
              <div className=" flex flex-col cursor-pointer w-full items-center justify-center">
                <div className="flex items-center justify-center w-full">
                  <img
                    src={PPimg9}
                    alt="img2"
                    className=" bg-none  w-[111px] h-[232px]"
                  />
                </div>
              </div>
            </a>
            <div className="w-[175px]  gap-2.5 flex flex-col">
              <a href="/" className="group bg-[#F7F7F7]">
                <div className=" h-[175px] flex flex-col cursor-pointer">
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={PPimg3}
                      alt="img2"
                      className=" bg-none w-[82px] h-[122px]"
                    />
                  </div>
                </div>
              </a>
              <a href="/" className="group bg-[#F7F7F7]">
                <div className=" h-[175px] flex flex-col cursor-pointer">
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={PPimg7}
                      alt="img2"
                      className=" bg-none  w-[96px]"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="PresentationProducts-content w-full px-6 py-5 flex justify-center gap-2.5 sm:hidden">
          <a href="/" className="group w-[339px] flex  bg-[#F7F7F7]">
            <div className=" h-[410px] flex flex-col cursor-pointer w-full">
              <h4 className="text-sm font-medium ml-3 mt-3 hidden group-hover:flex">
                Перейти в каталог
              </h4>
              <div className="flex items-center justify-center w-full">
                <img
                  src={PPimg1}
                  alt="img2"
                  className="mt-24 bg-none group-hover:mt-16 w-[197px]"
                />
              </div>
              <Button
                variant={"catalog"}
                className="w-9 h-9 rounded-lg p-0 pl-[2px] pt-[1px]  mt-16 ml-[280px] group/item hidden group-hover:flex"
              >
                <svg
                  className="group-hover/item:translate-x-[5px] group-hover/item:translate-y-[3px]  ease-in duration-150"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0078 12.8533L20.0078 20.0068L12.8542 20.0068"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.98949 9.98901L19.9067 19.9062"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </a>
          <div className="w-[200px]  gap-2.5 flex flex-col">
            <a href="/" className="group ">
              <div className=" h-[200px] flex flex-col cursor-pointer">
                <h4 className="text-sm font-medium ml-3 mt-3 hidden group-hover:flex">
                  Перейти в каталог
                </h4>
                <img
                  src={PPimg2}
                  alt="img2"
                  className="mt-2 bg-none group-hover:-mt-6"
                />
                <Button
                  variant={"catalog"}
                  className="w-8 h-8 rounded-lg p-0 -mt-8 ml-[155px] group/item hidden group-hover:flex"
                >
                  <svg
                    className="group-hover/item:translate-x-[5px] group-hover/item:translate-y-[3px]  ease-in duration-150"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0078 12.8533L20.0078 20.0068L12.8542 20.0068"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.98949 9.98901L19.9067 19.9062"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </a>
            <a href="/" className="group bg-[#F7F7F7]">
              <div className=" h-[200px] flex flex-col cursor-pointer">
                <h4 className="text-sm font-medium ml-3 mt-3 hidden group-hover:flex">
                  Перейти в каталог
                </h4>
                <div className="flex items-center justify-center w-full">
                  <img
                    src={PPimg3}
                    alt="img2"
                    className="mt-6 bg-none group-hover:-mt-2 w-[94px] h-[140px]"
                  />
                </div>
                <Button
                  variant={"catalog"}
                  className="w-8 h-8 rounded-lg p-0 -mt-1 ml-[155px] group/item hidden group-hover:flex"
                >
                  <svg
                    className="group-hover/item:translate-x-[5px] group-hover/item:translate-y-[3px]  ease-in duration-150"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0078 12.8533L20.0078 20.0068L12.8542 20.0068"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.98949 9.98901L19.9067 19.9062"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </a>
          </div>
          <div>
            <PhotoSlider />
          </div>
        </div>
        <div className="PresentationProducts-content-2  w-full px-6 py-5 flex justify-center gap-2.5 sm:hidden">
          <div>
            <PhotoSlider2 />
          </div>
          <div className="flex flex-col gap-2.5">
            <a
              href="/"
              className="group w-[690px] h-[169px] flex  bg-[#F7F7F7]"
            >
              <h4 className="text-sm font-medium ml-3 mt-3 hidden group-hover:flex absolute">
                Перейти в каталог
              </h4>
              <div className=" h-[200px] flex flex-col cursor-pointer w-full">
                <div className="flex items-center justify-center w-full h-[169px]">
                  <img
                    src={PPimg6}
                    alt="img2"
                    className=" bg-none h-[92px] w-[276px]"
                  />
                </div>
              </div>
              <Button
                variant={"catalog"}
                className="w-8 h-8 rounded-lg p-0 mt-[125px] ml-[650px] group/item hidden group-hover:flex absolute"
              >
                <svg
                  className="group-hover/item:translate-x-[5px] group-hover/item:translate-y-[3px]  ease-in duration-150"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0078 12.8533L20.0078 20.0068L12.8542 20.0068"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.98949 9.98901L19.9067 19.9062"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </a>
            <div className="w-[690px]  gap-2.5 flex">
              <a
                href="/"
                className="group w-[340px] h-[166px] flex flex-col  bg-[#F7F7F7]"
              >
                <h4 className="text-sm font-medium ml-3 mt-3 hidden group-hover:flex absolute">
                  Перейти в каталог
                </h4>
                <div className=" h-[200px] flex flex-col cursor-pointer w-full">
                  <div className="flex items-center justify-center w-full h-[169px]">
                    <img
                      src={PPimg7}
                      alt="img2"
                      className=" bg-none h-[117px] w-[117px]"
                    />
                  </div>
                </div>
                <Button
                  variant={"catalog"}
                  className="w-8 h-8 rounded-lg p-0 mt-[125px] ml-[300px] group/item hidden group-hover:flex absolute"
                >
                  <svg
                    className="group-hover/item:translate-x-[5px] group-hover/item:translate-y-[3px]  ease-in duration-150"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0078 12.8533L20.0078 20.0068L12.8542 20.0068"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.98949 9.98901L19.9067 19.9062"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </a>
              <a
                href="/"
                className="group w-[340px] h-[166px] flex flex-col  bg-[#F7F7F7]"
              >
                <h4 className="text-sm font-medium ml-3 mt-3 hidden group-hover:flex absolute">
                  Перейти в каталог
                </h4>
                <div className=" h-[200px] flex flex-col cursor-pointer w-full">
                  <div className="flex items-center justify-center w-full h-[169px]">
                    <img
                      src={PPimg8}
                      alt="img2"
                      className=" bg-none h-[73px] w-[103px]"
                    />
                  </div>
                </div>
                <Button
                  variant={"catalog"}
                  className="w-8 h-8 rounded-lg p-0 mt-[125px] ml-[300px] group/item hidden group-hover:flex absolute"
                >
                  <svg
                    className="group-hover/item:translate-x-[5px] group-hover/item:translate-y-[3px]  ease-in duration-150"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0078 12.8533L20.0078 20.0068L12.8542 20.0068"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.98949 9.98901L19.9067 19.9062"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PProducts;
