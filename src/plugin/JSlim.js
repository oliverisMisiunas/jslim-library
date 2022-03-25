import AddOnClick from '../modules/AddOnClick/AddOnClick.js';
import CenterElements from '../modules/CenterElements/CenterElements.js';
import ClassOnHover from '../modules/ClassOnHover/ClassOnHover.js';
import CreateVariable from '../modules/CreateVariable/CreateVariable.js';
import DisplayDate from '../modules/DisplayDate/DisplayDate.js';
import PushToArray from '../modules/PushToArray/PushToArray.js';
import RemoveOnClick from '../modules/RemoveOnClick/RemoveOnClick.js';
import ScrollToPos from '../modules/ScrollToPos/ScrollToPos.js';
import ScrollToTop from '../modules/ScrollToTop/ScrollToTop.js';
import ToggleOnClick from '../modules/ToggleOnClick/ToggleOnClick.js';
import ToggleOnScroll from '../modules/ToggleOnScroll/ToggleOnScroll.js';

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
