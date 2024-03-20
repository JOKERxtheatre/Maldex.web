const WhoAreWe = () => {
  return (
    <div className="WhoWeAre-section flex w-full px-6 mt-10 sm:px-4">
      <div className="WhoWeAre flex flex-col gap-2.5">
        <h1 className="text-4xl font-medium text-[#0000B0] leading-[64px] sm:text-2xl">
          Кто мы?
        </h1>
        <div className="px-20 flex flex-col gap-2.5 sm:px-0">
          <h2 className="text-2xl leading-[64px] font-normal sm:text-lg">
            Позвольте нам представить себя:
          </h2>
          <ul className="flex flex-col gap-5 sm:text-sm">
            <div className="">
              <span className="w-1.5 rounded-full bg-[#0000B0] h-1.5 mt-2 absolute"></span>
              <li className="ml-4">
                Maldex– это комплексный сервис по производству сувенирной
                продукции для российских и международных компаний. С нашей
                помощью компании смогут расширить клиентскую базу, повысить
                лояльность аудитории, укрепить позиции на рынке.
              </li>
            </div>
            <div className="">
              <span className="w-1.5 rounded-full bg-[#E94B67] h-1.5 mt-2 absolute"></span>
              <li className="ml-4">
                Наша команда берет на себя весь спектр задач по ведению сделки,
                Вам нужно предоставить лишь логотип для нанесения. Мы изготовим,
                забрендируем и доставим ваш бизнес сувенир.
              </li>
            </div>
            <div className="">
              <span className="w-1.5 rounded-full bg-[#F7CE46] h-1.5 mt-2 absolute"></span>
              <li className="ml-4">
                У Вас есть идеи собственных сувениров? –Прекрасно!С нашей
                помощью вы можете изготовить любой сувенир по индивидуальному
                дизайну.
              </li>
            </div>
            <div className="">
              <span className="w-1.5 rounded-full bg-[#52B5A1] h-1.5 mt-2 absolute"></span>
              <li className="ml-4">
                Бизнес-сувениры из России, Европы, Америки и Китая. Более{" "}
                <b>1 000 000</b> подарков со всего мира. Нам есть что вам
                предложить! / Нам есть чем вас удивить?
              </li>
            </div>
            <div className="">
              <span className="w-1.5 rounded-full bg-[#BC40F6] h-1.5 mt-2 absolute"></span>
              <li className="ml-4">
                Maldex – производи правильное впечатление!
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
