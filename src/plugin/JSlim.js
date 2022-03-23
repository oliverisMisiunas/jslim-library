import AddOnClick from "./modules/AddOnClick";
import CenterElements from "./modules/CenterElement";
import ClassOnHover from "./modules/ClassOnHover";
import CreateVariable from "./modules/CreateVariable";
import DisplayDate from "./modules/DisplayDate";
import PushToArray from "./modules/PushToArray";
import RemoveOnClick from "./modules/RemoveOnClick";
import ScrollToPos from "./modules/ScrollToPos";
import ScrollToTop from "./modules/ScrollToTop";
import ToggleOnClick from "./modules/ToggleOnClick";
import ToggleOnScroll from "./modules/ToggleOnScroll";

function JSlim() {
  CenterElements();

  DisplayDate();

  CreateVariable();

  ClassOnHover();

  PushToArray();

  ToggleOnScroll();

  ScrollToTop();

  ToggleOnClick();

  RemoveOnClick();

  AddOnClick();

  ScrollToPos();
}

export default JSlim;
