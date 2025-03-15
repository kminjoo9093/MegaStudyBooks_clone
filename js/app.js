import {HeaderHeight} from "./ui/Header.js";
import {HandleMenuBtn} from "./ui/Gnb.js";
import {VisualSlide, PickSlide1, PickSlide2} from "./ui/Slide.js";
import {Tab} from "./ui/Tab.js";
import {RenderPickTab, renderPickContents} from "./ui/Pick.js";

HeaderHeight();
HandleMenuBtn();
VisualSlide();
RenderPickTab();
renderPickContents();
PickSlide1();
PickSlide2();
// Tab('.tab-hash');