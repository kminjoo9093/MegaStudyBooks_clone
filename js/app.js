import {HeaderHeight} from "./ui/Header.js";
import {HandleMenuBtn} from "./ui/Gnb.js";
import {VisualSlide, PickSlide1, PickSlide2, BannerSlide, YoutubeSlide} from "./ui/Slide.js";
import {Tab} from "./ui/Tab.js";
import {RenderPickTab, renderPickContents} from "./ui/Pick.js";
import {renderBestSlideContent} from "./ui/Bestseller.js";

HeaderHeight();
HandleMenuBtn();
VisualSlide();
RenderPickTab();
renderPickContents();
PickSlide1();
// PickSlide2();
BannerSlide();
Tab('.bestseller-tab');
renderBestSlideContent();
YoutubeSlide();