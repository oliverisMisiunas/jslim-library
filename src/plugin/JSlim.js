import AddOnClick from '../modules/AddOnClick.js';
import CenterElements from '../modules/CenterElements.js';
import ClassOnHover from '../modules/ClassOnHover.js';
import CreateVariable from '../modules/CreateVariable.js';
import DisplayDate from '../modules/DisplayDate.js';
import PushToArray from '../modules/PushToArray.js';
import RemoveOnClick from '../modules/RemoveOnClick.js';
import ScrollToPos from '../modules/ScrollToPos.js';
import ScrollToTop from '../modules/ScrollToTop.js';
import ToggleOnClick from '../modules/ToggleOnClick.js';
import ToggleOnScroll from '../modules/ToggleOnScroll.js';

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
