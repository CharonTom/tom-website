import SwitchLanguage from "./SwitchLanguage";
import SwitchLight from "./SwitchLight";

function Header() {
  return (
    <header className="backdrop-blur-sm bg-light-header dark:bg-none w-full fixed z-20 shadow">
      <div className="mx-5 md:mx-10 lg:mx-14 flex justify-between items-center py-4 lg:px-10">
        <div className="p-[8px] dark:text-white text-secondary">
          <span className="font-semibold text-[18px]">Tom Charon</span>
        </div>
        <div className="flex items-center gap-x-5">
          <div>
            <SwitchLanguage />
          </div>
          <div>
            <SwitchLight />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
