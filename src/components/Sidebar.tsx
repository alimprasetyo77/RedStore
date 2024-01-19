interface SidebarProps {
  onAction: (tab: string) => void;
  tab: string | null;
}

const Sidebar = ({ onAction, tab }: SidebarProps) => {
  return (
    <div className="w-[280px] bg-white border-r h-screen ">
      <ul className="space-y-3 p-6">
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-semibold rounded-md cursor-pointer ${
            tab === "profile" || tab === null ? "font-semibold bg-zinc-100" : null
          }`}
          onClick={() => onAction("profile")}>
          Profile
        </li>
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-semibold rounded-md cursor-pointer ${
            tab === "orders" ? "font-semibold bg-zinc-100" : null
          }`}
          onClick={() => onAction("orders")}>
          Orders
        </li>
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-semibold rounded-md cursor-pointer ${
            tab === "products" ? "font-semibold bg-zinc-100" : null
          }`}
          onClick={() => onAction("products")}>
          Products
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
