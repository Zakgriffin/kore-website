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
    const menuLine = (0,_util__WEBPACK_IMPORTED_MODULE_7__.makeLine)(menuButton, 6);
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
    logo.style.transition = "1s";
    logo.onmouseenter = () => {
        logo.style.filter = "drop-shadow(10px 10px 10px rgba(255, 180, 100, 0.5))";
        logo.style.transform = "translate(-15px, -15px)";
    };
    logo.onmouseleave = () => {
        logo.style.filter = "";
        logo.style.transform = "translate(0px, 0px)";
    };
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
            const bigTextNudge = 0.01 * s;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIsQ0FBQztLQUMvQyxDQUFDLENBQUM7SUFDSCxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSztJQUMxQixNQUFNLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXpDLHNEQUFTLEVBQUUsQ0FBQztJQUNaLDBEQUFhLEVBQUU7SUFDZix3REFBVyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxFQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tvcmUvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvbGF5b3V0LnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9wYWdlLnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvcGFnZXMvaG9tZS50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3Njcm9sbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NpZ25hbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NwcmluZy50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNMYW5kc2NhcGUgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCIuL3NpZ25hbFwiO1xuXG5leHBvcnQgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5leHBvcnQgY29uc3QgYm9keVNpZyA9IG5ldyBTaWduYWwoKTtcbndpbmRvdy5vbnJlc2l6ZSA9IGJvZHlTaWcudXBkYXRlO1xuXG5leHBvcnQgY29uc3QgbWlkQnJvd24gPSBcIiM2MDM5MTNcIjtcbmV4cG9ydCBjb25zdCBqZWFucyA9IFwicmdiKDM4LCA1MSwgODYpXCJcbmV4cG9ydCBjb25zdCBkZWVwQnJvd24gPSBcIiMzQzI0MTVcIjtcbmV4cG9ydCBjb25zdCBibGFjayA9IFwiIzAwMDAwMFwiO1xuZXhwb3J0IGNvbnN0IHdoaXRlID0gXCIjRkZGRkZGXCI7XG5leHBvcnQgY29uc3QgbWV0YWwgPSBcIiM2QzcxNzVcIjtcbmV4cG9ydCBjb25zdCB0aWxlQnJvd24gPSBcIiM2OTUwMzhcIjtcblxuZXhwb3J0IGNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9ICgpID0+IGBmYWRlSW4ke2lzTGFuZHNjYXBlKCkgPyBcIlhcIiA6IFwiWVwifSBlYXNlIDAuNnNgO1xuXG5leHBvcnQgY29uc3QgU0NST0xMX1RFWFRfV0lEVEhfSEVJR0hUX1BST1BPUlRJT04gPSAwLjk1O1xuIiwiaW1wb3J0IHsgaW50ZXJsYWNlZCB9IGZyb20gXCIuL3V0aWxcIjtcblxuaW50ZXJmYWNlIEVsZW1lbnRBbGlnbm1lbnQge1xuICAgIGVsZW1lbnQ6IEJveEVsZW1lbnQ7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dERldGFpbHMge1xuICAgIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgICBmb250V2VpZ2h0OiBudW1iZXI7XG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gICAgbGluZUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgQm94RWxlbWVudCA9IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHB4KHBpeGVsczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHBpeGVscyArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gYXhpc0FsaWduaW5nV2l0aEdhcHMoYXhpc1NpemU6IChlbGVtZW50OiBCb3hFbGVtZW50KSA9PiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGVsZW1lbnRPckdhcHM6IChCb3hFbGVtZW50IHwgbnVtYmVyKVtdKTogW0VsZW1lbnRBbGlnbm1lbnRbXSwgbnVtYmVyXSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRBbGlnbm1lbnRzID0gW107XG4gICAgICAgIGxldCBydW5uaW5nVG90YWwgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRPckdhcCBvZiBlbGVtZW50T3JHYXBzKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRBbGlnbm1lbnRzLnB1c2goeyBlbGVtZW50OiBlbGVtZW50T3JHYXAsIG9mZnNldDogcnVubmluZ1RvdGFsIH0pO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdUb3RhbCArPSBheGlzU2l6ZShlbGVtZW50T3JHYXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nVG90YWwgKz0gZWxlbWVudE9yR2FwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZWxlbWVudEFsaWdubWVudHMsIHJ1bm5pbmdUb3RhbF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdW5weCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZS5zbGljZSgwLCAtMikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvc1goZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIC8vIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0TGVmdCA6IHVucHgoZWxlbWVudC5zdHlsZS5sZWZ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvc1goZWxlbWVudDogQm94RWxlbWVudCwgeDogbnVtYmVyKSB7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcHgoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NZKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICAvLyByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0VG9wIDogdW5weChlbGVtZW50LnN0eWxlLnRvcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NFbmRYKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gcG9zWChlbGVtZW50KSArIHNpemVYKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9zWShlbGVtZW50OiBCb3hFbGVtZW50LCB5OiBudW1iZXIpIHtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHB4KHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zRW5kWShlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIHBvc1koZWxlbWVudCkgKyBzaXplWShlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVYKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICAvLyByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IGVsZW1lbnQuY2xpZW50V2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTaXplWChlbGVtZW50OiBCb3hFbGVtZW50LCB4OiBudW1iZXIpIHtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gcHgoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbWFnZVNpemVYKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCB4OiBudW1iZXIpIHtcbiAgICBzZXRTaXplWChpbWFnZSwgeCk7XG4gICAgc2V0U2l6ZVkoaW1hZ2UsICh4ICogaW1hZ2UubmF0dXJhbEhlaWdodCkgLyBpbWFnZS5uYXR1cmFsV2lkdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2l6ZVkoZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIC8vIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiBlbGVtZW50LmNsaWVudEhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpemVZKGVsZW1lbnQ6IEJveEVsZW1lbnQsIHk6IG51bWJlcikge1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcHgoeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbWFnZVNpemVZKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCB5OiBudW1iZXIpIHtcbiAgICBzZXRTaXplWShpbWFnZSwgeSk7XG4gICAgc2V0U2l6ZVgoaW1hZ2UsICh5ICogaW1hZ2UubmF0dXJhbFdpZHRoKSAvIGltYWdlLm5hdHVyYWxIZWlnaHQpO1xufVxuXG4vLyBaWlpaIHdhbnQgYSBzaG9ydCBoYW5kIGZvciBjb21tb24gc2ltcGxlIHVzZVxuZXhwb3J0IGNvbnN0IGFsaWduaW5nV2l0aEdhcHNYID0gYXhpc0FsaWduaW5nV2l0aEdhcHMoc2l6ZVgpO1xuZXhwb3J0IGNvbnN0IGFsaWduaW5nV2l0aEdhcHNZID0gYXhpc0FsaWduaW5nV2l0aEdhcHMoc2l6ZVkpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5kc2NhcGUoKSB7XG4gICAgcmV0dXJuIGlubmVyV2lkdGggLyBpbm5lckhlaWdodCA+IDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJXaXRoR2FwWShlbGVtZW50czogSFRNTEVsZW1lbnRbXSwgZ2FwOiBudW1iZXIsIGNlbnRlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZWxlbWVudHNXaXRoR2FwcyA9IGludGVybGFjZWQoZWxlbWVudHMsIGdhcCk7XG4gICAgY29uc3QgW2VsZW1lbnRBbGlnbm1lbnRzLCB0b3RhbEhlaWdodF0gPSBhbGlnbmluZ1dpdGhHYXBzWShlbGVtZW50c1dpdGhHYXBzKTtcblxuICAgIGZvciAoY29uc3QgeyBlbGVtZW50LCBvZmZzZXQgfSBvZiBlbGVtZW50QWxpZ25tZW50cykge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHB4KG9mZnNldCArIGNlbnRlciAtIHRvdGFsSGVpZ2h0IC8gMik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyWChwYXJlbnQ6IEJveEVsZW1lbnQsIGNoaWxkOiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIChzaXplWChwYXJlbnQpIC0gc2l6ZVgoY2hpbGQpKSAvIDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJZKHBhcmVudDogQm94RWxlbWVudCwgY2hpbGQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gKHNpemVZKHBhcmVudCkgLSBzaXplWShjaGlsZCkpIC8gMjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVGV4dChzY3JvbGxUZXh0OiBIVE1MRWxlbWVudCwgczogVGV4dERldGFpbHMpIHtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbFRleHQuc3R5bGUuZm9udEZhbWlseSA9IHMuZm9udEZhbWlseTtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiICsgcy5mb250V2VpZ2h0O1xuICAgIHNjcm9sbFRleHQuc3R5bGUuZm9udFNpemUgPSBweChzLmZvbnRTaXplKTtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmNvbG9yID0gcy5jb2xvcjtcbiAgICBpZiAocy5sZXR0ZXJTcGFjaW5nKSBzY3JvbGxUZXh0LnN0eWxlLmxldHRlclNwYWNpbmcgPSBweChzLmxldHRlclNwYWNpbmcpO1xuICAgIGlmIChzLmxpbmVIZWlnaHQpIHNjcm9sbFRleHQuc3R5bGUubGluZUhlaWdodCA9IHB4KHMubGluZUhlaWdodCk7XG59XG4iLCJpbXBvcnQgeyBib2R5LCBib2R5U2lnIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBweCB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IHsgZWZmZWN0LCBTaWduYWwgfSBmcm9tIFwiLi9zaWduYWxcIjtcbmltcG9ydCB7IGFuaW1hdGVTcHJpbmcsIFNwcmluZyB9IGZyb20gXCIuL3NwcmluZ1wiO1xuXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGlzT3BlbmluZyA9IGZhbHNlO1xuICAgIHNwcmluZzogU3ByaW5nO1xuICAgIHNwcmluZ1NpZzogU2lnbmFsO1xuXG4gICAgb25MYXlvdXQgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbG9yOiBzdHJpbmcsIG9uT3BlbjogKGJhY2tkcm9wOiBIVE1MRWxlbWVudCkgPT4gdm9pZCwgcHJpdmF0ZSBvbkFuaW1hdGU6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQsIG9uQ2xvc2U6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5zcHJpbmcgPSBuZXcgU3ByaW5nKDApO1xuICAgICAgICB0aGlzLnNwcmluZy5zZXRTdGlmZm5lc3NDcml0aWNhbCgxMjApO1xuICAgICAgICB0aGlzLnNwcmluZ1NpZyA9IG5ldyBTaWduYWwoKTtcblxuICAgICAgICB0aGlzLnNwcmluZy5vblVucmVzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcmluZy5wb3NpdGlvbiA9PT0gMCkgb3Blbk1vZGFsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNsb3NlTW9kYWw6ICgpID0+IHZvaWQgfCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3ByaW5nLm9uUmVzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcmluZy5wb3NpdGlvbiA9PT0gMCAmJiBjbG9zZU1vZGFsKSBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApO1xuXG4gICAgICAgICAgICBvbk9wZW4oYmFja2Ryb3ApO1xuXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnNwcmluZy5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5vcGFjaXR5ID0gdGltZSArIFwiXCI7XG4gICAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUucG9pbnRlckV2ZW50cyA9IHRpbWUgPiAwLjkgPyBcImFsbFwiIDogXCJub25lXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGUodGltZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBlZmZlY3QoYW5pbWF0ZSwgW3RoaXMuc3ByaW5nU2lnXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxheW91dE1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLndpZHRoID0gcHgoaW5uZXJXaWR0aCk7XG4gICAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuaGVpZ2h0ID0gcHgoaW5uZXJIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxheW91dCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZWZmZWN0KGxheW91dE1vZGFsLCBbYm9keVNpZ10pO1xuXG4gICAgICAgICAgICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJvZHlTaWcudW5zdWJzY3JpYmUobGF5b3V0TW9kYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaW5nU2lnLnVuc3Vic2NyaWJlKGFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYmFja2Ryb3ApO1xuICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25BbmltYXRlKDApO1xuICAgIH1cblxuICAgIGJlZ2luT3BlbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZXNjYXBlS2V5TGlzdGVuZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXNjYXBlS2V5TGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGVzY2FwZUtleUxpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLnNwcmluZy50YXJnZXQgPSAxO1xuICAgICAgICBhbmltYXRlU3ByaW5nKHRoaXMuc3ByaW5nLCB0aGlzLnNwcmluZ1NpZyk7XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgYmVnaW5DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zcHJpbmcudGFyZ2V0ID0gMDtcbiAgICAgICAgYW5pbWF0ZVNwcmluZyh0aGlzLnNwcmluZywgdGhpcy5zcHJpbmdTaWcpO1xuICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBib2R5U2lnIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBUZXh0RGV0YWlscyB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IHsgZWZmZWN0IH0gZnJvbSBcIi4vc2lnbmFsXCI7XG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IHBhZ2VDbGVhbnVwcyA9IG5ldyBTZXQ8KCkgPT4gdm9pZD4oKTtcblxuY29uc3QgYXdhaXRCZWZvcmVMYXlvdXRzID0gbmV3IFNldDxQcm9taXNlPHZvaWQ+PigpO1xuY29uc3QgYmVmb3JlTGF5b3V0cyA9IG5ldyBTZXQ8KCkgPT4gdm9pZD4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgYXdhaXRCZWZvcmVMYXlvdXRzLmFkZChpbWFnZS5kZWNvZGUoKSk7XG59XG5cbi8vIFRPRE8gZ3Jvc3NcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWhoaCgpIHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChhd2FpdEJlZm9yZUxheW91dHMpO1xuICAgIGF3YWl0QmVmb3JlTGF5b3V0cy5jbGVhcigpO1xuICAgIGF3YWl0IHNsZWVwKDEwKTtcbiAgICBydW5BbGxBbmRDbGVhcihiZWZvcmVMYXlvdXRzKTtcbiAgICBib2R5U2lnLnVwZGF0ZSgpOyAvLyBUT0RPIGdyb3NzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVwZGF0ZUxheW91dCh1cGRhdGVMYXlvdXQ6ICgpID0+IHZvaWQpIHtcbiAgICBhd2FpdCB3YWhoaCgpO1xuICAgIGVmZmVjdCh1cGRhdGVMYXlvdXQsIFtib2R5U2lnXSk7XG4gICAgcGFnZUNsZWFudXBzLmFkZCgoKSA9PiBib2R5U2lnLnVuc3Vic2NyaWJlKHVwZGF0ZUxheW91dCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRGb3JQYWdlKHBhcmVudDogRWxlbWVudCwgY2hpbGQ6IEVsZW1lbnQpIHtcbiAgICBiZWZvcmVMYXlvdXRzLmFkZCgoKSA9PiB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIHBhZ2VDbGVhbnVwcy5hZGQoKCkgPT4gcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbkxhc3RQYWdlKCkge1xuICAgIHJ1bkFsbEFuZENsZWFyKHBhZ2VDbGVhbnVwcyk7XG59XG5cbmZ1bmN0aW9uIHJ1bkFsbEFuZENsZWFyKHNldDogU2V0PCgpID0+IHZvaWQ+KSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNldCkgaXRlbSgpO1xuICAgIHNldC5jbGVhcigpO1xufVxuIiwiaW1wb3J0IHsgYmxhY2ssIGJvZHlTaWcsIG1ldGFsLCB0aWxlQnJvd24sIHdoaXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWxpZ25pbmdXaXRoR2Fwc1ksIGNlbnRlcldpdGhHYXBZLCBjZW50ZXJYLCBpc0xhbmRzY2FwZSwgcG9zRW5kWCwgcG9zRW5kWSwgcG9zWCwgcG9zWSwgcHgsIHNldEltYWdlU2l6ZVgsIHNldEltYWdlU2l6ZVksIHNldFBvc1gsIHNldFBvc1ksIHNldFNpemVYLCBzZXRTaXplWSwgc2l6ZVgsIHNpemVZLCBzdHlsZVRleHQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRGb3JQYWdlLCByZWdpc3RlclVwZGF0ZUxheW91dCB9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQgeyBhZGRTY3JvbGxJbWFnZSwgYWRkU2Nyb2xsVGV4dCwgYWRkVGV4dCwgZ2V0SGVhZGVyQmFySGVpZ2h0LCBnZXRTY3JvbGxXaWR0aCwgcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCwgc2Nyb2xsQ29udGFpbmVyIH0gZnJvbSBcIi4uL3Njcm9sbFwiO1xuaW1wb3J0IHsgZWZmZWN0LCBTaWduYWwgfSBmcm9tIFwiLi4vc2lnbmFsXCI7XG5pbXBvcnQgeyBhbmltYXRlU3ByaW5nLCBTcHJpbmcgfSBmcm9tIFwiLi4vc3ByaW5nXCI7XG5pbXBvcnQgeyBjb2xvck9uSG92ZXIsIGNyZWF0ZUljb25TVkcsIG1ha2VMaW5lLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3V0aWxcIjtcblxuY29uc3QgVCA9IC0xMDAwMDtcblxuZnVuY3Rpb24gbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU6IEhUTUxFbGVtZW50LCB5OiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICBzZXRTaXplWShzZWN0aW9uTGluZSwgMC4wMDEgKiBzKTtcbiAgICBzZXRTaXplWChzZWN0aW9uTGluZSwgaW5uZXJXaWR0aCk7XG4gICAgc2V0UG9zWShzZWN0aW9uTGluZSwgeSk7XG59XG5cbmludGVyZmFjZSBOYXZJdGVtIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYmFyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAganVtcEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xufVxuXG5jb25zdCBuYXZJdGVtRnJvbVN0cmluZyA9IHtcbiAgICBhYm91dDoge30gYXMgTmF2SXRlbSxcbiAgICBzZXJ2aWNlczoge30gYXMgTmF2SXRlbSxcbiAgICBiaW86IHt9IGFzIE5hdkl0ZW0sXG4gICAgcmVjZW50UHJvamVjdHM6IHt9IGFzIE5hdkl0ZW0sXG4gICAgY29udGFjdDoge30gYXMgTmF2SXRlbSxcbn07XG5cbmZ1bmN0aW9uIGdpdmVIb3ZlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZW50ZXJDb2xvcjogc3RyaW5nLCBsZWF2ZUNvbG9yOiBzdHJpbmcpIHtcbiAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiY29sb3IgMC4yc1wiO1xuICAgIGVsZW1lbnQub25tb3VzZWVudGVyID0gKCkgPT4gKGVsZW1lbnQuc3R5bGUuY29sb3IgPSBlbnRlckNvbG9yKTtcbiAgICBlbGVtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IChlbGVtZW50LnN0eWxlLmNvbG9yID0gbGVhdmVDb2xvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZW51QnV0dG9uKCkge1xuICAgIGNvbnN0IHN6ID0gNjA7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGNyZWF0ZUljb25TVkcoc3opO1xuICAgIG1lbnVCdXR0b24uc3R5bGUuc3Ryb2tlID0gd2hpdGU7XG4gICAgY29uc3QgbWVudUxpbmUgPSBtYWtlTGluZShtZW51QnV0dG9uLCA2KTtcbiAgICBjb25zdCBsaW5lMSA9IG1lbnVMaW5lKCk7XG4gICAgY29uc3QgbGluZTIgPSBtZW51TGluZSgpO1xuICAgIGNvbnN0IGxpbmUzID0gbWVudUxpbmUoKTtcbiAgICBsaW5lMS5zdHlsZS5zdHJva2VMaW5lY2FwID0gJ3NxdWFyZSdcbiAgICBsaW5lMi5zdHlsZS5zdHJva2VMaW5lY2FwID0gJ3NxdWFyZSdcbiAgICBsaW5lMy5zdHlsZS5zdHJva2VMaW5lY2FwID0gJ3NxdWFyZSdcblxuICAgIGNvbnN0IG1lbnVNb2RhbCA9IG5ldyBNb2RhbChcbiAgICAgICAgXCIjMDAwMDAwZWVcIixcbiAgICAgICAgKGJhY2tkcm9wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51UGFnZU5hdnM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3BhZ2VOYW1lLCBuYXZJdGVtXSBvZiBPYmplY3QuZW50cmllcyhuYXZJdGVtRnJvbVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51UGFnZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIG1lbnVQYWdlTmF2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIG1lbnVQYWdlTmF2LmlubmVyVGV4dCA9IG5hdkl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICBtZW51UGFnZU5hdi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICAgICAgICAgIG1lbnVQYWdlTmF2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVNb2RhbC5iZWdpbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkl0ZW0uYmFyRWxlbWVudC5jbGljaygpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBiYWNrZHJvcC5hcHBlbmRDaGlsZChtZW51UGFnZU5hdik7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2VOYXZzLnB1c2gobWVudVBhZ2VOYXYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZW51TW9kYWwub25MYXlvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZW51UGFnZU5hdiBvZiBtZW51UGFnZU5hdnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGV4dChtZW51UGFnZU5hdiwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwNSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wNiAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc1gobWVudVBhZ2VOYXYsIHMgLyAyIC0gc2l6ZVgobWVudVBhZ2VOYXYpIC8gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbnRlcldpdGhHYXBZKG1lbnVQYWdlTmF2cywgaW5uZXJIZWlnaHQgKiAwLjA4LCBpbm5lckhlaWdodCAvIDIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbWVudUJ1dHRvbi5zdHlsZS56SW5kZXggPSBcIjFcIjtcbiAgICAgICAgfSxcbiAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aW1lICogc3o7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGxpbmUxLCB7IHgxOiAwLCB5MTogMCwgeDI6IHN6LCB5MjogcyB9KTtcbiAgICAgICAgICAgIGxpbmUyLnN0eWxlLm9wYWNpdHkgPSAoc3ogLSBzKSAvIHN6ICsgXCJcIjtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMobGluZTIsIHsgeDE6IDAsIHkxOiBzeiAvIDIsIHgyOiBzeiwgeTI6IHN6IC8gMiB9KTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMobGluZTMsIHsgeDE6IDAsIHkxOiBzeiwgeDI6IHN6LCB5Mjogc3ogLSBzIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBtZW51QnV0dG9uLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIG1lbnVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKG1lbnVNb2RhbC5pc09wZW5pbmcpIHtcbiAgICAgICAgICAgIG1lbnVNb2RhbC5iZWdpbkNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51TW9kYWwuYmVnaW5PcGVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgICAgICBzZXRTaXplWChtZW51QnV0dG9uLCAwKTtcbiAgICAgICAgICAgIHNldFNpemVZKG1lbnVCdXR0b24sIDApO1xuICAgICAgICAgICAgc2V0UG9zWChtZW51QnV0dG9uLCAwKTtcbiAgICAgICAgICAgIHNldFBvc1kobWVudUJ1dHRvbiwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDkgKiBzO1xuXG4gICAgICAgICAgICBjb25zdCBzaXplID0gMC4wNyAqIHM7XG4gICAgICAgICAgICBzZXRTaXplWChtZW51QnV0dG9uLCBzaXplKTtcbiAgICAgICAgICAgIHNldFNpemVZKG1lbnVCdXR0b24sIHNpemUpO1xuXG4gICAgICAgICAgICBzZXRQb3NYKG1lbnVCdXR0b24sIGlubmVyV2lkdGggLSBzaXplIC0gbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kobWVudUJ1dHRvbiwgKGdldEhlYWRlckJhckhlaWdodCgpIC0gc2l6ZSkgLyAyKTtcbiAgICAgICAgfVxuICAgIH0sIFtib2R5U2lnXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROYXZCYXIoKSB7XG4gICAgLy8vIFpaWlogcHVsbCB0aGlzIG91dCB3aXRoIG9uZSBpbiBzY3JvbGwudHNcbiAgICBmdW5jdGlvbiBhZGRJbWFnZShzcmM6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzY3JvbGxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHNjcm9sbEltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBzY3JvbGxJbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHNjcm9sbEltYWdlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICAgIHNjcm9sbEltYWdlLm9ubG9hZCA9ICgpID0+IGJvZHlTaWcudXBkYXRlKCk7IC8vIFpaWlogc3R1cGlkXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxJbWFnZSk7XG4gICAgICAgIHJldHVybiBzY3JvbGxJbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBrb3JlTG9nbyA9IGFkZEltYWdlKFwiYmlnLWtvcmUuc3ZnXCIpO1xuXG4gICAgY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGFnbGluZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0YWdsaW5lLnNyYyA9IFwidGFnbGluZS5zdmdcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xuXG4gICAgZnVuY3Rpb24gYWRkTmF2SXRlbShuYXZJdGVtTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYmFyRWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICAgICAgYmFyRWxlbWVudC5pbm5lclRleHQgPSBuYXZJdGVtTmFtZTtcblxuICAgICAgICBjb25zdCBuYXZJdGVtID0ge30gYXMgTmF2SXRlbTtcbiAgICAgICAgbmF2SXRlbS5iYXJFbGVtZW50ID0gYmFyRWxlbWVudDtcbiAgICAgICAgbmF2SXRlbS5uYW1lID0gbmF2SXRlbU5hbWU7XG5cbiAgICAgICAgYmFyRWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2SXRlbS5qdW1wRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGdpdmVIb3ZlcihiYXJFbGVtZW50LCBtZXRhbCwgd2hpdGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFyRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBuYXZJdGVtO1xuICAgIH1cblxuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLmFib3V0ID0gYWRkTmF2SXRlbShcIkFCT1VUXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLnNlcnZpY2VzID0gYWRkTmF2SXRlbShcIlNFUlZJQ0VTXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLmJpbyA9IGFkZE5hdkl0ZW0oXCJCSU9cIik7XG4gICAgbmF2SXRlbUZyb21TdHJpbmcucmVjZW50UHJvamVjdHMgPSBhZGROYXZJdGVtKFwiUkVDRU5UIFBST0pFQ1RTXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLmNvbnRhY3QgPSBhZGROYXZJdGVtKFwiQ09OVEFDVFwiKTtcblxuICAgIGNvbnN0IGJhckVsZW1lbnRzID0gT2JqZWN0LnZhbHVlcyhuYXZJdGVtRnJvbVN0cmluZykubWFwKChiKSA9PiBiLmJhckVsZW1lbnQpO1xuXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxXaWR0aCgpO1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gMC4wNSAqIHM7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkJvdHRvbSA9IDAuMDUgKiBzO1xuXG4gICAgICAgICAgICBzZXRTaXplWChrb3JlTG9nbywgMC4wOCAqIHMpO1xuICAgICAgICAgICAgc2V0UG9zWShrb3JlTG9nbywgbmF2Qm90dG9tIC0gc2l6ZVkoa29yZUxvZ28pIC0gMC4wMDIgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1goa29yZUxvZ28sIG1hcmdpbik7XG5cbiAgICAgICAgICAgIHNldFNpemVYKHRhZ2xpbmUsIDAuMTcgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1kodGFnbGluZSwgbmF2Qm90dG9tIC0gc2l6ZVkodGFnbGluZSkpO1xuICAgICAgICAgICAgc2V0UG9zWCh0YWdsaW5lLCBwb3NFbmRYKGtvcmVMb2dvKSArIDAuMDE4ICogcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1UZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4wMDA4ICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYmFyRWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZJdGVtID0gYmFyRWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dE5hdkl0ZW0gPSBiYXJFbGVtZW50c1tpICsgMV07XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQobmF2SXRlbSwgbmF2SXRlbVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dE5hdkl0ZW0pIHNldFBvc1gobmF2SXRlbSwgcG9zWChuZXh0TmF2SXRlbSkgLSBzaXplWChuYXZJdGVtKSAtIDAuMDIgKiBzKTtcbiAgICAgICAgICAgICAgICBlbHNlIHNldFBvc1gobmF2SXRlbSwgcyAtIHNpemVYKG5hdkl0ZW0pIC0gMC4wNyAqIHMpO1xuXG4gICAgICAgICAgICAgICAgc2V0UG9zWShuYXZJdGVtLCBuYXZCb3R0b20gLSBzaXplWShuYXZJdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDkgKiBzOyAvLyBaWlpaIHRha2Ugb3V0XG5cbiAgICAgICAgICAgIHNldFNpemVYKGtvcmVMb2dvLCAwLjMgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1goa29yZUxvZ28sIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGtvcmVMb2dvLCAoZ2V0SGVhZGVyQmFySGVpZ2h0KCkgLSBzaXplWShrb3JlTG9nbykpIC8gMik7XG5cbiAgICAgICAgICAgIHNldFNpemVYKHRhZ2xpbmUsIFQpO1xuICAgICAgICAgICAgc2V0UG9zWCh0YWdsaW5lLCBUKTtcbiAgICAgICAgICAgIHNldFBvc1kodGFnbGluZSwgVCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1UZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4wMDA4ICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYmFyRWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZJdGVtID0gYmFyRWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dE5hdkl0ZW0gPSBiYXJFbGVtZW50c1tpICsgMV07XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQobmF2SXRlbSwgbmF2SXRlbVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dE5hdkl0ZW0pIHNldFBvc1gobmF2SXRlbSwgVCk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZXRQb3NYKG5hdkl0ZW0sIFQpO1xuXG4gICAgICAgICAgICAgICAgc2V0UG9zWShuYXZJdGVtLCBUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtib2R5U2lnXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb21lUGFnZSgpIHtcbiAgICBmdW5jdGlvbiBhZGRTZWN0aW9uTGluZSgpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWN0aW9uTGluZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgc2VjdGlvbkxpbmUuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzExMTExMVwiO1xuXG4gICAgICAgIGFwcGVuZENoaWxkRm9yUGFnZShzY3JvbGxDb250YWluZXIsIHNlY3Rpb25MaW5lKTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb25MaW5lO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRsaW5lVGV4dCA9IGFkZFNjcm9sbFRleHQoXCJQUk9URUNUIFlPVVJTRUxGIEZST00gUFJPSkVDVCBIQVpBUkRTLlwiKTtcbiAgICBjb25zdCB0cmF2ZWxpbmdUaGVQYXRoID0gYWRkU2Nyb2xsVGV4dChcIlRyYXZlbGxpbmcgdGhlIHBhdGggdW5ndWlkZWQgY2FuIGNvc3QgeW91LlwiKTtcblxuICAgIGNvbnN0IGxvZ28gPSBhZGRTY3JvbGxJbWFnZShcImxvZ28uc3ZnXCIpO1xuICAgIGxvZ28uc3R5bGUudHJhbnNpdGlvbiA9IFwiMXNcIjtcbiAgICBsb2dvLm9ubW91c2VlbnRlciA9ICgpID0+IHtcbiAgICAgICAgbG9nby5zdHlsZS5maWx0ZXIgPSBcImRyb3Atc2hhZG93KDEwcHggMTBweCAxMHB4IHJnYmEoMjU1LCAxODAsIDEwMCwgMC41KSlcIjtcbiAgICAgICAgbG9nby5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtMTVweCwgLTE1cHgpXCI7XG4gICAgfTtcbiAgICBsb2dvLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgbG9nby5zdHlsZS5maWx0ZXIgPSBcIlwiO1xuICAgICAgICBsb2dvLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDBweCwgMHB4KVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTEgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgYWJvdXROYW1lID0gYWRkU2Nyb2xsVGV4dChcIlNDT1RUIEcuIEdSSUZGSU5cIik7XG4gICAgbmF2SXRlbUZyb21TdHJpbmcuYWJvdXQuanVtcEVsZW1lbnQgPSBhYm91dE5hbWU7XG4gICAgY29uc3QgYWJvdXREZXNjcmlwdGlvbiA9IGFkZFNjcm9sbFRleHQoXCJGb3VuZGVyPGJyPjxicj5XaXRoIDM3IHllYXJzIGluIHRoZSB0cmVuY2hlcyBvZiBicm9hZGNhc3QsIEFWLCBhbmQgbWVkaWEgc3lzdGVtcyBpbnRlZ3JhdGlvbiwgSeKAmXZlIGJ1aWx0IG15IGNhcmVlciBwcm90ZWN0aW5nIGNsaWVudHMgZnJvbSBiZWluZyBzdGVhbXJvbGxlZCBieSBjb21wbGV4aXR5LCBiYWQgcGxhbm5pbmcsIGFuZCB1bnJlYWxpc3RpYyBwcm9taXNlcy48YnI+PGJyPknigJltIG5vdCBoZXJlIHRvIHBsYXkgbmljZSDigJQgSeKAmW0gaGVyZSB0byBtYWtlIHN1cmUgdGhpbmdzIGdldCBkb25lIHJpZ2h0Ljxicj48YnI+QXMgYSBTdWJqZWN0IE1hdHRlciBFeHBlcnQgYW5kIE93bmVy4oCZcyBSZXAsIEkgYnJpbmcgY2xlYXItZXllZCBzdHJhdGVneSwgZW5naW5lZXJpbmcgbGVhZGVyc2hpcCwgYW5kIGEgbm8tQlMgYXBwcm9hY2ggdG8gY29tcGxleCBwcm9qZWN0cy4gRnJvbSBlYXJseS1zdGFnZSB2aXNpb25pbmcgdGhyb3VnaCBmaW5hbCBpbXBsZW1lbnRhdGlvbiwgSSBtYWtlIHN1cmUgbXkgY2xpZW50cyBhcmUgZnVsbHkgaW5mb3JtZWQgYW5kIHN0YXkgaW4gY29udHJvbCDigJQgd2l0aG91dCBiZWluZyBidXJpZWQgaW4gdGVjaG5pY2FsIG5vaXNlIG9yIHZlbmRvciBzcGluLjxicj48YnI+SeKAmXZlIGxlZCBoaWdoLXByb2ZpbGUgcHJvamVjdHMgZm9yIHRoZSBOQkEsIFdXRSwgVW5pdmlzaW9uLCBEaXNuZXksIGFuZCBtb3JlLiBNeSBiYWNrZ3JvdW5kIGluY2x1ZGVzIHJ1bm5pbmcgYSBzdWNjZXNzZnVsIGludGVncmF0aW9uIGZpcm0sIG1hbmFnaW5nIGVuZ2luZWVyaW5nIHRlYW1zIG9mIDUwKywgYW5kIG92ZXJzZWVpbmcgc29tZSBvZiB0aGUgbGFyZ2VzdCBtZWRpYSBmYWNpbGl0eSBidWlsZHMgb2YgdGhlIGxhc3QgMzAgeWVhcnMuIFdoZXRoZXIgd2XigJlyZSB0YWxraW5nIG5ldHdvcmsgb3BzLCBjbG91ZCB3b3JrZmxvd3MsIHBvc3QtcHJvZHVjdGlvbiwgb3Igc3R1ZGlvIG9wcyB3b3JrZmxvd3Mg4oCUIEnigJl2ZSBkb25lIGl0LCBhbmQgSSBicmluZyB0aGUgc2NhcnMgKGFuZCBsZXNzb25zKSB3aXRoIG1lLjxicj48YnI+TXkgam9iIGlzIHNpbXBsZTogbWFrZSBzdXJlIG15IGNsaWVudHMgYXJlIHByb3RlY3RlZCwgcmVzcGVjdGVkLCBhbmQgaGF2ZSBkZWxpdmVyZWQgZXhhY3RseSB3aGF0IHRoZXkgbmVlZOKAlG5vdGhpbmcgbW9yZSwgYW5kIGFic29sdXRlbHkgbm90aGluZyBsZXNzLlwiKTtcbiAgICBjb25zdCBwb3J0cmFpdCA9IGFkZFNjcm9sbEltYWdlKFwicGFwYS5wbmdcIik7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTIgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgZmVlbENvbmZpZGVudCA9IGFkZFNjcm9sbFRleHQoXCJGRUVMIENPTkZJREVOVCBLTk9XSU5HIFlPVeKAmVZFIEdPVCBJVCBBTEwgQ09WRVJFRC5cIik7XG4gICAgbmF2SXRlbUZyb21TdHJpbmcuc2VydmljZXMuanVtcEVsZW1lbnQgPSBmZWVsQ29uZmlkZW50O1xuXG4gICAgbGV0IHNraWxsVGlsZUNvdW50WCA9IDE7XG4gICAgbGV0IHNraWxsVGlsZUNvdW50WSA9IDE7XG4gICAgY29uc3Qgc3ByaW5nU2lnID0gbmV3IFNpZ25hbCgpO1xuICAgIGZ1bmN0aW9uIGFkZFNraWxsVGlsZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBtZXRhbDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgICAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBjb250YWluZXIpO1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBhZGRUZXh0KHRpdGxlLCBjb250YWluZXIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBhZGRUZXh0KGRlc2NyaXB0aW9uLCBjb250YWluZXIpO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjI1c1wiO1xuXG4gICAgICAgIGNvbnN0IHNwcmluZ1ggPSBuZXcgU3ByaW5nKDApO1xuICAgICAgICBjb25zdCBzcHJpbmdZID0gbmV3IFNwcmluZygwKTtcbiAgICAgICAgY29uc3Qgc3ByaW5nU2l6ZVkgPSBuZXcgU3ByaW5nKDEpO1xuICAgICAgICBzcHJpbmdYLnNldFN0aWZmbmVzc0NyaXRpY2FsKDIwMCk7XG4gICAgICAgIHNwcmluZ1kuc2V0U3RpZmZuZXNzQ3JpdGljYWwoMjAwKTtcbiAgICAgICAgc3ByaW5nU2l6ZVkuc2V0U3RpZmZuZXNzQ3JpdGljYWwoMjAwKTtcblxuICAgICAgICBmdW5jdGlvbiB0aWxlQXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBza2lsbFRpbGVzLmZpbmQoKHMpID0+IHMuc3ByaW5nWC50YXJnZXQgPT09IHggJiYgcy5zcHJpbmdZLnRhcmdldCA9PT0geSkhO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmxpcFRpbGVzKHNwcmluZzE6IFNwcmluZywgc3ByaW5nMjogU3ByaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gc3ByaW5nMS50YXJnZXQ7XG4gICAgICAgICAgICBzcHJpbmcxLnRhcmdldCA9IHNwcmluZzIudGFyZ2V0O1xuICAgICAgICAgICAgc3ByaW5nMi50YXJnZXQgPSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBob2xlRGlmZlggPSAwO1xuICAgICAgICAgICAgbGV0IGhvbGVEaWZmWSA9IDA7XG4gICAgICAgICAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZURpZmZzKCkge1xuICAgICAgICAgICAgICAgIGhvbGVEaWZmWCA9IGhvbGVHb2FsWCAtIGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaG9sZURpZmZZID0gaG9sZUdvYWxZIC0gaG9sZVNraWxsVGlsZS5zcHJpbmdZLnRhcmdldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGhvbGVHb2FsWCA9IHNwcmluZ1gudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGhvbGVHb2FsWSA9IHNwcmluZ1kudGFyZ2V0ICsgMTtcbiAgICAgICAgICAgIHJlY2FsY3VsYXRlRGlmZnMoKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRlZExvdyA9IGhvbGVHb2FsWSA+PSBza2lsbFRpbGVDb3VudFk7XG4gICAgICAgICAgICBpZiAoKGhvbGVEaWZmWCA9PT0gMCAmJiBob2xlRGlmZlkgPiAwKSB8fCBob2xlR29hbFkgPj0gc2tpbGxUaWxlQ291bnRZKSB7XG4gICAgICAgICAgICAgICAgaG9sZUdvYWxZIC09IDE7XG4gICAgICAgICAgICAgICAgcmVjYWxjdWxhdGVEaWZmcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzbGlkZUhvbGVZKGdvYWxZOiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEaWZmWSA9IGdvYWxZIC0gaG9sZVNraWxsVGlsZS5zcHJpbmdZLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25ZID0gbmV3RGlmZlkgPiAwID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0OyB5ICE9PSBnb2FsWTsgeSArPSBkaXJlY3Rpb25ZKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsaXBUaWxlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVBdChob2xlU2tpbGxUaWxlLnNwcmluZ1gudGFyZ2V0LCB5KS5zcHJpbmdZLCAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZUF0KGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQsIHkgKyBkaXJlY3Rpb25ZKS5zcHJpbmdZXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY2FsY3VsYXRlRGlmZnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNsaWRlSG9sZVgoZ29hbFg6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RpZmZYID0gZ29hbFggLSBob2xlU2tpbGxUaWxlLnNwcmluZ1gudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvblggPSBuZXdEaWZmWCA+IDAgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQ7IHggIT09IGdvYWxYOyB4ICs9IGRpcmVjdGlvblgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxpcFRpbGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZUF0KHgsIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpLnNwcmluZ1gsIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlQXQoeCArIGRpcmVjdGlvblgsIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpLnNwcmluZ1hcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVjYWxjdWxhdGVEaWZmcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRlZExvdykgc2xpZGVIb2xlWShza2lsbFRpbGVDb3VudFkgLSAyKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhvbGVEaWZmWSA+IDApIHNsaWRlSG9sZVkoaG9sZUdvYWxZKTtcblxuICAgICAgICAgICAgaWYgKGhvbGVEaWZmWCAhPT0gMCkgc2xpZGVIb2xlWChob2xlR29hbFgpO1xuXG4gICAgICAgICAgICBpZiAoc3RhcnRlZExvdykgc2xpZGVIb2xlWShob2xlR29hbFkpO1xuICAgICAgICAgICAgZWxzZSBpZiAoaG9sZURpZmZZIDwgMCkgc2xpZGVIb2xlWShob2xlR29hbFkpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNraWxsVGlsZSBvZiBza2lsbFRpbGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNraWxsVGlsZSA9PT0gaG9sZVNraWxsVGlsZSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gbWV0YWw7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLnNwcmluZ1NpemVZLnRhcmdldCA9IDE7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLmRlc2NyaXB0aW9uVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gdGlsZUJyb3duO1xuICAgICAgICAgICAgc3ByaW5nU2l6ZVkudGFyZ2V0ID0gMjtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1gsIHNraWxsVGlsZS5zcHJpbmdTaWcpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1ksIHNraWxsVGlsZS5zcHJpbmdTaWcpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1NpemVZLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIub25jbGljayA9IG9uQ2xpY2s7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICByZXR1cm4geyBjb250YWluZXIsIHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBzcHJpbmdYLCBzcHJpbmdZLCBzcHJpbmdTaXplWSwgc3ByaW5nU2lnIH07XG4gICAgfVxuXG4gICAgY29uc3QgaG9sZVNraWxsVGlsZSA9IGFkZFNraWxsVGlsZShcIlwiLCBcIlwiKTtcbiAgICBob2xlU2tpbGxUaWxlLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDAwMDAwMzNcIjtcblxuICAgIGNvbnN0IHNraWxsVGlsZXMgPSBbXG4gICAgICAgIGFkZFNraWxsVGlsZShcIk93bmVyPGJyPlJlcHJlc2VudGF0aW9uXCIsIFwiS09SRSBzZXJ2ZXMgYXMgeW91ciBleWVzLCBlYXJzLCBhbmQgYWR2b2NhdGVzLCBwcm92aWRpbmcgY29uY2llcmdlLWxldmVsIGd1aWRhbmNlIHRocm91Z2ggZXZlcnkgc3RlcCBvZiB5b3VyIHByb2plY3QuIFdlIGtlZXAgdmVuZG9ycyBhbmQgY29udHJhY3RvcnMgaG9uZXN0LCBtYWtpbmcgc3VyZSBub3RoaW5nIHNsaXBzIHRocm91Z2ggdGhlIGNyYWNrcy4gV2UgYmVnaW4gYnkgYWxpZ25pbmcgYWxsIHN0YWtlaG9sZGVycyBlYXJseSBvbiwgdGhlbiBkZWZlbmQgeW91ciBwb3NpdGlvbiB0aHJvdWdob3V0IHRoZSBwcm9jZXNzLlwiKSwgLy9cbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiQmFzaXMgb2Y8YnI+RGVzaWduXCIsIFwiS09SRSBsaXN0ZW5zIGJlZm9yZSB3ZSBhZHZpc2UuIFdlIHJldmlldyB5b3VyIGN1cnJlbnQgb3BlcmF0aW9uLCBmdXR1cmUgcGxhbnMsIGFuZCBvdmVyYWxsIGdvYWxzLiBZb3VyIG5ldyBzcGFjZSBhbmQgc3lzdGVtcyBtdXN0IGdyYWNlZnVsbHkgc3VwcG9ydCBvcGVyYXRpb25hbCBuZWVkcyBhbmQgZnV0dXJlIGdyb3d0aC4gRGVlcCBleHBlcnRpc2UgaW4gc3lzdGVtcyBwbGFubmluZyBhbmQgaW5mcmFzdHJ1Y3R1cmUgc3RyYXRlZ3kgYWxsb3dzIEtPUkUgdG8gdHJhbnNsYXRlIHZpc2lvbiBpbnRvIGEgY29tcHJlaGVuc2l2ZSBCb0QuXCIpLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJQcm9vZiBvZjxicj5Db25jZXB0XCIsIFwiS09SRSBrbm93cyB5b3Ugb25seSBnZXQgb25lIGNoYW5jZSB0byBidWlsZCBhIG5ldyBmYWNpbGl0eSByaWdodC4gWW91IGRlc2VydmUgdG8gc2VlIGlkZWFzIHRob3JvdWdobHkgdGVzdGVkIGFuZCB2YWxpZGF0ZWQgYmVmb3JlIHlvdSBjb21taXQuIFdlIHZldCB0ZWNobm9sb2d5LCB2ZW5kb3JzLCBhbmQgYXNzdXJhbmNlcyBhZ2FpbnN0IHJlYWwtd29ybGQgY3JpdGVyaWEuIFRoaXMgYnJpbmdzIGNsYXJpdHkgdG8geW91ciB3b3JrZmxvdyBhbmQgcHV0cyBtZWFzdXJhYmxlIGFjY291bnRhYmlsaXR5IGJlaGluZCBldmVyeSBwcm9taXNlLlwiKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUHJvamVjdCBUZWFtPGJyPkFzc2VtYmx5XCIsIFwiS09SRSBicmluZ3MgdG9nZXRoZXIgdGhlIHJpZ2h0IHRlYW0gZm9yIHlvdXIgcHJvamVjdC4gV2UgZHJhdyBmcm9tIGEgbmV0d29yayBvZiB0cnVzdGVkIGV4cGVydHMgaW4gZGVzaWduLCBlbmdpbmVlcmluZywgaW5zdGFsbGF0aW9uLCBhbmQgbW9yZS4gVGhlc2UgYXJlIHByb3ZlbiBwcm9zIHdob+KAmXZlIHNob3duIHRoZXkgY2FuIGV4ZWN1dGUgdW5kZXIgcHJlc3N1cmUgd2l0aG91dCBtaXNzaW5nIGEgYmVhdC4gVGhhdCB0cmFuc2xhdGVzIHRvIHBlcmZvcm1hbmNlLCBub3QgZXhjdXNlcy5cIiksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlB1bmNoIExpc3Q8YnI+TWFuYWdlbWVudFwiLCBcIktPUkUgdHJhY2tzIGV2ZXJ5IGRldGFpbCwgZnJvbSBidWlsZGluZyBjb25zdHJ1Y3Rpb24gdG8gc3lzdGVtcyBpbnRlZ3JhdGlvbiB0byBvbmdvaW5nIHNlcnZpY2VzLiBJdOKAmXMgY3JpdGljYWwgdG8gbWFrZSBzdXJlIGFsbCB0aGUgdGVjaCB3b3JrcywgYWxsIHByb21pc2VzIGFyZSBmdWxmaWxsZWQuIE5vdGhpbmcgaXMgc2lnbmVkLW9mZiB1bnRpbCBpdOKAmXMgdGVzdGVkLCB2ZXJpZmllZCwgYW5kIHJpZ2h0LiBSZWxlbnRsZXNzIGZvbGxvdy10aHJvdWdoIHRha2VzIGV4dHJhIGVmZm9ydCwgYnV0IHdlIHN0dWJib3JubHkgcmVmdXNlIHRvIGNvbXByb21pc2UuXCIpLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJOZWVkczxicj5BbmFseXNpc1wiLCBcIktPUkUgZ3VpZGVzIHlvdSB0byB1bmNvdmVyIGFuZCB1bmRlcnN0YW5kIGV4YWN0bHkgd2hhdOKAmXMgbmVlZGVkLCB3aGF0J3MgcG9zc2libGUsIGFuZCB3aGF04oCZcyB3b3J0aCBwdXJzdWluZy4gQXNrIGFueW9uZSB3aG/igJlzIGJlZW4gdGhyb3VnaCB0aGlzIHByb2Nlc3Mg4oCTIGVhcmx5LXBoYXNlIHByb2plY3QgaW50ZWxsaWdlbmNlIG1ha2VzIGFsbCB0aGUgZGlmZmVyZW5jZS4gTWFrZSBzbWFydGVyLCBmYXN0ZXIgZGVjaXNpb25zIHdpdGggY2xhcml0eSBhbmQgY29uZmlkZW5jZSwgYW5kIGF2b2lkIGNvc3RseSBtaXN0YWtlcy5cIiksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkJ1ZGdldGluZyAmPGJyPkVzdGltYXRpbmdcIiwgXCJLT1JFIG9mZmVycyBhIGJ1ZGdldGluZyBwcm9jZXNzIHNoYXBlZCBieSByZWFsLXdvcmxkIGVuZ2luZWVyaW5nIGV4cGVyaWVuY2UuIFdlIHByb3ZpZGUgZWFybHkgY29zdCBtb2RlbHMsIGRldGFpbGVkIHByb2plY3Rpb25zLCBhbmQgcGhhc2VkIGludmVzdG1lbnQgc3RyYXRlZ2llcyB0byBoZWxwIHlvdSBzdGF5IGluZm9ybWVkLCBpbiBjb250cm9sLCBhbmQgd2l0aGluIGJ1ZGdldC4gT3VyIGVhcmx5IHdvcmsgaGVscHMgeW91IHRvIG1pbmltaXplIHNjb3BlIGNyZWVwIGFuZCBhdm9pZCBmaW5hbmNpYWwgc3VycHJpc2VzLlwiKSxcbiAgICAgICAgaG9sZVNraWxsVGlsZSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUkZQIENyZWF0aW9uPGJyPiYgQWRtaW5pc3RyYXRpb25cIiwgXCJLT1JFIGNhcHR1cmVzIHRoZSBwcm9qZWN0IG9iamVjdGl2ZXMsIG91dGxpbmVzIHRoZSBzY29wZSwgZGVmaW5lcyB0aGUgcXVhbGlmaWNhdGlvbnMsIGFuZCBzdHJ1Y3R1cmVzIHRoZSByZXNwb25zZSByZXF1aXJlZCBvZiBldmVyeSBwcm9qZWN0IHNvbGljaXRhdGlvbiB0aGF0IHdlIHByb2R1Y2UuIFdlIHRoZW4gc3RydWN0dXJlIHRoZSBiaWQgZXZhbHVhdGlvbiBwcm9jZXNzIGFuZCBndWlkZSB5b3UgdGhyb3VnaCB0aGUgY3JpdGljYWwgZGVjaXNpb24tbWFraW5nLCBsZWF2aW5nIG5vdGhpbmcgdG8gY2hhbmNlLlwiKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiSW50ZWdyYXRvcjxicj5TdXBwb3J0XCIsIFwiS09SRSBwYXJ0bmVycyB3aXRoIHlvdXIgaW50ZWdyYXRvciB0byBsZWFkIHRoZSBwcm9jZXNzLCBwcm90ZWN0IHlvdXIgdmlzaW9uLCBhbmQgbWFrZSBzdXJlIGV2ZXJ5IHdvcmtmbG93IGlzIGRlbGl2ZXJlZCBleGFjdGx5IGFzIGRlc2lnbmVkLiBXaXRoIGludGVncmF0aW9uIGxlYWRlcnNoaXAgYW5kIG92ZXJzaWdodCByb290ZWQgaW4gZGVjYWRlcyBvZiBleHBlcmllbmNlLCB3ZSBwcmVzZXJ2ZSB0aGUgaW50ZWdyaXR5IG9mIHlvdXIgZGVzaWduLiBXZSBkb27igJl0IGFjY2VwdCBjb21wcm9taXNlcy4gTmVpdGhlciBzaG91bGQgeW91LlwiKSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gbGF5b3V0VGlsZXModGlsZVNpemU6IG51bWJlciwgdGlsZUdhcDogbnVtYmVyLCB0aWxlUG9zWDogKHg6IG51bWJlcikgPT4gbnVtYmVyLCB0aWxlUG9zWTogKHk6IG51bWJlcikgPT4gbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbGxUaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2tpbGxUaWxlID0gc2tpbGxUaWxlc1tpXTtcbiAgICAgICAgICAgIHNraWxsVGlsZS5zcHJpbmdYLnBvc2l0aW9uID0gc2tpbGxUaWxlLnNwcmluZ1gudGFyZ2V0ID0gaSAlIHNraWxsVGlsZUNvdW50WDtcbiAgICAgICAgICAgIHNraWxsVGlsZS5zcHJpbmdZLnBvc2l0aW9uID0gc2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0ID0gaSAlIHNraWxsVGlsZUNvdW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwcmluZ1NpZy51bnN1YnNjcmliZUFsbCgpO1xuICAgICAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyLCB0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgc3ByaW5nWCwgc3ByaW5nWSwgc3ByaW5nU2l6ZVkgfSA9IHNraWxsVGlsZTtcblxuICAgICAgICAgICAgICAgIHNldFNpemVYKGNvbnRhaW5lciwgdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgIHNldFNpemVZKGNvbnRhaW5lciwgdGlsZVNpemUgKiBzcHJpbmdTaXplWS5wb3NpdGlvbiArIChzcHJpbmdTaXplWS5wb3NpdGlvbiAtIDEpICogdGlsZUdhcCk7XG5cbiAgICAgICAgICAgICAgICBzZXRQb3NYKGNvbnRhaW5lciwgdGlsZVBvc1goc3ByaW5nWC5wb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIHNldFBvc1koY29udGFpbmVyLCB0aWxlUG9zWShzcHJpbmdZLnBvc2l0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzdHlsZVRleHQodGl0bGVUZXh0LCB7IGxldHRlclNwYWNpbmc6IDAuMDAwNCAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wNSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KHRpdGxlVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMDQgKiB0aWxlU2l6ZSwgZm9udFdlaWdodDogNTAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjEgKiB0aWxlU2l6ZSwgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgICAgICBzZXRQb3NYKHRpdGxlVGV4dCwgMC4wOCAqIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NZKHRpdGxlVGV4dCwgdGlsZVNpemUgLyAyIC0gc2l6ZVkodGl0bGVUZXh0KSAvIDIpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3R5bGVUZXh0KGRlc2NyaXB0aW9uVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMDQgKiBzLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDI1ICogcywgbGluZUhlaWdodDogMC4wNCAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KGRlc2NyaXB0aW9uVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHRpbGVTaXplLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDcgKiB0aWxlU2l6ZSwgbGluZUhlaWdodDogMC4wOTUgKiB0aWxlU2l6ZSwgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgICAgICBzZXRTaXplWChkZXNjcmlwdGlvblRleHQsIHRpbGVTaXplICogMC44NSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zWChkZXNjcmlwdGlvblRleHQsIDAuMDggKiB0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zWShkZXNjcmlwdGlvblRleHQsIDAuNyAqIHRpbGVTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3NwcmluZ1NpZ10pO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lMyA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCBiaWdOYW1lcyA9IGFkZFNjcm9sbFRleHQoXCJCSUcgTkFNRVM8YnI+WU9VIEtOT1dcIik7XG4gICAgY29uc3QgaGFzVGFja2xlZCA9IGFkZFNjcm9sbFRleHQoXCI8c3Ryb25nPlNjb3R0IEdyaWZmaW48L3N0cm9uZz4gaGFzIHRhY2tsZWQgc29tZSBvZiB0aGUgbW9zdCBjb21wbGV4IHByb2plY3RzIGZvciBzb21lIG9mIHRoZSBsYXJnZXN0IG1lZGlhIGNvbXBhbmllcyBpbiB0aGUgd29ybGQuIEhlIGhhcyBzZWVuIGl0IGFsbCwgYW5kIHlvdSBjYW4gdGFwIGludG8gdGhhdCBleHBlcmllbmNlLlwiKTtcblxuICAgIGNvbnN0IGJpZ05hbWVDbGllbnRzID0gW1xuICAgICAgICBcIkFCUy9DQk5cIiwgLy9cbiAgICAgICAgXCJCbGFja3JvY2tcIixcbiAgICAgICAgXCJCbGFja3N0b25lXCIsXG4gICAgICAgIFwiQ0JTXCIsXG4gICAgICAgIFwiQ05OXCIsXG4gICAgICAgIFwiRGlzbmV5L0FCQy9FU1BOXCIsXG4gICAgICAgIFwiRm94IE5ld3NcIixcbiAgICAgICAgXCJNYWRpc29uIFNxdWFyZSBHYXJkZW5cIixcbiAgICAgICAgXCJNTEJcIixcbiAgICAgICAgXCJNU05CQ1wiLFxuICAgICAgICBcIk5CQVwiLFxuICAgICAgICBcIk5CQ1UvQ05CQ1wiLFxuICAgICAgICBcIk5hdGlvbmFsIEdlb2dyYXBoaWNcIixcbiAgICAgICAgXCJOb3J0aHdlc3Rlcm4gVW5pdmVyc2l0eVwiLFxuICAgICAgICBcIlBhcmFtb3VudC9DQlNcIixcbiAgICAgICAgXCJNVFYvU2hvd3RpbWVcIixcbiAgICAgICAgXCJQZW5uIFN0YXRlIFVuaXZlcnNpdHlcIixcbiAgICAgICAgXCJQcnVkZW50aWFsXCIsXG4gICAgICAgIFwiU2lyaXVzIFNhdGVsbGl0ZSBSYWRpb1wiLFxuICAgICAgICBcIlN5cmFjdXNlIFVuaXZlcnNpdHlcIixcbiAgICAgICAgXCJUZWxldmlzYS1Vbml2aXNpb25cIixcbiAgICAgICAgXCJUaGUgTmV3IFlvcmsgVGltZXNcIixcbiAgICAgICAgXCJXV0VcIixcbiAgICBdO1xuXG4gICAgY29uc3QgYmlnTmFtZUNsaWVudFRleHRzID0gYmlnTmFtZUNsaWVudHMubWFwKChiaWdOYW1lQ2xpZW50KSA9PiBhZGRTY3JvbGxUZXh0KGJpZ05hbWVDbGllbnQpKTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lNCA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZUxhbmRzY2FwZSA9IGFkZFNjcm9sbEltYWdlKFwiZ3JpZmZpbi1ibGFjay13aGl0ZS1sYW5kc2NhcGUucG5nXCIpO1xuICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlUG9ydHJhaXQgPSBhZGRTY3JvbGxJbWFnZShcImdyaWZmaW4tYmxhY2std2hpdGUtcG9ydHJhaXQuanBnXCIpO1xuICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlVGV4dCA9IGFkZFNjcm9sbFRleHQoXCJJ4oCZdmUgYmVlbiBpbiB0aGlzIGluZHVzdHJ5IGZvciBtb3JlIHRoYW4gMzUgeWVhcnMsIGFuZCBJIGNhbuKAmXQgdGhpbmsgb2Ygb25lIGNsaWVudCB3aG8gd2FzIGFibGUgdG8gc3VjY2Vzc2Z1bGx5IG5hdmlnYXRlIHRoZSBnYXVudGxldCB0aGF0IGlzIGEgbGFyZ2UgbWVkaWEgZmFjaWxpdHkgcHJvamVjdCB3aXRob3V0IHRoZSBzdXBwb3J0IG9mIGFuIGV4cGVyaWVuY2VkLCBrbm93bGVkZ2VhYmxlLCBhbmQgYWdncmVzc2l2ZSBwcm9qZWN0IGZhY2lsaXRhdG9yLlwiKTtcbiAgICBncmlmZmluQmxhY2tXaGl0ZVRleHQuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lNSA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICAvLyBiaW9cblxuICAgIGNvbnN0IGJpb0hlYWRlciA9IGFkZFNjcm9sbFRleHQoXCJIT1cgV0U8YnI+R09UIEhFUkVcIik7XG4gICAgbmF2SXRlbUZyb21TdHJpbmcuYmlvLmp1bXBFbGVtZW50ID0gYmlvSGVhZGVyO1xuICAgIGNvbnN0IGJpb1RleHQgPSBhZGRTY3JvbGxUZXh0KFwiSeKAmXZlIGFsd2F5cyBmb2N1c2VkIG9uIHRoZSBjb25jZXB0dWFsaXphdGlvbiBhbmQgaW1wbGVtZW50YXRpb24gb2YgYWR2YW5jZWQgdGVjaG5vbG9neSBzb2x1dGlvbnMgZm9yIGZhY2lsaXR5IGFuZCBldmVudCBzeXN0ZW1zIGludGVncmF0aW9uLiBBbG9uZyB0aGUgd2F5LCB0aGF04oCZcyBtZWFudCBzZXJ2aW5nIGFzIGRlc2lnbiBlbmdpbmVlciwgcHJvamVjdCBtYW5hZ2VyLCBzYWxlcyBlbmdpbmVlciwgcGxhbm5pbmcgY29uc3VsdGFudCwgYnVzaW5lc3MgYnVpbGRlci9vd25lciwgYW5kIHRlYW0gbGVhZGVyLjxicj48YnI+SXQgYWxsIHN0YXJ0ZWQgaW4gdGVjaG5pY2FsIHRoZWF0ZXIsIHdoZXJlIEkgd29ya2VkIGFzIGEgbWFzdGVyIGVsZWN0cmljaWFuLCBsaWdodGluZyBkZXNpZ25lciwgc291bmQgZGVzaWduZXIsIGFuZCBmcm9udC1vZi1ob3VzZSBzb3VuZCBlbmdpbmVlciBpbiBzdW1tZXIgc3RvY2ssIHRvdXJpbmcsIGFuZCBvZmYtQnJvYWR3YXkgdGhlYXRlci4gRm9sbG93aW5nIHNldmVyYWwgeWVhcnMgb2YgZnJlZWxhbmNlIHRoZWF0cmljYWwgYW5kIGNvbmNlcnQgdGVjaG5pY2FsIHN1cHBvcnQsIEkgbGFuZGVkIGF0IEFGIEFzc29jaWF0ZXMsIGEgYnJvYWRjYXN0IHN5c3RlbXMgaW50ZWdyYXRvci48YnI+PGJyPkFmdGVyIHdvcmtpbmcgb24gc3lzdGVtcyBlbmdpbmVlcmluZyBlZmZvcnRzIGZvciBOQkPigJlzIFRvZGF5IFNob3csIENOQkMsIGFuZCBVU0EgTmV0d29yaywgSSBtb3ZlZCB0byBTb255IFN5c3RlbXMgSW50ZWdyYXRpb24uIFRoZXJlLCBJIG92ZXJzYXcgZGVzaWduL2J1aWxkcyBmb3IgdGhlIFRyaWJ1bmUgU3RhdGlvbiBHcm91cCBhbmQgc3VwcG9ydGVkIENCUyBCcm9hZGNhc3QgT3BlcmF0aW9ucyAmIEVuZ2luZWVyaW5nPGJyPjxicj5BdCB0aGlzIHBvaW50LCBJIHRlYW1lZCB1cCB3aXRoIHR3byBwYXJ0bmVycyB0byBsYXVuY2ggVGhlIFN5c3RlbXMgR3JvdXAuIFRTRyBzcGVjaWFsaXplZCBpbiBsYXJnZS1zY2FsZSwgZmFzdC10cmFjayBzeXN0ZW1zIGludGVncmF0aW9uIHByb2plY3RzIGZvciB0aGUgYnJvYWRjYXN0IGluZHVzdHJ5LiBEdXJpbmcgb3VyIDIwLXllYXIgcnVuLCB3ZSBkZXNpZ25lZCBhbmQgYnVpbHQgZmFjaWxpdGllcyBmb3IgU2VyaW91cyBTYXRlbGxpdGUgUmFkaW8sIE1UViBOZXR3b3JrcywgU3lyYWN1c2UgVW5pdmVyc2l0eSBOZXdob3VzZSwgTkZMIEZpbG1zIEF1ZGlvLCBOQkNVLCBhbmQgQ29ydXMgRW50ZXJ0YWlubWVudCwgcGx1cyAyMDArIHN5c3RlbXMgaW50ZWdyYXRpb24gcHJvamVjdHMgd29ybGR3aWRlLjxicj48YnI+V2hlbiBUU0cgd2FzIGFjcXVpcmVkIGJ5IERpdmVyc2lmaWVkIGluIDIwMTYsIEkgZXN0YWJsaXNoZWQgYSBzbWFsbCBzdHVkaW8gd2l0aGluIHRoZSBsYXJnZXIgY29ycG9yYXRpb24sIHdoaWNoIGFsbG93ZWQgbWUgdG8gZm9jdXMgb24gY3JpdGljYWwgZWFybHktc3RhZ2UgcHJvamVjdCBjb25jZXB0dWFsaXphdGlvbiwgcGxhbm5pbmcsIGFuZCBidWRnZXRpbmcuIFRocm91Z2hvdXQgdGhvc2UgeWVhcnMsIEkgd2FzIGFibGUgdG8gd29yayBzaG91bGRlciB0byBzaG91bGRlciB3aXRoIHNvbWUgb2YgdGhlIGJlc3QgYW5kIGJyaWdodGVzdCBhY3Jvc3MgYSB3aWRlIHJhbmdlIG9mIGRpc2NpcGxpbmVzIGluIHRoZSBtZWRpYSBhbmQgZW50ZXJ0YWlubWVudCBpbmR1c3RyeS4gQW5kIHRoZSByZXN0LCBhcyB0aGV5IHNheSwgaXMgaGlzdG9yeS48YnI+PGJyPlRvZGF5LCBLT1JFIG9mZmVycyBhIHJhZGljYWxseSBzdHJlYW1saW5lZCB3YXkgdG8gbGV2ZXJhZ2UgYSBjYXJlZXLigJlzIHdvcnRoIG9mIGV4cGVydGlzZSwgZXhwZXJpZW5jZSwgYW5kIGV4dGVuc2l2ZSBpbmR1c3RyeSByZWxhdGlvbnNoaXBzIHRvIGhlbHAgbWFrZSBzdXJlIHlvdXIgbmV4dCBwcm9qZWN0IHJ1bnMgc21vb3RobHkgZnJvbSBwbGFubmluZyB0byBhY2NlcHRhbmNlLjxicj48YnI+SSBob2xkIGEgQmFjaGVsb3Igb2YgU2NpZW5jZSBpbiBFbGVjdHJpY2FsIEVuZ2luZWVyaW5nIGZyb20gUGVubiBTdGF0ZSBVbml2ZXJzaXR5LCBhbmQgYW0gYSBtZW1iZXIgb2YgU01QVEUsIEFFUywgYW5kIFNWRy4gSeKAmW0gYWxzbyBraW5kIHRvIGFuaW1hbHMuXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmU2ID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIC8vIHJlY2VudCBwcm9qZWN0c1xuXG4gICAgY29uc3QgcmVjZW50UHJvamVjdEhlYWRlciA9IGFkZFNjcm9sbFRleHQoXCJSRUNFTlQ8YnI+UFJPSkVDVFNcIik7XG4gICAgbmF2SXRlbUZyb21TdHJpbmcucmVjZW50UHJvamVjdHMuanVtcEVsZW1lbnQgPSByZWNlbnRQcm9qZWN0SGVhZGVyO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFBhaXIocHJvamVjdE5hbWU6IHN0cmluZywgcHJvamVjdERlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVUZXh0ID0gYWRkU2Nyb2xsVGV4dChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvblRleHQgPSBhZGRTY3JvbGxUZXh0KHByb2plY3REZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdE5hbWVUZXh0LCBwcm9qZWN0RGVzY3JpcHRpb25UZXh0IH07XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBbYWRkUHJvamVjdFBhaXIoXCJOQkEgRW50ZXJ0YWlubWVudFwiLCBcIkFyY2hpdGVjdHVyYWwgcGxhbm5pbmcgYW5kIGJ1ZGdldGluZyBmb3IgbmV3IGNvbnRlbnQgb3BlcmF0aW9ucyBjZW50ZXIsIHJlcGxheSBvcGVyYXRpb25zIGNlbnRlciwgYW5kIGV4cGFuc2lvbiBvZiB0aGUgTkJBIE5ldHdvcmsuXCIpLCBhZGRQcm9qZWN0UGFpcihcIlRlbGV2aXNhL1VuaXZpc2lvbiBOZXR3b3JrXCIsIFwiU3lzdGVtIGNvbmNlcHR1YWxpemF0aW9uLCBhcHBsaWNhdGlvbnMgZW5naW5lZXJpbmcsIHByb2plY3QgYnVkZ2V0aW5nLCBhbmQgYWNjb3VudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIG5ldHdvcmsgb3BlcmF0aW9ucyBjZW50ZXIuXCIpLCBhZGRQcm9qZWN0UGFpcihcIldlc3Rlcm4gS2VudHVja3kgVW5pdmVyc2l0eVwiLCBcIlBCUyBhbmQgTlBSIHN0YXRpb25zLCBDb2xsZWdlIG9mIENvbW11bmljYXRpb25zIHByb2R1Y3Rpb24gYW5kIHBvc3QgZmFjaWxpdHksIGluY2x1ZGluZyB0aWVzIHRvIGNhbXB1cyBzcG9ydHMgYW5kIHByZXNlbnRhdGlvbiB2ZW51ZXMsIGRldmVsb3BtZW50IG9mIGEgY29tcGxldGUgc3lzdGVtIGRlc2lnbiBmb3IgdGhyZWUgY29udHJvbCByb29tcywgdHdvIFRWIHN0dWRpb3MsIGZvdXIgcmFkaW8gc3R1ZGlvcywgYW5kIHBvc3QtcHJvZHVjdGlvbiBvcGVyYXRpb25zLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJXb3JsZCBXcmVzdGxpbmcgRW50ZXJ0YWlubWVudFwiLCBcIk5ldyBIUSBkaWdpdGFsIG1lZGlhIGZhY2lsaXR5IGRlc2lnbiBhbmQgYnVkZ2V0aW5nIGZvciBwcm9kdWN0aW9uLCBwb3N0LCB0cmFuc21pc3Npb24sIGFuZCBldmVudCBjb29yZGluYXRpb24sIHBsdXMgZm9ybWFsIGFuYWx5c2lzIGZvciBQaGFzZSAyIHdvcmtmbG93IG9wdGltaXphdGlvbiBhbmQgb3JjaGVzdHJhdGlvbiBsYXllci5cIiksIGFkZFByb2plY3RQYWlyKFwiRGlzbmV5L0dhbGF4eSBDb25zb2xpZGF0aW9uXCIsIFwiVGhlIGxhcmdlc3QgbmV0d29yayBvcGVyYXRpb25zIGNlbnRlciBmYWNpbGl0eSBldmVyIGJ1aWx0IGluIHRoZSBVUy4gSXQgaW5jbHVkZXMgQUJDIE5ldHdvcmssIFdBQkMgVFYsIEVTUE4gTlksIE1hcnZlbCBFbnRlcnRhaW5tZW50LCBhbmQgRGlzbmV5IFNjcmVlbmluZyBUaGVhdGVyLiBTY290dCBvdmVyc2F3IGNvbnRyYWN0IGFkbWluaXN0cmF0aW9uIGFjcm9zcyB0aGUgZW50aXJlIHByb2plY3QuXCIpXTtcblxuICAgIC8vIGNvbnRhY3RcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lNyA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCB0ZWxsTWUgPSBhZGRTY3JvbGxUZXh0KFwiVGVsbCBtZSBhYm91dCB5b3VyIHByb2plY3QuXCIpO1xuICAgIG5hdkl0ZW1Gcm9tU3RyaW5nLmNvbnRhY3QuanVtcEVsZW1lbnQgPSB0ZWxsTWU7XG4gICAgY29uc3Qgb25lQ29udmVyc2F0aW9uID0gYWRkU2Nyb2xsVGV4dChcIk9uZSBjb252ZXJzYXRpb24gd29u4oCZdCBjb3N0IHlvdSBhbnl0aGluZy4gTm90IGhhdmluZyBvbmUgbWlnaHQuXCIpO1xuICAgIGNvbnN0IGJpZ0tvcmUgPSBhZGRTY3JvbGxJbWFnZShcImJpZy1rb3JlLnN2Z1wiKTtcblxuICAgIGNvbnN0IGVtYWlsID0gYWRkU2Nyb2xsVGV4dChcIkVtYWlsXCIpO1xuICAgIGdpdmVIb3ZlcihlbWFpbCwgd2hpdGUsIG1ldGFsKTtcbiAgICBlbWFpbC5vbmNsaWNrID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIm1haWx0bzpsYWlyb2Z0aGVncmlmZmluQGdtYWlsLmNvbVwiKTtcblxuICAgIGNvbnN0IGxpbmtlZEluID0gYWRkU2Nyb2xsVGV4dChcIkxpbmtlZEluXCIpO1xuICAgIGdpdmVIb3ZlcihsaW5rZWRJbiwgd2hpdGUsIG1ldGFsKTtcbiAgICBsaW5rZWRJbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBsaW5rZWRJbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zZ2dyaWZmaW5cIiwgXCJfYmxhbmtcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaXZhY3lQb2xpY3kgPSBhZGRTY3JvbGxUZXh0KFwiUHJpdmFjeSBQb2xpY3kgwqkgMjAyNiBLT1JFIFNNRSBMTENcIik7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTggPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgcmVnaXN0ZXJVcGRhdGVMYXlvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMYW5kc2NhcGUoKSkge1xuICAgICAgICAgICAgcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCgpO1xuICAgICAgICAgICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDUgKiBzO1xuICAgICAgICAgICAgY29uc3QgYmV0d2Vlbk1hcmdpbiA9IHMgLSBtYXJnaW4gKiAyO1xuICAgICAgICAgICAgY29uc3QgZnJvbVRvcCA9IDAuMDMxICogcztcblxuICAgICAgICAgICAgY29uc3QgYmlnVGV4dFRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDc1ICogcywgbGluZUhlaWdodDogMC4wODQgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBjb25zdCBzdWJHcmF5VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wMTkgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHROdWRnZSA9IDAuMDA0ICogcztcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25MaW5lR2FwID0gMC4wNCAqIHM7XG4gICAgICAgICAgICBjb25zdCBndXR0ZXIgPSAwLjAyICogcztcbiAgICAgICAgICAgIGNvbnN0IGd1dHRlcmVkQ29sdW1uID0gcyAvIDIgKyBndXR0ZXI7XG4gICAgICAgICAgICBjb25zdCBndXR0ZXJlZFdpZHRoQmV0d2VlbiA9IHMgLyAyIC0gMiAqIGd1dHRlcjtcblxuICAgICAgICAgICAgY29uc3QgYmlnVGV4dFRvU3VidGV4dEdhcCA9IDAuMDIgKiBzO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoaGVhZGxpbmVUZXh0LCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoaGVhZGxpbmVUZXh0LCAwLjQgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1goaGVhZGxpbmVUZXh0LCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuICAgICAgICAgICAgc2V0UG9zWShoZWFkbGluZVRleHQsIGZyb21Ub3ApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQodHJhdmVsaW5nVGhlUGF0aCwgc3ViR3JheVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1godHJhdmVsaW5nVGhlUGF0aCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kodHJhdmVsaW5nVGhlUGF0aCwgcG9zRW5kWShoZWFkbGluZVRleHQpICsgYmlnVGV4dFRvU3VidGV4dEdhcCk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVkobG9nbywgc2l6ZVkoaGVhZGxpbmVUZXh0KSAqIDEuMDQpO1xuICAgICAgICAgICAgc2V0UG9zWChsb2dvLCBpbm5lcldpZHRoIC0gbG9nby5zY3JvbGxXaWR0aCAtIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGxvZ28sIGZyb21Ub3AgLSAwLjAzICogcyk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMSwgcG9zRW5kWSh0cmF2ZWxpbmdUaGVQYXRoKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgLy8gYWJvdXRcblxuICAgICAgICAgICAgY29uc3QgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDEgKiBzLCBsaW5lSGVpZ2h0OiAwLjAyICogcywgZm9udEZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGFib3V0RGVzY3JpcHRpb24sIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuXG4gICAgICAgICAgICBza2lsbFRpbGVDb3VudFggPSA1O1xuICAgICAgICAgICAgc2tpbGxUaWxlQ291bnRZID0gMjtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gaW5uZXJXaWR0aCAtIDIgKiBtYXJnaW47IC8vIFpaWlogYW5vdGhlciBzY3JvbGwgd2lkdGg/XG4gICAgICAgICAgICBjb25zdCB0aWxlR2FwID0gMC4wMTUgKiBzO1xuICAgICAgICAgICAgY29uc3QgdGlsZVNpemUgPSAoc2Nyb2xsV2lkdGggLSB0aWxlR2FwICogKHNraWxsVGlsZUNvdW50WCAtIDEpKSAvIHNraWxsVGlsZUNvdW50WDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1goeDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmdpbiArICh0aWxlU2l6ZSArIHRpbGVHYXApICogeDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1koeTogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aWxlU2l6ZSArIHRpbGVHYXApICogeSArIHBvc0VuZFkoZmVlbENvbmZpZGVudCkgKyAwLjA0ICogcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWJvdXRMZWZ0ID0gdGlsZVBvc1goMik7XG4gICAgICAgICAgICBzdHlsZVRleHQoYWJvdXROYW1lLCB7IGxldHRlclNwYWNpbmc6IDAuMDAxICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAyICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgIHNldFBvc1koYWJvdXROYW1lLCBwb3NZKHNlY3Rpb25MaW5lMSkgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgICAgICBzZXRQb3NYKGFib3V0TmFtZSwgYWJvdXRMZWZ0KTtcblxuICAgICAgICAgICAgc2V0U2l6ZVgoYWJvdXREZXNjcmlwdGlvbiwgcyAtIGFib3V0TGVmdCAtIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGFib3V0RGVzY3JpcHRpb24sIHBvc0VuZFkoYWJvdXROYW1lKSk7XG4gICAgICAgICAgICBzZXRQb3NYKGFib3V0RGVzY3JpcHRpb24sIGFib3V0TGVmdCk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVkocG9ydHJhaXQsIHNpemVZKGFib3V0TmFtZSkgKyBzaXplWShhYm91dERlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICBzZXRQb3NZKHBvcnRyYWl0LCBwb3NZKGFib3V0TmFtZSkpO1xuICAgICAgICAgICAgc2V0UG9zWChwb3J0cmFpdCwgbWFyZ2luKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUyLCBwb3NFbmRZKGFib3V0RGVzY3JpcHRpb24pICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICAvLyB0aWxlc1xuXG4gICAgICAgICAgICBjb25zdCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMjggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoZmVlbENvbmZpZGVudCwgZmVlbENvbmZpZGVudFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGZlZWxDb25maWRlbnQsIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShmZWVsQ29uZmlkZW50LCBwb3NZKHNlY3Rpb25MaW5lMikgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgICAgICBzZXRQb3NYKGZlZWxDb25maWRlbnQsIG1hcmdpbik7XG5cbiAgICAgICAgICAgIGxheW91dFRpbGVzKHRpbGVTaXplLCB0aWxlR2FwLCB0aWxlUG9zWCwgdGlsZVBvc1kpO1xuICAgICAgICAgICAgc2tpbGxUaWxlc1syXS5jb250YWluZXIuY2xpY2soKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUzLCB0aWxlUG9zWSgxKSArIHRpbGVTaXplICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoYmlnTmFtZXMsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NZKGJpZ05hbWVzLCBwb3NZKHNlY3Rpb25MaW5lMykgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgICAgICBzZXRQb3NYKGJpZ05hbWVzLCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuXG4gICAgICAgICAgICBjb25zdCBoYXNUYWNrZWRUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogMzAwLCBjb2xvcjogbWV0YWwsIGZvbnRTaXplOiAwLjAxNCAqIHMsIGxpbmVIZWlnaHQ6IDAuMDI1ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGhhc1RhY2tsZWQsIGhhc1RhY2tlZFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGhhc1RhY2tsZWQsIHNpemVYKGJpZ05hbWVzKSk7XG4gICAgICAgICAgICBzZXRQb3NZKGhhc1RhY2tsZWQsIHBvc0VuZFkoYmlnTmFtZXMpICsgYmlnVGV4dFRvU3VidGV4dEdhcCk7XG4gICAgICAgICAgICBzZXRQb3NYKGhhc1RhY2tsZWQsIG1hcmdpbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhc3RCaWdOYW1lID0gYmlnTmFtZUNsaWVudFRleHRzW2JpZ05hbWVDbGllbnRUZXh0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IGJpZ05hbWVzVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMTggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbGZDbGllbnRMZW5ndGggPSBNYXRoLmNlaWwoYmlnTmFtZUNsaWVudFRleHRzLmxlbmd0aCAvIDIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaWdOYW1lQ2xpZW50VGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihpIC8gaGFsZkNsaWVudExlbmd0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGkgJSBoYWxmQ2xpZW50TGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IG8gPSBiaWdOYW1lQ2xpZW50VGV4dHNbaV07XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQobywgYmlnTmFtZXNUZXh0RGV0YWlscyk7XG5cbiAgICAgICAgICAgICAgICBzZXRQb3NZKG8sIHBvc1koYmlnTmFtZXMpICsgMC4wMSAqIHMgKyAwLjAzMiAqIHkgKiBzKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NYKG8sIGd1dHRlcmVkQ29sdW1uICsgMC4yMiAqIHggKiBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU0LCBwb3NFbmRZKGxhc3RCaWdOYW1lKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWChncmlmZmluQmxhY2tXaGl0ZVBvcnRyYWl0LCAwKTtcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWChncmlmZmluQmxhY2tXaGl0ZUxhbmRzY2FwZSwgcyk7XG4gICAgICAgICAgICBzZXRQb3NYKGdyaWZmaW5CbGFja1doaXRlTGFuZHNjYXBlLCAwKTtcbiAgICAgICAgICAgIHNldFBvc1koZ3JpZmZpbkJsYWNrV2hpdGVMYW5kc2NhcGUsIHBvc0VuZFkoc2VjdGlvbkxpbmU0KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogNDAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjAyICogcywgbGluZUhlaWdodDogMC4wNCAqIHMsIGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChncmlmZmluQmxhY2tXaGl0ZVRleHQsIGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBndXR0ZXJlZFdpZHRoQmV0d2Vlbik7XG4gICAgICAgICAgICBzZXRQb3NYKGdyaWZmaW5CbGFja1doaXRlVGV4dCwgZ3V0dGVyZWRDb2x1bW4pO1xuICAgICAgICAgICAgc2V0UG9zWShncmlmZmluQmxhY2tXaGl0ZVRleHQsIHBvc1koZ3JpZmZpbkJsYWNrV2hpdGVMYW5kc2NhcGUpICsgc2l6ZVkoZ3JpZmZpbkJsYWNrV2hpdGVMYW5kc2NhcGUpIC8gMiAtIHNpemVZKGdyaWZmaW5CbGFja1doaXRlVGV4dCkgLyAyKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU1LCBwb3NFbmRZKGdyaWZmaW5CbGFja1doaXRlTGFuZHNjYXBlKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgLy8gYmlvXG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChiaW9IZWFkZXIsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NZKGJpb0hlYWRlciwgcG9zRW5kWShzZWN0aW9uTGluZTUpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICAgICAgc2V0UG9zWChiaW9IZWFkZXIsIG1hcmdpbiAtIGJpZ1RleHROdWRnZSk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChiaW9UZXh0LCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGJpb1RleHQsIGd1dHRlcmVkV2lkdGhCZXR3ZWVuKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlvVGV4dCwgcG9zWShiaW9IZWFkZXIpKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlvVGV4dCwgZ3V0dGVyZWRDb2x1bW4pO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTYsIHBvc0VuZFkoYmlvVGV4dCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChyZWNlbnRQcm9qZWN0SGVhZGVyLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWShyZWNlbnRQcm9qZWN0SGVhZGVyLCBwb3NFbmRZKHNlY3Rpb25MaW5lNikgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgICAgICBzZXRQb3NYKHJlY2VudFByb2plY3RIZWFkZXIsIG1hcmdpbiAtIGJpZ1RleHROdWRnZSk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgeyBwcm9qZWN0TmFtZVRleHQsIHByb2plY3REZXNjcmlwdGlvblRleHQgfSBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0TmFtZVRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDIgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0RGVzY3JpcHRpb25UZXh0LCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBzZXRTaXplWChwcm9qZWN0RGVzY3JpcHRpb25UZXh0LCBndXR0ZXJlZFdpZHRoQmV0d2Vlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzV2l0aFNwYWNpbmcgPSBwcm9qZWN0cy5mbGF0TWFwKChwcm9qZWN0KSA9PiBbcHJvamVjdC5wcm9qZWN0TmFtZVRleHQsIDAuMDA2ICogcywgcHJvamVjdC5wcm9qZWN0RGVzY3JpcHRpb25UZXh0LCAwLjAyOCAqIHNdKTtcbiAgICAgICAgICAgIGNvbnN0IFthbGlnbm1lbnRzLCBfXSA9IGFsaWduaW5nV2l0aEdhcHNZKHByb2plY3RzV2l0aFNwYWNpbmcpO1xuICAgICAgICAgICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIG9mZnNldCB9IG9mIGFsaWdubWVudHMpIHtcbiAgICAgICAgICAgICAgICBzZXRQb3NZKGVsZW1lbnQsIHBvc1kocmVjZW50UHJvamVjdEhlYWRlcikgKyBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIHNldFBvc1goZWxlbWVudCwgZ3V0dGVyZWRDb2x1bW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGFzdFByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnByb2plY3REZXNjcmlwdGlvblRleHQ7XG5cbiAgICAgICAgICAgIC8vIGNvbnRhY3RcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU3LCBwb3NFbmRZKGxhc3RQcm9qZWN0RGVzY3JpcHRpb24pICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQodGVsbE1lLCB7IGxldHRlclNwYWNpbmc6IDAuMywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxOSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICBzZXRQb3NYKHRlbGxNZSwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kodGVsbE1lLCBwb3NFbmRZKHNlY3Rpb25MaW5lNykgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChvbmVDb252ZXJzYXRpb24sIHN1YkdyYXlUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKG9uZUNvbnZlcnNhdGlvbiwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kob25lQ29udmVyc2F0aW9uLCBwb3NFbmRZKHRlbGxNZSkgKyAwLjAwOCAqIHMpO1xuXG4gICAgICAgICAgICBzZXRJbWFnZVNpemVYKGJpZ0tvcmUsIHMgLSBtYXJnaW4gKiAyKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlnS29yZSwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlnS29yZSwgcG9zRW5kWShvbmVDb252ZXJzYXRpb24pICsgMC4xICogcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmtUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBtZXRhbCwgZm9udFNpemU6IDAuMDE5ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGVtYWlsLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChlbWFpbCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koZW1haWwsIHBvc0VuZFkoYmlnS29yZSkgKyAwLjA1ICogcyk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChsaW5rZWRJbiwgbGlua1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1gobGlua2VkSW4sIG1hcmdpbiArIDAuMDcgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1kobGlua2VkSW4sIHBvc0VuZFkoYmlnS29yZSkgKyAwLjA1ICogcyk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChwcml2YWN5UG9saWN5LCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChwcml2YWN5UG9saWN5LCBzIC0gc2l6ZVgocHJpdmFjeVBvbGljeSkgLSBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShwcml2YWN5UG9saWN5LCBwb3NFbmRZKGJpZ0tvcmUpICsgMC4wNSAqIHMpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTgsIHBvc0VuZFkoZW1haWwpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCgpO1xuICAgICAgICAgICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDkgKiBzO1xuICAgICAgICAgICAgY29uc3QgYmV0d2Vlbk1hcmdpbiA9IHMgLSBtYXJnaW4gKiAyO1xuXG4gICAgICAgICAgICBjb25zdCBiaWdUZXh0VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4xNSAqIHMsIGxpbmVIZWlnaHQ6IDAuMTggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBjb25zdCBzdWJHcmF5VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wOSAqIHMsIGxpbmVIZWlnaHQ6IDAuMTMgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHROdWRnZSA9IDAuMDEgKiBzO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmVHYXAgPSAwLjA4NSAqIHM7XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHRUb1N1YnRleHRHYXAgPSAwLjAzICogcztcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGhlYWRsaW5lVGV4dCwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1goaGVhZGxpbmVUZXh0LCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuICAgICAgICAgICAgc2V0UG9zWShoZWFkbGluZVRleHQsIDApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQodHJhdmVsaW5nVGhlUGF0aCwgc3ViR3JheVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKHRyYXZlbGluZ1RoZVBhdGgsIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWCh0cmF2ZWxpbmdUaGVQYXRoLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWSh0cmF2ZWxpbmdUaGVQYXRoLCBwb3NFbmRZKGhlYWRsaW5lVGV4dCkgKyBiaWdUZXh0VG9TdWJ0ZXh0R2FwKTtcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWChsb2dvLCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1gobG9nbywgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kobG9nbywgcG9zRW5kWSh0cmF2ZWxpbmdUaGVQYXRoKSArIHMgKiAwLjE3KTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUxLCBwb3NFbmRZKGxvZ28pICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICAvLyBhYm91dFxuXG4gICAgICAgICAgICBzZXRJbWFnZVNpemVYKHBvcnRyYWl0LCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1gocG9ydHJhaXQsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKHBvcnRyYWl0LCBwb3NFbmRZKHNlY3Rpb25MaW5lMSkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChhYm91dE5hbWUsIHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDkgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgc2V0UG9zWChhYm91dE5hbWUsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGFib3V0TmFtZSwgcG9zRW5kWShwb3J0cmFpdCkgKyAwLjIgKiBzKTtcblxuICAgICAgICAgICAgY29uc3QgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDQ1ICogcywgbGluZUhlaWdodDogMC4xICogcywgZm9udEZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGFib3V0RGVzY3JpcHRpb24sIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoYWJvdXREZXNjcmlwdGlvbiwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKGFib3V0RGVzY3JpcHRpb24sIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGFib3V0RGVzY3JpcHRpb24sIHBvc0VuZFkoYWJvdXROYW1lKSArIDAuMDA2ICogcyk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMiwgcG9zRW5kWShhYm91dERlc2NyaXB0aW9uKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgLy8gdGlsZXNcblxuICAgICAgICAgICAgY29uc3QgZmVlbENvbmZpZGVudFRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDYgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoZmVlbENvbmZpZGVudCwgZmVlbENvbmZpZGVudFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGZlZWxDb25maWRlbnQsIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWChmZWVsQ29uZmlkZW50LCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShmZWVsQ29uZmlkZW50LCBwb3NZKHNlY3Rpb25MaW5lMikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHNraWxsVGlsZUNvdW50WCA9IDI7XG4gICAgICAgICAgICBza2lsbFRpbGVDb3VudFkgPSA1O1xuICAgICAgICAgICAgY29uc3QgdGlsZUdhcCA9IDAuMDMgKiBzO1xuICAgICAgICAgICAgY29uc3QgdGlsZVNpemUgPSAoYmV0d2Vlbk1hcmdpbiAtIHRpbGVHYXAgKiAoc2tpbGxUaWxlQ291bnRYIC0gMSkpIC8gc2tpbGxUaWxlQ291bnRYO1xuICAgICAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1goeDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmdpbiArICh0aWxlU2l6ZSArIHRpbGVHYXApICogeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRpbGVQb3NZKHk6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGlsZVNpemUgKyB0aWxlR2FwKSAqIHkgKyBwb3NFbmRZKGZlZWxDb25maWRlbnQpICsgMC4wNCAqIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXlvdXRUaWxlcyh0aWxlU2l6ZSwgdGlsZUdhcCwgdGlsZVBvc1gsIHRpbGVQb3NZKTtcbiAgICAgICAgICAgIHNraWxsVGlsZXNbMl0uY29udGFpbmVyLmNsaWNrKCk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMywgdGlsZVBvc1koNCkgKyB0aWxlU2l6ZSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpZ05hbWVzLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChiaWdOYW1lcywgbWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlnTmFtZXMsIHBvc1koc2VjdGlvbkxpbmUzKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgY29uc3QgaGFzVGFja2VkVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wNjUgKiBzLCBsaW5lSGVpZ2h0OiAwLjExICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGhhc1RhY2tsZWQsIGhhc1RhY2tlZFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGhhc1RhY2tsZWQsIHNpemVYKGJpZ05hbWVzKSAtIDAuMDI1ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NYKGhhc1RhY2tsZWQsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGhhc1RhY2tsZWQsIHBvc0VuZFkoYmlnTmFtZXMpICsgMC4wNiAqIHMpO1xuXG4gICAgICAgICAgICBjb25zdCBsYXN0QmlnTmFtZSA9IGJpZ05hbWVDbGllbnRUZXh0c1tiaWdOYW1lQ2xpZW50VGV4dHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBiaWdOYW1lc1RleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDY1ICogcywgbGluZUhlaWdodDogMC4xMSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmlnTmFtZUNsaWVudFRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbyA9IGJpZ05hbWVDbGllbnRUZXh0c1tpXTtcblxuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChvLCBiaWdOYW1lc1RleHREZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgIHNldFBvc1gobywgbWFyZ2luKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NZKG8sIHBvc0VuZFkoaGFzVGFja2xlZCkgKyAwLjI1ICogcyArIDAuMTQgKiBpICogcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNCwgcG9zRW5kWShsYXN0QmlnTmFtZSkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGVMYW5kc2NhcGUsIDApO1xuXG4gICAgICAgICAgICBzZXRJbWFnZVNpemVYKGdyaWZmaW5CbGFja1doaXRlUG9ydHJhaXQsIHMpO1xuICAgICAgICAgICAgc2V0UG9zWChncmlmZmluQmxhY2tXaGl0ZVBvcnRyYWl0LCAwKTtcbiAgICAgICAgICAgIHNldFBvc1koZ3JpZmZpbkJsYWNrV2hpdGVQb3J0cmFpdCwgcG9zWShzZWN0aW9uTGluZTQpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZVRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDczICogcywgbGluZUhlaWdodDogMC4xNCAqIHMsIGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChncmlmZmluQmxhY2tXaGl0ZVRleHQsIGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1goZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShncmlmZmluQmxhY2tXaGl0ZVRleHQsIHBvc1koZ3JpZmZpbkJsYWNrV2hpdGVQb3J0cmFpdCkgKyAwLjIgKiBzKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU1LCBwb3NFbmRZKGdyaWZmaW5CbGFja1doaXRlUG9ydHJhaXQpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICAvLyBiaW9cblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpb0hlYWRlciwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlvSGVhZGVyLCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuICAgICAgICAgICAgc2V0UG9zWShiaW9IZWFkZXIsIHBvc0VuZFkoc2VjdGlvbkxpbmU1KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpb1RleHQsIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoYmlvVGV4dCwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKGJpb1RleHQsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGJpb1RleHQsIHBvc0VuZFkoYmlvSGVhZGVyKSArIGJpZ1RleHRUb1N1YnRleHRHYXApO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTYsIHBvc0VuZFkoYmlvVGV4dCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChyZWNlbnRQcm9qZWN0SGVhZGVyLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChyZWNlbnRQcm9qZWN0SGVhZGVyLCBtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuICAgICAgICAgICAgc2V0UG9zWShyZWNlbnRQcm9qZWN0SGVhZGVyLCBwb3NZKHNlY3Rpb25MaW5lNikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgeyBwcm9qZWN0TmFtZVRleHQsIHByb2plY3REZXNjcmlwdGlvblRleHQgfSBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0TmFtZVRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0RGVzY3JpcHRpb25UZXh0LCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBzZXRTaXplWChwcm9qZWN0RGVzY3JpcHRpb25UZXh0LCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNXaXRoU3BhY2luZyA9IHByb2plY3RzLmZsYXRNYXAoKHByb2plY3QpID0+IFtwcm9qZWN0LnByb2plY3ROYW1lVGV4dCwgMC4wMiAqIHMsIHByb2plY3QucHJvamVjdERlc2NyaXB0aW9uVGV4dCwgMC4xICogc10pO1xuICAgICAgICAgICAgY29uc3QgW2FsaWdubWVudHMsIF9dID0gYWxpZ25pbmdXaXRoR2Fwc1kocHJvamVjdHNXaXRoU3BhY2luZyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHsgZWxlbWVudCwgb2Zmc2V0IH0gb2YgYWxpZ25tZW50cykge1xuICAgICAgICAgICAgICAgIHNldFBvc1goZWxlbWVudCwgbWFyZ2luKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NZKGVsZW1lbnQsIHBvc0VuZFkocmVjZW50UHJvamVjdEhlYWRlcikgKyAwLjEzICogcyArIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0ucHJvamVjdERlc2NyaXB0aW9uVGV4dDtcblxuICAgICAgICAgICAgLy8gY29udGFjdFxuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTcsIHBvc0VuZFkobGFzdFByb2plY3REZXNjcmlwdGlvbikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dCh0ZWxsTWUsIHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDkgKiBzLCBsaW5lSGVpZ2h0OiAwLjEzICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgIHNldFNpemVYKHRlbGxNZSwgMC43ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NYKHRlbGxNZSwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kodGVsbE1lLCBwb3NZKHNlY3Rpb25MaW5lNykgKyAwLjQgKiBzKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KG9uZUNvbnZlcnNhdGlvbiwgc3ViR3JheVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1gob25lQ29udmVyc2F0aW9uLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShvbmVDb252ZXJzYXRpb24sIHBvc0VuZFkodGVsbE1lKSArIDAuMDE2ICogcyk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgoYmlnS29yZSwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKGJpZ0tvcmUsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGJpZ0tvcmUsIHBvc0VuZFkob25lQ29udmVyc2F0aW9uKSArIDAuNSAqIHMpO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5rVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogbWV0YWwsIGZvbnRTaXplOiAwLjA4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGVtYWlsLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChlbWFpbCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koZW1haWwsIHBvc0VuZFkoYmlnS29yZSkgKyAwLjEgKiBzKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGxpbmtlZEluLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChsaW5rZWRJbiwgcG9zRW5kWChlbWFpbCkgKyAwLjA4ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NZKGxpbmtlZEluLCBwb3NFbmRZKGJpZ0tvcmUpICsgMC4xICogcyk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChwcml2YWN5UG9saWN5LCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChwcml2YWN5UG9saWN5LCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShwcml2YWN5UG9saWN5LCBwb3NFbmRZKGVtYWlsKSArIDAuMDggKiBzKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU4LCBwb3NFbmRZKHByaXZhY3lQb2xpY3kpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBib2R5LCBmYWRlSW5BbmltYXRpb24sIG1ldGFsLCBtaWRCcm93biB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNMYW5kc2NhcGUsIHB4LCBzdHlsZVRleHQsIFRleHREZXRhaWxzIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEZvclBhZ2UsIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nIH0gZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFNWRywgZmV0Y2hTVkcsIG1hcFJhbmdlIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTcXVhcmUge1xuICAgIG1ham9yOiBIVE1MRWxlbWVudDtcbiAgICBtaW5vcnM6IEhUTUxFbGVtZW50W107XG59XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxDb250YWluZXIpO1xuKHNjcm9sbENvbnRhaW5lci5zdHlsZSBhcyBhbnkpLnNjcm9sbGJhckNvbG9yID0gYCR7bWlkQnJvd259ICR7bWV0YWx9NTVgO1xuXG5zY3JvbGxDb250YWluZXIub253aGVlbCA9IChlKSA9PiB7XG4gICAgaWYgKGlzTGFuZHNjYXBlKCkgJiYgIWUuc2hpZnRLZXkpIHNjcm9sbENvbnRhaW5lci5zY3JvbGxCeSh7IGxlZnQ6IGUuZGVsdGFZIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwoKSB7XG4gICAgY29uc3QgaGVhZGVyQmFySGVpZ2h0ID0gZ2V0SGVhZGVyQmFySGVpZ2h0KCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcHgoaW5uZXJXaWR0aCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHB4KGlubmVySGVpZ2h0IC0gaGVhZGVyQmFySGVpZ2h0KTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUubGVmdCA9IHB4KDApO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS50b3AgPSBweChoZWFkZXJCYXJIZWlnaHQpO1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPSAwO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyQmFySGVpZ2h0ID0gKCkgPT4ge1xuICAgIGlmIChpc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgIHJldHVybiBpbm5lcldpZHRoICogMC4wODtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW5uZXJXaWR0aCAqIDAuMjtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsUGFkZGluZygpIHtcbiAgICBjb25zdCBzY3JvbGxQYWRkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JvbGxQYWRkaW5nLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbFBhZGRpbmcuc3R5bGUud2lkdGggPSBweCgxKTsgLy8gYW55IG5vbnplcm8gdGhpY2tuZXNzIGlzIGVub3VnaCB0byBleHRlbmQgc2Nyb2xsQ29udGFpbmVyXG4gICAgc2Nyb2xsUGFkZGluZy5zdHlsZS5oZWlnaHQgPSBweCgxKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxQYWRkaW5nKTtcbiAgICByZXR1cm4gc2Nyb2xsUGFkZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbEltYWdlKHNyYzogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgY29uc3Qgc2Nyb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNjcm9sbEltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbEltYWdlLnNyYyA9IHNyYztcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5hbmltYXRpb24gPSBmYWRlSW5BbmltYXRpb24oKTtcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nKHNjcm9sbEltYWdlKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxJbWFnZSk7XG4gICAgcmV0dXJuIHNjcm9sbEltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsU3ZnKHNyYzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3ZnID0gY3JlYXRlRWxlbWVudFNWRyhcInN2Z1wiKTtcbiAgICBzY3JvbGxTdmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsU3ZnLnN0eWxlLmFuaW1hdGlvbiA9IGZhZGVJbkFuaW1hdGlvbigpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IGZldGNoU1ZHKHNyYyk7XG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBmZXRjaGVkLmF0dHJpYnV0ZXMpIHNjcm9sbFN2Zy5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICAgICAgd2hpbGUgKGZldGNoZWQuZmlyc3RDaGlsZCkgc2Nyb2xsU3ZnLmFwcGVuZENoaWxkKGZldGNoZWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZldGNoQ29udGVudCgpO1xuXG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsU3ZnKTtcbiAgICByZXR1cm4gc2Nyb2xsU3ZnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGV4dCh0ZXh0OiBzdHJpbmcsIHBhcmVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzY3JvbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxUZXh0LmlubmVySFRNTCA9IHRleHQ7IC8vIFpaWlogaW5uZXJUZXh0IHdvdWxkIGJlIGJldHRlclxuICAgIHNjcm9sbFRleHQuc3R5bGUuYW5pbWF0aW9uID0gZmFkZUluQW5pbWF0aW9uKCk7XG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHBhcmVudCwgc2Nyb2xsVGV4dCk7XG4gICAgcmV0dXJuIHNjcm9sbFRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiBhZGRUZXh0KHRleHQsIHNjcm9sbENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0U3F1YXJlKG1ham9yVGV4dDogc3RyaW5nLCAuLi5taW5vclRleHRzOiBzdHJpbmdbXSk6IFRleHRTcXVhcmUge1xuICAgIGNvbnN0IG1ham9yID0gYWRkU2Nyb2xsVGV4dChtYWpvclRleHQpO1xuICAgIGNvbnN0IG1pbm9ycyA9IG1pbm9yVGV4dHMubWFwKGFkZFNjcm9sbFRleHQpO1xuICAgIHJldHVybiB7IG1ham9yLCBtaW5vcnMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlU2Nyb2xsVGV4dFNxdWFyZSh7IG1ham9yLCBtaW5vcnMgfTogVGV4dFNxdWFyZSwgbWFqb3JUZXh0RGV0YWlsczogVGV4dERldGFpbHMsIG1pbm9yVGV4dERldGFpbHM6IFRleHREZXRhaWxzKSB7XG4gICAgc3R5bGVUZXh0KG1ham9yLCBtYWpvclRleHREZXRhaWxzKTtcbiAgICBmb3IgKGNvbnN0IG1pbm9yIG9mIG1pbm9ycykgc3R5bGVUZXh0KG1pbm9yLCBtaW5vclRleHREZXRhaWxzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICAgIHJldHVybiBpbm5lcldpZHRoO1xuICAgIC8vIGNvbnN0IFNDUk9MTF9XSURUSF9QUk9QT1JUSU9OID0gMTtcbiAgICAvLyByZXR1cm4gaW5uZXJXaWR0aCAqIFNDUk9MTF9XSURUSF9QUk9QT1JUSU9OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyV2l0aGluU2Nyb2xsWChlbGVtZW50OiBIVE1MRWxlbWVudCB8IFNWR1NWR0VsZW1lbnQsIHNjYWxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICBjb25zdCB3aWR0aCA9IHMgKiBzY2FsZTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gcHgod2lkdGgpO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KChzIC0gd2lkdGgpIC8gMik7XG59XG4iLCJleHBvcnQgY2xhc3MgU2lnbmFsIHtcclxuICAgIHN1YnNjcmliZXJzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xyXG5cclxuICAgIHN1YnNjcmliZSA9IChzdWJzY3JpYmVyOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHMpID0+IHMoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVuc3Vic2NyaWJlID0gKHN1YnNjcmliZXI6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcclxuICAgIH07XHJcblxyXG4gICAgdW5zdWJzY3JpYmVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5jbGVhcigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdChmdW5jOiAoKSA9PiB2b2lkLCBvYnNlcnZlZFNpZ25hbHM6IFNpZ25hbFtdKSB7XHJcbiAgICBvYnNlcnZlZFNpZ25hbHMuZm9yRWFjaCgobykgPT4gby5zdWJzY3JpYmUoZnVuYykpO1xyXG4gICAgZnVuYygpO1xyXG59XHJcbiIsImltcG9ydCB7IGVmZmVjdCwgU2lnbmFsIH0gZnJvbSBcIi4vc2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaW5nIHtcclxuICAgIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICB0YXJnZXQ6IG51bWJlcjtcclxuICAgIHZlbG9jaXR5ID0gMDtcclxuICAgIGRhbXBpbmcgPSAwO1xyXG4gICAgc3RpZmZuZXNzID0gMDtcclxuICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgb25SZXN0ID0gKCkgPT4ge307XHJcbiAgICBvblVucmVzdCA9ICgpID0+IHt9O1xyXG5cclxuICAgIC8vIG14JycgLSBieCcgPSBreFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGluaXRpYWxWYWx1ZTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aWNrKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBhY2NlbGVyYXRpb24gPSB0aGlzLnN0aWZmbmVzcyAqICh0aGlzLnRhcmdldCAtIHRoaXMucG9zaXRpb24pIC0gdGhpcy5kYW1waW5nICogdGhpcy52ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ICs9IGFjY2VsZXJhdGlvbiAqIGR0O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gKz0gdGhpcy52ZWxvY2l0eSAqIGR0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0aWZmbmVzc0NyaXRpY2FsKHN0aWZmbmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGlmZm5lc3MgPSBzdGlmZm5lc3M7XHJcbiAgICAgICAgdGhpcy5kYW1waW5nID0gTWF0aC5zcXJ0KDQgKiBzdGlmZm5lc3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UgPSAwLjAxO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVTcHJpbmcoc3ByaW5nOiBTcHJpbmcsIHNpZ25hbDogU2lnbmFsKSB7XHJcbiAgICBpZiAoc3ByaW5nLmlzQW5pbWF0aW5nKSByZXR1cm47XHJcblxyXG4gICAgc3ByaW5nLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgIHNwcmluZy5vblVucmVzdCgpO1xyXG5cclxuICAgIGxldCBsYXN0TWlsbGlzID0gMDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaXJzdEZyYW1lKTtcclxuICAgIGZ1bmN0aW9uIGZpcnN0RnJhbWUobWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBsYXN0TWlsbGlzID0gbWlsbGlzO1xyXG4gICAgICAgIHRpY2tTcHJpbmcobWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0aWNrU3ByaW5nKG1pbGxpczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IG1pbGxpcyAtIGxhc3RNaWxsaXM7XHJcbiAgICAgICAgbGFzdE1pbGxpcyA9IG1pbGxpcztcclxuXHJcbiAgICAgICAgc3ByaW5nLnRpY2soc3RlcCAvIDEwMDApO1xyXG4gICAgICAgIHNpZ25hbC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHNwcmluZy50YXJnZXQgLSBzcHJpbmcucG9zaXRpb24pIDwgREVGQVVMVF9BTklNQVRJT05fVE9MRVJBTkNFICYmIE1hdGguYWJzKHNwcmluZy52ZWxvY2l0eSkgPCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgc3ByaW5nLnBvc2l0aW9uID0gc3ByaW5nLnRhcmdldDtcclxuICAgICAgICAgICAgc3ByaW5nLnZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgc3ByaW5nLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNpZ25hbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgc3ByaW5nLm9uUmVzdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGlja1NwcmluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmltYXRlV2l0aFNwcmluZyhzdGlmZm5lc3M6IG51bWJlciwgb3ZlclRpbWU6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwcmluZyA9IG5ldyBTcHJpbmcoMCk7XHJcbiAgICAgICAgY29uc3Qgc3ByaW5nU2lnID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgICAgIHNwcmluZy5zZXRTdGlmZm5lc3NDcml0aWNhbChzdGlmZm5lc3MpO1xyXG4gICAgICAgIHNwcmluZy50YXJnZXQgPSAxO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4gb3ZlclRpbWUoc3ByaW5nLnBvc2l0aW9uKTtcclxuICAgICAgICBzcHJpbmcub25SZXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzcHJpbmdTaWcudW5zdWJzY3JpYmUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBlZmZlY3QoYW5pbWF0ZSwgW3NwcmluZ1NpZ10pO1xyXG5cclxuICAgICAgICBhbmltYXRlU3ByaW5nKHNwcmluZywgc3ByaW5nU2lnKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzbGVlcCA9IChkZWxheTogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3BhY2VUb0ZpbGUoczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShcIiBcIiwgXCItXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFNWRzxLIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KHF1YWxpZmllZE5hbWU6IEspIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgcXVhbGlmaWVkTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmxhY2VkPFQsIFdpdGhpbj4oaXRlbXM6IFRbXSwgd2l0aGluOiBXaXRoaW4pIHtcbiAgICBjb25zdCBpdGVtc0ludGVybGFjZWQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaXRlbXNJbnRlcmxhY2VkLnB1c2goaXRlbSk7XG4gICAgICAgIGl0ZW1zSW50ZXJsYWNlZC5wdXNoKHdpdGhpbik7XG4gICAgfVxuICAgIGl0ZW1zSW50ZXJsYWNlZC5wb3AoKTtcbiAgICByZXR1cm4gaXRlbXNJbnRlcmxhY2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwUmFuZ2UobjogbnVtYmVyLCBzdGFydDE6IG51bWJlciwgc3RvcDE6IG51bWJlciwgc3RhcnQyOiBudW1iZXIsIHN0b3AyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKChuIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpICogKHN0b3AyIC0gc3RhcnQyKSArIHN0YXJ0Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yT25Ib3ZlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgY29sb3I6IHN0cmluZywgaG92ZXJDb2xvcjogc3RyaW5nKSB7XG4gICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIGVsZW1lbnQub25tb3VzZW92ZXIgPSAoKSA9PiAoZWxlbWVudC5zdHlsZS5jb2xvciA9IGhvdmVyQ29sb3IpO1xuICAgIGVsZW1lbnQub25tb3VzZWxlYXZlID0gKCkgPT4gKGVsZW1lbnQuc3R5bGUuY29sb3IgPSBjb2xvcik7XG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJjb2xvciAwLjJzIGVhc2Utb3V0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNWRyhmZXRjaFN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFN0cmluZyk7XG4gICAgY29uc3Qgc3ZnQ29udGVudCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdmdDb250ZW50LCBcImltYWdlL3N2Zyt4bWxcIikuZG9jdW1lbnRFbGVtZW50IGFzIHVua25vd24gYXMgU1ZHU1ZHRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkU1ZHKHN2ZzogU1ZHU1ZHRWxlbWVudCwgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBzdmcuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIFNWR0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJY29uU1ZHKGxvY2FsU2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJzdmdcIik7XG4gICAgY29uc3QgcGFkID0gNDtcbiAgICBpY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGljb24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAkey1wYWR9ICR7LXBhZH0gJHtsb2NhbFNpemUgKyAyICogcGFkfSAke2xvY2FsU2l6ZSArIDIgKiBwYWR9YCk7XG4gICAgcmV0dXJuIGljb247XG59XG5cbmV4cG9ydCBjb25zdCBtYWtlTGluZSA9IChzdmc6IFNWR1NWR0VsZW1lbnQsIHN0cm9rZVdpZHRoOiBudW1iZXIpID0+ICgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gY3JlYXRlRWxlbWVudFNWRyhcImxpbmVcIik7XG4gICAgc2V0QXR0cmlidXRlcyhsaW5lLCB7IFwic3Ryb2tlLXdpZHRoXCI6IHN0cm9rZVdpZHRoIH0pO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICByZXR1cm4gbGluZTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlUG9seWxpbmUgPSAoc3ZnOiBTVkdTVkdFbGVtZW50LCBzdHJva2VXaWR0aDogbnVtYmVyKSA9PiAoKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJwb2x5bGluZVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIHsgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGgsIGZpbGw6IFwibm9uZVwiIH0pO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICByZXR1cm4gbGluZTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkSG9tZVBhZ2UsIGFkZE1lbnVCdXR0b24sIGFkZE5hdkJhciB9IGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcblxuKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIyMDAgMTBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIzMDAgMjBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI0MDAgMzBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI1MDAgNDBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI2MDAgNTBweCBSb2JvdG9cIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIyMDAgMjBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIzMDAgMzBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI0MDAgNDBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI1MDAgNTBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI2MDAgNjBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgXSk7XG4gICAgYXdhaXQgZG9jdW1lbnQuZm9udHMucmVhZHlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlcXVlc3RBbmltYXRpb25GcmFtZSk7XG5cbiAgICBhZGROYXZCYXIoKTtcbiAgICBhZGRNZW51QnV0dG9uKClcbiAgICBhZGRIb21lUGFnZSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==