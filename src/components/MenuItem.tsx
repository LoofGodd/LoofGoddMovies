import { Link } from "react-router-dom";

interface Props {
  heading: string;
  href: string;
}
function MenuItem({ heading, href }: Props) {
  return (
    <li className="w-full rounded-lg px-2 transition-all duration-200 hover:bg-dark hover:text-gray-200">
      <Link to={href} className="block">
        {heading}
      </Link>
    </li>
  );
}

export default MenuItem;
