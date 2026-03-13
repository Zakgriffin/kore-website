import { interlaced } from "./util";

interface ElementAlignment {
    element: BoxElement;
    offset: number;
}

export interface TextDetails {
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    color: string;
    letterSpacing?: number;
    lineHeight?: number;
}

export type BoxElement = HTMLElement | SVGSVGElement;

export function px(pixels: number) {
    return pixels + "px";
}

function axisAligningWithGaps(axisSize: (element: BoxElement) => number) {
    return (elementOrGaps: (BoxElement | number)[]): [ElementAlignment[], number] => {
        const elementAlignments = [];
        let runningTotal = 0;
        for (const elementOrGap of elementOrGaps) {
            if (elementOrGap instanceof HTMLElement || elementOrGap instanceof SVGSVGElement) {
                elementAlignments.push({ element: elementOrGap, offset: runningTotal });
                runningTotal += axisSize(elementOrGap);
            } else {
                runningTotal += elementOrGap;
            }
        }
        return [elementAlignments, runningTotal];
    };
}

function unpx(value: string) {
    return Number(value.slice(0, -2));
}
export function posX(element: BoxElement) {
    // return element.getBoundingClientRect().left;
    return element instanceof HTMLElement ? element.offsetLeft : unpx(element.style.left);
}

export function setPosX(element: BoxElement, x: number) {
    element.style.left = px(x);
}

export function posY(element: BoxElement) {
    // return element.getBoundingClientRect().top;
    return element instanceof HTMLElement ? element.offsetTop : unpx(element.style.top);
}

export function posEndX(element: BoxElement) {
    return posX(element) + sizeX(element);
}

export function setPosY(element: BoxElement, y: number) {
    element.style.top = px(y);
}

export function posEndY(element: BoxElement) {
    return posY(element) + sizeY(element);
}

export function sizeX(element: BoxElement) {
    // return element.getBoundingClientRect().width;
    return element instanceof HTMLElement ? element.offsetWidth : element.clientWidth;
}

export function setSizeX(element: BoxElement, x: number) {
    element.style.width = px(x);
}

export function setImageSizeX(image: HTMLImageElement, x: number) {
    setSizeX(image, x);
    setSizeY(image, (x * image.naturalHeight) / image.naturalWidth);
}

export function sizeY(element: BoxElement) {
    // return element.getBoundingClientRect().height;
    return element instanceof HTMLElement ? element.offsetHeight : element.clientHeight;
}

export function setSizeY(element: BoxElement, y: number) {
    element.style.height = px(y);
}

export function setImageSizeY(image: HTMLImageElement, y: number) {
    setSizeY(image, y);
    setSizeX(image, (y * image.naturalWidth) / image.naturalHeight);
}

// ZZZZ want a short hand for common simple use
export const aligningWithGapsX = axisAligningWithGaps(sizeX);
export const aligningWithGapsY = axisAligningWithGaps(sizeY);

export function isLandscape() {
    return innerWidth / innerHeight > 1;
}

export function centerWithGapY(elements: HTMLElement[], gap: number, center: number) {
    const elementsWithGaps = interlaced(elements, gap);
    const [elementAlignments, totalHeight] = aligningWithGapsY(elementsWithGaps);

    for (const { element, offset } of elementAlignments) {
        element.style.top = px(offset + center - totalHeight / 2);
    }
}

export function centerX(parent: BoxElement, child: BoxElement) {
    return (sizeX(parent) - sizeX(child)) / 2;
}

export function centerY(parent: BoxElement, child: BoxElement) {
    return (sizeY(parent) - sizeY(child)) / 2;
}

export function styleText(scrollText: HTMLElement, s: TextDetails) {
    scrollText.style.position = "absolute";
    scrollText.style.fontFamily = s.fontFamily;
    scrollText.style.fontWeight = "" + s.fontWeight;
    scrollText.style.fontSize = px(s.fontSize);
    scrollText.style.color = s.color;
    if (s.letterSpacing) scrollText.style.letterSpacing = px(s.letterSpacing);
    if (s.lineHeight) scrollText.style.lineHeight = px(s.lineHeight);
}
