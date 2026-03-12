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
/* harmony export */   centerElementX: () => (/* binding */ centerElementX),
/* harmony export */   centerElementY: () => (/* binding */ centerElementY),
/* harmony export */   centerWithGapY: () => (/* binding */ centerWithGapY),
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
    setSizeY(image, x * image.naturalHeight / image.naturalWidth);
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
    setSizeX(image, y * image.naturalWidth / image.naturalHeight);
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
function centerElementX(element) {
    element.style.left = px(innerWidth / 2 - sizeX(element) / 2);
}
function centerElementY(element) {
    element.style.top = px(innerHeight / 2 - sizeY(element) / 2);
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
/* harmony export */   addNavBar: () => (/* binding */ addNavBar)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout */ "./src/layout.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page */ "./src/page.ts");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scroll */ "./src/scroll.ts");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signal */ "./src/signal.ts");
/* harmony import */ var _spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spring */ "./src/spring.ts");






const T = -10000;
function layoutSectionLine(sectionLine, y) {
    const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeY)(sectionLine, 0.001 * s);
    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(sectionLine, innerWidth);
    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(sectionLine, y);
}
const navItemJumpElements = {};
function giveHover(element, enterColor, leaveColor) {
    element.style.cursor = "pointer";
    element.style.transition = "color 0.2s";
    element.onmouseenter = () => (element.style.color = enterColor);
    element.onmouseleave = () => (element.style.color = leaveColor);
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
    function addNavItem(navItemName, k) {
        const navItem = document.createElement("p");
        navItem.style.whiteSpace = "nowrap";
        navItem.innerText = navItemName;
        navItem.onclick = () => {
            var _a;
            (_a = navItemJumpElements[k]) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        giveHover(navItem, _constants__WEBPACK_IMPORTED_MODULE_0__.metal, _constants__WEBPACK_IMPORTED_MODULE_0__.white);
        document.body.appendChild(navItem);
        return navItem;
    }
    const about = addNavItem("ABOUT", "about");
    const services = addNavItem("SERVICES", "services");
    const bio = addNavItem("BIO", "bio");
    const recentProjects = addNavItem("RECENT PROJECTS", "recentProjects");
    const contact = addNavItem("CONTACT", "contact");
    const navItems = [about, services, bio, recentProjects, contact];
    (0,_signal__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
        if ((0,_layout__WEBPACK_IMPORTED_MODULE_1__.isLandscape)()) {
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
            const margin = 0.05 * s; // ZZZZ take out
            const navBottom = 0.05 * s;
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(koreLogo, 0.08 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(koreLogo, navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(koreLogo) - 0.002 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(koreLogo, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(tagline, 0.17 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(tagline, navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(tagline));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(tagline, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndX)(koreLogo) + 0.018 * s);
            const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, fontFamily: "Roboto" };
            for (let i = navItems.length - 1; i >= 0; i--) {
                const navItem = navItems[i];
                const nextNavItem = navItems[i + 1];
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(navItem, navItemTextDetails);
                if (nextNavItem)
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(navItem, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posX)(nextNavItem) - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(navItem) - 0.02 * s);
                else
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(navItem, s - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(contact) - 0.07 * s);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(navItem, navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(navItem));
            }
        }
        else {
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
            const margin = 0.09 * s; // ZZZZ take out
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(koreLogo, 0.3 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(koreLogo, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(koreLogo, 0.04 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(tagline, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(tagline, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(tagline, T);
            const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, fontFamily: "Roboto" };
            for (let i = navItems.length - 1; i >= 0; i--) {
                const navItem = navItems[i];
                const nextNavItem = navItems[i + 1];
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
        // sectionLine.style.background = "#111111";
        sectionLine.style.background = "red";
        (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(_scroll__WEBPACK_IMPORTED_MODULE_3__.scrollContainer, sectionLine);
        return sectionLine;
    }
    const headlineText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("PROTECT YOURSELF FROM PROJECT HAZARDS.");
    const travelingThePath = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Travelling the path unguided can cost you.");
    const logo = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollImage)("logo.svg");
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
    const aboutName = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("SCOTT G. GRIFFIN");
    navItemJumpElements.about = aboutName;
    const aboutDescription = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Founder<br><br>With 37 years in the trenches of broadcast, AV, and media systems integration, I’ve built my career protecting clients from being steamrolled by complexity, bad planning, and unrealistic promises.<br><br>I’m not here to play nice — I’m here to make sure things get done right.<br><br>As a Subject Matter Expert and Owner’s Rep, I bring clear-eyed strategy, engineering leadership, and a no-BS approach to complex projects. From early-stage visioning through final implementation, I make sure my clients are fully informed and stay in control — without being buried in technical noise or vendor spin.<br><br>I’ve led high-profile projects for the NBA, WWE, Univision, Disney, and more. My background includes running a successful integration firm, managing engineering teams of 50+, and overseeing some of the largest media facility builds of the last 30 years. Whether we’re talking network ops, cloud workflows, post-production, or studio ops workflows — I’ve done it, and I bring the scars (and lessons) with me.<br><br>My job is simple: make sure my clients are protected, respected, and have delivered exactly what they need—nothing more, and absolutely nothing less.");
    const portrait = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollImage)("papa.png");
    const sectionLine2 = addSectionLine();
    const feelConfident = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("FEEL CONFIDENT KNOWING YOU’VE GOT IT ALL COVERED.");
    navItemJumpElements.services = feelConfident;
    const springSig = new _signal__WEBPACK_IMPORTED_MODULE_4__.Signal();
    function addSkillTile(title, description, x, y) {
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.background = _constants__WEBPACK_IMPORTED_MODULE_0__.metal;
        container.style.overflow = "hidden";
        (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(_scroll__WEBPACK_IMPORTED_MODULE_3__.scrollContainer, container);
        const titleText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addText)(title, container);
        const descriptionText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addText)(description, container);
        descriptionText.style.opacity = "0";
        descriptionText.style.transition = "opacity 0.25s";
        const springX = new _spring__WEBPACK_IMPORTED_MODULE_5__.Spring(x);
        const springY = new _spring__WEBPACK_IMPORTED_MODULE_5__.Spring(y);
        const springSizeY = new _spring__WEBPACK_IMPORTED_MODULE_5__.Spring(1);
        springX.setStiffnessCritical(200);
        springY.setStiffnessCritical(200);
        springSizeY.setStiffnessCritical(200);
        function tileAt(x, y) {
            return skillTiles.find((s) => s.springX.target === x && s.springY.target === y);
        }
        function flip(spring1, spring2) {
            const s = spring1.target;
            spring1.target = spring2.target;
            spring2.target = s;
        }
        const onClick = () => {
            if (springY.target === holeSkillTile.springY.target) {
                flip(tileAt(holeSkillTile.springX.target, 1 - holeSkillTile.springY.target).springY, //
                holeSkillTile.springY);
            }
            const direcionX = springX.target - holeSkillTile.springX.target < 0 ? -1 : 1;
            for (let x = holeSkillTile.springX.target; x !== springX.target; x += direcionX) {
                flip(tileAt(x, holeSkillTile.springY.target).springX, //
                tileAt(x + direcionX, holeSkillTile.springY.target).springX);
            }
            if (springY.target === 1) {
                flip(tileAt(springX.target, 1 - springY.target).springY, //
                springY);
            }
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
                (0,_spring__WEBPACK_IMPORTED_MODULE_5__.animateSpring)(skillTile.springX, skillTile.springSig);
                (0,_spring__WEBPACK_IMPORTED_MODULE_5__.animateSpring)(skillTile.springY, skillTile.springSig);
                (0,_spring__WEBPACK_IMPORTED_MODULE_5__.animateSpring)(skillTile.springSizeY, skillTile.springSig);
            }
            descriptionText.style.opacity = "1";
        };
        container.onclick = onClick;
        container.style.cursor = "pointer";
        return { container, titleText, descriptionText, springX, springY, springSizeY, springSig };
    }
    const holeSkillTile = addSkillTile("", "", 2, 1);
    holeSkillTile.container.style.background = "#00000033";
    const skillTiles = [
        addSkillTile("Owner<br>Representation", "KORE serves as your eyes, ears, and advocates, providing concierge-level guidance through every step of your project. We keep vendors and contractors honest, making sure nothing slips through the cracks. We begin by aligning all stakeholders early on, then defend your position throughout the process.", 0, 0),
        addSkillTile("Basis of<br>Design", "KORE listens before we advise. We review your current operation, future plans, and overall goals. Your new space and systems must gracefully support operational needs and future growth. Deep expertise in systems planning and infrastructure strategy allows KORE to translate vision into a comprehensive BoD.", 1, 0),
        addSkillTile("Proof of<br>Concept", "KORE knows you only get one chance to build a new facility right. You deserve to see ideas thoroughly tested and validated before you commit. We vet technology, vendors, and assurances against real-world criteria. This brings clarity to your workflow and puts measurable accountability behind every promise.", 2, 0),
        addSkillTile("Project Team<br>Assembly", "KORE brings together the right team for your project. We draw from a network of trusted experts in design, engineering, installation, and more. These are proven pros who’ve shown they can execute under pressure without missing a beat. That translates to performance, not excuses.", 3, 0),
        addSkillTile("Punch List<br>Management", "KORE tracks every detail, from building construction to systems integration to ongoing services. It’s critical to make sure all the tech works, all promises are fulfilled. Nothing is signed-off until it’s tested, verified, and right. Relentless follow-through takes extra effort, but we stubbornly refuse to compromise.", 4, 0),
        addSkillTile("Needs<br>Analysis", "KORE guides you to uncover and understand exactly what’s needed, what's possible, and what’s worth pursuing. Ask anyone who’s been through this process – early-phase project intelligence makes all the difference. Make smarter, faster decisions with clarity and confidence, and avoid costly mistakes.", 0, 1),
        addSkillTile("Budgeting &<br>Estimating", "KORE offers a budgeting process shaped by real-world engineering experience. We provide early cost models, detailed projections, and phased investment strategies to help you stay informed, in control, and within budget. Our early work helps you to minimize scope creep and avoid financial surprises.", 1, 1),
        holeSkillTile,
        addSkillTile("RFP Creation<br>& Administration", "KORE captures the project objectives, outlines the scope, defines the qualifications, and structures the response required of every project solicitation that we produce. We then structure the bid evaluation process and guide you through the critical decision-making, leaving nothing to chance.", 3, 1),
        addSkillTile("Integrator<br>Support", "KORE partners with your integrator to lead the process, protect your vision, and make sure every workflow is delivered exactly as designed. With integration leadership and oversight rooted in decades of experience, we preserve the integrity of your design. We don’t accept compromises. Neither should you.", 4, 1),
    ];
    const skillTileCountX = Math.max(...skillTiles.map((s) => s.springX.target)) + 1;
    skillTiles[2].container.click();
    const sectionLine3 = addSectionLine();
    const bigNames = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("BIG NAMES<br>YOU KNOW");
    const hasTackled = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("<strong>Scott Griffin</strong> has tackled some of the most complex projects for some of the largest media companies in the world.<br>He has seen it all, and you can tap into that experience.");
    const bigNameClients = [
        ["ABS/CBN", "National Geographic"],
        ["Blackrock", "Northwestern University"],
        ["Blackstone", "Paramount/CBS"],
        ["CBS", "MTV/Showtime"],
        ["CNN", "Penn State University"],
        ["Disney/ABC/ESPN", "Prudential"],
        ["Fox News", "Sirius Satellite Radio"],
        ["Madison Square Garden", "Syracuse University"],
        ["MLB", "Televisa-Univision"],
        ["MSNBC", "The New York Times"],
        ["NBA", "WWE"],
        ["NBCU/CNBC"],
    ];
    const bigNameClientTexts = bigNameClients.map((bigNameClientsRow) => bigNameClientsRow.map((bigNameClient) => (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)(bigNameClient)));
    const sectionLine4 = addSectionLine();
    const griffinBlackWhite = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollImage)("griffin-black-white.png");
    const griffinBlackWhiteText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("I’ve been in this industry for more than 35 years, and I can’t think of one client who was able to successfully navigate the gauntlet that is a large media facility project without the support of an experienced, knowledgeable, and aggressive project facilitator.");
    const sectionLine5 = addSectionLine();
    // bio
    const bioHeader = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("HOW WE<br>GOT HERE");
    navItemJumpElements.bio = bioHeader;
    const bioText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("I’ve always focused on the conceptualization and implementation of advanced technology solutions for facility and event systems integration. Along the way, that’s meant serving as design engineer, project manager, sales engineer, planning consultant, business builder/owner, and team leader.<br><br>It all started in technical theater, where I worked as a master electrician, lighting designer, sound designer, and front-of-house sound engineer in summer stock, touring, and off-Broadway theater. Following several years of freelance theatrical and concert technical support, I landed at AF Associates, a broadcast systems integrator.<br><br>After working on systems engineering efforts for NBC’s Today Show, CNBC, and USA Network, I moved to Sony Systems Integration. There, I oversaw design/builds for the Tribune Station Group and supported CBS Broadcast Operations & Engineering<br><br>At this point, I teamed up with two partners to launch The Systems Group. TSG specialized in large-scale, fast-track systems integration projects for the broadcast industry. During our 20-year run, we designed and built facilities for Serious Satellite Radio, MTV Networks, Syracuse University Newhouse, NFL Films Audio, NBCU, and Corus Entertainment, plus 200+ systems integration projects worldwide.<br><br>When TSG was acquired by Diversified in 2016, I established a small studio within the larger corporation, which allowed me to focus on critical early-stage project conceptualization, planning, and budgeting. Throughout those years, I was able to work shoulder to shoulder with some of the best and brightest across a wide range of disciplines in the media and entertainment industry. And the rest, as they say, is history.<br><br>Today, KORE offers a radically streamlined way to leverage a career’s worth of expertise, experience, and extensive industry relationships to help make sure your next project runs smoothly from planning to acceptance.<br><br>I hold a Bachelor of Science in Electrical Engineering from Penn State University, and am a member of SMPTE, AES, and SVG. I’m also kind to animals.");
    const sectionLine6 = addSectionLine();
    // recent projects
    const recentProjectHeader = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("RECENT<br>PROJECTS");
    navItemJumpElements.recentProjects = recentProjectHeader;
    function addProjectPair(projectName, projectDescription) {
        const projectNameText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)(projectName);
        const projectDescriptionText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)(projectDescription);
        return { projectNameText, projectDescriptionText };
    }
    const projects = [addProjectPair("NBA Entertainment", "Architectural planning and budgeting for new content operations center, replay operations center, and expansion of the NBA Network."), addProjectPair("Televisa/Univision Network", "System conceptualization, applications engineering, project budgeting, and account representation for the network operations center."), addProjectPair("Western Kentucky University", "PBS and NPR stations, College of Communications production and post facility, including ties to campus sports and presentation venues, development of a complete system design for three control rooms, two TV studios, four radio studios, and post-production operations."), addProjectPair("World Wrestling Entertainment", "New HQ digital media facility design and budgeting for production, post, transmission, and event coordination, plus formal analysis for Phase 2 workflow optimization and orchestration layer."), addProjectPair("Disney/Galaxy Consolidation", "The largest network operations center facility ever built in the US. It includes ABC Network, WABC TV, ESPN NY, Marvel Entertainment, and Disney Screening Theater. Scott oversaw contract administration across the entire project.")];
    // contact
    const sectionLine7 = addSectionLine();
    const tellMe = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Tell me about your project.");
    navItemJumpElements.contact = tellMe;
    const oneConversation = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("One conversation won’t cost you anything. Not having one might.");
    const bigKore = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollImage)("big-kore.svg");
    const email = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Email");
    giveHover(email, _constants__WEBPACK_IMPORTED_MODULE_0__.white, _constants__WEBPACK_IMPORTED_MODULE_0__.metal);
    email.onclick = () => window.location.assign("mailto:lairofthegriffin@gmail.com");
    const linkedIn = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("LinkedIn");
    giveHover(linkedIn, _constants__WEBPACK_IMPORTED_MODULE_0__.white, _constants__WEBPACK_IMPORTED_MODULE_0__.metal);
    linkedIn.style.cursor = "pointer";
    linkedIn.onclick = () => {
        window.open("https://www.linkedin.com/in/sggriffin", "_blank");
    };
    const privacyPolicy = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Privacy Policy © 2026 KORE SME LLC");
    const sectionLine8 = addSectionLine();
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.registerUpdateLayout)(() => {
        if ((0,_layout__WEBPACK_IMPORTED_MODULE_1__.isLandscape)()) {
            (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.resizeScrollContainerFull)();
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
            const margin = 0.05 * s;
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
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(feelConfident, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine2) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(feelConfident, margin);
            springSig.unsubscribeAll();
            (0,_signal__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
                for (const skillTile of skillTiles) {
                    const { container, titleText, descriptionText, springX, springY, springSizeY } = skillTile;
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(container, tileSize);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeY)(container, tileSize * springSizeY.position + (springSizeY.position - 1) * tileGap);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(container, tilePosX(springX.position));
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(container, tilePosY(springY.position));
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(titleText, { letterSpacing: 0.0004 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.018 * s, fontFamily: "Roboto" });
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(titleText, 0.08 * tileSize);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(titleText, tileSize / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(titleText) / 2);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(descriptionText, { letterSpacing: 0.0004 * s, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.011 * s, lineHeight: 0.016 * s, fontFamily: "Roboto" });
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(descriptionText, tileSize - 0.03 * s);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(descriptionText, 0.08 * tileSize);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(descriptionText, 0.11 * s);
                }
            }, [springSig]);
            layoutSectionLine(sectionLine3, tilePosY(1) + tileSize + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bigNames, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bigNames, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine3) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bigNames, margin - bigTextNudge);
            const hasTackedTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.014 * s, lineHeight: 0.025 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(hasTackled, hasTackedTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(hasTackled, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(bigNames));
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(hasTackled, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bigNames) + bigTextToSubtextGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(hasTackled, margin);
            const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1][0];
            const bigNamesTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.018 * s, fontFamily: "Roboto" };
            for (let y = 0; y < bigNameClientTexts.length; y++) {
                for (let x = 0; x < bigNameClientTexts[y].length; x++) {
                    const o = bigNameClientTexts[y][x];
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(o, bigNamesTextDetails);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(o, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigNames) + 0.01 * s + 0.032 * y * s);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(o, gutteredColumn + 0.22 * x * s);
                }
            }
            layoutSectionLine(sectionLine4, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(lastBigName) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(griffinBlackWhite, s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhite, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine4) + sectionLineGap);
            const griffinBlackWhiteTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.02 * s, lineHeight: 0.04 * s, fontFamily: "Merriweather" };
            griffinBlackWhiteText.style.fontStyle = "italic";
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(griffinBlackWhiteText, gutteredColumn);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhiteText, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(griffinBlackWhite) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhite) / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhiteText) / 2);
            layoutSectionLine(sectionLine5, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(griffinBlackWhite) + sectionLineGap);
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
            (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.resizeScrollContainerFull)();
            const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
            const margin = 0.09 * s;
            const fromTop = 0.031 * s;
            const betweenMargin = s - margin * 2;
            const bigTextTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.15 * s, lineHeight: 0.18 * s, fontFamily: "Roboto" };
            const subGrayTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.09 * s, lineHeight: 0.13 * s, fontFamily: "Roboto" };
            const bigTextNudge = 0.004 * s;
            const sectionLineGap = 0.085 * s;
            const bigTextToSubtextGap = 0.03 * s;
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(headlineText, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(headlineText, margin);
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
            const longParagraphsTextDetails = { letterSpacing: 0.001 * s, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.045 * s, lineHeight: 0.1 * s, fontFamily: "Merriweather" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(aboutDescription, longParagraphsTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(aboutDescription, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(aboutDescription, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(aboutDescription, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(aboutName) + 0.006 * s);
            layoutSectionLine(sectionLine2, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(aboutDescription) + sectionLineGap);
            // tiles
            const feelConfidentTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.028 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(feelConfident, feelConfidentTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(feelConfident, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(feelConfident, T);
            const scrollWidth = innerWidth - 2 * margin; // ZZZZ another scroll width?
            const tileGap = 0.015 * s;
            const tileSize = (scrollWidth - tileGap * (skillTileCountX - 1)) / skillTileCountX;
            function tilePosX(x) {
                return T;
                // return margin + (tileSize + tileGap) * x;
            }
            function tilePosY(y) {
                return T;
                // return (tileSize + tileGap) * y + posEndY(feelConfident) + 0.04 * s;
            }
            springSig.unsubscribeAll();
            (0,_signal__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
                for (const skillTile of skillTiles) {
                    const { container, titleText, descriptionText, springX, springY, springSizeY } = skillTile;
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(container, tileSize);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeY)(container, tileSize * springSizeY.position + (springSizeY.position - 1) * tileGap);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(container, tilePosX(springX.position));
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(container, tilePosY(springY.position));
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(titleText, { letterSpacing: 0.0004 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.018 * s, fontFamily: "Roboto" });
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(titleText, 0.08 * tileSize);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(titleText, tileSize / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(titleText) / 2);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(descriptionText, { letterSpacing: 0.0004 * s, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.011 * s, lineHeight: 0.016 * s, fontFamily: "Roboto" });
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(descriptionText, tileSize - 0.03 * s);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(descriptionText, 0.08 * tileSize);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(descriptionText, 0.11 * s);
                }
            }, [springSig]);
            layoutSectionLine(sectionLine3, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bigNames, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bigNames, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bigNames, T);
            const hasTackedTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.014 * s, lineHeight: 0.025 * s, fontFamily: "Roboto" };
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(hasTackled, hasTackedTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(hasTackled, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(bigNames) - 0.025 * s);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(hasTackled, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(hasTackled, T);
            const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1][0];
            const bigNamesTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.018 * s, fontFamily: "Roboto" };
            for (let y = 0; y < bigNameClientTexts.length; y++) {
                for (let x = 0; x < bigNameClientTexts[y].length; x++) {
                    const o = bigNameClientTexts[y][x];
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(o, bigNamesTextDetails);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(o, T);
                    (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(o, T);
                }
            }
            layoutSectionLine(sectionLine4, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(lastBigName) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(griffinBlackWhite, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhite, T);
            const griffinBlackWhiteTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.02 * s, lineHeight: 0.04 * s, fontFamily: "Merriweather" };
            griffinBlackWhiteText.style.fontStyle = "italic";
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(griffinBlackWhiteText, T);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(griffinBlackWhiteText, T);
            layoutSectionLine(sectionLine5, T);
            // bio
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioHeader, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bioHeader, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bioHeader, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(sectionLine2) + sectionLineGap); // ZZZZ skipped a bunch
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioText, longParagraphsTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setSizeX)(bioText, betweenMargin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(bioText, margin);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosY)(bioText, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bioHeader) + bigTextToSubtextGap);
            layoutSectionLine(sectionLine6, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posEndY)(bioText) + sectionLineGap);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(recentProjectHeader, bigTextTextDetails);
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.setPosX)(recentProjectHeader, margin);
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
/* harmony export */   centerWithinScrollY: () => (/* binding */ centerWithinScrollY),
/* harmony export */   getHeaderBarHeight: () => (/* binding */ getHeaderBarHeight),
/* harmony export */   getScrollHeight: () => (/* binding */ getScrollHeight),
/* harmony export */   getScrollWidth: () => (/* binding */ getScrollWidth),
/* harmony export */   resizeScrollContainerFull: () => (/* binding */ resizeScrollContainerFull),
/* harmony export */   resizeScrollContainerLandscape: () => (/* binding */ resizeScrollContainerLandscape),
/* harmony export */   resizeScrollContainerPortrait: () => (/* binding */ resizeScrollContainerPortrait),
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
function resizeScrollContainerLandscape() {
    const scrollHeight = getScrollHeight();
    const scrollLeft = scrollHeight * 0.5;
    const underScrollContainer = (innerHeight - scrollHeight) / 2;
    scrollContainer.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(scrollHeight + underScrollContainer); // place scroll bar at bottom of page
    scrollContainer.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerWidth - scrollLeft);
    scrollContainer.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((innerHeight - scrollHeight) / 2);
    scrollContainer.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(scrollLeft);
    scrollContainer.style.overflowX = "scroll";
    scrollContainer.style.overflowY = "hidden";
    scrollContainer.scrollTop = 0;
}
function resizeScrollContainerPortrait() {
    const scrollWidth = getScrollWidth();
    const headerBarHeight = getHeaderBarHeight();
    scrollContainer.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(scrollWidth);
    scrollContainer.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerHeight - headerBarHeight);
    scrollContainer.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((innerWidth - scrollWidth) / 2);
    scrollContainer.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(headerBarHeight);
    scrollContainer.style.overflowX = "hidden";
    scrollContainer.style.overflowY = "scroll";
    scrollContainer.scrollLeft = 0;
}
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
        return (innerHeight - getScrollHeight()) / 2;
    }
    else {
        return innerHeight * 0.15;
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
function getScrollHeight() {
    return innerHeight * 0.7;
    // return 1.02 * innerHeight - 0.000485 * innerHeight * innerHeight;
    // return innerHeight;
}
function getScrollWidth() {
    return innerWidth;
    // const SCROLL_WIDTH_PROPORTION = 1;
    // return innerWidth * SCROLL_WIDTH_PROPORTION;
}
function centerWithinScrollY(element, scale) {
    const s = getScrollHeight();
    const height = s * scale;
    element.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(height);
    element.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((s - height) / 2);
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
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addHomePage)();
}))();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztLQUMvQyxDQUFDLENBQUM7SUFDSCxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSztJQUMxQixNQUFNLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXpDLHNEQUFTLEVBQUUsQ0FBQztJQUNaLHdEQUFXLEVBQUUsQ0FBQztBQUNsQixDQUFDLEVBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29yZS8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9wYWdlLnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvcGFnZXMvaG9tZS50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3Njcm9sbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NpZ25hbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NwcmluZy50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNMYW5kc2NhcGUgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCIuL3NpZ25hbFwiO1xuXG5leHBvcnQgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5leHBvcnQgY29uc3QgYm9keVNpZyA9IG5ldyBTaWduYWwoKTtcbndpbmRvdy5vbnJlc2l6ZSA9IGJvZHlTaWcudXBkYXRlO1xuXG5leHBvcnQgY29uc3QgbWlkQnJvd24gPSBcIiM2MDM5MTNcIjtcbmV4cG9ydCBjb25zdCBqZWFucyA9IFwicmdiKDM4LCA1MSwgODYpXCJcbmV4cG9ydCBjb25zdCBkZWVwQnJvd24gPSBcIiMzQzI0MTVcIjtcbmV4cG9ydCBjb25zdCBibGFjayA9IFwiIzAwMDAwMFwiO1xuZXhwb3J0IGNvbnN0IHdoaXRlID0gXCIjRkZGRkZGXCI7XG5leHBvcnQgY29uc3QgbWV0YWwgPSBcIiM2QzcxNzVcIjtcbmV4cG9ydCBjb25zdCB0aWxlQnJvd24gPSBcIiM2OTUwMzhcIjtcblxuZXhwb3J0IGNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9ICgpID0+IGBmYWRlSW4ke2lzTGFuZHNjYXBlKCkgPyBcIlhcIiA6IFwiWVwifSBlYXNlIDAuNnNgO1xuXG5leHBvcnQgY29uc3QgU0NST0xMX1RFWFRfV0lEVEhfSEVJR0hUX1BST1BPUlRJT04gPSAwLjk1O1xuIiwiaW1wb3J0IHsgaW50ZXJsYWNlZCB9IGZyb20gXCIuL3V0aWxcIjtcblxuaW50ZXJmYWNlIEVsZW1lbnRBbGlnbm1lbnQge1xuICAgIGVsZW1lbnQ6IEJveEVsZW1lbnQ7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dERldGFpbHMge1xuICAgIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgICBmb250V2VpZ2h0OiBudW1iZXI7XG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gICAgbGluZUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgQm94RWxlbWVudCA9IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHB4KHBpeGVsczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHBpeGVscyArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gYXhpc0FsaWduaW5nV2l0aEdhcHMoYXhpc1NpemU6IChlbGVtZW50OiBCb3hFbGVtZW50KSA9PiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGVsZW1lbnRPckdhcHM6IChCb3hFbGVtZW50IHwgbnVtYmVyKVtdKTogW0VsZW1lbnRBbGlnbm1lbnRbXSwgbnVtYmVyXSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRBbGlnbm1lbnRzID0gW107XG4gICAgICAgIGxldCBydW5uaW5nVG90YWwgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRPckdhcCBvZiBlbGVtZW50T3JHYXBzKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRBbGlnbm1lbnRzLnB1c2goeyBlbGVtZW50OiBlbGVtZW50T3JHYXAsIG9mZnNldDogcnVubmluZ1RvdGFsIH0pO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdUb3RhbCArPSBheGlzU2l6ZShlbGVtZW50T3JHYXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nVG90YWwgKz0gZWxlbWVudE9yR2FwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZWxlbWVudEFsaWdubWVudHMsIHJ1bm5pbmdUb3RhbF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdW5weCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZS5zbGljZSgwLCAtMikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvc1goZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIC8vIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0TGVmdCA6IHVucHgoZWxlbWVudC5zdHlsZS5sZWZ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvc1goZWxlbWVudDogQm94RWxlbWVudCwgeDogbnVtYmVyKSB7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcHgoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NZKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICAvLyByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0VG9wIDogdW5weChlbGVtZW50LnN0eWxlLnRvcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NFbmRYKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gcG9zWChlbGVtZW50KSArIHNpemVYKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9zWShlbGVtZW50OiBCb3hFbGVtZW50LCB5OiBudW1iZXIpIHtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHB4KHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zRW5kWShlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIHBvc1koZWxlbWVudCkgKyBzaXplWShlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVYKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICAvLyByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IGVsZW1lbnQuY2xpZW50V2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTaXplWChlbGVtZW50OiBCb3hFbGVtZW50LCB4OiBudW1iZXIpIHtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gcHgoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbWFnZVNpemVYKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCB4OiBudW1iZXIpIHtcbiAgICBzZXRTaXplWChpbWFnZSwgeClcbiAgICBzZXRTaXplWShpbWFnZSwgeCAqIGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5uYXR1cmFsV2lkdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXplWShlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgLy8gcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCA6IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2l6ZVkoZWxlbWVudDogQm94RWxlbWVudCwgeTogbnVtYmVyKSB7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBweCh5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEltYWdlU2l6ZVkoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIHk6IG51bWJlcikge1xuICAgIHNldFNpemVZKGltYWdlLCB5KVxuICAgIHNldFNpemVYKGltYWdlLCB5ICogIGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLm5hdHVyYWxIZWlnaHQpXG59XG5cbi8vIFpaWlogd2FudCBhIHNob3J0IGhhbmQgZm9yIGNvbW1vbiBzaW1wbGUgdXNlXG5leHBvcnQgY29uc3QgYWxpZ25pbmdXaXRoR2Fwc1ggPSBheGlzQWxpZ25pbmdXaXRoR2FwcyhzaXplWCk7XG5leHBvcnQgY29uc3QgYWxpZ25pbmdXaXRoR2Fwc1kgPSBheGlzQWxpZ25pbmdXaXRoR2FwcyhzaXplWSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmRzY2FwZSgpIHtcbiAgICByZXR1cm4gaW5uZXJXaWR0aCAvIGlubmVySGVpZ2h0ID4gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlcldpdGhHYXBZKGVsZW1lbnRzOiBIVE1MRWxlbWVudFtdLCBnYXA6IG51bWJlciwgY2VudGVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50c1dpdGhHYXBzID0gaW50ZXJsYWNlZChlbGVtZW50cywgZ2FwKTtcbiAgICBjb25zdCBbZWxlbWVudEFsaWdubWVudHMsIHRvdGFsSGVpZ2h0XSA9IGFsaWduaW5nV2l0aEdhcHNZKGVsZW1lbnRzV2l0aEdhcHMpO1xuXG4gICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIG9mZnNldCB9IG9mIGVsZW1lbnRBbGlnbm1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcHgob2Zmc2V0ICsgY2VudGVyIC0gdG90YWxIZWlnaHQgLyAyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJFbGVtZW50WChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KGlubmVyV2lkdGggLyAyIC0gc2l6ZVgoZWxlbWVudCkgLyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlckVsZW1lbnRZKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBweChpbm5lckhlaWdodCAvIDIgLSBzaXplWShlbGVtZW50KSAvIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVUZXh0KHNjcm9sbFRleHQ6IEhUTUxFbGVtZW50LCBzOiBUZXh0RGV0YWlscykge1xuICAgIHNjcm9sbFRleHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250RmFtaWx5ID0gcy5mb250RmFtaWx5O1xuICAgIHNjcm9sbFRleHQuc3R5bGUuZm9udFdlaWdodCA9IFwiXCIgKyBzLmZvbnRXZWlnaHQ7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250U2l6ZSA9IHB4KHMuZm9udFNpemUpO1xuICAgIHNjcm9sbFRleHQuc3R5bGUuY29sb3IgPSBzLmNvbG9yO1xuICAgIGlmIChzLmxldHRlclNwYWNpbmcpIHNjcm9sbFRleHQuc3R5bGUubGV0dGVyU3BhY2luZyA9IHB4KHMubGV0dGVyU3BhY2luZyk7XG4gICAgaWYgKHMubGluZUhlaWdodCkgc2Nyb2xsVGV4dC5zdHlsZS5saW5lSGVpZ2h0ID0gcHgocy5saW5lSGVpZ2h0KTtcbn1cbiIsImltcG9ydCB7IGJvZHlTaWcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRleHREZXRhaWxzIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBlZmZlY3QgfSBmcm9tIFwiLi9zaWduYWxcIjtcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY29uc3QgcGFnZUNsZWFudXBzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xuXG5jb25zdCBhd2FpdEJlZm9yZUxheW91dHMgPSBuZXcgU2V0PFByb21pc2U8dm9pZD4+KCk7XG5jb25zdCBiZWZvcmVMYXlvdXRzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gYXdhaXRMYXlvdXRGb3JJbWFnZUxvYWRpbmcoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBhd2FpdEJlZm9yZUxheW91dHMuYWRkKGltYWdlLmRlY29kZSgpKTtcbn1cblxuLy8gVE9ETyBncm9zc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaGhoKCkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKGF3YWl0QmVmb3JlTGF5b3V0cyk7XG4gICAgYXdhaXRCZWZvcmVMYXlvdXRzLmNsZWFyKCk7XG4gICAgYXdhaXQgc2xlZXAoMTApO1xuICAgIHJ1bkFsbEFuZENsZWFyKGJlZm9yZUxheW91dHMpO1xuICAgIGJvZHlTaWcudXBkYXRlKCk7IC8vIFRPRE8gZ3Jvc3Ncbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXBkYXRlTGF5b3V0KHVwZGF0ZUxheW91dDogKCkgPT4gdm9pZCkge1xuICAgIGF3YWl0IHdhaGhoKCk7XG4gICAgZWZmZWN0KHVwZGF0ZUxheW91dCwgW2JvZHlTaWddKTtcbiAgICBwYWdlQ2xlYW51cHMuYWRkKCgpID0+IGJvZHlTaWcudW5zdWJzY3JpYmUodXBkYXRlTGF5b3V0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZEZvclBhZ2UocGFyZW50OiBFbGVtZW50LCBjaGlsZDogRWxlbWVudCkge1xuICAgIGJlZm9yZUxheW91dHMuYWRkKCgpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgcGFnZUNsZWFudXBzLmFkZCgoKSA9PiBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTGFzdFBhZ2UoKSB7XG4gICAgcnVuQWxsQW5kQ2xlYXIocGFnZUNsZWFudXBzKTtcbn1cblxuZnVuY3Rpb24gcnVuQWxsQW5kQ2xlYXIoc2V0OiBTZXQ8KCkgPT4gdm9pZD4pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2V0KSBpdGVtKCk7XG4gICAgc2V0LmNsZWFyKCk7XG59XG4iLCJpbXBvcnQgeyBibGFjaywgYm9keVNpZywgbWV0YWwsIHRpbGVCcm93biwgd2hpdGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhbGlnbmluZ1dpdGhHYXBzWSwgaXNMYW5kc2NhcGUsIHBvc0VuZFgsIHBvc0VuZFksIHBvc1gsIHBvc1ksIHNldEltYWdlU2l6ZVgsIHNldEltYWdlU2l6ZVksIHNldFBvc1gsIHNldFBvc1ksIHNldFNpemVYLCBzZXRTaXplWSwgc2l6ZVgsIHNpemVZLCBzdHlsZVRleHQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEZvclBhZ2UsIHJlZ2lzdGVyVXBkYXRlTGF5b3V0IH0gZnJvbSBcIi4uL3BhZ2VcIjtcbmltcG9ydCB7IGFkZFNjcm9sbEltYWdlLCBhZGRTY3JvbGxTdmcsIGFkZFNjcm9sbFRleHQsIGFkZFRleHQsIGdldFNjcm9sbFdpZHRoLCByZXNpemVTY3JvbGxDb250YWluZXJGdWxsLCBzY3JvbGxDb250YWluZXIgfSBmcm9tIFwiLi4vc2Nyb2xsXCI7XG5pbXBvcnQgeyBlZmZlY3QsIFNpZ25hbCB9IGZyb20gXCIuLi9zaWduYWxcIjtcbmltcG9ydCB7IGFuaW1hdGVTcHJpbmcsIFNwcmluZyB9IGZyb20gXCIuLi9zcHJpbmdcIjtcblxuY29uc3QgVCA9IC0xMDAwMDtcblxuZnVuY3Rpb24gbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU6IEhUTUxFbGVtZW50LCB5OiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICBzZXRTaXplWShzZWN0aW9uTGluZSwgMC4wMDEgKiBzKTtcbiAgICBzZXRTaXplWChzZWN0aW9uTGluZSwgaW5uZXJXaWR0aCk7XG4gICAgc2V0UG9zWShzZWN0aW9uTGluZSwgeSk7XG59XG5cbmNvbnN0IG5hdkl0ZW1KdW1wRWxlbWVudHM6IHtcbiAgICBhYm91dD86IEhUTUxFbGVtZW50O1xuICAgIHNlcnZpY2VzPzogSFRNTEVsZW1lbnQ7XG4gICAgYmlvPzogSFRNTEVsZW1lbnQ7XG4gICAgcmVjZW50UHJvamVjdHM/OiBIVE1MRWxlbWVudDtcbiAgICBjb250YWN0PzogSFRNTEVsZW1lbnQ7XG59ID0ge307XG5cbmZ1bmN0aW9uIGdpdmVIb3ZlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZW50ZXJDb2xvcjogc3RyaW5nLCBsZWF2ZUNvbG9yOiBzdHJpbmcpIHtcbiAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiY29sb3IgMC4yc1wiO1xuICAgIGVsZW1lbnQub25tb3VzZWVudGVyID0gKCkgPT4gKGVsZW1lbnQuc3R5bGUuY29sb3IgPSBlbnRlckNvbG9yKTtcbiAgICBlbGVtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IChlbGVtZW50LnN0eWxlLmNvbG9yID0gbGVhdmVDb2xvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROYXZCYXIoKSB7XG4gICAgLy8vIFpaWlogcHVsbCB0aGlzIG91dCB3aXRoIG9uZSBpbiBzY3JvbGwudHNcbiAgICBmdW5jdGlvbiBhZGRJbWFnZShzcmM6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzY3JvbGxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHNjcm9sbEltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBzY3JvbGxJbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHNjcm9sbEltYWdlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICAgIHNjcm9sbEltYWdlLm9ubG9hZCA9ICgpID0+IGJvZHlTaWcudXBkYXRlKCk7IC8vIFpaWlogc3R1cGlkXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxJbWFnZSk7XG4gICAgICAgIHJldHVybiBzY3JvbGxJbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBrb3JlTG9nbyA9IGFkZEltYWdlKFwiYmlnLWtvcmUuc3ZnXCIpO1xuXG4gICAgY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGFnbGluZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0YWdsaW5lLnNyYyA9IFwidGFnbGluZS5zdmdcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xuXG4gICAgZnVuY3Rpb24gYWRkTmF2SXRlbShuYXZJdGVtTmFtZTogc3RyaW5nLCBrOiBrZXlvZiB0eXBlb2YgbmF2SXRlbUp1bXBFbGVtZW50cykge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5hdkl0ZW0uc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIG5hdkl0ZW0uaW5uZXJUZXh0ID0gbmF2SXRlbU5hbWU7XG5cbiAgICAgICAgbmF2SXRlbS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2SXRlbUp1bXBFbGVtZW50c1trXT8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBnaXZlSG92ZXIobmF2SXRlbSwgbWV0YWwsIHdoaXRlKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuICAgICAgICByZXR1cm4gbmF2SXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBhYm91dCA9IGFkZE5hdkl0ZW0oXCJBQk9VVFwiLCBcImFib3V0XCIpO1xuICAgIGNvbnN0IHNlcnZpY2VzID0gYWRkTmF2SXRlbShcIlNFUlZJQ0VTXCIsIFwic2VydmljZXNcIik7XG4gICAgY29uc3QgYmlvID0gYWRkTmF2SXRlbShcIkJJT1wiLCBcImJpb1wiKTtcbiAgICBjb25zdCByZWNlbnRQcm9qZWN0cyA9IGFkZE5hdkl0ZW0oXCJSRUNFTlQgUFJPSkVDVFNcIiwgXCJyZWNlbnRQcm9qZWN0c1wiKTtcbiAgICBjb25zdCBjb250YWN0ID0gYWRkTmF2SXRlbShcIkNPTlRBQ1RcIiwgXCJjb250YWN0XCIpO1xuXG4gICAgY29uc3QgbmF2SXRlbXMgPSBbYWJvdXQsIHNlcnZpY2VzLCBiaW8sIHJlY2VudFByb2plY3RzLCBjb250YWN0XTtcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDUgKiBzOyAvLyBaWlpaIHRha2Ugb3V0XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkJvdHRvbSA9IDAuMDUgKiBzO1xuXG4gICAgICAgICAgICBzZXRTaXplWChrb3JlTG9nbywgMC4wOCAqIHMpO1xuICAgICAgICAgICAgc2V0UG9zWShrb3JlTG9nbywgbmF2Qm90dG9tIC0gc2l6ZVkoa29yZUxvZ28pIC0gMC4wMDIgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1goa29yZUxvZ28sIG1hcmdpbik7XG5cbiAgICAgICAgICAgIHNldFNpemVYKHRhZ2xpbmUsIDAuMTcgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1kodGFnbGluZSwgbmF2Qm90dG9tIC0gc2l6ZVkodGFnbGluZSkpO1xuICAgICAgICAgICAgc2V0UG9zWCh0YWdsaW5lLCBwb3NFbmRYKGtvcmVMb2dvKSArIDAuMDE4ICogcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1UZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4wMDA4ICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbmF2SXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZJdGVtID0gbmF2SXRlbXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dE5hdkl0ZW0gPSBuYXZJdGVtc1tpICsgMV07XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQobmF2SXRlbSwgbmF2SXRlbVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dE5hdkl0ZW0pIHNldFBvc1gobmF2SXRlbSwgcG9zWChuZXh0TmF2SXRlbSkgLSBzaXplWChuYXZJdGVtKSAtIDAuMDIgKiBzKTtcbiAgICAgICAgICAgICAgICBlbHNlIHNldFBvc1gobmF2SXRlbSwgcyAtIHNpemVYKGNvbnRhY3QpIC0gMC4wNyAqIHMpO1xuXG4gICAgICAgICAgICAgICAgc2V0UG9zWShuYXZJdGVtLCBuYXZCb3R0b20gLSBzaXplWShuYXZJdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDkgKiBzOyAvLyBaWlpaIHRha2Ugb3V0XG5cbiAgICAgICAgICAgIHNldFNpemVYKGtvcmVMb2dvLCAwLjMgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1goa29yZUxvZ28sIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGtvcmVMb2dvLCAwLjA0ICogcyk7XG5cbiAgICAgICAgICAgIHNldFNpemVYKHRhZ2xpbmUsIFQpO1xuICAgICAgICAgICAgc2V0UG9zWCh0YWdsaW5lLCBUKTtcbiAgICAgICAgICAgIHNldFBvc1kodGFnbGluZSwgVCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1UZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4wMDA4ICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbmF2SXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZJdGVtID0gbmF2SXRlbXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dE5hdkl0ZW0gPSBuYXZJdGVtc1tpICsgMV07XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQobmF2SXRlbSwgbmF2SXRlbVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dE5hdkl0ZW0pIHNldFBvc1gobmF2SXRlbSwgVCk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZXRQb3NYKG5hdkl0ZW0sIFQpO1xuXG4gICAgICAgICAgICAgICAgc2V0UG9zWShuYXZJdGVtLCBUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtib2R5U2lnXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb21lUGFnZSgpIHtcbiAgICBmdW5jdGlvbiBhZGRTZWN0aW9uTGluZSgpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWN0aW9uTGluZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgLy8gc2VjdGlvbkxpbmUuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzExMTExMVwiO1xuICAgICAgICBzZWN0aW9uTGluZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcblxuICAgICAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzZWN0aW9uTGluZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uTGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkbGluZVRleHQgPSBhZGRTY3JvbGxUZXh0KFwiUFJPVEVDVCBZT1VSU0VMRiBGUk9NIFBST0pFQ1QgSEFaQVJEUy5cIik7XG4gICAgY29uc3QgdHJhdmVsaW5nVGhlUGF0aCA9IGFkZFNjcm9sbFRleHQoXCJUcmF2ZWxsaW5nIHRoZSBwYXRoIHVuZ3VpZGVkIGNhbiBjb3N0IHlvdS5cIik7XG5cbiAgICBjb25zdCBsb2dvID0gYWRkU2Nyb2xsSW1hZ2UoXCJsb2dvLnN2Z1wiKTtcbiAgICAvLyBsb2dvLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XG4gICAgLy8gbG9nby5vbm1vdXNlZW50ZXIgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxvZ28uc3R5bGUuZmlsdGVyID0gXCJkcm9wLXNoYWRvdygxMHB4IDEwcHggMTBweCByZ2JhKDI1NSwgMTgwLCAxMDAsIDAuNSkpXCI7XG4gICAgLy8gICAgIGxvZ28uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTE1cHgsIC0xNXB4KVwiO1xuICAgIC8vIH07XG4gICAgLy8gbG9nby5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxvZ28uc3R5bGUuZmlsdGVyID0gXCJcIjtcbiAgICAvLyAgICAgbG9nby5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwcHgsIDBweClcIjtcbiAgICAvLyB9O1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUxID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGFib3V0TmFtZSA9IGFkZFNjcm9sbFRleHQoXCJTQ09UVCBHLiBHUklGRklOXCIpO1xuICAgIG5hdkl0ZW1KdW1wRWxlbWVudHMuYWJvdXQgPSBhYm91dE5hbWU7XG4gICAgY29uc3QgYWJvdXREZXNjcmlwdGlvbiA9IGFkZFNjcm9sbFRleHQoXCJGb3VuZGVyPGJyPjxicj5XaXRoIDM3IHllYXJzIGluIHRoZSB0cmVuY2hlcyBvZiBicm9hZGNhc3QsIEFWLCBhbmQgbWVkaWEgc3lzdGVtcyBpbnRlZ3JhdGlvbiwgSeKAmXZlIGJ1aWx0IG15IGNhcmVlciBwcm90ZWN0aW5nIGNsaWVudHMgZnJvbSBiZWluZyBzdGVhbXJvbGxlZCBieSBjb21wbGV4aXR5LCBiYWQgcGxhbm5pbmcsIGFuZCB1bnJlYWxpc3RpYyBwcm9taXNlcy48YnI+PGJyPknigJltIG5vdCBoZXJlIHRvIHBsYXkgbmljZSDigJQgSeKAmW0gaGVyZSB0byBtYWtlIHN1cmUgdGhpbmdzIGdldCBkb25lIHJpZ2h0Ljxicj48YnI+QXMgYSBTdWJqZWN0IE1hdHRlciBFeHBlcnQgYW5kIE93bmVy4oCZcyBSZXAsIEkgYnJpbmcgY2xlYXItZXllZCBzdHJhdGVneSwgZW5naW5lZXJpbmcgbGVhZGVyc2hpcCwgYW5kIGEgbm8tQlMgYXBwcm9hY2ggdG8gY29tcGxleCBwcm9qZWN0cy4gRnJvbSBlYXJseS1zdGFnZSB2aXNpb25pbmcgdGhyb3VnaCBmaW5hbCBpbXBsZW1lbnRhdGlvbiwgSSBtYWtlIHN1cmUgbXkgY2xpZW50cyBhcmUgZnVsbHkgaW5mb3JtZWQgYW5kIHN0YXkgaW4gY29udHJvbCDigJQgd2l0aG91dCBiZWluZyBidXJpZWQgaW4gdGVjaG5pY2FsIG5vaXNlIG9yIHZlbmRvciBzcGluLjxicj48YnI+SeKAmXZlIGxlZCBoaWdoLXByb2ZpbGUgcHJvamVjdHMgZm9yIHRoZSBOQkEsIFdXRSwgVW5pdmlzaW9uLCBEaXNuZXksIGFuZCBtb3JlLiBNeSBiYWNrZ3JvdW5kIGluY2x1ZGVzIHJ1bm5pbmcgYSBzdWNjZXNzZnVsIGludGVncmF0aW9uIGZpcm0sIG1hbmFnaW5nIGVuZ2luZWVyaW5nIHRlYW1zIG9mIDUwKywgYW5kIG92ZXJzZWVpbmcgc29tZSBvZiB0aGUgbGFyZ2VzdCBtZWRpYSBmYWNpbGl0eSBidWlsZHMgb2YgdGhlIGxhc3QgMzAgeWVhcnMuIFdoZXRoZXIgd2XigJlyZSB0YWxraW5nIG5ldHdvcmsgb3BzLCBjbG91ZCB3b3JrZmxvd3MsIHBvc3QtcHJvZHVjdGlvbiwgb3Igc3R1ZGlvIG9wcyB3b3JrZmxvd3Mg4oCUIEnigJl2ZSBkb25lIGl0LCBhbmQgSSBicmluZyB0aGUgc2NhcnMgKGFuZCBsZXNzb25zKSB3aXRoIG1lLjxicj48YnI+TXkgam9iIGlzIHNpbXBsZTogbWFrZSBzdXJlIG15IGNsaWVudHMgYXJlIHByb3RlY3RlZCwgcmVzcGVjdGVkLCBhbmQgaGF2ZSBkZWxpdmVyZWQgZXhhY3RseSB3aGF0IHRoZXkgbmVlZOKAlG5vdGhpbmcgbW9yZSwgYW5kIGFic29sdXRlbHkgbm90aGluZyBsZXNzLlwiKTtcbiAgICBjb25zdCBwb3J0cmFpdCA9IGFkZFNjcm9sbEltYWdlKFwicGFwYS5wbmdcIik7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTIgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgZmVlbENvbmZpZGVudCA9IGFkZFNjcm9sbFRleHQoXCJGRUVMIENPTkZJREVOVCBLTk9XSU5HIFlPVeKAmVZFIEdPVCBJVCBBTEwgQ09WRVJFRC5cIik7XG4gICAgbmF2SXRlbUp1bXBFbGVtZW50cy5zZXJ2aWNlcyA9IGZlZWxDb25maWRlbnQ7XG5cbiAgICBjb25zdCBzcHJpbmdTaWcgPSBuZXcgU2lnbmFsKCk7XG4gICAgZnVuY3Rpb24gYWRkU2tpbGxUaWxlKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBtZXRhbDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgICAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBjb250YWluZXIpO1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBhZGRUZXh0KHRpdGxlLCBjb250YWluZXIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBhZGRUZXh0KGRlc2NyaXB0aW9uLCBjb250YWluZXIpO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjI1c1wiO1xuXG4gICAgICAgIGNvbnN0IHNwcmluZ1ggPSBuZXcgU3ByaW5nKHgpO1xuICAgICAgICBjb25zdCBzcHJpbmdZID0gbmV3IFNwcmluZyh5KTtcbiAgICAgICAgY29uc3Qgc3ByaW5nU2l6ZVkgPSBuZXcgU3ByaW5nKDEpO1xuICAgICAgICBzcHJpbmdYLnNldFN0aWZmbmVzc0NyaXRpY2FsKDIwMCk7XG4gICAgICAgIHNwcmluZ1kuc2V0U3RpZmZuZXNzQ3JpdGljYWwoMjAwKTtcbiAgICAgICAgc3ByaW5nU2l6ZVkuc2V0U3RpZmZuZXNzQ3JpdGljYWwoMjAwKTtcblxuICAgICAgICBmdW5jdGlvbiB0aWxlQXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBza2lsbFRpbGVzLmZpbmQoKHMpID0+IHMuc3ByaW5nWC50YXJnZXQgPT09IHggJiYgcy5zcHJpbmdZLnRhcmdldCA9PT0geSkhO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmxpcChzcHJpbmcxOiBTcHJpbmcsIHNwcmluZzI6IFNwcmluZykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNwcmluZzEudGFyZ2V0O1xuICAgICAgICAgICAgc3ByaW5nMS50YXJnZXQgPSBzcHJpbmcyLnRhcmdldDtcbiAgICAgICAgICAgIHNwcmluZzIudGFyZ2V0ID0gcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ByaW5nWS50YXJnZXQgPT09IGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBmbGlwKFxuICAgICAgICAgICAgICAgICAgICB0aWxlQXQoaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldCwgMSAtIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpLnNwcmluZ1ksIC8vXG4gICAgICAgICAgICAgICAgICAgIGhvbGVTa2lsbFRpbGUuc3ByaW5nWVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjaW9uWCA9IHNwcmluZ1gudGFyZ2V0IC0gaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldCA8IDAgPyAtMSA6IDE7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldDsgeCAhPT0gc3ByaW5nWC50YXJnZXQ7IHggKz0gZGlyZWNpb25YKSB7XG4gICAgICAgICAgICAgICAgZmxpcChcbiAgICAgICAgICAgICAgICAgICAgdGlsZUF0KHgsIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpLnNwcmluZ1gsIC8vXG4gICAgICAgICAgICAgICAgICAgIHRpbGVBdCh4ICsgZGlyZWNpb25YLCBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdYXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwcmluZ1kudGFyZ2V0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmxpcChcbiAgICAgICAgICAgICAgICAgICAgdGlsZUF0KHNwcmluZ1gudGFyZ2V0LCAxIC0gc3ByaW5nWS50YXJnZXQpLnNwcmluZ1ksIC8vXG4gICAgICAgICAgICAgICAgICAgIHNwcmluZ1lcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNraWxsVGlsZSBvZiBza2lsbFRpbGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNraWxsVGlsZSA9PT0gaG9sZVNraWxsVGlsZSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gbWV0YWw7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLnNwcmluZ1NpemVZLnRhcmdldCA9IDE7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLmRlc2NyaXB0aW9uVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gdGlsZUJyb3duO1xuICAgICAgICAgICAgc3ByaW5nU2l6ZVkudGFyZ2V0ID0gMjtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1gsIHNraWxsVGlsZS5zcHJpbmdTaWcpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1ksIHNraWxsVGlsZS5zcHJpbmdTaWcpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1NpemVZLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIub25jbGljayA9IG9uQ2xpY2s7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICByZXR1cm4geyBjb250YWluZXIsIHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBzcHJpbmdYLCBzcHJpbmdZLCBzcHJpbmdTaXplWSwgc3ByaW5nU2lnIH07XG4gICAgfVxuXG4gICAgY29uc3QgaG9sZVNraWxsVGlsZSA9IGFkZFNraWxsVGlsZShcIlwiLCBcIlwiLCAyLCAxKTtcbiAgICBob2xlU2tpbGxUaWxlLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDAwMDAwMzNcIjtcblxuICAgIGNvbnN0IHNraWxsVGlsZXMgPSBbXG4gICAgICAgIGFkZFNraWxsVGlsZShcIk93bmVyPGJyPlJlcHJlc2VudGF0aW9uXCIsIFwiS09SRSBzZXJ2ZXMgYXMgeW91ciBleWVzLCBlYXJzLCBhbmQgYWR2b2NhdGVzLCBwcm92aWRpbmcgY29uY2llcmdlLWxldmVsIGd1aWRhbmNlIHRocm91Z2ggZXZlcnkgc3RlcCBvZiB5b3VyIHByb2plY3QuIFdlIGtlZXAgdmVuZG9ycyBhbmQgY29udHJhY3RvcnMgaG9uZXN0LCBtYWtpbmcgc3VyZSBub3RoaW5nIHNsaXBzIHRocm91Z2ggdGhlIGNyYWNrcy4gV2UgYmVnaW4gYnkgYWxpZ25pbmcgYWxsIHN0YWtlaG9sZGVycyBlYXJseSBvbiwgdGhlbiBkZWZlbmQgeW91ciBwb3NpdGlvbiB0aHJvdWdob3V0IHRoZSBwcm9jZXNzLlwiLCAwLCAwKSwgLy9cbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiQmFzaXMgb2Y8YnI+RGVzaWduXCIsIFwiS09SRSBsaXN0ZW5zIGJlZm9yZSB3ZSBhZHZpc2UuIFdlIHJldmlldyB5b3VyIGN1cnJlbnQgb3BlcmF0aW9uLCBmdXR1cmUgcGxhbnMsIGFuZCBvdmVyYWxsIGdvYWxzLiBZb3VyIG5ldyBzcGFjZSBhbmQgc3lzdGVtcyBtdXN0IGdyYWNlZnVsbHkgc3VwcG9ydCBvcGVyYXRpb25hbCBuZWVkcyBhbmQgZnV0dXJlIGdyb3d0aC4gRGVlcCBleHBlcnRpc2UgaW4gc3lzdGVtcyBwbGFubmluZyBhbmQgaW5mcmFzdHJ1Y3R1cmUgc3RyYXRlZ3kgYWxsb3dzIEtPUkUgdG8gdHJhbnNsYXRlIHZpc2lvbiBpbnRvIGEgY29tcHJlaGVuc2l2ZSBCb0QuXCIsIDEsIDApLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJQcm9vZiBvZjxicj5Db25jZXB0XCIsIFwiS09SRSBrbm93cyB5b3Ugb25seSBnZXQgb25lIGNoYW5jZSB0byBidWlsZCBhIG5ldyBmYWNpbGl0eSByaWdodC4gWW91IGRlc2VydmUgdG8gc2VlIGlkZWFzIHRob3JvdWdobHkgdGVzdGVkIGFuZCB2YWxpZGF0ZWQgYmVmb3JlIHlvdSBjb21taXQuIFdlIHZldCB0ZWNobm9sb2d5LCB2ZW5kb3JzLCBhbmQgYXNzdXJhbmNlcyBhZ2FpbnN0IHJlYWwtd29ybGQgY3JpdGVyaWEuIFRoaXMgYnJpbmdzIGNsYXJpdHkgdG8geW91ciB3b3JrZmxvdyBhbmQgcHV0cyBtZWFzdXJhYmxlIGFjY291bnRhYmlsaXR5IGJlaGluZCBldmVyeSBwcm9taXNlLlwiLCAyLCAwKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUHJvamVjdCBUZWFtPGJyPkFzc2VtYmx5XCIsIFwiS09SRSBicmluZ3MgdG9nZXRoZXIgdGhlIHJpZ2h0IHRlYW0gZm9yIHlvdXIgcHJvamVjdC4gV2UgZHJhdyBmcm9tIGEgbmV0d29yayBvZiB0cnVzdGVkIGV4cGVydHMgaW4gZGVzaWduLCBlbmdpbmVlcmluZywgaW5zdGFsbGF0aW9uLCBhbmQgbW9yZS4gVGhlc2UgYXJlIHByb3ZlbiBwcm9zIHdob+KAmXZlIHNob3duIHRoZXkgY2FuIGV4ZWN1dGUgdW5kZXIgcHJlc3N1cmUgd2l0aG91dCBtaXNzaW5nIGEgYmVhdC4gVGhhdCB0cmFuc2xhdGVzIHRvIHBlcmZvcm1hbmNlLCBub3QgZXhjdXNlcy5cIiwgMywgMCksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlB1bmNoIExpc3Q8YnI+TWFuYWdlbWVudFwiLCBcIktPUkUgdHJhY2tzIGV2ZXJ5IGRldGFpbCwgZnJvbSBidWlsZGluZyBjb25zdHJ1Y3Rpb24gdG8gc3lzdGVtcyBpbnRlZ3JhdGlvbiB0byBvbmdvaW5nIHNlcnZpY2VzLiBJdOKAmXMgY3JpdGljYWwgdG8gbWFrZSBzdXJlIGFsbCB0aGUgdGVjaCB3b3JrcywgYWxsIHByb21pc2VzIGFyZSBmdWxmaWxsZWQuIE5vdGhpbmcgaXMgc2lnbmVkLW9mZiB1bnRpbCBpdOKAmXMgdGVzdGVkLCB2ZXJpZmllZCwgYW5kIHJpZ2h0LiBSZWxlbnRsZXNzIGZvbGxvdy10aHJvdWdoIHRha2VzIGV4dHJhIGVmZm9ydCwgYnV0IHdlIHN0dWJib3JubHkgcmVmdXNlIHRvIGNvbXByb21pc2UuXCIsIDQsIDApLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJOZWVkczxicj5BbmFseXNpc1wiLCBcIktPUkUgZ3VpZGVzIHlvdSB0byB1bmNvdmVyIGFuZCB1bmRlcnN0YW5kIGV4YWN0bHkgd2hhdOKAmXMgbmVlZGVkLCB3aGF0J3MgcG9zc2libGUsIGFuZCB3aGF04oCZcyB3b3J0aCBwdXJzdWluZy4gQXNrIGFueW9uZSB3aG/igJlzIGJlZW4gdGhyb3VnaCB0aGlzIHByb2Nlc3Mg4oCTIGVhcmx5LXBoYXNlIHByb2plY3QgaW50ZWxsaWdlbmNlIG1ha2VzIGFsbCB0aGUgZGlmZmVyZW5jZS4gTWFrZSBzbWFydGVyLCBmYXN0ZXIgZGVjaXNpb25zIHdpdGggY2xhcml0eSBhbmQgY29uZmlkZW5jZSwgYW5kIGF2b2lkIGNvc3RseSBtaXN0YWtlcy5cIiwgMCwgMSksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkJ1ZGdldGluZyAmPGJyPkVzdGltYXRpbmdcIiwgXCJLT1JFIG9mZmVycyBhIGJ1ZGdldGluZyBwcm9jZXNzIHNoYXBlZCBieSByZWFsLXdvcmxkIGVuZ2luZWVyaW5nIGV4cGVyaWVuY2UuIFdlIHByb3ZpZGUgZWFybHkgY29zdCBtb2RlbHMsIGRldGFpbGVkIHByb2plY3Rpb25zLCBhbmQgcGhhc2VkIGludmVzdG1lbnQgc3RyYXRlZ2llcyB0byBoZWxwIHlvdSBzdGF5IGluZm9ybWVkLCBpbiBjb250cm9sLCBhbmQgd2l0aGluIGJ1ZGdldC4gT3VyIGVhcmx5IHdvcmsgaGVscHMgeW91IHRvIG1pbmltaXplIHNjb3BlIGNyZWVwIGFuZCBhdm9pZCBmaW5hbmNpYWwgc3VycHJpc2VzLlwiLCAxLCAxKSxcbiAgICAgICAgaG9sZVNraWxsVGlsZSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUkZQIENyZWF0aW9uPGJyPiYgQWRtaW5pc3RyYXRpb25cIiwgXCJLT1JFIGNhcHR1cmVzIHRoZSBwcm9qZWN0IG9iamVjdGl2ZXMsIG91dGxpbmVzIHRoZSBzY29wZSwgZGVmaW5lcyB0aGUgcXVhbGlmaWNhdGlvbnMsIGFuZCBzdHJ1Y3R1cmVzIHRoZSByZXNwb25zZSByZXF1aXJlZCBvZiBldmVyeSBwcm9qZWN0IHNvbGljaXRhdGlvbiB0aGF0IHdlIHByb2R1Y2UuIFdlIHRoZW4gc3RydWN0dXJlIHRoZSBiaWQgZXZhbHVhdGlvbiBwcm9jZXNzIGFuZCBndWlkZSB5b3UgdGhyb3VnaCB0aGUgY3JpdGljYWwgZGVjaXNpb24tbWFraW5nLCBsZWF2aW5nIG5vdGhpbmcgdG8gY2hhbmNlLlwiLCAzLCAxKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiSW50ZWdyYXRvcjxicj5TdXBwb3J0XCIsIFwiS09SRSBwYXJ0bmVycyB3aXRoIHlvdXIgaW50ZWdyYXRvciB0byBsZWFkIHRoZSBwcm9jZXNzLCBwcm90ZWN0IHlvdXIgdmlzaW9uLCBhbmQgbWFrZSBzdXJlIGV2ZXJ5IHdvcmtmbG93IGlzIGRlbGl2ZXJlZCBleGFjdGx5IGFzIGRlc2lnbmVkLiBXaXRoIGludGVncmF0aW9uIGxlYWRlcnNoaXAgYW5kIG92ZXJzaWdodCByb290ZWQgaW4gZGVjYWRlcyBvZiBleHBlcmllbmNlLCB3ZSBwcmVzZXJ2ZSB0aGUgaW50ZWdyaXR5IG9mIHlvdXIgZGVzaWduLiBXZSBkb27igJl0IGFjY2VwdCBjb21wcm9taXNlcy4gTmVpdGhlciBzaG91bGQgeW91LlwiLCA0LCAxKSxcbiAgICBdO1xuICAgIGNvbnN0IHNraWxsVGlsZUNvdW50WCA9IE1hdGgubWF4KC4uLnNraWxsVGlsZXMubWFwKChzKSA9PiBzLnNwcmluZ1gudGFyZ2V0KSkgKyAxO1xuICAgIHNraWxsVGlsZXNbMl0uY29udGFpbmVyLmNsaWNrKCk7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTMgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgYmlnTmFtZXMgPSBhZGRTY3JvbGxUZXh0KFwiQklHIE5BTUVTPGJyPllPVSBLTk9XXCIpO1xuICAgIGNvbnN0IGhhc1RhY2tsZWQgPSBhZGRTY3JvbGxUZXh0KFwiPHN0cm9uZz5TY290dCBHcmlmZmluPC9zdHJvbmc+IGhhcyB0YWNrbGVkIHNvbWUgb2YgdGhlIG1vc3QgY29tcGxleCBwcm9qZWN0cyBmb3Igc29tZSBvZiB0aGUgbGFyZ2VzdCBtZWRpYSBjb21wYW5pZXMgaW4gdGhlIHdvcmxkLjxicj5IZSBoYXMgc2VlbiBpdCBhbGwsIGFuZCB5b3UgY2FuIHRhcCBpbnRvIHRoYXQgZXhwZXJpZW5jZS5cIik7XG5cbiAgICBjb25zdCBiaWdOYW1lQ2xpZW50cyA9IFtcbiAgICAgICAgW1wiQUJTL0NCTlwiLCBcIk5hdGlvbmFsIEdlb2dyYXBoaWNcIl0sIC8vXG4gICAgICAgIFtcIkJsYWNrcm9ja1wiLCBcIk5vcnRod2VzdGVybiBVbml2ZXJzaXR5XCJdLFxuICAgICAgICBbXCJCbGFja3N0b25lXCIsIFwiUGFyYW1vdW50L0NCU1wiXSxcbiAgICAgICAgW1wiQ0JTXCIsIFwiTVRWL1Nob3d0aW1lXCJdLFxuICAgICAgICBbXCJDTk5cIiwgXCJQZW5uIFN0YXRlIFVuaXZlcnNpdHlcIl0sXG4gICAgICAgIFtcIkRpc25leS9BQkMvRVNQTlwiLCBcIlBydWRlbnRpYWxcIl0sXG4gICAgICAgIFtcIkZveCBOZXdzXCIsIFwiU2lyaXVzIFNhdGVsbGl0ZSBSYWRpb1wiXSxcbiAgICAgICAgW1wiTWFkaXNvbiBTcXVhcmUgR2FyZGVuXCIsIFwiU3lyYWN1c2UgVW5pdmVyc2l0eVwiXSxcbiAgICAgICAgW1wiTUxCXCIsIFwiVGVsZXZpc2EtVW5pdmlzaW9uXCJdLFxuICAgICAgICBbXCJNU05CQ1wiLCBcIlRoZSBOZXcgWW9yayBUaW1lc1wiXSxcbiAgICAgICAgW1wiTkJBXCIsIFwiV1dFXCJdLFxuICAgICAgICBbXCJOQkNVL0NOQkNcIl0sXG4gICAgXTtcblxuICAgIGNvbnN0IGJpZ05hbWVDbGllbnRUZXh0cyA9IGJpZ05hbWVDbGllbnRzLm1hcCgoYmlnTmFtZUNsaWVudHNSb3cpID0+IGJpZ05hbWVDbGllbnRzUm93Lm1hcCgoYmlnTmFtZUNsaWVudCkgPT4gYWRkU2Nyb2xsVGV4dChiaWdOYW1lQ2xpZW50KSkpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmU0ID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlID0gYWRkU2Nyb2xsSW1hZ2UoXCJncmlmZmluLWJsYWNrLXdoaXRlLnBuZ1wiKTtcbiAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZVRleHQgPSBhZGRTY3JvbGxUZXh0KFwiSeKAmXZlIGJlZW4gaW4gdGhpcyBpbmR1c3RyeSBmb3IgbW9yZSB0aGFuIDM1IHllYXJzLCBhbmQgSSBjYW7igJl0IHRoaW5rIG9mIG9uZSBjbGllbnQgd2hvIHdhcyBhYmxlIHRvIHN1Y2Nlc3NmdWxseSBuYXZpZ2F0ZSB0aGUgZ2F1bnRsZXQgdGhhdCBpcyBhIGxhcmdlIG1lZGlhIGZhY2lsaXR5IHByb2plY3Qgd2l0aG91dCB0aGUgc3VwcG9ydCBvZiBhbiBleHBlcmllbmNlZCwga25vd2xlZGdlYWJsZSwgYW5kIGFnZ3Jlc3NpdmUgcHJvamVjdCBmYWNpbGl0YXRvci5cIik7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTUgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgLy8gYmlvXG5cbiAgICBjb25zdCBiaW9IZWFkZXIgPSBhZGRTY3JvbGxUZXh0KFwiSE9XIFdFPGJyPkdPVCBIRVJFXCIpO1xuICAgIG5hdkl0ZW1KdW1wRWxlbWVudHMuYmlvID0gYmlvSGVhZGVyO1xuICAgIGNvbnN0IGJpb1RleHQgPSBhZGRTY3JvbGxUZXh0KFwiSeKAmXZlIGFsd2F5cyBmb2N1c2VkIG9uIHRoZSBjb25jZXB0dWFsaXphdGlvbiBhbmQgaW1wbGVtZW50YXRpb24gb2YgYWR2YW5jZWQgdGVjaG5vbG9neSBzb2x1dGlvbnMgZm9yIGZhY2lsaXR5IGFuZCBldmVudCBzeXN0ZW1zIGludGVncmF0aW9uLiBBbG9uZyB0aGUgd2F5LCB0aGF04oCZcyBtZWFudCBzZXJ2aW5nIGFzIGRlc2lnbiBlbmdpbmVlciwgcHJvamVjdCBtYW5hZ2VyLCBzYWxlcyBlbmdpbmVlciwgcGxhbm5pbmcgY29uc3VsdGFudCwgYnVzaW5lc3MgYnVpbGRlci9vd25lciwgYW5kIHRlYW0gbGVhZGVyLjxicj48YnI+SXQgYWxsIHN0YXJ0ZWQgaW4gdGVjaG5pY2FsIHRoZWF0ZXIsIHdoZXJlIEkgd29ya2VkIGFzIGEgbWFzdGVyIGVsZWN0cmljaWFuLCBsaWdodGluZyBkZXNpZ25lciwgc291bmQgZGVzaWduZXIsIGFuZCBmcm9udC1vZi1ob3VzZSBzb3VuZCBlbmdpbmVlciBpbiBzdW1tZXIgc3RvY2ssIHRvdXJpbmcsIGFuZCBvZmYtQnJvYWR3YXkgdGhlYXRlci4gRm9sbG93aW5nIHNldmVyYWwgeWVhcnMgb2YgZnJlZWxhbmNlIHRoZWF0cmljYWwgYW5kIGNvbmNlcnQgdGVjaG5pY2FsIHN1cHBvcnQsIEkgbGFuZGVkIGF0IEFGIEFzc29jaWF0ZXMsIGEgYnJvYWRjYXN0IHN5c3RlbXMgaW50ZWdyYXRvci48YnI+PGJyPkFmdGVyIHdvcmtpbmcgb24gc3lzdGVtcyBlbmdpbmVlcmluZyBlZmZvcnRzIGZvciBOQkPigJlzIFRvZGF5IFNob3csIENOQkMsIGFuZCBVU0EgTmV0d29yaywgSSBtb3ZlZCB0byBTb255IFN5c3RlbXMgSW50ZWdyYXRpb24uIFRoZXJlLCBJIG92ZXJzYXcgZGVzaWduL2J1aWxkcyBmb3IgdGhlIFRyaWJ1bmUgU3RhdGlvbiBHcm91cCBhbmQgc3VwcG9ydGVkIENCUyBCcm9hZGNhc3QgT3BlcmF0aW9ucyAmIEVuZ2luZWVyaW5nPGJyPjxicj5BdCB0aGlzIHBvaW50LCBJIHRlYW1lZCB1cCB3aXRoIHR3byBwYXJ0bmVycyB0byBsYXVuY2ggVGhlIFN5c3RlbXMgR3JvdXAuIFRTRyBzcGVjaWFsaXplZCBpbiBsYXJnZS1zY2FsZSwgZmFzdC10cmFjayBzeXN0ZW1zIGludGVncmF0aW9uIHByb2plY3RzIGZvciB0aGUgYnJvYWRjYXN0IGluZHVzdHJ5LiBEdXJpbmcgb3VyIDIwLXllYXIgcnVuLCB3ZSBkZXNpZ25lZCBhbmQgYnVpbHQgZmFjaWxpdGllcyBmb3IgU2VyaW91cyBTYXRlbGxpdGUgUmFkaW8sIE1UViBOZXR3b3JrcywgU3lyYWN1c2UgVW5pdmVyc2l0eSBOZXdob3VzZSwgTkZMIEZpbG1zIEF1ZGlvLCBOQkNVLCBhbmQgQ29ydXMgRW50ZXJ0YWlubWVudCwgcGx1cyAyMDArIHN5c3RlbXMgaW50ZWdyYXRpb24gcHJvamVjdHMgd29ybGR3aWRlLjxicj48YnI+V2hlbiBUU0cgd2FzIGFjcXVpcmVkIGJ5IERpdmVyc2lmaWVkIGluIDIwMTYsIEkgZXN0YWJsaXNoZWQgYSBzbWFsbCBzdHVkaW8gd2l0aGluIHRoZSBsYXJnZXIgY29ycG9yYXRpb24sIHdoaWNoIGFsbG93ZWQgbWUgdG8gZm9jdXMgb24gY3JpdGljYWwgZWFybHktc3RhZ2UgcHJvamVjdCBjb25jZXB0dWFsaXphdGlvbiwgcGxhbm5pbmcsIGFuZCBidWRnZXRpbmcuIFRocm91Z2hvdXQgdGhvc2UgeWVhcnMsIEkgd2FzIGFibGUgdG8gd29yayBzaG91bGRlciB0byBzaG91bGRlciB3aXRoIHNvbWUgb2YgdGhlIGJlc3QgYW5kIGJyaWdodGVzdCBhY3Jvc3MgYSB3aWRlIHJhbmdlIG9mIGRpc2NpcGxpbmVzIGluIHRoZSBtZWRpYSBhbmQgZW50ZXJ0YWlubWVudCBpbmR1c3RyeS4gQW5kIHRoZSByZXN0LCBhcyB0aGV5IHNheSwgaXMgaGlzdG9yeS48YnI+PGJyPlRvZGF5LCBLT1JFIG9mZmVycyBhIHJhZGljYWxseSBzdHJlYW1saW5lZCB3YXkgdG8gbGV2ZXJhZ2UgYSBjYXJlZXLigJlzIHdvcnRoIG9mIGV4cGVydGlzZSwgZXhwZXJpZW5jZSwgYW5kIGV4dGVuc2l2ZSBpbmR1c3RyeSByZWxhdGlvbnNoaXBzIHRvIGhlbHAgbWFrZSBzdXJlIHlvdXIgbmV4dCBwcm9qZWN0IHJ1bnMgc21vb3RobHkgZnJvbSBwbGFubmluZyB0byBhY2NlcHRhbmNlLjxicj48YnI+SSBob2xkIGEgQmFjaGVsb3Igb2YgU2NpZW5jZSBpbiBFbGVjdHJpY2FsIEVuZ2luZWVyaW5nIGZyb20gUGVubiBTdGF0ZSBVbml2ZXJzaXR5LCBhbmQgYW0gYSBtZW1iZXIgb2YgU01QVEUsIEFFUywgYW5kIFNWRy4gSeKAmW0gYWxzbyBraW5kIHRvIGFuaW1hbHMuXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmU2ID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIC8vIHJlY2VudCBwcm9qZWN0c1xuXG4gICAgY29uc3QgcmVjZW50UHJvamVjdEhlYWRlciA9IGFkZFNjcm9sbFRleHQoXCJSRUNFTlQ8YnI+UFJPSkVDVFNcIik7XG4gICAgbmF2SXRlbUp1bXBFbGVtZW50cy5yZWNlbnRQcm9qZWN0cyA9IHJlY2VudFByb2plY3RIZWFkZXI7XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0UGFpcihwcm9qZWN0TmFtZTogc3RyaW5nLCBwcm9qZWN0RGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZVRleHQgPSBhZGRTY3JvbGxUZXh0KHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uVGV4dCA9IGFkZFNjcm9sbFRleHQocHJvamVjdERlc2NyaXB0aW9uKTtcblxuICAgICAgICByZXR1cm4geyBwcm9qZWN0TmFtZVRleHQsIHByb2plY3REZXNjcmlwdGlvblRleHQgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFthZGRQcm9qZWN0UGFpcihcIk5CQSBFbnRlcnRhaW5tZW50XCIsIFwiQXJjaGl0ZWN0dXJhbCBwbGFubmluZyBhbmQgYnVkZ2V0aW5nIGZvciBuZXcgY29udGVudCBvcGVyYXRpb25zIGNlbnRlciwgcmVwbGF5IG9wZXJhdGlvbnMgY2VudGVyLCBhbmQgZXhwYW5zaW9uIG9mIHRoZSBOQkEgTmV0d29yay5cIiksIGFkZFByb2plY3RQYWlyKFwiVGVsZXZpc2EvVW5pdmlzaW9uIE5ldHdvcmtcIiwgXCJTeXN0ZW0gY29uY2VwdHVhbGl6YXRpb24sIGFwcGxpY2F0aW9ucyBlbmdpbmVlcmluZywgcHJvamVjdCBidWRnZXRpbmcsIGFuZCBhY2NvdW50IHJlcHJlc2VudGF0aW9uIGZvciB0aGUgbmV0d29yayBvcGVyYXRpb25zIGNlbnRlci5cIiksIGFkZFByb2plY3RQYWlyKFwiV2VzdGVybiBLZW50dWNreSBVbml2ZXJzaXR5XCIsIFwiUEJTIGFuZCBOUFIgc3RhdGlvbnMsIENvbGxlZ2Ugb2YgQ29tbXVuaWNhdGlvbnMgcHJvZHVjdGlvbiBhbmQgcG9zdCBmYWNpbGl0eSwgaW5jbHVkaW5nIHRpZXMgdG8gY2FtcHVzIHNwb3J0cyBhbmQgcHJlc2VudGF0aW9uIHZlbnVlcywgZGV2ZWxvcG1lbnQgb2YgYSBjb21wbGV0ZSBzeXN0ZW0gZGVzaWduIGZvciB0aHJlZSBjb250cm9sIHJvb21zLCB0d28gVFYgc3R1ZGlvcywgZm91ciByYWRpbyBzdHVkaW9zLCBhbmQgcG9zdC1wcm9kdWN0aW9uIG9wZXJhdGlvbnMuXCIpLCBhZGRQcm9qZWN0UGFpcihcIldvcmxkIFdyZXN0bGluZyBFbnRlcnRhaW5tZW50XCIsIFwiTmV3IEhRIGRpZ2l0YWwgbWVkaWEgZmFjaWxpdHkgZGVzaWduIGFuZCBidWRnZXRpbmcgZm9yIHByb2R1Y3Rpb24sIHBvc3QsIHRyYW5zbWlzc2lvbiwgYW5kIGV2ZW50IGNvb3JkaW5hdGlvbiwgcGx1cyBmb3JtYWwgYW5hbHlzaXMgZm9yIFBoYXNlIDIgd29ya2Zsb3cgb3B0aW1pemF0aW9uIGFuZCBvcmNoZXN0cmF0aW9uIGxheWVyLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJEaXNuZXkvR2FsYXh5IENvbnNvbGlkYXRpb25cIiwgXCJUaGUgbGFyZ2VzdCBuZXR3b3JrIG9wZXJhdGlvbnMgY2VudGVyIGZhY2lsaXR5IGV2ZXIgYnVpbHQgaW4gdGhlIFVTLiBJdCBpbmNsdWRlcyBBQkMgTmV0d29yaywgV0FCQyBUViwgRVNQTiBOWSwgTWFydmVsIEVudGVydGFpbm1lbnQsIGFuZCBEaXNuZXkgU2NyZWVuaW5nIFRoZWF0ZXIuIFNjb3R0IG92ZXJzYXcgY29udHJhY3QgYWRtaW5pc3RyYXRpb24gYWNyb3NzIHRoZSBlbnRpcmUgcHJvamVjdC5cIildO1xuXG4gICAgLy8gY29udGFjdFxuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmU3ID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IHRlbGxNZSA9IGFkZFNjcm9sbFRleHQoXCJUZWxsIG1lIGFib3V0IHlvdXIgcHJvamVjdC5cIik7XG4gICAgbmF2SXRlbUp1bXBFbGVtZW50cy5jb250YWN0ID0gdGVsbE1lO1xuICAgIGNvbnN0IG9uZUNvbnZlcnNhdGlvbiA9IGFkZFNjcm9sbFRleHQoXCJPbmUgY29udmVyc2F0aW9uIHdvbuKAmXQgY29zdCB5b3UgYW55dGhpbmcuIE5vdCBoYXZpbmcgb25lIG1pZ2h0LlwiKTtcbiAgICBjb25zdCBiaWdLb3JlID0gYWRkU2Nyb2xsSW1hZ2UoXCJiaWcta29yZS5zdmdcIik7XG5cbiAgICBjb25zdCBlbWFpbCA9IGFkZFNjcm9sbFRleHQoXCJFbWFpbFwiKTtcbiAgICBnaXZlSG92ZXIoZW1haWwsIHdoaXRlLCBtZXRhbCk7XG4gICAgZW1haWwub25jbGljayA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCJtYWlsdG86bGFpcm9mdGhlZ3JpZmZpbkBnbWFpbC5jb21cIik7XG5cbiAgICBjb25zdCBsaW5rZWRJbiA9IGFkZFNjcm9sbFRleHQoXCJMaW5rZWRJblwiKTtcbiAgICBnaXZlSG92ZXIobGlua2VkSW4sIHdoaXRlLCBtZXRhbCk7XG4gICAgbGlua2VkSW4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgbGlua2VkSW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2dncmlmZmluXCIsIFwiX2JsYW5rXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcml2YWN5UG9saWN5ID0gYWRkU2Nyb2xsVGV4dChcIlByaXZhY3kgUG9saWN5IMKpIDIwMjYgS09SRSBTTUUgTExDXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmU4ID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIHJlZ2lzdGVyVXBkYXRlTGF5b3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgICAgIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwoKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxXaWR0aCgpO1xuXG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjA1ICogcztcbiAgICAgICAgICAgIGNvbnN0IGZyb21Ub3AgPSAwLjAzMSAqIHM7XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHRUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjA3NSAqIHMsIGxpbmVIZWlnaHQ6IDAuMDg0ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgY29uc3Qgc3ViR3JheVRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBtZXRhbCwgZm9udFNpemU6IDAuMDE5ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuXG4gICAgICAgICAgICBjb25zdCBiaWdUZXh0TnVkZ2UgPSAwLjAwNCAqIHM7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uTGluZUdhcCA9IDAuMDQgKiBzO1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyID0gMC4wMiAqIHM7XG4gICAgICAgICAgICBjb25zdCBndXR0ZXJlZENvbHVtbiA9IHMgLyAyICsgZ3V0dGVyO1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyZWRXaWR0aEJldHdlZW4gPSBzIC8gMiAtIDIgKiBndXR0ZXI7XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHRUb1N1YnRleHRHYXAgPSAwLjAyICogcztcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGhlYWRsaW5lVGV4dCwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGhlYWRsaW5lVGV4dCwgMC40ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NYKGhlYWRsaW5lVGV4dCwgbWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcbiAgICAgICAgICAgIHNldFBvc1koaGVhZGxpbmVUZXh0LCBmcm9tVG9wKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHRyYXZlbGluZ1RoZVBhdGgsIHN1YkdyYXlUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKHRyYXZlbGluZ1RoZVBhdGgsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKHRyYXZlbGluZ1RoZVBhdGgsIHBvc0VuZFkoaGVhZGxpbmVUZXh0KSArIGJpZ1RleHRUb1N1YnRleHRHYXApO1xuXG4gICAgICAgICAgICBzZXRJbWFnZVNpemVZKGxvZ28sIHNpemVZKGhlYWRsaW5lVGV4dCkgKiAxLjA0KTtcbiAgICAgICAgICAgIHNldFBvc1gobG9nbywgaW5uZXJXaWR0aCAtIGxvZ28uc2Nyb2xsV2lkdGggLSBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShsb2dvLCBmcm9tVG9wIC0gMC4wMyAqIHMpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTEsIHBvc0VuZFkodHJhdmVsaW5nVGhlUGF0aCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIC8vIGFib3V0XG5cbiAgICAgICAgICAgIGNvbnN0IGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMDAxICogcywgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxICogcywgbGluZUhlaWdodDogMC4wMiAqIHMsIGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChhYm91dERlc2NyaXB0aW9uLCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBpbm5lcldpZHRoIC0gMiAqIG1hcmdpbjsgLy8gWlpaWiBhbm90aGVyIHNjcm9sbCB3aWR0aD9cbiAgICAgICAgICAgIGNvbnN0IHRpbGVHYXAgPSAwLjAxNSAqIHM7XG4gICAgICAgICAgICBjb25zdCB0aWxlU2l6ZSA9IChzY3JvbGxXaWR0aCAtIHRpbGVHYXAgKiAoc2tpbGxUaWxlQ291bnRYIC0gMSkpIC8gc2tpbGxUaWxlQ291bnRYO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB0aWxlUG9zWCh4OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFyZ2luICsgKHRpbGVTaXplICsgdGlsZUdhcCkgKiB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB0aWxlUG9zWSh5OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRpbGVTaXplICsgdGlsZUdhcCkgKiB5ICsgcG9zRW5kWShmZWVsQ29uZmlkZW50KSArIDAuMDQgKiBzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhYm91dExlZnQgPSB0aWxlUG9zWCgyKTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChhYm91dE5hbWUsIHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDIgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgc2V0UG9zWShhYm91dE5hbWUsIHBvc1koc2VjdGlvbkxpbmUxKSArIHNlY3Rpb25MaW5lR2FwKTtcbiAgICAgICAgICAgIHNldFBvc1goYWJvdXROYW1lLCBhYm91dExlZnQpO1xuXG4gICAgICAgICAgICBzZXRTaXplWChhYm91dERlc2NyaXB0aW9uLCBzIC0gYWJvdXRMZWZ0IC0gbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koYWJvdXREZXNjcmlwdGlvbiwgcG9zRW5kWShhYm91dE5hbWUpKTtcbiAgICAgICAgICAgIHNldFBvc1goYWJvdXREZXNjcmlwdGlvbiwgYWJvdXRMZWZ0KTtcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWShwb3J0cmFpdCwgc2l6ZVkoYWJvdXROYW1lKSArIHNpemVZKGFib3V0RGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgIHNldFBvc1kocG9ydHJhaXQsIHBvc1koYWJvdXROYW1lKSk7XG4gICAgICAgICAgICBzZXRQb3NYKHBvcnRyYWl0LCBtYXJnaW4pO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTIsIHBvc0VuZFkoYWJvdXREZXNjcmlwdGlvbikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIC8vIHRpbGVzXG5cbiAgICAgICAgICAgIGNvbnN0IGZlZWxDb25maWRlbnRUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAyOCAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChmZWVsQ29uZmlkZW50LCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWShmZWVsQ29uZmlkZW50LCBwb3NZKHNlY3Rpb25MaW5lMikgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgICAgICBzZXRQb3NYKGZlZWxDb25maWRlbnQsIG1hcmdpbik7XG5cbiAgICAgICAgICAgIHNwcmluZ1NpZy51bnN1YnNjcmliZUFsbCgpO1xuICAgICAgICAgICAgZWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNraWxsVGlsZSBvZiBza2lsbFRpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyLCB0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgc3ByaW5nWCwgc3ByaW5nWSwgc3ByaW5nU2l6ZVkgfSA9IHNraWxsVGlsZTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRTaXplWChjb250YWluZXIsIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZVkoY29udGFpbmVyLCB0aWxlU2l6ZSAqIHNwcmluZ1NpemVZLnBvc2l0aW9uICsgKHNwcmluZ1NpemVZLnBvc2l0aW9uIC0gMSkgKiB0aWxlR2FwKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRQb3NYKGNvbnRhaW5lciwgdGlsZVBvc1goc3ByaW5nWC5wb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NZKGNvbnRhaW5lciwgdGlsZVBvc1koc3ByaW5nWS5wb3NpdGlvbikpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGV4dCh0aXRsZVRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDA0ICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjAxOCAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc1godGl0bGVUZXh0LCAwLjA4ICogdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NZKHRpdGxlVGV4dCwgdGlsZVNpemUgLyAyIC0gc2l6ZVkodGl0bGVUZXh0KSAvIDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGV4dChkZXNjcmlwdGlvblRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDA0ICogcywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjAxMSAqIHMsIGxpbmVIZWlnaHQ6IDAuMDE2ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZVgoZGVzY3JpcHRpb25UZXh0LCB0aWxlU2l6ZSAtIDAuMDMgKiBzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zWChkZXNjcmlwdGlvblRleHQsIDAuMDggKiB0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc1koZGVzY3JpcHRpb25UZXh0LCAwLjExICogcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW3NwcmluZ1NpZ10pO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTMsIHRpbGVQb3NZKDEpICsgdGlsZVNpemUgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChiaWdOYW1lcywgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlnTmFtZXMsIHBvc1koc2VjdGlvbkxpbmUzKSArIHNlY3Rpb25MaW5lR2FwKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlnTmFtZXMsIG1hcmdpbiAtIGJpZ1RleHROdWRnZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhc1RhY2tlZFRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiBtZXRhbCwgZm9udFNpemU6IDAuMDE0ICogcywgbGluZUhlaWdodDogMC4wMjUgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoaGFzVGFja2xlZCwgaGFzVGFja2VkVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoaGFzVGFja2xlZCwgc2l6ZVgoYmlnTmFtZXMpKTtcbiAgICAgICAgICAgIHNldFBvc1koaGFzVGFja2xlZCwgcG9zRW5kWShiaWdOYW1lcykgKyBiaWdUZXh0VG9TdWJ0ZXh0R2FwKTtcbiAgICAgICAgICAgIHNldFBvc1goaGFzVGFja2xlZCwgbWFyZ2luKTtcblxuICAgICAgICAgICAgY29uc3QgbGFzdEJpZ05hbWUgPSBiaWdOYW1lQ2xpZW50VGV4dHNbYmlnTmFtZUNsaWVudFRleHRzLmxlbmd0aCAtIDFdWzBdO1xuICAgICAgICAgICAgY29uc3QgYmlnTmFtZXNUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxOCAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYmlnTmFtZUNsaWVudFRleHRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBiaWdOYW1lQ2xpZW50VGV4dHNbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbyA9IGJpZ05hbWVDbGllbnRUZXh0c1t5XVt4XTtcblxuICAgICAgICAgICAgICAgICAgICBzdHlsZVRleHQobywgYmlnTmFtZXNUZXh0RGV0YWlscyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zWShvLCBwb3NZKGJpZ05hbWVzKSArIDAuMDEgKiBzICsgMC4wMzIgKiB5ICogcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc1gobywgZ3V0dGVyZWRDb2x1bW4gKyAwLjIyICogeCAqIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU0LCBwb3NFbmRZKGxhc3RCaWdOYW1lKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc2V0U2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGUsIHMpO1xuICAgICAgICAgICAgc2V0UG9zWShncmlmZmluQmxhY2tXaGl0ZSwgcG9zRW5kWShzZWN0aW9uTGluZTQpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZVRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDIgKiBzLCBsaW5lSGVpZ2h0OiAwLjA0ICogcywgZm9udEZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiB9O1xuICAgICAgICAgICAgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG4gICAgICAgICAgICBzdHlsZVRleHQoZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBncmlmZmluQmxhY2tXaGl0ZVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1goZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBndXR0ZXJlZENvbHVtbik7XG4gICAgICAgICAgICBzZXRQb3NZKGdyaWZmaW5CbGFja1doaXRlVGV4dCwgcG9zWShncmlmZmluQmxhY2tXaGl0ZSkgKyBzaXplWShncmlmZmluQmxhY2tXaGl0ZSkgLyAyIC0gc2l6ZVkoZ3JpZmZpbkJsYWNrV2hpdGVUZXh0KSAvIDIpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTUsIHBvc0VuZFkoZ3JpZmZpbkJsYWNrV2hpdGUpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICAvLyBiaW9cblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpb0hlYWRlciwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlvSGVhZGVyLCBwb3NFbmRZKHNlY3Rpb25MaW5lNSkgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgICAgICBzZXRQb3NYKGJpb0hlYWRlciwgbWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpb1RleHQsIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoYmlvVGV4dCwgZ3V0dGVyZWRXaWR0aEJldHdlZW4pO1xuICAgICAgICAgICAgc2V0UG9zWShiaW9UZXh0LCBwb3NZKGJpb0hlYWRlcikpO1xuICAgICAgICAgICAgc2V0UG9zWChiaW9UZXh0LCBndXR0ZXJlZENvbHVtbik7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNiwgcG9zRW5kWShiaW9UZXh0KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHJlY2VudFByb2plY3RIZWFkZXIsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NZKHJlY2VudFByb2plY3RIZWFkZXIsIHBvc0VuZFkoc2VjdGlvbkxpbmU2KSArIHNlY3Rpb25MaW5lR2FwKTtcbiAgICAgICAgICAgIHNldFBvc1gocmVjZW50UHJvamVjdEhlYWRlciwgbWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCB7IHByb2plY3ROYW1lVGV4dCwgcHJvamVjdERlc2NyaXB0aW9uVGV4dCB9IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KHByb2plY3ROYW1lVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMiAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KHByb2plY3REZXNjcmlwdGlvblRleHQsIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgICAgIHNldFNpemVYKHByb2plY3REZXNjcmlwdGlvblRleHQsIGd1dHRlcmVkV2lkdGhCZXR3ZWVuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNXaXRoU3BhY2luZyA9IHByb2plY3RzLmZsYXRNYXAoKHByb2plY3QpID0+IFtwcm9qZWN0LnByb2plY3ROYW1lVGV4dCwgMC4wMDYgKiBzLCBwcm9qZWN0LnByb2plY3REZXNjcmlwdGlvblRleHQsIDAuMDI4ICogc10pO1xuICAgICAgICAgICAgY29uc3QgW2FsaWdubWVudHMsIF9dID0gYWxpZ25pbmdXaXRoR2Fwc1kocHJvamVjdHNXaXRoU3BhY2luZyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHsgZWxlbWVudCwgb2Zmc2V0IH0gb2YgYWxpZ25tZW50cykge1xuICAgICAgICAgICAgICAgIHNldFBvc1koZWxlbWVudCwgcG9zWShyZWNlbnRQcm9qZWN0SGVhZGVyKSArIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgc2V0UG9zWChlbGVtZW50LCBndXR0ZXJlZENvbHVtbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0ucHJvamVjdERlc2NyaXB0aW9uVGV4dDtcblxuICAgICAgICAgICAgLy8gY29udGFjdFxuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTcsIHBvc0VuZFkobGFzdFByb2plY3REZXNjcmlwdGlvbikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dCh0ZWxsTWUsIHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDE5ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgIHNldFBvc1godGVsbE1lLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWSh0ZWxsTWUsIHBvc0VuZFkoc2VjdGlvbkxpbmU3KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KG9uZUNvbnZlcnNhdGlvbiwgc3ViR3JheVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1gob25lQ29udmVyc2F0aW9uLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShvbmVDb252ZXJzYXRpb24sIHBvc0VuZFkodGVsbE1lKSArIDAuMDA4ICogcyk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgoYmlnS29yZSwgcyAtIG1hcmdpbiAqIDIpO1xuICAgICAgICAgICAgc2V0UG9zWChiaWdLb3JlLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShiaWdLb3JlLCBwb3NFbmRZKG9uZUNvbnZlcnNhdGlvbikgKyAwLjEgKiBzKTtcblxuICAgICAgICAgICAgY29uc3QgbGlua1RleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAwLjMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wMTkgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoZW1haWwsIGxpbmtUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKGVtYWlsLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShlbWFpbCwgcG9zRW5kWShiaWdLb3JlKSArIDAuMDUgKiBzKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGxpbmtlZEluLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChsaW5rZWRJbiwgbWFyZ2luICsgMC4wNyAqIHMpO1xuICAgICAgICAgICAgc2V0UG9zWShsaW5rZWRJbiwgcG9zRW5kWShiaWdLb3JlKSArIDAuMDUgKiBzKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHByaXZhY3lQb2xpY3ksIGxpbmtUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKHByaXZhY3lQb2xpY3ksIHMgLSBzaXplWChwcml2YWN5UG9saWN5KSAtIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKHByaXZhY3lQb2xpY3ksIHBvc0VuZFkoYmlnS29yZSkgKyAwLjA1ICogcyk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lOCwgcG9zRW5kWShlbWFpbCkgKyBzZWN0aW9uTGluZUdhcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNpemVTY3JvbGxDb250YWluZXJGdWxsKCk7XG4gICAgICAgICAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcblxuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gMC4wOSAqIHM7XG4gICAgICAgICAgICBjb25zdCBmcm9tVG9wID0gMC4wMzEgKiBzO1xuICAgICAgICAgICAgY29uc3QgYmV0d2Vlbk1hcmdpbiA9IHMgLSBtYXJnaW4gKiAyO1xuXG4gICAgICAgICAgICBjb25zdCBiaWdUZXh0VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4xNSAqIHMsIGxpbmVIZWlnaHQ6IDAuMTggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBjb25zdCBzdWJHcmF5VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wOSAqIHMsIGxpbmVIZWlnaHQ6IDAuMTMgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGJpZ1RleHROdWRnZSA9IDAuMDA0ICogcztcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25MaW5lR2FwID0gMC4wODUgKiBzO1xuXG4gICAgICAgICAgICBjb25zdCBiaWdUZXh0VG9TdWJ0ZXh0R2FwID0gMC4wMyAqIHM7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChoZWFkbGluZVRleHQsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRQb3NYKGhlYWRsaW5lVGV4dCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koaGVhZGxpbmVUZXh0LCAwKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KHRyYXZlbGluZ1RoZVBhdGgsIHN1YkdyYXlUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBzZXRTaXplWCh0cmF2ZWxpbmdUaGVQYXRoLCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1godHJhdmVsaW5nVGhlUGF0aCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kodHJhdmVsaW5nVGhlUGF0aCwgcG9zRW5kWShoZWFkbGluZVRleHQpICsgYmlnVGV4dFRvU3VidGV4dEdhcCk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgobG9nbywgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKGxvZ28sIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGxvZ28sIHBvc0VuZFkodHJhdmVsaW5nVGhlUGF0aCkgKyBzICogMC4xNyk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMSwgcG9zRW5kWShsb2dvKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgLy8gYWJvdXRcblxuICAgICAgICAgICAgc2V0SW1hZ2VTaXplWChwb3J0cmFpdCwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKHBvcnRyYWl0LCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShwb3J0cmFpdCwgcG9zRW5kWShzZWN0aW9uTGluZTEpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQoYWJvdXROYW1lLCB7IGxldHRlclNwYWNpbmc6IDAuMDAxICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjA5ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgIHNldFBvc1goYWJvdXROYW1lLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShhYm91dE5hbWUsIHBvc0VuZFkocG9ydHJhaXQpICsgMC4yICogcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMDAxICogcywgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjA0NSAqIHMsIGxpbmVIZWlnaHQ6IDAuMSAqIHMsIGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChhYm91dERlc2NyaXB0aW9uLCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFNpemVYKGFib3V0RGVzY3JpcHRpb24sIGJldHdlZW5NYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWChhYm91dERlc2NyaXB0aW9uLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShhYm91dERlc2NyaXB0aW9uLCBwb3NFbmRZKGFib3V0TmFtZSkgKyAwLjAwNiAqIHMpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTIsIHBvc0VuZFkoYWJvdXREZXNjcmlwdGlvbikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIC8vIHRpbGVzXG5cbiAgICAgICAgICAgIGNvbnN0IGZlZWxDb25maWRlbnRUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAyOCAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChmZWVsQ29uZmlkZW50LCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWShmZWVsQ29uZmlkZW50LCBUKTtcbiAgICAgICAgICAgIHNldFBvc1goZmVlbENvbmZpZGVudCwgVCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gaW5uZXJXaWR0aCAtIDIgKiBtYXJnaW47IC8vIFpaWlogYW5vdGhlciBzY3JvbGwgd2lkdGg/XG4gICAgICAgICAgICBjb25zdCB0aWxlR2FwID0gMC4wMTUgKiBzO1xuICAgICAgICAgICAgY29uc3QgdGlsZVNpemUgPSAoc2Nyb2xsV2lkdGggLSB0aWxlR2FwICogKHNraWxsVGlsZUNvdW50WCAtIDEpKSAvIHNraWxsVGlsZUNvdW50WDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1goeDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFQ7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIG1hcmdpbiArICh0aWxlU2l6ZSArIHRpbGVHYXApICogeDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1koeTogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFQ7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuICh0aWxlU2l6ZSArIHRpbGVHYXApICogeSArIHBvc0VuZFkoZmVlbENvbmZpZGVudCkgKyAwLjA0ICogcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3ByaW5nU2lnLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgICAgICAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbGxUaWxlIG9mIHNraWxsVGlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjb250YWluZXIsIHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBzcHJpbmdYLCBzcHJpbmdZLCBzcHJpbmdTaXplWSB9ID0gc2tpbGxUaWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFNpemVYKGNvbnRhaW5lciwgdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaXplWShjb250YWluZXIsIHRpbGVTaXplICogc3ByaW5nU2l6ZVkucG9zaXRpb24gKyAoc3ByaW5nU2l6ZVkucG9zaXRpb24gLSAxKSAqIHRpbGVHYXApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc1goY29udGFpbmVyLCB0aWxlUG9zWChzcHJpbmdYLnBvc2l0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc1koY29udGFpbmVyLCB0aWxlUG9zWShzcHJpbmdZLnBvc2l0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUZXh0KHRpdGxlVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMDQgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDE4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zWCh0aXRsZVRleHQsIDAuMDggKiB0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc1kodGl0bGVUZXh0LCB0aWxlU2l6ZSAvIDIgLSBzaXplWSh0aXRsZVRleHQpIC8gMik7XG5cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUZXh0KGRlc2NyaXB0aW9uVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMDQgKiBzLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDExICogcywgbGluZUhlaWdodDogMC4wMTYgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaXplWChkZXNjcmlwdGlvblRleHQsIHRpbGVTaXplIC0gMC4wMyAqIHMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NYKGRlc2NyaXB0aW9uVGV4dCwgMC4wOCAqIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zWShkZXNjcmlwdGlvblRleHQsIDAuMTEgKiBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbc3ByaW5nU2lnXSk7XG5cbiAgICAgICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMywgVCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChiaWdOYW1lcywgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1koYmlnTmFtZXMsIFQpO1xuICAgICAgICAgICAgc2V0UG9zWChiaWdOYW1lcywgVCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhc1RhY2tlZFRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiBtZXRhbCwgZm9udFNpemU6IDAuMDE0ICogcywgbGluZUhlaWdodDogMC4wMjUgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgICAgICBzdHlsZVRleHQoaGFzVGFja2xlZCwgaGFzVGFja2VkVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoaGFzVGFja2xlZCwgc2l6ZVgoYmlnTmFtZXMpIC0gMC4wMjUgKiBzKTtcbiAgICAgICAgICAgIHNldFBvc1koaGFzVGFja2xlZCwgVCk7XG4gICAgICAgICAgICBzZXRQb3NYKGhhc1RhY2tsZWQsIFQpO1xuXG4gICAgICAgICAgICBjb25zdCBsYXN0QmlnTmFtZSA9IGJpZ05hbWVDbGllbnRUZXh0c1tiaWdOYW1lQ2xpZW50VGV4dHMubGVuZ3RoIC0gMV1bMF07XG4gICAgICAgICAgICBjb25zdCBiaWdOYW1lc1RleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDE4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBiaWdOYW1lQ2xpZW50VGV4dHMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJpZ05hbWVDbGllbnRUZXh0c1t5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvID0gYmlnTmFtZUNsaWVudFRleHRzW3ldW3hdO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGV4dChvLCBiaWdOYW1lc1RleHREZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRQb3NZKG8sIFQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3NYKG8sIFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU0LCBwb3NFbmRZKGxhc3RCaWdOYW1lKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICAgICAgc2V0U2l6ZVgoZ3JpZmZpbkJsYWNrV2hpdGUsIFQpO1xuICAgICAgICAgICAgc2V0UG9zWShncmlmZmluQmxhY2tXaGl0ZSwgVCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wMiAqIHMsIGxpbmVIZWlnaHQ6IDAuMDQgKiBzLCBmb250RmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiIH07XG4gICAgICAgICAgICBncmlmZmluQmxhY2tXaGl0ZVRleHQuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICAgICAgICAgIHN0eWxlVGV4dChncmlmZmluQmxhY2tXaGl0ZVRleHQsIGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChncmlmZmluQmxhY2tXaGl0ZVRleHQsIFQpO1xuICAgICAgICAgICAgc2V0UG9zWShncmlmZmluQmxhY2tXaGl0ZVRleHQsIFQpO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTUsIFQpO1xuXG4gICAgICAgICAgICAvLyBiaW9cblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpb0hlYWRlciwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1goYmlvSGVhZGVyLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShiaW9IZWFkZXIsIHBvc0VuZFkoc2VjdGlvbkxpbmUyKSArIHNlY3Rpb25MaW5lR2FwKTsgLy8gWlpaWiBza2lwcGVkIGEgYnVuY2hcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGJpb1RleHQsIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0U2l6ZVgoYmlvVGV4dCwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKGJpb1RleHQsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGJpb1RleHQsIHBvc0VuZFkoYmlvSGVhZGVyKSArIGJpZ1RleHRUb1N1YnRleHRHYXApO1xuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTYsIHBvc0VuZFkoYmlvVGV4dCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChyZWNlbnRQcm9qZWN0SGVhZGVyLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChyZWNlbnRQcm9qZWN0SGVhZGVyLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShyZWNlbnRQcm9qZWN0SGVhZGVyLCBwb3NZKHNlY3Rpb25MaW5lNikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgeyBwcm9qZWN0TmFtZVRleHQsIHByb2plY3REZXNjcmlwdGlvblRleHQgfSBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0TmFtZVRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0RGVzY3JpcHRpb25UZXh0LCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBzZXRTaXplWChwcm9qZWN0RGVzY3JpcHRpb25UZXh0LCBiZXR3ZWVuTWFyZ2luKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNXaXRoU3BhY2luZyA9IHByb2plY3RzLmZsYXRNYXAoKHByb2plY3QpID0+IFtwcm9qZWN0LnByb2plY3ROYW1lVGV4dCwgMC4wMiAqIHMsIHByb2plY3QucHJvamVjdERlc2NyaXB0aW9uVGV4dCwgMC4xICogc10pO1xuICAgICAgICAgICAgY29uc3QgW2FsaWdubWVudHMsIF9dID0gYWxpZ25pbmdXaXRoR2Fwc1kocHJvamVjdHNXaXRoU3BhY2luZyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHsgZWxlbWVudCwgb2Zmc2V0IH0gb2YgYWxpZ25tZW50cykge1xuICAgICAgICAgICAgICAgIHNldFBvc1goZWxlbWVudCwgbWFyZ2luKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NZKGVsZW1lbnQsIHBvc0VuZFkocmVjZW50UHJvamVjdEhlYWRlcikgKyAwLjEzICogcyArIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0ucHJvamVjdERlc2NyaXB0aW9uVGV4dDtcblxuICAgICAgICAgICAgLy8gY29udGFjdFxuXG4gICAgICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTcsIHBvc0VuZFkobGFzdFByb2plY3REZXNjcmlwdGlvbikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dCh0ZWxsTWUsIHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDkgKiBzLCBsaW5lSGVpZ2h0OiAwLjEzICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgICAgIHNldFNpemVYKHRlbGxNZSwgMC43ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NYKHRlbGxNZSwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1kodGVsbE1lLCBwb3NZKHNlY3Rpb25MaW5lNykgKyAwLjQgKiBzKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KG9uZUNvbnZlcnNhdGlvbiwgc3ViR3JheVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHNldFBvc1gob25lQ29udmVyc2F0aW9uLCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShvbmVDb252ZXJzYXRpb24sIHBvc0VuZFkodGVsbE1lKSArIDAuMDE2ICogcyk7XG5cbiAgICAgICAgICAgIHNldEltYWdlU2l6ZVgoYmlnS29yZSwgYmV0d2Vlbk1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NYKGJpZ0tvcmUsIG1hcmdpbik7XG4gICAgICAgICAgICBzZXRQb3NZKGJpZ0tvcmUsIHBvc0VuZFkob25lQ29udmVyc2F0aW9uKSArIDAuNSAqIHMpO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5rVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogbWV0YWwsIGZvbnRTaXplOiAwLjA4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICAgICAgc3R5bGVUZXh0KGVtYWlsLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChlbWFpbCwgbWFyZ2luKTtcbiAgICAgICAgICAgIHNldFBvc1koZW1haWwsIHBvc0VuZFkoYmlnS29yZSkgKyAwLjEgKiBzKTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KGxpbmtlZEluLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChsaW5rZWRJbiwgcG9zRW5kWChlbWFpbCkgKyAwLjA4ICogcyk7XG4gICAgICAgICAgICBzZXRQb3NZKGxpbmtlZEluLCBwb3NFbmRZKGJpZ0tvcmUpICsgMC4xICogcyk7XG5cbiAgICAgICAgICAgIHN0eWxlVGV4dChwcml2YWN5UG9saWN5LCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICAgICAgc2V0UG9zWChwcml2YWN5UG9saWN5LCBtYXJnaW4pO1xuICAgICAgICAgICAgc2V0UG9zWShwcml2YWN5UG9saWN5LCBwb3NFbmRZKGVtYWlsKSArIDAuMDggKiBzKTtcblxuICAgICAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU4LCBwb3NFbmRZKHByaXZhY3lQb2xpY3kpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBib2R5LCBmYWRlSW5BbmltYXRpb24sIG1ldGFsLCBtaWRCcm93biB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNMYW5kc2NhcGUsIHB4LCBzdHlsZVRleHQsIFRleHREZXRhaWxzIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEZvclBhZ2UsIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nIH0gZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFNWRywgZmV0Y2hTVkcsIG1hcFJhbmdlIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTcXVhcmUge1xuICAgIG1ham9yOiBIVE1MRWxlbWVudDtcbiAgICBtaW5vcnM6IEhUTUxFbGVtZW50W107XG59XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxDb250YWluZXIpO1xuKHNjcm9sbENvbnRhaW5lci5zdHlsZSBhcyBhbnkpLnNjcm9sbGJhckNvbG9yID0gYCR7bWlkQnJvd259ICR7bWV0YWx9NTVgO1xuXG5zY3JvbGxDb250YWluZXIub253aGVlbCA9IChlKSA9PiB7XG4gICAgaWYgKGlzTGFuZHNjYXBlKCkgJiYgIWUuc2hpZnRLZXkpIHNjcm9sbENvbnRhaW5lci5zY3JvbGxCeSh7IGxlZnQ6IGUuZGVsdGFZIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVNjcm9sbENvbnRhaW5lckxhbmRzY2FwZSgpIHtcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBnZXRTY3JvbGxIZWlnaHQoKTtcblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBzY3JvbGxIZWlnaHQgKiAwLjU7XG5cbiAgICBjb25zdCB1bmRlclNjcm9sbENvbnRhaW5lciA9IChpbm5lckhlaWdodCAtIHNjcm9sbEhlaWdodCkgLyAyO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBweChzY3JvbGxIZWlnaHQgKyB1bmRlclNjcm9sbENvbnRhaW5lcik7IC8vIHBsYWNlIHNjcm9sbCBiYXIgYXQgYm90dG9tIG9mIHBhZ2VcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUud2lkdGggPSBweChpbm5lcldpZHRoIC0gc2Nyb2xsTGVmdCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnRvcCA9IHB4KChpbm5lckhlaWdodCAtIHNjcm9sbEhlaWdodCkgLyAyKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUubGVmdCA9IHB4KHNjcm9sbExlZnQpO1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9IFwic2Nyb2xsXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNpemVTY3JvbGxDb250YWluZXJQb3J0cmFpdCgpIHtcbiAgICBjb25zdCBzY3JvbGxXaWR0aCA9IGdldFNjcm9sbFdpZHRoKCk7XG4gICAgY29uc3QgaGVhZGVyQmFySGVpZ2h0ID0gZ2V0SGVhZGVyQmFySGVpZ2h0KCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcHgoc2Nyb2xsV2lkdGgpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBweChpbm5lckhlaWdodCAtIGhlYWRlckJhckhlaWdodCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBweCgoaW5uZXJXaWR0aCAtIHNjcm9sbFdpZHRoKSAvIDIpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS50b3AgPSBweChoZWFkZXJCYXJIZWlnaHQpO1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCgpIHtcbiAgICBjb25zdCBoZWFkZXJCYXJIZWlnaHQgPSBnZXRIZWFkZXJCYXJIZWlnaHQoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUud2lkdGggPSBweChpbm5lcldpZHRoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcHgoaW5uZXJIZWlnaHQgLSBoZWFkZXJCYXJIZWlnaHQpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcHgoMCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnRvcCA9IHB4KGhlYWRlckJhckhlaWdodCk7XG5cbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIjtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9IDA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkZXJCYXJIZWlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKGlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgcmV0dXJuIChpbm5lckhlaWdodCAtIGdldFNjcm9sbEhlaWdodCgpKSAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlubmVySGVpZ2h0ICogMC4xNTtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsUGFkZGluZygpIHtcbiAgICBjb25zdCBzY3JvbGxQYWRkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JvbGxQYWRkaW5nLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbFBhZGRpbmcuc3R5bGUud2lkdGggPSBweCgxKTsgLy8gYW55IG5vbnplcm8gdGhpY2tuZXNzIGlzIGVub3VnaCB0byBleHRlbmQgc2Nyb2xsQ29udGFpbmVyXG4gICAgc2Nyb2xsUGFkZGluZy5zdHlsZS5oZWlnaHQgPSBweCgxKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxQYWRkaW5nKTtcbiAgICByZXR1cm4gc2Nyb2xsUGFkZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbEltYWdlKHNyYzogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgY29uc3Qgc2Nyb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNjcm9sbEltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbEltYWdlLnNyYyA9IHNyYztcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5hbmltYXRpb24gPSBmYWRlSW5BbmltYXRpb24oKTtcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nKHNjcm9sbEltYWdlKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxJbWFnZSk7XG4gICAgcmV0dXJuIHNjcm9sbEltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsU3ZnKHNyYzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3ZnID0gY3JlYXRlRWxlbWVudFNWRyhcInN2Z1wiKTtcbiAgICBzY3JvbGxTdmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsU3ZnLnN0eWxlLmFuaW1hdGlvbiA9IGZhZGVJbkFuaW1hdGlvbigpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IGZldGNoU1ZHKHNyYyk7XG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBmZXRjaGVkLmF0dHJpYnV0ZXMpIHNjcm9sbFN2Zy5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICAgICAgd2hpbGUgKGZldGNoZWQuZmlyc3RDaGlsZCkgc2Nyb2xsU3ZnLmFwcGVuZENoaWxkKGZldGNoZWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZldGNoQ29udGVudCgpO1xuXG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsU3ZnKTtcbiAgICByZXR1cm4gc2Nyb2xsU3ZnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGV4dCh0ZXh0OiBzdHJpbmcsIHBhcmVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzY3JvbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxUZXh0LmlubmVySFRNTCA9IHRleHQ7IC8vIFpaWlogaW5uZXJUZXh0IHdvdWxkIGJlIGJldHRlclxuICAgIHNjcm9sbFRleHQuc3R5bGUuYW5pbWF0aW9uID0gZmFkZUluQW5pbWF0aW9uKCk7XG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHBhcmVudCwgc2Nyb2xsVGV4dCk7XG4gICAgcmV0dXJuIHNjcm9sbFRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiBhZGRUZXh0KHRleHQsIHNjcm9sbENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0U3F1YXJlKG1ham9yVGV4dDogc3RyaW5nLCAuLi5taW5vclRleHRzOiBzdHJpbmdbXSk6IFRleHRTcXVhcmUge1xuICAgIGNvbnN0IG1ham9yID0gYWRkU2Nyb2xsVGV4dChtYWpvclRleHQpO1xuICAgIGNvbnN0IG1pbm9ycyA9IG1pbm9yVGV4dHMubWFwKGFkZFNjcm9sbFRleHQpO1xuICAgIHJldHVybiB7IG1ham9yLCBtaW5vcnMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlU2Nyb2xsVGV4dFNxdWFyZSh7IG1ham9yLCBtaW5vcnMgfTogVGV4dFNxdWFyZSwgbWFqb3JUZXh0RGV0YWlsczogVGV4dERldGFpbHMsIG1pbm9yVGV4dERldGFpbHM6IFRleHREZXRhaWxzKSB7XG4gICAgc3R5bGVUZXh0KG1ham9yLCBtYWpvclRleHREZXRhaWxzKTtcbiAgICBmb3IgKGNvbnN0IG1pbm9yIG9mIG1pbm9ycykgc3R5bGVUZXh0KG1pbm9yLCBtaW5vclRleHREZXRhaWxzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gaW5uZXJIZWlnaHQgKiAwLjc7XG4gICAgLy8gcmV0dXJuIDEuMDIgKiBpbm5lckhlaWdodCAtIDAuMDAwNDg1ICogaW5uZXJIZWlnaHQgKiBpbm5lckhlaWdodDtcbiAgICAvLyByZXR1cm4gaW5uZXJIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgICByZXR1cm4gaW5uZXJXaWR0aFxuICAgIC8vIGNvbnN0IFNDUk9MTF9XSURUSF9QUk9QT1JUSU9OID0gMTtcbiAgICAvLyByZXR1cm4gaW5uZXJXaWR0aCAqIFNDUk9MTF9XSURUSF9QUk9QT1JUSU9OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyV2l0aGluU2Nyb2xsWShlbGVtZW50OiBIVE1MRWxlbWVudCB8IFNWR1NWR0VsZW1lbnQsIHNjYWxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gZ2V0U2Nyb2xsSGVpZ2h0KCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcyAqIHNjYWxlO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcHgoaGVpZ2h0KTtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHB4KChzIC0gaGVpZ2h0KSAvIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyV2l0aGluU2Nyb2xsWChlbGVtZW50OiBIVE1MRWxlbWVudCB8IFNWR1NWR0VsZW1lbnQsIHNjYWxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICBjb25zdCB3aWR0aCA9IHMgKiBzY2FsZTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gcHgod2lkdGgpO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KChzIC0gd2lkdGgpIC8gMik7XG59XG4iLCJleHBvcnQgY2xhc3MgU2lnbmFsIHtcclxuICAgIHN1YnNjcmliZXJzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xyXG5cclxuICAgIHN1YnNjcmliZSA9IChzdWJzY3JpYmVyOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHMpID0+IHMoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVuc3Vic2NyaWJlID0gKHN1YnNjcmliZXI6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcclxuICAgIH07XHJcblxyXG4gICAgdW5zdWJzY3JpYmVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5jbGVhcigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdChmdW5jOiAoKSA9PiB2b2lkLCBvYnNlcnZlZFNpZ25hbHM6IFNpZ25hbFtdKSB7XHJcbiAgICBvYnNlcnZlZFNpZ25hbHMuZm9yRWFjaCgobykgPT4gby5zdWJzY3JpYmUoZnVuYykpO1xyXG4gICAgZnVuYygpO1xyXG59XHJcbiIsImltcG9ydCB7IGVmZmVjdCwgU2lnbmFsIH0gZnJvbSBcIi4vc2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaW5nIHtcclxuICAgIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICB0YXJnZXQ6IG51bWJlcjtcclxuICAgIHZlbG9jaXR5ID0gMDtcclxuICAgIGRhbXBpbmcgPSAwO1xyXG4gICAgc3RpZmZuZXNzID0gMDtcclxuICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgb25SZXN0ID0gKCkgPT4ge307XHJcbiAgICBvblVucmVzdCA9ICgpID0+IHt9O1xyXG5cclxuICAgIC8vIG14JycgLSBieCcgPSBreFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGluaXRpYWxWYWx1ZTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aWNrKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBhY2NlbGVyYXRpb24gPSB0aGlzLnN0aWZmbmVzcyAqICh0aGlzLnRhcmdldCAtIHRoaXMucG9zaXRpb24pIC0gdGhpcy5kYW1waW5nICogdGhpcy52ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ICs9IGFjY2VsZXJhdGlvbiAqIGR0O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gKz0gdGhpcy52ZWxvY2l0eSAqIGR0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0aWZmbmVzc0NyaXRpY2FsKHN0aWZmbmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGlmZm5lc3MgPSBzdGlmZm5lc3M7XHJcbiAgICAgICAgdGhpcy5kYW1waW5nID0gTWF0aC5zcXJ0KDQgKiBzdGlmZm5lc3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UgPSAwLjAxO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVTcHJpbmcoc3ByaW5nOiBTcHJpbmcsIHNpZ25hbDogU2lnbmFsKSB7XHJcbiAgICBpZiAoc3ByaW5nLmlzQW5pbWF0aW5nKSByZXR1cm47XHJcblxyXG4gICAgc3ByaW5nLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgIHNwcmluZy5vblVucmVzdCgpO1xyXG5cclxuICAgIGxldCBsYXN0TWlsbGlzID0gMDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaXJzdEZyYW1lKTtcclxuICAgIGZ1bmN0aW9uIGZpcnN0RnJhbWUobWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBsYXN0TWlsbGlzID0gbWlsbGlzO1xyXG4gICAgICAgIHRpY2tTcHJpbmcobWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0aWNrU3ByaW5nKG1pbGxpczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IG1pbGxpcyAtIGxhc3RNaWxsaXM7XHJcbiAgICAgICAgbGFzdE1pbGxpcyA9IG1pbGxpcztcclxuXHJcbiAgICAgICAgc3ByaW5nLnRpY2soc3RlcCAvIDEwMDApO1xyXG4gICAgICAgIHNpZ25hbC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHNwcmluZy50YXJnZXQgLSBzcHJpbmcucG9zaXRpb24pIDwgREVGQVVMVF9BTklNQVRJT05fVE9MRVJBTkNFICYmIE1hdGguYWJzKHNwcmluZy52ZWxvY2l0eSkgPCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgc3ByaW5nLnBvc2l0aW9uID0gc3ByaW5nLnRhcmdldDtcclxuICAgICAgICAgICAgc3ByaW5nLnZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgc3ByaW5nLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNpZ25hbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgc3ByaW5nLm9uUmVzdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGlja1NwcmluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmltYXRlV2l0aFNwcmluZyhzdGlmZm5lc3M6IG51bWJlciwgb3ZlclRpbWU6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwcmluZyA9IG5ldyBTcHJpbmcoMCk7XHJcbiAgICAgICAgY29uc3Qgc3ByaW5nU2lnID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgICAgIHNwcmluZy5zZXRTdGlmZm5lc3NDcml0aWNhbChzdGlmZm5lc3MpO1xyXG4gICAgICAgIHNwcmluZy50YXJnZXQgPSAxO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4gb3ZlclRpbWUoc3ByaW5nLnBvc2l0aW9uKTtcclxuICAgICAgICBzcHJpbmcub25SZXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzcHJpbmdTaWcudW5zdWJzY3JpYmUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBlZmZlY3QoYW5pbWF0ZSwgW3NwcmluZ1NpZ10pO1xyXG5cclxuICAgICAgICBhbmltYXRlU3ByaW5nKHNwcmluZywgc3ByaW5nU2lnKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzbGVlcCA9IChkZWxheTogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3BhY2VUb0ZpbGUoczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShcIiBcIiwgXCItXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFNWRzxLIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KHF1YWxpZmllZE5hbWU6IEspIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgcXVhbGlmaWVkTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmxhY2VkPFQsIFdpdGhpbj4oaXRlbXM6IFRbXSwgd2l0aGluOiBXaXRoaW4pIHtcbiAgICBjb25zdCBpdGVtc0ludGVybGFjZWQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaXRlbXNJbnRlcmxhY2VkLnB1c2goaXRlbSk7XG4gICAgICAgIGl0ZW1zSW50ZXJsYWNlZC5wdXNoKHdpdGhpbik7XG4gICAgfVxuICAgIGl0ZW1zSW50ZXJsYWNlZC5wb3AoKTtcbiAgICByZXR1cm4gaXRlbXNJbnRlcmxhY2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwUmFuZ2UobjogbnVtYmVyLCBzdGFydDE6IG51bWJlciwgc3RvcDE6IG51bWJlciwgc3RhcnQyOiBudW1iZXIsIHN0b3AyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKChuIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpICogKHN0b3AyIC0gc3RhcnQyKSArIHN0YXJ0Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yT25Ib3ZlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgY29sb3I6IHN0cmluZywgaG92ZXJDb2xvcjogc3RyaW5nKSB7XG4gICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIGVsZW1lbnQub25tb3VzZW92ZXIgPSAoKSA9PiAoZWxlbWVudC5zdHlsZS5jb2xvciA9IGhvdmVyQ29sb3IpO1xuICAgIGVsZW1lbnQub25tb3VzZWxlYXZlID0gKCkgPT4gKGVsZW1lbnQuc3R5bGUuY29sb3IgPSBjb2xvcik7XG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJjb2xvciAwLjJzIGVhc2Utb3V0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNWRyhmZXRjaFN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFN0cmluZyk7XG4gICAgY29uc3Qgc3ZnQ29udGVudCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdmdDb250ZW50LCBcImltYWdlL3N2Zyt4bWxcIikuZG9jdW1lbnRFbGVtZW50IGFzIHVua25vd24gYXMgU1ZHU1ZHRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkU1ZHKHN2ZzogU1ZHU1ZHRWxlbWVudCwgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBzdmcuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIFNWR0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJY29uU1ZHKGxvY2FsU2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJzdmdcIik7XG4gICAgY29uc3QgcGFkID0gNDtcbiAgICBpY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGljb24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAkey1wYWR9ICR7LXBhZH0gJHtsb2NhbFNpemUgKyAyICogcGFkfSAke2xvY2FsU2l6ZSArIDIgKiBwYWR9YCk7XG4gICAgcmV0dXJuIGljb247XG59XG5cbmV4cG9ydCBjb25zdCBtYWtlTGluZSA9IChzdmc6IFNWR1NWR0VsZW1lbnQsIHN0cm9rZVdpZHRoOiBudW1iZXIpID0+ICgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gY3JlYXRlRWxlbWVudFNWRyhcImxpbmVcIik7XG4gICAgc2V0QXR0cmlidXRlcyhsaW5lLCB7IFwic3Ryb2tlLXdpZHRoXCI6IHN0cm9rZVdpZHRoIH0pO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICByZXR1cm4gbGluZTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlUG9seWxpbmUgPSAoc3ZnOiBTVkdTVkdFbGVtZW50LCBzdHJva2VXaWR0aDogbnVtYmVyKSA9PiAoKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJwb2x5bGluZVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIHsgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGgsIGZpbGw6IFwibm9uZVwiIH0pO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICByZXR1cm4gbGluZTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkSG9tZVBhZ2UsIGFkZE5hdkJhciB9IGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcblxuKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIyMDAgMTBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIzMDAgMjBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI0MDAgMzBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI1MDAgNDBweCBSb2JvdG9cIiksIC8vXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI2MDAgNTBweCBSb2JvdG9cIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIyMDAgMjBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIzMDAgMzBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI0MDAgNDBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI1MDAgNTBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI2MDAgNjBweCBNZXJyaXdlYXRoZXJcIiksXG4gICAgXSk7XG4gICAgYXdhaXQgZG9jdW1lbnQuZm9udHMucmVhZHlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlcXVlc3RBbmltYXRpb25GcmFtZSk7XG5cbiAgICBhZGROYXZCYXIoKTtcbiAgICBhZGRIb21lUGFnZSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==