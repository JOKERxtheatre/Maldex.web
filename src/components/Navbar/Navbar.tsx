import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

const Navbar = () => {
  return (
    <div className="Navbar-section">
      <div className="Navbar flex min-h-[60px] items-center w-full justify-between px-6 border-b-2 border-zinc-200 sm:px-4">
        <div className="Logo-info flex gap-5">
          <div className="info flex gap-5">
            <div className="logo items-center flex">
              <svg
                width="130"
                height="20"
                viewBox="0 0 130 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.84075 13.693L0 5.22839V0.083252L9.84075 8.46485L19.6815 0.083252V19.9999H15.6244V8.63082L9.84075 13.693ZM4.05715 11.4523V19.9999H0V8.04992L4.05715 11.4523Z"
                  fill="#EC1026"
                />
                <path
                  d="M29.3516 19.9997H24.8628L32.0276 6.55591L34.2719 10.8712L29.3516 19.9997ZM39.7102 16.6802H33.495L35.5668 12.7799H37.7248L33.1497 4.31528L35.4804 0L46.0981 19.9167H41.6093L39.7102 16.6802Z"
                  fill="#EC1026"
                />
                <path
                  d="M54.904 0.497803V19.9995H50.8468V0.497803H54.904ZM57.062 19.9995V16.0992H62.673V19.9995H57.062Z"
                  fill="#EC1026"
                />
                <path
                  d="M71.731 0.497803V19.9995H67.6739V0.497803H71.731ZM75.8745 19.9995H73.9754V16.0992H75.8745C77.601 16.0992 78.9821 15.5183 80.1906 14.4395C81.3128 13.2777 81.9171 11.9499 81.9171 10.3732C81.9171 8.71343 81.3128 7.30267 80.1906 6.14086C78.9821 4.97905 77.601 4.39815 75.8745 4.39815H73.9754V0.497803H75.8745C78.6368 0.497803 81.0539 1.41065 82.9529 3.31933C84.9384 5.22801 85.8879 7.55162 85.8879 10.2902C85.8879 12.9457 84.9384 15.1863 82.9529 17.095C80.9675 19.0037 78.6368 19.9995 75.8745 19.9995Z"
                  fill="#EC1026"
                />
                <path
                  d="M95.5619 0.497803V19.9995H91.5048V0.497803H95.5619ZM97.72 0.497803H106.093V4.39815H97.72V0.497803ZM97.72 8.2985H106.093V12.1988H97.72V8.2985ZM97.72 16.0992H106.093V19.9995H97.72V16.0992Z"
                  fill="#EC1026"
                />
                <path
                  d="M125.166 19.9995L111.354 0.497803H116.275L130 19.9995H125.166ZM119.469 15.5183L116.275 19.9166H111.354L116.965 11.9499L119.469 15.5183ZM124.475 8.46447L121.972 4.97905L125.08 0.497803H130L124.475 8.46447Z"
                  fill="#EC1026"
                />
              </svg>
            </div>

            <div className="info-number flex gap-3 items-center">
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6397 16.1543L17.0264 14.0869C16.8174 13.9974 16.5893 13.9614 16.3628 13.9822C16.1364 14.003 15.9187 14.0799 15.7295 14.2061C15.7103 14.2184 15.692 14.2321 15.6748 14.2471L13.2637 16.2979C13.2387 16.3115 13.2108 16.3191 13.1823 16.3202C13.1539 16.3212 13.1255 16.3156 13.0996 16.3037C11.5498 15.5557 9.94435 13.96 9.19337 12.4317C9.18086 12.4061 9.17436 12.3781 9.17436 12.3496C9.17436 12.3212 9.18086 12.2931 9.19337 12.2676L11.251 9.8262C11.2658 9.80813 11.2794 9.78922 11.292 9.76956C11.4164 9.57962 11.4915 9.36169 11.5106 9.13544C11.5297 8.9092 11.4922 8.68176 11.4014 8.47366L9.34864 3.86819C9.23207 3.59632 9.03047 3.3696 8.77409 3.22204C8.51772 3.07449 8.2204 3.01406 7.92677 3.04983C6.65062 3.2176 5.47922 3.8443 4.63148 4.81282C3.78373 5.78134 3.31765 7.0254 3.32032 8.31253C3.32032 15.959 9.54103 22.1797 17.1875 22.1797C18.4746 22.1822 19.7185 21.716 20.687 20.8683C21.6555 20.0206 22.2822 18.8493 22.4502 17.5733C22.4859 17.281 22.4263 16.985 22.2803 16.7294C22.1342 16.4737 21.9095 16.272 21.6397 16.1543ZM17.1875 21.0078C10.1875 21.0078 4.4922 15.3125 4.4922 8.31253C4.48893 7.3105 4.8506 6.34157 5.50963 5.58675C6.16865 4.83194 7.07995 4.34288 8.07325 4.21096H8.09571C8.13507 4.2117 8.17328 4.22431 8.20535 4.24713C8.23741 4.26996 8.26183 4.30195 8.2754 4.33889L10.3359 8.93948C10.3477 8.96506 10.3538 8.99287 10.3538 9.02102C10.3538 9.04917 10.3477 9.07699 10.3359 9.10256L8.27443 11.5498C8.25905 11.5673 8.24501 11.5859 8.23243 11.6055C8.10343 11.8024 8.02747 12.0293 8.0119 12.2642C7.99633 12.4991 8.04169 12.7341 8.14357 12.9463C9.00978 14.7198 10.7969 16.4932 12.5899 17.3594C12.8033 17.4607 13.0394 17.505 13.2751 17.4879C13.5108 17.4707 13.738 17.3928 13.9346 17.2617C13.9531 17.249 13.9717 17.2354 13.9893 17.2207L16.3994 15.1699C16.4232 15.1572 16.4495 15.1497 16.4765 15.148C16.5035 15.1463 16.5305 15.1505 16.5557 15.1602L21.1699 17.2276C21.2076 17.2436 21.2393 17.2711 21.2605 17.3062C21.2817 17.3412 21.2914 17.382 21.2881 17.4229C21.1569 18.4166 20.6683 19.3286 19.9136 19.9884C19.159 20.6481 18.1899 21.0105 17.1875 21.0078Z"
                  fill="#222220"
                />
              </svg>

              <p className="text-sm font-normal sm:hidden">8-800-333-6784</p>
            </div>
            <div className="info-envelope flex gap-3 items-center">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0469 4.8125H3.95312C2.96074 4.8125 2.15625 5.61699 2.15625 6.60938V17.3906C2.15625 18.383 2.96074 19.1875 3.95312 19.1875H19.0469C20.0393 19.1875 20.8438 18.383 20.8438 17.3906V6.60938C20.8438 5.61699 20.0393 4.8125 19.0469 4.8125Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.03125 7.6875L11.5 12.7188L17.9688 7.6875"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm font-normal sm:hidden">
                <a href="info@maldex.ru">info@maldex.ru</a>
              </p>
            </div>
            <div className="info-place flex gap-3 items-center sm:hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99844 11.1917C11.4344 11.1917 12.5984 10.0276 12.5984 8.5917C12.5984 7.15576 11.4344 5.9917 9.99844 5.9917C8.5625 5.9917 7.39844 7.15576 7.39844 8.5917C7.39844 10.0276 8.5625 11.1917 9.99844 11.1917Z"
                  stroke="#222220"
                />
                <path
                  d="M3.0148 7.07508C4.65646 -0.141583 15.3481 -0.13325 16.9815 7.08342C17.9398 11.3167 15.3065 14.9001 12.9981 17.1168C11.3231 18.7334 8.67313 18.7334 6.9898 17.1168C4.6898 14.9001 2.05646 11.3084 3.0148 7.07508Z"
                  stroke="#222220"
                />
              </svg>
              <p className="text-sm font-normal">Москва</p>
            </div>
          </div>
        </div>
        <div className="min-price flex items-center sm:hidden">
          <p
            className="text-xs font-medium"
            style={{
              color: "rgb(157, 156, 152)",
            }}
          >
            Минимальная сумма заказа от 30 тыс рублей
          </p>
        </div>
        <div className="Navbar-end flex items-center gap-4">
          <ul className="flex text-sm  capitalize gap-6 sm:hidden">
            <li className="hover:text-[#EC1026] ease-in duration-150">
              <a href="/">Доставка</a>
            </li>
            <li className=" hover:text-[#EC1026]  ease-in duration-150">
              <a href="/">Оплата</a>
            </li>
            <li className=" hover:text-[#EC1026]  ease-in duration-150">
              <a href="/">Контакты</a>
            </li>
          </ul>
          <svg
            className="sm:hidden"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5219 17.3413C10.2385 17.4413 9.77187 17.4413 9.48854 17.3413C7.07187 16.5163 1.67188 13.0747 1.67188 7.24134C1.67188 4.66634 3.74687 2.58301 6.30521 2.58301C7.82187 2.58301 9.16354 3.31634 10.0052 4.44967C10.8469 3.31634 12.1969 2.58301 13.7052 2.58301C16.2635 2.58301 18.3385 4.66634 18.3385 7.24134C18.3385 13.0747 12.9385 16.5163 10.5219 17.3413Z"
              fill="#EC1026"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="bought-stuff flex bg-gray-100 border-gray-100 border rounded-[50px] items-center justify-center gap-1">
            <div className="bought-stuff-number w-9 h-9 rounded-full flex items-center justify-center text-white bg-[#EC1026]">
              3
            </div>
            <p className="text-sm font-semibold">14 619,00 ₽ </p>
          </div>
        </div>
      </div>
      <div className="Navbar-search-section h-20 flex items-center px-6 gap-8 sm:w-full sm:gap-0 sm:px-4">
        <div className="Nav-search-start flex gap-5 w-full sm:gap-4">
          <Menubar className="bg-[#EC1026] border-[#EC1026] w-[120px] rounded-xl hover:bg-[#982f39] hover:border-[#982f39] ease-linear duration-150 sm:p-0 sm:w-[40px]">
            <MenubarMenu>
              <MenubarTrigger className="text-white text-lg font-medium rounded-xl gap-2 flex items-center focus:bg-[#EC1026] focus:text-white data-[state=open]:bg-[#ff5667] data-[state=open]:border-[#ff5667] data-[state=open]:text-white ease-linear duration-150 sm:p-0">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 168 168"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29 40H139"
                    stroke="white"
                    stroke-width="22"
                    stroke-linecap="square"
                  />
                  <path
                    d="M29 84H139"
                    stroke="white"
                    stroke-width="22"
                    stroke-linecap="square"
                  />
                  <path
                    d="M29 128H139"
                    stroke="white"
                    stroke-width="22"
                    stroke-linecap="square"
                  />
                </svg>
                <span className="sm:hidden">Каталог</span>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Products{" "}
                  <MenubarShortcut>
                    <MdArrowForwardIos />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Pants</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>T-Shirts</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Sneakers</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Menubar className="sm:hidden">
            <MenubarMenu>
              <MenubarTrigger className="hover:bg-[#e3e3e3] ease-linear duration-150">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H12" stroke="#222220" stroke-width="1.5" />
                  <path d="M2 6H10" stroke="#222220" stroke-width="1.5" />
                  <path d="M4 11L8 11" stroke="#222220" stroke-width="1.5" />
                </svg>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Filter{" "}
                  <MenubarShortcut>
                    <MdArrowForwardIos />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Price: 100$-2300$</MenubarItem>
                <MenubarSeparator />
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  className="h-8"
                />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="input-search flex max-w-[963px] w-full bg-[#EC1026] h-9 rounded-xl relative">
            <Input
              className="w-[883px] pl-14 bg-none group placeholder:text-xs placeholder:opacity-[30%] placeholder:text-black placeholder:font-semibold sm:w-[266px]"
              placeholder="(Например: термокружка)"
            />
            <p className="absolute text-sm font-bold  mt-[8px] ml-2.5 select-none">
              Поиск{" "}
            </p>
            <Button
              variant={"catalog"}
              className="w-20 flex items-center justify-center h-9 hover:bg-transparent sm:w-9 sm:p-0 sm:pr-1"
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4519 17.4993C15.1779 17.4993 19.0092 13.9549 19.0092 9.58268C19.0092 5.21043 15.1779 1.66602 10.4519 1.66602C5.72577 1.66602 1.89453 5.21043 1.89453 9.58268C1.89453 13.9549 5.72577 17.4993 10.4519 17.4993Z"
                  stroke="#F9F7F2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.909 18.3327L18.1074 16.666"
                  stroke="#F9F7F2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="Nav-search-end flex w-full h-9 gap-7 sm:hidden">
          <div className="flex gap-2 justify-center">
            <h1 className="text-[28px] leading-[35px] font-light text-[#EC1026] underline-[10px] hover:underline items-center">
              <a href="/">new</a>
            </h1>
            <span className="text-sm hover:no-underline text-[#EC1026] text-start">
              243
            </span>
          </div>
          <div className="flex gap-2 justify-center">
            <h1 className="text-[28px] leading-[35px] font-light text-[#00B6BA] underline-[10px] hover:underline items-center">
              <a href="/">hits</a>
            </h1>
            <span className="text-sm hover:no-underline text-[#00B6BA] text-start">
              237
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
