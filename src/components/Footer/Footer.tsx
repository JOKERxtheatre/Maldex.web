import { Button } from "../ui/button";
import FooterSlider from "./FooterSlider";

const Footer = () => {
  return (
    <div className="Footer-section flex items-center w-full justify-center mt-[136px] flex-col sm:mt-10">
      <div className="Footer w-full flex flex-col">
        <FooterSlider />
        <div className="Footer-content flex flex-col p-6 bg-[#090909] w-full sm:px-4">
          <div className="Footer-start w-full flex justify-between">
            <div className="flex flex-col gap-6 sm:gap-3.5">
              <h4 className="opacity-50 text-sm font-medium text-white sm:text-xs">
                По всем вопросам
              </h4>
              <a
                href=""
                className="text-white text-5xl hover:underline underline-offset-[10px] font-medium leading-[50px] sm:text-xs"
              >
                maldex <br />
                @info.com
              </a>
            </div>
            <div className="flex flex-col gap-6 sm:gap-3.5">
              <h4 className="opacity-50 text-sm font-medium text-white sm:text-xs">
                Бесплатный звонок из любой точки России
              </h4>
              <a
                href=""
                className="text-white text-5xl hover:underline underline-offset-[10px] font-medium leading-[50px] sm:text-xs"
              >
                8-800 <br /> 333-67-84
              </a>
            </div>
            <svg
              className="sm:hidden 2xl:flex"
              width="68"
              height="69"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M55.22 65.19C58.14 66.16 61.34 67.13 65.1 68.39C66.91 68.94 68.02 67.97 67.46 66.02C66.21 62.4 65.24 59.07 64.26 56.14C63.85 54.61 61.9 53.08 60.09 52.67C56.47 51.69 53.55 50.86 50.91 50.16C49.66 49.75 48.96 50.44 49.24 51.83C49.93 54.47 50.77 57.4 51.74 61.01C52.3 62.68 53.83 64.63 55.22 65.19Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M50.94 17.76C53.58 17.06 56.5 16.23 60.12 15.26C61.93 14.84 63.88 13.17 64.29 11.78C65.27 8.86 66.24 5.66 67.49 1.9C68.05 0.09 67.08 -1.02 65.13 -0.46C61.51 0.79 58.17 1.76 55.25 2.74C53.72 3.15 52.19 5.1 51.77 6.91C50.8 10.53 49.96 13.59 49.27 16.09C48.85 17.48 49.55 18.18 50.94 17.76Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M48.42 28.88C50.79 28.6 53.71 28.33 57.19 27.91C59 27.77 60.66 26.66 60.81 25.68C61.22 23.6 61.78 21.23 62.47 18.73C62.75 17.47 61.5 16.78 59.69 17.2C56.21 18.17 53.15 19 50.51 19.7C49.26 20.12 48.01 21.23 47.73 22.34C47.17 24.43 46.75 26.24 46.48 27.77C46.48 28.46 47.17 29.02 48.42 28.88Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M48.3 37.65C50.66 37.93 53.58 38.21 57.06 38.48C58.87 38.62 60.26 37.93 60.26 36.95C60.12 35 60.12 33.06 60.26 30.97C60.4 30 58.87 29.3 57.06 29.44C53.58 29.72 50.8 30 48.3 30.28C47.05 30.41 46.07 31.11 46.07 31.81C45.93 33.2 45.93 34.59 46.07 36.12C46.21 36.81 47.18 37.51 48.3 37.65Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M31.74 20.97C33.13 21.1 34.52 21.1 36.05 20.97C36.75 20.97 37.44 19.99 37.58 18.74C37.86 16.37 38.14 13.45 38.42 9.98C38.56 8.17 37.86 6.78 36.89 6.78C34.94 6.91 32.99 6.91 30.91 6.78C29.93 6.64 29.24 8.17 29.38 9.98C29.66 13.45 29.93 16.37 30.21 18.74C30.35 19.99 31.05 20.83 31.74 20.97Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M30.04 61.14C31.99 61 33.93 61 36.02 61.14C36.99 61.28 37.69 59.75 37.55 57.94C37.27 54.46 36.99 51.54 36.72 49.18C36.58 47.92 35.88 46.95 35.18 46.95C33.79 46.81 32.4 46.81 31.01 46.95C30.32 46.95 29.62 47.92 29.48 49.18C29.2 51.54 28.92 54.46 28.65 57.94C28.37 59.75 29.06 61.28 30.04 61.14Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M41.47 61.71C43.55 62.13 45.92 62.68 48.42 63.24C49.67 63.52 50.37 62.27 49.95 60.46C48.98 56.98 48.15 53.92 47.45 51.28C47.03 50.02 45.92 48.77 44.81 48.49C42.72 47.94 40.91 47.52 39.38 47.24C38.55 47.1 38.13 47.94 38.27 49.05C38.55 51.41 38.82 54.34 39.24 57.81C39.38 59.9 40.35 61.57 41.47 61.71Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M22.11 19.13C24.2 19.69 26.01 20.1 27.54 20.38C28.37 20.52 28.79 19.69 28.65 18.57C28.37 16.21 28.09 13.29 27.68 9.81C27.54 8.14 26.42 6.33 25.45 6.19C23.36 5.78 21 5.22 18.5 4.66C17.24 4.38 16.55 5.64 16.96 7.45C17.94 11.06 18.77 13.98 19.47 16.63C19.89 17.74 21 18.85 22.11 19.13Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M6.83 15.25C10.45 16.22 13.37 17.06 16.01 17.75C17.26 18.17 17.96 17.47 17.68 16.08C16.99 13.44 16.15 10.52 15.18 6.9C14.76 5.09 13.09 3.14 11.7 2.73C8.78 1.89 5.44 0.78 1.82 -0.34C0.01 -1.03 -1.1 0.08 -0.54 1.89C0.71 5.51 1.68 8.85 2.66 11.77C3.21 13.3 5.16 14.83 6.83 15.25Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M9.9 38.49C13.38 38.21 16.3 37.93 18.67 37.66C19.92 37.52 20.89 36.82 20.89 36.13C21.03 34.73 21.03 33.34 20.89 31.95C20.75 31.26 19.92 30.56 18.67 30.42C16.3 30.14 13.38 29.87 9.9 29.59C8.23 29.45 6.7 30.14 6.7 31.12C6.84 33.07 6.84 35.01 6.7 37.1C6.56 37.93 8.09 38.63 9.9 38.49Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M1.82 68.39C5.44 67.14 8.78 66.16 11.7 65.19C13.23 64.77 14.76 62.82 15.18 61.01C16.15 57.4 16.99 54.48 17.68 51.83C18.1 50.58 17.4 49.88 16.01 50.16C13.37 50.86 10.45 51.69 6.83 52.67C5.02 53.08 3.07 54.75 2.66 56.15C1.68 59.07 0.71 62.27 -0.54 66.02C-1.1 67.97 0.01 68.94 1.82 68.39Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M7.24 50.86C10.72 49.88 13.78 49.05 16.42 48.35C17.67 47.94 18.92 46.82 19.2 45.71C19.76 43.62 20.18 41.82 20.45 40.29C20.59 39.45 19.76 39.03 18.65 39.17C16.28 39.45 13.36 39.73 9.88 40.15C8.07 40.29 6.4 41.4 6.26 42.37C5.85 44.46 5.29 46.82 4.73 49.33C4.18 50.58 5.43 51.28 7.24 50.86Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div className="Footer-middle flex w-full mt-[70px] justify-between ">
            <div className="sm:hidden">
              <h2 className="opacity-30 text-sm font-medium text-white uppercase tracking-wider">
                Основные категории
              </h2>
              <ul className="text-sm font-medium text-white flex flex-col gap-1">
                <li className=" hover:text-[#EC1026] ease-linear duration-150 mt-5">
                  <a href="/">Коллекции</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Автомобильные аксессуары</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Деловые подарки</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Для дома</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Для отдыха</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Для путешествий</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Для спорта</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150 mt-10">
                  <a href="/">Женские аксессуары</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Зонты</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Кухня и посуда</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Личные</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Мужские аксессуары</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Одежда</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Для офиса</a>
                </li>
              </ul>
            </div>
            <div className="sm:hidden">
              <ul className="text-sm font-medium text-white flex flex-col gap-1">
                <li className=" hover:text-[#EC1026] ease-linear duration-150 mt-10">
                  <a href="/">Пишушие инструменты</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Сумки</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Вкусные подарки</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Товары для детей</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Упаковка</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Электроника</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Подарочные наборы</a>
                </li>
              </ul>
            </div>
            <div className=" sm:hidden">
              <h2 className="opacity-30 text-sm font-medium text-white uppercase tracking-wider">
                разделы
              </h2>
              <ul className="text-sm font-medium text-white flex flex-col gap-1">
                <li className=" hover:text-[#EC1026] ease-linear duration-150 mt-5">
                  <a href="/">Главная</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">О компании</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Каталог</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Доставка и оплата</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Новости и статьи</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Команда</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Наши дилеры</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150 mt-5">
                  <a href="/">Стать дилером</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="opacity-30 text-sm font-medium text-white uppercase tracking-wider">
                Адрес
              </h2>
              <div className="flex flex-col gap-5 w-[156px] mt-5">
                <h3 className="text-white text-sm">
                  Мы в Москве: Огородный проезд, д. 5, стр. 2 Телефон: +7 (499)
                  704-33-62
                </h3>
                <h4 className="text-white text-sm">
                  {" "}
                  Мы в Санкт-Петербурге Московский пр., 10-12 Телефон: +7 (812)
                  389-44-14
                </h4>
              </div>
            </div>
            <svg
              className="sm:flex 2xl:hidden"
              width="68"
              height="69"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M55.22 65.19C58.14 66.16 61.34 67.13 65.1 68.39C66.91 68.94 68.02 67.97 67.46 66.02C66.21 62.4 65.24 59.07 64.26 56.14C63.85 54.61 61.9 53.08 60.09 52.67C56.47 51.69 53.55 50.86 50.91 50.16C49.66 49.75 48.96 50.44 49.24 51.83C49.93 54.47 50.77 57.4 51.74 61.01C52.3 62.68 53.83 64.63 55.22 65.19Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M50.94 17.76C53.58 17.06 56.5 16.23 60.12 15.26C61.93 14.84 63.88 13.17 64.29 11.78C65.27 8.86 66.24 5.66 67.49 1.9C68.05 0.09 67.08 -1.02 65.13 -0.46C61.51 0.79 58.17 1.76 55.25 2.74C53.72 3.15 52.19 5.1 51.77 6.91C50.8 10.53 49.96 13.59 49.27 16.09C48.85 17.48 49.55 18.18 50.94 17.76Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M48.42 28.88C50.79 28.6 53.71 28.33 57.19 27.91C59 27.77 60.66 26.66 60.81 25.68C61.22 23.6 61.78 21.23 62.47 18.73C62.75 17.47 61.5 16.78 59.69 17.2C56.21 18.17 53.15 19 50.51 19.7C49.26 20.12 48.01 21.23 47.73 22.34C47.17 24.43 46.75 26.24 46.48 27.77C46.48 28.46 47.17 29.02 48.42 28.88Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M48.3 37.65C50.66 37.93 53.58 38.21 57.06 38.48C58.87 38.62 60.26 37.93 60.26 36.95C60.12 35 60.12 33.06 60.26 30.97C60.4 30 58.87 29.3 57.06 29.44C53.58 29.72 50.8 30 48.3 30.28C47.05 30.41 46.07 31.11 46.07 31.81C45.93 33.2 45.93 34.59 46.07 36.12C46.21 36.81 47.18 37.51 48.3 37.65Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M31.74 20.97C33.13 21.1 34.52 21.1 36.05 20.97C36.75 20.97 37.44 19.99 37.58 18.74C37.86 16.37 38.14 13.45 38.42 9.98C38.56 8.17 37.86 6.78 36.89 6.78C34.94 6.91 32.99 6.91 30.91 6.78C29.93 6.64 29.24 8.17 29.38 9.98C29.66 13.45 29.93 16.37 30.21 18.74C30.35 19.99 31.05 20.83 31.74 20.97Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M30.04 61.14C31.99 61 33.93 61 36.02 61.14C36.99 61.28 37.69 59.75 37.55 57.94C37.27 54.46 36.99 51.54 36.72 49.18C36.58 47.92 35.88 46.95 35.18 46.95C33.79 46.81 32.4 46.81 31.01 46.95C30.32 46.95 29.62 47.92 29.48 49.18C29.2 51.54 28.92 54.46 28.65 57.94C28.37 59.75 29.06 61.28 30.04 61.14Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M41.47 61.71C43.55 62.13 45.92 62.68 48.42 63.24C49.67 63.52 50.37 62.27 49.95 60.46C48.98 56.98 48.15 53.92 47.45 51.28C47.03 50.02 45.92 48.77 44.81 48.49C42.72 47.94 40.91 47.52 39.38 47.24C38.55 47.1 38.13 47.94 38.27 49.05C38.55 51.41 38.82 54.34 39.24 57.81C39.38 59.9 40.35 61.57 41.47 61.71Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M22.11 19.13C24.2 19.69 26.01 20.1 27.54 20.38C28.37 20.52 28.79 19.69 28.65 18.57C28.37 16.21 28.09 13.29 27.68 9.81C27.54 8.14 26.42 6.33 25.45 6.19C23.36 5.78 21 5.22 18.5 4.66C17.24 4.38 16.55 5.64 16.96 7.45C17.94 11.06 18.77 13.98 19.47 16.63C19.89 17.74 21 18.85 22.11 19.13Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M6.83 15.25C10.45 16.22 13.37 17.06 16.01 17.75C17.26 18.17 17.96 17.47 17.68 16.08C16.99 13.44 16.15 10.52 15.18 6.9C14.76 5.09 13.09 3.14 11.7 2.73C8.78 1.89 5.44 0.78 1.82 -0.34C0.01 -1.03 -1.1 0.08 -0.54 1.89C0.71 5.51 1.68 8.85 2.66 11.77C3.21 13.3 5.16 14.83 6.83 15.25Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M9.9 38.49C13.38 38.21 16.3 37.93 18.67 37.66C19.92 37.52 20.89 36.82 20.89 36.13C21.03 34.73 21.03 33.34 20.89 31.95C20.75 31.26 19.92 30.56 18.67 30.42C16.3 30.14 13.38 29.87 9.9 29.59C8.23 29.45 6.7 30.14 6.7 31.12C6.84 33.07 6.84 35.01 6.7 37.1C6.56 37.93 8.09 38.63 9.9 38.49Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M1.82 68.39C5.44 67.14 8.78 66.16 11.7 65.19C13.23 64.77 14.76 62.82 15.18 61.01C16.15 57.4 16.99 54.48 17.68 51.83C18.1 50.58 17.4 49.88 16.01 50.16C13.37 50.86 10.45 51.69 6.83 52.67C5.02 53.08 3.07 54.75 2.66 56.15C1.68 59.07 0.71 62.27 -0.54 66.02C-1.1 67.97 0.01 68.94 1.82 68.39Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Vector"
                d="M7.24 50.86C10.72 49.88 13.78 49.05 16.42 48.35C17.67 47.94 18.92 46.82 19.2 45.71C19.76 43.62 20.18 41.82 20.45 40.29C20.59 39.45 19.76 39.03 18.65 39.17C16.28 39.45 13.36 39.73 9.88 40.15C8.07 40.29 6.4 41.4 6.26 42.37C5.85 44.46 5.29 46.82 4.73 49.33C4.18 50.58 5.43 51.28 7.24 50.86Z"
                fill="#EC1026"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
            <div className="sm:hidden">
              <h2 className="opacity-30 text-sm font-medium text-white uppercase tracking-wider">
                Мы в сети
              </h2>
              <ul className="text-sm font-medium text-white flex flex-col gap-1">
                <li className=" hover:text-[#EC1026] ease-linear duration-150 mt-5">
                  <a href="/">Одежда</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Ручки</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Ежедневники и блокноты</a>
                </li>
                <li className=" hover:text-[#EC1026] ease-linear duration-150">
                  <a href="/">Посуда</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-end w-full mt-9 gap-6 flex flex-col sm:gap-2.5 ">
            <hr className="w-full opacity-10" />
            <div className="flex w-full justify-between sm:flex-col-reverse sm:gap-6">
              <p className="text-white text-sm font-medium opacity-50">
                © 2023 Maldex. Все права защищены.
              </p>
              <div className="Buttons flex gap-2.5 2xl:flex sm:hidden">
                <Button
                  variant={"outline"}
                  className="border-white text-white border-2 px-2 h-6 uppercase flex items-center justify-center hover:text-black hover:bg-white bg-inherit text-[11px]"
                >
                  Политика конфиденциальности
                </Button>
                <Button
                  variant={"outline"}
                  className="border-white text-white border-2 px-2 h-6 uppercase flex items-center justify-center hover:text-black hover:bg-white bg-inherit text-[11px]"
                >
                  Написать сообщение
                </Button>
                <Button
                  variant={"outline"}
                  className="border-white text-white border-2 px-2 h-6 uppercase flex items-center justify-center hover:text-black hover:bg-white bg-inherit text-[11px]"
                >
                  Правила использования материалов
                </Button>
              </div>
              <div className="Buttons flex gap-2.5 flex-col">
                <Button
                  variant={"outline"}
                  className="border-white text-white border-2 px-2 h-6 uppercase flex items-center justify-center hover:text-black hover:bg-white bg-inherit text-[11px] w-[269px]"
                >
                  Правила использования материалов
                </Button>{" "}
                <Button
                  variant={"outline"}
                  className="border-white text-white border-2 px-2 h-6 uppercase flex items-center justify-center hover:text-black hover:bg-white bg-inherit text-[11px] w-[236px]"
                >
                  Политика конфиденциальности
                </Button>
                <Button
                  variant={"outline"}
                  className="border-white text-white border-2 px-2 h-6 uppercase flex items-center justify-center hover:text-black hover:bg-white bg-inherit text-[11px] w-[162px]"
                >
                  Написать сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
