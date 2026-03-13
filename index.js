/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.ts"
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SCROLL_TEXT_WIDTH_HEIGHT_PROPORTION: () => (/* binding */ SCROLL_TEXT_WIDTH_HEIGHT_PROPORTION),
/* harmony export */   black: () => (/* binding */ black),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   bodySig: () => (/* binding */ bodySig),
/* harmony export */   deepBrown: () => (/* binding */ deepBrown),
/* harmony export */   fadeInAnimation: () => (/* binding */ fadeInAnimation),
/* harmony export */   jeans: () => (/* binding */ jeans),
/* harmony export */   metal: () => (/* binding */ metal),
/* harmony export */   midBrown: () => (/* binding */ midBrown),
/* harmony export */   tileBrown: () => (/* binding */ tileBrown),
/* harmony export */   white: () => (/* binding */ white)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./src/signal.ts");


const body = document.body;
const bodySig = new _signal__WEBPACK_IMPORTED_MODULE_1__.Signal();
window.onresize = bodySig.update;
const midBrown = "#603913";
const jeans = "rgb(38, 51, 86)";
const deepBrown = "#3C2415";
const black = "#000000";
const white = "#FFFFFF";
const metal = "#6C7175";
const tileBrown = "#695038";
const fadeInAnimation = () => `fadeIn${(0,_layout__WEBPACK_IMPORTED_MODULE_0__.isLandscape)() ? "X" : "Y"} ease 0.6s`;
const SCROLL_TEXT_WIDTH_HEIGHT_PROPORTION = 0.95;


/***/ },

/***/ "./src/layout.ts"
/*!***********************!*\
  !*** ./src/layout.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aligningWithGapsX: () => (/* binding */ aligningWithGapsX),
/* harmony export */   aligningWithGapsY: () => (/* binding */ aligningWithGapsY),
/* harmony export */   centerWithGapY: () => (/* binding */ centerWithGapY),
/* harmony export */   centerX: () => (/* binding */ centerX),
/* harmony export */   centerY: () => (/* binding */ centerY),
/* harmony export */   isLandscape: () => (/* binding */ isLandscape),
/* harmony export */   posEndX: () => (/* binding */ posEndX),
/* harmony export */   posEndY: () => (/* binding */ posEndY),
/* harmony export */   posX: () => (/* binding */ posX),
/* harmony export */   posY: () => (/* binding */ posY),
/* harmony export */   px: () => (/* binding */ px),
/* harmony export */   setImageSizeX: () => (/* binding */ setImageSizeX),
/* harmony export */   setImageSizeY: () => (/* binding */ setImageSizeY),
/* harmony export */   setPosX: () => (/* binding */ setPosX),
/* harmony export */   setPosY: () => (/* binding */ setPosY),
/* harmony export */   setSizeX: () => (/* binding */ setSizeX),
/* harmony export */   setSizeY: () => (/* binding */ setSizeY),
/* harmony export */   sizeX: () => (/* binding */ sizeX),
/* harmony export */   sizeY: () => (/* binding */ sizeY),
/* harmony export */   styleText: () => (/* binding */ styleText)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");

function px(pixels) {
    return pixels + "px";
}
function axisAligningWithGaps(axisSize) {
    return (elementOrGaps) => {
        const elementAlignments = [];
        let runningTotal = 0;
        for (const elementOrGap of elementOrGaps) {
            if (elementOrGap instanceof HTMLElement || elementOrGap instanceof SVGSVGElement) {
                elementAlignments.push({ element: elementOrGap, offset: runningTotal });
                runningTotal += axisSize(elementOrGap);
            }
            else {
                runningTotal += elementOrGap;
            }
        }
        return [elementAlignments, runningTotal];
    };
}
function unpx(value) {
    return Number(value.slice(0, -2));
}
function posX(element) {
    // return element.getBoundingClientRect().left;
    return element instanceof HTMLElement ? element.offsetLeft : unpx(element.style.left);
}
function setPosX(element, x) {
    element.style.left = px(x);
}
function posY(element) {
    // return element.getBoundingClientRect().top;
    return element instanceof HTMLElement ? element.offsetTop : unpx(element.style.top);
}
function posEndX(element) {
    return posX(element) + sizeX(element);
}
function setPosY(element, y) {
    element.style.top = px(y);
}
function posEndY(element) {
    return posY(element) + sizeY(element);
}
function sizeX(element) {
    // return element.getBoundingClientRect().width;
    return element instanceof HTMLElement ? element.offsetWidth : element.clientWidth;
}
function setSizeX(element, x) {
    element.style.width = px(x);
}
function setImageSizeX(image, x) {
    setSizeX(image, x);
    setSizeY(image, (x * image.naturalHeight) / image.naturalWidth);
}
function sizeY(element) {
    // return element.getBoundingClientRect().height;
    return element instanceof HTMLElement ? element.offsetHeight : element.clientHeight;
}
function setSizeY(element, y) {
    element.style.height = px(y);
}
function setImageSizeY(image, y) {
    setSizeY(image, y);
    setSizeX(image, (y * image.naturalWidth) / image.naturalHeight);
}
// ZZZZ want a short hand for common simple use
const aligningWithGapsX = axisAligningWithGaps(sizeX);
const aligningWithGapsY = axisAligningWithGaps(sizeY);
function isLandscape() {
    return innerWidth / innerHeight > 1;
}
function centerWithGapY(elements, gap, center) {
    const elementsWithGaps = (0,_util__WEBPACK_IMPORTED_MODULE_0__.interlaced)(elements, gap);
    const [elementAlignments, totalHeight] = aligningWithGapsY(elementsWithGaps);
    for (const { element, offset } of elementAlignments) {
        element.style.top = px(offset + center - totalHeight / 2);
    }
}
function centerX(parent, child) {
    return (sizeX(parent) - sizeX(child)) / 2;
}
function centerY(parent, child) {
    return (sizeY(parent) - sizeY(child)) / 2;
}
function styleText(scrollText, s) {
    scrollText.style.position = "absolute";
    scrollText.style.fontFamily = s.fontFamily;
    scrollText.style.fontWeight = "" + s.fontWeight;
    scrollText.style.fontSize = px(s.fontSize);
    scrollText.style.color = s.color;
    if (s.letterSpacing)
        scrollText.style.letterSpacing = px(s.letterSpacing);
    if (s.lineHeight)
        scrollText.style.lineHeight = px(s.lineHeight);
}


/***/ },

/***/ "./src/modal.ts"
/*!**********************!*\
  !*** ./src/modal.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signal */ "./src/signal.ts");
/* harmony import */ var _spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spring */ "./src/spring.ts");




class Modal {
    constructor(color, onOpen, onAnimate, onClose) {
        this.onAnimate = onAnimate;
        this.isOpening = false;
        this.onLayout = () => { };
        this.beginOpen = () => {
            const escapeKeyListener = (e) => {
                if (e.key === "Escape") {
                    this.beginClose();
                    document.removeEventListener("keydown", escapeKeyListener);
                }
            };
            document.addEventListener("keydown", escapeKeyListener);
            this.spring.target = 1;
            (0,_spring__WEBPACK_IMPORTED_MODULE_3__.animateSpring)(this.spring, this.springSig);
            this.isOpening = true;
        };
        this.beginClose = () => {
            this.spring.target = 0;
            (0,_spring__WEBPACK_IMPORTED_MODULE_3__.animateSpring)(this.spring, this.springSig);
            this.isOpening = false;
        };
        this.spring = new _spring__WEBPACK_IMPORTED_MODULE_3__.Spring(0);
        this.spring.setStiffnessCritical(120);
        this.springSig = new _signal__WEBPACK_IMPORTED_MODULE_2__.Signal();
        this.spring.onUnrest = () => {
            if (this.spring.position === 0)
                openModal();
        };
        let closeModal;
        this.spring.onRest = () => {
            if (this.spring.position === 0 && closeModal)
                closeModal();
        };
        const openModal = () => {
            const backdrop = document.createElement("div");
            backdrop.style.position = "fixed";
            backdrop.style.backgroundColor = color;
            _constants__WEBPACK_IMPORTED_MODULE_0__.body.appendChild(backdrop);
            onOpen(backdrop);
            const animate = () => {
                const time = this.spring.position;
                backdrop.style.opacity = time + "";
                backdrop.style.pointerEvents = time > 0.9 ? "all" : "none";
                this.onAnimate(time);
            };
            (0,_signal__WEBPACK_IMPORTED_MODULE_2__.effect)(animate, [this.springSig]);
            const layoutModal = () => {
                backdrop.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerWidth);
                backdrop.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerHeight);
                this.onLayout();
            };
            (0,_signal__WEBPACK_IMPORTED_MODULE_2__.effect)(layoutModal, [_constants__WEBPACK_IMPORTED_MODULE_0__.bodySig]);
            closeModal = () => {
                _constants__WEBPACK_IMPORTED_MODULE_0__.bodySig.unsubscribe(layoutModal);
                this.springSig.unsubscribe(animate);
                _constants__WEBPACK_IMPORTED_MODULE_0__.body.removeChild(backdrop);
                onClose();
            };
        };
        this.onAnimate(0);
    }
}


/***/ },

/***/ "./src/page.ts"
/*!*********************!*\
  !*** ./src/page.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChildForPage: () => (/* binding */ appendChildForPage),
/* harmony export */   awaitLayoutForImageLoading: () => (/* binding */ awaitLayoutForImageLoading),
/* harmony export */   cleanLastPage: () => (/* binding */ cleanLastPage),
/* harmony export */   pageCleanups: () => (/* binding */ pageCleanups),
/* harmony export */   registerUpdateLayout: () => (/* binding */ registerUpdateLayout),
/* harmony export */   wahhh: () => (/* binding */ wahhh)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./src/signal.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const pageCleanups = new Set();
const awaitBeforeLayouts = new Set();
const beforeLayouts = new Set();
function awaitLayoutForImageLoading(image) {
    awaitBeforeLayouts.add(image.decode());
}
// TODO gross
function wahhh() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(awaitBeforeLayouts);
        awaitBeforeLayouts.clear();
        yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.sleep)(10);
        runAllAndClear(beforeLayouts);
        _constants__WEBPACK_IMPORTED_MODULE_0__.bodySig.update(); // TODO gross
    });
}
function registerUpdateLayout(updateLayout) {
    return __awaiter(this, void 0, void 0, function* () {
        yield wahhh();
        (0,_signal__WEBPACK_IMPORTED_MODULE_1__.effect)(updateLayout, [_constants__WEBPACK_IMPORTED_MODULE_0__.bodySig]);
        pageCleanups.add(() => _constants__WEBPACK_IMPORTED_MODULE_0__.bodySig.unsubscribe(updateLayout));
    });
}
function appendChildForPage(parent, child) {
    beforeLayouts.add(() => {
        parent.appendChild(child);
        pageCleanups.add(() => parent.removeChild(child));
    });
}
function cleanLastPage() {
    runAllAndClear(pageCleanups);
}
function runAllAndClear(set) {
    for (const item of set)
        item();
    set.clear();
}


/***/ },

/***/ "./src/pages/home.ts"
/*!***************************!*\
  !*** ./src/pages/home.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHomePage: () => (/* binding */ addHomePage),
/* harmony export */   addMenuButton: () => (/* binding */ addMenuButton),
/* harmony export */   addNavBar: () => (/* binding */ addNavBar)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout */ "./src/layout.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal */ "./src/modal.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page */ "./src/page.ts");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scroll */ "./src/scroll.ts");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signal */ "./src/signal.ts");
/* harmony import */ var _spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spring */ "./src/spring.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/util.ts");








const T = -10000;
function layoutSectionLine(sectionLine, y) {
    const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getScrollWidth)();
    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeY)(sectionLine, 0.001 * s);
    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(sectionLine, innerWidth);
    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(sectionLine, y);
}
const navItemFromString = {
    about: {},
    services: {},
    bio: {},
    recentProjects: {},
    contact: {},
};
function giveHover(element, enterColor, leaveColor) {
    element.style.cursor = "pointer";
    element.style.transition = "color 0.2s";
    element.onmouseenter = () => (element.style.color = enterColor);
    element.onmouseleave = () => (element.style.color = leaveColor);
}
function addMenuButton() {
    const sz = 60;
    const menuButton = (0,_util__WEBPACK_IMPORTED_MODULE_7__.createIconSVG)(sz);
    menuButton.style.stroke = _constants__WEBPACK_IMPORTED_MODULE_0__.white;
    const menuLine = (0,_util__WEBPACK_IMPORTED_MODULE_7__.makeLine)(menuButton, 4);
    const line1 = menuLine();
    const line2 = menuLine();
    const line3 = menuLine();
    line1.style.strokeLinecap = 'square';
    line2.style.strokeLinecap = 'square';
    line3.style.strokeLinecap = 'square';
    const menuModal = new _modal__WEBPACK_IMPORTED_MODULE_2__.Modal("#000000ee", (backdrop) => {
        const menuPageNavs = [];
        for (const [pageName, navItem] of Object.entries(navItemFromString)) {
            const menuPageNav = document.createElement("span");
            menuPageNav.style.position = "absolute";
            menuPageNav.innerText = navItem.name;
            menuPageNav.style.cursor = "pointer";
            menuPageNav.onclick = () => {
                menuModal.beginClose();
                navItem.barElement.click();
            };
            backdrop.appendChild(menuPageNav);
            menuPageNavs.push(menuPageNav);
        }
        menuModal.onLayout = () => {
            for (const menuPageNav of menuPageNavs) {
                const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getScrollWidth)();
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(menuPageNav, { letterSpacing: 0.005 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.06 * s, fontFamily: "Roboto" });
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(menuPageNav, s / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(menuPageNav) / 2);
            }
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.centerWithGapY)(menuPageNavs, innerHeight * 0.08, innerHeight / 2);
        };
        menuButton.style.zIndex = "1";
    }, (time) => {
        const s = time * sz;
        (0,_util__WEBPACK_IMPORTED_MODULE_7__.setAttributes)(line1, { x1: 0, y1: 0, x2: sz, y2: s });
        line2.style.opacity = (sz - s) / sz + "";
        (0,_util__WEBPACK_IMPORTED_MODULE_7__.setAttributes)(line2, { x1: 0, y1: sz / 2, x2: sz, y2: sz / 2 });
        (0,_util__WEBPACK_IMPORTED_MODULE_7__.setAttributes)(line3, { x1: 0, y1: sz, x2: sz, y2: sz - s });
    }, () => {
        menuButton.style.zIndex = "0";
    });
    menuButton.onclick = () => {
        if (menuModal.isOpening) {
            menuModal.beginClose();
        }
        else {
            menuModal.beginOpen();
        }
    };
    document.body.appendChild(menuButton);
    (0,_signal__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
        if ((0,_layout__WEBPACK_IMPORTED_MODULE_1__.isLandscape)()) {
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(menuButton, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeY)(menuButton, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(menuButton, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(menuButton, 0);
        }
        else {
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getScrollWidth)();
            const margin = 0.09 * s;
            const size = 0.07 * s;
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(menuButton, size);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeY)(menuButton, size);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(menuButton, innerWidth - size - margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(menuButton, ((0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getHeaderBarHeight)() - size) / 2);
        }
    }, [_constants__WEBPACK_IMPORTED_MODULE_0__.bodySig]);
}
function addNavBar() {
    /// ZZZZ pull this out with one in scroll.ts
    function addImage(src) {
        const scrollImage = document.createElement("img");
        scrollImage.style.position = "absolute";
        scrollImage.src = src;
        scrollImage.style.cursor = "pointer";
        scrollImage.onload = () => _constants__WEBPACK_IMPORTED_MODULE_0__.bodySig.update(); // ZZZZ stupid
        document.body.appendChild(scrollImage);
        return scrollImage;
    }
    const koreLogo = addImage("big-kore.svg");
    const tagline = document.createElement("img");
    tagline.style.position = "absolute";
    tagline.src = "tagline.svg";
    document.body.appendChild(tagline);
    function addNavItem(navItemName) {
        const barElement = document.createElement("p");
        barElement.style.whiteSpace = "nowrap";
        barElement.innerText = navItemName;
        const navItem = {};
        navItem.barElement = barElement;
        navItem.name = navItemName;
        barElement.onclick = () => {
            navItem.jumpElement.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        giveHover(barElement, _constants__WEBPACK_IMPORTED_MODULE_0__.metal, _constants__WEBPACK_IMPORTED_MODULE_0__.white);
        document.body.appendChild(barElement);
        return navItem;
    }
    navItemFromString.about = addNavItem("ABOUT");
    navItemFromString.services = addNavItem("SERVICES");
    navItemFromString.bio = addNavItem("BIO");
    navItemFromString.recentProjects = addNavItem("RECENT PROJECTS");
    navItemFromString.contact = addNavItem("CONTACT");
    const barElements = Object.values(navItemFromString).map((b) => b.barElement);
    (0,_signal__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
        if ((0,_layout__WEBPACK_IMPORTED_MODULE_1__.isLandscape)()) {
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getScrollWidth)();
            const margin = 0.05 * s;
            const navBottom = 0.05 * s;
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(koreLogo, 0.08 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(koreLogo, navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(koreLogo) - 0.002 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(koreLogo, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(tagline, 0.17 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(tagline, navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(tagline));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(tagline, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndX)(koreLogo) + 0.018 * s);
            const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, fontFamily: "Roboto" };
            for (let i = barElements.length - 1; i >= 0; i--) {
                const navItem = barElements[i];
                const nextNavItem = barElements[i + 1];
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(navItem, navItemTextDetails);
                if (nextNavItem)
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(navItem, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posX)(nextNavItem) - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(navItem) - 0.02 * s);
                else
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(navItem, s - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(navItem) - 0.07 * s);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(navItem, navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(navItem));
            }
        }
        else {
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getScrollWidth)();
            const margin = 0.09 * s; // ZZZZ take out
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(koreLogo, 0.3 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(koreLogo, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(koreLogo, ((0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getHeaderBarHeight)() - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(koreLogo)) / 2);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(tagline, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(tagline, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(tagline, T);
            const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, fontFamily: "Roboto" };
            for (let i = barElements.length - 1; i >= 0; i--) {
                const navItem = barElements[i];
                const nextNavItem = barElements[i + 1];
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(navItem, navItemTextDetails);
                if (nextNavItem)
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(navItem, T);
                else
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(navItem, T);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(navItem, T);
            }
        }
    }, [_constants__WEBPACK_IMPORTED_MODULE_0__.bodySig]);
}
function addHomePage() {
    function addSectionLine() {
        const sectionLine = document.createElement("div");
        sectionLine.style.position = "absolute";
        sectionLine.style.background = "#111111";
        (0,_page__WEBPACK_IMPORTED_MODULE_3__.appendChildForPage)(_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollContainer, sectionLine);
        return sectionLine;
    }
    const headlineText = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("PROTECT YOURSELF FROM PROJECT HAZARDS.");
    const travelingThePath = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("Travelling the path unguided can cost you.");
    const logo = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollImage)("logo.svg");
    // logo.style.transition = "1s";
    // logo.onmouseenter = () => {
    //     logo.style.filter = "drop-shadow(10px 10px 10px rgba(255, 180, 100, 0.5))";
    //     logo.style.transform = "translate(-15px, -15px)";
    // };
    // logo.onmouseleave = () => {
    //     logo.style.filter = "";
    //     logo.style.transform = "translate(0px, 0px)";
    // };
    const sectionLine1 = addSectionLine();
    const aboutName = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("SCOTT G. GRIFFIN");
    navItemFromString.about.jumpElement = aboutName;
    const aboutDescription = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("Founder<br><br>With 37 years in the trenches of broadcast, AV, and media systems integration, I’ve built my career protecting clients from being steamrolled by complexity, bad planning, and unrealistic promises.<br><br>I’m not here to play nice — I’m here to make sure things get done right.<br><br>As a Subject Matter Expert and Owner’s Rep, I bring clear-eyed strategy, engineering leadership, and a no-BS approach to complex projects. From early-stage visioning through final implementation, I make sure my clients are fully informed and stay in control — without being buried in technical noise or vendor spin.<br><br>I’ve led high-profile projects for the NBA, WWE, Univision, Disney, and more. My background includes running a successful integration firm, managing engineering teams of 50+, and overseeing some of the largest media facility builds of the last 30 years. Whether we’re talking network ops, cloud workflows, post-production, or studio ops workflows — I’ve done it, and I bring the scars (and lessons) with me.<br><br>My job is simple: make sure my clients are protected, respected, and have delivered exactly what they need—nothing more, and absolutely nothing less.");
    const portrait = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollImage)("papa.png");
    const sectionLine2 = addSectionLine();
    const feelConfident = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("FEEL CONFIDENT KNOWING YOU’VE GOT IT ALL COVERED.");
    navItemFromString.services.jumpElement = feelConfident;
    let skillTileCountX = 1;
    let skillTileCountY = 1;
    const springSig = new _signal__WEBPACK_IMPORTED_MODULE_5__.Signal();
    function addSkillTile(title, description) {
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.background = _constants__WEBPACK_IMPORTED_MODULE_0__.metal;
        container.style.overflow = "hidden";
        (0,_page__WEBPACK_IMPORTED_MODULE_3__.appendChildForPage)(_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollContainer, container);
        const titleText = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addText)(title, container);
        const descriptionText = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addText)(description, container);
        descriptionText.style.opacity = "0";
        descriptionText.style.transition = "opacity 0.25s";
        const springX = new _spring__WEBPACK_IMPORTED_MODULE_6__.Spring(0);
        const springY = new _spring__WEBPACK_IMPORTED_MODULE_6__.Spring(0);
        const springSizeY = new _spring__WEBPACK_IMPORTED_MODULE_6__.Spring(1);
        springX.setStiffnessCritical(200);
        springY.setStiffnessCritical(200);
        springSizeY.setStiffnessCritical(200);
        function tileAt(x, y) {
            return skillTiles.find((s) => s.springX.target === x && s.springY.target === y);
        }
        function flipTiles(spring1, spring2) {
            const s = spring1.target;
            spring1.target = spring2.target;
            spring2.target = s;
        }
        const onClick = () => {
            let holeDiffX = 0;
            let holeDiffY = 0;
            function recalculateDiffs() {
                holeDiffX = holeGoalX - holeSkillTile.springX.target;
                holeDiffY = holeGoalY - holeSkillTile.springY.target;
            }
            let holeGoalX = springX.target;
            let holeGoalY = springY.target + 1;
            recalculateDiffs();
            const startedLow = holeGoalY >= skillTileCountY;
            if ((holeDiffX === 0 && holeDiffY > 0) || holeGoalY >= skillTileCountY) {
                holeGoalY -= 1;
                recalculateDiffs();
            }
            function slideHoleY(goalY) {
                const newDiffY = goalY - holeSkillTile.springY.target;
                const directionY = newDiffY > 0 ? 1 : -1;
                for (let y = holeSkillTile.springY.target; y !== goalY; y += directionY) {
                    flipTiles(tileAt(holeSkillTile.springX.target, y).springY, //
                    tileAt(holeSkillTile.springX.target, y + directionY).springY);
                }
                recalculateDiffs();
            }
            function slideHoleX(goalX) {
                const newDiffX = goalX - holeSkillTile.springX.target;
                const directionX = newDiffX > 0 ? 1 : -1;
                for (let x = holeSkillTile.springX.target; x !== goalX; x += directionX) {
                    flipTiles(tileAt(x, holeSkillTile.springY.target).springX, //
                    tileAt(x + directionX, holeSkillTile.springY.target).springX);
                }
                recalculateDiffs();
            }
            if (startedLow)
                slideHoleY(skillTileCountY - 2);
            else if (holeDiffY > 0)
                slideHoleY(holeGoalY);
            if (holeDiffX !== 0)
                slideHoleX(holeGoalX);
            if (startedLow)
                slideHoleY(holeGoalY);
            else if (holeDiffY < 0)
                slideHoleY(holeGoalY);
            for (const skillTile of skillTiles) {
                if (skillTile === holeSkillTile)
                    continue;
                skillTile.container.style.background = _constants__WEBPACK_IMPORTED_MODULE_0__.metal;
                skillTile.springSizeY.target = 1;
                skillTile.descriptionText.style.opacity = "0";
            }
            container.style.background = _constants__WEBPACK_IMPORTED_MODULE_0__.tileBrown;
            springSizeY.target = 2;
            for (const skillTile of skillTiles) {
                (0,_spring__WEBPACK_IMPORTED_MODULE_6__.animateSpring)(skillTile.springX, skillTile.springSig);
                (0,_spring__WEBPACK_IMPORTED_MODULE_6__.animateSpring)(skillTile.springY, skillTile.springSig);
                (0,_spring__WEBPACK_IMPORTED_MODULE_6__.animateSpring)(skillTile.springSizeY, skillTile.springSig);
            }
            descriptionText.style.opacity = "1";
        };
        container.onclick = onClick;
        container.style.cursor = "pointer";
        return { container, titleText, descriptionText, springX, springY, springSizeY, springSig };
    }
    const holeSkillTile = addSkillTile("", "");
    holeSkillTile.container.style.background = "#00000033";
    const skillTiles = [
        addSkillTile("Owner<br>Representation", "KORE serves as your eyes, ears, and advocates, providing concierge-level guidance through every step of your project. We keep vendors and contractors honest, making sure nothing slips through the cracks. We begin by aligning all stakeholders early on, then defend your position throughout the process."),
        addSkillTile("Basis of<br>Design", "KORE listens before we advise. We review your current operation, future plans, and overall goals. Your new space and systems must gracefully support operational needs and future growth. Deep expertise in systems planning and infrastructure strategy allows KORE to translate vision into a comprehensive BoD."),
        addSkillTile("Proof of<br>Concept", "KORE knows you only get one chance to build a new facility right. You deserve to see ideas thoroughly tested and validated before you commit. We vet technology, vendors, and assurances against real-world criteria. This brings clarity to your workflow and puts measurable accountability behind every promise."),
        addSkillTile("Project Team<br>Assembly", "KORE brings together the right team for your project. We draw from a network of trusted experts in design, engineering, installation, and more. These are proven pros who’ve shown they can execute under pressure without missing a beat. That translates to performance, not excuses."),
        addSkillTile("Punch List<br>Management", "KORE tracks every detail, from building construction to systems integration to ongoing services. It’s critical to make sure all the tech works, all promises are fulfilled. Nothing is signed-off until it’s tested, verified, and right. Relentless follow-through takes extra effort, but we stubbornly refuse to compromise."),
        addSkillTile("Needs<br>Analysis", "KORE guides you to uncover and understand exactly what’s needed, what's possible, and what’s worth pursuing. Ask anyone who’s been through this process – early-phase project intelligence makes all the difference. Make smarter, faster decisions with clarity and confidence, and avoid costly mistakes."),
        addSkillTile("Budgeting &<br>Estimating", "KORE offers a budgeting process shaped by real-world engineering experience. We provide early cost models, detailed projections, and phased investment strategies to help you stay informed, in control, and within budget. Our early work helps you to minimize scope creep and avoid financial surprises."),
        holeSkillTile,
        addSkillTile("RFP Creation<br>& Administration", "KORE captures the project objectives, outlines the scope, defines the qualifications, and structures the response required of every project solicitation that we produce. We then structure the bid evaluation process and guide you through the critical decision-making, leaving nothing to chance."),
        addSkillTile("Integrator<br>Support", "KORE partners with your integrator to lead the process, protect your vision, and make sure every workflow is delivered exactly as designed. With integration leadership and oversight rooted in decades of experience, we preserve the integrity of your design. We don’t accept compromises. Neither should you."),
    ];
    function layoutTiles(tileSize, tileGap, tilePosX, tilePosY) {
        for (let i = 0; i < skillTiles.length; i++) {
            const skillTile = skillTiles[i];
            skillTile.springX.position = skillTile.springX.target = i % skillTileCountX;
            skillTile.springY.position = skillTile.springY.target = i % skillTileCountY;
        }
        springSig.unsubscribeAll();
        (0,_signal__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
            for (const skillTile of skillTiles) {
                const { container, titleText, descriptionText, springX, springY, springSizeY } = skillTile;
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(container, tileSize);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeY)(container, tileSize * springSizeY.position + (springSizeY.position - 1) * tileGap);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(container, tilePosX(springX.position));
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(container, tilePosY(springY.position));
                // styleText(titleText, { letterSpacing: 0.0004 * s, fontWeight: 500, color: black, fontSize: 0.05 * s, fontFamily: "Roboto" });
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(titleText, { letterSpacing: 0.0004 * tileSize, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.1 * tileSize, fontFamily: "Roboto" });
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(titleText, 0.08 * tileSize);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(titleText, tileSize / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(titleText) / 2);
                // styleText(descriptionText, { letterSpacing: 0.0004 * s, fontWeight: 400, color: black, fontSize: 0.025 * s, lineHeight: 0.04 * s, fontFamily: "Roboto" });
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(descriptionText, { letterSpacing: 0.001 * tileSize, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.07 * tileSize, lineHeight: 0.095 * tileSize, fontFamily: "Roboto" });
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(descriptionText, tileSize * 0.85);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(descriptionText, 0.08 * tileSize);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(descriptionText, 0.7 * tileSize);
            }
        }, [springSig]);
    }
    const sectionLine3 = addSectionLine();
    const bigNames = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("BIG NAMES<br>YOU KNOW");
    const hasTackled = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("<strong>Scott Griffin</strong> has tackled some of the most complex projects for some of the largest media companies in the world. He has seen it all, and you can tap into that experience.");
    const bigNameClients = [
        "ABS/CBN",
        "Blackrock",
        "Blackstone",
        "CBS",
        "CNN",
        "Disney/ABC/ESPN",
        "Fox News",
        "Madison Square Garden",
        "MLB",
        "MSNBC",
        "NBA",
        "NBCU/CNBC",
        "National Geographic",
        "Northwestern University",
        "Paramount/CBS",
        "MTV/Showtime",
        "Penn State University",
        "Prudential",
        "Sirius Satellite Radio",
        "Syracuse University",
        "Televisa-Univision",
        "The New York Times",
        "WWE",
    ];
    const bigNameClientTexts = bigNameClients.map((bigNameClient) => (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)(bigNameClient));
    const sectionLine4 = addSectionLine();
    const griffinBlackWhiteLandscape = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollImage)("griffin-black-white-landscape.png");
    const griffinBlackWhitePortrait = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollImage)("griffin-black-white-portrait.jpg");
    const griffinBlackWhiteText = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("I’ve been in this industry for more than 35 years, and I can’t think of one client who was able to successfully navigate the gauntlet that is a large media facility project without the support of an experienced, knowledgeable, and aggressive project facilitator.");
    griffinBlackWhiteText.style.fontStyle = "italic";
    const sectionLine5 = addSectionLine();
    // bio
    const bioHeader = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("HOW WE<br>GOT HERE");
    navItemFromString.bio.jumpElement = bioHeader;
    const bioText = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("I’ve always focused on the conceptualization and implementation of advanced technology solutions for facility and event systems integration. Along the way, that’s meant serving as design engineer, project manager, sales engineer, planning consultant, business builder/owner, and team leader.<br><br>It all started in technical theater, where I worked as a master electrician, lighting designer, sound designer, and front-of-house sound engineer in summer stock, touring, and off-Broadway theater. Following several years of freelance theatrical and concert technical support, I landed at AF Associates, a broadcast systems integrator.<br><br>After working on systems engineering efforts for NBC’s Today Show, CNBC, and USA Network, I moved to Sony Systems Integration. There, I oversaw design/builds for the Tribune Station Group and supported CBS Broadcast Operations & Engineering<br><br>At this point, I teamed up with two partners to launch The Systems Group. TSG specialized in large-scale, fast-track systems integration projects for the broadcast industry. During our 20-year run, we designed and built facilities for Serious Satellite Radio, MTV Networks, Syracuse University Newhouse, NFL Films Audio, NBCU, and Corus Entertainment, plus 200+ systems integration projects worldwide.<br><br>When TSG was acquired by Diversified in 2016, I established a small studio within the larger corporation, which allowed me to focus on critical early-stage project conceptualization, planning, and budgeting. Throughout those years, I was able to work shoulder to shoulder with some of the best and brightest across a wide range of disciplines in the media and entertainment industry. And the rest, as they say, is history.<br><br>Today, KORE offers a radically streamlined way to leverage a career’s worth of expertise, experience, and extensive industry relationships to help make sure your next project runs smoothly from planning to acceptance.<br><br>I hold a Bachelor of Science in Electrical Engineering from Penn State University, and am a member of SMPTE, AES, and SVG. I’m also kind to animals.");
    const sectionLine6 = addSectionLine();
    // recent projects
    const recentProjectHeader = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("RECENT<br>PROJECTS");
    navItemFromString.recentProjects.jumpElement = recentProjectHeader;
    function addProjectPair(projectName, projectDescription) {
        const projectNameText = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)(projectName);
        const projectDescriptionText = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)(projectDescription);
        return { projectNameText, projectDescriptionText };
    }
    const projects = [addProjectPair("NBA Entertainment", "Architectural planning and budgeting for new content operations center, replay operations center, and expansion of the NBA Network."), addProjectPair("Televisa/Univision Network", "System conceptualization, applications engineering, project budgeting, and account representation for the network operations center."), addProjectPair("Western Kentucky University", "PBS and NPR stations, College of Communications production and post facility, including ties to campus sports and presentation venues, development of a complete system design for three control rooms, two TV studios, four radio studios, and post-production operations."), addProjectPair("World Wrestling Entertainment", "New HQ digital media facility design and budgeting for production, post, transmission, and event coordination, plus formal analysis for Phase 2 workflow optimization and orchestration layer."), addProjectPair("Disney/Galaxy Consolidation", "The largest network operations center facility ever built in the US. It includes ABC Network, WABC TV, ESPN NY, Marvel Entertainment, and Disney Screening Theater. Scott oversaw contract administration across the entire project.")];
    // contact
    const sectionLine7 = addSectionLine();
    const tellMe = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("Tell me about your project.");
    navItemFromString.contact.jumpElement = tellMe;
    const oneConversation = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("One conversation won’t cost you anything. Not having one might.");
    const bigKore = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollImage)("big-kore.svg");
    const email = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("Email");
    giveHover(email, _constants__WEBPACK_IMPORTED_MODULE_0__.white, _constants__WEBPACK_IMPORTED_MODULE_0__.metal);
    email.onclick = () => window.location.assign("mailto:lairofthegriffin@gmail.com");
    const linkedIn = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("LinkedIn");
    giveHover(linkedIn, _constants__WEBPACK_IMPORTED_MODULE_0__.white, _constants__WEBPACK_IMPORTED_MODULE_0__.metal);
    linkedIn.style.cursor = "pointer";
    linkedIn.onclick = () => {
        window.open("https://www.linkedin.com/in/sggriffin", "_blank");
    };
    const privacyPolicy = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.addScrollText)("Privacy Policy © 2026 KORE SME LLC");
    const sectionLine8 = addSectionLine();
    (0,_page__WEBPACK_IMPORTED_MODULE_3__.registerUpdateLayout)(() => {
        if ((0,_layout__WEBPACK_IMPORTED_MODULE_1__.isLandscape)()) {
            (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.resizeScrollContainerFull)();
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getScrollWidth)();
            const margin = 0.05 * s;
            const betweenMargin = s - margin * 2;
            const fromTop = 0.031 * s;
            const bigTextTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.075 * s, lineHeight: 0.084 * s, fontFamily: "Roboto" };
            const subGrayTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.019 * s, fontFamily: "Roboto" };
            const bigTextNudge = 0.004 * s;
            const sectionLineGap = 0.04 * s;
            const gutter = 0.02 * s;
            const gutteredColumn = s / 2 + gutter;
            const gutteredWidthBetween = s / 2 - 2 * gutter;
            const bigTextToSubtextGap = 0.02 * s;
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(headlineText, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(headlineText, 0.4 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(headlineText, margin - bigTextNudge);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(headlineText, fromTop);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(travelingThePath, subGrayTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(travelingThePath, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(travelingThePath, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(headlineText) + bigTextToSubtextGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeY)(logo, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(headlineText) * 1.04);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(logo, innerWidth - logo.scrollWidth - margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(logo, fromTop - 0.03 * s);
            layoutSectionLine(sectionLine1, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(travelingThePath) + sectionLineGap);
            // about
            const longParagraphsTextDetails = { letterSpacing: 0.001 * s, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, lineHeight: 0.02 * s, fontFamily: "Merriweather" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(aboutDescription, longParagraphsTextDetails);
            skillTileCountX = 5;
            skillTileCountY = 2;
            const scrollWidth = innerWidth - 2 * margin; // ZZZZ another scroll width?
            const tileGap = 0.015 * s;
            const tileSize = (scrollWidth - tileGap * (skillTileCountX - 1)) / skillTileCountX;
            function tilePosX(x) {
                return margin + (tileSize + tileGap) * x;
            }
            function tilePosY(y) {
                return (tileSize + tileGap) * y + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(feelConfident) + 0.04 * s;
            }
            const aboutLeft = tilePosX(2);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(aboutName, { letterSpacing: 0.001 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.02 * s, fontFamily: "Roboto" });
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(aboutName, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine1) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(aboutName, aboutLeft);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(aboutDescription, s - aboutLeft - margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(aboutDescription, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(aboutName));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(aboutDescription, aboutLeft);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeY)(portrait, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(aboutName) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(aboutDescription));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(portrait, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(aboutName));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(portrait, margin);
            layoutSectionLine(sectionLine2, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(aboutDescription) + sectionLineGap);
            // tiles
            const feelConfidentTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.028 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(feelConfident, feelConfidentTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(feelConfident, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(feelConfident, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine2) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(feelConfident, margin);
            layoutTiles(tileSize, tileGap, tilePosX, tilePosY);
            skillTiles[2].container.click();
            layoutSectionLine(sectionLine3, tilePosY(1) + tileSize + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bigNames, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bigNames, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine3) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bigNames, margin - bigTextNudge);
            const hasTackedTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.014 * s, lineHeight: 0.025 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(hasTackled, hasTackedTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(hasTackled, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(bigNames));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(hasTackled, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigNames) + bigTextToSubtextGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(hasTackled, margin);
            const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1];
            const bigNamesTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.018 * s, fontFamily: "Roboto" };
            const halfClientLength = Math.ceil(bigNameClientTexts.length / 2);
            for (let i = 0; i < bigNameClientTexts.length; i++) {
                const x = Math.floor(i / halfClientLength);
                const y = i % halfClientLength;
                const o = bigNameClientTexts[i];
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(o, bigNamesTextDetails);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(o, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigNames) + 0.01 * s + 0.032 * y * s);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(o, gutteredColumn + 0.22 * x * s);
            }
            layoutSectionLine(sectionLine4, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(lastBigName) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(griffinBlackWhitePortrait, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(griffinBlackWhiteLandscape, s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(griffinBlackWhiteLandscape, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhiteLandscape, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine4) + sectionLineGap);
            const griffinBlackWhiteTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.02 * s, lineHeight: 0.04 * s, fontFamily: "Merriweather" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(griffinBlackWhiteText, gutteredWidthBetween);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(griffinBlackWhiteText, gutteredColumn);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhiteText, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(griffinBlackWhiteLandscape) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhiteLandscape) / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhiteText) / 2);
            layoutSectionLine(sectionLine5, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(griffinBlackWhiteLandscape) + sectionLineGap);
            // bio
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioHeader, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bioHeader, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine5) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bioHeader, margin - bigTextNudge);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioText, longParagraphsTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(bioText, gutteredWidthBetween);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bioText, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioHeader));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bioText, gutteredColumn);
            layoutSectionLine(sectionLine6, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bioText) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(recentProjectHeader, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(recentProjectHeader, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine6) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(recentProjectHeader, margin - bigTextNudge);
            for (const { projectNameText, projectDescriptionText } of projects) {
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectNameText, { letterSpacing: 0.001 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.02 * s, fontFamily: "Roboto" });
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectDescriptionText, longParagraphsTextDetails);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(projectDescriptionText, gutteredWidthBetween);
            }
            const projectsWithSpacing = projects.flatMap((project) => [project.projectNameText, 0.006 * s, project.projectDescriptionText, 0.028 * s]);
            const [alignments, _] = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.aligningWithGapsY)(projectsWithSpacing);
            for (const { element, offset } of alignments) {
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(element, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(recentProjectHeader) + offset);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(element, gutteredColumn);
            }
            const lastProjectDescription = projects[projects.length - 1].projectDescriptionText;
            // contact
            layoutSectionLine(sectionLine7, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(lastProjectDescription) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(tellMe, { letterSpacing: 0.3, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.019 * s, fontFamily: "Roboto" });
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(tellMe, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(tellMe, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine7) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(oneConversation, subGrayTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(oneConversation, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(oneConversation, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(tellMe) + 0.008 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(bigKore, s - margin * 2);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bigKore, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bigKore, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(oneConversation) + 0.1 * s);
            const linkTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.019 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(email, linkTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(email, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(email, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigKore) + 0.05 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(linkedIn, linkTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(linkedIn, margin + 0.07 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(linkedIn, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigKore) + 0.05 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(privacyPolicy, linkTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(privacyPolicy, s - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(privacyPolicy) - margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(privacyPolicy, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigKore) + 0.05 * s);
            layoutSectionLine(sectionLine8, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(email) + sectionLineGap);
        }
        else {
            (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.resizeScrollContainerFull)();
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_4__.getScrollWidth)();
            const margin = 0.09 * s;
            const betweenMargin = s - margin * 2;
            const bigTextTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.15 * s, lineHeight: 0.18 * s, fontFamily: "Roboto" };
            const subGrayTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.09 * s, lineHeight: 0.13 * s, fontFamily: "Roboto" };
            const bigTextNudge = 0.012 * s;
            const sectionLineGap = 0.085 * s;
            const bigTextToSubtextGap = 0.03 * s;
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(headlineText, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(headlineText, margin - bigTextNudge);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(headlineText, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(travelingThePath, subGrayTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(travelingThePath, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(travelingThePath, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(travelingThePath, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(headlineText) + bigTextToSubtextGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(logo, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(logo, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(logo, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(travelingThePath) + s * 0.17);
            layoutSectionLine(sectionLine1, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(logo) + sectionLineGap);
            // about
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(portrait, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(portrait, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(portrait, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine1) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(aboutName, { letterSpacing: 0.001 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.09 * s, fontFamily: "Roboto" });
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(aboutName, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(aboutName, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(portrait) + 0.2 * s);
            const longParagraphsTextDetails = { letterSpacing: 0.001 * s, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.045 * s, lineHeight: 0.1 * s, fontFamily: "Merriweather" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(aboutDescription, longParagraphsTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(aboutDescription, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(aboutDescription, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(aboutDescription, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(aboutName) + 0.006 * s);
            layoutSectionLine(sectionLine2, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(aboutDescription) + sectionLineGap);
            // tiles
            const feelConfidentTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.06 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(feelConfident, feelConfidentTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(feelConfident, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(feelConfident, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(feelConfident, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine2) + sectionLineGap);
            skillTileCountX = 2;
            skillTileCountY = 5;
            const tileGap = 0.03 * s;
            const tileSize = (betweenMargin - tileGap * (skillTileCountX - 1)) / skillTileCountX;
            function tilePosX(x) {
                return margin + (tileSize + tileGap) * x;
            }
            function tilePosY(y) {
                return (tileSize + tileGap) * y + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(feelConfident) + 0.04 * s;
            }
            layoutTiles(tileSize, tileGap, tilePosX, tilePosY);
            skillTiles[2].container.click();
            layoutSectionLine(sectionLine3, tilePosY(4) + tileSize + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bigNames, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bigNames, margin - bigTextNudge);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bigNames, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine3) + sectionLineGap);
            const hasTackedTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.065 * s, lineHeight: 0.11 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(hasTackled, hasTackedTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(hasTackled, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(bigNames) - 0.025 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(hasTackled, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(hasTackled, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigNames) + 0.06 * s);
            const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1];
            const bigNamesTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.065 * s, lineHeight: 0.11 * s, fontFamily: "Roboto" };
            for (let i = 0; i < bigNameClientTexts.length; i++) {
                const o = bigNameClientTexts[i];
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(o, bigNamesTextDetails);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(o, margin);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(o, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(hasTackled) + 0.25 * s + 0.14 * i * s);
            }
            layoutSectionLine(sectionLine4, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(lastBigName) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(griffinBlackWhiteLandscape, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(griffinBlackWhitePortrait, s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(griffinBlackWhitePortrait, 0);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhitePortrait, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine4) + sectionLineGap);
            const griffinBlackWhiteTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.073 * s, lineHeight: 0.14 * s, fontFamily: "Merriweather" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(griffinBlackWhiteText, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(griffinBlackWhiteText, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhiteText, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(griffinBlackWhitePortrait) + 0.2 * s);
            layoutSectionLine(sectionLine5, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(griffinBlackWhitePortrait) + sectionLineGap);
            // bio
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioHeader, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bioHeader, margin - bigTextNudge);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bioHeader, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine5) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioText, longParagraphsTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(bioText, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bioText, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bioText, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bioHeader) + bigTextToSubtextGap);
            layoutSectionLine(sectionLine6, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bioText) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(recentProjectHeader, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(recentProjectHeader, margin - bigTextNudge);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(recentProjectHeader, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine6) + sectionLineGap);
            for (const { projectNameText, projectDescriptionText } of projects) {
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectNameText, { letterSpacing: 0.001 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.08 * s, fontFamily: "Roboto" });
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectDescriptionText, longParagraphsTextDetails);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(projectDescriptionText, betweenMargin);
            }
            const projectsWithSpacing = projects.flatMap((project) => [project.projectNameText, 0.02 * s, project.projectDescriptionText, 0.1 * s]);
            const [alignments, _] = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.aligningWithGapsY)(projectsWithSpacing);
            for (const { element, offset } of alignments) {
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(element, margin);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(element, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(recentProjectHeader) + 0.13 * s + offset);
            }
            const lastProjectDescription = projects[projects.length - 1].projectDescriptionText;
            // contact
            layoutSectionLine(sectionLine7, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(lastProjectDescription) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(tellMe, { letterSpacing: 0.3, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.09 * s, lineHeight: 0.13 * s, fontFamily: "Roboto" });
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(tellMe, 0.7 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(tellMe, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(tellMe, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine7) + 0.4 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(oneConversation, subGrayTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(oneConversation, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(oneConversation, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(tellMe) + 0.016 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setImageSizeX)(bigKore, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bigKore, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bigKore, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(oneConversation) + 0.5 * s);
            const linkTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.08 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(email, linkTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(email, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(email, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigKore) + 0.1 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(linkedIn, linkTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(linkedIn, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndX)(email) + 0.08 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(linkedIn, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigKore) + 0.1 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(privacyPolicy, linkTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(privacyPolicy, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(privacyPolicy, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(email) + 0.08 * s);
            layoutSectionLine(sectionLine8, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(privacyPolicy) + sectionLineGap);
        }
    });
}


/***/ },

/***/ "./src/scroll.ts"
/*!***********************!*\
  !*** ./src/scroll.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScrollImage: () => (/* binding */ addScrollImage),
/* harmony export */   addScrollPadding: () => (/* binding */ addScrollPadding),
/* harmony export */   addScrollSvg: () => (/* binding */ addScrollSvg),
/* harmony export */   addScrollText: () => (/* binding */ addScrollText),
/* harmony export */   addScrollTextSquare: () => (/* binding */ addScrollTextSquare),
/* harmony export */   addText: () => (/* binding */ addText),
/* harmony export */   centerWithinScrollX: () => (/* binding */ centerWithinScrollX),
/* harmony export */   getHeaderBarHeight: () => (/* binding */ getHeaderBarHeight),
/* harmony export */   getScrollWidth: () => (/* binding */ getScrollWidth),
/* harmony export */   resizeScrollContainerFull: () => (/* binding */ resizeScrollContainerFull),
/* harmony export */   scrollContainer: () => (/* binding */ scrollContainer),
/* harmony export */   styleScrollTextSquare: () => (/* binding */ styleScrollTextSquare)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/page.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/util.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const scrollContainer = document.createElement("div");
scrollContainer.style.position = "absolute";
_constants__WEBPACK_IMPORTED_MODULE_0__.body.appendChild(scrollContainer);
scrollContainer.style.scrollbarColor = `${_constants__WEBPACK_IMPORTED_MODULE_0__.midBrown} ${_constants__WEBPACK_IMPORTED_MODULE_0__.metal}55`;
scrollContainer.onwheel = (e) => {
    if ((0,_layout__WEBPACK_IMPORTED_MODULE_1__.isLandscape)() && !e.shiftKey)
        scrollContainer.scrollBy({ left: e.deltaY });
};
function resizeScrollContainerFull() {
    const headerBarHeight = getHeaderBarHeight();
    scrollContainer.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerWidth);
    scrollContainer.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerHeight - headerBarHeight);
    scrollContainer.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0);
    scrollContainer.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(headerBarHeight);
    scrollContainer.style.overflowX = "hidden";
    scrollContainer.style.overflowY = "scroll";
    scrollContainer.scrollLeft = 0;
}
const getHeaderBarHeight = () => {
    if ((0,_layout__WEBPACK_IMPORTED_MODULE_1__.isLandscape)()) {
        return innerWidth * 0.08;
    }
    else {
        return innerWidth * 0.2;
    }
};
function addScrollPadding() {
    const scrollPadding = document.createElement("div");
    scrollPadding.style.position = "absolute";
    scrollPadding.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(1); // any nonzero thickness is enough to extend scrollContainer
    scrollPadding.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(1);
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(scrollContainer, scrollPadding);
    return scrollPadding;
}
function addScrollImage(src) {
    const scrollImage = document.createElement("img");
    scrollImage.style.position = "absolute";
    scrollImage.src = src;
    scrollImage.style.animation = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation)();
    scrollImage.style.cursor = "pointer";
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.awaitLayoutForImageLoading)(scrollImage);
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(scrollContainer, scrollImage);
    return scrollImage;
}
function addScrollSvg(src) {
    const scrollSvg = (0,_util__WEBPACK_IMPORTED_MODULE_3__.createElementSVG)("svg");
    scrollSvg.style.position = "absolute";
    scrollSvg.style.animation = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation)();
    function fetchContent() {
        return __awaiter(this, void 0, void 0, function* () {
            const fetched = yield (0,_util__WEBPACK_IMPORTED_MODULE_3__.fetchSVG)(src);
            for (const attr of fetched.attributes)
                scrollSvg.setAttribute(attr.name, attr.value);
            while (fetched.firstChild)
                scrollSvg.appendChild(fetched.firstChild);
        });
    }
    fetchContent();
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(scrollContainer, scrollSvg);
    return scrollSvg;
}
function addText(text, parent) {
    const scrollText = document.createElement("p");
    scrollText.style.position = "absolute";
    scrollText.innerHTML = text; // ZZZZ innerText would be better
    scrollText.style.animation = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.fadeInAnimation)();
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(parent, scrollText);
    return scrollText;
}
function addScrollText(text) {
    return addText(text, scrollContainer);
}
function addScrollTextSquare(majorText, ...minorTexts) {
    const major = addScrollText(majorText);
    const minors = minorTexts.map(addScrollText);
    return { major, minors };
}
function styleScrollTextSquare({ major, minors }, majorTextDetails, minorTextDetails) {
    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(major, majorTextDetails);
    for (const minor of minors)
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(minor, minorTextDetails);
}
function getScrollWidth() {
    return innerWidth;
    // const SCROLL_WIDTH_PROPORTION = 1;
    // return innerWidth * SCROLL_WIDTH_PROPORTION;
}
function centerWithinScrollX(element, scale) {
    const s = getScrollWidth();
    const width = s * scale;
    element.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(width);
    element.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((s - width) / 2);
}


/***/ },

/***/ "./src/signal.ts"
/*!***********************!*\
  !*** ./src/signal.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Signal: () => (/* binding */ Signal),
/* harmony export */   effect: () => (/* binding */ effect)
/* harmony export */ });
class Signal {
    constructor() {
        this.subscribers = new Set();
        this.subscribe = (subscriber) => {
            this.subscribers.add(subscriber);
        };
        this.update = () => {
            this.subscribers.forEach((s) => s());
        };
        this.unsubscribe = (subscriber) => {
            this.subscribers.delete(subscriber);
        };
        this.unsubscribeAll = () => {
            this.subscribers.clear();
        };
    }
}
function effect(func, observedSignals) {
    observedSignals.forEach((o) => o.subscribe(func));
    func();
}


/***/ },

/***/ "./src/spring.ts"
/*!***********************!*\
  !*** ./src/spring.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spring: () => (/* binding */ Spring),
/* harmony export */   animateSpring: () => (/* binding */ animateSpring),
/* harmony export */   animateWithSpring: () => (/* binding */ animateWithSpring)
/* harmony export */ });
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal */ "./src/signal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Spring {
    // mx'' - bx' = kx
    constructor(initialValue) {
        this.velocity = 0;
        this.damping = 0;
        this.stiffness = 0;
        this.isAnimating = false;
        this.onRest = () => { };
        this.onUnrest = () => { };
        this.position = initialValue;
        this.target = initialValue;
    }
    tick(dt) {
        const acceleration = this.stiffness * (this.target - this.position) - this.damping * this.velocity;
        this.velocity += acceleration * dt;
        this.position += this.velocity * dt;
    }
    setStiffnessCritical(stiffness) {
        this.stiffness = stiffness;
        this.damping = Math.sqrt(4 * stiffness);
    }
}
const DEFAULT_ANIMATION_TOLERANCE = 0.01;
function animateSpring(spring, signal) {
    if (spring.isAnimating)
        return;
    spring.isAnimating = true;
    spring.onUnrest();
    let lastMillis = 0;
    requestAnimationFrame(firstFrame);
    function firstFrame(millis) {
        lastMillis = millis;
        tickSpring(millis);
    }
    function tickSpring(millis) {
        const step = millis - lastMillis;
        lastMillis = millis;
        spring.tick(step / 1000);
        signal.update();
        if (Math.abs(spring.target - spring.position) < DEFAULT_ANIMATION_TOLERANCE && Math.abs(spring.velocity) < DEFAULT_ANIMATION_TOLERANCE) {
            spring.position = spring.target;
            spring.velocity = 0;
            spring.isAnimating = false;
            signal.update();
            spring.onRest();
            return;
        }
        requestAnimationFrame(tickSpring);
    }
}
function animateWithSpring(stiffness, overTime) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const spring = new Spring(0);
            const springSig = new _signal__WEBPACK_IMPORTED_MODULE_0__.Signal();
            spring.setStiffnessCritical(stiffness);
            spring.target = 1;
            const animate = () => overTime(spring.position);
            spring.onRest = () => {
                springSig.unsubscribe(animate);
                resolve();
            };
            (0,_signal__WEBPACK_IMPORTED_MODULE_0__.effect)(animate, [springSig]);
            animateSpring(spring, springSig);
        });
    });
}


/***/ },

/***/ "./src/util.ts"
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorOnHover: () => (/* binding */ colorOnHover),
/* harmony export */   createElementSVG: () => (/* binding */ createElementSVG),
/* harmony export */   createIconSVG: () => (/* binding */ createIconSVG),
/* harmony export */   fetchSVG: () => (/* binding */ fetchSVG),
/* harmony export */   getElementByIdSVG: () => (/* binding */ getElementByIdSVG),
/* harmony export */   interlaced: () => (/* binding */ interlaced),
/* harmony export */   makeLine: () => (/* binding */ makeLine),
/* harmony export */   makePolyline: () => (/* binding */ makePolyline),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   spaceToFile: () => (/* binding */ spaceToFile)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
function spaceToFile(s) {
    return s.replace(" ", "-");
}
function createElementSVG(qualifiedName) {
    return document.createElementNS("http://www.w3.org/2000/svg", qualifiedName);
}
function interlaced(items, within) {
    const itemsInterlaced = [];
    for (const item of items) {
        itemsInterlaced.push(item);
        itemsInterlaced.push(within);
    }
    itemsInterlaced.pop();
    return itemsInterlaced;
}
function mapRange(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}
function colorOnHover(element, color, hoverColor) {
    element.style.color = color;
    element.onmouseover = () => (element.style.color = hoverColor);
    element.onmouseleave = () => (element.style.color = color);
    element.style.transition = "color 0.2s ease-out";
}
function setAttributes(element, attributes) {
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
}
function fetchSVG(fetchString) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(fetchString);
        const svgContent = yield response.text();
        return new DOMParser().parseFromString(svgContent, "image/svg+xml").documentElement;
    });
}
function getElementByIdSVG(svg, id) {
    return svg.getElementById(id);
}
function createIconSVG(localSize) {
    const icon = createElementSVG("svg");
    const pad = 4;
    icon.style.position = "absolute";
    icon.style.cursor = "pointer";
    icon.setAttribute("viewBox", `${-pad} ${-pad} ${localSize + 2 * pad} ${localSize + 2 * pad}`);
    return icon;
}
const makeLine = (svg, strokeWidth) => () => {
    const line = createElementSVG("line");
    setAttributes(line, { "stroke-width": strokeWidth });
    svg.appendChild(line);
    return line;
};
const makePolyline = (svg, strokeWidth) => () => {
    const line = createElementSVG("polyline");
    setAttributes(line, { "stroke-width": strokeWidth, fill: "none" });
    svg.appendChild(line);
    return line;
};


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

(() => __awaiter(void 0, void 0, void 0, function* () {
    yield Promise.all([
        document.fonts.load("200 10px Roboto"),
        document.fonts.load("300 20px Roboto"),
        document.fonts.load("400 30px Roboto"),
        document.fonts.load("500 40px Roboto"),
        document.fonts.load("600 50px Roboto"),
        document.fonts.load("200 20px Merriweather"),
        document.fonts.load("300 30px Merriweather"),
        document.fonts.load("400 40px Merriweather"),
        document.fonts.load("500 50px Merriweather"),
        document.fonts.load("600 60px Merriweather"),
    ]);
    yield document.fonts.ready;
    yield new Promise(requestAnimationFrame);
    yield new Promise(requestAnimationFrame);
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addNavBar)();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addMenuButton)();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addHomePage)();
}))();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb3JlLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL2xheW91dC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL21vZGFsLnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3BhZ2VzL2hvbWUudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9zY3JvbGwudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9zaWduYWwudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9zcHJpbmcudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL2tvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTGFuZHNjYXBlIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tIFwiLi9zaWduYWxcIjtcblxuZXhwb3J0IGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuZXhwb3J0IGNvbnN0IGJvZHlTaWcgPSBuZXcgU2lnbmFsKCk7XG53aW5kb3cub25yZXNpemUgPSBib2R5U2lnLnVwZGF0ZTtcblxuZXhwb3J0IGNvbnN0IG1pZEJyb3duID0gXCIjNjAzOTEzXCI7XG5leHBvcnQgY29uc3QgamVhbnMgPSBcInJnYigzOCwgNTEsIDg2KVwiXG5leHBvcnQgY29uc3QgZGVlcEJyb3duID0gXCIjM0MyNDE1XCI7XG5leHBvcnQgY29uc3QgYmxhY2sgPSBcIiMwMDAwMDBcIjtcbmV4cG9ydCBjb25zdCB3aGl0ZSA9IFwiI0ZGRkZGRlwiO1xuZXhwb3J0IGNvbnN0IG1ldGFsID0gXCIjNkM3MTc1XCI7XG5leHBvcnQgY29uc3QgdGlsZUJyb3duID0gXCIjNjk1MDM4XCI7XG5cbmV4cG9ydCBjb25zdCBmYWRlSW5BbmltYXRpb24gPSAoKSA9PiBgZmFkZUluJHtpc0xhbmRzY2FwZSgpID8gXCJYXCIgOiBcIllcIn0gZWFzZSAwLjZzYDtcblxuZXhwb3J0IGNvbnN0IFNDUk9MTF9URVhUX1dJRFRIX0hFSUdIVF9QUk9QT1JUSU9OID0gMC45NTtcbiIsImltcG9ydCB7IGludGVybGFjZWQgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmludGVyZmFjZSBFbGVtZW50QWxpZ25tZW50IHtcbiAgICBlbGVtZW50OiBCb3hFbGVtZW50O1xuICAgIG9mZnNldDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHREZXRhaWxzIHtcbiAgICBmb250RmFtaWx5OiBzdHJpbmc7XG4gICAgZm9udFdlaWdodDogbnVtYmVyO1xuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBsZXR0ZXJTcGFjaW5nPzogbnVtYmVyO1xuICAgIGxpbmVIZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIEJveEVsZW1lbnQgPSBIVE1MRWxlbWVudCB8IFNWR1NWR0VsZW1lbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBweChwaXhlbHM6IG51bWJlcikge1xuICAgIHJldHVybiBwaXhlbHMgKyBcInB4XCI7XG59XG5cbmZ1bmN0aW9uIGF4aXNBbGlnbmluZ1dpdGhHYXBzKGF4aXNTaXplOiAoZWxlbWVudDogQm94RWxlbWVudCkgPT4gbnVtYmVyKSB7XG4gICAgcmV0dXJuIChlbGVtZW50T3JHYXBzOiAoQm94RWxlbWVudCB8IG51bWJlcilbXSk6IFtFbGVtZW50QWxpZ25tZW50W10sIG51bWJlcl0gPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50QWxpZ25tZW50cyA9IFtdO1xuICAgICAgICBsZXQgcnVubmluZ1RvdGFsID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50T3JHYXAgb2YgZWxlbWVudE9yR2Fwcykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRPckdhcCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnRPckdhcCBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50QWxpZ25tZW50cy5wdXNoKHsgZWxlbWVudDogZWxlbWVudE9yR2FwLCBvZmZzZXQ6IHJ1bm5pbmdUb3RhbCB9KTtcbiAgICAgICAgICAgICAgICBydW5uaW5nVG90YWwgKz0gYXhpc1NpemUoZWxlbWVudE9yR2FwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcnVubmluZ1RvdGFsICs9IGVsZW1lbnRPckdhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2VsZW1lbnRBbGlnbm1lbnRzLCBydW5uaW5nVG90YWxdO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHVucHgodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUuc2xpY2UoMCwgLTIpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3NYKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICAvLyByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldExlZnQgOiB1bnB4KGVsZW1lbnQuc3R5bGUubGVmdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3NYKGVsZW1lbnQ6IEJveEVsZW1lbnQsIHg6IG51bWJlcikge1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zWShlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgLy8gcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFRvcCA6IHVucHgoZWxlbWVudC5zdHlsZS50b3ApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zRW5kWChlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIHBvc1goZWxlbWVudCkgKyBzaXplWChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvc1koZWxlbWVudDogQm94RWxlbWVudCwgeTogbnVtYmVyKSB7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBweCh5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc0VuZFkoZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIHJldHVybiBwb3NZKGVsZW1lbnQpICsgc2l6ZVkoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXplWChlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgLy8gcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggOiBlbGVtZW50LmNsaWVudFdpZHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2l6ZVgoZWxlbWVudDogQm94RWxlbWVudCwgeDogbnVtYmVyKSB7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHB4KHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW1hZ2VTaXplWChpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgeDogbnVtYmVyKSB7XG4gICAgc2V0U2l6ZVgoaW1hZ2UsIHgpO1xuICAgIHNldFNpemVZKGltYWdlLCAoeCAqIGltYWdlLm5hdHVyYWxIZWlnaHQpIC8gaW1hZ2UubmF0dXJhbFdpZHRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVZKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICAvLyByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogZWxlbWVudC5jbGllbnRIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTaXplWShlbGVtZW50OiBCb3hFbGVtZW50LCB5OiBudW1iZXIpIHtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHB4KHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW1hZ2VTaXplWShpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgeTogbnVtYmVyKSB7XG4gICAgc2V0U2l6ZVkoaW1hZ2UsIHkpO1xuICAgIHNldFNpemVYKGltYWdlLCAoeSAqIGltYWdlLm5hdHVyYWxXaWR0aCkgLyBpbWFnZS5uYXR1cmFsSGVpZ2h0KTtcbn1cblxuLy8gWlpaWiB3YW50IGEgc2hvcnQgaGFuZCBmb3IgY29tbW9uIHNpbXBsZSB1c2VcbmV4cG9ydCBjb25zdCBhbGlnbmluZ1dpdGhHYXBzWCA9IGF4aXNBbGlnbmluZ1dpdGhHYXBzKHNpemVYKTtcbmV4cG9ydCBjb25zdCBhbGlnbmluZ1dpdGhHYXBzWSA9IGF4aXNBbGlnbmluZ1dpdGhHYXBzKHNpemVZKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGFuZHNjYXBlKCkge1xuICAgIHJldHVybiBpbm5lcldpZHRoIC8gaW5uZXJIZWlnaHQgPiAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyV2l0aEdhcFkoZWxlbWVudHM6IEhUTUxFbGVtZW50W10sIGdhcDogbnVtYmVyLCBjZW50ZXI6IG51bWJlcikge1xuICAgIGNvbnN0IGVsZW1lbnRzV2l0aEdhcHMgPSBpbnRlcmxhY2VkKGVsZW1lbnRzLCBnYXApO1xuICAgIGNvbnN0IFtlbGVtZW50QWxpZ25tZW50cywgdG90YWxIZWlnaHRdID0gYWxpZ25pbmdXaXRoR2Fwc1koZWxlbWVudHNXaXRoR2Fwcyk7XG5cbiAgICBmb3IgKGNvbnN0IHsgZWxlbWVudCwgb2Zmc2V0IH0gb2YgZWxlbWVudEFsaWdubWVudHMpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBweChvZmZzZXQgKyBjZW50ZXIgLSB0b3RhbEhlaWdodCAvIDIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlclgocGFyZW50OiBCb3hFbGVtZW50LCBjaGlsZDogQm94RWxlbWVudCkge1xuICAgIHJldHVybiAoc2l6ZVgocGFyZW50KSAtIHNpemVYKGNoaWxkKSkgLyAyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyWShwYXJlbnQ6IEJveEVsZW1lbnQsIGNoaWxkOiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIChzaXplWShwYXJlbnQpIC0gc2l6ZVkoY2hpbGQpKSAvIDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVRleHQoc2Nyb2xsVGV4dDogSFRNTEVsZW1lbnQsIHM6IFRleHREZXRhaWxzKSB7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmZvbnRGYW1pbHkgPSBzLmZvbnRGYW1pbHk7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIiArIHMuZm9udFdlaWdodDtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmZvbnRTaXplID0gcHgocy5mb250U2l6ZSk7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5jb2xvciA9IHMuY29sb3I7XG4gICAgaWYgKHMubGV0dGVyU3BhY2luZykgc2Nyb2xsVGV4dC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gcHgocy5sZXR0ZXJTcGFjaW5nKTtcbiAgICBpZiAocy5saW5lSGVpZ2h0KSBzY3JvbGxUZXh0LnN0eWxlLmxpbmVIZWlnaHQgPSBweChzLmxpbmVIZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgYm9keSwgYm9keVNpZyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHggfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IGVmZmVjdCwgU2lnbmFsIH0gZnJvbSBcIi4vc2lnbmFsXCI7XG5pbXBvcnQgeyBhbmltYXRlU3ByaW5nLCBTcHJpbmcgfSBmcm9tIFwiLi9zcHJpbmdcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBpc09wZW5pbmcgPSBmYWxzZTtcbiAgICBzcHJpbmc6IFNwcmluZztcbiAgICBzcHJpbmdTaWc6IFNpZ25hbDtcblxuICAgIG9uTGF5b3V0ID0gKCkgPT4ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xvcjogc3RyaW5nLCBvbk9wZW46IChiYWNrZHJvcDogSFRNTEVsZW1lbnQpID0+IHZvaWQsIHByaXZhdGUgb25BbmltYXRlOiAodGltZTogbnVtYmVyKSA9PiB2b2lkLCBvbkNsb3NlOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuc3ByaW5nID0gbmV3IFNwcmluZygwKTtcbiAgICAgICAgdGhpcy5zcHJpbmcuc2V0U3RpZmZuZXNzQ3JpdGljYWwoMTIwKTtcbiAgICAgICAgdGhpcy5zcHJpbmdTaWcgPSBuZXcgU2lnbmFsKCk7XG5cbiAgICAgICAgdGhpcy5zcHJpbmcub25VbnJlc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpbmcucG9zaXRpb24gPT09IDApIG9wZW5Nb2RhbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNwcmluZy5vblJlc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpbmcucG9zaXRpb24gPT09IDAgJiYgY2xvc2VNb2RhbCkgY2xvc2VNb2RhbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcblxuICAgICAgICAgICAgb25PcGVuKGJhY2tkcm9wKTtcblxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gdGhpcy5zcHJpbmcucG9zaXRpb247XG4gICAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUub3BhY2l0eSA9IHRpbWUgKyBcIlwiO1xuICAgICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnBvaW50ZXJFdmVudHMgPSB0aW1lID4gMC45ID8gXCJhbGxcIiA6IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMub25BbmltYXRlKHRpbWUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZWZmZWN0KGFuaW1hdGUsIFt0aGlzLnNwcmluZ1NpZ10pO1xuXG4gICAgICAgICAgICBjb25zdCBsYXlvdXRNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS53aWR0aCA9IHB4KGlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLmhlaWdodCA9IHB4KGlubmVySGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIHRoaXMub25MYXlvdXQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGVmZmVjdChsYXlvdXRNb2RhbCwgW2JvZHlTaWddKTtcblxuICAgICAgICAgICAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBib2R5U2lnLnVuc3Vic2NyaWJlKGxheW91dE1vZGFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcmluZ1NpZy51bnN1YnNjcmliZShhbmltYXRlKTtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJhY2tkcm9wKTtcbiAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQW5pbWF0ZSgwKTtcbiAgICB9XG5cbiAgICBiZWdpbk9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVzY2FwZUtleUxpc3RlbmVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5DbG9zZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGVzY2FwZUtleUxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlc2NhcGVLZXlMaXN0ZW5lcik7XG5cbiAgICAgICAgdGhpcy5zcHJpbmcudGFyZ2V0ID0gMTtcbiAgICAgICAgYW5pbWF0ZVNwcmluZyh0aGlzLnNwcmluZywgdGhpcy5zcHJpbmdTaWcpO1xuICAgICAgICB0aGlzLmlzT3BlbmluZyA9IHRydWU7XG4gICAgfTtcblxuICAgIGJlZ2luQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3ByaW5nLnRhcmdldCA9IDA7XG4gICAgICAgIGFuaW1hdGVTcHJpbmcodGhpcy5zcHJpbmcsIHRoaXMuc3ByaW5nU2lnKTtcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgYm9keVNpZyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVGV4dERldGFpbHMgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IGVmZmVjdCB9IGZyb20gXCIuL3NpZ25hbFwiO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlQ2xlYW51cHMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmNvbnN0IGF3YWl0QmVmb3JlTGF5b3V0cyA9IG5ldyBTZXQ8UHJvbWlzZTx2b2lkPj4oKTtcbmNvbnN0IGJlZm9yZUxheW91dHMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhd2FpdExheW91dEZvckltYWdlTG9hZGluZyhpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGF3YWl0QmVmb3JlTGF5b3V0cy5hZGQoaW1hZ2UuZGVjb2RlKCkpO1xufVxuXG4vLyBUT0RPIGdyb3NzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FoaGgoKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoYXdhaXRCZWZvcmVMYXlvdXRzKTtcbiAgICBhd2FpdEJlZm9yZUxheW91dHMuY2xlYXIoKTtcbiAgICBhd2FpdCBzbGVlcCgxMCk7XG4gICAgcnVuQWxsQW5kQ2xlYXIoYmVmb3JlTGF5b3V0cyk7XG4gICAgYm9keVNpZy51cGRhdGUoKTsgLy8gVE9ETyBncm9zc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVcGRhdGVMYXlvdXQodXBkYXRlTGF5b3V0OiAoKSA9PiB2b2lkKSB7XG4gICAgYXdhaXQgd2FoaGgoKTtcbiAgICBlZmZlY3QodXBkYXRlTGF5b3V0LCBbYm9keVNpZ10pO1xuICAgIHBhZ2VDbGVhbnVwcy5hZGQoKCkgPT4gYm9keVNpZy51bnN1YnNjcmliZSh1cGRhdGVMYXlvdXQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkRm9yUGFnZShwYXJlbnQ6IEVsZW1lbnQsIGNoaWxkOiBFbGVtZW50KSB7XG4gICAgYmVmb3JlTGF5b3V0cy5hZGQoKCkgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICBwYWdlQ2xlYW51cHMuYWRkKCgpID0+IHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5MYXN0UGFnZSgpIHtcbiAgICBydW5BbGxBbmRDbGVhcihwYWdlQ2xlYW51cHMpO1xufVxuXG5mdW5jdGlvbiBydW5BbGxBbmRDbGVhcihzZXQ6IFNldDwoKSA9PiB2b2lkPikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZXQpIGl0ZW0oKTtcbiAgICBzZXQuY2xlYXIoKTtcbn1cbiIsImltcG9ydCB7IGJsYWNrLCBib2R5U2lnLCBtZXRhbCwgdGlsZUJyb3duLCB3aGl0ZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFsaWduaW5nV2l0aEdhcHNZLCBjZW50ZXJXaXRoR2FwWSwgY2VudGVyWCwgaXNMYW5kc2NhcGUsIHBvc0VuZFgsIHBvc0VuZFksIHBvc1gsIHBvc1ksIHB4LCBzZXRJbWFnZVNpemVYLCBzZXRJbWFnZVNpemVZLCBzZXRQb3NYLCBzZXRQb3NZLCBzZXRTaXplWCwgc2V0U2l6ZVksIHNpemVYLCBzaXplWSwgc3R5bGVUZXh0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkRm9yUGFnZSwgcmVnaXN0ZXJVcGRhdGVMYXlvdXQgfSBmcm9tIFwiLi4vcGFnZVwiO1xuaW1wb3J0IHsgYWRkU2Nyb2xsSW1hZ2UsIGFkZFNjcm9sbFRleHQsIGFkZFRleHQsIGdldEhlYWRlckJhckhlaWdodCwgZ2V0U2Nyb2xsV2lkdGgsIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwsIHNjcm9sbENvbnRhaW5lciB9IGZyb20gXCIuLi9zY3JvbGxcIjtcbmltcG9ydCB7IGVmZmVjdCwgU2lnbmFsIH0gZnJvbSBcIi4uL3NpZ25hbFwiO1xuaW1wb3J0IHsgYW5pbWF0ZVNwcmluZywgU3ByaW5nIH0gZnJvbSBcIi4uL3NwcmluZ1wiO1xuaW1wb3J0IHsgY29sb3JPbkhvdmVyLCBjcmVhdGVJY29uU1ZHLCBtYWtlTGluZSwgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi91dGlsXCI7XG5cbmNvbnN0IFQgPSAtMTAwMDA7XG5cbmZ1bmN0aW9uIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lOiBIVE1MRWxlbWVudCwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG4gICAgc2V0U2l6ZVkoc2VjdGlvbkxpbmUsIDAuMDAxICogcyk7XG4gICAgc2V0U2l6ZVgoc2VjdGlvbkxpbmUsIGlubmVyV2lkdGgpO1xuICAgIHNldFBvc1koc2VjdGlvbkxpbmUsIHkpO1xufVxuXG5pbnRlcmZhY2UgTmF2SXRlbSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGJhckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGp1bXBFbGVtZW50OiBIVE1MRWxlbWVudDtcbn1cblxuY29uc3QgbmF2SXRlbUZyb21TdHJpbmcgPSB7XG4gICAgYWJvdXQ6IHt9IGFzIE5hdkl0ZW0sXG4gICAgc2VydmljZXM6IHt9IGFzIE5hdkl0ZW0sXG4gICAgYmlvOiB7fSBhcyBOYXZJdGVtLFxuICAgIHJlY2VudFByb2plY3RzOiB7fSBhcyBOYXZJdGVtLFxuICAgIGNvbnRhY3Q6IHt9IGFzIE5hdkl0ZW0sXG59O1xuXG5mdW5jdGlvbiBnaXZlSG92ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGVudGVyQ29sb3I6IHN0cmluZywgbGVhdmVDb2xvcjogc3RyaW5nKSB7XG4gICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImNvbG9yIDAuMnNcIjtcbiAgICBlbGVtZW50Lm9ubW91c2VlbnRlciA9ICgpID0+IChlbGVtZW50LnN0eWxlLmNvbG9yID0gZW50ZXJDb2xvcik7XG4gICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiAoZWxlbWVudC5zdHlsZS5jb2xvciA9IGxlYXZlQ29sb3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVudUJ1dHRvbigpIHtcbiAgICBjb25zdCBzeiA9IDYwO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBjcmVhdGVJY29uU1ZHKHN6KTtcbiAgICBtZW51QnV0dG9uLnN0eWxlLnN0cm9rZSA9IHdoaXRlO1xuICAgIGNvbnN0IG1lbnVMaW5lID0gbWFrZUxpbmUobWVudUJ1dHRvbiwgNCk7XG4gICAgY29uc3QgbGluZTEgPSBtZW51TGluZSgpO1xuICAgIGNvbnN0IGxpbmUyID0gbWVudUxpbmUoKTtcbiAgICBjb25zdCBsaW5lMyA9IG1lbnVMaW5lKCk7XG4gICAgbGluZTEuc3R5bGUuc3Ryb2tlTGluZWNhcCA9ICdzcXVhcmUnXG4gICAgbGluZTIuc3R5bGUuc3Ryb2tlTGluZWNhcCA9ICdzcXVhcmUnXG4gICAgbGluZTMuc3R5bGUuc3Ryb2tlTGluZWNhcCA9ICdzcXVhcmUnXG5cbiAgICBjb25zdCBtZW51TW9kYWwgPSBuZXcgTW9kYWwoXG4gICAgICAgIFwiIzAwMDAwMGVlXCIsXG4gICAgICAgIChiYWNrZHJvcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudVBhZ2VOYXZzOiBIVE1MRWxlbWVudFtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtwYWdlTmFtZSwgbmF2SXRlbV0gb2YgT2JqZWN0LmVudHJpZXMobmF2SXRlbUZyb21TdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudVBhZ2VOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBtZW51UGFnZU5hdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICBtZW51UGFnZU5hdi5pbm5lclRleHQgPSBuYXZJdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2VOYXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgICAgICAgICBtZW51UGFnZU5hdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZW51TW9kYWwuYmVnaW5DbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBuYXZJdGVtLmJhckVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYmFja2Ryb3AuYXBwZW5kQ2hpbGQobWVudVBhZ2VOYXYpO1xuICAgICAgICAgICAgICAgIG1lbnVQYWdlTmF2cy5wdXNoKG1lbnVQYWdlTmF2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVudU1vZGFsLm9uTGF5b3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWVudVBhZ2VOYXYgb2YgbWVudVBhZ2VOYXZzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVRleHQobWVudVBhZ2VOYXYsIHsgbGV0dGVyU3BhY2luZzogMC4wMDUgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDYgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NYKG1lbnVQYWdlTmF2LCBzIC8gMiAtIHNpemVYKG1lbnVQYWdlTmF2KSAvIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZW50ZXJXaXRoR2FwWShtZW51UGFnZU5hdnMsIGlubmVySGVpZ2h0ICogMC4wOCwgaW5uZXJIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG1lbnVCdXR0b24uc3R5bGUuekluZGV4ID0gXCIxXCI7XG4gICAgICAgIH0sXG4gICAgICAgICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGltZSAqIHN6O1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhsaW5lMSwgeyB4MTogMCwgeTE6IDAsIHgyOiBzeiwgeTI6IHMgfSk7XG4gICAgICAgICAgICBsaW5lMi5zdHlsZS5vcGFjaXR5ID0gKHN6IC0gcykgLyBzeiArIFwiXCI7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGxpbmUyLCB7IHgxOiAwLCB5MTogc3ogLyAyLCB4Mjogc3osIHkyOiBzeiAvIDIgfSk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGxpbmUzLCB7IHgxOiAwLCB5MTogc3osIHgyOiBzeiwgeTI6IHN6IC0gcyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgbWVudUJ1dHRvbi5zdHlsZS56SW5kZXggPSBcIjBcIjtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBtZW51QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChtZW51TW9kYWwuaXNPcGVuaW5nKSB7XG4gICAgICAgICAgICBtZW51TW9kYWwuYmVnaW5DbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudU1vZGFsLmJlZ2luT3BlbigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMYW5kc2NhcGUoKSkge1xuICAgICAgICAgICAgc2V0U2l6ZVgobWVudUJ1dHRvbiwgMCk7XG4gICAgICAgICAgICBzZXRTaXplWShtZW51QnV0dG9uLCAwKTtcbiAgICAgICAgICAgIHNldFBvc1gobWVudUJ1dHRvbiwgMCk7XG4gICAgICAgICAgICBzZXRQb3NZKG1lbnVCdXR0b24sIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjA5ICogcztcblxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IDAuMDcgKiBzO1xuICAgICAgICAgICAgc2V0U2l6ZVgobWVudUJ1dHRvbiwgc2l6ZSk7XG4gICAgICAgICAgICBzZXRTaXplWShtZW51QnV0dG9uLCBzaXplKTtcblxuICAgICAgICAgICAgc2V0UG9zWChtZW51QnV0dG9uLCBpbm5lcldpZHRoIC0gc2l6ZSAtIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKG1lbnVCdXR0b24sIChnZXRIZWFkZXJCYXJIZWlnaHQoKSAtIHNpemUpIC8gMik7XG4gICAgICAgIH1cbiAgICB9LCBbYm9keVNpZ10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmF2QmFyKCkge1xuICAgIC8vLyBaWlpaIHB1bGwgdGhpcyBvdXQgd2l0aCBvbmUgaW4gc2Nyb2xsLnRzXG4gICAgZnVuY3Rpb24gYWRkSW1hZ2Uoc3JjOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBzY3JvbGxJbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgc2Nyb2xsSW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICBzY3JvbGxJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBzY3JvbGxJbWFnZS5vbmxvYWQgPSAoKSA9PiBib2R5U2lnLnVwZGF0ZSgpOyAvLyBaWlpaIHN0dXBpZFxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsSW1hZ2UpO1xuICAgICAgICByZXR1cm4gc2Nyb2xsSW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3Qga29yZUxvZ28gPSBhZGRJbWFnZShcImJpZy1rb3JlLnN2Z1wiKTtcblxuICAgIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRhZ2xpbmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGFnbGluZS5zcmMgPSBcInRhZ2xpbmUuc3ZnXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcblxuICAgIGZ1bmN0aW9uIGFkZE5hdkl0ZW0obmF2SXRlbU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGJhckVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIGJhckVsZW1lbnQuaW5uZXJUZXh0ID0gbmF2SXRlbU5hbWU7XG5cbiAgICAgICAgY29uc3QgbmF2SXRlbSA9IHt9IGFzIE5hdkl0ZW07XG4gICAgICAgIG5hdkl0ZW0uYmFyRWxlbWVudCA9IGJhckVsZW1lbnQ7XG4gICAgICAgIG5hdkl0ZW0ubmFtZSA9IG5hdkl0ZW1OYW1lO1xuXG4gICAgICAgIGJhckVsZW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdkl0ZW0uanVtcEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBnaXZlSG92ZXIoYmFyRWxlbWVudCwgbWV0YWwsIHdoaXRlKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhckVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gbmF2SXRlbTtcbiAgICB9XG5cbiAgICBuYXZJdGVtRnJvbVN0cmluZy5hYm91dCA9IGFkZE5hdkl0ZW0oXCJBQk9VVFwiKTtcbiAgICBuYXZJdGVtRnJvbVN0cmluZy5zZXJ2aWNlcyA9IGFkZE5hdkl0ZW0oXCJTRVJWSUNFU1wiKTtcbiAgICBuYXZJdGVtRnJvbVN0cmluZy5iaW8gPSBhZGROYXZJdGVtKFwiQklPXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLnJlY2VudFByb2plY3RzID0gYWRkTmF2SXRlbShcIlJFQ0VOVCBQUk9KRUNUU1wiKTtcbiAgICBuYXZJdGVtRnJvbVN0cmluZy5jb250YWN0ID0gYWRkTmF2SXRlbShcIkNPTlRBQ1RcIik7XG5cbiAgICBjb25zdCBiYXJFbGVtZW50cyA9IE9iamVjdC52YWx1ZXMobmF2SXRlbUZyb21TdHJpbmcpLm1hcCgoYikgPT4gYi5iYXJFbGVtZW50KTtcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDUgKiBzO1xuXG4gICAgICAgICAgICBjb25zdCBuYXZCb3R0b20gPSAwLjA1ICogcztcblxuICAgICAgICAgICAgc2V0U2l6ZVgoa29yZUxvZ28sIDAuMDggKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1koa29yZUxvZ28sIG5hdkJvdHRvbSAtIHNpemVZKGtvcmVMb2dvKSAtIDAuMDAyICogcyk7XG4gICAgICAgICAgICBzZXRQb3NYKGtvcmVMb2dvLCBtYXJnaW4pO1xuXG4gICAgICAgICAgICBzZXRTaXplWCh0YWdsaW5lLCAwLjE3ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NZKHRhZ2xpbmUsIG5hdkJvdHRvbSAtIHNpemVZKHRhZ2xpbmUpKTtcbiAgICAgICAgICAgIHNldFBvc1godGFnbGluZSwgcG9zRW5kWChrb3JlTG9nbykgKyAwLjAxOCAqIHMpO1xuXG4gICAgICAgICAgICBjb25zdCBuYXZJdGVtVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMDAwOCAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGJhckVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmF2SXRlbSA9IGJhckVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHROYXZJdGVtID0gYmFyRWxlbWVudHNbaSArIDFdO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KG5hdkl0ZW0sIG5hdkl0ZW1UZXh0RGV0YWlscyk7XG4gICAgICAgICAgICAgICAgaWYgKG5leHROYXZJdGVtKSBzZXRQb3NYKG5hdkl0ZW0sIHBvc1gobmV4dE5hdkl0ZW0pIC0gc2l6ZVgobmF2SXRlbSkgLSAwLjAyICogcyk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZXRQb3NYKG5hdkl0ZW0sIHMgLSBzaXplWChuYXZJdGVtKSAtIDAuMDcgKiBzKTtcblxuICAgICAgICAgICAgICAgIHNldFBvc1kobmF2SXRlbSwgbmF2Qm90dG9tIC0gc2l6ZVkobmF2SXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjA5ICogczsgLy8gWlpaWiB0YWtlIG91dFxuXG4gICAgICAgICAgICBzZXRTaXplWChrb3JlTG9nbywgMC4zICogcyk7XG4gICAgICAgICAgICBzZXRQb3NYKGtvcmVMb2dvLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShrb3JlTG9nbywgKGdldEhlYWRlckJhckhlaWdodCgpIC0gc2l6ZVkoa29yZUxvZ28pKSAvIDIpO1xuXG4gICAgICAgICAgICBzZXRTaXplWCh0YWdsaW5lLCBUKTtcbiAgICAgICAgICAgIHNldFBvc1godGFnbGluZSwgVCk7XG4gICAgICAgICAgICBzZXRQb3NZKHRhZ2xpbmUsIFQpO1xuXG4gICAgICAgICAgICBjb25zdCBuYXZJdGVtVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMDAwOCAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGJhckVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmF2SXRlbSA9IGJhckVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHROYXZJdGVtID0gYmFyRWxlbWVudHNbaSArIDFdO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KG5hdkl0ZW0sIG5hdkl0ZW1UZXh0RGV0YWlscyk7XG4gICAgICAgICAgICAgICAgaWYgKG5leHROYXZJdGVtKSBzZXRQb3NYKG5hdkl0ZW0sIFQpO1xuICAgICAgICAgICAgICAgIGVsc2Ugc2V0UG9zWChuYXZJdGVtLCBUKTtcblxuICAgICAgICAgICAgICAgIHNldFBvc1kobmF2SXRlbSwgVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbYm9keVNpZ10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG9tZVBhZ2UoKSB7XG4gICAgZnVuY3Rpb24gYWRkU2VjdGlvbkxpbmUoKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VjdGlvbkxpbmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHNlY3Rpb25MaW5lLnN0eWxlLmJhY2tncm91bmQgPSBcIiMxMTExMTFcIjtcblxuICAgICAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzZWN0aW9uTGluZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uTGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkbGluZVRleHQgPSBhZGRTY3JvbGxUZXh0KFwiUFJPVEVDVCBZT1VSU0VMRiBGUk9NIFBST0pFQ1QgSEFaQVJEUy5cIik7XG4gICAgY29uc3QgdHJhdmVsaW5nVGhlUGF0aCA9IGFkZFNjcm9sbFRleHQoXCJUcmF2ZWxsaW5nIHRoZSBwYXRoIHVuZ3VpZGVkIGNhbiBjb3N0IHlvdS5cIik7XG5cbiAgICBjb25zdCBsb2dvID0gYWRkU2Nyb2xsSW1hZ2UoXCJsb2dvLnN2Z1wiKTtcbiAgICAvLyBsb2dvLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XG4gICAgLy8gbG9nby5vbm1vdXNlZW50ZXIgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxvZ28uc3R5bGUuZmlsdGVyID0gXCJkcm9wLXNoYWRvdygxMHB4IDEwcHggMTBweCByZ2JhKDI1NSwgMTgwLCAxMDAsIDAuNSkpXCI7XG4gICAgLy8gICAgIGxvZ28uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTE1cHgsIC0xNXB4KVwiO1xuICAgIC8vIH07XG4gICAgLy8gbG9nby5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxvZ28uc3R5bGUuZmlsdGVyID0gXCJcIjtcbiAgICAvLyAgICAgbG9nby5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwcHgsIDBweClcIjtcbiAgICAvLyB9O1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUxID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGFib3V0TmFtZSA9IGFkZFNjcm9sbFRleHQoXCJTQ09UVCBHLiBHUklGRklOXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLmFib3V0Lmp1bXBFbGVtZW50ID0gYWJvdXROYW1lO1xuICAgIGNvbnN0IGFib3V0RGVzY3JpcHRpb24gPSBhZGRTY3JvbGxUZXh0KFwiRm91bmRlcjxicj48YnI+V2l0aCAzNyB5ZWFycyBpbiB0aGUgdHJlbmNoZXMgb2YgYnJvYWRjYXN0LCBBViwgYW5kIG1lZGlhIHN5c3RlbXMgaW50ZWdyYXRpb24sIEnigJl2ZSBidWlsdCBteSBjYXJlZXIgcHJvdGVjdGluZyBjbGllbnRzIGZyb20gYmVpbmcgc3RlYW1yb2xsZWQgYnkgY29tcGxleGl0eSwgYmFkIHBsYW5uaW5nLCBhbmQgdW5yZWFsaXN0aWMgcHJvbWlzZXMuPGJyPjxicj5J4oCZbSBub3QgaGVyZSB0byBwbGF5IG5pY2Ug4oCUIEnigJltIGhlcmUgdG8gbWFrZSBzdXJlIHRoaW5ncyBnZXQgZG9uZSByaWdodC48YnI+PGJyPkFzIGEgU3ViamVjdCBNYXR0ZXIgRXhwZXJ0IGFuZCBPd25lcuKAmXMgUmVwLCBJIGJyaW5nIGNsZWFyLWV5ZWQgc3RyYXRlZ3ksIGVuZ2luZWVyaW5nIGxlYWRlcnNoaXAsIGFuZCBhIG5vLUJTIGFwcHJvYWNoIHRvIGNvbXBsZXggcHJvamVjdHMuIEZyb20gZWFybHktc3RhZ2UgdmlzaW9uaW5nIHRocm91Z2ggZmluYWwgaW1wbGVtZW50YXRpb24sIEkgbWFrZSBzdXJlIG15IGNsaWVudHMgYXJlIGZ1bGx5IGluZm9ybWVkIGFuZCBzdGF5IGluIGNvbnRyb2wg4oCUIHdpdGhvdXQgYmVpbmcgYnVyaWVkIGluIHRlY2huaWNhbCBub2lzZSBvciB2ZW5kb3Igc3Bpbi48YnI+PGJyPknigJl2ZSBsZWQgaGlnaC1wcm9maWxlIHByb2plY3RzIGZvciB0aGUgTkJBLCBXV0UsIFVuaXZpc2lvbiwgRGlzbmV5LCBhbmQgbW9yZS4gTXkgYmFja2dyb3VuZCBpbmNsdWRlcyBydW5uaW5nIGEgc3VjY2Vzc2Z1bCBpbnRlZ3JhdGlvbiBmaXJtLCBtYW5hZ2luZyBlbmdpbmVlcmluZyB0ZWFtcyBvZiA1MCssIGFuZCBvdmVyc2VlaW5nIHNvbWUgb2YgdGhlIGxhcmdlc3QgbWVkaWEgZmFjaWxpdHkgYnVpbGRzIG9mIHRoZSBsYXN0IDMwIHllYXJzLiBXaGV0aGVyIHdl4oCZcmUgdGFsa2luZyBuZXR3b3JrIG9wcywgY2xvdWQgd29ya2Zsb3dzLCBwb3N0LXByb2R1Y3Rpb24sIG9yIHN0dWRpbyBvcHMgd29ya2Zsb3dzIOKAlCBJ4oCZdmUgZG9uZSBpdCwgYW5kIEkgYnJpbmcgdGhlIHNjYXJzIChhbmQgbGVzc29ucykgd2l0aCBtZS48YnI+PGJyPk15IGpvYiBpcyBzaW1wbGU6IG1ha2Ugc3VyZSBteSBjbGllbnRzIGFyZSBwcm90ZWN0ZWQsIHJlc3BlY3RlZCwgYW5kIGhhdmUgZGVsaXZlcmVkIGV4YWN0bHkgd2hhdCB0aGV5IG5lZWTigJRub3RoaW5nIG1vcmUsIGFuZCBhYnNvbHV0ZWx5IG5vdGhpbmcgbGVzcy5cIik7XG4gICAgY29uc3QgcG9ydHJhaXQgPSBhZGRTY3JvbGxJbWFnZShcInBhcGEucG5nXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUyID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGZlZWxDb25maWRlbnQgPSBhZGRTY3JvbGxUZXh0KFwiRkVFTCBDT05GSURFTlQgS05PV0lORyBZT1XigJlWRSBHT1QgSVQgQUxMIENPVkVSRUQuXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLnNlcnZpY2VzLmp1bXBFbGVtZW50ID0gZmVlbENvbmZpZGVudDtcblxuICAgIGxldCBza2lsbFRpbGVDb3VudFggPSAxO1xuICAgIGxldCBza2lsbFRpbGVDb3VudFkgPSAxO1xuICAgIGNvbnN0IHNwcmluZ1NpZyA9IG5ldyBTaWduYWwoKTtcbiAgICBmdW5jdGlvbiBhZGRTa2lsbFRpbGUodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gbWV0YWw7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gYWRkVGV4dCh0aXRsZSwgY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gYWRkVGV4dChkZXNjcmlwdGlvbiwgY29udGFpbmVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4yNXNcIjtcblxuICAgICAgICBjb25zdCBzcHJpbmdYID0gbmV3IFNwcmluZygwKTtcbiAgICAgICAgY29uc3Qgc3ByaW5nWSA9IG5ldyBTcHJpbmcoMCk7XG4gICAgICAgIGNvbnN0IHNwcmluZ1NpemVZID0gbmV3IFNwcmluZygxKTtcbiAgICAgICAgc3ByaW5nWC5zZXRTdGlmZm5lc3NDcml0aWNhbCgyMDApO1xuICAgICAgICBzcHJpbmdZLnNldFN0aWZmbmVzc0NyaXRpY2FsKDIwMCk7XG4gICAgICAgIHNwcmluZ1NpemVZLnNldFN0aWZmbmVzc0NyaXRpY2FsKDIwMCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdGlsZUF0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2tpbGxUaWxlcy5maW5kKChzKSA9PiBzLnNwcmluZ1gudGFyZ2V0ID09PSB4ICYmIHMuc3ByaW5nWS50YXJnZXQgPT09IHkpITtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZsaXBUaWxlcyhzcHJpbmcxOiBTcHJpbmcsIHNwcmluZzI6IFNwcmluZykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNwcmluZzEudGFyZ2V0O1xuICAgICAgICAgICAgc3ByaW5nMS50YXJnZXQgPSBzcHJpbmcyLnRhcmdldDtcbiAgICAgICAgICAgIHNwcmluZzIudGFyZ2V0ID0gcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaG9sZURpZmZYID0gMDtcbiAgICAgICAgICAgIGxldCBob2xlRGlmZlkgPSAwO1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVjYWxjdWxhdGVEaWZmcygpIHtcbiAgICAgICAgICAgICAgICBob2xlRGlmZlggPSBob2xlR29hbFggLSBob2xlU2tpbGxUaWxlLnNwcmluZ1gudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGhvbGVEaWZmWSA9IGhvbGVHb2FsWSAtIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBob2xlR29hbFggPSBzcHJpbmdYLnRhcmdldDtcbiAgICAgICAgICAgIGxldCBob2xlR29hbFkgPSBzcHJpbmdZLnRhcmdldCArIDE7XG4gICAgICAgICAgICByZWNhbGN1bGF0ZURpZmZzKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ZWRMb3cgPSBob2xlR29hbFkgPj0gc2tpbGxUaWxlQ291bnRZO1xuICAgICAgICAgICAgaWYgKChob2xlRGlmZlggPT09IDAgJiYgaG9sZURpZmZZID4gMCkgfHwgaG9sZUdvYWxZID49IHNraWxsVGlsZUNvdW50WSkge1xuICAgICAgICAgICAgICAgIGhvbGVHb2FsWSAtPSAxO1xuICAgICAgICAgICAgICAgIHJlY2FsY3VsYXRlRGlmZnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc2xpZGVIb2xlWShnb2FsWTogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGlmZlkgPSBnb2FsWSAtIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IG5ld0RpZmZZID4gMCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gaG9sZVNraWxsVGlsZS5zcHJpbmdZLnRhcmdldDsgeSAhPT0gZ29hbFk7IHkgKz0gZGlyZWN0aW9uWSkge1xuICAgICAgICAgICAgICAgICAgICBmbGlwVGlsZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlQXQoaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldCwgeSkuc3ByaW5nWSwgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVBdChob2xlU2tpbGxUaWxlLnNwcmluZ1gudGFyZ2V0LCB5ICsgZGlyZWN0aW9uWSkuc3ByaW5nWVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWNhbGN1bGF0ZURpZmZzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBzbGlkZUhvbGVYKGdvYWxYOiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEaWZmWCA9IGdvYWxYIC0gaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25YID0gbmV3RGlmZlggPiAwID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBob2xlU2tpbGxUaWxlLnNwcmluZ1gudGFyZ2V0OyB4ICE9PSBnb2FsWDsgeCArPSBkaXJlY3Rpb25YKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsaXBUaWxlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVBdCh4LCBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdYLCAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZUF0KHggKyBkaXJlY3Rpb25YLCBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdYXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY2FsY3VsYXRlRGlmZnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0ZWRMb3cpIHNsaWRlSG9sZVkoc2tpbGxUaWxlQ291bnRZIC0gMik7XG4gICAgICAgICAgICBlbHNlIGlmIChob2xlRGlmZlkgPiAwKSBzbGlkZUhvbGVZKGhvbGVHb2FsWSk7XG5cbiAgICAgICAgICAgIGlmIChob2xlRGlmZlggIT09IDApIHNsaWRlSG9sZVgoaG9sZUdvYWxYKTtcblxuICAgICAgICAgICAgaWYgKHN0YXJ0ZWRMb3cpIHNsaWRlSG9sZVkoaG9sZUdvYWxZKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhvbGVEaWZmWSA8IDApIHNsaWRlSG9sZVkoaG9sZUdvYWxZKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGlmIChza2lsbFRpbGUgPT09IGhvbGVTa2lsbFRpbGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IG1ldGFsO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5zcHJpbmdTaXplWS50YXJnZXQgPSAxO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5kZXNjcmlwdGlvblRleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IHRpbGVCcm93bjtcbiAgICAgICAgICAgIHNwcmluZ1NpemVZLnRhcmdldCA9IDI7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbGxUaWxlIG9mIHNraWxsVGlsZXMpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdYLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdZLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdTaXplWSwgc2tpbGxUaWxlLnNwcmluZ1NpZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBvbkNsaWNrO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgcmV0dXJuIHsgY29udGFpbmVyLCB0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgc3ByaW5nWCwgc3ByaW5nWSwgc3ByaW5nU2l6ZVksIHNwcmluZ1NpZyB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhvbGVTa2lsbFRpbGUgPSBhZGRTa2lsbFRpbGUoXCJcIiwgXCJcIik7XG4gICAgaG9sZVNraWxsVGlsZS5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzAwMDAwMDMzXCI7XG5cbiAgICBjb25zdCBza2lsbFRpbGVzID0gW1xuICAgICAgICBhZGRTa2lsbFRpbGUoXCJPd25lcjxicj5SZXByZXNlbnRhdGlvblwiLCBcIktPUkUgc2VydmVzIGFzIHlvdXIgZXllcywgZWFycywgYW5kIGFkdm9jYXRlcywgcHJvdmlkaW5nIGNvbmNpZXJnZS1sZXZlbCBndWlkYW5jZSB0aHJvdWdoIGV2ZXJ5IHN0ZXAgb2YgeW91ciBwcm9qZWN0LiBXZSBrZWVwIHZlbmRvcnMgYW5kIGNvbnRyYWN0b3JzIGhvbmVzdCwgbWFraW5nIHN1cmUgbm90aGluZyBzbGlwcyB0aHJvdWdoIHRoZSBjcmFja3MuIFdlIGJlZ2luIGJ5IGFsaWduaW5nIGFsbCBzdGFrZWhvbGRlcnMgZWFybHkgb24sIHRoZW4gZGVmZW5kIHlvdXIgcG9zaXRpb24gdGhyb3VnaG91dCB0aGUgcHJvY2Vzcy5cIiksIC8vXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkJhc2lzIG9mPGJyPkRlc2lnblwiLCBcIktPUkUgbGlzdGVucyBiZWZvcmUgd2UgYWR2aXNlLiBXZSByZXZpZXcgeW91ciBjdXJyZW50IG9wZXJhdGlvbiwgZnV0dXJlIHBsYW5zLCBhbmQgb3ZlcmFsbCBnb2Fscy4gWW91ciBuZXcgc3BhY2UgYW5kIHN5c3RlbXMgbXVzdCBncmFjZWZ1bGx5IHN1cHBvcnQgb3BlcmF0aW9uYWwgbmVlZHMgYW5kIGZ1dHVyZSBncm93dGguIERlZXAgZXhwZXJ0aXNlIGluIHN5c3RlbXMgcGxhbm5pbmcgYW5kIGluZnJhc3RydWN0dXJlIHN0cmF0ZWd5IGFsbG93cyBLT1JFIHRvIHRyYW5zbGF0ZSB2aXNpb24gaW50byBhIGNvbXByZWhlbnNpdmUgQm9ELlwiKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUHJvb2Ygb2Y8YnI+Q29uY2VwdFwiLCBcIktPUkUga25vd3MgeW91IG9ubHkgZ2V0IG9uZSBjaGFuY2UgdG8gYnVpbGQgYSBuZXcgZmFjaWxpdHkgcmlnaHQuIFlvdSBkZXNlcnZlIHRvIHNlZSBpZGVhcyB0aG9yb3VnaGx5IHRlc3RlZCBhbmQgdmFsaWRhdGVkIGJlZm9yZSB5b3UgY29tbWl0LiBXZSB2ZXQgdGVjaG5vbG9neSwgdmVuZG9ycywgYW5kIGFzc3VyYW5jZXMgYWdhaW5zdCByZWFsLXdvcmxkIGNyaXRlcmlhLiBUaGlzIGJyaW5ncyBjbGFyaXR5IHRvIHlvdXIgd29ya2Zsb3cgYW5kIHB1dHMgbWVhc3VyYWJsZSBhY2NvdW50YWJpbGl0eSBiZWhpbmQgZXZlcnkgcHJvbWlzZS5cIiksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlByb2plY3QgVGVhbTxicj5Bc3NlbWJseVwiLCBcIktPUkUgYnJpbmdzIHRvZ2V0aGVyIHRoZSByaWdodCB0ZWFtIGZvciB5b3VyIHByb2plY3QuIFdlIGRyYXcgZnJvbSBhIG5ldHdvcmsgb2YgdHJ1c3RlZCBleHBlcnRzIGluIGRlc2lnbiwgZW5naW5lZXJpbmcsIGluc3RhbGxhdGlvbiwgYW5kIG1vcmUuIFRoZXNlIGFyZSBwcm92ZW4gcHJvcyB3aG/igJl2ZSBzaG93biB0aGV5IGNhbiBleGVjdXRlIHVuZGVyIHByZXNzdXJlIHdpdGhvdXQgbWlzc2luZyBhIGJlYXQuIFRoYXQgdHJhbnNsYXRlcyB0byBwZXJmb3JtYW5jZSwgbm90IGV4Y3VzZXMuXCIpLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJQdW5jaCBMaXN0PGJyPk1hbmFnZW1lbnRcIiwgXCJLT1JFIHRyYWNrcyBldmVyeSBkZXRhaWwsIGZyb20gYnVpbGRpbmcgY29uc3RydWN0aW9uIHRvIHN5c3RlbXMgaW50ZWdyYXRpb24gdG8gb25nb2luZyBzZXJ2aWNlcy4gSXTigJlzIGNyaXRpY2FsIHRvIG1ha2Ugc3VyZSBhbGwgdGhlIHRlY2ggd29ya3MsIGFsbCBwcm9taXNlcyBhcmUgZnVsZmlsbGVkLiBOb3RoaW5nIGlzIHNpZ25lZC1vZmYgdW50aWwgaXTigJlzIHRlc3RlZCwgdmVyaWZpZWQsIGFuZCByaWdodC4gUmVsZW50bGVzcyBmb2xsb3ctdGhyb3VnaCB0YWtlcyBleHRyYSBlZmZvcnQsIGJ1dCB3ZSBzdHViYm9ybmx5IHJlZnVzZSB0byBjb21wcm9taXNlLlwiKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiTmVlZHM8YnI+QW5hbHlzaXNcIiwgXCJLT1JFIGd1aWRlcyB5b3UgdG8gdW5jb3ZlciBhbmQgdW5kZXJzdGFuZCBleGFjdGx5IHdoYXTigJlzIG5lZWRlZCwgd2hhdCdzIHBvc3NpYmxlLCBhbmQgd2hhdOKAmXMgd29ydGggcHVyc3VpbmcuIEFzayBhbnlvbmUgd2hv4oCZcyBiZWVuIHRocm91Z2ggdGhpcyBwcm9jZXNzIOKAkyBlYXJseS1waGFzZSBwcm9qZWN0IGludGVsbGlnZW5jZSBtYWtlcyBhbGwgdGhlIGRpZmZlcmVuY2UuIE1ha2Ugc21hcnRlciwgZmFzdGVyIGRlY2lzaW9ucyB3aXRoIGNsYXJpdHkgYW5kIGNvbmZpZGVuY2UsIGFuZCBhdm9pZCBjb3N0bHkgbWlzdGFrZXMuXCIpLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJCdWRnZXRpbmcgJjxicj5Fc3RpbWF0aW5nXCIsIFwiS09SRSBvZmZlcnMgYSBidWRnZXRpbmcgcHJvY2VzcyBzaGFwZWQgYnkgcmVhbC13b3JsZCBlbmdpbmVlcmluZyBleHBlcmllbmNlLiBXZSBwcm92aWRlIGVhcmx5IGNvc3QgbW9kZWxzLCBkZXRhaWxlZCBwcm9qZWN0aW9ucywgYW5kIHBoYXNlZCBpbnZlc3RtZW50IHN0cmF0ZWdpZXMgdG8gaGVscCB5b3Ugc3RheSBpbmZvcm1lZCwgaW4gY29udHJvbCwgYW5kIHdpdGhpbiBidWRnZXQuIE91ciBlYXJseSB3b3JrIGhlbHBzIHlvdSB0byBtaW5pbWl6ZSBzY29wZSBjcmVlcCBhbmQgYXZvaWQgZmluYW5jaWFsIHN1cnByaXNlcy5cIiksXG4gICAgICAgIGhvbGVTa2lsbFRpbGUsXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlJGUCBDcmVhdGlvbjxicj4mIEFkbWluaXN0cmF0aW9uXCIsIFwiS09SRSBjYXB0dXJlcyB0aGUgcHJvamVjdCBvYmplY3RpdmVzLCBvdXRsaW5lcyB0aGUgc2NvcGUsIGRlZmluZXMgdGhlIHF1YWxpZmljYXRpb25zLCBhbmQgc3RydWN0dXJlcyB0aGUgcmVzcG9uc2UgcmVxdWlyZWQgb2YgZXZlcnkgcHJvamVjdCBzb2xpY2l0YXRpb24gdGhhdCB3ZSBwcm9kdWNlLiBXZSB0aGVuIHN0cnVjdHVyZSB0aGUgYmlkIGV2YWx1YXRpb24gcHJvY2VzcyBhbmQgZ3VpZGUgeW91IHRocm91Z2ggdGhlIGNyaXRpY2FsIGRlY2lzaW9uLW1ha2luZywgbGVhdmluZyBub3RoaW5nIHRvIGNoYW5jZS5cIiksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkludGVncmF0b3I8YnI+U3VwcG9ydFwiLCBcIktPUkUgcGFydG5lcnMgd2l0aCB5b3VyIGludGVncmF0b3IgdG8gbGVhZCB0aGUgcHJvY2VzcywgcHJvdGVjdCB5b3VyIHZpc2lvbiwgYW5kIG1ha2Ugc3VyZSBldmVyeSB3b3JrZmxvdyBpcyBkZWxpdmVyZWQgZXhhY3RseSBhcyBkZXNpZ25lZC4gV2l0aCBpbnRlZ3JhdGlvbiBsZWFkZXJzaGlwIGFuZCBvdmVyc2lnaHQgcm9vdGVkIGluIGRlY2FkZXMgb2YgZXhwZXJpZW5jZSwgd2UgcHJlc2VydmUgdGhlIGludGVncml0eSBvZiB5b3VyIGRlc2lnbi4gV2UgZG9u4oCZdCBhY2NlcHQgY29tcHJvbWlzZXMuIE5laXRoZXIgc2hvdWxkIHlvdS5cIiksXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIGxheW91dFRpbGVzKHRpbGVTaXplOiBudW1iZXIsIHRpbGVHYXA6IG51bWJlciwgdGlsZVBvc1g6ICh4OiBudW1iZXIpID0+IG51bWJlciwgdGlsZVBvc1k6ICh5OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraWxsVGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNraWxsVGlsZSA9IHNraWxsVGlsZXNbaV07XG4gICAgICAgICAgICBza2lsbFRpbGUuc3ByaW5nWC5wb3NpdGlvbiA9IHNraWxsVGlsZS5zcHJpbmdYLnRhcmdldCA9IGkgJSBza2lsbFRpbGVDb3VudFg7XG4gICAgICAgICAgICBza2lsbFRpbGUuc3ByaW5nWS5wb3NpdGlvbiA9IHNraWxsVGlsZS5zcHJpbmdZLnRhcmdldCA9IGkgJSBza2lsbFRpbGVDb3VudFk7XG4gICAgICAgIH1cblxuICAgICAgICBzcHJpbmdTaWcudW5zdWJzY3JpYmVBbGwoKTtcbiAgICAgICAgZWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbGxUaWxlIG9mIHNraWxsVGlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNvbnRhaW5lciwgdGl0bGVUZXh0LCBkZXNjcmlwdGlvblRleHQsIHNwcmluZ1gsIHNwcmluZ1ksIHNwcmluZ1NpemVZIH0gPSBza2lsbFRpbGU7XG5cbiAgICAgICAgICAgICAgICBzZXRTaXplWChjb250YWluZXIsIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICBzZXRTaXplWShjb250YWluZXIsIHRpbGVTaXplICogc3ByaW5nU2l6ZVkucG9zaXRpb24gKyAoc3ByaW5nU2l6ZVkucG9zaXRpb24gLSAxKSAqIHRpbGVHYXApO1xuXG4gICAgICAgICAgICAgICAgc2V0UG9zWChjb250YWluZXIsIHRpbGVQb3NYKHNwcmluZ1gucG9zaXRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NZKGNvbnRhaW5lciwgdGlsZVBvc1koc3ByaW5nWS5wb3NpdGlvbikpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3R5bGVUZXh0KHRpdGxlVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMDQgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDUgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dCh0aXRsZVRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDA0ICogdGlsZVNpemUsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4xICogdGlsZVNpemUsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zWCh0aXRsZVRleHQsIDAuMDggKiB0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zWSh0aXRsZVRleHQsIHRpbGVTaXplIC8gMiAtIHNpemVZKHRpdGxlVGV4dCkgLyAyKTtcblxuICAgICAgICAgICAgICAgIC8vIHN0eWxlVGV4dChkZXNjcmlwdGlvblRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDA0ICogcywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjAyNSAqIHMsIGxpbmVIZWlnaHQ6IDAuMDQgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChkZXNjcmlwdGlvblRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiB0aWxlU2l6ZSwgZm9udFdlaWdodDogNDAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjA3ICogdGlsZVNpemUsIGxpbmVIZWlnaHQ6IDAuMDk1ICogdGlsZVNpemUsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgc2V0U2l6ZVgoZGVzY3JpcHRpb25UZXh0LCB0aWxlU2l6ZSAqIDAuODUpO1xuICAgICAgICAgICAgICAgIHNldFBvc1goZGVzY3JpcHRpb25UZXh0LCAwLjA4ICogdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgIHNldFBvc1koZGVzY3JpcHRpb25UZXh0LCAwLjcgKiB0aWxlU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtzcHJpbmdTaWddKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTMgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgYmlnTmFtZXMgPSBhZGRTY3JvbGxUZXh0KFwiQklHIE5BTUVTPGJyPllPVSBLTk9XXCIpO1xuICAgIGNvbnN0IGhhc1RhY2tsZWQgPSBhZGRTY3JvbGxUZXh0KFwiPHN0cm9uZz5TY290dCBHcmlmZmluPC9zdHJvbmc+IGhhcyB0YWNrbGVkIHNvbWUgb2YgdGhlIG1vc3QgY29tcGxleCBwcm9qZWN0cyBmb3Igc29tZSBvZiB0aGUgbGFyZ2VzdCBtZWRpYSBjb21wYW5pZXMgaW4gdGhlIHdvcmxkLiBIZSBoYXMgc2VlbiBpdCBhbGwsIGFuZCB5b3UgY2FuIHRhcCBpbnRvIHRoYXQgZXhwZXJpZW5jZS5cIik7XG5cbiAgICBjb25zdCBiaWdOYW1lQ2xpZW50cyA9IFtcbiAgICAgICAgXCJBQlMvQ0JOXCIsIC8vXG4gICAgICAgIFwiQmxhY2tyb2NrXCIsXG4gICAgICAgIFwiQmxhY2tzdG9uZVwiLFxuICAgICAgICBcIkNCU1wiLFxuICAgICAgICBcIkNOTlwiLFxuICAgICAgICBcIkRpc25leS9BQkMvRVNQTlwiLFxuICAgICAgICBcIkZveCBOZXdzXCIsXG4gICAgICAgIFwiTWFkaXNvbiBTcXVhcmUgR2FyZGVuXCIsXG4gICAgICAgIFwiTUxCXCIsXG4gICAgICAgIFwiTVNOQkNcIixcbiAgICAgICAgXCJOQkFcIixcbiAgICAgICAgXCJOQkNVL0NOQkNcIixcbiAgICAgICAgXCJOYXRpb25hbCBHZW9ncmFwaGljXCIsXG4gICAgICAgIFwiTm9ydGh3ZXN0ZXJuIFVuaXZlcnNpdHlcIixcbiAgICAgICAgXCJQYXJhbW91bnQvQ0JTXCIsXG4gICAgICAgIFwiTVRWL1Nob3d0aW1lXCIsXG4gICAgICAgIFwiUGVubiBTdGF0ZSBVbml2ZXJzaXR5XCIsXG4gICAgICAgIFwiUHJ1ZGVudGlhbFwiLFxuICAgICAgICBcIlNpcml1cyBTYXRlbGxpdGUgUmFkaW9cIixcbiAgICAgICAgXCJTeXJhY3VzZSBVbml2ZXJzaXR5XCIsXG4gICAgICAgIFwiVGVsZXZpc2EtVW5pdmlzaW9uXCIsXG4gICAgICAgIFwiVGhlIE5ldyBZb3JrIFRpbWVzXCIsXG4gICAgICAgIFwiV1dFXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGJpZ05hbWVDbGllbnRUZXh0cyA9IGJpZ05hbWVDbGllbnRzLm1hcCgoYmlnTmFtZUNsaWVudCkgPT4gYWRkU2Nyb2xsVGV4dChiaWdOYW1lQ2xpZW50KSk7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTQgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgZ3JpZmZpbkJsYWNrV2hpdGVMYW5kc2NhcGUgPSBhZGRTY3JvbGxJbWFnZShcImdyaWZmaW4tYmxhY2std2hpdGUtbGFuZHNjYXBlLnBuZ1wiKTtcbiAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZVBvcnRyYWl0ID0gYWRkU2Nyb2xsSW1hZ2UoXCJncmlmZmluLWJsYWNrLXdoaXRlLXBvcnRyYWl0LmpwZ1wiKTtcbiAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZVRleHQgPSBhZGRTY3JvbGxUZXh0KFwiSeKAmXZlIGJlZW4gaW4gdGhpcyBpbmR1c3RyeSBmb3IgbW9yZSB0aGFuIDM1IHllYXJzLCBhbmQgSSBjYW7igJl0IHRoaW5rIG9mIG9uZSBjbGllbnQgd2hvIHdhcyBhYmxlIHRvIHN1Y2Nlc3NmdWxseSBuYXZpZ2F0ZSB0aGUgZ2F1bnRsZXQgdGhhdCBpcyBhIGxhcmdlIG1lZGlhIGZhY2lsaXR5IHByb2plY3Qgd2l0aG91dCB0aGUgc3VwcG9ydCBvZiBhbiBleHBlcmllbmNlZCwga25vd2xlZGdlYWJsZSwgYW5kIGFnZ3Jlc3NpdmUgcHJvamVjdCBmYWNpbGl0YXRvci5cIik7XG4gICAgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTUgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgLy8gYmlvXG5cbiAgICBjb25zdCBiaW9IZWFkZXIgPSBhZGRTY3JvbGxUZXh0KFwiSE9XIFdFPGJyPkdPVCBIRVJFXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLmJpby5qdW1wRWxlbWVudCA9IGJpb0hlYWRlcjtcbiAgICBjb25zdCBiaW9UZXh0ID0gYWRkU2Nyb2xsVGV4dChcIknigJl2ZSBhbHdheXMgZm9jdXNlZCBvbiB0aGUgY29uY2VwdHVhbGl6YXRpb24gYW5kIGltcGxlbWVudGF0aW9uIG9mIGFkdmFuY2VkIHRlY2hub2xvZ3kgc29sdXRpb25zIGZvciBmYWNpbGl0eSBhbmQgZXZlbnQgc3lzdGVtcyBpbnRlZ3JhdGlvbi4gQWxvbmcgdGhlIHdheSwgdGhhdOKAmXMgbWVhbnQgc2VydmluZyBhcyBkZXNpZ24gZW5naW5lZXIsIHByb2plY3QgbWFuYWdlciwgc2FsZXMgZW5naW5lZXIsIHBsYW5uaW5nIGNvbnN1bHRhbnQsIGJ1c2luZXNzIGJ1aWxkZXIvb3duZXIsIGFuZCB0ZWFtIGxlYWRlci48YnI+PGJyPkl0IGFsbCBzdGFydGVkIGluIHRlY2huaWNhbCB0aGVhdGVyLCB3aGVyZSBJIHdvcmtlZCBhcyBhIG1hc3RlciBlbGVjdHJpY2lhbiwgbGlnaHRpbmcgZGVzaWduZXIsIHNvdW5kIGRlc2lnbmVyLCBhbmQgZnJvbnQtb2YtaG91c2Ugc291bmQgZW5naW5lZXIgaW4gc3VtbWVyIHN0b2NrLCB0b3VyaW5nLCBhbmQgb2ZmLUJyb2Fkd2F5IHRoZWF0ZXIuIEZvbGxvd2luZyBzZXZlcmFsIHllYXJzIG9mIGZyZWVsYW5jZSB0aGVhdHJpY2FsIGFuZCBjb25jZXJ0IHRlY2huaWNhbCBzdXBwb3J0LCBJIGxhbmRlZCBhdCBBRiBBc3NvY2lhdGVzLCBhIGJyb2FkY2FzdCBzeXN0ZW1zIGludGVncmF0b3IuPGJyPjxicj5BZnRlciB3b3JraW5nIG9uIHN5c3RlbXMgZW5naW5lZXJpbmcgZWZmb3J0cyBmb3IgTkJD4oCZcyBUb2RheSBTaG93LCBDTkJDLCBhbmQgVVNBIE5ldHdvcmssIEkgbW92ZWQgdG8gU29ueSBTeXN0ZW1zIEludGVncmF0aW9uLiBUaGVyZSwgSSBvdmVyc2F3IGRlc2lnbi9idWlsZHMgZm9yIHRoZSBUcmlidW5lIFN0YXRpb24gR3JvdXAgYW5kIHN1cHBvcnRlZCBDQlMgQnJvYWRjYXN0IE9wZXJhdGlvbnMgJiBFbmdpbmVlcmluZzxicj48YnI+QXQgdGhpcyBwb2ludCwgSSB0ZWFtZWQgdXAgd2l0aCB0d28gcGFydG5lcnMgdG8gbGF1bmNoIFRoZSBTeXN0ZW1zIEdyb3VwLiBUU0cgc3BlY2lhbGl6ZWQgaW4gbGFyZ2Utc2NhbGUsIGZhc3QtdHJhY2sgc3lzdGVtcyBpbnRlZ3JhdGlvbiBwcm9qZWN0cyBmb3IgdGhlIGJyb2FkY2FzdCBpbmR1c3RyeS4gRHVyaW5nIG91ciAyMC15ZWFyIHJ1biwgd2UgZGVzaWduZWQgYW5kIGJ1aWx0IGZhY2lsaXRpZXMgZm9yIFNlcmlvdXMgU2F0ZWxsaXRlIFJhZGlvLCBNVFYgTmV0d29ya3MsIFN5cmFjdXNlIFVuaXZlcnNpdHkgTmV3aG91c2UsIE5GTCBGaWxtcyBBdWRpbywgTkJDVSwgYW5kIENvcnVzIEVudGVydGFpbm1lbnQsIHBsdXMgMjAwKyBzeXN0ZW1zIGludGVncmF0aW9uIHByb2plY3RzIHdvcmxkd2lkZS48YnI+PGJyPldoZW4gVFNHIHdhcyBhY3F1aXJlZCBieSBEaXZlcnNpZmllZCBpbiAyMDE2LCBJIGVzdGFibGlzaGVkIGEgc21hbGwgc3R1ZGlvIHdpdGhpbiB0aGUgbGFyZ2VyIGNvcnBvcmF0aW9uLCB3aGljaCBhbGxvd2VkIG1lIHRvIGZvY3VzIG9uIGNyaXRpY2FsIGVhcmx5LXN0YWdlIHByb2plY3QgY29uY2VwdHVhbGl6YXRpb24sIHBsYW5uaW5nLCBhbmQgYnVkZ2V0aW5nLiBUaHJvdWdob3V0IHRob3NlIHllYXJzLCBJIHdhcyBhYmxlIHRvIHdvcmsgc2hvdWxkZXIgdG8gc2hvdWxkZXIgd2l0aCBzb21lIG9mIHRoZSBiZXN0IGFuZCBicmlnaHRlc3QgYWNyb3NzIGEgd2lkZSByYW5nZSBvZiBkaXNjaXBsaW5lcyBpbiB0aGUgbWVkaWEgYW5kIGVudGVydGFpbm1lbnQgaW5kdXN0cnkuIEFuZCB0aGUgcmVzdCwgYXMgdGhleSBzYXksIGlzIGhpc3RvcnkuPGJyPjxicj5Ub2RheSwgS09SRSBvZmZlcnMgYSByYWRpY2FsbHkgc3RyZWFtbGluZWQgd2F5IHRvIGxldmVyYWdlIGEgY2FyZWVy4oCZcyB3b3J0aCBvZiBleHBlcnRpc2UsIGV4cGVyaWVuY2UsIGFuZCBleHRlbnNpdmUgaW5kdXN0cnkgcmVsYXRpb25zaGlwcyB0byBoZWxwIG1ha2Ugc3VyZSB5b3VyIG5leHQgcHJvamVjdCBydW5zIHNtb290aGx5IGZyb20gcGxhbm5pbmcgdG8gYWNjZXB0YW5jZS48YnI+PGJyPkkgaG9sZCBhIEJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gRWxlY3RyaWNhbCBFbmdpbmVlcmluZyBmcm9tIFBlbm4gU3RhdGUgVW5pdmVyc2l0eSwgYW5kIGFtIGEgbWVtYmVyIG9mIFNNUFRFLCBBRVMsIGFuZCBTVkcuIEnigJltIGFsc28ga2luZCB0byBhbmltYWxzLlwiKTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lNiA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICAvLyByZWNlbnQgcHJvamVjdHNcblxuICAgIGNvbnN0IHJlY2VudFByb2plY3RIZWFkZXIgPSBhZGRTY3JvbGxUZXh0KFwiUkVDRU5UPGJyPlBST0pFQ1RTXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLnJlY2VudFByb2plY3RzLmp1bXBFbGVtZW50ID0gcmVjZW50UHJvamVjdEhlYWRlcjtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RQYWlyKHByb2plY3ROYW1lOiBzdHJpbmcsIHByb2plY3REZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lVGV4dCA9IGFkZFNjcm9sbFRleHQocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25UZXh0ID0gYWRkU2Nyb2xsVGV4dChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJldHVybiB7IHByb2plY3ROYW1lVGV4dCwgcHJvamVjdERlc2NyaXB0aW9uVGV4dCB9O1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RzID0gW2FkZFByb2plY3RQYWlyKFwiTkJBIEVudGVydGFpbm1lbnRcIiwgXCJBcmNoaXRlY3R1cmFsIHBsYW5uaW5nIGFuZCBidWRnZXRpbmcgZm9yIG5ldyBjb250ZW50IG9wZXJhdGlvbnMgY2VudGVyLCByZXBsYXkgb3BlcmF0aW9ucyBjZW50ZXIsIGFuZCBleHBhbnNpb24gb2YgdGhlIE5CQSBOZXR3b3JrLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJUZWxldmlzYS9Vbml2aXNpb24gTmV0d29ya1wiLCBcIlN5c3RlbSBjb25jZXB0dWFsaXphdGlvbiwgYXBwbGljYXRpb25zIGVuZ2luZWVyaW5nLCBwcm9qZWN0IGJ1ZGdldGluZywgYW5kIGFjY291bnQgcmVwcmVzZW50YXRpb24gZm9yIHRoZSBuZXR3b3JrIG9wZXJhdGlvbnMgY2VudGVyLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJXZXN0ZXJuIEtlbnR1Y2t5IFVuaXZlcnNpdHlcIiwgXCJQQlMgYW5kIE5QUiBzdGF0aW9ucywgQ29sbGVnZSBvZiBDb21tdW5pY2F0aW9ucyBwcm9kdWN0aW9uIGFuZCBwb3N0IGZhY2lsaXR5LCBpbmNsdWRpbmcgdGllcyB0byBjYW1wdXMgc3BvcnRzIGFuZCBwcmVzZW50YXRpb24gdmVudWVzLCBkZXZlbG9wbWVudCBvZiBhIGNvbXBsZXRlIHN5c3RlbSBkZXNpZ24gZm9yIHRocmVlIGNvbnRyb2wgcm9vbXMsIHR3byBUViBzdHVkaW9zLCBmb3VyIHJhZGlvIHN0dWRpb3MsIGFuZCBwb3N0LXByb2R1Y3Rpb24gb3BlcmF0aW9ucy5cIiksIGFkZFByb2plY3RQYWlyKFwiV29ybGQgV3Jlc3RsaW5nIEVudGVydGFpbm1lbnRcIiwgXCJOZXcgSFEgZGlnaXRhbCBtZWRpYSBmYWNpbGl0eSBkZXNpZ24gYW5kIGJ1ZGdldGluZyBmb3IgcHJvZHVjdGlvbiwgcG9zdCwgdHJhbnNtaXNzaW9uLCBhbmQgZXZlbnQgY29vcmRpbmF0aW9uLCBwbHVzIGZvcm1hbCBhbmFseXNpcyBmb3IgUGhhc2UgMiB3b3JrZmxvdyBvcHRpbWl6YXRpb24gYW5kIG9yY2hlc3RyYXRpb24gbGF5ZXIuXCIpLCBhZGRQcm9qZWN0UGFpcihcIkRpc25leS9HYWxheHkgQ29uc29saWRhdGlvblwiLCBcIlRoZSBsYXJnZXN0IG5ldHdvcmsgb3BlcmF0aW9ucyBjZW50ZXIgZmFjaWxpdHkgZXZlciBidWlsdCBpbiB0aGUgVVMuIEl0IGluY2x1ZGVzIEFCQyBOZXR3b3JrLCBXQUJDIFRWLCBFU1BOIE5ZLCBNYXJ2ZWwgRW50ZXJ0YWlubWVudCwgYW5kIERpc25leSBTY3JlZW5pbmcgVGhlYXRlci4gU2NvdHQgb3ZlcnNhdyBjb250cmFjdCBhZG1pbmlzdHJhdGlvbiBhY3Jvc3MgdGhlIGVudGlyZSBwcm9qZWN0LlwiKV07XG5cbiAgICAvLyBjb250YWN0XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTcgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgdGVsbE1lID0gYWRkU2Nyb2xsVGV4dChcIlRlbGwgbWUgYWJvdXQgeW91ciBwcm9qZWN0LlwiKTtcbiAgICBuYXZJdGVtRnJvbVN0cmluZy5jb250YWN0Lmp1bXBFbGVtZW50ID0gdGVsbE1lO1xuICAgIGNvbnN0IG9uZUNvbnZlcnNhdGlvbiA9IGFkZFNjcm9sbFRleHQoXCJPbmUgY29udmVyc2F0aW9uIHdvbuKAmXQgY29zdCB5b3UgYW55dGhpbmcuIE5vdCBoYXZpbmcgb25lIG1pZ2h0LlwiKTtcbiAgICBjb25zdCBiaWdLb3JlID0gYWRkU2Nyb2xsSW1hZ2UoXCJiaWcta29yZS5zdmdcIik7XG5cbiAgICBjb25zdCBlbWFpbCA9IGFkZFNjcm9sbFRleHQoXCJFbWFpbFwiKTtcbiAgICBnaXZlSG92ZXIoZW1haWwsIHdoaXRlLCBtZXRhbCk7XG4gICAgZW1haWwub25jbGljayA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCJtYWlsdG86bGFpcm9mdGhlZ3JpZmZpbkBnbWFpbC5jb21cIik7XG5cbiAgICBjb25zdCBsaW5rZWRJbiA9IGFkZFNjcm9sbFRleHQoXCJMaW5rZWRJblwiKTtcbiAgICBnaXZlSG92ZXIobGlua2VkSW4sIHdoaXRlLCBtZXRhbCk7XG4gICAgbGlua2VkSW4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgbGlua2VkSW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2dncmlmZmluXCIsIFwiX2JsYW5rXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcml2YWN5UG9saWN5ID0gYWRkU2Nyb2xsVGV4dChcIlByaXZhY3kgUG9saWN5IMKpIDIwMjYgS09SRSBTTUUgTExDXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmU4ID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIHJlZ2lzdGVyVXBkYXRlTGF5b3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgICAgIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwoKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxXaWR0aCgpO1xuXG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjA1ICogcztcbiAgICAgICAgICAgIGNvbnN0IGJldHdlZW5NYXJnaW4gPSBzIC0gbWFyZ2luICogMjtcbiAgICAgICAgICAgIGNvbnN0IGZyb21Ub3AgPSAwLjAzMSAqIHM7XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHRUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjA3NSAqIHMsIGxpbmVIZWlnaHQ6IDAuMDg0ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgY29uc3Qgc3ViR3JheVRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBtZXRhbCwgZm9udFNpemU6IDAuMDE5ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBjb25zdCBiaWdUZXh0TnVkZ2UgPSAwLjAwNCAqIHM7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uTGluZUdhcCA9IDAuMDQgKiBzO1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyID0gMC4wMiAqIHM7XG4gICAgICAgICAgICBjb25zdCBndXR0ZXJlZENvbHVtbiA9IHMgLyAyICsgZ3V0dGVyO1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyZWRXaWR0aEJldHdlZW4gPSBzIC8gMiAtIDIgKiBndXR0ZXI7XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHRUb1N1YnRleHRHYXAgPSAwLjAyICogcztcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGhlYWRsaW5lVGV4dCwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGhlYWRsaW5lVGV4dCwgMC40ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NYKGhlYWRsaW5lVGV4dCwgbWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcbiAgICAgICAgICAgIHNldFBvc1koaGVhZGxpbmVUZXh0LCBmcm9tVG9wKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHRyYXZlbGluZ1RoZVBhdGgsIHN1YkdyYXlUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKHRyYXZlbGluZ1RoZVBhdGgsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKHRyYXZlbGluZ1RoZVBhdGgsIHBvc0VuZFkoaGVhZGxpbmVUZXh0KSArIGJpZ1RleHRUb1N1YnRleHRHYXApO1xuXG4gICAgICAgICAgICBzZXRJbWFnZVNpemVZKGxvZ28sIHNpemVZKGhlYWRsaW5lVGV4dCkgKiAxLjA0KTtcbiAgICAgICAgICAgIHNldFBvc1gobG9nbywgaW5uZXJXaWR0aCAtIGxvZ28uc2Nyb2xsV2lkdGggLSBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShsb2dvLCBmcm9tVG9wIC0gMC4wMyAqIHMpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTEsIHBvc0VuZFkodHJhdmVsaW5nVGhlUGF0aCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIC8vIGFib3V0XG5cbiAgICAgICAgICAgIGNvbnN0IGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMDAxICogcywgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxICogcywgbGluZUhlaWdodDogMC4wMiAqIHMsIGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChhYm91dERlc2NyaXB0aW9uLCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcblxuICAgICAgICAgICAgc2tpbGxUaWxlQ291bnRYID0gNTtcbiAgICAgICAgICAgIHNraWxsVGlsZUNvdW50WSA9IDI7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IGlubmVyV2lkdGggLSAyICogbWFyZ2luOyAvLyBaWlpaIGFub3RoZXIgc2Nyb2xsIHdpZHRoP1xuICAgICAgICAgICAgY29uc3QgdGlsZUdhcCA9IDAuMDE1ICogcztcbiAgICAgICAgICAgIGNvbnN0IHRpbGVTaXplID0gKHNjcm9sbFdpZHRoIC0gdGlsZUdhcCAqIChza2lsbFRpbGVDb3VudFggLSAxKSkgLyBza2lsbFRpbGVDb3VudFg7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRpbGVQb3NYKHg6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXJnaW4gKyAodGlsZVNpemUgKyB0aWxlR2FwKSAqIHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRpbGVQb3NZKHk6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGlsZVNpemUgKyB0aWxlR2FwKSAqIHkgKyBwb3NFbmRZKGZlZWxDb25maWRlbnQpICsgMC4wNCAqIHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFib3V0TGVmdCA9IHRpbGVQb3NYKDIpO1xuICAgICAgICAgICAgc3R5bGVUZXh0KGFib3V0TmFtZSwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMiAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICBzZXRQb3NZKGFib3V0TmFtZSwgcG9zWShzZWN0aW9uTGluZTEpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICAgICAgc2V0UG9zWChhYm91dE5hbWUsIGFib3V0TGVmdCk7XG5cbiAgICAgICAgICAgIHNldFNpemVYKGFib3V0RGVzY3JpcHRpb24sIHMgLSBhYm91dExlZnQgLSBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShhYm91dERlc2NyaXB0aW9uLCBwb3NFbmRZKGFib3V0TmFtZSkpO1xuICAgICAgICAgICAgc2V0UG9zWChhYm91dERlc2NyaXB0aW9uLCBhYm91dExlZnQpO1xuXG4gICAgICAgICAgICBzZXRJbWFnZVNpemVZKHBvcnRyYWl0LCBzaXplWShhYm91dE5hbWUpICsgc2l6ZVkoYWJvdXREZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgc2V0UG9zWShwb3J0cmFpdCwgcG9zWShhYm91dE5hbWUpKTtcbiAgICAgICAgICAgIHNldFBvc1gocG9ydHJhaXQsIG1hcmdpbik7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMiwgcG9zRW5kWShhYm91dERlc2NyaXB0aW9uKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgLy8gdGlsZXNcblxuICAgICAgICAgICAgY29uc3QgZmVlbENvbmZpZGVudFRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDI4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGZlZWxDb25maWRlbnQsIGZlZWxDb25maWRlbnRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRTaXplWChmZWVsQ29uZmlkZW50LCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koZmVlbENvbmZpZGVudCwgcG9zWShzZWN0aW9uTGluZTIpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICAgICAgc2V0UG9zWChmZWVsQ29uZmlkZW50LCBtYXJnaW4pO1xuXG4gICAgICAgICAgICBsYXlvdXRUaWxlcyh0aWxlU2l6ZSwgdGlsZUdhcCwgdGlsZVBvc1gsIHRpbGVQb3NZKTtcbiAgICAgICAgICAgIHNraWxsVGlsZXNbMl0uY29udGFpbmVyLmNsaWNrKCk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMywgdGlsZVBvc1koMSkgKyB0aWxlU2l6ZSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpZ05hbWVzLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWShiaWdOYW1lcywgcG9zWShzZWN0aW9uTGluZTMpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICAgICAgc2V0UG9zWChiaWdOYW1lcywgbWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcblxuICAgICAgICAgICAgY29uc3QgaGFzVGFja2VkVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wMTQgKiBzLCBsaW5lSGVpZ2h0OiAwLjAyNSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChoYXNUYWNrbGVkLCBoYXNUYWNrZWRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRTaXplWChoYXNUYWNrbGVkLCBzaXplWChiaWdOYW1lcykpO1xuICAgICAgICAgICAgc2V0UG9zWShoYXNUYWNrbGVkLCBwb3NFbmRZKGJpZ05hbWVzKSArIGJpZ1RleHRUb1N1YnRleHRHYXApO1xuICAgICAgICAgICAgc2V0UG9zWChoYXNUYWNrbGVkLCBtYXJnaW4pO1xuXG4gICAgICAgICAgICBjb25zdCBsYXN0QmlnTmFtZSA9IGJpZ05hbWVDbGllbnRUZXh0c1tiaWdOYW1lQ2xpZW50VGV4dHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBiaWdOYW1lc1RleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDE4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYWxmQ2xpZW50TGVuZ3RoID0gTWF0aC5jZWlsKGJpZ05hbWVDbGllbnRUZXh0cy5sZW5ndGggLyAyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmlnTmFtZUNsaWVudFRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoaSAvIGhhbGZDbGllbnRMZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBpICUgaGFsZkNsaWVudExlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBvID0gYmlnTmFtZUNsaWVudFRleHRzW2ldO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KG8sIGJpZ05hbWVzVGV4dERldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgc2V0UG9zWShvLCBwb3NZKGJpZ05hbWVzKSArIDAuMDEgKiBzICsgMC4wMzIgKiB5ICogcyk7XG4gICAgICAgICAgICAgICAgc2V0UG9zWChvLCBndXR0ZXJlZENvbHVtbiArIDAuMjIgKiB4ICogcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNCwgcG9zRW5kWShsYXN0QmlnTmFtZSkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGVQb3J0cmFpdCwgMCk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGVMYW5kc2NhcGUsIHMpO1xuICAgICAgICAgICAgc2V0UG9zWChncmlmZmluQmxhY2tXaGl0ZUxhbmRzY2FwZSwgMCk7XG4gICAgICAgICAgICBzZXRQb3NZKGdyaWZmaW5CbGFja1doaXRlTGFuZHNjYXBlLCBwb3NFbmRZKHNlY3Rpb25MaW5lNCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wMiAqIHMsIGxpbmVIZWlnaHQ6IDAuMDQgKiBzLCBmb250RmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBncmlmZmluQmxhY2tXaGl0ZVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGdyaWZmaW5CbGFja1doaXRlVGV4dCwgZ3V0dGVyZWRXaWR0aEJldHdlZW4pO1xuICAgICAgICAgICAgc2V0UG9zWChncmlmZmluQmxhY2tXaGl0ZVRleHQsIGd1dHRlcmVkQ29sdW1uKTtcbiAgICAgICAgICAgIHNldFBvc1koZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBwb3NZKGdyaWZmaW5CbGFja1doaXRlTGFuZHNjYXBlKSArIHNpemVZKGdyaWZmaW5CbGFja1doaXRlTGFuZHNjYXBlKSAvIDIgLSBzaXplWShncmlmZmluQmxhY2tXaGl0ZVRleHQpIC8gMik7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNSwgcG9zRW5kWShncmlmZmluQmxhY2tXaGl0ZUxhbmRzY2FwZSkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIC8vIGJpb1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoYmlvSGVhZGVyLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWShiaW9IZWFkZXIsIHBvc0VuZFkoc2VjdGlvbkxpbmU1KSArIHNlY3Rpb25MaW5lR2FwKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlvSGVhZGVyLCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoYmlvVGV4dCwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRTaXplWChiaW9UZXh0LCBndXR0ZXJlZFdpZHRoQmV0d2Vlbik7XG4gICAgICAgICAgICBzZXRQb3NZKGJpb1RleHQsIHBvc1koYmlvSGVhZGVyKSk7XG4gICAgICAgICAgICBzZXRQb3NYKGJpb1RleHQsIGd1dHRlcmVkQ29sdW1uKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU2LCBwb3NFbmRZKGJpb1RleHQpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQocmVjZW50UHJvamVjdEhlYWRlciwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1kocmVjZW50UHJvamVjdEhlYWRlciwgcG9zRW5kWShzZWN0aW9uTGluZTYpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICAgICAgc2V0UG9zWChyZWNlbnRQcm9qZWN0SGVhZGVyLCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHsgcHJvamVjdE5hbWVUZXh0LCBwcm9qZWN0RGVzY3JpcHRpb25UZXh0IH0gb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRleHQocHJvamVjdE5hbWVUZXh0LCB7IGxldHRlclNwYWNpbmc6IDAuMDAxICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAyICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgICAgICBzdHlsZVRleHQocHJvamVjdERlc2NyaXB0aW9uVGV4dCwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICAgICAgc2V0U2l6ZVgocHJvamVjdERlc2NyaXB0aW9uVGV4dCwgZ3V0dGVyZWRXaWR0aEJldHdlZW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c1dpdGhTcGFjaW5nID0gcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gW3Byb2plY3QucHJvamVjdE5hbWVUZXh0LCAwLjAwNiAqIHMsIHByb2plY3QucHJvamVjdERlc2NyaXB0aW9uVGV4dCwgMC4wMjggKiBzXSk7XG4gICAgICAgICAgICBjb25zdCBbYWxpZ25tZW50cywgX10gPSBhbGlnbmluZ1dpdGhHYXBzWShwcm9qZWN0c1dpdGhTcGFjaW5nKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgeyBlbGVtZW50LCBvZmZzZXQgfSBvZiBhbGlnbm1lbnRzKSB7XG4gICAgICAgICAgICAgICAgc2V0UG9zWShlbGVtZW50LCBwb3NZKHJlY2VudFByb2plY3RIZWFkZXIpICsgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBzZXRQb3NYKGVsZW1lbnQsIGd1dHRlcmVkQ29sdW1uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxhc3RQcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5wcm9qZWN0RGVzY3JpcHRpb25UZXh0O1xuXG4gICAgICAgICAgICAvLyBjb250YWN0XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNywgcG9zRW5kWShsYXN0UHJvamVjdERlc2NyaXB0aW9uKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHRlbGxNZSwgeyBsZXR0ZXJTcGFjaW5nOiAwLjMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMTkgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgc2V0UG9zWCh0ZWxsTWUsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKHRlbGxNZSwgcG9zRW5kWShzZWN0aW9uTGluZTcpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQob25lQ29udmVyc2F0aW9uLCBzdWJHcmF5VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChvbmVDb252ZXJzYXRpb24sIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKG9uZUNvbnZlcnNhdGlvbiwgcG9zRW5kWSh0ZWxsTWUpICsgMC4wMDggKiBzKTtcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWChiaWdLb3JlLCBzIC0gbWFyZ2luICogMik7XG4gICAgICAgICAgICBzZXRQb3NYKGJpZ0tvcmUsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGJpZ0tvcmUsIHBvc0VuZFkob25lQ29udmVyc2F0aW9uKSArIDAuMSAqIHMpO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5rVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogbWV0YWwsIGZvbnRTaXplOiAwLjAxOSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChlbWFpbCwgbGlua1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1goZW1haWwsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGVtYWlsLCBwb3NFbmRZKGJpZ0tvcmUpICsgMC4wNSAqIHMpO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQobGlua2VkSW4sIGxpbmtUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKGxpbmtlZEluLCBtYXJnaW4gKyAwLjA3ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NZKGxpbmtlZEluLCBwb3NFbmRZKGJpZ0tvcmUpICsgMC4wNSAqIHMpO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQocHJpdmFjeVBvbGljeSwgbGlua1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1gocHJpdmFjeVBvbGljeSwgcyAtIHNpemVYKHByaXZhY3lQb2xpY3kpIC0gbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kocHJpdmFjeVBvbGljeSwgcG9zRW5kWShiaWdLb3JlKSArIDAuMDUgKiBzKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU4LCBwb3NFbmRZKGVtYWlsKSArIHNlY3Rpb25MaW5lR2FwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwoKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxXaWR0aCgpO1xuXG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjA5ICogcztcbiAgICAgICAgICAgIGNvbnN0IGJldHdlZW5NYXJnaW4gPSBzIC0gbWFyZ2luICogMjtcblxuICAgICAgICAgICAgY29uc3QgYmlnVGV4dFRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMTUgKiBzLCBsaW5lSGVpZ2h0OiAwLjE4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgY29uc3Qgc3ViR3JheVRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBtZXRhbCwgZm9udFNpemU6IDAuMDkgKiBzLCBsaW5lSGVpZ2h0OiAwLjEzICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBjb25zdCBiaWdUZXh0TnVkZ2UgPSAwLjAxMiAqIHM7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uTGluZUdhcCA9IDAuMDg1ICogcztcblxuICAgICAgICAgICAgY29uc3QgYmlnVGV4dFRvU3VidGV4dEdhcCA9IDAuMDMgKiBzO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoaGVhZGxpbmVUZXh0LCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChoZWFkbGluZVRleHQsIG1hcmdpbiAtIGJpZ1RleHROdWRnZSk7XG4gICAgICAgICAgICBzZXRQb3NZKGhlYWRsaW5lVGV4dCwgMCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dCh0cmF2ZWxpbmdUaGVQYXRoLCBzdWJHcmF5VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgodHJhdmVsaW5nVGhlUGF0aCwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKHRyYXZlbGluZ1RoZVBhdGgsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKHRyYXZlbGluZ1RoZVBhdGgsIHBvc0VuZFkoaGVhZGxpbmVUZXh0KSArIGJpZ1RleHRUb1N1YnRleHRHYXApO1xuXG4gICAgICAgICAgICBzZXRJbWFnZVNpemVYKGxvZ28sIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWChsb2dvLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShsb2dvLCBwb3NFbmRZKHRyYXZlbGluZ1RoZVBhdGgpICsgcyAqIDAuMTcpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTEsIHBvc0VuZFkobG9nbykgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIC8vIGFib3V0XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgocG9ydHJhaXQsIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWChwb3J0cmFpdCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kocG9ydHJhaXQsIHBvc0VuZFkoc2VjdGlvbkxpbmUxKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGFib3V0TmFtZSwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wOSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICBzZXRQb3NYKGFib3V0TmFtZSwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koYWJvdXROYW1lLCBwb3NFbmRZKHBvcnRyYWl0KSArIDAuMiAqIHMpO1xuXG4gICAgICAgICAgICBjb25zdCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wNDUgKiBzLCBsaW5lSGVpZ2h0OiAwLjEgKiBzLCBmb250RmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoYWJvdXREZXNjcmlwdGlvbiwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRTaXplWChhYm91dERlc2NyaXB0aW9uLCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1goYWJvdXREZXNjcmlwdGlvbiwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koYWJvdXREZXNjcmlwdGlvbiwgcG9zRW5kWShhYm91dE5hbWUpICsgMC4wMDYgKiBzKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUyLCBwb3NFbmRZKGFib3V0RGVzY3JpcHRpb24pICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICAvLyB0aWxlc1xuXG4gICAgICAgICAgICBjb25zdCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wNiAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChmZWVsQ29uZmlkZW50LCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoZmVlbENvbmZpZGVudCwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKGZlZWxDb25maWRlbnQsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGZlZWxDb25maWRlbnQsIHBvc1koc2VjdGlvbkxpbmUyKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc2tpbGxUaWxlQ291bnRYID0gMjtcbiAgICAgICAgICAgIHNraWxsVGlsZUNvdW50WSA9IDU7XG4gICAgICAgICAgICBjb25zdCB0aWxlR2FwID0gMC4wMyAqIHM7XG4gICAgICAgICAgICBjb25zdCB0aWxlU2l6ZSA9IChiZXR3ZWVuTWFyZ2luIC0gdGlsZUdhcCAqIChza2lsbFRpbGVDb3VudFggLSAxKSkgLyBza2lsbFRpbGVDb3VudFg7XG4gICAgICAgICAgICBmdW5jdGlvbiB0aWxlUG9zWCh4OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFyZ2luICsgKHRpbGVTaXplICsgdGlsZUdhcCkgKiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1koeTogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aWxlU2l6ZSArIHRpbGVHYXApICogeSArIHBvc0VuZFkoZmVlbENvbmZpZGVudCkgKyAwLjA0ICogcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxheW91dFRpbGVzKHRpbGVTaXplLCB0aWxlR2FwLCB0aWxlUG9zWCwgdGlsZVBvc1kpO1xuICAgICAgICAgICAgc2tpbGxUaWxlc1syXS5jb250YWluZXIuY2xpY2soKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUzLCB0aWxlUG9zWSg0KSArIHRpbGVTaXplICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoYmlnTmFtZXMsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKGJpZ05hbWVzLCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuICAgICAgICAgICAgc2V0UG9zWShiaWdOYW1lcywgcG9zWShzZWN0aW9uTGluZTMpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBjb25zdCBoYXNUYWNrZWRUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogNDAwLCBjb2xvcjogbWV0YWwsIGZvbnRTaXplOiAwLjA2NSAqIHMsIGxpbmVIZWlnaHQ6IDAuMTEgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoaGFzVGFja2xlZCwgaGFzVGFja2VkVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoaGFzVGFja2xlZCwgc2l6ZVgoYmlnTmFtZXMpIC0gMC4wMjUgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1goaGFzVGFja2xlZCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koaGFzVGFja2xlZCwgcG9zRW5kWShiaWdOYW1lcykgKyAwLjA2ICogcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhc3RCaWdOYW1lID0gYmlnTmFtZUNsaWVudFRleHRzW2JpZ05hbWVDbGllbnRUZXh0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IGJpZ05hbWVzVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wNjUgKiBzLCBsaW5lSGVpZ2h0OiAwLjExICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaWdOYW1lQ2xpZW50VGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvID0gYmlnTmFtZUNsaWVudFRleHRzW2ldO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KG8sIGJpZ05hbWVzVGV4dERldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgc2V0UG9zWChvLCBtYXJnaW4pO1xuICAgICAgICAgICAgICAgIHNldFBvc1kobywgcG9zRW5kWShoYXNUYWNrbGVkKSArIDAuMjUgKiBzICsgMC4xNCAqIGkgKiBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU0LCBwb3NFbmRZKGxhc3RCaWdOYW1lKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWChncmlmZmluQmxhY2tXaGl0ZUxhbmRzY2FwZSwgMCk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGVQb3J0cmFpdCwgcyk7XG4gICAgICAgICAgICBzZXRQb3NYKGdyaWZmaW5CbGFja1doaXRlUG9ydHJhaXQsIDApO1xuICAgICAgICAgICAgc2V0UG9zWShncmlmZmluQmxhY2tXaGl0ZVBvcnRyYWl0LCBwb3NZKHNlY3Rpb25MaW5lNCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wNzMgKiBzLCBsaW5lSGVpZ2h0OiAwLjE0ICogcywgZm9udEZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGdyaWZmaW5CbGFja1doaXRlVGV4dCwgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRTaXplWChncmlmZmluQmxhY2tXaGl0ZVRleHQsIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWChncmlmZmluQmxhY2tXaGl0ZVRleHQsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGdyaWZmaW5CbGFja1doaXRlVGV4dCwgcG9zWShncmlmZmluQmxhY2tXaGl0ZVBvcnRyYWl0KSArIDAuMiAqIHMpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTUsIHBvc0VuZFkoZ3JpZmZpbkJsYWNrV2hpdGVQb3J0cmFpdCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIC8vIGJpb1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoYmlvSGVhZGVyLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChiaW9IZWFkZXIsIG1hcmdpbiAtIGJpZ1RleHROdWRnZSk7XG4gICAgICAgICAgICBzZXRQb3NZKGJpb0hlYWRlciwgcG9zRW5kWShzZWN0aW9uTGluZTUpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoYmlvVGV4dCwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRTaXplWChiaW9UZXh0LCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlvVGV4dCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlvVGV4dCwgcG9zRW5kWShiaW9IZWFkZXIpICsgYmlnVGV4dFRvU3VidGV4dEdhcCk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNiwgcG9zRW5kWShiaW9UZXh0KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHJlY2VudFByb2plY3RIZWFkZXIsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKHJlY2VudFByb2plY3RIZWFkZXIsIG1hcmdpbiAtIGJpZ1RleHROdWRnZSk7XG4gICAgICAgICAgICBzZXRQb3NZKHJlY2VudFByb2plY3RIZWFkZXIsIHBvc1koc2VjdGlvbkxpbmU2KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCB7IHByb2plY3ROYW1lVGV4dCwgcHJvamVjdERlc2NyaXB0aW9uVGV4dCB9IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KHByb2plY3ROYW1lVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wOCAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KHByb2plY3REZXNjcmlwdGlvblRleHQsIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgICAgIHNldFNpemVYKHByb2plY3REZXNjcmlwdGlvblRleHQsIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c1dpdGhTcGFjaW5nID0gcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gW3Byb2plY3QucHJvamVjdE5hbWVUZXh0LCAwLjAyICogcywgcHJvamVjdC5wcm9qZWN0RGVzY3JpcHRpb25UZXh0LCAwLjEgKiBzXSk7XG4gICAgICAgICAgICBjb25zdCBbYWxpZ25tZW50cywgX10gPSBhbGlnbmluZ1dpdGhHYXBzWShwcm9qZWN0c1dpdGhTcGFjaW5nKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgeyBlbGVtZW50LCBvZmZzZXQgfSBvZiBhbGlnbm1lbnRzKSB7XG4gICAgICAgICAgICAgICAgc2V0UG9zWChlbGVtZW50LCBtYXJnaW4pO1xuICAgICAgICAgICAgICAgIHNldFBvc1koZWxlbWVudCwgcG9zRW5kWShyZWNlbnRQcm9qZWN0SGVhZGVyKSArIDAuMTMgKiBzICsgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxhc3RQcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5wcm9qZWN0RGVzY3JpcHRpb25UZXh0O1xuXG4gICAgICAgICAgICAvLyBjb250YWN0XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNywgcG9zRW5kWShsYXN0UHJvamVjdERlc2NyaXB0aW9uKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHRlbGxNZSwgeyBsZXR0ZXJTcGFjaW5nOiAwLjMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wOSAqIHMsIGxpbmVIZWlnaHQ6IDAuMTMgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgc2V0U2l6ZVgodGVsbE1lLCAwLjcgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1godGVsbE1lLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWSh0ZWxsTWUsIHBvc1koc2VjdGlvbkxpbmU3KSArIDAuNCAqIHMpO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQob25lQ29udmVyc2F0aW9uLCBzdWJHcmF5VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChvbmVDb252ZXJzYXRpb24sIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKG9uZUNvbnZlcnNhdGlvbiwgcG9zRW5kWSh0ZWxsTWUpICsgMC4wMTYgKiBzKTtcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWChiaWdLb3JlLCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlnS29yZSwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlnS29yZSwgcG9zRW5kWShvbmVDb252ZXJzYXRpb24pICsgMC41ICogcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmtUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBtZXRhbCwgZm9udFNpemU6IDAuMDggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoZW1haWwsIGxpbmtUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKGVtYWlsLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShlbWFpbCwgcG9zRW5kWShiaWdLb3JlKSArIDAuMSAqIHMpO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQobGlua2VkSW4sIGxpbmtUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKGxpbmtlZEluLCBwb3NFbmRYKGVtYWlsKSArIDAuMDggKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1kobGlua2VkSW4sIHBvc0VuZFkoYmlnS29yZSkgKyAwLjEgKiBzKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHByaXZhY3lQb2xpY3ksIGxpbmtUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKHByaXZhY3lQb2xpY3ksIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKHByaXZhY3lQb2xpY3ksIHBvc0VuZFkoZW1haWwpICsgMC4wOCAqIHMpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTgsIHBvc0VuZFkocHJpdmFjeVBvbGljeSkgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGJvZHksIGZhZGVJbkFuaW1hdGlvbiwgbWV0YWwsIG1pZEJyb3duIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc0xhbmRzY2FwZSwgcHgsIHN0eWxlVGV4dCwgVGV4dERldGFpbHMgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkRm9yUGFnZSwgYXdhaXRMYXlvdXRGb3JJbWFnZUxvYWRpbmcgfSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50U1ZHLCBmZXRjaFNWRywgbWFwUmFuZ2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFNxdWFyZSB7XG4gICAgbWFqb3I6IEhUTUxFbGVtZW50O1xuICAgIG1pbm9yczogSFRNTEVsZW1lbnRbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zY3JvbGxDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbENvbnRhaW5lcik7XG4oc2Nyb2xsQ29udGFpbmVyLnN0eWxlIGFzIGFueSkuc2Nyb2xsYmFyQ29sb3IgPSBgJHttaWRCcm93bn0gJHttZXRhbH01NWA7XG5cbnNjcm9sbENvbnRhaW5lci5vbndoZWVsID0gKGUpID0+IHtcbiAgICBpZiAoaXNMYW5kc2NhcGUoKSAmJiAhZS5zaGlmdEtleSkgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEJ5KHsgbGVmdDogZS5kZWx0YVkgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCgpIHtcbiAgICBjb25zdCBoZWFkZXJCYXJIZWlnaHQgPSBnZXRIZWFkZXJCYXJIZWlnaHQoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUud2lkdGggPSBweChpbm5lcldpZHRoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcHgoaW5uZXJIZWlnaHQgLSBoZWFkZXJCYXJIZWlnaHQpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcHgoMCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnRvcCA9IHB4KGhlYWRlckJhckhlaWdodCk7XG5cbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIjtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9IDA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkZXJCYXJIZWlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKGlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgcmV0dXJuIGlubmVyV2lkdGggKiAwLjA4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbm5lcldpZHRoICogMC4yO1xuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxQYWRkaW5nKCkge1xuICAgIGNvbnN0IHNjcm9sbFBhZGRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcm9sbFBhZGRpbmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsUGFkZGluZy5zdHlsZS53aWR0aCA9IHB4KDEpOyAvLyBhbnkgbm9uemVybyB0aGlja25lc3MgaXMgZW5vdWdoIHRvIGV4dGVuZCBzY3JvbGxDb250YWluZXJcbiAgICBzY3JvbGxQYWRkaW5nLnN0eWxlLmhlaWdodCA9IHB4KDEpO1xuICAgIGFwcGVuZENoaWxkRm9yUGFnZShzY3JvbGxDb250YWluZXIsIHNjcm9sbFBhZGRpbmcpO1xuICAgIHJldHVybiBzY3JvbGxQYWRkaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsSW1hZ2Uoc3JjOiBzdHJpbmcpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgICBjb25zdCBzY3JvbGxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2Nyb2xsSW1hZ2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsSW1hZ2Uuc3JjID0gc3JjO1xuICAgIHNjcm9sbEltYWdlLnN0eWxlLmFuaW1hdGlvbiA9IGZhZGVJbkFuaW1hdGlvbigpO1xuICAgIHNjcm9sbEltYWdlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgYXdhaXRMYXlvdXRGb3JJbWFnZUxvYWRpbmcoc2Nyb2xsSW1hZ2UpO1xuICAgIGFwcGVuZENoaWxkRm9yUGFnZShzY3JvbGxDb250YWluZXIsIHNjcm9sbEltYWdlKTtcbiAgICByZXR1cm4gc2Nyb2xsSW1hZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxTdmcoc3JjOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JvbGxTdmcgPSBjcmVhdGVFbGVtZW50U1ZHKFwic3ZnXCIpO1xuICAgIHNjcm9sbFN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxTdmcuc3R5bGUuYW5pbWF0aW9uID0gZmFkZUluQW5pbWF0aW9uKCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICAgICAgICBjb25zdCBmZXRjaGVkID0gYXdhaXQgZmV0Y2hTVkcoc3JjKTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIGZldGNoZWQuYXR0cmlidXRlcykgc2Nyb2xsU3ZnLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICAgICAgICB3aGlsZSAoZmV0Y2hlZC5maXJzdENoaWxkKSBzY3JvbGxTdmcuYXBwZW5kQ2hpbGQoZmV0Y2hlZC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZmV0Y2hDb250ZW50KCk7XG5cbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxTdmcpO1xuICAgIHJldHVybiBzY3JvbGxTdmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZXh0KHRleHQ6IHN0cmluZywgcGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHNjcm9sbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbFRleHQuaW5uZXJIVE1MID0gdGV4dDsgLy8gWlpaWiBpbm5lclRleHQgd291bGQgYmUgYmV0dGVyXG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5hbmltYXRpb24gPSBmYWRlSW5BbmltYXRpb24oKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2UocGFyZW50LCBzY3JvbGxUZXh0KTtcbiAgICByZXR1cm4gc2Nyb2xsVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFkZFRleHQodGV4dCwgc2Nyb2xsQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbFRleHRTcXVhcmUobWFqb3JUZXh0OiBzdHJpbmcsIC4uLm1pbm9yVGV4dHM6IHN0cmluZ1tdKTogVGV4dFNxdWFyZSB7XG4gICAgY29uc3QgbWFqb3IgPSBhZGRTY3JvbGxUZXh0KG1ham9yVGV4dCk7XG4gICAgY29uc3QgbWlub3JzID0gbWlub3JUZXh0cy5tYXAoYWRkU2Nyb2xsVGV4dCk7XG4gICAgcmV0dXJuIHsgbWFqb3IsIG1pbm9ycyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVTY3JvbGxUZXh0U3F1YXJlKHsgbWFqb3IsIG1pbm9ycyB9OiBUZXh0U3F1YXJlLCBtYWpvclRleHREZXRhaWxzOiBUZXh0RGV0YWlscywgbWlub3JUZXh0RGV0YWlsczogVGV4dERldGFpbHMpIHtcbiAgICBzdHlsZVRleHQobWFqb3IsIG1ham9yVGV4dERldGFpbHMpO1xuICAgIGZvciAoY29uc3QgbWlub3Igb2YgbWlub3JzKSBzdHlsZVRleHQobWlub3IsIG1pbm9yVGV4dERldGFpbHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgcmV0dXJuIGlubmVyV2lkdGg7XG4gICAgLy8gY29uc3QgU0NST0xMX1dJRFRIX1BST1BPUlRJT04gPSAxO1xuICAgIC8vIHJldHVybiBpbm5lcldpZHRoICogU0NST0xMX1dJRFRIX1BST1BPUlRJT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJXaXRoaW5TY3JvbGxYKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudCwgc2NhbGU6IG51bWJlcikge1xuICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxXaWR0aCgpO1xuICAgIGNvbnN0IHdpZHRoID0gcyAqIHNjYWxlO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBweCh3aWR0aCk7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcHgoKHMgLSB3aWR0aCkgLyAyKTtcbn1cbiIsImV4cG9ydCBjbGFzcyBTaWduYWwge1xyXG4gICAgc3Vic2NyaWJlcnMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XHJcblxyXG4gICAgc3Vic2NyaWJlID0gKHN1YnNjcmliZXI6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgocykgPT4gcygpKTtcclxuICAgIH07XHJcblxyXG4gICAgdW5zdWJzY3JpYmUgPSAoc3Vic2NyaWJlcjogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1bnN1YnNjcmliZUFsbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmNsZWFyKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0KGZ1bmM6ICgpID0+IHZvaWQsIG9ic2VydmVkU2lnbmFsczogU2lnbmFsW10pIHtcclxuICAgIG9ic2VydmVkU2lnbmFscy5mb3JFYWNoKChvKSA9PiBvLnN1YnNjcmliZShmdW5jKSk7XHJcbiAgICBmdW5jKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZWZmZWN0LCBTaWduYWwgfSBmcm9tIFwiLi9zaWduYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpbmcge1xyXG4gICAgcG9zaXRpb246IG51bWJlcjtcclxuICAgIHRhcmdldDogbnVtYmVyO1xyXG4gICAgdmVsb2NpdHkgPSAwO1xyXG4gICAgZGFtcGluZyA9IDA7XHJcbiAgICBzdGlmZm5lc3MgPSAwO1xyXG4gICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBvblJlc3QgPSAoKSA9PiB7fTtcclxuICAgIG9uVW5yZXN0ID0gKCkgPT4ge307XHJcblxyXG4gICAgLy8gbXgnJyAtIGJ4JyA9IGt4XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gaW5pdGlhbFZhbHVlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gaW5pdGlhbFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRpY2soZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGFjY2VsZXJhdGlvbiA9IHRoaXMuc3RpZmZuZXNzICogKHRoaXMudGFyZ2V0IC0gdGhpcy5wb3NpdGlvbikgLSB0aGlzLmRhbXBpbmcgKiB0aGlzLnZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgKz0gYWNjZWxlcmF0aW9uICogZHQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiArPSB0aGlzLnZlbG9jaXR5ICogZHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RpZmZuZXNzQ3JpdGljYWwoc3RpZmZuZXNzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0aWZmbmVzcyA9IHN0aWZmbmVzcztcclxuICAgICAgICB0aGlzLmRhbXBpbmcgPSBNYXRoLnNxcnQoNCAqIHN0aWZmbmVzcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfQU5JTUFUSU9OX1RPTEVSQU5DRSA9IDAuMDE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZVNwcmluZyhzcHJpbmc6IFNwcmluZywgc2lnbmFsOiBTaWduYWwpIHtcclxuICAgIGlmIChzcHJpbmcuaXNBbmltYXRpbmcpIHJldHVybjtcclxuXHJcbiAgICBzcHJpbmcuaXNBbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgc3ByaW5nLm9uVW5yZXN0KCk7XHJcblxyXG4gICAgbGV0IGxhc3RNaWxsaXMgPSAwO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpcnN0RnJhbWUpO1xyXG4gICAgZnVuY3Rpb24gZmlyc3RGcmFtZShtaWxsaXM6IG51bWJlcikge1xyXG4gICAgICAgIGxhc3RNaWxsaXMgPSBtaWxsaXM7XHJcbiAgICAgICAgdGlja1NwcmluZyhtaWxsaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpY2tTcHJpbmcobWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzdGVwID0gbWlsbGlzIC0gbGFzdE1pbGxpcztcclxuICAgICAgICBsYXN0TWlsbGlzID0gbWlsbGlzO1xyXG5cclxuICAgICAgICBzcHJpbmcudGljayhzdGVwIC8gMTAwMCk7XHJcbiAgICAgICAgc2lnbmFsLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnMoc3ByaW5nLnRhcmdldCAtIHNwcmluZy5wb3NpdGlvbikgPCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UgJiYgTWF0aC5hYnMoc3ByaW5nLnZlbG9jaXR5KSA8IERFRkFVTFRfQU5JTUFUSU9OX1RPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICBzcHJpbmcucG9zaXRpb24gPSBzcHJpbmcudGFyZ2V0O1xyXG4gICAgICAgICAgICBzcHJpbmcudmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBzcHJpbmcuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2lnbmFsLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBzcHJpbmcub25SZXN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrU3ByaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVXaXRoU3ByaW5nKHN0aWZmbmVzczogbnVtYmVyLCBvdmVyVGltZTogKHRpbWU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ByaW5nID0gbmV3IFNwcmluZygwKTtcclxuICAgICAgICBjb25zdCBzcHJpbmdTaWcgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICAgICAgc3ByaW5nLnNldFN0aWZmbmVzc0NyaXRpY2FsKHN0aWZmbmVzcyk7XHJcbiAgICAgICAgc3ByaW5nLnRhcmdldCA9IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiBvdmVyVGltZShzcHJpbmcucG9zaXRpb24pO1xyXG4gICAgICAgIHNwcmluZy5vblJlc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNwcmluZ1NpZy51bnN1YnNjcmliZShhbmltYXRlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGVmZmVjdChhbmltYXRlLCBbc3ByaW5nU2lnXSk7XHJcblxyXG4gICAgICAgIGFuaW1hdGVTcHJpbmcoc3ByaW5nLCBzcHJpbmdTaWcpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNsZWVwID0gKGRlbGF5OiBudW1iZXIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFjZVRvRmlsZShzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKFwiIFwiLCBcIi1cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50U1ZHPEsgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4ocXVhbGlmaWVkTmFtZTogSykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBxdWFsaWZpZWROYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVybGFjZWQ8VCwgV2l0aGluPihpdGVtczogVFtdLCB3aXRoaW46IFdpdGhpbikge1xuICAgIGNvbnN0IGl0ZW1zSW50ZXJsYWNlZCA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpdGVtc0ludGVybGFjZWQucHVzaChpdGVtKTtcbiAgICAgICAgaXRlbXNJbnRlcmxhY2VkLnB1c2god2l0aGluKTtcbiAgICB9XG4gICAgaXRlbXNJbnRlcmxhY2VkLnBvcCgpO1xuICAgIHJldHVybiBpdGVtc0ludGVybGFjZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBSYW5nZShuOiBudW1iZXIsIHN0YXJ0MTogbnVtYmVyLCBzdG9wMTogbnVtYmVyLCBzdGFydDI6IG51bWJlciwgc3RvcDI6IG51bWJlcikge1xuICAgIHJldHVybiAoKG4gLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSkgKiAoc3RvcDIgLSBzdGFydDIpICsgc3RhcnQyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JPbkhvdmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb2xvcjogc3RyaW5nLCBob3ZlckNvbG9yOiBzdHJpbmcpIHtcbiAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgZWxlbWVudC5vbm1vdXNlb3ZlciA9ICgpID0+IChlbGVtZW50LnN0eWxlLmNvbG9yID0gaG92ZXJDb2xvcik7XG4gICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiAoZWxlbWVudC5zdHlsZS5jb2xvciA9IGNvbG9yKTtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImNvbG9yIDAuMnMgZWFzZS1vdXRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudDogRWxlbWVudCwgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU1ZHKGZldGNoU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoU3RyaW5nKTtcbiAgICBjb25zdCBzdmdDb250ZW50ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN2Z0NvbnRlbnQsIFwiaW1hZ2Uvc3ZnK3htbFwiKS5kb2N1bWVudEVsZW1lbnQgYXMgdW5rbm93biBhcyBTVkdTVkdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWRTVkcoc3ZnOiBTVkdTVkdFbGVtZW50LCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN2Zy5nZXRFbGVtZW50QnlJZChpZCkgYXMgU1ZHRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUljb25TVkcobG9jYWxTaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudFNWRyhcInN2Z1wiKTtcbiAgICBjb25zdCBwYWQgPSA0O1xuICAgIGljb24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgaWNvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBpY29uLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYCR7LXBhZH0gJHstcGFkfSAke2xvY2FsU2l6ZSArIDIgKiBwYWR9ICR7bG9jYWxTaXplICsgMiAqIHBhZH1gKTtcbiAgICByZXR1cm4gaWNvbjtcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VMaW5lID0gKHN2ZzogU1ZHU1ZHRWxlbWVudCwgc3Ryb2tlV2lkdGg6IG51bWJlcikgPT4gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSBjcmVhdGVFbGVtZW50U1ZHKFwibGluZVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIHsgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGggfSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIHJldHVybiBsaW5lO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VQb2x5bGluZSA9IChzdmc6IFNWR1NWR0VsZW1lbnQsIHN0cm9rZVdpZHRoOiBudW1iZXIpID0+ICgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gY3JlYXRlRWxlbWVudFNWRyhcInBvbHlsaW5lXCIpO1xuICAgIHNldEF0dHJpYnV0ZXMobGluZSwgeyBcInN0cm9rZS13aWR0aFwiOiBzdHJva2VXaWR0aCwgZmlsbDogXCJub25lXCIgfSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIHJldHVybiBsaW5lO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRIb21lUGFnZSwgYWRkTWVudUJ1dHRvbiwgYWRkTmF2QmFyIH0gZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjIwMCAxMHB4IFJvYm90b1wiKSwgLy9cbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjMwMCAyMHB4IFJvYm90b1wiKSwgLy9cbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjQwMCAzMHB4IFJvYm90b1wiKSwgLy9cbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjUwMCA0MHB4IFJvYm90b1wiKSwgLy9cbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjYwMCA1MHB4IFJvYm90b1wiKSxcbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjIwMCAyMHB4IE1lcnJpd2VhdGhlclwiKSxcbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjMwMCAzMHB4IE1lcnJpd2VhdGhlclwiKSxcbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjQwMCA0MHB4IE1lcnJpd2VhdGhlclwiKSxcbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjUwMCA1MHB4IE1lcnJpd2VhdGhlclwiKSxcbiAgICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjYwMCA2MHB4IE1lcnJpd2VhdGhlclwiKSxcbiAgICBdKTtcbiAgICBhd2FpdCBkb2N1bWVudC5mb250cy5yZWFkeVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlcXVlc3RBbmltYXRpb25GcmFtZSk7XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVxdWVzdEFuaW1hdGlvbkZyYW1lKTtcblxuICAgIGFkZE5hdkJhcigpO1xuICAgIGFkZE1lbnVCdXR0b24oKVxuICAgIGFkZEhvbWVQYWdlKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9