import { FaArrowRight } from "react-icons/fa6";

interface Props {
  href: string;
  heading: string;
}
function FooterLink({ href, heading }: Props) {
  return (
    <a
      href={href}
      className="flex items-center justify-center text-nowrap text-xs text-slate-400"
    >
      {heading}
      <div className="rounded-sm bg-primary p-1">
        <FaArrowRight className="text-[8px] text-black" />
      </div>
    </a>
  );
}

export default FooterLink;
