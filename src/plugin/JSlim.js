import AddOnClick from "../modules/AddOnClick/AddOnClick";
import CenterElements from "../modules/CenterElements/CenterElements";
import ClassOnHover from "../modules/ClassOnHover/ClassOnHover";
import CreateVariable from "../modules/CreateVariable/CreateVariable";
import DisplayDate from "../modules/DisplayDate/DisplayDate";
import PushToArray from "../modules/PushToArray/PushToArray";
import RemoveOnClick from "../modules/RemoveOnClick/RemoveOnClick";
import ScrollToPos from "../modules/ScrollToPos/ScrollToPos";
import ScrollToTop from "../modules/ScrollToTop/ScrollToTop";
import ToggleOnClick from "../modules/ToggleOnClick/ToggleOnClick";
import ToggleOnScroll from "../modules/ToggleOnScroll/ToggleOnScroll";
import ScrollToBottom from "../modules/ScrollToBottom";

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

    ScrollToBottom();
}

export default JSlim;
