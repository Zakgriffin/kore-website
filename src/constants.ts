import { isLandscape } from "./layout";
import { Signal } from "./signal";

export const body = document.body;
export const bodySig = new Signal();
window.onresize = bodySig.update;

export const midBrown = "#603913";
export const jeans = "rgb(38, 51, 86)"
export const deepBrown = "#3C2415";
export const black = "#000000";
export const white = "#FFFFFF";
export const metal = "#6C7175";
export const tileBrown = "#695038";

export const fadeInAnimation = () => `fadeIn${isLandscape() ? "X" : "Y"} ease 0.6s`;

export const SCROLL_TEXT_WIDTH_HEIGHT_PROPORTION = 0.95;
