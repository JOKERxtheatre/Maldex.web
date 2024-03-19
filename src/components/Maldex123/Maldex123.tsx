import VecTop from "@/assets/VectorTop.png";
import VecBottom from "@/assets/VectorBottom.png";
import Maldex1 from "@/assets/Maldex1.png";
import Maldex2 from "@/assets/Maldex2.png";

const Maldex123 = () => {
  return (
    <div className="Maldex123-section w-full mt-28 px-10">
      <div className="Maldex123 w-full">
        <h1 className="text-3xl  text-[#0000B0] font-medium leading-[64px]">
          С <span className="font-semibold">Maldex</span> просто как{" "}
          <span className="text-[#E94B67] font-semibold">раз</span>{" "}
          <span className="text-[#F7CE46] font-semibold">два</span>{" "}
          <span className="text-[#52B5A1] font-semibold">три</span>
        </h1>
        <div className="w-full flex px-20 flex-col items-start">
          <img
            src={VecTop}
            alt="img"
            className="w-[445px] h-[45px] translate-x-[540px]"
          />
          <div className="Maldex123-row flex justify-between w-full px-[54px] py-2">
            <div className="flex gap-6">
              <div className="w-[92px] h-[92px] flex items-center justify-center bg-[#E94B67] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-zinc-300 ease duration-150">
                <svg
                  width="41.000000"
                  height="34.000000"
                  viewBox="0 0 41 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M9.63 1.88C9.75 1.76 9.84 1.63 9.9 1.47C9.97 1.32 10 1.16 10 1C10 0.83 9.97 0.67 9.9 0.52C9.84 0.36 9.75 0.23 9.63 0.11C9.51 -0.01 9.38 -0.1 9.23 -0.16C9.07 -0.22 8.91 -0.26 8.75 -0.26C8.58 -0.26 8.42 -0.22 8.27 -0.16C8.12 -0.1 7.98 -0.01 7.86 0.11L3.75 4.23L2.13 2.61C1.9 2.37 1.58 2.24 1.25 2.24C0.91 2.24 0.6 2.37 0.36 2.61C0.13 2.84 0 3.16 0 3.5C0 3.66 0.03 3.82 0.09 3.97C0.15 4.13 0.25 4.26 0.36 4.38L2.86 6.88C2.98 7 3.12 7.09 3.27 7.15C3.42 7.21 3.58 7.25 3.75 7.25C3.91 7.25 4.07 7.21 4.23 7.15C4.38 7.09 4.51 7 4.63 6.88L9.63 1.88ZM16.25 3.5C15.91 3.5 15.6 3.63 15.36 3.86C15.13 4.1 15 4.41 15 4.75C15 5.08 15.13 5.39 15.36 5.63C15.6 5.86 15.91 6 16.25 6L38.75 6C39.08 6 39.4 5.86 39.63 5.63C39.86 5.39 40 5.08 40 4.75C40 4.41 39.86 4.1 39.63 3.86C39.4 3.63 39.08 3.5 38.75 3.5L16.25 3.5ZM16.25 16C15.91 16 15.6 16.13 15.36 16.36C15.13 16.6 15 16.91 15 17.25C15 17.58 15.13 17.89 15.36 18.13C15.6 18.36 15.91 18.5 16.25 18.5L38.75 18.5C39.08 18.5 39.4 18.36 39.63 18.13C39.86 17.89 40 17.58 40 17.25C40 16.91 39.86 16.6 39.63 16.36C39.4 16.13 39.08 16 38.75 16L16.25 16ZM15 29.75C15 29.41 15.13 29.1 15.36 28.86C15.6 28.63 15.91 28.5 16.25 28.5L38.75 28.5C39.08 28.5 39.4 28.63 39.63 28.86C39.86 29.1 40 29.41 40 29.75C40 30.08 39.86 30.39 39.63 30.63C39.4 30.86 39.08 31 38.75 31L16.25 31C15.91 31 15.6 30.86 15.36 30.63C15.13 30.39 15 30.08 15 29.75ZM9.63 15.63C9.87 15.4 10 15.08 10 14.75C10 14.41 9.87 14.09 9.63 13.86C9.4 13.62 9.08 13.49 8.75 13.49C8.41 13.49 8.1 13.62 7.86 13.86L3.75 17.98L2.13 16.36C1.9 16.12 1.58 15.99 1.25 15.99C0.91 15.99 0.6 16.12 0.36 16.36C0.13 16.59 0 16.91 0 17.25C0 17.58 0.13 17.9 0.36 18.13L2.86 20.63C2.98 20.75 3.12 20.84 3.27 20.9C3.42 20.96 3.58 21 3.75 21C3.91 21 4.07 20.96 4.23 20.9C4.38 20.84 4.51 20.75 4.63 20.63L9.63 15.63ZM9.63 26.36C9.75 26.48 9.84 26.61 9.9 26.77C9.97 26.92 10 27.08 10 27.25C10 27.41 9.97 27.57 9.9 27.72C9.84 27.88 9.75 28.01 9.63 28.13L4.63 33.13C4.51 33.25 4.38 33.34 4.23 33.4C4.07 33.46 3.91 33.5 3.75 33.5C3.58 33.5 3.42 33.46 3.27 33.4C3.12 33.34 2.98 33.25 2.86 33.13L0.36 30.63C0.13 30.4 0 30.08 0 29.75C0 29.41 0.13 29.09 0.36 28.86C0.6 28.62 0.91 28.49 1.25 28.49C1.58 28.49 1.9 28.62 2.13 28.86L3.75 30.48L7.86 26.36C7.98 26.24 8.12 26.15 8.27 26.09C8.42 26.03 8.58 25.99 8.75 25.99C8.91 25.99 9.07 26.03 9.23 26.09C9.38 26.15 9.51 26.24 9.63 26.36Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <div className="flex flex-col w-[160px] justify-center">
                <h2 className="font-medium text-[#E94B67] leading-[16px]">
                  Оставьте заявку по телефону
                </h2>
                <h3 className="font-extrabold">8 (800) 777-59-19</h3>
                <h6 className=" text-[10px]">либо оформите заказ на сайте</h6>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[92px] h-[92px] flex items-center justify-center bg-[#F7CE46] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-zinc-300 ease duration-150">
                <img src={Maldex1} alt="img" className="w-[50px] h-[50px]" />
              </div>
              <div className="flex flex-col w-[150px] justify-center">
                <h2 className="font-medium text-[#F7CE46] tracking-wide leading-[16px]">
                  Подтвердите заказ у менеджера
                </h2>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[92px] h-[92px] flex items-center justify-center bg-[#52B5A1] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-zinc-300 ease duration-150">
                <img src={Maldex2} alt="img" className="w-[70px] h-[70px]" />
              </div>
              <div className="flex flex-col w-[180px] justify-center">
                <h2 className="font-medium text-[#52B5A1] leading-[16px]">
                  Получите товар курьерской доставкой
                </h2>
                <h6 className=" text-[10px] font-medium">
                  или в нашем офисе: Варшавское шоссе 35
                </h6>
              </div>
            </div>
          </div>
          <img
            src={VecBottom}
            alt="img"
            className="w-[445px] h-[45px] translate-x-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Maldex123;
