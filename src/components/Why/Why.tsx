import Why1 from "@/assets/Whyimg1.png";
import Why2 from "@/assets/Whyimg2.png";
import Why3 from "@/assets/Whyimg3.png";
import Why4 from "@/assets/Whyimg4.png";
import Why5 from "@/assets/Whyimg5.png";
import Why6 from "@/assets/Whyimg6.png";
import Why7 from "@/assets/Whyimg7.png";
import Why8 from "@/assets/Whyimg8.png";
import Why9 from "@/assets/Whyimg9.png";

const Why = () => {
  return (
    <div className="Why-section w-full flex px-10 mt-16">
      <div className="Why flex flex-col gap-3.5 w-full">
        <h1 className="text-3xl font-semibold leading-[64px] text-[#E94B67]">
          Почему мы? <span className="text-[#0000B0]">Всё под 1 крышей!</span>
        </h1>
        <div className="Why-row w-full justify-between flex px-20">
          <div className="flex flex-col gap-5 max-w-[208px]">
            <div className="flex flex-col gap-3.5">
              <img src={Why1} alt="img" className="w-[50px] h-[50px]" />
              <h2 className="text-xl font-semibold text-[#0000B0]">Брендинг</h2>
            </div>
            <ul className="flex flex-col gap-3.5">
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Тампопечать</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Вышивка</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Шелкография</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Гравировка</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Термотрансфер</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Уф печать</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Сублимация</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Цифровая печать</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Прямая печать на ткани DTG</li>
              </div>
            </ul>
          </div>
          <div className="flex flex-col gap-5 max-w-[196px]">
            <div className="flex flex-col gap-3.5">
              <img src={Why2} alt="img" className="w-[50px] h-[50px]" />
              <h2 className="text-xl font-semibold text-[#BD43F6]">
                Складирование
              </h2>
            </div>
            <ul className="flex flex-col gap-3.5">
              <div className="">
                <span className="w-1.5 rounded-full bg-[#BD43F6] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Управление запасами</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#BD43F6] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">
                  Сокращение складских затрат для наших клиентов
                </li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#BD43F6] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">
                  Управление складской инвентаризацией (ушло/пришло)
                </li>
              </div>
            </ul>
          </div>
          <div className="flex flex-col gap-5 max-w-[180px]">
            <div className="flex flex-col">
              <img src={Why8} alt="img" className="w-[70px] h-[70px]" />
              <h2 className="text-xl font-semibold text-[#52B5A1] -mt-1">
                Логистика
              </h2>
            </div>
            <ul className="flex flex-col gap-3.5">
              <div className="">
                <span className="w-1.5 rounded-full bg-[#52B5A1] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Фирменная упаковка</li>
              </div>
              <div className="">
                <span className="w-1.5 rounded-full bg-[#52B5A1] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Бесплатная доставка</li>
              </div>
            </ul>
          </div>
          <div className="flex flex-col gap-5 max-w-[266px]">
            <div className="flex flex-col gap-3.5">
              <img src={Why3} alt="img" className="w-[50px] h-[50px]" />
              <h2 className="text-xl font-semibold text-[#F7CE46]">
                Сувениры со всего мира
              </h2>
            </div>
            <ul className="flex flex-col gap-3.5">
              <div className="">
                <span className="w-1.5 rounded-full bg-[#F7CE46] h-1.5 mt-2 absolute"></span>
                <li className="ml-4">Более 1 000 000 наименований</li>
              </div>
            </ul>
            <div className="w-full flex items-center justify-center">
              <div className="w-[236px] items-center justify-between flex">
                <div className="w-[108px] flex flex-col items-start gap-5">
                  <div className="flex items-center justify-center gap-2.5">
                    <img src={Why4} alt="img" className="w-10 h-10" />
                    <h6 className="text-sm">Россия</h6>
                  </div>
                  <div className="flex items-center justify-center gap-2.5">
                    <img src={Why5} alt="img" className="w-10 h-10" />
                    <h6 className="text-sm">Америка</h6>
                  </div>
                </div>
                <div className="w-[98px] flex flex-col items-start gap-5">
                  <div className="flex items-center justify-center gap-2.5">
                    <img src={Why6} alt="img" className="w-10 h-10" />
                    <h6 className="text-sm">Китай</h6>
                  </div>
                  <div className="flex items-center justify-center gap-2.5">
                    <img src={Why7} alt="img" className="w-10 h-10" />
                    <h6 className="text-sm">Европа</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-14 max-w-[266px]">
            <div className="flex flex-col gap-3.5">
              <img src={Why9} alt="img" className="w-[50px] h-[50px]" />
              <h2 className="text-xl font-semibold text-[#E94B67]">
                Дизайн макеты бесплатно
              </h2>
            </div>
            <div className="flex gap-2.5 items-center justify-start">
              <div className="border-[3px] border-[#0000B0] rounded-full w-[52px] h-[52px] flex items-center justify-center text-3xl font-medium text-[#0000B0] pr-1">
                15
              </div>
              <h2 className="text-2xl font-medium text-[#0000B0]">
                лет на рынке
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
