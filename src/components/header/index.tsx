import HeaderDropDown from "./dropdown";
import HeaderMain from "./main";
import HeaderMenu from "./menu";

const Header = Object.assign(HeaderMain, {
  DropDown: HeaderDropDown,
  Menu: HeaderMenu,
});

export default Header;
