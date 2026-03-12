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
/* harmony export */   posX: () => (/* binding */ posX),
/* harmony export */   posY: () => (/* binding */ posY),
/* harmony export */   px: () => (/* binding */ px),
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
    return element instanceof HTMLElement ? element.offsetLeft : unpx(element.style.left);
}
function posY(element) {
    return element instanceof HTMLElement ? element.offsetTop : unpx(element.style.top);
}
function sizeX(element) {
    return element instanceof HTMLElement ? element.offsetWidth : element.clientWidth;
}
function sizeY(element) {
    return element instanceof HTMLElement ? element.offsetHeight : element.clientHeight;
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
    if (s.width)
        scrollText.style.width = px(s.width);
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






function layoutSectionLine(sectionLine, y) {
    const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
    sectionLine.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.001 * s);
    sectionLine.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerWidth);
    sectionLine.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(y);
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
        const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
        const margin = 0.05 * s; // ZZZZ take out
        const navBottom = 0.05 * s;
        koreLogo.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.08 * s);
        koreLogo.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(koreLogo) - 0.002 * s);
        koreLogo.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        tagline.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.17 * s);
        tagline.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(tagline));
        tagline.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posX)(koreLogo) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(koreLogo) + 0.018 * s);
        console.log(s);
        const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, fontFamily: "Roboto" };
        for (let i = navItems.length - 1; i >= 0; i--) {
            const navItem = navItems[i];
            const nextNavItem = navItems[i + 1];
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(navItem, navItemTextDetails);
            if (nextNavItem)
                navItem.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posX)(nextNavItem) - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(navItem) - 0.02 * s);
            else
                navItem.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(contact) - 0.07 * s);
            navItem.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(navItem));
        }
    }, [_constants__WEBPACK_IMPORTED_MODULE_0__.bodySig]);
}
function addHomePage() {
    function addSectionLine() {
        const sectionLine = document.createElement("div");
        sectionLine.style.position = "absolute";
        sectionLine.style.background = "#111111";
        (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(_scroll__WEBPACK_IMPORTED_MODULE_3__.scrollContainer, sectionLine);
        return sectionLine;
    }
    const headlineText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("PROTECT YOURSELF FROM PROJECT HAZARDS.");
    const travelingThePath = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Travelling the path unguided can cost you.");
    const logo = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollSvg)("logo.svg");
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
    const bioName = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("SCOTT G. GRIFFIN");
    navItemJumpElements.about = bioName;
    const bioDescription = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Founder<br><br>With 37 years in the trenches of broadcast, AV, and media systems integration, I’ve built my career protecting clients from being steamrolled by complexity, bad planning, and unrealistic promises.<br><br>I’m not here to play nice — I’m here to make sure things get done right.<br><br>As a Subject Matter Expert and Owner’s Rep, I bring clear-eyed strategy, engineering leadership, and a no-BS approach to complex projects. From early-stage visioning through final implementation, I make sure my clients are fully informed and stay in control — without being buried in technical noise or vendor spin.<br><br>I’ve led high-profile projects for the NBA, WWE, Univision, Disney, and more. My background includes running a successful integration firm, managing engineering teams of 50+, and overseeing some of the largest media facility builds of the last 30 years. Whether we’re talking network ops, cloud workflows, post-production, or studio ops workflows — I’ve done it, and I bring the scars (and lessons) with me.<br><br>My job is simple: make sure my clients are protected, respected, and have delivered exactly what they need—nothing more, and absolutely nothing less.");
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
    const bigKore = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollSvg)("big-kore.svg");
    const email = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Email");
    giveHover(email, _constants__WEBPACK_IMPORTED_MODULE_0__.white, _constants__WEBPACK_IMPORTED_MODULE_0__.metal);
    email.onclick = () => window.location.assign("mailto:zakgriffin1209@gmail.com");
    const linkedIn = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("LinkedIn");
    giveHover(linkedIn, _constants__WEBPACK_IMPORTED_MODULE_0__.white, _constants__WEBPACK_IMPORTED_MODULE_0__.metal);
    linkedIn.style.cursor = "pointer";
    linkedIn.onclick = () => {
        window.open("https://linkedin.com", "_blank");
    };
    const privacyPolicy = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Privacy Policy © 2026 KORE SME LLC");
    const sectionLine8 = addSectionLine();
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.registerUpdateLayout)(() => {
        (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.resizeScrollContainerFull)();
        const s = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.getScrollWidth)();
        const margin = 0.05 * s;
        const fromTop = 0.031 * s;
        const bigTextTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.075 * s, width: 0.4 * s, lineHeight: 0.084 * s, fontFamily: "Roboto" };
        const subGrayTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.019 * s, fontFamily: "Roboto" };
        const bigTextNudge = 0.004 * s;
        const sectionLineGap = 0.04 * s;
        const gutter = 0.02 * s;
        const gutteredColumn = s / 2 + gutter;
        const gutteredWidthBetween = s / 2 - 2 * gutter;
        const TEMP = 0.02 * s;
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(headlineText, bigTextTextDetails);
        headlineText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - bigTextNudge);
        headlineText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(fromTop);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(travelingThePath, subGrayTextDetails);
        travelingThePath.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        travelingThePath.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(headlineText) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(headlineText) + TEMP);
        logo.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(headlineText) * 1.04);
        logo.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerWidth - logo.scrollWidth - margin);
        logo.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(fromTop - 0.03 * s);
        layoutSectionLine(sectionLine1, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(travelingThePath) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(travelingThePath) + sectionLineGap);
        // bio
        const longParagraphsTextDetails = { letterSpacing: 0.001 * s, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, lineHeight: 0.02 * s, fontFamily: "Merriweather" };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioDescription, longParagraphsTextDetails);
        const scrollWidth = innerWidth - 2 * margin; // ZZZZ another scroll width?
        const tileGap = 0.015 * s;
        const tileSize = (scrollWidth - tileGap * (skillTileCountX - 1)) / skillTileCountX;
        function tilePosX(x) {
            return margin + (tileSize + tileGap) * x;
        }
        function tilePosY(y) {
            return (tileSize + tileGap) * y + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(feelConfident) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(feelConfident) + 0.04 * s;
        }
        const bioLeft = tilePosX(2); // ZZZZ this guy got broken up
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioName, { letterSpacing: 0.001 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.02 * s, fontFamily: "Roboto" });
        bioName.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine1) + sectionLineGap);
        bioName.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioLeft);
        bioDescription.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s - bioLeft - margin);
        bioDescription.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioName) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioName));
        bioDescription.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioLeft);
        portrait.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioName) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioDescription));
        portrait.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioName));
        portrait.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        layoutSectionLine(sectionLine2, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioDescription) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioDescription) + sectionLineGap);
        // tiles
        const feelConfidentTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.028 * s, fontFamily: "Roboto" };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(feelConfident, feelConfidentTextDetails);
        feelConfident.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine2) + sectionLineGap);
        feelConfident.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        springSig.unsubscribeAll();
        (0,_signal__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
            for (const skillTile of skillTiles) {
                const { container, titleText, descriptionText, springX, springY, springSizeY } = skillTile;
                container.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tileSize);
                container.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tileSize * springSizeY.position + (springSizeY.position - 1) * tileGap);
                container.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosX(springX.position));
                container.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosY(springY.position));
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(titleText, { letterSpacing: 0.0004 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.018 * s, fontFamily: "Roboto" });
                titleText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.08 * tileSize);
                titleText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tileSize / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(titleText) / 2);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(descriptionText, { letterSpacing: 0.0004 * s, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.011 * s, lineHeight: 0.016 * s, width: tileSize - 0.03 * s, fontFamily: "Roboto" });
                descriptionText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.08 * tileSize);
                descriptionText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.11 * s);
            }
        }, [springSig]);
        layoutSectionLine(sectionLine3, tilePosY(1) + tileSize + sectionLineGap);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bigNames, bigTextTextDetails);
        bigNames.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine3) + sectionLineGap);
        bigNames.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - bigTextNudge);
        const hasTackedTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.014 * s, lineHeight: 0.025 * s, width: (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(bigNames) - 0.025 * s, fontFamily: "Roboto" };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(hasTackled, hasTackedTextDetails);
        hasTackled.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigNames) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigNames) + TEMP);
        hasTackled.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1][0];
        const bigNamesTextDetails = { fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.018 * s, fontFamily: "Roboto" };
        for (let y = 0; y < bigNameClientTexts.length; y++) {
            for (let x = 0; x < bigNameClientTexts[y].length; x++) {
                const o = bigNameClientTexts[y][x];
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(o, bigNamesTextDetails);
                o.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigNames) + 0.01 * s + 0.032 * y * s);
                o.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(gutteredColumn + 0.22 * x * s);
            }
        }
        layoutSectionLine(sectionLine4, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(lastBigName) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(lastBigName) + sectionLineGap);
        griffinBlackWhite.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s);
        griffinBlackWhite.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine4) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(sectionLine4) + sectionLineGap);
        const griffinBlackWhiteTextDetails = { fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.02 * s, width: 0.41 * s, lineHeight: 0.04 * s, fontFamily: "Merriweather" };
        griffinBlackWhiteText.style.fontStyle = "italic";
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
        griffinBlackWhiteText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(gutteredColumn);
        griffinBlackWhiteText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(griffinBlackWhite) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhite) / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhiteText) / 2);
        layoutSectionLine(sectionLine5, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(griffinBlackWhite) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhite) + sectionLineGap);
        // bio
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioHeader, bigTextTextDetails);
        bioHeader.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine5) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(sectionLine5) + sectionLineGap);
        bioHeader.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - bigTextNudge);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioText, longParagraphsTextDetails);
        bioText.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(gutteredWidthBetween);
        bioText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioHeader));
        bioText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(gutteredColumn);
        layoutSectionLine(sectionLine6, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioText) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioText) + sectionLineGap);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(recentProjectHeader, bigTextTextDetails);
        recentProjectHeader.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine6) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(sectionLine6) + sectionLineGap);
        recentProjectHeader.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - bigTextNudge);
        for (const { projectNameText, projectDescriptionText } of projects) {
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectNameText, { letterSpacing: 0.001 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.02 * s, fontFamily: "Roboto" });
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectDescriptionText, longParagraphsTextDetails);
            projectDescriptionText.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(gutteredWidthBetween);
        }
        const projectsWithSpacing = projects.flatMap((project) => [project.projectNameText, 0.006 * s, project.projectDescriptionText, 0.028 * s]);
        const [alignments, _] = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.aligningWithGapsY)(projectsWithSpacing);
        for (const { element, offset } of alignments) {
            element.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(recentProjectHeader) + offset);
            element.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(gutteredColumn);
        }
        const lastProjectDescription = projects[projects.length - 1].projectDescriptionText;
        // contact
        layoutSectionLine(sectionLine7, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(lastProjectDescription) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(lastProjectDescription) + sectionLineGap);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(tellMe, { letterSpacing: 0.3, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.019 * s, fontFamily: "Roboto" });
        tellMe.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        tellMe.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine7) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(sectionLine7) + sectionLineGap);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(oneConversation, subGrayTextDetails);
        oneConversation.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        oneConversation.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(tellMe) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(tellMe) + 0.008 * s);
        bigKore.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s - margin * 2);
        bigKore.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        bigKore.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(oneConversation) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(oneConversation) + 0.1 * s);
        const linkTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.019 * s, fontFamily: "Roboto" };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(email, linkTextDetails);
        email.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        email.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigKore) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigKore) + 0.05 * s);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(linkedIn, linkTextDetails);
        linkedIn.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin + 0.07 * s);
        linkedIn.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigKore) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigKore) + 0.05 * s);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(privacyPolicy, linkTextDetails);
        privacyPolicy.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(privacyPolicy) - margin);
        privacyPolicy.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigKore) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigKore) + 0.05 * s);
        layoutSectionLine(sectionLine8, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(email) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(email) + sectionLineGap);
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
        return innerHeight * 0.1;
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
        document.fonts.load("1px Roboto"),
        document.fonts.load("1px Merriweather"),
    ]);
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addNavBar)();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addHomePage)();
}))();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLENBQUM7SUFDdEIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDOzs7Ozs7O1VDcEVGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNEO0FBRXRELENBQUMsR0FBUyxFQUFFO0lBQ1IsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2QsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0tBQzFDLENBQUMsQ0FBQztJQUVILHNEQUFTLEVBQUUsQ0FBQztJQUNaLHdEQUFXLEVBQUUsQ0FBQztBQUNsQixDQUFDLEVBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29yZS8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9wYWdlLnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvcGFnZXMvaG9tZS50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3Njcm9sbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NpZ25hbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NwcmluZy50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNMYW5kc2NhcGUgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCIuL3NpZ25hbFwiO1xuXG5leHBvcnQgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5leHBvcnQgY29uc3QgYm9keVNpZyA9IG5ldyBTaWduYWwoKTtcbndpbmRvdy5vbnJlc2l6ZSA9IGJvZHlTaWcudXBkYXRlO1xuXG5leHBvcnQgY29uc3QgbWlkQnJvd24gPSBcIiM2MDM5MTNcIjtcbmV4cG9ydCBjb25zdCBqZWFucyA9IFwicmdiKDM4LCA1MSwgODYpXCJcbmV4cG9ydCBjb25zdCBkZWVwQnJvd24gPSBcIiMzQzI0MTVcIjtcbmV4cG9ydCBjb25zdCBibGFjayA9IFwiIzAwMDAwMFwiO1xuZXhwb3J0IGNvbnN0IHdoaXRlID0gXCIjRkZGRkZGXCI7XG5leHBvcnQgY29uc3QgbWV0YWwgPSBcIiM2QzcxNzVcIjtcbmV4cG9ydCBjb25zdCB0aWxlQnJvd24gPSBcIiM2OTUwMzhcIjtcblxuZXhwb3J0IGNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9ICgpID0+IGBmYWRlSW4ke2lzTGFuZHNjYXBlKCkgPyBcIlhcIiA6IFwiWVwifSBlYXNlIDAuNnNgO1xuXG5leHBvcnQgY29uc3QgU0NST0xMX1RFWFRfV0lEVEhfSEVJR0hUX1BST1BPUlRJT04gPSAwLjk1O1xuIiwiaW1wb3J0IHsgaW50ZXJsYWNlZCB9IGZyb20gXCIuL3V0aWxcIjtcblxuaW50ZXJmYWNlIEVsZW1lbnRBbGlnbm1lbnQge1xuICAgIGVsZW1lbnQ6IEJveEVsZW1lbnQ7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dERldGFpbHMge1xuICAgIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgICBmb250V2VpZ2h0OiBudW1iZXI7XG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgbGluZUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgQm94RWxlbWVudCA9IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHB4KHBpeGVsczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHBpeGVscyArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gYXhpc0FsaWduaW5nV2l0aEdhcHMoYXhpc1NpemU6IChlbGVtZW50OiBCb3hFbGVtZW50KSA9PiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGVsZW1lbnRPckdhcHM6IChCb3hFbGVtZW50IHwgbnVtYmVyKVtdKTogW0VsZW1lbnRBbGlnbm1lbnRbXSwgbnVtYmVyXSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRBbGlnbm1lbnRzID0gW107XG4gICAgICAgIGxldCBydW5uaW5nVG90YWwgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRPckdhcCBvZiBlbGVtZW50T3JHYXBzKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRBbGlnbm1lbnRzLnB1c2goeyBlbGVtZW50OiBlbGVtZW50T3JHYXAsIG9mZnNldDogcnVubmluZ1RvdGFsIH0pO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdUb3RhbCArPSBheGlzU2l6ZShlbGVtZW50T3JHYXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nVG90YWwgKz0gZWxlbWVudE9yR2FwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZWxlbWVudEFsaWdubWVudHMsIHJ1bm5pbmdUb3RhbF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdW5weCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZS5zbGljZSgwLCAtMikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvc1goZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldExlZnQgOiB1bnB4KGVsZW1lbnQuc3R5bGUubGVmdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NZKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgOiB1bnB4KGVsZW1lbnQuc3R5bGUudG9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVYKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IGVsZW1lbnQuY2xpZW50V2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXplWShlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogZWxlbWVudC5jbGllbnRIZWlnaHQ7XG59XG5cbi8vIFpaWlogd2FudCBhIHNob3J0IGhhbmQgZm9yIGNvbW1vbiBzaW1wbGUgdXNlXG5leHBvcnQgY29uc3QgYWxpZ25pbmdXaXRoR2Fwc1ggPSBheGlzQWxpZ25pbmdXaXRoR2FwcyhzaXplWCk7XG5leHBvcnQgY29uc3QgYWxpZ25pbmdXaXRoR2Fwc1kgPSBheGlzQWxpZ25pbmdXaXRoR2FwcyhzaXplWSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmRzY2FwZSgpIHtcbiAgICByZXR1cm4gaW5uZXJXaWR0aCAvIGlubmVySGVpZ2h0ID4gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlcldpdGhHYXBZKGVsZW1lbnRzOiBIVE1MRWxlbWVudFtdLCBnYXA6IG51bWJlciwgY2VudGVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50c1dpdGhHYXBzID0gaW50ZXJsYWNlZChlbGVtZW50cywgZ2FwKTtcbiAgICBjb25zdCBbZWxlbWVudEFsaWdubWVudHMsIHRvdGFsSGVpZ2h0XSA9IGFsaWduaW5nV2l0aEdhcHNZKGVsZW1lbnRzV2l0aEdhcHMpO1xuXG4gICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIG9mZnNldCB9IG9mIGVsZW1lbnRBbGlnbm1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcHgob2Zmc2V0ICsgY2VudGVyIC0gdG90YWxIZWlnaHQgLyAyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJFbGVtZW50WChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KGlubmVyV2lkdGggLyAyIC0gc2l6ZVgoZWxlbWVudCkgLyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlckVsZW1lbnRZKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBweChpbm5lckhlaWdodCAvIDIgLSBzaXplWShlbGVtZW50KSAvIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVUZXh0KHNjcm9sbFRleHQ6IEhUTUxFbGVtZW50LCBzOiBUZXh0RGV0YWlscykge1xuICAgIHNjcm9sbFRleHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250RmFtaWx5ID0gcy5mb250RmFtaWx5O1xuICAgIHNjcm9sbFRleHQuc3R5bGUuZm9udFdlaWdodCA9IFwiXCIgKyBzLmZvbnRXZWlnaHQ7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250U2l6ZSA9IHB4KHMuZm9udFNpemUpO1xuICAgIHNjcm9sbFRleHQuc3R5bGUuY29sb3IgPSBzLmNvbG9yO1xuICAgIGlmIChzLmxldHRlclNwYWNpbmcpIHNjcm9sbFRleHQuc3R5bGUubGV0dGVyU3BhY2luZyA9IHB4KHMubGV0dGVyU3BhY2luZyk7XG4gICAgaWYgKHMud2lkdGgpIHNjcm9sbFRleHQuc3R5bGUud2lkdGggPSBweChzLndpZHRoKTtcbiAgICBpZiAocy5saW5lSGVpZ2h0KSBzY3JvbGxUZXh0LnN0eWxlLmxpbmVIZWlnaHQgPSBweChzLmxpbmVIZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgYm9keVNpZyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVGV4dERldGFpbHMgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IGVmZmVjdCB9IGZyb20gXCIuL3NpZ25hbFwiO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlQ2xlYW51cHMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmNvbnN0IGF3YWl0QmVmb3JlTGF5b3V0cyA9IG5ldyBTZXQ8UHJvbWlzZTx2b2lkPj4oKTtcbmNvbnN0IGJlZm9yZUxheW91dHMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhd2FpdExheW91dEZvckltYWdlTG9hZGluZyhpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGF3YWl0QmVmb3JlTGF5b3V0cy5hZGQoaW1hZ2UuZGVjb2RlKCkpO1xufVxuXG4vLyBUT0RPIGdyb3NzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FoaGgoKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoYXdhaXRCZWZvcmVMYXlvdXRzKTtcbiAgICBhd2FpdEJlZm9yZUxheW91dHMuY2xlYXIoKTtcbiAgICBhd2FpdCBzbGVlcCgxMCk7XG4gICAgcnVuQWxsQW5kQ2xlYXIoYmVmb3JlTGF5b3V0cyk7XG4gICAgYm9keVNpZy51cGRhdGUoKTsgLy8gVE9ETyBncm9zc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVcGRhdGVMYXlvdXQodXBkYXRlTGF5b3V0OiAoKSA9PiB2b2lkKSB7XG4gICAgYXdhaXQgd2FoaGgoKTtcbiAgICBlZmZlY3QodXBkYXRlTGF5b3V0LCBbYm9keVNpZ10pO1xuICAgIHBhZ2VDbGVhbnVwcy5hZGQoKCkgPT4gYm9keVNpZy51bnN1YnNjcmliZSh1cGRhdGVMYXlvdXQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkRm9yUGFnZShwYXJlbnQ6IEVsZW1lbnQsIGNoaWxkOiBFbGVtZW50KSB7XG4gICAgYmVmb3JlTGF5b3V0cy5hZGQoKCkgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICBwYWdlQ2xlYW51cHMuYWRkKCgpID0+IHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5MYXN0UGFnZSgpIHtcbiAgICBydW5BbGxBbmRDbGVhcihwYWdlQ2xlYW51cHMpO1xufVxuXG5mdW5jdGlvbiBydW5BbGxBbmRDbGVhcihzZXQ6IFNldDwoKSA9PiB2b2lkPikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZXQpIGl0ZW0oKTtcbiAgICBzZXQuY2xlYXIoKTtcbn1cbiIsImltcG9ydCB7IGJsYWNrLCBib2R5U2lnLCBqZWFucywgbWV0YWwsIHRpbGVCcm93biwgd2hpdGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhbGlnbmluZ1dpdGhHYXBzWSwgcG9zWCwgcG9zWSwgcHgsIHNpemVYLCBzaXplWSwgc3R5bGVUZXh0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRGb3JQYWdlLCByZWdpc3RlclVwZGF0ZUxheW91dCB9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQgeyBhZGRTY3JvbGxJbWFnZSwgYWRkU2Nyb2xsU3ZnLCBhZGRTY3JvbGxUZXh0LCBhZGRUZXh0LCBnZXRTY3JvbGxXaWR0aCwgcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCwgc2Nyb2xsQ29udGFpbmVyIH0gZnJvbSBcIi4uL3Njcm9sbFwiO1xuaW1wb3J0IHsgZWZmZWN0LCBTaWduYWwgfSBmcm9tIFwiLi4vc2lnbmFsXCI7XG5pbXBvcnQgeyBhbmltYXRlU3ByaW5nLCBTcHJpbmcgfSBmcm9tIFwiLi4vc3ByaW5nXCI7XG5cbmZ1bmN0aW9uIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lOiBIVE1MRWxlbWVudCwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG4gICAgc2VjdGlvbkxpbmUuc3R5bGUuaGVpZ2h0ID0gcHgoMC4wMDEgKiBzKTtcbiAgICBzZWN0aW9uTGluZS5zdHlsZS53aWR0aCA9IHB4KGlubmVyV2lkdGgpO1xuICAgIHNlY3Rpb25MaW5lLnN0eWxlLnRvcCA9IHB4KHkpO1xufVxuXG5jb25zdCBuYXZJdGVtSnVtcEVsZW1lbnRzOiB7XG4gICAgYWJvdXQ/OiBIVE1MRWxlbWVudDtcbiAgICBzZXJ2aWNlcz86IEhUTUxFbGVtZW50O1xuICAgIGJpbz86IEhUTUxFbGVtZW50O1xuICAgIHJlY2VudFByb2plY3RzPzogSFRNTEVsZW1lbnQ7XG4gICAgY29udGFjdD86IEhUTUxFbGVtZW50O1xufSA9IHt9O1xuXG5mdW5jdGlvbiBnaXZlSG92ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGVudGVyQ29sb3I6IHN0cmluZywgbGVhdmVDb2xvcjogc3RyaW5nKSB7XG4gICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImNvbG9yIDAuMnNcIjtcbiAgICBlbGVtZW50Lm9ubW91c2VlbnRlciA9ICgpID0+IChlbGVtZW50LnN0eWxlLmNvbG9yID0gZW50ZXJDb2xvcik7XG4gICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiAoZWxlbWVudC5zdHlsZS5jb2xvciA9IGxlYXZlQ29sb3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmF2QmFyKCkge1xuICAgIC8vLyBaWlpaIHB1bGwgdGhpcyBvdXQgd2l0aCBvbmUgaW4gc2Nyb2xsLnRzXG4gICAgZnVuY3Rpb24gYWRkSW1hZ2Uoc3JjOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBzY3JvbGxJbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgc2Nyb2xsSW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICBzY3JvbGxJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBzY3JvbGxJbWFnZS5vbmxvYWQgPSAoKSA9PiBib2R5U2lnLnVwZGF0ZSgpOyAvLyBaWlpaIHN0dXBpZFxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsSW1hZ2UpO1xuICAgICAgICByZXR1cm4gc2Nyb2xsSW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3Qga29yZUxvZ28gPSBhZGRJbWFnZShcImJpZy1rb3JlLnN2Z1wiKTtcblxuICAgIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRhZ2xpbmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGFnbGluZS5zcmMgPSBcInRhZ2xpbmUuc3ZnXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcblxuICAgIGZ1bmN0aW9uIGFkZE5hdkl0ZW0obmF2SXRlbU5hbWU6IHN0cmluZywgazoga2V5b2YgdHlwZW9mIG5hdkl0ZW1KdW1wRWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuYXZJdGVtLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xuICAgICAgICBuYXZJdGVtLmlubmVyVGV4dCA9IG5hdkl0ZW1OYW1lO1xuXG4gICAgICAgIG5hdkl0ZW0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdkl0ZW1KdW1wRWxlbWVudHNba10/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2l2ZUhvdmVyKG5hdkl0ZW0sIG1ldGFsLCB3aGl0ZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICAgICAgcmV0dXJuIG5hdkl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgYWJvdXQgPSBhZGROYXZJdGVtKFwiQUJPVVRcIiwgXCJhYm91dFwiKTtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IGFkZE5hdkl0ZW0oXCJTRVJWSUNFU1wiLCBcInNlcnZpY2VzXCIpO1xuICAgIGNvbnN0IGJpbyA9IGFkZE5hdkl0ZW0oXCJCSU9cIiwgXCJiaW9cIik7XG4gICAgY29uc3QgcmVjZW50UHJvamVjdHMgPSBhZGROYXZJdGVtKFwiUkVDRU5UIFBST0pFQ1RTXCIsIFwicmVjZW50UHJvamVjdHNcIik7XG4gICAgY29uc3QgY29udGFjdCA9IGFkZE5hdkl0ZW0oXCJDT05UQUNUXCIsIFwiY29udGFjdFwiKTtcblxuICAgIGNvbnN0IG5hdkl0ZW1zID0gW2Fib3V0LCBzZXJ2aWNlcywgYmlvLCByZWNlbnRQcm9qZWN0cywgY29udGFjdF07XG5cbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gMC4wNSAqIHM7IC8vIFpaWlogdGFrZSBvdXRcblxuICAgICAgICBjb25zdCBuYXZCb3R0b20gPSAwLjA1ICogcztcblxuICAgICAgICBrb3JlTG9nby5zdHlsZS53aWR0aCA9IHB4KDAuMDggKiBzKTtcbiAgICAgICAga29yZUxvZ28uc3R5bGUudG9wID0gcHgobmF2Qm90dG9tIC0gc2l6ZVkoa29yZUxvZ28pIC0gMC4wMDIgKiBzKTtcbiAgICAgICAga29yZUxvZ28uc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG5cbiAgICAgICAgdGFnbGluZS5zdHlsZS53aWR0aCA9IHB4KDAuMTcgKiBzKTtcbiAgICAgICAgdGFnbGluZS5zdHlsZS50b3AgPSBweChuYXZCb3R0b20gLSBzaXplWSh0YWdsaW5lKSk7XG4gICAgICAgIHRhZ2xpbmUuc3R5bGUubGVmdCA9IHB4KHBvc1goa29yZUxvZ28pICsgc2l6ZVgoa29yZUxvZ28pICsgMC4wMTggKiBzKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICAgICAgY29uc3QgbmF2SXRlbVRleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAwLjAwMDggKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDEgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG5hdkl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZJdGVtID0gbmF2SXRlbXNbaV07XG4gICAgICAgICAgICBjb25zdCBuZXh0TmF2SXRlbSA9IG5hdkl0ZW1zW2kgKyAxXTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KG5hdkl0ZW0sIG5hdkl0ZW1UZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBpZiAobmV4dE5hdkl0ZW0pIG5hdkl0ZW0uc3R5bGUubGVmdCA9IHB4KHBvc1gobmV4dE5hdkl0ZW0pIC0gc2l6ZVgobmF2SXRlbSkgLSAwLjAyICogcyk7XG4gICAgICAgICAgICBlbHNlIG5hdkl0ZW0uc3R5bGUubGVmdCA9IHB4KHMgLSBzaXplWChjb250YWN0KSAtIDAuMDcgKiBzKTtcblxuICAgICAgICAgICAgbmF2SXRlbS5zdHlsZS50b3AgPSBweChuYXZCb3R0b20gLSBzaXplWShuYXZJdGVtKSk7XG4gICAgICAgIH1cbiAgICB9LCBbYm9keVNpZ10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG9tZVBhZ2UoKSB7XG4gICAgZnVuY3Rpb24gYWRkU2VjdGlvbkxpbmUoKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VjdGlvbkxpbmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHNlY3Rpb25MaW5lLnN0eWxlLmJhY2tncm91bmQgPSBcIiMxMTExMTFcIjtcblxuICAgICAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzZWN0aW9uTGluZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uTGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkbGluZVRleHQgPSBhZGRTY3JvbGxUZXh0KFwiUFJPVEVDVCBZT1VSU0VMRiBGUk9NIFBST0pFQ1QgSEFaQVJEUy5cIik7XG4gICAgY29uc3QgdHJhdmVsaW5nVGhlUGF0aCA9IGFkZFNjcm9sbFRleHQoXCJUcmF2ZWxsaW5nIHRoZSBwYXRoIHVuZ3VpZGVkIGNhbiBjb3N0IHlvdS5cIik7XG5cbiAgICBjb25zdCBsb2dvID0gYWRkU2Nyb2xsU3ZnKFwibG9nby5zdmdcIik7XG4gICAgLy8gbG9nby5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xuICAgIC8vIGxvZ28ub25tb3VzZWVudGVyID0gKCkgPT4ge1xuICAgIC8vICAgICBsb2dvLnN0eWxlLmZpbHRlciA9IFwiZHJvcC1zaGFkb3coMTBweCAxMHB4IDEwcHggcmdiYSgyNTUsIDE4MCwgMTAwLCAwLjUpKVwiO1xuICAgIC8vICAgICBsb2dvLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC0xNXB4LCAtMTVweClcIjtcbiAgICAvLyB9O1xuICAgIC8vIGxvZ28ub25tb3VzZWxlYXZlID0gKCkgPT4ge1xuICAgIC8vICAgICBsb2dvLnN0eWxlLmZpbHRlciA9IFwiXCI7XG4gICAgLy8gICAgIGxvZ28uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMHB4LCAwcHgpXCI7XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lMSA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCBiaW9OYW1lID0gYWRkU2Nyb2xsVGV4dChcIlNDT1RUIEcuIEdSSUZGSU5cIik7XG4gICAgbmF2SXRlbUp1bXBFbGVtZW50cy5hYm91dCA9IGJpb05hbWU7XG4gICAgY29uc3QgYmlvRGVzY3JpcHRpb24gPSBhZGRTY3JvbGxUZXh0KFwiRm91bmRlcjxicj48YnI+V2l0aCAzNyB5ZWFycyBpbiB0aGUgdHJlbmNoZXMgb2YgYnJvYWRjYXN0LCBBViwgYW5kIG1lZGlhIHN5c3RlbXMgaW50ZWdyYXRpb24sIEnigJl2ZSBidWlsdCBteSBjYXJlZXIgcHJvdGVjdGluZyBjbGllbnRzIGZyb20gYmVpbmcgc3RlYW1yb2xsZWQgYnkgY29tcGxleGl0eSwgYmFkIHBsYW5uaW5nLCBhbmQgdW5yZWFsaXN0aWMgcHJvbWlzZXMuPGJyPjxicj5J4oCZbSBub3QgaGVyZSB0byBwbGF5IG5pY2Ug4oCUIEnigJltIGhlcmUgdG8gbWFrZSBzdXJlIHRoaW5ncyBnZXQgZG9uZSByaWdodC48YnI+PGJyPkFzIGEgU3ViamVjdCBNYXR0ZXIgRXhwZXJ0IGFuZCBPd25lcuKAmXMgUmVwLCBJIGJyaW5nIGNsZWFyLWV5ZWQgc3RyYXRlZ3ksIGVuZ2luZWVyaW5nIGxlYWRlcnNoaXAsIGFuZCBhIG5vLUJTIGFwcHJvYWNoIHRvIGNvbXBsZXggcHJvamVjdHMuIEZyb20gZWFybHktc3RhZ2UgdmlzaW9uaW5nIHRocm91Z2ggZmluYWwgaW1wbGVtZW50YXRpb24sIEkgbWFrZSBzdXJlIG15IGNsaWVudHMgYXJlIGZ1bGx5IGluZm9ybWVkIGFuZCBzdGF5IGluIGNvbnRyb2wg4oCUIHdpdGhvdXQgYmVpbmcgYnVyaWVkIGluIHRlY2huaWNhbCBub2lzZSBvciB2ZW5kb3Igc3Bpbi48YnI+PGJyPknigJl2ZSBsZWQgaGlnaC1wcm9maWxlIHByb2plY3RzIGZvciB0aGUgTkJBLCBXV0UsIFVuaXZpc2lvbiwgRGlzbmV5LCBhbmQgbW9yZS4gTXkgYmFja2dyb3VuZCBpbmNsdWRlcyBydW5uaW5nIGEgc3VjY2Vzc2Z1bCBpbnRlZ3JhdGlvbiBmaXJtLCBtYW5hZ2luZyBlbmdpbmVlcmluZyB0ZWFtcyBvZiA1MCssIGFuZCBvdmVyc2VlaW5nIHNvbWUgb2YgdGhlIGxhcmdlc3QgbWVkaWEgZmFjaWxpdHkgYnVpbGRzIG9mIHRoZSBsYXN0IDMwIHllYXJzLiBXaGV0aGVyIHdl4oCZcmUgdGFsa2luZyBuZXR3b3JrIG9wcywgY2xvdWQgd29ya2Zsb3dzLCBwb3N0LXByb2R1Y3Rpb24sIG9yIHN0dWRpbyBvcHMgd29ya2Zsb3dzIOKAlCBJ4oCZdmUgZG9uZSBpdCwgYW5kIEkgYnJpbmcgdGhlIHNjYXJzIChhbmQgbGVzc29ucykgd2l0aCBtZS48YnI+PGJyPk15IGpvYiBpcyBzaW1wbGU6IG1ha2Ugc3VyZSBteSBjbGllbnRzIGFyZSBwcm90ZWN0ZWQsIHJlc3BlY3RlZCwgYW5kIGhhdmUgZGVsaXZlcmVkIGV4YWN0bHkgd2hhdCB0aGV5IG5lZWTigJRub3RoaW5nIG1vcmUsIGFuZCBhYnNvbHV0ZWx5IG5vdGhpbmcgbGVzcy5cIik7XG4gICAgY29uc3QgcG9ydHJhaXQgPSBhZGRTY3JvbGxJbWFnZShcInBhcGEucG5nXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUyID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGZlZWxDb25maWRlbnQgPSBhZGRTY3JvbGxUZXh0KFwiRkVFTCBDT05GSURFTlQgS05PV0lORyBZT1XigJlWRSBHT1QgSVQgQUxMIENPVkVSRUQuXCIpO1xuICAgIG5hdkl0ZW1KdW1wRWxlbWVudHMuc2VydmljZXMgPSBmZWVsQ29uZmlkZW50O1xuXG4gICAgY29uc3Qgc3ByaW5nU2lnID0gbmV3IFNpZ25hbCgpO1xuICAgIGZ1bmN0aW9uIGFkZFNraWxsVGlsZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gbWV0YWw7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gYWRkVGV4dCh0aXRsZSwgY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gYWRkVGV4dChkZXNjcmlwdGlvbiwgY29udGFpbmVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4yNXNcIjtcblxuICAgICAgICBjb25zdCBzcHJpbmdYID0gbmV3IFNwcmluZyh4KTtcbiAgICAgICAgY29uc3Qgc3ByaW5nWSA9IG5ldyBTcHJpbmcoeSk7XG4gICAgICAgIGNvbnN0IHNwcmluZ1NpemVZID0gbmV3IFNwcmluZygxKTtcbiAgICAgICAgc3ByaW5nWC5zZXRTdGlmZm5lc3NDcml0aWNhbCgyMDApO1xuICAgICAgICBzcHJpbmdZLnNldFN0aWZmbmVzc0NyaXRpY2FsKDIwMCk7XG4gICAgICAgIHNwcmluZ1NpemVZLnNldFN0aWZmbmVzc0NyaXRpY2FsKDIwMCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdGlsZUF0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2tpbGxUaWxlcy5maW5kKChzKSA9PiBzLnNwcmluZ1gudGFyZ2V0ID09PSB4ICYmIHMuc3ByaW5nWS50YXJnZXQgPT09IHkpITtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZsaXAoc3ByaW5nMTogU3ByaW5nLCBzcHJpbmcyOiBTcHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBzcHJpbmcxLnRhcmdldDtcbiAgICAgICAgICAgIHNwcmluZzEudGFyZ2V0ID0gc3ByaW5nMi50YXJnZXQ7XG4gICAgICAgICAgICBzcHJpbmcyLnRhcmdldCA9IHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNwcmluZ1kudGFyZ2V0ID09PSBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZmxpcChcbiAgICAgICAgICAgICAgICAgICAgdGlsZUF0KGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQsIDEgLSBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdZLCAvL1xuICAgICAgICAgICAgICAgICAgICBob2xlU2tpbGxUaWxlLnNwcmluZ1lcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXJlY2lvblggPSBzcHJpbmdYLnRhcmdldCAtIGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQgPCAwID8gLTEgOiAxO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQ7IHggIT09IHNwcmluZ1gudGFyZ2V0OyB4ICs9IGRpcmVjaW9uWCkge1xuICAgICAgICAgICAgICAgIGZsaXAoXG4gICAgICAgICAgICAgICAgICAgIHRpbGVBdCh4LCBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdYLCAvL1xuICAgICAgICAgICAgICAgICAgICB0aWxlQXQoeCArIGRpcmVjaW9uWCwgaG9sZVNraWxsVGlsZS5zcHJpbmdZLnRhcmdldCkuc3ByaW5nWFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcHJpbmdZLnRhcmdldCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsaXAoXG4gICAgICAgICAgICAgICAgICAgIHRpbGVBdChzcHJpbmdYLnRhcmdldCwgMSAtIHNwcmluZ1kudGFyZ2V0KS5zcHJpbmdZLCAvL1xuICAgICAgICAgICAgICAgICAgICBzcHJpbmdZXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGlmIChza2lsbFRpbGUgPT09IGhvbGVTa2lsbFRpbGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IG1ldGFsO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5zcHJpbmdTaXplWS50YXJnZXQgPSAxO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5kZXNjcmlwdGlvblRleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IHRpbGVCcm93bjtcbiAgICAgICAgICAgIHNwcmluZ1NpemVZLnRhcmdldCA9IDI7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbGxUaWxlIG9mIHNraWxsVGlsZXMpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdYLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdZLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdTaXplWSwgc2tpbGxUaWxlLnNwcmluZ1NpZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBvbkNsaWNrO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgcmV0dXJuIHsgY29udGFpbmVyLCB0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgc3ByaW5nWCwgc3ByaW5nWSwgc3ByaW5nU2l6ZVksIHNwcmluZ1NpZyB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhvbGVTa2lsbFRpbGUgPSBhZGRTa2lsbFRpbGUoXCJcIiwgXCJcIiwgMiwgMSk7XG4gICAgaG9sZVNraWxsVGlsZS5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzAwMDAwMDMzXCI7XG5cbiAgICBjb25zdCBza2lsbFRpbGVzID0gW1xuICAgICAgICBhZGRTa2lsbFRpbGUoXCJPd25lcjxicj5SZXByZXNlbnRhdGlvblwiLCBcIktPUkUgc2VydmVzIGFzIHlvdXIgZXllcywgZWFycywgYW5kIGFkdm9jYXRlcywgcHJvdmlkaW5nIGNvbmNpZXJnZS1sZXZlbCBndWlkYW5jZSB0aHJvdWdoIGV2ZXJ5IHN0ZXAgb2YgeW91ciBwcm9qZWN0LiBXZSBrZWVwIHZlbmRvcnMgYW5kIGNvbnRyYWN0b3JzIGhvbmVzdCwgbWFraW5nIHN1cmUgbm90aGluZyBzbGlwcyB0aHJvdWdoIHRoZSBjcmFja3MuIFdlIGJlZ2luIGJ5IGFsaWduaW5nIGFsbCBzdGFrZWhvbGRlcnMgZWFybHkgb24sIHRoZW4gZGVmZW5kIHlvdXIgcG9zaXRpb24gdGhyb3VnaG91dCB0aGUgcHJvY2Vzcy5cIiwgMCwgMCksIC8vXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkJhc2lzIG9mPGJyPkRlc2lnblwiLCBcIktPUkUgbGlzdGVucyBiZWZvcmUgd2UgYWR2aXNlLiBXZSByZXZpZXcgeW91ciBjdXJyZW50IG9wZXJhdGlvbiwgZnV0dXJlIHBsYW5zLCBhbmQgb3ZlcmFsbCBnb2Fscy4gWW91ciBuZXcgc3BhY2UgYW5kIHN5c3RlbXMgbXVzdCBncmFjZWZ1bGx5IHN1cHBvcnQgb3BlcmF0aW9uYWwgbmVlZHMgYW5kIGZ1dHVyZSBncm93dGguIERlZXAgZXhwZXJ0aXNlIGluIHN5c3RlbXMgcGxhbm5pbmcgYW5kIGluZnJhc3RydWN0dXJlIHN0cmF0ZWd5IGFsbG93cyBLT1JFIHRvIHRyYW5zbGF0ZSB2aXNpb24gaW50byBhIGNvbXByZWhlbnNpdmUgQm9ELlwiLCAxLCAwKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUHJvb2Ygb2Y8YnI+Q29uY2VwdFwiLCBcIktPUkUga25vd3MgeW91IG9ubHkgZ2V0IG9uZSBjaGFuY2UgdG8gYnVpbGQgYSBuZXcgZmFjaWxpdHkgcmlnaHQuIFlvdSBkZXNlcnZlIHRvIHNlZSBpZGVhcyB0aG9yb3VnaGx5IHRlc3RlZCBhbmQgdmFsaWRhdGVkIGJlZm9yZSB5b3UgY29tbWl0LiBXZSB2ZXQgdGVjaG5vbG9neSwgdmVuZG9ycywgYW5kIGFzc3VyYW5jZXMgYWdhaW5zdCByZWFsLXdvcmxkIGNyaXRlcmlhLiBUaGlzIGJyaW5ncyBjbGFyaXR5IHRvIHlvdXIgd29ya2Zsb3cgYW5kIHB1dHMgbWVhc3VyYWJsZSBhY2NvdW50YWJpbGl0eSBiZWhpbmQgZXZlcnkgcHJvbWlzZS5cIiwgMiwgMCksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlByb2plY3QgVGVhbTxicj5Bc3NlbWJseVwiLCBcIktPUkUgYnJpbmdzIHRvZ2V0aGVyIHRoZSByaWdodCB0ZWFtIGZvciB5b3VyIHByb2plY3QuIFdlIGRyYXcgZnJvbSBhIG5ldHdvcmsgb2YgdHJ1c3RlZCBleHBlcnRzIGluIGRlc2lnbiwgZW5naW5lZXJpbmcsIGluc3RhbGxhdGlvbiwgYW5kIG1vcmUuIFRoZXNlIGFyZSBwcm92ZW4gcHJvcyB3aG/igJl2ZSBzaG93biB0aGV5IGNhbiBleGVjdXRlIHVuZGVyIHByZXNzdXJlIHdpdGhvdXQgbWlzc2luZyBhIGJlYXQuIFRoYXQgdHJhbnNsYXRlcyB0byBwZXJmb3JtYW5jZSwgbm90IGV4Y3VzZXMuXCIsIDMsIDApLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJQdW5jaCBMaXN0PGJyPk1hbmFnZW1lbnRcIiwgXCJLT1JFIHRyYWNrcyBldmVyeSBkZXRhaWwsIGZyb20gYnVpbGRpbmcgY29uc3RydWN0aW9uIHRvIHN5c3RlbXMgaW50ZWdyYXRpb24gdG8gb25nb2luZyBzZXJ2aWNlcy4gSXTigJlzIGNyaXRpY2FsIHRvIG1ha2Ugc3VyZSBhbGwgdGhlIHRlY2ggd29ya3MsIGFsbCBwcm9taXNlcyBhcmUgZnVsZmlsbGVkLiBOb3RoaW5nIGlzIHNpZ25lZC1vZmYgdW50aWwgaXTigJlzIHRlc3RlZCwgdmVyaWZpZWQsIGFuZCByaWdodC4gUmVsZW50bGVzcyBmb2xsb3ctdGhyb3VnaCB0YWtlcyBleHRyYSBlZmZvcnQsIGJ1dCB3ZSBzdHViYm9ybmx5IHJlZnVzZSB0byBjb21wcm9taXNlLlwiLCA0LCAwKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiTmVlZHM8YnI+QW5hbHlzaXNcIiwgXCJLT1JFIGd1aWRlcyB5b3UgdG8gdW5jb3ZlciBhbmQgdW5kZXJzdGFuZCBleGFjdGx5IHdoYXTigJlzIG5lZWRlZCwgd2hhdCdzIHBvc3NpYmxlLCBhbmQgd2hhdOKAmXMgd29ydGggcHVyc3VpbmcuIEFzayBhbnlvbmUgd2hv4oCZcyBiZWVuIHRocm91Z2ggdGhpcyBwcm9jZXNzIOKAkyBlYXJseS1waGFzZSBwcm9qZWN0IGludGVsbGlnZW5jZSBtYWtlcyBhbGwgdGhlIGRpZmZlcmVuY2UuIE1ha2Ugc21hcnRlciwgZmFzdGVyIGRlY2lzaW9ucyB3aXRoIGNsYXJpdHkgYW5kIGNvbmZpZGVuY2UsIGFuZCBhdm9pZCBjb3N0bHkgbWlzdGFrZXMuXCIsIDAsIDEpLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJCdWRnZXRpbmcgJjxicj5Fc3RpbWF0aW5nXCIsIFwiS09SRSBvZmZlcnMgYSBidWRnZXRpbmcgcHJvY2VzcyBzaGFwZWQgYnkgcmVhbC13b3JsZCBlbmdpbmVlcmluZyBleHBlcmllbmNlLiBXZSBwcm92aWRlIGVhcmx5IGNvc3QgbW9kZWxzLCBkZXRhaWxlZCBwcm9qZWN0aW9ucywgYW5kIHBoYXNlZCBpbnZlc3RtZW50IHN0cmF0ZWdpZXMgdG8gaGVscCB5b3Ugc3RheSBpbmZvcm1lZCwgaW4gY29udHJvbCwgYW5kIHdpdGhpbiBidWRnZXQuIE91ciBlYXJseSB3b3JrIGhlbHBzIHlvdSB0byBtaW5pbWl6ZSBzY29wZSBjcmVlcCBhbmQgYXZvaWQgZmluYW5jaWFsIHN1cnByaXNlcy5cIiwgMSwgMSksXG4gICAgICAgIGhvbGVTa2lsbFRpbGUsXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlJGUCBDcmVhdGlvbjxicj4mIEFkbWluaXN0cmF0aW9uXCIsIFwiS09SRSBjYXB0dXJlcyB0aGUgcHJvamVjdCBvYmplY3RpdmVzLCBvdXRsaW5lcyB0aGUgc2NvcGUsIGRlZmluZXMgdGhlIHF1YWxpZmljYXRpb25zLCBhbmQgc3RydWN0dXJlcyB0aGUgcmVzcG9uc2UgcmVxdWlyZWQgb2YgZXZlcnkgcHJvamVjdCBzb2xpY2l0YXRpb24gdGhhdCB3ZSBwcm9kdWNlLiBXZSB0aGVuIHN0cnVjdHVyZSB0aGUgYmlkIGV2YWx1YXRpb24gcHJvY2VzcyBhbmQgZ3VpZGUgeW91IHRocm91Z2ggdGhlIGNyaXRpY2FsIGRlY2lzaW9uLW1ha2luZywgbGVhdmluZyBub3RoaW5nIHRvIGNoYW5jZS5cIiwgMywgMSksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkludGVncmF0b3I8YnI+U3VwcG9ydFwiLCBcIktPUkUgcGFydG5lcnMgd2l0aCB5b3VyIGludGVncmF0b3IgdG8gbGVhZCB0aGUgcHJvY2VzcywgcHJvdGVjdCB5b3VyIHZpc2lvbiwgYW5kIG1ha2Ugc3VyZSBldmVyeSB3b3JrZmxvdyBpcyBkZWxpdmVyZWQgZXhhY3RseSBhcyBkZXNpZ25lZC4gV2l0aCBpbnRlZ3JhdGlvbiBsZWFkZXJzaGlwIGFuZCBvdmVyc2lnaHQgcm9vdGVkIGluIGRlY2FkZXMgb2YgZXhwZXJpZW5jZSwgd2UgcHJlc2VydmUgdGhlIGludGVncml0eSBvZiB5b3VyIGRlc2lnbi4gV2UgZG9u4oCZdCBhY2NlcHQgY29tcHJvbWlzZXMuIE5laXRoZXIgc2hvdWxkIHlvdS5cIiwgNCwgMSksXG4gICAgXTtcbiAgICBjb25zdCBza2lsbFRpbGVDb3VudFggPSBNYXRoLm1heCguLi5za2lsbFRpbGVzLm1hcCgocykgPT4gcy5zcHJpbmdYLnRhcmdldCkpICsgMTtcbiAgICBza2lsbFRpbGVzWzJdLmNvbnRhaW5lci5jbGljaygpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUzID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGJpZ05hbWVzID0gYWRkU2Nyb2xsVGV4dChcIkJJRyBOQU1FUzxicj5ZT1UgS05PV1wiKTtcbiAgICBjb25zdCBoYXNUYWNrbGVkID0gYWRkU2Nyb2xsVGV4dChcIjxzdHJvbmc+U2NvdHQgR3JpZmZpbjwvc3Ryb25nPiBoYXMgdGFja2xlZCBzb21lIG9mIHRoZSBtb3N0IGNvbXBsZXggcHJvamVjdHMgZm9yIHNvbWUgb2YgdGhlIGxhcmdlc3QgbWVkaWEgY29tcGFuaWVzIGluIHRoZSB3b3JsZC48YnI+SGUgaGFzIHNlZW4gaXQgYWxsLCBhbmQgeW91IGNhbiB0YXAgaW50byB0aGF0IGV4cGVyaWVuY2UuXCIpO1xuXG4gICAgY29uc3QgYmlnTmFtZUNsaWVudHMgPSBbXG4gICAgICAgIFtcIkFCUy9DQk5cIiwgXCJOYXRpb25hbCBHZW9ncmFwaGljXCJdLCAvL1xuICAgICAgICBbXCJCbGFja3JvY2tcIiwgXCJOb3J0aHdlc3Rlcm4gVW5pdmVyc2l0eVwiXSxcbiAgICAgICAgW1wiQmxhY2tzdG9uZVwiLCBcIlBhcmFtb3VudC9DQlNcIl0sXG4gICAgICAgIFtcIkNCU1wiLCBcIk1UVi9TaG93dGltZVwiXSxcbiAgICAgICAgW1wiQ05OXCIsIFwiUGVubiBTdGF0ZSBVbml2ZXJzaXR5XCJdLFxuICAgICAgICBbXCJEaXNuZXkvQUJDL0VTUE5cIiwgXCJQcnVkZW50aWFsXCJdLFxuICAgICAgICBbXCJGb3ggTmV3c1wiLCBcIlNpcml1cyBTYXRlbGxpdGUgUmFkaW9cIl0sXG4gICAgICAgIFtcIk1hZGlzb24gU3F1YXJlIEdhcmRlblwiLCBcIlN5cmFjdXNlIFVuaXZlcnNpdHlcIl0sXG4gICAgICAgIFtcIk1MQlwiLCBcIlRlbGV2aXNhLVVuaXZpc2lvblwiXSxcbiAgICAgICAgW1wiTVNOQkNcIiwgXCJUaGUgTmV3IFlvcmsgVGltZXNcIl0sXG4gICAgICAgIFtcIk5CQVwiLCBcIldXRVwiXSxcbiAgICAgICAgW1wiTkJDVS9DTkJDXCJdLFxuICAgIF07XG5cbiAgICBjb25zdCBiaWdOYW1lQ2xpZW50VGV4dHMgPSBiaWdOYW1lQ2xpZW50cy5tYXAoKGJpZ05hbWVDbGllbnRzUm93KSA9PiBiaWdOYW1lQ2xpZW50c1Jvdy5tYXAoKGJpZ05hbWVDbGllbnQpID0+IGFkZFNjcm9sbFRleHQoYmlnTmFtZUNsaWVudCkpKTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lNCA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZSA9IGFkZFNjcm9sbEltYWdlKFwiZ3JpZmZpbi1ibGFjay13aGl0ZS5wbmdcIik7XG4gICAgY29uc3QgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0ID0gYWRkU2Nyb2xsVGV4dChcIknigJl2ZSBiZWVuIGluIHRoaXMgaW5kdXN0cnkgZm9yIG1vcmUgdGhhbiAzNSB5ZWFycywgYW5kIEkgY2Fu4oCZdCB0aGluayBvZiBvbmUgY2xpZW50IHdobyB3YXMgYWJsZSB0byBzdWNjZXNzZnVsbHkgbmF2aWdhdGUgdGhlIGdhdW50bGV0IHRoYXQgaXMgYSBsYXJnZSBtZWRpYSBmYWNpbGl0eSBwcm9qZWN0IHdpdGhvdXQgdGhlIHN1cHBvcnQgb2YgYW4gZXhwZXJpZW5jZWQsIGtub3dsZWRnZWFibGUsIGFuZCBhZ2dyZXNzaXZlIHByb2plY3QgZmFjaWxpdGF0b3IuXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmU1ID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIC8vIGJpb1xuXG4gICAgY29uc3QgYmlvSGVhZGVyID0gYWRkU2Nyb2xsVGV4dChcIkhPVyBXRTxicj5HT1QgSEVSRVwiKTtcbiAgICBuYXZJdGVtSnVtcEVsZW1lbnRzLmJpbyA9IGJpb0hlYWRlcjtcbiAgICBjb25zdCBiaW9UZXh0ID0gYWRkU2Nyb2xsVGV4dChcIknigJl2ZSBhbHdheXMgZm9jdXNlZCBvbiB0aGUgY29uY2VwdHVhbGl6YXRpb24gYW5kIGltcGxlbWVudGF0aW9uIG9mIGFkdmFuY2VkIHRlY2hub2xvZ3kgc29sdXRpb25zIGZvciBmYWNpbGl0eSBhbmQgZXZlbnQgc3lzdGVtcyBpbnRlZ3JhdGlvbi4gQWxvbmcgdGhlIHdheSwgdGhhdOKAmXMgbWVhbnQgc2VydmluZyBhcyBkZXNpZ24gZW5naW5lZXIsIHByb2plY3QgbWFuYWdlciwgc2FsZXMgZW5naW5lZXIsIHBsYW5uaW5nIGNvbnN1bHRhbnQsIGJ1c2luZXNzIGJ1aWxkZXIvb3duZXIsIGFuZCB0ZWFtIGxlYWRlci48YnI+PGJyPkl0IGFsbCBzdGFydGVkIGluIHRlY2huaWNhbCB0aGVhdGVyLCB3aGVyZSBJIHdvcmtlZCBhcyBhIG1hc3RlciBlbGVjdHJpY2lhbiwgbGlnaHRpbmcgZGVzaWduZXIsIHNvdW5kIGRlc2lnbmVyLCBhbmQgZnJvbnQtb2YtaG91c2Ugc291bmQgZW5naW5lZXIgaW4gc3VtbWVyIHN0b2NrLCB0b3VyaW5nLCBhbmQgb2ZmLUJyb2Fkd2F5IHRoZWF0ZXIuIEZvbGxvd2luZyBzZXZlcmFsIHllYXJzIG9mIGZyZWVsYW5jZSB0aGVhdHJpY2FsIGFuZCBjb25jZXJ0IHRlY2huaWNhbCBzdXBwb3J0LCBJIGxhbmRlZCBhdCBBRiBBc3NvY2lhdGVzLCBhIGJyb2FkY2FzdCBzeXN0ZW1zIGludGVncmF0b3IuPGJyPjxicj5BZnRlciB3b3JraW5nIG9uIHN5c3RlbXMgZW5naW5lZXJpbmcgZWZmb3J0cyBmb3IgTkJD4oCZcyBUb2RheSBTaG93LCBDTkJDLCBhbmQgVVNBIE5ldHdvcmssIEkgbW92ZWQgdG8gU29ueSBTeXN0ZW1zIEludGVncmF0aW9uLiBUaGVyZSwgSSBvdmVyc2F3IGRlc2lnbi9idWlsZHMgZm9yIHRoZSBUcmlidW5lIFN0YXRpb24gR3JvdXAgYW5kIHN1cHBvcnRlZCBDQlMgQnJvYWRjYXN0IE9wZXJhdGlvbnMgJiBFbmdpbmVlcmluZzxicj48YnI+QXQgdGhpcyBwb2ludCwgSSB0ZWFtZWQgdXAgd2l0aCB0d28gcGFydG5lcnMgdG8gbGF1bmNoIFRoZSBTeXN0ZW1zIEdyb3VwLiBUU0cgc3BlY2lhbGl6ZWQgaW4gbGFyZ2Utc2NhbGUsIGZhc3QtdHJhY2sgc3lzdGVtcyBpbnRlZ3JhdGlvbiBwcm9qZWN0cyBmb3IgdGhlIGJyb2FkY2FzdCBpbmR1c3RyeS4gRHVyaW5nIG91ciAyMC15ZWFyIHJ1biwgd2UgZGVzaWduZWQgYW5kIGJ1aWx0IGZhY2lsaXRpZXMgZm9yIFNlcmlvdXMgU2F0ZWxsaXRlIFJhZGlvLCBNVFYgTmV0d29ya3MsIFN5cmFjdXNlIFVuaXZlcnNpdHkgTmV3aG91c2UsIE5GTCBGaWxtcyBBdWRpbywgTkJDVSwgYW5kIENvcnVzIEVudGVydGFpbm1lbnQsIHBsdXMgMjAwKyBzeXN0ZW1zIGludGVncmF0aW9uIHByb2plY3RzIHdvcmxkd2lkZS48YnI+PGJyPldoZW4gVFNHIHdhcyBhY3F1aXJlZCBieSBEaXZlcnNpZmllZCBpbiAyMDE2LCBJIGVzdGFibGlzaGVkIGEgc21hbGwgc3R1ZGlvIHdpdGhpbiB0aGUgbGFyZ2VyIGNvcnBvcmF0aW9uLCB3aGljaCBhbGxvd2VkIG1lIHRvIGZvY3VzIG9uIGNyaXRpY2FsIGVhcmx5LXN0YWdlIHByb2plY3QgY29uY2VwdHVhbGl6YXRpb24sIHBsYW5uaW5nLCBhbmQgYnVkZ2V0aW5nLiBUaHJvdWdob3V0IHRob3NlIHllYXJzLCBJIHdhcyBhYmxlIHRvIHdvcmsgc2hvdWxkZXIgdG8gc2hvdWxkZXIgd2l0aCBzb21lIG9mIHRoZSBiZXN0IGFuZCBicmlnaHRlc3QgYWNyb3NzIGEgd2lkZSByYW5nZSBvZiBkaXNjaXBsaW5lcyBpbiB0aGUgbWVkaWEgYW5kIGVudGVydGFpbm1lbnQgaW5kdXN0cnkuIEFuZCB0aGUgcmVzdCwgYXMgdGhleSBzYXksIGlzIGhpc3RvcnkuPGJyPjxicj5Ub2RheSwgS09SRSBvZmZlcnMgYSByYWRpY2FsbHkgc3RyZWFtbGluZWQgd2F5IHRvIGxldmVyYWdlIGEgY2FyZWVy4oCZcyB3b3J0aCBvZiBleHBlcnRpc2UsIGV4cGVyaWVuY2UsIGFuZCBleHRlbnNpdmUgaW5kdXN0cnkgcmVsYXRpb25zaGlwcyB0byBoZWxwIG1ha2Ugc3VyZSB5b3VyIG5leHQgcHJvamVjdCBydW5zIHNtb290aGx5IGZyb20gcGxhbm5pbmcgdG8gYWNjZXB0YW5jZS48YnI+PGJyPkkgaG9sZCBhIEJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gRWxlY3RyaWNhbCBFbmdpbmVlcmluZyBmcm9tIFBlbm4gU3RhdGUgVW5pdmVyc2l0eSwgYW5kIGFtIGEgbWVtYmVyIG9mIFNNUFRFLCBBRVMsIGFuZCBTVkcuIEnigJltIGFsc28ga2luZCB0byBhbmltYWxzLlwiKTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lNiA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICAvLyByZWNlbnQgcHJvamVjdHNcblxuICAgIGNvbnN0IHJlY2VudFByb2plY3RIZWFkZXIgPSBhZGRTY3JvbGxUZXh0KFwiUkVDRU5UPGJyPlBST0pFQ1RTXCIpO1xuICAgIG5hdkl0ZW1KdW1wRWxlbWVudHMucmVjZW50UHJvamVjdHMgPSByZWNlbnRQcm9qZWN0SGVhZGVyO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFBhaXIocHJvamVjdE5hbWU6IHN0cmluZywgcHJvamVjdERlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVUZXh0ID0gYWRkU2Nyb2xsVGV4dChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvblRleHQgPSBhZGRTY3JvbGxUZXh0KHByb2plY3REZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdE5hbWVUZXh0LCBwcm9qZWN0RGVzY3JpcHRpb25UZXh0IH07XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBbYWRkUHJvamVjdFBhaXIoXCJOQkEgRW50ZXJ0YWlubWVudFwiLCBcIkFyY2hpdGVjdHVyYWwgcGxhbm5pbmcgYW5kIGJ1ZGdldGluZyBmb3IgbmV3IGNvbnRlbnQgb3BlcmF0aW9ucyBjZW50ZXIsIHJlcGxheSBvcGVyYXRpb25zIGNlbnRlciwgYW5kIGV4cGFuc2lvbiBvZiB0aGUgTkJBIE5ldHdvcmsuXCIpLCBhZGRQcm9qZWN0UGFpcihcIlRlbGV2aXNhL1VuaXZpc2lvbiBOZXR3b3JrXCIsIFwiU3lzdGVtIGNvbmNlcHR1YWxpemF0aW9uLCBhcHBsaWNhdGlvbnMgZW5naW5lZXJpbmcsIHByb2plY3QgYnVkZ2V0aW5nLCBhbmQgYWNjb3VudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIG5ldHdvcmsgb3BlcmF0aW9ucyBjZW50ZXIuXCIpLCBhZGRQcm9qZWN0UGFpcihcIldlc3Rlcm4gS2VudHVja3kgVW5pdmVyc2l0eVwiLCBcIlBCUyBhbmQgTlBSIHN0YXRpb25zLCBDb2xsZWdlIG9mIENvbW11bmljYXRpb25zIHByb2R1Y3Rpb24gYW5kIHBvc3QgZmFjaWxpdHksIGluY2x1ZGluZyB0aWVzIHRvIGNhbXB1cyBzcG9ydHMgYW5kIHByZXNlbnRhdGlvbiB2ZW51ZXMsIGRldmVsb3BtZW50IG9mIGEgY29tcGxldGUgc3lzdGVtIGRlc2lnbiBmb3IgdGhyZWUgY29udHJvbCByb29tcywgdHdvIFRWIHN0dWRpb3MsIGZvdXIgcmFkaW8gc3R1ZGlvcywgYW5kIHBvc3QtcHJvZHVjdGlvbiBvcGVyYXRpb25zLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJXb3JsZCBXcmVzdGxpbmcgRW50ZXJ0YWlubWVudFwiLCBcIk5ldyBIUSBkaWdpdGFsIG1lZGlhIGZhY2lsaXR5IGRlc2lnbiBhbmQgYnVkZ2V0aW5nIGZvciBwcm9kdWN0aW9uLCBwb3N0LCB0cmFuc21pc3Npb24sIGFuZCBldmVudCBjb29yZGluYXRpb24sIHBsdXMgZm9ybWFsIGFuYWx5c2lzIGZvciBQaGFzZSAyIHdvcmtmbG93IG9wdGltaXphdGlvbiBhbmQgb3JjaGVzdHJhdGlvbiBsYXllci5cIiksIGFkZFByb2plY3RQYWlyKFwiRGlzbmV5L0dhbGF4eSBDb25zb2xpZGF0aW9uXCIsIFwiVGhlIGxhcmdlc3QgbmV0d29yayBvcGVyYXRpb25zIGNlbnRlciBmYWNpbGl0eSBldmVyIGJ1aWx0IGluIHRoZSBVUy4gSXQgaW5jbHVkZXMgQUJDIE5ldHdvcmssIFdBQkMgVFYsIEVTUE4gTlksIE1hcnZlbCBFbnRlcnRhaW5tZW50LCBhbmQgRGlzbmV5IFNjcmVlbmluZyBUaGVhdGVyLiBTY290dCBvdmVyc2F3IGNvbnRyYWN0IGFkbWluaXN0cmF0aW9uIGFjcm9zcyB0aGUgZW50aXJlIHByb2plY3QuXCIpXTtcblxuICAgIC8vIGNvbnRhY3RcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lNyA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCB0ZWxsTWUgPSBhZGRTY3JvbGxUZXh0KFwiVGVsbCBtZSBhYm91dCB5b3VyIHByb2plY3QuXCIpO1xuICAgIG5hdkl0ZW1KdW1wRWxlbWVudHMuY29udGFjdCA9IHRlbGxNZTtcbiAgICBjb25zdCBvbmVDb252ZXJzYXRpb24gPSBhZGRTY3JvbGxUZXh0KFwiT25lIGNvbnZlcnNhdGlvbiB3b27igJl0IGNvc3QgeW91IGFueXRoaW5nLiBOb3QgaGF2aW5nIG9uZSBtaWdodC5cIik7XG4gICAgY29uc3QgYmlnS29yZSA9IGFkZFNjcm9sbFN2ZyhcImJpZy1rb3JlLnN2Z1wiKTtcblxuICAgIGNvbnN0IGVtYWlsID0gYWRkU2Nyb2xsVGV4dChcIkVtYWlsXCIpO1xuICAgIGdpdmVIb3ZlcihlbWFpbCwgd2hpdGUsIG1ldGFsKTtcbiAgICBlbWFpbC5vbmNsaWNrID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIm1haWx0bzp6YWtncmlmZmluMTIwOUBnbWFpbC5jb21cIik7XG5cbiAgICBjb25zdCBsaW5rZWRJbiA9IGFkZFNjcm9sbFRleHQoXCJMaW5rZWRJblwiKTtcbiAgICBnaXZlSG92ZXIobGlua2VkSW4sIHdoaXRlLCBtZXRhbCk7XG4gICAgbGlua2VkSW4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgbGlua2VkSW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2xpbmtlZGluLmNvbVwiLCBcIl9ibGFua1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJpdmFjeVBvbGljeSA9IGFkZFNjcm9sbFRleHQoXCJQcml2YWN5IFBvbGljeSDCqSAyMDI2IEtPUkUgU01FIExMQ1wiKTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lOCA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICByZWdpc3RlclVwZGF0ZUxheW91dCgoKSA9PiB7XG4gICAgICAgIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwoKTtcbiAgICAgICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG5cbiAgICAgICAgY29uc3QgbWFyZ2luID0gMC4wNSAqIHM7XG4gICAgICAgIGNvbnN0IGZyb21Ub3AgPSAwLjAzMSAqIHM7XG5cbiAgICAgICAgY29uc3QgYmlnVGV4dFRleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDc1ICogcywgd2lkdGg6IDAuNCAqIHMsIGxpbmVIZWlnaHQ6IDAuMDg0ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICBjb25zdCBzdWJHcmF5VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wMTkgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG5cbiAgICAgICAgY29uc3QgYmlnVGV4dE51ZGdlID0gMC4wMDQgKiBzO1xuICAgICAgICBjb25zdCBzZWN0aW9uTGluZUdhcCA9IDAuMDQgKiBzO1xuICAgICAgICBjb25zdCBndXR0ZXIgPSAwLjAyICogcztcbiAgICAgICAgY29uc3QgZ3V0dGVyZWRDb2x1bW4gPSBzIC8gMiArIGd1dHRlcjtcbiAgICAgICAgY29uc3QgZ3V0dGVyZWRXaWR0aEJldHdlZW4gPSBzIC8gMiAtIDIgKiBndXR0ZXI7XG5cbiAgICAgICAgY29uc3QgVEVNUCA9IDAuMDIgKiBzO1xuXG4gICAgICAgIHN0eWxlVGV4dChoZWFkbGluZVRleHQsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgIGhlYWRsaW5lVGV4dC5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcbiAgICAgICAgaGVhZGxpbmVUZXh0LnN0eWxlLnRvcCA9IHB4KGZyb21Ub3ApO1xuXG4gICAgICAgIHN0eWxlVGV4dCh0cmF2ZWxpbmdUaGVQYXRoLCBzdWJHcmF5VGV4dERldGFpbHMpO1xuICAgICAgICB0cmF2ZWxpbmdUaGVQYXRoLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuICAgICAgICB0cmF2ZWxpbmdUaGVQYXRoLnN0eWxlLnRvcCA9IHB4KHBvc1koaGVhZGxpbmVUZXh0KSArIHNpemVZKGhlYWRsaW5lVGV4dCkgKyBURU1QKTtcblxuICAgICAgICBsb2dvLnN0eWxlLmhlaWdodCA9IHB4KHNpemVZKGhlYWRsaW5lVGV4dCkgKiAxLjA0KTtcbiAgICAgICAgbG9nby5zdHlsZS5sZWZ0ID0gcHgoaW5uZXJXaWR0aCAtIGxvZ28uc2Nyb2xsV2lkdGggLSBtYXJnaW4pO1xuICAgICAgICBsb2dvLnN0eWxlLnRvcCA9IHB4KGZyb21Ub3AgLSAwLjAzICogcyk7XG5cbiAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUxLCBwb3NZKHRyYXZlbGluZ1RoZVBhdGgpICsgc2l6ZVkodHJhdmVsaW5nVGhlUGF0aCkgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgLy8gYmlvXG5cbiAgICAgICAgY29uc3QgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4wMDEgKiBzLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDEgKiBzLCBsaW5lSGVpZ2h0OiAwLjAyICogcywgZm9udEZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiB9O1xuICAgICAgICBzdHlsZVRleHQoYmlvRGVzY3JpcHRpb24sIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gaW5uZXJXaWR0aCAtIDIgKiBtYXJnaW47IC8vIFpaWlogYW5vdGhlciBzY3JvbGwgd2lkdGg/XG4gICAgICAgIGNvbnN0IHRpbGVHYXAgPSAwLjAxNSAqIHM7XG4gICAgICAgIGNvbnN0IHRpbGVTaXplID0gKHNjcm9sbFdpZHRoIC0gdGlsZUdhcCAqIChza2lsbFRpbGVDb3VudFggLSAxKSkgLyBza2lsbFRpbGVDb3VudFg7XG5cbiAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1goeDogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFyZ2luICsgKHRpbGVTaXplICsgdGlsZUdhcCkgKiB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1koeTogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRpbGVTaXplICsgdGlsZUdhcCkgKiB5ICsgcG9zWShmZWVsQ29uZmlkZW50KSArIHNpemVZKGZlZWxDb25maWRlbnQpICsgMC4wNCAqIHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiaW9MZWZ0ID0gdGlsZVBvc1goMik7IC8vIFpaWlogdGhpcyBndXkgZ290IGJyb2tlbiB1cFxuICAgICAgICBzdHlsZVRleHQoYmlvTmFtZSwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMiAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgIGJpb05hbWUuc3R5bGUudG9wID0gcHgocG9zWShzZWN0aW9uTGluZTEpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICBiaW9OYW1lLnN0eWxlLmxlZnQgPSBweChiaW9MZWZ0KTtcblxuICAgICAgICBiaW9EZXNjcmlwdGlvbi5zdHlsZS53aWR0aCA9IHB4KHMgLSBiaW9MZWZ0IC0gbWFyZ2luKTtcbiAgICAgICAgYmlvRGVzY3JpcHRpb24uc3R5bGUudG9wID0gcHgocG9zWShiaW9OYW1lKSArIHNpemVZKGJpb05hbWUpKTtcbiAgICAgICAgYmlvRGVzY3JpcHRpb24uc3R5bGUubGVmdCA9IHB4KGJpb0xlZnQpO1xuXG4gICAgICAgIHBvcnRyYWl0LnN0eWxlLmhlaWdodCA9IHB4KHNpemVZKGJpb05hbWUpICsgc2l6ZVkoYmlvRGVzY3JpcHRpb24pKTtcbiAgICAgICAgcG9ydHJhaXQuc3R5bGUudG9wID0gcHgocG9zWShiaW9OYW1lKSk7XG4gICAgICAgIHBvcnRyYWl0LnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuXG4gICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMiwgcG9zWShiaW9EZXNjcmlwdGlvbikgKyBzaXplWShiaW9EZXNjcmlwdGlvbikgKyBzZWN0aW9uTGluZUdhcCk7XG5cbiAgICAgICAgLy8gdGlsZXNcblxuICAgICAgICBjb25zdCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMjggKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH07XG4gICAgICAgIHN0eWxlVGV4dChmZWVsQ29uZmlkZW50LCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMpO1xuICAgICAgICBmZWVsQ29uZmlkZW50LnN0eWxlLnRvcCA9IHB4KHBvc1koc2VjdGlvbkxpbmUyKSArIHNlY3Rpb25MaW5lR2FwKTtcbiAgICAgICAgZmVlbENvbmZpZGVudC5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luKTtcblxuICAgICAgICBzcHJpbmdTaWcudW5zdWJzY3JpYmVBbGwoKTtcbiAgICAgICAgZWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbGxUaWxlIG9mIHNraWxsVGlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNvbnRhaW5lciwgdGl0bGVUZXh0LCBkZXNjcmlwdGlvblRleHQsIHNwcmluZ1gsIHNwcmluZ1ksIHNwcmluZ1NpemVZIH0gPSBza2lsbFRpbGU7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBweCh0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHB4KHRpbGVTaXplICogc3ByaW5nU2l6ZVkucG9zaXRpb24gKyAoc3ByaW5nU2l6ZVkucG9zaXRpb24gLSAxKSAqIHRpbGVHYXApO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSBweCh0aWxlUG9zWChzcHJpbmdYLnBvc2l0aW9uKSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9IHB4KHRpbGVQb3NZKHNwcmluZ1kucG9zaXRpb24pKTtcblxuICAgICAgICAgICAgICAgIHN0eWxlVGV4dCh0aXRsZVRleHQsIHsgbGV0dGVyU3BhY2luZzogMC4wMDA0ICogcywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjAxOCAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0LnN0eWxlLmxlZnQgPSBweCgwLjA4ICogdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgIHRpdGxlVGV4dC5zdHlsZS50b3AgPSBweCh0aWxlU2l6ZSAvIDIgLSBzaXplWSh0aXRsZVRleHQpIC8gMik7XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQoZGVzY3JpcHRpb25UZXh0LCB7IGxldHRlclNwYWNpbmc6IDAuMDAwNCAqIHMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wMTEgKiBzLCBsaW5lSGVpZ2h0OiAwLjAxNiAqIHMsIHdpZHRoOiB0aWxlU2l6ZSAtIDAuMDMgKiBzLCBmb250RmFtaWx5OiBcIlJvYm90b1wiIH0pO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5sZWZ0ID0gcHgoMC4wOCAqIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUudG9wID0gcHgoMC4xMSAqIHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbc3ByaW5nU2lnXSk7XG5cbiAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUzLCB0aWxlUG9zWSgxKSArIHRpbGVTaXplICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgIHN0eWxlVGV4dChiaWdOYW1lcywgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgYmlnTmFtZXMuc3R5bGUudG9wID0gcHgocG9zWShzZWN0aW9uTGluZTMpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICBiaWdOYW1lcy5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luIC0gYmlnVGV4dE51ZGdlKTtcblxuICAgICAgICBjb25zdCBoYXNUYWNrZWRUZXh0RGV0YWlscyA9IHsgZm9udFdlaWdodDogMzAwLCBjb2xvcjogbWV0YWwsIGZvbnRTaXplOiAwLjAxNCAqIHMsIGxpbmVIZWlnaHQ6IDAuMDI1ICogcywgd2lkdGg6IHNpemVYKGJpZ05hbWVzKSAtIDAuMDI1ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICBzdHlsZVRleHQoaGFzVGFja2xlZCwgaGFzVGFja2VkVGV4dERldGFpbHMpO1xuICAgICAgICBoYXNUYWNrbGVkLnN0eWxlLnRvcCA9IHB4KHBvc1koYmlnTmFtZXMpICsgc2l6ZVkoYmlnTmFtZXMpICsgVEVNUCk7XG4gICAgICAgIGhhc1RhY2tsZWQuc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG5cbiAgICAgICAgY29uc3QgbGFzdEJpZ05hbWUgPSBiaWdOYW1lQ2xpZW50VGV4dHNbYmlnTmFtZUNsaWVudFRleHRzLmxlbmd0aCAtIDFdWzBdO1xuICAgICAgICBjb25zdCBiaWdOYW1lc1RleHREZXRhaWxzID0geyBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDE4ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9O1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGJpZ05hbWVDbGllbnRUZXh0cy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBiaWdOYW1lQ2xpZW50VGV4dHNbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvID0gYmlnTmFtZUNsaWVudFRleHRzW3ldW3hdO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KG8sIGJpZ05hbWVzVGV4dERldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgby5zdHlsZS50b3AgPSBweChwb3NZKGJpZ05hbWVzKSArIDAuMDEgKiBzICsgMC4wMzIgKiB5ICogcyk7XG4gICAgICAgICAgICAgICAgby5zdHlsZS5sZWZ0ID0gcHgoZ3V0dGVyZWRDb2x1bW4gKyAwLjIyICogeCAqIHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU0LCBwb3NZKGxhc3RCaWdOYW1lKSArIHNpemVZKGxhc3RCaWdOYW1lKSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICBncmlmZmluQmxhY2tXaGl0ZS5zdHlsZS53aWR0aCA9IHB4KHMpO1xuICAgICAgICBncmlmZmluQmxhY2tXaGl0ZS5zdHlsZS50b3AgPSBweChwb3NZKHNlY3Rpb25MaW5lNCkgKyBzaXplWShzZWN0aW9uTGluZTQpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMgPSB7IGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wMiAqIHMsIHdpZHRoOiAwLjQxICogcywgbGluZUhlaWdodDogMC4wNCAqIHMsIGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfTtcbiAgICAgICAgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG4gICAgICAgIHN0eWxlVGV4dChncmlmZmluQmxhY2tXaGl0ZVRleHQsIGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMpO1xuICAgICAgICBncmlmZmluQmxhY2tXaGl0ZVRleHQuc3R5bGUubGVmdCA9IHB4KGd1dHRlcmVkQ29sdW1uKTtcbiAgICAgICAgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LnN0eWxlLnRvcCA9IHB4KHBvc1koZ3JpZmZpbkJsYWNrV2hpdGUpICsgc2l6ZVkoZ3JpZmZpbkJsYWNrV2hpdGUpIC8gMiAtIHNpemVZKGdyaWZmaW5CbGFja1doaXRlVGV4dCkgLyAyKTtcblxuICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTUsIHBvc1koZ3JpZmZpbkJsYWNrV2hpdGUpICsgc2l6ZVkoZ3JpZmZpbkJsYWNrV2hpdGUpICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgIC8vIGJpb1xuXG4gICAgICAgIHN0eWxlVGV4dChiaW9IZWFkZXIsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgIGJpb0hlYWRlci5zdHlsZS50b3AgPSBweChwb3NZKHNlY3Rpb25MaW5lNSkgKyBzaXplWShzZWN0aW9uTGluZTUpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICBiaW9IZWFkZXIuc3R5bGUubGVmdCA9IHB4KG1hcmdpbiAtIGJpZ1RleHROdWRnZSk7XG5cbiAgICAgICAgc3R5bGVUZXh0KGJpb1RleHQsIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICBiaW9UZXh0LnN0eWxlLndpZHRoID0gcHgoZ3V0dGVyZWRXaWR0aEJldHdlZW4pO1xuICAgICAgICBiaW9UZXh0LnN0eWxlLnRvcCA9IHB4KHBvc1koYmlvSGVhZGVyKSk7XG4gICAgICAgIGJpb1RleHQuc3R5bGUubGVmdCA9IHB4KGd1dHRlcmVkQ29sdW1uKTtcblxuICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTYsIHBvc1koYmlvVGV4dCkgKyBzaXplWShiaW9UZXh0KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICBzdHlsZVRleHQocmVjZW50UHJvamVjdEhlYWRlciwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgcmVjZW50UHJvamVjdEhlYWRlci5zdHlsZS50b3AgPSBweChwb3NZKHNlY3Rpb25MaW5lNikgKyBzaXplWShzZWN0aW9uTGluZTYpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgICAgICByZWNlbnRQcm9qZWN0SGVhZGVyLnN0eWxlLmxlZnQgPSBweChtYXJnaW4gLSBiaWdUZXh0TnVkZ2UpO1xuXG4gICAgICAgIGZvciAoY29uc3QgeyBwcm9qZWN0TmFtZVRleHQsIHByb2plY3REZXNjcmlwdGlvblRleHQgfSBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgc3R5bGVUZXh0KHByb2plY3ROYW1lVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjAwMSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMiAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfSk7XG4gICAgICAgICAgICBzdHlsZVRleHQocHJvamVjdERlc2NyaXB0aW9uVGV4dCwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0LnN0eWxlLndpZHRoID0gcHgoZ3V0dGVyZWRXaWR0aEJldHdlZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNXaXRoU3BhY2luZyA9IHByb2plY3RzLmZsYXRNYXAoKHByb2plY3QpID0+IFtwcm9qZWN0LnByb2plY3ROYW1lVGV4dCwgMC4wMDYgKiBzLCBwcm9qZWN0LnByb2plY3REZXNjcmlwdGlvblRleHQsIDAuMDI4ICogc10pO1xuICAgICAgICBjb25zdCBbYWxpZ25tZW50cywgX10gPSBhbGlnbmluZ1dpdGhHYXBzWShwcm9qZWN0c1dpdGhTcGFjaW5nKTtcbiAgICAgICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIG9mZnNldCB9IG9mIGFsaWdubWVudHMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcHgocG9zWShyZWNlbnRQcm9qZWN0SGVhZGVyKSArIG9mZnNldCk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBweChndXR0ZXJlZENvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdFByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnByb2plY3REZXNjcmlwdGlvblRleHQ7XG5cbiAgICAgICAgLy8gY29udGFjdFxuXG4gICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lNywgcG9zWShsYXN0UHJvamVjdERlc2NyaXB0aW9uKSArIHNpemVZKGxhc3RQcm9qZWN0RGVzY3JpcHRpb24pICsgc2VjdGlvbkxpbmVHYXApO1xuXG4gICAgICAgIHN0eWxlVGV4dCh0ZWxsTWUsIHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDE5ICogcywgZm9udEZhbWlseTogXCJSb2JvdG9cIiB9KTtcbiAgICAgICAgdGVsbE1lLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuICAgICAgICB0ZWxsTWUuc3R5bGUudG9wID0gcHgocG9zWShzZWN0aW9uTGluZTcpICsgc2l6ZVkoc2VjdGlvbkxpbmU3KSArIHNlY3Rpb25MaW5lR2FwKTtcblxuICAgICAgICBzdHlsZVRleHQob25lQ29udmVyc2F0aW9uLCBzdWJHcmF5VGV4dERldGFpbHMpO1xuICAgICAgICBvbmVDb252ZXJzYXRpb24uc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG4gICAgICAgIG9uZUNvbnZlcnNhdGlvbi5zdHlsZS50b3AgPSBweChwb3NZKHRlbGxNZSkgKyBzaXplWSh0ZWxsTWUpICsgMC4wMDggKiBzKTtcblxuICAgICAgICBiaWdLb3JlLnN0eWxlLndpZHRoID0gcHgocyAtIG1hcmdpbiAqIDIpO1xuICAgICAgICBiaWdLb3JlLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuICAgICAgICBiaWdLb3JlLnN0eWxlLnRvcCA9IHB4KHBvc1kob25lQ29udmVyc2F0aW9uKSArIHNpemVZKG9uZUNvbnZlcnNhdGlvbikgKyAwLjEgKiBzKTtcblxuICAgICAgICBjb25zdCBsaW5rVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogbWV0YWwsIGZvbnRTaXplOiAwLjAxOSAqIHMsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIgfTtcbiAgICAgICAgc3R5bGVUZXh0KGVtYWlsLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICBlbWFpbC5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luKTtcbiAgICAgICAgZW1haWwuc3R5bGUudG9wID0gcHgocG9zWShiaWdLb3JlKSArIHNpemVZKGJpZ0tvcmUpICsgMC4wNSAqIHMpO1xuXG4gICAgICAgIHN0eWxlVGV4dChsaW5rZWRJbiwgbGlua1RleHREZXRhaWxzKTtcbiAgICAgICAgbGlua2VkSW4uc3R5bGUubGVmdCA9IHB4KG1hcmdpbiArIDAuMDcgKiBzKTtcbiAgICAgICAgbGlua2VkSW4uc3R5bGUudG9wID0gcHgocG9zWShiaWdLb3JlKSArIHNpemVZKGJpZ0tvcmUpICsgMC4wNSAqIHMpO1xuXG4gICAgICAgIHN0eWxlVGV4dChwcml2YWN5UG9saWN5LCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICBwcml2YWN5UG9saWN5LnN0eWxlLmxlZnQgPSBweChzIC0gc2l6ZVgocHJpdmFjeVBvbGljeSkgLSBtYXJnaW4pO1xuICAgICAgICBwcml2YWN5UG9saWN5LnN0eWxlLnRvcCA9IHB4KHBvc1koYmlnS29yZSkgKyBzaXplWShiaWdLb3JlKSArIDAuMDUgKiBzKTtcblxuICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTgsIHBvc1koZW1haWwpICsgc2l6ZVkoZW1haWwpICsgc2VjdGlvbkxpbmVHYXApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgYm9keSwgZmFkZUluQW5pbWF0aW9uLCBtZXRhbCwgbWlkQnJvd24gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTGFuZHNjYXBlLCBweCwgc3R5bGVUZXh0LCBUZXh0RGV0YWlscyB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRGb3JQYWdlLCBhd2FpdExheW91dEZvckltYWdlTG9hZGluZyB9IGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRTVkcsIGZldGNoU1ZHLCBtYXBSYW5nZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0U3F1YXJlIHtcbiAgICBtYWpvcjogSFRNTEVsZW1lbnQ7XG4gICAgbWlub3JzOiBIVE1MRWxlbWVudFtdO1xufVxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNjcm9sbENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsQ29udGFpbmVyKTtcbihzY3JvbGxDb250YWluZXIuc3R5bGUgYXMgYW55KS5zY3JvbGxiYXJDb2xvciA9IGAke21pZEJyb3dufSAke21ldGFsfTU1YDtcblxuc2Nyb2xsQ29udGFpbmVyLm9ud2hlZWwgPSAoZSkgPT4ge1xuICAgIGlmIChpc0xhbmRzY2FwZSgpICYmICFlLnNoaWZ0S2V5KSBzY3JvbGxDb250YWluZXIuc2Nyb2xsQnkoeyBsZWZ0OiBlLmRlbHRhWSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNpemVTY3JvbGxDb250YWluZXJMYW5kc2NhcGUoKSB7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZ2V0U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc2Nyb2xsSGVpZ2h0ICogMC41O1xuXG4gICAgY29uc3QgdW5kZXJTY3JvbGxDb250YWluZXIgPSAoaW5uZXJIZWlnaHQgLSBzY3JvbGxIZWlnaHQpIC8gMjtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcHgoc2Nyb2xsSGVpZ2h0ICsgdW5kZXJTY3JvbGxDb250YWluZXIpOyAvLyBwbGFjZSBzY3JvbGwgYmFyIGF0IGJvdHRvbSBvZiBwYWdlXG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcHgoaW5uZXJXaWR0aCAtIHNjcm9sbExlZnQpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS50b3AgPSBweCgoaW5uZXJIZWlnaHQgLSBzY3JvbGxIZWlnaHQpIC8gMik7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBweChzY3JvbGxMZWZ0KTtcblxuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplU2Nyb2xsQ29udGFpbmVyUG9ydHJhaXQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBnZXRTY3JvbGxXaWR0aCgpO1xuICAgIGNvbnN0IGhlYWRlckJhckhlaWdodCA9IGdldEhlYWRlckJhckhlaWdodCgpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHB4KHNjcm9sbFdpZHRoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcHgoaW5uZXJIZWlnaHQgLSBoZWFkZXJCYXJIZWlnaHQpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcHgoKGlubmVyV2lkdGggLSBzY3JvbGxXaWR0aCkgLyAyKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUudG9wID0gcHgoaGVhZGVyQmFySGVpZ2h0KTtcblxuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwoKSB7XG4gICAgY29uc3QgaGVhZGVyQmFySGVpZ2h0ID0gZ2V0SGVhZGVyQmFySGVpZ2h0KCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcHgoaW5uZXJXaWR0aCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHB4KGlubmVySGVpZ2h0IC0gaGVhZGVyQmFySGVpZ2h0KTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUubGVmdCA9IHB4KDApO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS50b3AgPSBweChoZWFkZXJCYXJIZWlnaHQpO1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPSAwO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyQmFySGVpZ2h0ID0gKCkgPT4ge1xuICAgIGlmIChpc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgIHJldHVybiAoaW5uZXJIZWlnaHQgLSBnZXRTY3JvbGxIZWlnaHQoKSkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbm5lckhlaWdodCAqIDAuMTtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsUGFkZGluZygpIHtcbiAgICBjb25zdCBzY3JvbGxQYWRkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JvbGxQYWRkaW5nLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbFBhZGRpbmcuc3R5bGUud2lkdGggPSBweCgxKTsgLy8gYW55IG5vbnplcm8gdGhpY2tuZXNzIGlzIGVub3VnaCB0byBleHRlbmQgc2Nyb2xsQ29udGFpbmVyXG4gICAgc2Nyb2xsUGFkZGluZy5zdHlsZS5oZWlnaHQgPSBweCgxKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxQYWRkaW5nKTtcbiAgICByZXR1cm4gc2Nyb2xsUGFkZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbEltYWdlKHNyYzogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgY29uc3Qgc2Nyb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNjcm9sbEltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbEltYWdlLnNyYyA9IHNyYztcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5hbmltYXRpb24gPSBmYWRlSW5BbmltYXRpb24oKTtcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nKHNjcm9sbEltYWdlKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxJbWFnZSk7XG4gICAgcmV0dXJuIHNjcm9sbEltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsU3ZnKHNyYzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3ZnID0gY3JlYXRlRWxlbWVudFNWRyhcInN2Z1wiKTtcbiAgICBzY3JvbGxTdmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsU3ZnLnN0eWxlLmFuaW1hdGlvbiA9IGZhZGVJbkFuaW1hdGlvbigpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IGZldGNoU1ZHKHNyYyk7XG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBmZXRjaGVkLmF0dHJpYnV0ZXMpIHNjcm9sbFN2Zy5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICAgICAgd2hpbGUgKGZldGNoZWQuZmlyc3RDaGlsZCkgc2Nyb2xsU3ZnLmFwcGVuZENoaWxkKGZldGNoZWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZldGNoQ29udGVudCgpO1xuXG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsU3ZnKTtcbiAgICByZXR1cm4gc2Nyb2xsU3ZnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGV4dCh0ZXh0OiBzdHJpbmcsIHBhcmVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzY3JvbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxUZXh0LmlubmVySFRNTCA9IHRleHQ7IC8vIFpaWlogaW5uZXJUZXh0IHdvdWxkIGJlIGJldHRlclxuICAgIHNjcm9sbFRleHQuc3R5bGUuYW5pbWF0aW9uID0gZmFkZUluQW5pbWF0aW9uKCk7XG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHBhcmVudCwgc2Nyb2xsVGV4dCk7XG4gICAgcmV0dXJuIHNjcm9sbFRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiBhZGRUZXh0KHRleHQsIHNjcm9sbENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0U3F1YXJlKG1ham9yVGV4dDogc3RyaW5nLCAuLi5taW5vclRleHRzOiBzdHJpbmdbXSk6IFRleHRTcXVhcmUge1xuICAgIGNvbnN0IG1ham9yID0gYWRkU2Nyb2xsVGV4dChtYWpvclRleHQpO1xuICAgIGNvbnN0IG1pbm9ycyA9IG1pbm9yVGV4dHMubWFwKGFkZFNjcm9sbFRleHQpO1xuICAgIHJldHVybiB7IG1ham9yLCBtaW5vcnMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlU2Nyb2xsVGV4dFNxdWFyZSh7IG1ham9yLCBtaW5vcnMgfTogVGV4dFNxdWFyZSwgbWFqb3JUZXh0RGV0YWlsczogVGV4dERldGFpbHMsIG1pbm9yVGV4dERldGFpbHM6IFRleHREZXRhaWxzKSB7XG4gICAgc3R5bGVUZXh0KG1ham9yLCBtYWpvclRleHREZXRhaWxzKTtcbiAgICBmb3IgKGNvbnN0IG1pbm9yIG9mIG1pbm9ycykgc3R5bGVUZXh0KG1pbm9yLCBtaW5vclRleHREZXRhaWxzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gaW5uZXJIZWlnaHQgKiAwLjc7XG4gICAgLy8gcmV0dXJuIDEuMDIgKiBpbm5lckhlaWdodCAtIDAuMDAwNDg1ICogaW5uZXJIZWlnaHQgKiBpbm5lckhlaWdodDtcbiAgICAvLyByZXR1cm4gaW5uZXJIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgICByZXR1cm4gaW5uZXJXaWR0aFxuICAgIC8vIGNvbnN0IFNDUk9MTF9XSURUSF9QUk9QT1JUSU9OID0gMTtcbiAgICAvLyByZXR1cm4gaW5uZXJXaWR0aCAqIFNDUk9MTF9XSURUSF9QUk9QT1JUSU9OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyV2l0aGluU2Nyb2xsWShlbGVtZW50OiBIVE1MRWxlbWVudCB8IFNWR1NWR0VsZW1lbnQsIHNjYWxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gZ2V0U2Nyb2xsSGVpZ2h0KCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcyAqIHNjYWxlO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcHgoaGVpZ2h0KTtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHB4KChzIC0gaGVpZ2h0KSAvIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyV2l0aGluU2Nyb2xsWChlbGVtZW50OiBIVE1MRWxlbWVudCB8IFNWR1NWR0VsZW1lbnQsIHNjYWxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICBjb25zdCB3aWR0aCA9IHMgKiBzY2FsZTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gcHgod2lkdGgpO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KChzIC0gd2lkdGgpIC8gMik7XG59XG4iLCJleHBvcnQgY2xhc3MgU2lnbmFsIHtcclxuICAgIHN1YnNjcmliZXJzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xyXG5cclxuICAgIHN1YnNjcmliZSA9IChzdWJzY3JpYmVyOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHMpID0+IHMoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVuc3Vic2NyaWJlID0gKHN1YnNjcmliZXI6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcclxuICAgIH07XHJcblxyXG4gICAgdW5zdWJzY3JpYmVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5jbGVhcigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdChmdW5jOiAoKSA9PiB2b2lkLCBvYnNlcnZlZFNpZ25hbHM6IFNpZ25hbFtdKSB7XHJcbiAgICBvYnNlcnZlZFNpZ25hbHMuZm9yRWFjaCgobykgPT4gby5zdWJzY3JpYmUoZnVuYykpO1xyXG4gICAgZnVuYygpO1xyXG59XHJcbiIsImltcG9ydCB7IGVmZmVjdCwgU2lnbmFsIH0gZnJvbSBcIi4vc2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaW5nIHtcclxuICAgIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICB0YXJnZXQ6IG51bWJlcjtcclxuICAgIHZlbG9jaXR5ID0gMDtcclxuICAgIGRhbXBpbmcgPSAwO1xyXG4gICAgc3RpZmZuZXNzID0gMDtcclxuICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgb25SZXN0ID0gKCkgPT4ge307XHJcbiAgICBvblVucmVzdCA9ICgpID0+IHt9O1xyXG5cclxuICAgIC8vIG14JycgLSBieCcgPSBreFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGluaXRpYWxWYWx1ZTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aWNrKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBhY2NlbGVyYXRpb24gPSB0aGlzLnN0aWZmbmVzcyAqICh0aGlzLnRhcmdldCAtIHRoaXMucG9zaXRpb24pIC0gdGhpcy5kYW1waW5nICogdGhpcy52ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ICs9IGFjY2VsZXJhdGlvbiAqIGR0O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gKz0gdGhpcy52ZWxvY2l0eSAqIGR0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0aWZmbmVzc0NyaXRpY2FsKHN0aWZmbmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGlmZm5lc3MgPSBzdGlmZm5lc3M7XHJcbiAgICAgICAgdGhpcy5kYW1waW5nID0gTWF0aC5zcXJ0KDQgKiBzdGlmZm5lc3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UgPSAwLjAxO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVTcHJpbmcoc3ByaW5nOiBTcHJpbmcsIHNpZ25hbDogU2lnbmFsKSB7XHJcbiAgICBpZiAoc3ByaW5nLmlzQW5pbWF0aW5nKSByZXR1cm47XHJcblxyXG4gICAgc3ByaW5nLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgIHNwcmluZy5vblVucmVzdCgpO1xyXG5cclxuICAgIGxldCBsYXN0TWlsbGlzID0gMDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaXJzdEZyYW1lKTtcclxuICAgIGZ1bmN0aW9uIGZpcnN0RnJhbWUobWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBsYXN0TWlsbGlzID0gbWlsbGlzO1xyXG4gICAgICAgIHRpY2tTcHJpbmcobWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0aWNrU3ByaW5nKG1pbGxpczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IG1pbGxpcyAtIGxhc3RNaWxsaXM7XHJcbiAgICAgICAgbGFzdE1pbGxpcyA9IG1pbGxpcztcclxuXHJcbiAgICAgICAgc3ByaW5nLnRpY2soc3RlcCAvIDEwMDApO1xyXG4gICAgICAgIHNpZ25hbC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHNwcmluZy50YXJnZXQgLSBzcHJpbmcucG9zaXRpb24pIDwgREVGQVVMVF9BTklNQVRJT05fVE9MRVJBTkNFICYmIE1hdGguYWJzKHNwcmluZy52ZWxvY2l0eSkgPCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgc3ByaW5nLnBvc2l0aW9uID0gc3ByaW5nLnRhcmdldDtcclxuICAgICAgICAgICAgc3ByaW5nLnZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgc3ByaW5nLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNpZ25hbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgc3ByaW5nLm9uUmVzdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGlja1NwcmluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmltYXRlV2l0aFNwcmluZyhzdGlmZm5lc3M6IG51bWJlciwgb3ZlclRpbWU6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwcmluZyA9IG5ldyBTcHJpbmcoMCk7XHJcbiAgICAgICAgY29uc3Qgc3ByaW5nU2lnID0gbmV3IFNpZ25hbCgpO1xyXG4gICAgICAgIHNwcmluZy5zZXRTdGlmZm5lc3NDcml0aWNhbChzdGlmZm5lc3MpO1xyXG4gICAgICAgIHNwcmluZy50YXJnZXQgPSAxO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4gb3ZlclRpbWUoc3ByaW5nLnBvc2l0aW9uKTtcclxuICAgICAgICBzcHJpbmcub25SZXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzcHJpbmdTaWcudW5zdWJzY3JpYmUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBlZmZlY3QoYW5pbWF0ZSwgW3NwcmluZ1NpZ10pO1xyXG5cclxuICAgICAgICBhbmltYXRlU3ByaW5nKHNwcmluZywgc3ByaW5nU2lnKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzbGVlcCA9IChkZWxheTogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3BhY2VUb0ZpbGUoczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShcIiBcIiwgXCItXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFNWRzxLIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KHF1YWxpZmllZE5hbWU6IEspIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgcXVhbGlmaWVkTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmxhY2VkPFQsIFdpdGhpbj4oaXRlbXM6IFRbXSwgd2l0aGluOiBXaXRoaW4pIHtcbiAgICBjb25zdCBpdGVtc0ludGVybGFjZWQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaXRlbXNJbnRlcmxhY2VkLnB1c2goaXRlbSk7XG4gICAgICAgIGl0ZW1zSW50ZXJsYWNlZC5wdXNoKHdpdGhpbik7XG4gICAgfVxuICAgIGl0ZW1zSW50ZXJsYWNlZC5wb3AoKTtcbiAgICByZXR1cm4gaXRlbXNJbnRlcmxhY2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwUmFuZ2UobjogbnVtYmVyLCBzdGFydDE6IG51bWJlciwgc3RvcDE6IG51bWJlciwgc3RhcnQyOiBudW1iZXIsIHN0b3AyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKChuIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpICogKHN0b3AyIC0gc3RhcnQyKSArIHN0YXJ0Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yT25Ib3ZlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgY29sb3I6IHN0cmluZywgaG92ZXJDb2xvcjogc3RyaW5nKSB7XG4gICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIGVsZW1lbnQub25tb3VzZW92ZXIgPSAoKSA9PiAoZWxlbWVudC5zdHlsZS5jb2xvciA9IGhvdmVyQ29sb3IpO1xuICAgIGVsZW1lbnQub25tb3VzZWxlYXZlID0gKCkgPT4gKGVsZW1lbnQuc3R5bGUuY29sb3IgPSBjb2xvcik7XG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJjb2xvciAwLjJzIGVhc2Utb3V0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNWRyhmZXRjaFN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFN0cmluZyk7XG4gICAgY29uc3Qgc3ZnQ29udGVudCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdmdDb250ZW50LCBcImltYWdlL3N2Zyt4bWxcIikuZG9jdW1lbnRFbGVtZW50IGFzIHVua25vd24gYXMgU1ZHU1ZHRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkU1ZHKHN2ZzogU1ZHU1ZHRWxlbWVudCwgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBzdmcuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIFNWR0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJY29uU1ZHKGxvY2FsU2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJzdmdcIik7XG4gICAgY29uc3QgcGFkID0gNDtcbiAgICBpY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGljb24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAkey1wYWR9ICR7LXBhZH0gJHtsb2NhbFNpemUgKyAyICogcGFkfSAke2xvY2FsU2l6ZSArIDIgKiBwYWR9YCk7XG4gICAgcmV0dXJuIGljb247XG59XG5cbmV4cG9ydCBjb25zdCBtYWtlTGluZSA9IChzdmc6IFNWR1NWR0VsZW1lbnQsIHN0cm9rZVdpZHRoOiBudW1iZXIpID0+ICgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gY3JlYXRlRWxlbWVudFNWRyhcImxpbmVcIik7XG4gICAgc2V0QXR0cmlidXRlcyhsaW5lLCB7IFwic3Ryb2tlLXdpZHRoXCI6IHN0cm9rZVdpZHRoIH0pO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICByZXR1cm4gbGluZTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlUG9seWxpbmUgPSAoc3ZnOiBTVkdTVkdFbGVtZW50LCBzdHJva2VXaWR0aDogbnVtYmVyKSA9PiAoKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJwb2x5bGluZVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIHsgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGgsIGZpbGw6IFwibm9uZVwiIH0pO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICByZXR1cm4gbGluZTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkSG9tZVBhZ2UsIGFkZE5hdkJhciB9IGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcblxuKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCIxcHggUm9ib3RvXCIpLCAvL1xuICAgICAgICBkb2N1bWVudC5mb250cy5sb2FkKFwiMXB4IE1lcnJpd2VhdGhlclwiKSxcbiAgICBdKTtcblxuICAgIGFkZE5hdkJhcigpO1xuICAgIGFkZEhvbWVQYWdlKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9