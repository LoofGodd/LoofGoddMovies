import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import useUser from "../store";
import Logo from "./Logo";
import Menu from "./Menu";
import Modal from "./Modal/Modal";
import Search from "./Search";

type NavbarProps = {
  className?: string;
};
function Navbar({ className }: NavbarProps) {
  const [toggleSearch, setToggleSearch] = useState(false);
  const user = useUser((s) => s.user);
  function handleToggleSearch() {
    setToggleSearch((toggleSearch) => !toggleSearch);
  }

  return (
    <nav>
      <ul
        className={twMerge(
          "from-black/9  flex list-none  items-center  justify-between gap-x-4 bg-gradient-to-b from-black/80  to-dark/10 p-5 sm:p-8 md:p-0 md:px-10 md:py-6",
          className,
        )}
      >
        <li className="flex align-middle">
          <div className="relative flex  items-center justify-center gap-x-3">
            <Modal>
              <Modal.Open opens="menu">
                <div>
                  <FaBarsStaggered className="cursor-pointer text-4xl text-gray-100 hover:text-primary" />
                </div>
              </Modal.Open>
              <Modal.Window
                name="menu"
                className="absolute left-0 top-[6rem] z-[90] h-fit w-fit"
              >
                <div className="w-[10rem]">
                  <Menu />
                </div>
              </Modal.Window>
            </Modal>

            <div className="w-36">
              <Logo />
            </div>
          </div>
        </li>
        <li className="hidden  basis-[40rem] md:block">
          <Search />
        </li>
        <li>
          <div className="flex gap-x-4 [&>*]:cursor-pointer">
            <IoSearch
              className="block text-2xl text-primary md:hidden"
              onClick={() => handleToggleSearch()}
            />
            {/* <Button className="flex items-center justify-between gap-x-2 rounded-full bg-transparent text-gray-100  transition-colors duration-300 hover:bg-primary"> <span className="hidden md:block">Login</span>RE
              <FaArrowRight className="font-2xl" />
            </Button> */}
            <h1 className="text-4xl font-bold text-slate-400">{user}</h1>
          </div>
        </li>
      </ul>
      {toggleSearch && (
        <div className="block bg-primary/20 py-4 md:hidden">
          <Search />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
