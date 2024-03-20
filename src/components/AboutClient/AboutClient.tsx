import About1 from "@/assets/AboutClientimg1.png";
import About2 from "@/assets/AboutClientimg2.png";
import About3 from "@/assets/AboutClientimg3.png";
import About4 from "@/assets/AboutClientimg4.png";
import About5 from "@/assets/AboutClientimg5.png";

const AboutClient = () => {
  return (
    <div className="AboutClient-section w-full flex px-6 mt-20 sm:px-4">
      <div className="AboutClient flex flex-col w-full gap-5">
        <h1 className="text-3xl font-semibold text-[#0000B0] leading-[64px]">
          С заботой о клиентах
        </h1>
        <div className="AboutClient-row flex px-20 w-full justify-between sm:px-0 sm:flex-col sm:gap-8">
          <div className="flex sm:justify-between w-full gap-32 sm:gap-0">
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-3.5 w-[317px] sm:w-[165px]">
                <img
                  src={About1}
                  alt="img"
                  className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]"
                />
                <div className=" flex flex-col gap-5">
                  <h2 className="text-2xl text-[#52B5A1] font-medium sm:text-base">
                    Сборные заказы (gifts case)
                  </h2>
                  <ul>
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#52B5A1] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">
                        Разработка для вас индивидуальных кейсов/подарочных
                        наборов
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 w-[320px] sm:w-[165px]">
                <img
                  src={About2}
                  alt="img"
                  className="w-[50px] h-[50px]  sm:w-[40px] sm:h-[40px]"
                />
                <div className=" flex flex-col gap-5">
                  <h2 className="text-2xl text-[#BD43F6] font-medium sm:text-base">
                    При заказе от 50 000 рублей
                  </h2>
                  <ul className="flex flex-col gap-3.5">
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#BD43F6] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">
                        10% от стоимости заказа в подарок!
                      </li>
                    </div>
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#BD43F6] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">
                        Подарок из каталога на сумму 5000 рублей
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-3.5 w-[340px] sm:w-[165px]">
                <img
                  src={About3}
                  alt="img"
                  className="w-[50px] h-[50px]  sm:w-[40px] sm:h-[40px]"
                />
                <div className=" flex flex-col gap-5">
                  <h2 className="text-2xl text-[#F7CE46] font-medium sm:text-base">
                    Персональный менеджер
                  </h2>
                  <ul>
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#F7CE46] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">
                        Обслуживание клиента с учетом его персональных
                        предпочтений и требований
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 w-[266px] sm:w-[165px]">
                <img
                  src={About4}
                  alt="img"
                  className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]"
                />
                <div className=" flex flex-col gap-5">
                  <h2 className="text-2xl text-[#0000B0] font-medium sm:text-base">
                    Чем больше заказов, тем больше скидки
                  </h2>
                  <ul className="flex flex-col gap-3.5">
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">
                        Предоставляем дополнительную скидку на заказ
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-3.5 w-[340px] sm:w-[360px]">
              <div className="flex sm:items-center gap-5 flex-col sm:flex-row">
                <img
                  src={About5}
                  alt="img"
                  className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]"
                />
                <h2 className="text-2xl text-[#E94B67] font-medium sm:text-lg sm:w-[165px]">
                  Индивидуальные заказы в Китае
                </h2>
              </div>
              <div className=" flex flex-col gap-5">
                <ul className="flex flex-col gap-3.5 sm:flex-row sm:gap-11">
                  <div className="flex flex-col gap-3.5">
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#E94B67] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">Поможем воплотить любую идею</li>
                    </div>
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#E94B67] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">Разработка макета</li>
                    </div>
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#E94B67] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">Быстро найдем фабрику</li>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#E94B67] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">Согласуем образец</li>
                    </div>
                    <div className="">
                      <span className="w-1.5 rounded-full bg-[#E94B67] h-1.5 mt-2 absolute"></span>
                      <li className="ml-4">Доставим удобным вам способом</li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
