import { Link } from "react-router-dom";
function SidebarItem({ to, icon, text }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-all duration-200"
      >
        <span className="text-xl mr-4">{icon}</span>
        <span className="text-lg">{text}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
