import FooterLink from "./FooterLink";
import Logo from "./Logo";
import avenger from "../data/avenger.jpg";

function Footer() {
  return (
    <footer className="relative h-fit w-full px-6 py-4">
      <div
        className={`absolute left-0 top-0 h-full w-full object-cover  object-center grayscale after:absolute after:left-0  after:top-0 after:h-full after:w-full after:bg-black after:bg-opacity-85`}
        style={{ background: `url('${avenger}')` }}
      ></div>
      <div className="relative z-50 h-60"></div>
      <div className="relative z-50">
        <div className="mx-auto w-44 md:mx-0 md:ms-auto">
          <Logo />
        </div>

        <div className="flex items-center justify-center gap-2 md:justify-between [&>*]:basis-1/2">
          <div className="flex basis-10/12 flex-col items-end gap-x-2  md:flex-row md:items-center">
            <span className="hidden text-white md:block">Link:</span>
            <ul className="flex flex-col items-end justify-between gap-x-4 gap-y-1 md:flex-row md:items-center">
              <li>
                <FooterLink href="#" heading="Movie" />
              </li>
              <li>
                <FooterLink href="#" heading="Tv Show" />
              </li>
              <li>
                <FooterLink href="#" heading="A-z" />
              </li>
              <li>
                <FooterLink href="#" heading="Recently Upload" />
              </li>
            </ul>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-y-2  md:basis-2/12 md:flex-row md:justify-end md:gap-x-2">
            <FooterLink href="#" heading="Request" />
            <FooterLink href="#" heading="Contact" />
          </div>
        </div>
        <div className="mt-5 h-[1px] w-full bg-primary"></div>
        <div className="mt-6 flex flex-col items-center justify-center text-gray-300">
          <p>&copy; LoofGodd</p>
          <p className="text-center text-sm font-bold tracking-widest text-primary">
            I made this website in order to get to a job quickly
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
