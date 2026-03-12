import { body, fadeInAnimation, metal, midBrown } from "./constants";
import { isLandscape, px, styleText, TextDetails } from "./layout";
import { appendChildForPage, awaitLayoutForImageLoading } from "./page";
import { createElementSVG, fetchSVG, mapRange } from "./util";

export interface TextSquare {
    major: HTMLElement;
    minors: HTMLElement[];
}

export const scrollContainer = document.createElement("div");
scrollContainer.style.position = "absolute";
body.appendChild(scrollContainer);
(scrollContainer.style as any).scrollbarColor = `${midBrown} ${metal}55`;

scrollContainer.onwheel = (e) => {
    if (isLandscape() && !e.shiftKey) scrollContainer.scrollBy({ left: e.deltaY });
};

export function resizeScrollContainerLandscape() {
    const scrollHeight = getScrollHeight();

    const scrollLeft = scrollHeight * 0.5;

    const underScrollContainer = (innerHeight - scrollHeight) / 2;
    scrollContainer.style.height = px(scrollHeight + underScrollContainer); // place scroll bar at bottom of page
    scrollContainer.style.width = px(innerWidth - scrollLeft);
    scrollContainer.style.top = px((innerHeight - scrollHeight) / 2);
    scrollContainer.style.left = px(scrollLeft);

    scrollContainer.style.overflowX = "scroll";
    scrollContainer.style.overflowY = "hidden";
    scrollContainer.scrollTop = 0;
}

export function resizeScrollContainerPortrait() {
    const scrollWidth = getScrollWidth();
    const headerBarHeight = getHeaderBarHeight();
    scrollContainer.style.width = px(scrollWidth);
    scrollContainer.style.height = px(innerHeight - headerBarHeight);
    scrollContainer.style.left = px((innerWidth - scrollWidth) / 2);
    scrollContainer.style.top = px(headerBarHeight);

    scrollContainer.style.overflowX = "hidden";
    scrollContainer.style.overflowY = "scroll";
    scrollContainer.scrollLeft = 0;
}

export function resizeScrollContainerFull() {
    const headerBarHeight = getHeaderBarHeight();
    scrollContainer.style.width = px(innerWidth);
    scrollContainer.style.height = px(innerHeight - headerBarHeight);
    scrollContainer.style.left = px(0);
    scrollContainer.style.top = px(headerBarHeight);

    scrollContainer.style.overflowX = "hidden";
    scrollContainer.style.overflowY = "scroll";
    scrollContainer.scrollLeft = 0;
}

export const getHeaderBarHeight = () => {
    if (isLandscape()) {
        return (innerHeight - getScrollHeight()) / 2;
    } else {
        return innerHeight * 0.1;
    }
};

export function addScrollPadding() {
    const scrollPadding = document.createElement("div");
    scrollPadding.style.position = "absolute";
    scrollPadding.style.width = px(1); // any nonzero thickness is enough to extend scrollContainer
    scrollPadding.style.height = px(1);
    appendChildForPage(scrollContainer, scrollPadding);
    return scrollPadding;
}

export function addScrollImage(src: string): HTMLImageElement {
    const scrollImage = document.createElement("img");
    scrollImage.style.position = "absolute";
    scrollImage.src = src;
    scrollImage.style.animation = fadeInAnimation();
    scrollImage.style.cursor = "pointer";

    awaitLayoutForImageLoading(scrollImage);
    appendChildForPage(scrollContainer, scrollImage);
    return scrollImage;
}

export function addScrollSvg(src: string) {
    const scrollSvg = createElementSVG("svg");
    scrollSvg.style.position = "absolute";
    scrollSvg.style.animation = fadeInAnimation();
    async function fetchContent() {
        const fetched = await fetchSVG(src);
        for (const attr of fetched.attributes) scrollSvg.setAttribute(attr.name, attr.value);
        while (fetched.firstChild) scrollSvg.appendChild(fetched.firstChild);
    }
    fetchContent();

    appendChildForPage(scrollContainer, scrollSvg);
    return scrollSvg;
}

export function addText(text: string, parent: HTMLElement) {
    const scrollText = document.createElement("p");
    scrollText.style.position = "absolute";
    scrollText.innerHTML = text; // ZZZZ innerText would be better
    scrollText.style.animation = fadeInAnimation();
    appendChildForPage(parent, scrollText);
    return scrollText;
}

export function addScrollText(text: string) {
    return addText(text, scrollContainer);
}

export function addScrollTextSquare(majorText: string, ...minorTexts: string[]): TextSquare {
    const major = addScrollText(majorText);
    const minors = minorTexts.map(addScrollText);
    return { major, minors };
}

export function styleScrollTextSquare({ major, minors }: TextSquare, majorTextDetails: TextDetails, minorTextDetails: TextDetails) {
    styleText(major, majorTextDetails);
    for (const minor of minors) styleText(minor, minorTextDetails);
}

export function getScrollHeight() {
    return innerHeight * 0.7;
    // return 1.02 * innerHeight - 0.000485 * innerHeight * innerHeight;
    // return innerHeight;
}

export function getScrollWidth() {
    return innerWidth
    // const SCROLL_WIDTH_PROPORTION = 1;
    // return innerWidth * SCROLL_WIDTH_PROPORTION;
}

export function centerWithinScrollY(element: HTMLElement | SVGSVGElement, scale: number) {
    const s = getScrollHeight();
    const height = s * scale;
    element.style.height = px(height);
    element.style.top = px((s - height) / 2);
}

export function centerWithinScrollX(element: HTMLElement | SVGSVGElement, scale: number) {
    const s = getScrollWidth();
    const width = s * scale;
    element.style.width = px(width);
    element.style.left = px((s - width) / 2);
}
