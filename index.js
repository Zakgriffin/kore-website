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
// export const jeans = "#00396F";
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
    var _a;
    scrollText.style.fontFamily = (_a = s.font) !== null && _a !== void 0 ? _a : "Roboto";
    scrollText.style.position = "absolute";
    scrollText.style.fontWeight = "" + s.fontWeight;
    scrollText.style.color = s.color;
    scrollText.style.letterSpacing = px(s.letterSpacing);
    scrollText.style.fontSize = px(s.fontSize);
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
    const s = innerWidth;
    sectionLine.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.001 * s);
    sectionLine.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerWidth);
    sectionLine.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(y);
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
    const koreNavSlogan = document.createElement("p");
    koreNavSlogan.style.whiteSpace = "nowrap";
    koreNavSlogan.innerText = "Close the gap in systems integration.";
    document.body.appendChild(koreNavSlogan);
    function addNavItem(navItemName) {
        const navItem = document.createElement("p");
        navItem.style.whiteSpace = "nowrap";
        navItem.innerText = navItemName;
        document.body.appendChild(navItem);
        return navItem;
    }
    const about = addNavItem("ABOUT");
    const services = addNavItem("SERVICES");
    const bio = addNavItem("BIO");
    const recentProjects = addNavItem("RECENT PROJECTS");
    const contact = addNavItem("CONTACT");
    const navItems = [about, services, bio, recentProjects, contact];
    (0,_signal__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
        const s = innerWidth;
        const margin = 0.05 * s; // ZZZZ take out
        const navBottom = s * 0.05;
        koreLogo.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(0.08 * s);
        koreLogo.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(koreLogo) - 0.002 * s);
        koreLogo.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(koreNavSlogan, { letterSpacing: 0 * s, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.011 * s });
        koreNavSlogan.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(navBottom - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(koreNavSlogan));
        koreNavSlogan.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posX)(koreLogo) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(koreLogo) + s * 0.02);
        const navItemTextDetails = { letterSpacing: 0.0009 * s, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s };
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
        sectionLine.style.background = _constants__WEBPACK_IMPORTED_MODULE_0__.jeans;
        (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(_scroll__WEBPACK_IMPORTED_MODULE_3__.scrollContainer, sectionLine);
        return sectionLine;
    }
    const headlineText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("PROTECT YOURSELF FROM PROJECT HAZARDS.");
    const travelingThePath = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Travelling the path unguided can cost you.");
    const logo = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollSvg)("logo.svg");
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
    const bioName = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("SCOTT G. GRIFFIN");
    const bioTitle = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Founder / Bad ass");
    const bioDescription = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Founder<br><br>With 37 years in the trenches of broadcast, AV, and media systems integration, I’ve built my career protecting clients from being steamrolled by complexity, bad planning, and unrealistic promises.<br><br>I’m not here to play nice — I’m here to make sure things get done right.<br><br>As a Subject Matter Expert and Owner’s Rep, I bring clear-eyed strategy, engineering leadership, and a no-BS approach to complex projects. From early-stage visioning through final implementation, I make sure my clients are fully informed and stay in control — without being buried in technical noise or vendor spin.<br><br>I’ve led high-profile projects for the NBA, WWE, Univision, Disney, and more. My background includes running a successful integration firm, managing engineering teams of 50+, and overseeing some of the largest media facility builds of the last 30 years. Whether we’re talking network ops, cloud workflows, post-production, or studio ops workflows — I’ve done it, and I bring the scars (and lessons) with me.<br><br>My job is simple: make sure my clients are protected, respected, and have delivered exactly what they need—nothing more, and absolutely nothing less.");
    const portrait = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollImage)("papa.png");
    const sectionLine2 = addSectionLine();
    const feelConfident = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("FEEL CONFIDENT KNOWING YOU’VE GOT IT ALL COVERED.");
    const springSig = new _signal__WEBPACK_IMPORTED_MODULE_4__.Signal();
    function addSkillTile(title, description, x, y) {
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.background = _constants__WEBPACK_IMPORTED_MODULE_0__.metal;
        (0,_page__WEBPACK_IMPORTED_MODULE_2__.appendChildForPage)(_scroll__WEBPACK_IMPORTED_MODULE_3__.scrollContainer, container);
        const titleText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)(title);
        const descriptionText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)(description);
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
        titleText.onclick = onClick;
        descriptionText.onclick = onClick;
        container.style.cursor = "pointer";
        titleText.style.cursor = "pointer";
        descriptionText.style.cursor = "pointer";
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
    const griffinBlackWhite = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollImage)("griffin-black-white.png");
    const griffinBlackWhiteText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("I’ve been in this industry for more than 35 years, and I can’t think of one client who was able to successfully navigate the gauntlet that is a large media facility project without the support of an experienced, knowledgeable, and aggressive project facilitator.");
    // bio
    const bioHeader = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("HOW WE<br>GOT HERE");
    const bioText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("I’ve always focused on the conceptualization and implementation of advanced technology solutions for facility and event systems integration. Along the way, that’s meant serving as design engineer, project manager, sales engineer, planning consultant, business builder/owner, and team leader.<br><br>It all started in technical theater, where I worked as a master electrician, lighting designer, sound designer, and front-of-house sound engineer in summer stock, touring, and off-Broadway theater. Following several years of freelance theatrical and concert technical support, I landed at AF Associates, a broadcast systems integrator.<br><br>After working on systems engineering efforts for NBC’s Today Show, CNBC, and USA Network, I moved to Sony Systems Integration. There, I oversaw design/builds for the Tribune Station Group and supported CBS Broadcast Operations & Engineering<br><br>At this point, I teamed up with two partners to launch The Systems Group. TSG specialized in large-scale, fast-track systems integration projects for the broadcast industry. During our 20-year run, we designed and built facilities for Serious Satellite Radio, MTV Networks, Syracuse University Newhouse, NFL Films Audio, NBCU, and Corus Entertainment, plus 200+ systems integration projects worldwide.<br><br>When TSG was acquired by Diversified in 2016, I established a small studio within the larger corporation, which allowed me to focus on critical early-stage project conceptualization, planning, and budgeting. Throughout those years, I was able to work shoulder to shoulder with some of the best and brightest across a wide range of disciplines in the media and entertainment industry. And the rest, as they say, is history.<br><br>Today, KORE offers a radically streamlined way to leverage a career’s worth of expertise, experience, and extensive industry relationships to help make sure your next project runs smoothly from planning to acceptance.<br><br>I hold a Bachelor of Science in Electrical Engineering from Penn State University, and am a member of SMPTE, AES, and SVG. I’m also kind to animals.");
    // recent projects
    const recentProjectHeader = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("RECENT<br>PROJECTS");
    function addProjectPair(projectName, projectDescription) {
        const projectNameText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)(projectName);
        const projectDescriptionText = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)(projectDescription);
        return { projectNameText, projectDescriptionText };
    }
    const projects = [addProjectPair("NBA Entertainment", "Architectural planning and budgeting for new content operations center, replay operations center, and expansion of the NBA Network."), addProjectPair("Televisa/Univision Network", "System conceptualization, applications engineering, project budgeting, and account representation for the network operations center."), addProjectPair("Western Kentucky University", "PBS and NPR stations, College of Communications production and post facility, including ties to campus sports and presentation venues, development of a complete system design for three control rooms, two TV studios, four radio studios, and post-production operations."), addProjectPair("World Wrestling Entertainment", "New HQ digital media facility design and budgeting for production, post, transmission, and event coordination, plus formal analysis for Phase 2 workflow optimization and orchestration layer."), addProjectPair("Disney/Galaxy Consolidation", "The largest network operations center facility ever built in the US. It includes ABC Network, WABC TV, ESPN NY, Marvel Entertainment, and Disney Screening Theater. Scott oversaw contract administration across the entire project.")];
    // contact
    const tellMe = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Tell me about your project.");
    const oneConversation = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("One conversation won’t cost you anything. Not having one might.");
    const bigKore = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollSvg)("big-kore.svg");
    const email = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Email");
    const linkedIn = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("LinkedIn");
    const privacyPolicy = (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.addScrollText)("Privacy Policy © 2026 KORE SME LLC");
    (0,_page__WEBPACK_IMPORTED_MODULE_2__.registerUpdateLayout)(() => {
        (0,_scroll__WEBPACK_IMPORTED_MODULE_3__.resizeScrollContainerFull)();
        const s = innerWidth;
        const margin = 0.05 * s;
        const fromTop = 0.031 * s;
        const bigTextTextDetails = { letterSpacing: 0 * s, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.075 * s, width: 0.4 * s, lineHeight: 0.084 * s };
        const subGrayTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: "gray", fontSize: 0.019 * s };
        const TEMP = 0.02 * s;
        // top
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(headlineText, bigTextTextDetails);
        headlineText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - 0.004 * s);
        headlineText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(fromTop);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(travelingThePath, subGrayTextDetails);
        travelingThePath.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        travelingThePath.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(headlineText) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(headlineText) + TEMP);
        logo.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(headlineText) * 1.04);
        logo.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(innerWidth - logo.scrollWidth - margin);
        logo.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(fromTop - 0.03 * s);
        layoutSectionLine(sectionLine1, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(travelingThePath) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(travelingThePath) + 0.05 * s);
        // bio
        const bioLeft = 0.41 * s;
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioName, { letterSpacing: 1, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.02 * s });
        bioName.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine1) + 0.1 * s);
        bioName.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioLeft);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioTitle, { letterSpacing: 1, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.011 * s });
        bioTitle.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioName.offsetTop + bioName.offsetHeight);
        bioTitle.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioLeft);
        const bioDescriptionWidth = s - bioLeft - margin;
        const longParagraphsTextDetails = { letterSpacing: 1, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, lineHeight: 0.02 * s, font: "Merriweather" };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioDescription, longParagraphsTextDetails);
        bioDescription.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioDescriptionWidth);
        bioDescription.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioTitle.offsetTop + bioTitle.offsetHeight);
        portrait.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioDescription) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioDescription) - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioName));
        portrait.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioName));
        portrait.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        layoutSectionLine(sectionLine2, (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioDescription) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioDescription) + 0.05 * s);
        // tiles
        const feelConfidentTextDetails = { letterSpacing: 0 * s, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.028 * s };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(feelConfident, feelConfidentTextDetails);
        feelConfident.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine2) + 0.04 * s);
        feelConfident.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        const scrollWidth = innerWidth - 2 * margin;
        const tileGap = s * 0.015;
        const tileSize = (scrollWidth - tileGap * (skillTileCountX - 1)) / skillTileCountX;
        function tilePosX(x) {
            return margin + (tileSize + tileGap) * x;
        }
        function tilePosY(y) {
            return (tileSize + tileGap) * y + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(feelConfident) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(feelConfident) + 0.04 * s;
        }
        bioDescription.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosX(2)); // ZZZZ this guy got broken up
        springSig.unsubscribeAll();
        (0,_signal__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
            for (const skillTile of skillTiles) {
                const { container, titleText, descriptionText, springX, springY, springSizeY } = skillTile;
                container.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tileSize);
                container.style.height = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tileSize * springSizeY.position + (springSizeY.position - 1) * tileGap);
                container.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosX(springX.position));
                container.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosY(springY.position));
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(titleText, { letterSpacing: 0.5, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.018 * s });
                titleText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosX(springX.position) + 0.08 * tileSize);
                titleText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosY(springY.position) + tileSize / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(titleText) / 2);
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(descriptionText, { letterSpacing: 0.5, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.011 * s, lineHeight: 0.016 * s, width: tileSize - s * 0.03 });
                descriptionText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(tilePosX(springX.position) + 0.08 * tileSize);
                descriptionText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(titleText) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(titleText) + s * 0.01);
            }
        }, [springSig]);
        layoutSectionLine(sectionLine3, tilePosY(1) + tileSize + 0.08 * s);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bigNames, bigTextTextDetails);
        bigNames.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine3) + 0.06 * s);
        bigNames.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - 0.007 * s);
        const hasTackedTextDetails = { letterSpacing: 0 * s, fontWeight: 300, color: "gray", fontSize: 0.014 * s, lineHeight: 0.025 * s, width: (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(bigNames) - 0.025 * s };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(hasTackled, hasTackedTextDetails);
        hasTackled.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigNames) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigNames) + TEMP);
        hasTackled.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1][0];
        const bigNamesTextDetails = { letterSpacing: 0 * s, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.018 * s };
        for (let y = 0; y < bigNameClientTexts.length; y++) {
            for (let x = 0; x < bigNameClientTexts[y].length; x++) {
                const o = bigNameClientTexts[y][x];
                (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(o, bigNamesTextDetails);
                o.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigNames) + s * 0.01 + s * 0.032 * y);
                o.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posX)(bigNames) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(bigNames) + s * 0.08 + s * 0.22 * x);
            }
        }
        griffinBlackWhite.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s);
        griffinBlackWhite.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(lastBigName) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(lastBigName) + 0.08 * s);
        const griffinBlackWhiteTextDetails = { letterSpacing: 0 * s, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.black, fontSize: 0.02 * s, width: 0.41 * s, lineHeight: 0.04 * s, font: "Merriweather" };
        griffinBlackWhiteText.style.fontStyle = "italic";
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
        griffinBlackWhiteText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posX)(lastBigName));
        griffinBlackWhiteText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(griffinBlackWhite) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhite) / 2 - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhiteText) / 2);
        // bio
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioHeader, bigTextTextDetails);
        bioHeader.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(griffinBlackWhite) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(griffinBlackWhite) + 0.1 * s);
        bioHeader.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - 0.007 * s);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioText, longParagraphsTextDetails);
        bioText.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s / 2 - margin);
        bioText.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioHeader));
        bioText.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s / 2);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(recentProjectHeader, bigTextTextDetails);
        recentProjectHeader.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bioText) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bioText) + 0.12 * s);
        recentProjectHeader.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin - 0.007 * s);
        for (const { projectNameText, projectDescriptionText } of projects) {
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectNameText, { letterSpacing: 1, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.02 * s });
            (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(projectDescriptionText, longParagraphsTextDetails);
            projectDescriptionText.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s / 2 - margin);
        }
        const projectsWithSpacing = projects.flatMap((project) => [project.projectNameText, 0.006 * s, project.projectDescriptionText, 0.028 * s]);
        const [alignments, _] = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.aligningWithGapsY)(projectsWithSpacing);
        for (const { element, offset } of alignments) {
            element.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(recentProjectHeader) + offset);
            element.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s / 2);
        }
        const lastProjectDescription = projects[projects.length - 1].projectDescriptionText;
        // contact
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(tellMe, { letterSpacing: 0.3, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.019 * s });
        tellMe.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        tellMe.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(lastProjectDescription) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(lastProjectDescription) + 0.2 * s);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(oneConversation, subGrayTextDetails);
        oneConversation.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        oneConversation.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(tellMe) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(tellMe) + 0.008 * s);
        bigKore.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s - margin * 2);
        bigKore.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        bigKore.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(oneConversation) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(oneConversation) + 0.1 * s);
        const linkTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: "gray", fontSize: 0.019 * s };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(email, linkTextDetails);
        email.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin);
        email.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigKore) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigKore) + 0.05 * s);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(linkedIn, linkTextDetails);
        linkedIn.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(margin + 0.07 * s);
        linkedIn.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigKore) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigKore) + 0.05 * s);
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(privacyPolicy, linkTextDetails);
        privacyPolicy.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s - (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeX)(privacyPolicy) - margin);
        privacyPolicy.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(bigKore) + (0,_layout__WEBPACK_IMPORTED_MODULE_1__.sizeY)(bigKore) + 0.05 * s);
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
    const SCROLL_WIDTH_PROPORTION = 1;
    return innerWidth * SCROLL_WIDTH_PROPORTION;
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

(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addNavBar)();
(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addHomePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOc0Q7QUFFdEQsc0RBQVMsRUFBRSxDQUFDO0FBQ1osd0RBQVcsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29yZS8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9wYWdlLnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvcGFnZXMvaG9tZS50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3Njcm9sbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NpZ25hbC50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3NwcmluZy50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNMYW5kc2NhcGUgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCIuL3NpZ25hbFwiO1xuXG5leHBvcnQgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5leHBvcnQgY29uc3QgYm9keVNpZyA9IG5ldyBTaWduYWwoKTtcbndpbmRvdy5vbnJlc2l6ZSA9IGJvZHlTaWcudXBkYXRlO1xuXG5leHBvcnQgY29uc3QgbWlkQnJvd24gPSBcIiM2MDM5MTNcIjtcbi8vIGV4cG9ydCBjb25zdCBqZWFucyA9IFwiIzAwMzk2RlwiO1xuZXhwb3J0IGNvbnN0IGplYW5zID0gXCJyZ2IoMzgsIDUxLCA4NilcIlxuZXhwb3J0IGNvbnN0IGRlZXBCcm93biA9IFwiIzNDMjQxNVwiO1xuZXhwb3J0IGNvbnN0IGJsYWNrID0gXCIjMDAwMDAwXCI7XG5leHBvcnQgY29uc3Qgd2hpdGUgPSBcIiNGRkZGRkZcIjtcbmV4cG9ydCBjb25zdCBtZXRhbCA9IFwiIzZDNzE3NVwiO1xuZXhwb3J0IGNvbnN0IHRpbGVCcm93biA9IFwiIzY5NTAzOFwiO1xuXG5leHBvcnQgY29uc3QgZmFkZUluQW5pbWF0aW9uID0gKCkgPT4gYGZhZGVJbiR7aXNMYW5kc2NhcGUoKSA/IFwiWFwiIDogXCJZXCJ9IGVhc2UgMC42c2A7XG5cbmV4cG9ydCBjb25zdCBTQ1JPTExfVEVYVF9XSURUSF9IRUlHSFRfUFJPUE9SVElPTiA9IDAuOTU7XG4iLCJpbXBvcnQgeyBpbnRlcmxhY2VkIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5pbnRlcmZhY2UgRWxlbWVudEFsaWdubWVudCB7XG4gICAgZWxlbWVudDogQm94RWxlbWVudDtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0RGV0YWlscyB7XG4gICAgbGV0dGVyU3BhY2luZzogbnVtYmVyO1xuICAgIGZvbnRXZWlnaHQ6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgbGluZUhlaWdodD86IG51bWJlcjtcbiAgICBmb250Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBCb3hFbGVtZW50ID0gSFRNTEVsZW1lbnQgfCBTVkdTVkdFbGVtZW50O1xuXG5leHBvcnQgZnVuY3Rpb24gcHgocGl4ZWxzOiBudW1iZXIpIHtcbiAgICByZXR1cm4gcGl4ZWxzICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiBheGlzQWxpZ25pbmdXaXRoR2FwcyhheGlzU2l6ZTogKGVsZW1lbnQ6IEJveEVsZW1lbnQpID0+IG51bWJlcikge1xuICAgIHJldHVybiAoZWxlbWVudE9yR2FwczogKEJveEVsZW1lbnQgfCBudW1iZXIpW10pOiBbRWxlbWVudEFsaWdubWVudFtdLCBudW1iZXJdID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudEFsaWdubWVudHMgPSBbXTtcbiAgICAgICAgbGV0IHJ1bm5pbmdUb3RhbCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudE9yR2FwIG9mIGVsZW1lbnRPckdhcHMpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50T3JHYXAgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50T3JHYXAgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudEFsaWdubWVudHMucHVzaCh7IGVsZW1lbnQ6IGVsZW1lbnRPckdhcCwgb2Zmc2V0OiBydW5uaW5nVG90YWwgfSk7XG4gICAgICAgICAgICAgICAgcnVubmluZ1RvdGFsICs9IGF4aXNTaXplKGVsZW1lbnRPckdhcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdUb3RhbCArPSBlbGVtZW50T3JHYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtlbGVtZW50QWxpZ25tZW50cywgcnVubmluZ1RvdGFsXTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB1bnB4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlLnNsaWNlKDAsIC0yKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9zWChlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0TGVmdCA6IHVucHgoZWxlbWVudC5zdHlsZS5sZWZ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc1koZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFRvcCA6IHVucHgoZWxlbWVudC5zdHlsZS50b3ApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2l6ZVgoZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFdpZHRoIDogZWxlbWVudC5jbGllbnRXaWR0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVZKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiBlbGVtZW50LmNsaWVudEhlaWdodDtcbn1cblxuLy8gWlpaWiB3YW50IGEgc2hvcnQgaGFuZCBmb3IgY29tbW9uIHNpbXBsZSB1c2VcbmV4cG9ydCBjb25zdCBhbGlnbmluZ1dpdGhHYXBzWCA9IGF4aXNBbGlnbmluZ1dpdGhHYXBzKHNpemVYKTtcbmV4cG9ydCBjb25zdCBhbGlnbmluZ1dpdGhHYXBzWSA9IGF4aXNBbGlnbmluZ1dpdGhHYXBzKHNpemVZKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGFuZHNjYXBlKCkge1xuICAgIHJldHVybiBpbm5lcldpZHRoIC8gaW5uZXJIZWlnaHQgPiAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyV2l0aEdhcFkoZWxlbWVudHM6IEhUTUxFbGVtZW50W10sIGdhcDogbnVtYmVyLCBjZW50ZXI6IG51bWJlcikge1xuICAgIGNvbnN0IGVsZW1lbnRzV2l0aEdhcHMgPSBpbnRlcmxhY2VkKGVsZW1lbnRzLCBnYXApO1xuICAgIGNvbnN0IFtlbGVtZW50QWxpZ25tZW50cywgdG90YWxIZWlnaHRdID0gYWxpZ25pbmdXaXRoR2Fwc1koZWxlbWVudHNXaXRoR2Fwcyk7XG5cbiAgICBmb3IgKGNvbnN0IHsgZWxlbWVudCwgb2Zmc2V0IH0gb2YgZWxlbWVudEFsaWdubWVudHMpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBweChvZmZzZXQgKyBjZW50ZXIgLSB0b3RhbEhlaWdodCAvIDIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlckVsZW1lbnRYKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcHgoaW5uZXJXaWR0aCAvIDIgLSBzaXplWChlbGVtZW50KSAvIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyRWxlbWVudFkoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHB4KGlubmVySGVpZ2h0IC8gMiAtIHNpemVZKGVsZW1lbnQpIC8gMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVRleHQoc2Nyb2xsVGV4dDogSFRNTEVsZW1lbnQsIHM6IFRleHREZXRhaWxzKSB7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250RmFtaWx5ID0gcy5mb250ID8/IFwiUm9ib3RvXCI7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiICsgcy5mb250V2VpZ2h0O1xuICAgIHNjcm9sbFRleHQuc3R5bGUuY29sb3IgPSBzLmNvbG9yO1xuICAgIHNjcm9sbFRleHQuc3R5bGUubGV0dGVyU3BhY2luZyA9IHB4KHMubGV0dGVyU3BhY2luZyk7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250U2l6ZSA9IHB4KHMuZm9udFNpemUpO1xuICAgIGlmIChzLndpZHRoKSBzY3JvbGxUZXh0LnN0eWxlLndpZHRoID0gcHgocy53aWR0aCk7XG4gICAgaWYgKHMubGluZUhlaWdodCkgc2Nyb2xsVGV4dC5zdHlsZS5saW5lSGVpZ2h0ID0gcHgocy5saW5lSGVpZ2h0KTtcbn1cbiIsImltcG9ydCB7IGJvZHlTaWcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGVmZmVjdCB9IGZyb20gXCIuL3NpZ25hbFwiO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlQ2xlYW51cHMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmNvbnN0IGF3YWl0QmVmb3JlTGF5b3V0cyA9IG5ldyBTZXQ8UHJvbWlzZTx2b2lkPj4oKTtcbmNvbnN0IGJlZm9yZUxheW91dHMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhd2FpdExheW91dEZvckltYWdlTG9hZGluZyhpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGF3YWl0QmVmb3JlTGF5b3V0cy5hZGQoaW1hZ2UuZGVjb2RlKCkpO1xufVxuXG4vLyBUT0RPIGdyb3NzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FoaGgoKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoYXdhaXRCZWZvcmVMYXlvdXRzKTtcbiAgICBhd2FpdEJlZm9yZUxheW91dHMuY2xlYXIoKTtcbiAgICBhd2FpdCBzbGVlcCgxMCk7XG4gICAgcnVuQWxsQW5kQ2xlYXIoYmVmb3JlTGF5b3V0cyk7XG4gICAgYm9keVNpZy51cGRhdGUoKTsgLy8gVE9ETyBncm9zc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVcGRhdGVMYXlvdXQodXBkYXRlTGF5b3V0OiAoKSA9PiB2b2lkKSB7XG4gICAgYXdhaXQgd2FoaGgoKTtcbiAgICBlZmZlY3QodXBkYXRlTGF5b3V0LCBbYm9keVNpZ10pO1xuICAgIHBhZ2VDbGVhbnVwcy5hZGQoKCkgPT4gYm9keVNpZy51bnN1YnNjcmliZSh1cGRhdGVMYXlvdXQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkRm9yUGFnZShwYXJlbnQ6IEVsZW1lbnQsIGNoaWxkOiBFbGVtZW50KSB7XG4gICAgYmVmb3JlTGF5b3V0cy5hZGQoKCkgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICBwYWdlQ2xlYW51cHMuYWRkKCgpID0+IHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5MYXN0UGFnZSgpIHtcbiAgICBydW5BbGxBbmRDbGVhcihwYWdlQ2xlYW51cHMpO1xufVxuXG5mdW5jdGlvbiBydW5BbGxBbmRDbGVhcihzZXQ6IFNldDwoKSA9PiB2b2lkPikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZXQpIGl0ZW0oKTtcbiAgICBzZXQuY2xlYXIoKTtcbn1cbiIsImltcG9ydCB7IGJsYWNrLCBib2R5U2lnLCBqZWFucywgbWV0YWwsIHRpbGVCcm93biwgd2hpdGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhbGlnbmluZ1dpdGhHYXBzWSwgcG9zWCwgcG9zWSwgcHgsIHNpemVYLCBzaXplWSwgc3R5bGVUZXh0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRGb3JQYWdlLCByZWdpc3RlclVwZGF0ZUxheW91dCB9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQgeyBhZGRTY3JvbGxJbWFnZSwgYWRkU2Nyb2xsU3ZnLCBhZGRTY3JvbGxUZXh0LCByZXNpemVTY3JvbGxDb250YWluZXJGdWxsLCBzY3JvbGxDb250YWluZXIgfSBmcm9tIFwiLi4vc2Nyb2xsXCI7XG5pbXBvcnQgeyBlZmZlY3QsIFNpZ25hbCB9IGZyb20gXCIuLi9zaWduYWxcIjtcbmltcG9ydCB7IGFuaW1hdGVTcHJpbmcsIFNwcmluZyB9IGZyb20gXCIuLi9zcHJpbmdcIjtcblxuZnVuY3Rpb24gbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmU6IEhUTUxFbGVtZW50LCB5OiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gaW5uZXJXaWR0aDtcbiAgICBzZWN0aW9uTGluZS5zdHlsZS5oZWlnaHQgPSBweCgwLjAwMSAqIHMpO1xuICAgIHNlY3Rpb25MaW5lLnN0eWxlLndpZHRoID0gcHgoaW5uZXJXaWR0aCk7XG4gICAgc2VjdGlvbkxpbmUuc3R5bGUudG9wID0gcHgoeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROYXZCYXIoKSB7XG4gICAgLy8vIFpaWlogcHVsbCB0aGlzIG91dCB3aXRoIG9uZSBpbiBzY3JvbGwudHNcbiAgICBmdW5jdGlvbiBhZGRJbWFnZShzcmM6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzY3JvbGxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHNjcm9sbEltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBzY3JvbGxJbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHNjcm9sbEltYWdlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICAgIHNjcm9sbEltYWdlLm9ubG9hZCA9ICgpID0+IGJvZHlTaWcudXBkYXRlKCk7IC8vIFpaWlogc3R1cGlkXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxJbWFnZSk7XG4gICAgICAgIHJldHVybiBzY3JvbGxJbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBrb3JlTG9nbyA9IGFkZEltYWdlKFwiYmlnLWtvcmUuc3ZnXCIpO1xuXG4gICAgY29uc3Qga29yZU5hdlNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGtvcmVOYXZTbG9nYW4uc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAga29yZU5hdlNsb2dhbi5pbm5lclRleHQgPSBcIkNsb3NlIHRoZSBnYXAgaW4gc3lzdGVtcyBpbnRlZ3JhdGlvbi5cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGtvcmVOYXZTbG9nYW4pO1xuXG4gICAgZnVuY3Rpb24gYWRkTmF2SXRlbShuYXZJdGVtTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmF2SXRlbS5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICAgICAgbmF2SXRlbS5pbm5lclRleHQgPSBuYXZJdGVtTmFtZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICAgICAgcmV0dXJuIG5hdkl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgYWJvdXQgPSBhZGROYXZJdGVtKFwiQUJPVVRcIik7XG4gICAgY29uc3Qgc2VydmljZXMgPSBhZGROYXZJdGVtKFwiU0VSVklDRVNcIik7XG4gICAgY29uc3QgYmlvID0gYWRkTmF2SXRlbShcIkJJT1wiKTtcbiAgICBjb25zdCByZWNlbnRQcm9qZWN0cyA9IGFkZE5hdkl0ZW0oXCJSRUNFTlQgUFJPSkVDVFNcIik7XG4gICAgY29uc3QgY29udGFjdCA9IGFkZE5hdkl0ZW0oXCJDT05UQUNUXCIpO1xuXG4gICAgY29uc3QgbmF2SXRlbXMgPSBbYWJvdXQsIHNlcnZpY2VzLCBiaW8sIHJlY2VudFByb2plY3RzLCBjb250YWN0XTtcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSBpbm5lcldpZHRoO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjA1ICogczsgLy8gWlpaWiB0YWtlIG91dFxuXG4gICAgICAgIGNvbnN0IG5hdkJvdHRvbSA9IHMgKiAwLjA1O1xuXG4gICAgICAgIGtvcmVMb2dvLnN0eWxlLndpZHRoID0gcHgoMC4wOCAqIHMpO1xuICAgICAgICBrb3JlTG9nby5zdHlsZS50b3AgPSBweChuYXZCb3R0b20gLSBzaXplWShrb3JlTG9nbykgLSAwLjAwMiAqIHMpO1xuICAgICAgICBrb3JlTG9nby5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luKTtcblxuICAgICAgICBzdHlsZVRleHQoa29yZU5hdlNsb2dhbiwgeyBsZXR0ZXJTcGFjaW5nOiAwICogcywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAxMSAqIHMgfSk7XG4gICAgICAgIGtvcmVOYXZTbG9nYW4uc3R5bGUudG9wID0gcHgobmF2Qm90dG9tIC0gc2l6ZVkoa29yZU5hdlNsb2dhbikpO1xuICAgICAgICBrb3JlTmF2U2xvZ2FuLnN0eWxlLmxlZnQgPSBweChwb3NYKGtvcmVMb2dvKSArIHNpemVYKGtvcmVMb2dvKSArIHMgKiAwLjAyKTtcblxuICAgICAgICBjb25zdCBuYXZJdGVtVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMDAwOSAqIHMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMSAqIHMgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gbmF2SXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW0gPSBuYXZJdGVtc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IG5leHROYXZJdGVtID0gbmF2SXRlbXNbaSArIDFdO1xuXG4gICAgICAgICAgICBzdHlsZVRleHQobmF2SXRlbSwgbmF2SXRlbVRleHREZXRhaWxzKTtcbiAgICAgICAgICAgIGlmIChuZXh0TmF2SXRlbSkgbmF2SXRlbS5zdHlsZS5sZWZ0ID0gcHgocG9zWChuZXh0TmF2SXRlbSkgLSBzaXplWChuYXZJdGVtKSAtIDAuMDIgKiBzKTtcbiAgICAgICAgICAgIGVsc2UgbmF2SXRlbS5zdHlsZS5sZWZ0ID0gcHgocyAtIHNpemVYKGNvbnRhY3QpIC0gMC4wNyAqIHMpO1xuXG4gICAgICAgICAgICBuYXZJdGVtLnN0eWxlLnRvcCA9IHB4KG5hdkJvdHRvbSAtIHNpemVZKG5hdkl0ZW0pKTtcbiAgICAgICAgfVxuICAgIH0sIFtib2R5U2lnXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb21lUGFnZSgpIHtcbiAgICBmdW5jdGlvbiBhZGRTZWN0aW9uTGluZSgpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWN0aW9uTGluZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgc2VjdGlvbkxpbmUuc3R5bGUuYmFja2dyb3VuZCA9IGplYW5zO1xuXG4gICAgICAgIGFwcGVuZENoaWxkRm9yUGFnZShzY3JvbGxDb250YWluZXIsIHNlY3Rpb25MaW5lKTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb25MaW5lO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRsaW5lVGV4dCA9IGFkZFNjcm9sbFRleHQoXCJQUk9URUNUIFlPVVJTRUxGIEZST00gUFJPSkVDVCBIQVpBUkRTLlwiKTtcbiAgICBjb25zdCB0cmF2ZWxpbmdUaGVQYXRoID0gYWRkU2Nyb2xsVGV4dChcIlRyYXZlbGxpbmcgdGhlIHBhdGggdW5ndWlkZWQgY2FuIGNvc3QgeW91LlwiKTtcblxuICAgIGNvbnN0IGxvZ28gPSBhZGRTY3JvbGxTdmcoXCJsb2dvLnN2Z1wiKTtcbiAgICBsb2dvLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XG4gICAgbG9nby5vbm1vdXNlZW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIGxvZ28uc3R5bGUuZmlsdGVyID0gXCJkcm9wLXNoYWRvdygxMHB4IDEwcHggMTBweCByZ2JhKDI1NSwgMTgwLCAxMDAsIDAuNSkpXCI7XG4gICAgICAgIGxvZ28uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTE1cHgsIC0xNXB4KVwiO1xuICAgIH07XG4gICAgbG9nby5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIGxvZ28uc3R5bGUuZmlsdGVyID0gXCJcIjtcbiAgICAgICAgbG9nby5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwcHgsIDBweClcIjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUxID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGJpb05hbWUgPSBhZGRTY3JvbGxUZXh0KFwiU0NPVFQgRy4gR1JJRkZJTlwiKTtcbiAgICBjb25zdCBiaW9UaXRsZSA9IGFkZFNjcm9sbFRleHQoXCJGb3VuZGVyIC8gQmFkIGFzc1wiKTtcbiAgICBjb25zdCBiaW9EZXNjcmlwdGlvbiA9IGFkZFNjcm9sbFRleHQoXCJGb3VuZGVyPGJyPjxicj5XaXRoIDM3IHllYXJzIGluIHRoZSB0cmVuY2hlcyBvZiBicm9hZGNhc3QsIEFWLCBhbmQgbWVkaWEgc3lzdGVtcyBpbnRlZ3JhdGlvbiwgSeKAmXZlIGJ1aWx0IG15IGNhcmVlciBwcm90ZWN0aW5nIGNsaWVudHMgZnJvbSBiZWluZyBzdGVhbXJvbGxlZCBieSBjb21wbGV4aXR5LCBiYWQgcGxhbm5pbmcsIGFuZCB1bnJlYWxpc3RpYyBwcm9taXNlcy48YnI+PGJyPknigJltIG5vdCBoZXJlIHRvIHBsYXkgbmljZSDigJQgSeKAmW0gaGVyZSB0byBtYWtlIHN1cmUgdGhpbmdzIGdldCBkb25lIHJpZ2h0Ljxicj48YnI+QXMgYSBTdWJqZWN0IE1hdHRlciBFeHBlcnQgYW5kIE93bmVy4oCZcyBSZXAsIEkgYnJpbmcgY2xlYXItZXllZCBzdHJhdGVneSwgZW5naW5lZXJpbmcgbGVhZGVyc2hpcCwgYW5kIGEgbm8tQlMgYXBwcm9hY2ggdG8gY29tcGxleCBwcm9qZWN0cy4gRnJvbSBlYXJseS1zdGFnZSB2aXNpb25pbmcgdGhyb3VnaCBmaW5hbCBpbXBsZW1lbnRhdGlvbiwgSSBtYWtlIHN1cmUgbXkgY2xpZW50cyBhcmUgZnVsbHkgaW5mb3JtZWQgYW5kIHN0YXkgaW4gY29udHJvbCDigJQgd2l0aG91dCBiZWluZyBidXJpZWQgaW4gdGVjaG5pY2FsIG5vaXNlIG9yIHZlbmRvciBzcGluLjxicj48YnI+SeKAmXZlIGxlZCBoaWdoLXByb2ZpbGUgcHJvamVjdHMgZm9yIHRoZSBOQkEsIFdXRSwgVW5pdmlzaW9uLCBEaXNuZXksIGFuZCBtb3JlLiBNeSBiYWNrZ3JvdW5kIGluY2x1ZGVzIHJ1bm5pbmcgYSBzdWNjZXNzZnVsIGludGVncmF0aW9uIGZpcm0sIG1hbmFnaW5nIGVuZ2luZWVyaW5nIHRlYW1zIG9mIDUwKywgYW5kIG92ZXJzZWVpbmcgc29tZSBvZiB0aGUgbGFyZ2VzdCBtZWRpYSBmYWNpbGl0eSBidWlsZHMgb2YgdGhlIGxhc3QgMzAgeWVhcnMuIFdoZXRoZXIgd2XigJlyZSB0YWxraW5nIG5ldHdvcmsgb3BzLCBjbG91ZCB3b3JrZmxvd3MsIHBvc3QtcHJvZHVjdGlvbiwgb3Igc3R1ZGlvIG9wcyB3b3JrZmxvd3Mg4oCUIEnigJl2ZSBkb25lIGl0LCBhbmQgSSBicmluZyB0aGUgc2NhcnMgKGFuZCBsZXNzb25zKSB3aXRoIG1lLjxicj48YnI+TXkgam9iIGlzIHNpbXBsZTogbWFrZSBzdXJlIG15IGNsaWVudHMgYXJlIHByb3RlY3RlZCwgcmVzcGVjdGVkLCBhbmQgaGF2ZSBkZWxpdmVyZWQgZXhhY3RseSB3aGF0IHRoZXkgbmVlZOKAlG5vdGhpbmcgbW9yZSwgYW5kIGFic29sdXRlbHkgbm90aGluZyBsZXNzLlwiKTtcbiAgICBjb25zdCBwb3J0cmFpdCA9IGFkZFNjcm9sbEltYWdlKFwicGFwYS5wbmdcIik7XG5cbiAgICBjb25zdCBzZWN0aW9uTGluZTIgPSBhZGRTZWN0aW9uTGluZSgpO1xuXG4gICAgY29uc3QgZmVlbENvbmZpZGVudCA9IGFkZFNjcm9sbFRleHQoXCJGRUVMIENPTkZJREVOVCBLTk9XSU5HIFlPVeKAmVZFIEdPVCBJVCBBTEwgQ09WRVJFRC5cIik7XG5cbiAgICBjb25zdCBzcHJpbmdTaWcgPSBuZXcgU2lnbmFsKCk7XG4gICAgZnVuY3Rpb24gYWRkU2tpbGxUaWxlKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBtZXRhbDtcblxuICAgICAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBjb250YWluZXIpO1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBhZGRTY3JvbGxUZXh0KHRpdGxlKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gYWRkU2Nyb2xsVGV4dChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuMjVzXCI7XG5cbiAgICAgICAgY29uc3Qgc3ByaW5nWCA9IG5ldyBTcHJpbmcoeCk7XG4gICAgICAgIGNvbnN0IHNwcmluZ1kgPSBuZXcgU3ByaW5nKHkpO1xuICAgICAgICBjb25zdCBzcHJpbmdTaXplWSA9IG5ldyBTcHJpbmcoMSk7XG4gICAgICAgIHNwcmluZ1guc2V0U3RpZmZuZXNzQ3JpdGljYWwoMjAwKTtcbiAgICAgICAgc3ByaW5nWS5zZXRTdGlmZm5lc3NDcml0aWNhbCgyMDApO1xuICAgICAgICBzcHJpbmdTaXplWS5zZXRTdGlmZm5lc3NDcml0aWNhbCgyMDApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRpbGVBdCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNraWxsVGlsZXMuZmluZCgocykgPT4gcy5zcHJpbmdYLnRhcmdldCA9PT0geCAmJiBzLnNwcmluZ1kudGFyZ2V0ID09PSB5KSE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmbGlwKHNwcmluZzE6IFNwcmluZywgc3ByaW5nMjogU3ByaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gc3ByaW5nMS50YXJnZXQ7XG4gICAgICAgICAgICBzcHJpbmcxLnRhcmdldCA9IHNwcmluZzIudGFyZ2V0O1xuICAgICAgICAgICAgc3ByaW5nMi50YXJnZXQgPSBzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ByaW5nWS50YXJnZXQgPT09IGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBmbGlwKFxuICAgICAgICAgICAgICAgICAgICB0aWxlQXQoaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldCwgMSAtIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpLnNwcmluZ1ksIC8vXG4gICAgICAgICAgICAgICAgICAgIGhvbGVTa2lsbFRpbGUuc3ByaW5nWVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjaW9uWCA9IHNwcmluZ1gudGFyZ2V0IC0gaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldCA8IDAgPyAtMSA6IDE7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gaG9sZVNraWxsVGlsZS5zcHJpbmdYLnRhcmdldDsgeCAhPT0gc3ByaW5nWC50YXJnZXQ7IHggKz0gZGlyZWNpb25YKSB7XG4gICAgICAgICAgICAgICAgZmxpcChcbiAgICAgICAgICAgICAgICAgICAgdGlsZUF0KHgsIGhvbGVTa2lsbFRpbGUuc3ByaW5nWS50YXJnZXQpLnNwcmluZ1gsIC8vXG4gICAgICAgICAgICAgICAgICAgIHRpbGVBdCh4ICsgZGlyZWNpb25YLCBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdYXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwcmluZ1kudGFyZ2V0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmxpcChcbiAgICAgICAgICAgICAgICAgICAgdGlsZUF0KHNwcmluZ1gudGFyZ2V0LCAxIC0gc3ByaW5nWS50YXJnZXQpLnNwcmluZ1ksIC8vXG4gICAgICAgICAgICAgICAgICAgIHNwcmluZ1lcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNraWxsVGlsZSBvZiBza2lsbFRpbGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNraWxsVGlsZSA9PT0gaG9sZVNraWxsVGlsZSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gbWV0YWw7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLnNwcmluZ1NpemVZLnRhcmdldCA9IDE7XG4gICAgICAgICAgICAgICAgc2tpbGxUaWxlLmRlc2NyaXB0aW9uVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gdGlsZUJyb3duO1xuICAgICAgICAgICAgc3ByaW5nU2l6ZVkudGFyZ2V0ID0gMjtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1gsIHNraWxsVGlsZS5zcHJpbmdTaWcpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1ksIHNraWxsVGlsZS5zcHJpbmdTaWcpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTcHJpbmcoc2tpbGxUaWxlLnNwcmluZ1NpemVZLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIub25jbGljayA9IG9uQ2xpY2s7XG4gICAgICAgIHRpdGxlVGV4dC5vbmNsaWNrID0gb25DbGljaztcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0Lm9uY2xpY2sgPSBvbkNsaWNrO1xuXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgdGl0bGVUZXh0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgcmV0dXJuIHsgY29udGFpbmVyLCB0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgc3ByaW5nWCwgc3ByaW5nWSwgc3ByaW5nU2l6ZVksIHNwcmluZ1NpZyB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhvbGVTa2lsbFRpbGUgPSBhZGRTa2lsbFRpbGUoXCJcIiwgXCJcIiwgMiwgMSk7XG4gICAgaG9sZVNraWxsVGlsZS5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzAwMDAwMDMzXCI7XG5cbiAgICBjb25zdCBza2lsbFRpbGVzID0gW1xuICAgICAgICBhZGRTa2lsbFRpbGUoXCJPd25lcjxicj5SZXByZXNlbnRhdGlvblwiLCBcIktPUkUgc2VydmVzIGFzIHlvdXIgZXllcywgZWFycywgYW5kIGFkdm9jYXRlcywgcHJvdmlkaW5nIGNvbmNpZXJnZS1sZXZlbCBndWlkYW5jZSB0aHJvdWdoIGV2ZXJ5IHN0ZXAgb2YgeW91ciBwcm9qZWN0LiBXZSBrZWVwIHZlbmRvcnMgYW5kIGNvbnRyYWN0b3JzIGhvbmVzdCwgbWFraW5nIHN1cmUgbm90aGluZyBzbGlwcyB0aHJvdWdoIHRoZSBjcmFja3MuIFdlIGJlZ2luIGJ5IGFsaWduaW5nIGFsbCBzdGFrZWhvbGRlcnMgZWFybHkgb24sIHRoZW4gZGVmZW5kIHlvdXIgcG9zaXRpb24gdGhyb3VnaG91dCB0aGUgcHJvY2Vzcy5cIiwgMCwgMCksIC8vXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkJhc2lzIG9mPGJyPkRlc2lnblwiLCBcIktPUkUgbGlzdGVucyBiZWZvcmUgd2UgYWR2aXNlLiBXZSByZXZpZXcgeW91ciBjdXJyZW50IG9wZXJhdGlvbiwgZnV0dXJlIHBsYW5zLCBhbmQgb3ZlcmFsbCBnb2Fscy4gWW91ciBuZXcgc3BhY2UgYW5kIHN5c3RlbXMgbXVzdCBncmFjZWZ1bGx5IHN1cHBvcnQgb3BlcmF0aW9uYWwgbmVlZHMgYW5kIGZ1dHVyZSBncm93dGguIERlZXAgZXhwZXJ0aXNlIGluIHN5c3RlbXMgcGxhbm5pbmcgYW5kIGluZnJhc3RydWN0dXJlIHN0cmF0ZWd5IGFsbG93cyBLT1JFIHRvIHRyYW5zbGF0ZSB2aXNpb24gaW50byBhIGNvbXByZWhlbnNpdmUgQm9ELlwiLCAxLCAwKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUHJvb2Ygb2Y8YnI+Q29uY2VwdFwiLCBcIktPUkUga25vd3MgeW91IG9ubHkgZ2V0IG9uZSBjaGFuY2UgdG8gYnVpbGQgYSBuZXcgZmFjaWxpdHkgcmlnaHQuIFlvdSBkZXNlcnZlIHRvIHNlZSBpZGVhcyB0aG9yb3VnaGx5IHRlc3RlZCBhbmQgdmFsaWRhdGVkIGJlZm9yZSB5b3UgY29tbWl0LiBXZSB2ZXQgdGVjaG5vbG9neSwgdmVuZG9ycywgYW5kIGFzc3VyYW5jZXMgYWdhaW5zdCByZWFsLXdvcmxkIGNyaXRlcmlhLiBUaGlzIGJyaW5ncyBjbGFyaXR5IHRvIHlvdXIgd29ya2Zsb3cgYW5kIHB1dHMgbWVhc3VyYWJsZSBhY2NvdW50YWJpbGl0eSBiZWhpbmQgZXZlcnkgcHJvbWlzZS5cIiwgMiwgMCksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlByb2plY3QgVGVhbTxicj5Bc3NlbWJseVwiLCBcIktPUkUgYnJpbmdzIHRvZ2V0aGVyIHRoZSByaWdodCB0ZWFtIGZvciB5b3VyIHByb2plY3QuIFdlIGRyYXcgZnJvbSBhIG5ldHdvcmsgb2YgdHJ1c3RlZCBleHBlcnRzIGluIGRlc2lnbiwgZW5naW5lZXJpbmcsIGluc3RhbGxhdGlvbiwgYW5kIG1vcmUuIFRoZXNlIGFyZSBwcm92ZW4gcHJvcyB3aG/igJl2ZSBzaG93biB0aGV5IGNhbiBleGVjdXRlIHVuZGVyIHByZXNzdXJlIHdpdGhvdXQgbWlzc2luZyBhIGJlYXQuIFRoYXQgdHJhbnNsYXRlcyB0byBwZXJmb3JtYW5jZSwgbm90IGV4Y3VzZXMuXCIsIDMsIDApLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJQdW5jaCBMaXN0PGJyPk1hbmFnZW1lbnRcIiwgXCJLT1JFIHRyYWNrcyBldmVyeSBkZXRhaWwsIGZyb20gYnVpbGRpbmcgY29uc3RydWN0aW9uIHRvIHN5c3RlbXMgaW50ZWdyYXRpb24gdG8gb25nb2luZyBzZXJ2aWNlcy4gSXTigJlzIGNyaXRpY2FsIHRvIG1ha2Ugc3VyZSBhbGwgdGhlIHRlY2ggd29ya3MsIGFsbCBwcm9taXNlcyBhcmUgZnVsZmlsbGVkLiBOb3RoaW5nIGlzIHNpZ25lZC1vZmYgdW50aWwgaXTigJlzIHRlc3RlZCwgdmVyaWZpZWQsIGFuZCByaWdodC4gUmVsZW50bGVzcyBmb2xsb3ctdGhyb3VnaCB0YWtlcyBleHRyYSBlZmZvcnQsIGJ1dCB3ZSBzdHViYm9ybmx5IHJlZnVzZSB0byBjb21wcm9taXNlLlwiLCA0LCAwKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiTmVlZHM8YnI+QW5hbHlzaXNcIiwgXCJLT1JFIGd1aWRlcyB5b3UgdG8gdW5jb3ZlciBhbmQgdW5kZXJzdGFuZCBleGFjdGx5IHdoYXTigJlzIG5lZWRlZCwgd2hhdCdzIHBvc3NpYmxlLCBhbmQgd2hhdOKAmXMgd29ydGggcHVyc3VpbmcuIEFzayBhbnlvbmUgd2hv4oCZcyBiZWVuIHRocm91Z2ggdGhpcyBwcm9jZXNzIOKAkyBlYXJseS1waGFzZSBwcm9qZWN0IGludGVsbGlnZW5jZSBtYWtlcyBhbGwgdGhlIGRpZmZlcmVuY2UuIE1ha2Ugc21hcnRlciwgZmFzdGVyIGRlY2lzaW9ucyB3aXRoIGNsYXJpdHkgYW5kIGNvbmZpZGVuY2UsIGFuZCBhdm9pZCBjb3N0bHkgbWlzdGFrZXMuXCIsIDAsIDEpLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJCdWRnZXRpbmcgJjxicj5Fc3RpbWF0aW5nXCIsIFwiS09SRSBvZmZlcnMgYSBidWRnZXRpbmcgcHJvY2VzcyBzaGFwZWQgYnkgcmVhbC13b3JsZCBlbmdpbmVlcmluZyBleHBlcmllbmNlLiBXZSBwcm92aWRlIGVhcmx5IGNvc3QgbW9kZWxzLCBkZXRhaWxlZCBwcm9qZWN0aW9ucywgYW5kIHBoYXNlZCBpbnZlc3RtZW50IHN0cmF0ZWdpZXMgdG8gaGVscCB5b3Ugc3RheSBpbmZvcm1lZCwgaW4gY29udHJvbCwgYW5kIHdpdGhpbiBidWRnZXQuIE91ciBlYXJseSB3b3JrIGhlbHBzIHlvdSB0byBtaW5pbWl6ZSBzY29wZSBjcmVlcCBhbmQgYXZvaWQgZmluYW5jaWFsIHN1cnByaXNlcy5cIiwgMSwgMSksXG4gICAgICAgIGhvbGVTa2lsbFRpbGUsXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlJGUCBDcmVhdGlvbjxicj4mIEFkbWluaXN0cmF0aW9uXCIsIFwiS09SRSBjYXB0dXJlcyB0aGUgcHJvamVjdCBvYmplY3RpdmVzLCBvdXRsaW5lcyB0aGUgc2NvcGUsIGRlZmluZXMgdGhlIHF1YWxpZmljYXRpb25zLCBhbmQgc3RydWN0dXJlcyB0aGUgcmVzcG9uc2UgcmVxdWlyZWQgb2YgZXZlcnkgcHJvamVjdCBzb2xpY2l0YXRpb24gdGhhdCB3ZSBwcm9kdWNlLiBXZSB0aGVuIHN0cnVjdHVyZSB0aGUgYmlkIGV2YWx1YXRpb24gcHJvY2VzcyBhbmQgZ3VpZGUgeW91IHRocm91Z2ggdGhlIGNyaXRpY2FsIGRlY2lzaW9uLW1ha2luZywgbGVhdmluZyBub3RoaW5nIHRvIGNoYW5jZS5cIiwgMywgMSksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIkludGVncmF0b3I8YnI+U3VwcG9ydFwiLCBcIktPUkUgcGFydG5lcnMgd2l0aCB5b3VyIGludGVncmF0b3IgdG8gbGVhZCB0aGUgcHJvY2VzcywgcHJvdGVjdCB5b3VyIHZpc2lvbiwgYW5kIG1ha2Ugc3VyZSBldmVyeSB3b3JrZmxvdyBpcyBkZWxpdmVyZWQgZXhhY3RseSBhcyBkZXNpZ25lZC4gV2l0aCBpbnRlZ3JhdGlvbiBsZWFkZXJzaGlwIGFuZCBvdmVyc2lnaHQgcm9vdGVkIGluIGRlY2FkZXMgb2YgZXhwZXJpZW5jZSwgd2UgcHJlc2VydmUgdGhlIGludGVncml0eSBvZiB5b3VyIGRlc2lnbi4gV2UgZG9u4oCZdCBhY2NlcHQgY29tcHJvbWlzZXMuIE5laXRoZXIgc2hvdWxkIHlvdS5cIiwgNCwgMSksXG4gICAgXTtcbiAgICBjb25zdCBza2lsbFRpbGVDb3VudFggPSBNYXRoLm1heCguLi5za2lsbFRpbGVzLm1hcCgocykgPT4gcy5zcHJpbmdYLnRhcmdldCkpICsgMTtcbiAgICBza2lsbFRpbGVzWzJdLmNvbnRhaW5lci5jbGljaygpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUzID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGJpZ05hbWVzID0gYWRkU2Nyb2xsVGV4dChcIkJJRyBOQU1FUzxicj5ZT1UgS05PV1wiKTtcbiAgICBjb25zdCBoYXNUYWNrbGVkID0gYWRkU2Nyb2xsVGV4dChcIjxzdHJvbmc+U2NvdHQgR3JpZmZpbjwvc3Ryb25nPiBoYXMgdGFja2xlZCBzb21lIG9mIHRoZSBtb3N0IGNvbXBsZXggcHJvamVjdHMgZm9yIHNvbWUgb2YgdGhlIGxhcmdlc3QgbWVkaWEgY29tcGFuaWVzIGluIHRoZSB3b3JsZC48YnI+SGUgaGFzIHNlZW4gaXQgYWxsLCBhbmQgeW91IGNhbiB0YXAgaW50byB0aGF0IGV4cGVyaWVuY2UuXCIpO1xuXG4gICAgY29uc3QgYmlnTmFtZUNsaWVudHMgPSBbXG4gICAgICAgIFtcIkFCUy9DQk5cIiwgXCJOYXRpb25hbCBHZW9ncmFwaGljXCJdLCAvL1xuICAgICAgICBbXCJCbGFja3JvY2tcIiwgXCJOb3J0aHdlc3Rlcm4gVW5pdmVyc2l0eVwiXSxcbiAgICAgICAgW1wiQmxhY2tzdG9uZVwiLCBcIlBhcmFtb3VudC9DQlNcIl0sXG4gICAgICAgIFtcIkNCU1wiLCBcIk1UVi9TaG93dGltZVwiXSxcbiAgICAgICAgW1wiQ05OXCIsIFwiUGVubiBTdGF0ZSBVbml2ZXJzaXR5XCJdLFxuICAgICAgICBbXCJEaXNuZXkvQUJDL0VTUE5cIiwgXCJQcnVkZW50aWFsXCJdLFxuICAgICAgICBbXCJGb3ggTmV3c1wiLCBcIlNpcml1cyBTYXRlbGxpdGUgUmFkaW9cIl0sXG4gICAgICAgIFtcIk1hZGlzb24gU3F1YXJlIEdhcmRlblwiLCBcIlN5cmFjdXNlIFVuaXZlcnNpdHlcIl0sXG4gICAgICAgIFtcIk1MQlwiLCBcIlRlbGV2aXNhLVVuaXZpc2lvblwiXSxcbiAgICAgICAgW1wiTVNOQkNcIiwgXCJUaGUgTmV3IFlvcmsgVGltZXNcIl0sXG4gICAgICAgIFtcIk5CQVwiLCBcIldXRVwiXSxcbiAgICAgICAgW1wiTkJDVS9DTkJDXCJdLFxuICAgIF07XG5cbiAgICBjb25zdCBiaWdOYW1lQ2xpZW50VGV4dHMgPSBiaWdOYW1lQ2xpZW50cy5tYXAoKGJpZ05hbWVDbGllbnRzUm93KSA9PiBiaWdOYW1lQ2xpZW50c1Jvdy5tYXAoKGJpZ05hbWVDbGllbnQpID0+IGFkZFNjcm9sbFRleHQoYmlnTmFtZUNsaWVudCkpKTtcblxuICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlID0gYWRkU2Nyb2xsSW1hZ2UoXCJncmlmZmluLWJsYWNrLXdoaXRlLnBuZ1wiKTtcbiAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZVRleHQgPSBhZGRTY3JvbGxUZXh0KFwiSeKAmXZlIGJlZW4gaW4gdGhpcyBpbmR1c3RyeSBmb3IgbW9yZSB0aGFuIDM1IHllYXJzLCBhbmQgSSBjYW7igJl0IHRoaW5rIG9mIG9uZSBjbGllbnQgd2hvIHdhcyBhYmxlIHRvIHN1Y2Nlc3NmdWxseSBuYXZpZ2F0ZSB0aGUgZ2F1bnRsZXQgdGhhdCBpcyBhIGxhcmdlIG1lZGlhIGZhY2lsaXR5IHByb2plY3Qgd2l0aG91dCB0aGUgc3VwcG9ydCBvZiBhbiBleHBlcmllbmNlZCwga25vd2xlZGdlYWJsZSwgYW5kIGFnZ3Jlc3NpdmUgcHJvamVjdCBmYWNpbGl0YXRvci5cIik7XG5cbiAgICAvLyBiaW9cblxuICAgIGNvbnN0IGJpb0hlYWRlciA9IGFkZFNjcm9sbFRleHQoXCJIT1cgV0U8YnI+R09UIEhFUkVcIik7XG4gICAgY29uc3QgYmlvVGV4dCA9IGFkZFNjcm9sbFRleHQoXCJJ4oCZdmUgYWx3YXlzIGZvY3VzZWQgb24gdGhlIGNvbmNlcHR1YWxpemF0aW9uIGFuZCBpbXBsZW1lbnRhdGlvbiBvZiBhZHZhbmNlZCB0ZWNobm9sb2d5IHNvbHV0aW9ucyBmb3IgZmFjaWxpdHkgYW5kIGV2ZW50IHN5c3RlbXMgaW50ZWdyYXRpb24uIEFsb25nIHRoZSB3YXksIHRoYXTigJlzIG1lYW50IHNlcnZpbmcgYXMgZGVzaWduIGVuZ2luZWVyLCBwcm9qZWN0IG1hbmFnZXIsIHNhbGVzIGVuZ2luZWVyLCBwbGFubmluZyBjb25zdWx0YW50LCBidXNpbmVzcyBidWlsZGVyL293bmVyLCBhbmQgdGVhbSBsZWFkZXIuPGJyPjxicj5JdCBhbGwgc3RhcnRlZCBpbiB0ZWNobmljYWwgdGhlYXRlciwgd2hlcmUgSSB3b3JrZWQgYXMgYSBtYXN0ZXIgZWxlY3RyaWNpYW4sIGxpZ2h0aW5nIGRlc2lnbmVyLCBzb3VuZCBkZXNpZ25lciwgYW5kIGZyb250LW9mLWhvdXNlIHNvdW5kIGVuZ2luZWVyIGluIHN1bW1lciBzdG9jaywgdG91cmluZywgYW5kIG9mZi1Ccm9hZHdheSB0aGVhdGVyLiBGb2xsb3dpbmcgc2V2ZXJhbCB5ZWFycyBvZiBmcmVlbGFuY2UgdGhlYXRyaWNhbCBhbmQgY29uY2VydCB0ZWNobmljYWwgc3VwcG9ydCwgSSBsYW5kZWQgYXQgQUYgQXNzb2NpYXRlcywgYSBicm9hZGNhc3Qgc3lzdGVtcyBpbnRlZ3JhdG9yLjxicj48YnI+QWZ0ZXIgd29ya2luZyBvbiBzeXN0ZW1zIGVuZ2luZWVyaW5nIGVmZm9ydHMgZm9yIE5CQ+KAmXMgVG9kYXkgU2hvdywgQ05CQywgYW5kIFVTQSBOZXR3b3JrLCBJIG1vdmVkIHRvIFNvbnkgU3lzdGVtcyBJbnRlZ3JhdGlvbi4gVGhlcmUsIEkgb3ZlcnNhdyBkZXNpZ24vYnVpbGRzIGZvciB0aGUgVHJpYnVuZSBTdGF0aW9uIEdyb3VwIGFuZCBzdXBwb3J0ZWQgQ0JTIEJyb2FkY2FzdCBPcGVyYXRpb25zICYgRW5naW5lZXJpbmc8YnI+PGJyPkF0IHRoaXMgcG9pbnQsIEkgdGVhbWVkIHVwIHdpdGggdHdvIHBhcnRuZXJzIHRvIGxhdW5jaCBUaGUgU3lzdGVtcyBHcm91cC4gVFNHIHNwZWNpYWxpemVkIGluIGxhcmdlLXNjYWxlLCBmYXN0LXRyYWNrIHN5c3RlbXMgaW50ZWdyYXRpb24gcHJvamVjdHMgZm9yIHRoZSBicm9hZGNhc3QgaW5kdXN0cnkuIER1cmluZyBvdXIgMjAteWVhciBydW4sIHdlIGRlc2lnbmVkIGFuZCBidWlsdCBmYWNpbGl0aWVzIGZvciBTZXJpb3VzIFNhdGVsbGl0ZSBSYWRpbywgTVRWIE5ldHdvcmtzLCBTeXJhY3VzZSBVbml2ZXJzaXR5IE5ld2hvdXNlLCBORkwgRmlsbXMgQXVkaW8sIE5CQ1UsIGFuZCBDb3J1cyBFbnRlcnRhaW5tZW50LCBwbHVzIDIwMCsgc3lzdGVtcyBpbnRlZ3JhdGlvbiBwcm9qZWN0cyB3b3JsZHdpZGUuPGJyPjxicj5XaGVuIFRTRyB3YXMgYWNxdWlyZWQgYnkgRGl2ZXJzaWZpZWQgaW4gMjAxNiwgSSBlc3RhYmxpc2hlZCBhIHNtYWxsIHN0dWRpbyB3aXRoaW4gdGhlIGxhcmdlciBjb3Jwb3JhdGlvbiwgd2hpY2ggYWxsb3dlZCBtZSB0byBmb2N1cyBvbiBjcml0aWNhbCBlYXJseS1zdGFnZSBwcm9qZWN0IGNvbmNlcHR1YWxpemF0aW9uLCBwbGFubmluZywgYW5kIGJ1ZGdldGluZy4gVGhyb3VnaG91dCB0aG9zZSB5ZWFycywgSSB3YXMgYWJsZSB0byB3b3JrIHNob3VsZGVyIHRvIHNob3VsZGVyIHdpdGggc29tZSBvZiB0aGUgYmVzdCBhbmQgYnJpZ2h0ZXN0IGFjcm9zcyBhIHdpZGUgcmFuZ2Ugb2YgZGlzY2lwbGluZXMgaW4gdGhlIG1lZGlhIGFuZCBlbnRlcnRhaW5tZW50IGluZHVzdHJ5LiBBbmQgdGhlIHJlc3QsIGFzIHRoZXkgc2F5LCBpcyBoaXN0b3J5Ljxicj48YnI+VG9kYXksIEtPUkUgb2ZmZXJzIGEgcmFkaWNhbGx5IHN0cmVhbWxpbmVkIHdheSB0byBsZXZlcmFnZSBhIGNhcmVlcuKAmXMgd29ydGggb2YgZXhwZXJ0aXNlLCBleHBlcmllbmNlLCBhbmQgZXh0ZW5zaXZlIGluZHVzdHJ5IHJlbGF0aW9uc2hpcHMgdG8gaGVscCBtYWtlIHN1cmUgeW91ciBuZXh0IHByb2plY3QgcnVucyBzbW9vdGhseSBmcm9tIHBsYW5uaW5nIHRvIGFjY2VwdGFuY2UuPGJyPjxicj5JIGhvbGQgYSBCYWNoZWxvciBvZiBTY2llbmNlIGluIEVsZWN0cmljYWwgRW5naW5lZXJpbmcgZnJvbSBQZW5uIFN0YXRlIFVuaXZlcnNpdHksIGFuZCBhbSBhIG1lbWJlciBvZiBTTVBURSwgQUVTLCBhbmQgU1ZHLiBJ4oCZbSBhbHNvIGtpbmQgdG8gYW5pbWFscy5cIik7XG5cbiAgICAvLyByZWNlbnQgcHJvamVjdHNcblxuICAgIGNvbnN0IHJlY2VudFByb2plY3RIZWFkZXIgPSBhZGRTY3JvbGxUZXh0KFwiUkVDRU5UPGJyPlBST0pFQ1RTXCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFBhaXIocHJvamVjdE5hbWU6IHN0cmluZywgcHJvamVjdERlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVUZXh0ID0gYWRkU2Nyb2xsVGV4dChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvblRleHQgPSBhZGRTY3JvbGxUZXh0KHByb2plY3REZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdE5hbWVUZXh0LCBwcm9qZWN0RGVzY3JpcHRpb25UZXh0IH07XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBbYWRkUHJvamVjdFBhaXIoXCJOQkEgRW50ZXJ0YWlubWVudFwiLCBcIkFyY2hpdGVjdHVyYWwgcGxhbm5pbmcgYW5kIGJ1ZGdldGluZyBmb3IgbmV3IGNvbnRlbnQgb3BlcmF0aW9ucyBjZW50ZXIsIHJlcGxheSBvcGVyYXRpb25zIGNlbnRlciwgYW5kIGV4cGFuc2lvbiBvZiB0aGUgTkJBIE5ldHdvcmsuXCIpLCBhZGRQcm9qZWN0UGFpcihcIlRlbGV2aXNhL1VuaXZpc2lvbiBOZXR3b3JrXCIsIFwiU3lzdGVtIGNvbmNlcHR1YWxpemF0aW9uLCBhcHBsaWNhdGlvbnMgZW5naW5lZXJpbmcsIHByb2plY3QgYnVkZ2V0aW5nLCBhbmQgYWNjb3VudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIG5ldHdvcmsgb3BlcmF0aW9ucyBjZW50ZXIuXCIpLCBhZGRQcm9qZWN0UGFpcihcIldlc3Rlcm4gS2VudHVja3kgVW5pdmVyc2l0eVwiLCBcIlBCUyBhbmQgTlBSIHN0YXRpb25zLCBDb2xsZWdlIG9mIENvbW11bmljYXRpb25zIHByb2R1Y3Rpb24gYW5kIHBvc3QgZmFjaWxpdHksIGluY2x1ZGluZyB0aWVzIHRvIGNhbXB1cyBzcG9ydHMgYW5kIHByZXNlbnRhdGlvbiB2ZW51ZXMsIGRldmVsb3BtZW50IG9mIGEgY29tcGxldGUgc3lzdGVtIGRlc2lnbiBmb3IgdGhyZWUgY29udHJvbCByb29tcywgdHdvIFRWIHN0dWRpb3MsIGZvdXIgcmFkaW8gc3R1ZGlvcywgYW5kIHBvc3QtcHJvZHVjdGlvbiBvcGVyYXRpb25zLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJXb3JsZCBXcmVzdGxpbmcgRW50ZXJ0YWlubWVudFwiLCBcIk5ldyBIUSBkaWdpdGFsIG1lZGlhIGZhY2lsaXR5IGRlc2lnbiBhbmQgYnVkZ2V0aW5nIGZvciBwcm9kdWN0aW9uLCBwb3N0LCB0cmFuc21pc3Npb24sIGFuZCBldmVudCBjb29yZGluYXRpb24sIHBsdXMgZm9ybWFsIGFuYWx5c2lzIGZvciBQaGFzZSAyIHdvcmtmbG93IG9wdGltaXphdGlvbiBhbmQgb3JjaGVzdHJhdGlvbiBsYXllci5cIiksIGFkZFByb2plY3RQYWlyKFwiRGlzbmV5L0dhbGF4eSBDb25zb2xpZGF0aW9uXCIsIFwiVGhlIGxhcmdlc3QgbmV0d29yayBvcGVyYXRpb25zIGNlbnRlciBmYWNpbGl0eSBldmVyIGJ1aWx0IGluIHRoZSBVUy4gSXQgaW5jbHVkZXMgQUJDIE5ldHdvcmssIFdBQkMgVFYsIEVTUE4gTlksIE1hcnZlbCBFbnRlcnRhaW5tZW50LCBhbmQgRGlzbmV5IFNjcmVlbmluZyBUaGVhdGVyLiBTY290dCBvdmVyc2F3IGNvbnRyYWN0IGFkbWluaXN0cmF0aW9uIGFjcm9zcyB0aGUgZW50aXJlIHByb2plY3QuXCIpXTtcblxuICAgIC8vIGNvbnRhY3RcblxuICAgIGNvbnN0IHRlbGxNZSA9IGFkZFNjcm9sbFRleHQoXCJUZWxsIG1lIGFib3V0IHlvdXIgcHJvamVjdC5cIik7XG4gICAgY29uc3Qgb25lQ29udmVyc2F0aW9uID0gYWRkU2Nyb2xsVGV4dChcIk9uZSBjb252ZXJzYXRpb24gd29u4oCZdCBjb3N0IHlvdSBhbnl0aGluZy4gTm90IGhhdmluZyBvbmUgbWlnaHQuXCIpO1xuICAgIGNvbnN0IGJpZ0tvcmUgPSBhZGRTY3JvbGxTdmcoXCJiaWcta29yZS5zdmdcIik7XG5cbiAgICBjb25zdCBlbWFpbCA9IGFkZFNjcm9sbFRleHQoXCJFbWFpbFwiKTtcbiAgICBjb25zdCBsaW5rZWRJbiA9IGFkZFNjcm9sbFRleHQoXCJMaW5rZWRJblwiKTtcbiAgICBjb25zdCBwcml2YWN5UG9saWN5ID0gYWRkU2Nyb2xsVGV4dChcIlByaXZhY3kgUG9saWN5IMKpIDIwMjYgS09SRSBTTUUgTExDXCIpO1xuXG4gICAgcmVnaXN0ZXJVcGRhdGVMYXlvdXQoKCkgPT4ge1xuICAgICAgICByZXNpemVTY3JvbGxDb250YWluZXJGdWxsKCk7XG4gICAgICAgIGNvbnN0IHMgPSBpbm5lcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDAuMDUgKiBzO1xuICAgICAgICBjb25zdCBmcm9tVG9wID0gMC4wMzEgKiBzO1xuXG4gICAgICAgIGNvbnN0IGJpZ1RleHRUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMCAqIHMsIGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wNzUgKiBzLCB3aWR0aDogMC40ICogcywgbGluZUhlaWdodDogMC4wODQgKiBzIH07XG4gICAgICAgIGNvbnN0IHN1YkdyYXlUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBcImdyYXlcIiwgZm9udFNpemU6IDAuMDE5ICogcyB9O1xuXG4gICAgICAgIGNvbnN0IFRFTVAgPSAwLjAyICogcztcbiAgICAgICAgLy8gdG9wXG5cbiAgICAgICAgc3R5bGVUZXh0KGhlYWRsaW5lVGV4dCwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgaGVhZGxpbmVUZXh0LnN0eWxlLmxlZnQgPSBweChtYXJnaW4gLSAwLjAwNCAqIHMpO1xuICAgICAgICBoZWFkbGluZVRleHQuc3R5bGUudG9wID0gcHgoZnJvbVRvcCk7XG5cbiAgICAgICAgc3R5bGVUZXh0KHRyYXZlbGluZ1RoZVBhdGgsIHN1YkdyYXlUZXh0RGV0YWlscyk7XG4gICAgICAgIHRyYXZlbGluZ1RoZVBhdGguc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG4gICAgICAgIHRyYXZlbGluZ1RoZVBhdGguc3R5bGUudG9wID0gcHgocG9zWShoZWFkbGluZVRleHQpICsgc2l6ZVkoaGVhZGxpbmVUZXh0KSArIFRFTVApO1xuXG4gICAgICAgIGxvZ28uc3R5bGUuaGVpZ2h0ID0gcHgoc2l6ZVkoaGVhZGxpbmVUZXh0KSAqIDEuMDQpO1xuICAgICAgICBsb2dvLnN0eWxlLmxlZnQgPSBweChpbm5lcldpZHRoIC0gbG9nby5zY3JvbGxXaWR0aCAtIG1hcmdpbik7XG4gICAgICAgIGxvZ28uc3R5bGUudG9wID0gcHgoZnJvbVRvcCAtIDAuMDMgKiBzKTtcblxuICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTEsIHBvc1kodHJhdmVsaW5nVGhlUGF0aCkgKyBzaXplWSh0cmF2ZWxpbmdUaGVQYXRoKSArIDAuMDUgKiBzKTtcblxuICAgICAgICAvLyBiaW9cbiAgICAgICAgY29uc3QgYmlvTGVmdCA9IDAuNDEgKiBzO1xuXG4gICAgICAgIHN0eWxlVGV4dChiaW9OYW1lLCB7IGxldHRlclNwYWNpbmc6IDEsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMiAqIHMgfSk7XG4gICAgICAgIGJpb05hbWUuc3R5bGUudG9wID0gcHgocG9zWShzZWN0aW9uTGluZTEpICsgMC4xICogcyk7XG4gICAgICAgIGJpb05hbWUuc3R5bGUubGVmdCA9IHB4KGJpb0xlZnQpO1xuXG4gICAgICAgIHN0eWxlVGV4dChiaW9UaXRsZSwgeyBsZXR0ZXJTcGFjaW5nOiAxLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDExICogcyB9KTtcbiAgICAgICAgYmlvVGl0bGUuc3R5bGUudG9wID0gcHgoYmlvTmFtZS5vZmZzZXRUb3AgKyBiaW9OYW1lLm9mZnNldEhlaWdodCk7XG4gICAgICAgIGJpb1RpdGxlLnN0eWxlLmxlZnQgPSBweChiaW9MZWZ0KTtcblxuICAgICAgICBjb25zdCBiaW9EZXNjcmlwdGlvbldpZHRoID0gcyAtIGJpb0xlZnQgLSBtYXJnaW47XG4gICAgICAgIGNvbnN0IGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDEsIGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMSAqIHMsIGxpbmVIZWlnaHQ6IDAuMDIgKiBzLCBmb250OiBcIk1lcnJpd2VhdGhlclwiIH07XG4gICAgICAgIHN0eWxlVGV4dChiaW9EZXNjcmlwdGlvbiwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgIGJpb0Rlc2NyaXB0aW9uLnN0eWxlLndpZHRoID0gcHgoYmlvRGVzY3JpcHRpb25XaWR0aCk7XG4gICAgICAgIGJpb0Rlc2NyaXB0aW9uLnN0eWxlLnRvcCA9IHB4KGJpb1RpdGxlLm9mZnNldFRvcCArIGJpb1RpdGxlLm9mZnNldEhlaWdodCk7XG5cbiAgICAgICAgcG9ydHJhaXQuc3R5bGUuaGVpZ2h0ID0gcHgocG9zWShiaW9EZXNjcmlwdGlvbikgKyBzaXplWShiaW9EZXNjcmlwdGlvbikgLSBwb3NZKGJpb05hbWUpKTtcbiAgICAgICAgcG9ydHJhaXQuc3R5bGUudG9wID0gcHgocG9zWShiaW9OYW1lKSk7XG4gICAgICAgIHBvcnRyYWl0LnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuXG4gICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMiwgcG9zWShiaW9EZXNjcmlwdGlvbikgKyBzaXplWShiaW9EZXNjcmlwdGlvbikgKyAwLjA1ICogcyk7XG5cbiAgICAgICAgLy8gdGlsZXNcblxuICAgICAgICBjb25zdCBmZWVsQ29uZmlkZW50VGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAgKiBzLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDI4ICogcyB9O1xuICAgICAgICBzdHlsZVRleHQoZmVlbENvbmZpZGVudCwgZmVlbENvbmZpZGVudFRleHREZXRhaWxzKTtcbiAgICAgICAgZmVlbENvbmZpZGVudC5zdHlsZS50b3AgPSBweChwb3NZKHNlY3Rpb25MaW5lMikgKyAwLjA0ICogcyk7XG4gICAgICAgIGZlZWxDb25maWRlbnQuc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBpbm5lcldpZHRoIC0gMiAqIG1hcmdpbjtcbiAgICAgICAgY29uc3QgdGlsZUdhcCA9IHMgKiAwLjAxNTtcbiAgICAgICAgY29uc3QgdGlsZVNpemUgPSAoc2Nyb2xsV2lkdGggLSB0aWxlR2FwICogKHNraWxsVGlsZUNvdW50WCAtIDEpKSAvIHNraWxsVGlsZUNvdW50WDtcblxuICAgICAgICBmdW5jdGlvbiB0aWxlUG9zWCh4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXJnaW4gKyAodGlsZVNpemUgKyB0aWxlR2FwKSAqIHg7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0aWxlUG9zWSh5OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAodGlsZVNpemUgKyB0aWxlR2FwKSAqIHkgKyBwb3NZKGZlZWxDb25maWRlbnQpICsgc2l6ZVkoZmVlbENvbmZpZGVudCkgKyAwLjA0ICogcztcbiAgICAgICAgfVxuXG4gICAgICAgIGJpb0Rlc2NyaXB0aW9uLnN0eWxlLmxlZnQgPSBweCh0aWxlUG9zWCgyKSk7IC8vIFpaWlogdGhpcyBndXkgZ290IGJyb2tlbiB1cFxuXG4gICAgICAgIHNwcmluZ1NpZy51bnN1YnNjcmliZUFsbCgpO1xuICAgICAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyLCB0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgc3ByaW5nWCwgc3ByaW5nWSwgc3ByaW5nU2l6ZVkgfSA9IHNraWxsVGlsZTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHB4KHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcHgodGlsZVNpemUgKiBzcHJpbmdTaXplWS5wb3NpdGlvbiArIChzcHJpbmdTaXplWS5wb3NpdGlvbiAtIDEpICogdGlsZUdhcCk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IHB4KHRpbGVQb3NYKHNwcmluZ1gucG9zaXRpb24pKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gcHgodGlsZVBvc1koc3ByaW5nWS5wb3NpdGlvbikpO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KHRpdGxlVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjUsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wMTggKiBzIH0pO1xuICAgICAgICAgICAgICAgIHRpdGxlVGV4dC5zdHlsZS5sZWZ0ID0gcHgodGlsZVBvc1goc3ByaW5nWC5wb3NpdGlvbikgKyAwLjA4ICogdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgIHRpdGxlVGV4dC5zdHlsZS50b3AgPSBweCh0aWxlUG9zWShzcHJpbmdZLnBvc2l0aW9uKSArIHRpbGVTaXplIC8gMiAtIHNpemVZKHRpdGxlVGV4dCkgLyAyKTtcblxuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChkZXNjcmlwdGlvblRleHQsIHsgbGV0dGVyU3BhY2luZzogMC41LCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDExICogcywgbGluZUhlaWdodDogMC4wMTYgKiBzLCB3aWR0aDogdGlsZVNpemUgLSBzICogMC4wMyB9KTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUubGVmdCA9IHB4KHRpbGVQb3NYKHNwcmluZ1gucG9zaXRpb24pICsgMC4wOCAqIHRpbGVTaXplKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUudG9wID0gcHgocG9zWSh0aXRsZVRleHQpICsgc2l6ZVkodGl0bGVUZXh0KSArIHMgKiAwLjAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3NwcmluZ1NpZ10pO1xuXG4gICAgICAgIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lMywgdGlsZVBvc1koMSkgKyB0aWxlU2l6ZSArIDAuMDggKiBzKTtcblxuICAgICAgICBzdHlsZVRleHQoYmlnTmFtZXMsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgIGJpZ05hbWVzLnN0eWxlLnRvcCA9IHB4KHBvc1koc2VjdGlvbkxpbmUzKSArIDAuMDYgKiBzKTtcbiAgICAgICAgYmlnTmFtZXMuc3R5bGUubGVmdCA9IHB4KG1hcmdpbiAtIDAuMDA3ICogcyk7XG5cbiAgICAgICAgY29uc3QgaGFzVGFja2VkVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAgKiBzLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiBcImdyYXlcIiwgZm9udFNpemU6IDAuMDE0ICogcywgbGluZUhlaWdodDogMC4wMjUgKiBzLCB3aWR0aDogc2l6ZVgoYmlnTmFtZXMpIC0gMC4wMjUgKiBzIH07XG4gICAgICAgIHN0eWxlVGV4dChoYXNUYWNrbGVkLCBoYXNUYWNrZWRUZXh0RGV0YWlscyk7XG4gICAgICAgIGhhc1RhY2tsZWQuc3R5bGUudG9wID0gcHgocG9zWShiaWdOYW1lcykgKyBzaXplWShiaWdOYW1lcykgKyBURU1QKTtcbiAgICAgICAgaGFzVGFja2xlZC5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luKTtcblxuICAgICAgICBjb25zdCBsYXN0QmlnTmFtZSA9IGJpZ05hbWVDbGllbnRUZXh0c1tiaWdOYW1lQ2xpZW50VGV4dHMubGVuZ3RoIC0gMV1bMF07XG4gICAgICAgIGNvbnN0IGJpZ05hbWVzVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAgKiBzLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDE4ICogcyB9O1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGJpZ05hbWVDbGllbnRUZXh0cy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBiaWdOYW1lQ2xpZW50VGV4dHNbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvID0gYmlnTmFtZUNsaWVudFRleHRzW3ldW3hdO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KG8sIGJpZ05hbWVzVGV4dERldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgby5zdHlsZS50b3AgPSBweChwb3NZKGJpZ05hbWVzKSArIHMgKiAwLjAxICsgcyAqIDAuMDMyICogeSk7XG4gICAgICAgICAgICAgICAgby5zdHlsZS5sZWZ0ID0gcHgocG9zWChiaWdOYW1lcykgKyBzaXplWChiaWdOYW1lcykgKyBzICogMC4wOCArIHMgKiAwLjIyICogeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBncmlmZmluQmxhY2tXaGl0ZS5zdHlsZS53aWR0aCA9IHB4KHMpO1xuICAgICAgICBncmlmZmluQmxhY2tXaGl0ZS5zdHlsZS50b3AgPSBweChwb3NZKGxhc3RCaWdOYW1lKSArIHNpemVZKGxhc3RCaWdOYW1lKSArIDAuMDggKiBzKTtcblxuICAgICAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZVRleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAwICogcywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjAyICogcywgd2lkdGg6IDAuNDEgKiBzLCBsaW5lSGVpZ2h0OiAwLjA0ICogcywgZm9udDogXCJNZXJyaXdlYXRoZXJcIiB9O1xuICAgICAgICBncmlmZmluQmxhY2tXaGl0ZVRleHQuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICAgICAgc3R5bGVUZXh0KGdyaWZmaW5CbGFja1doaXRlVGV4dCwgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0RGV0YWlscyk7XG4gICAgICAgIGdyaWZmaW5CbGFja1doaXRlVGV4dC5zdHlsZS5sZWZ0ID0gcHgocG9zWChsYXN0QmlnTmFtZSkpO1xuICAgICAgICBncmlmZmluQmxhY2tXaGl0ZVRleHQuc3R5bGUudG9wID0gcHgocG9zWShncmlmZmluQmxhY2tXaGl0ZSkgKyBzaXplWShncmlmZmluQmxhY2tXaGl0ZSkgLyAyIC0gc2l6ZVkoZ3JpZmZpbkJsYWNrV2hpdGVUZXh0KSAvIDIpO1xuXG4gICAgICAgIC8vIGJpb1xuXG4gICAgICAgIHN0eWxlVGV4dChiaW9IZWFkZXIsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgIGJpb0hlYWRlci5zdHlsZS50b3AgPSBweChwb3NZKGdyaWZmaW5CbGFja1doaXRlKSArIHNpemVZKGdyaWZmaW5CbGFja1doaXRlKSArIDAuMSAqIHMpO1xuICAgICAgICBiaW9IZWFkZXIuc3R5bGUubGVmdCA9IHB4KG1hcmdpbiAtIDAuMDA3ICogcyk7XG5cbiAgICAgICAgc3R5bGVUZXh0KGJpb1RleHQsIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuICAgICAgICBiaW9UZXh0LnN0eWxlLndpZHRoID0gcHgocyAvIDIgLSBtYXJnaW4pO1xuICAgICAgICBiaW9UZXh0LnN0eWxlLnRvcCA9IHB4KHBvc1koYmlvSGVhZGVyKSk7XG4gICAgICAgIGJpb1RleHQuc3R5bGUubGVmdCA9IHB4KHMgLyAyKTtcblxuICAgICAgICBzdHlsZVRleHQocmVjZW50UHJvamVjdEhlYWRlciwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgcmVjZW50UHJvamVjdEhlYWRlci5zdHlsZS50b3AgPSBweChwb3NZKGJpb1RleHQpICsgc2l6ZVkoYmlvVGV4dCkgKyAwLjEyICogcyk7XG4gICAgICAgIHJlY2VudFByb2plY3RIZWFkZXIuc3R5bGUubGVmdCA9IHB4KG1hcmdpbiAtIDAuMDA3ICogcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCB7IHByb2plY3ROYW1lVGV4dCwgcHJvamVjdERlc2NyaXB0aW9uVGV4dCB9IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBzdHlsZVRleHQocHJvamVjdE5hbWVUZXh0LCB7IGxldHRlclNwYWNpbmc6IDEsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMiAqIHMgfSk7XG4gICAgICAgICAgICBzdHlsZVRleHQocHJvamVjdERlc2NyaXB0aW9uVGV4dCwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0LnN0eWxlLndpZHRoID0gcHgocyAvIDIgLSBtYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNXaXRoU3BhY2luZyA9IHByb2plY3RzLmZsYXRNYXAoKHByb2plY3QpID0+IFtwcm9qZWN0LnByb2plY3ROYW1lVGV4dCwgMC4wMDYgKiBzLCBwcm9qZWN0LnByb2plY3REZXNjcmlwdGlvblRleHQsIDAuMDI4ICogc10pO1xuICAgICAgICBjb25zdCBbYWxpZ25tZW50cywgX10gPSBhbGlnbmluZ1dpdGhHYXBzWShwcm9qZWN0c1dpdGhTcGFjaW5nKTtcbiAgICAgICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIG9mZnNldCB9IG9mIGFsaWdubWVudHMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcHgocG9zWShyZWNlbnRQcm9qZWN0SGVhZGVyKSArIG9mZnNldCk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBweChzIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdFByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnByb2plY3REZXNjcmlwdGlvblRleHQ7XG5cbiAgICAgICAgLy8gY29udGFjdFxuXG4gICAgICAgIHN0eWxlVGV4dCh0ZWxsTWUsIHsgbGV0dGVyU3BhY2luZzogMC4zLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDE5ICogcyB9KTtcbiAgICAgICAgdGVsbE1lLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuICAgICAgICB0ZWxsTWUuc3R5bGUudG9wID0gcHgocG9zWShsYXN0UHJvamVjdERlc2NyaXB0aW9uKSArIHNpemVZKGxhc3RQcm9qZWN0RGVzY3JpcHRpb24pICsgMC4yICogcyk7XG5cbiAgICAgICAgc3R5bGVUZXh0KG9uZUNvbnZlcnNhdGlvbiwgc3ViR3JheVRleHREZXRhaWxzKTtcbiAgICAgICAgb25lQ29udmVyc2F0aW9uLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuICAgICAgICBvbmVDb252ZXJzYXRpb24uc3R5bGUudG9wID0gcHgocG9zWSh0ZWxsTWUpICsgc2l6ZVkodGVsbE1lKSArIDAuMDA4ICogcyk7XG5cbiAgICAgICAgYmlnS29yZS5zdHlsZS53aWR0aCA9IHB4KHMgLSBtYXJnaW4gKiAyKTtcbiAgICAgICAgYmlnS29yZS5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luKTtcbiAgICAgICAgYmlnS29yZS5zdHlsZS50b3AgPSBweChwb3NZKG9uZUNvbnZlcnNhdGlvbikgKyBzaXplWShvbmVDb252ZXJzYXRpb24pICsgMC4xICogcyk7XG5cbiAgICAgICAgY29uc3QgbGlua1RleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAwLjMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IFwiZ3JheVwiLCBmb250U2l6ZTogMC4wMTkgKiBzIH07XG4gICAgICAgIHN0eWxlVGV4dChlbWFpbCwgbGlua1RleHREZXRhaWxzKTtcbiAgICAgICAgZW1haWwuc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG4gICAgICAgIGVtYWlsLnN0eWxlLnRvcCA9IHB4KHBvc1koYmlnS29yZSkgKyBzaXplWShiaWdLb3JlKSArIDAuMDUgKiBzKTtcblxuICAgICAgICBzdHlsZVRleHQobGlua2VkSW4sIGxpbmtUZXh0RGV0YWlscyk7XG4gICAgICAgIGxpbmtlZEluLnN0eWxlLmxlZnQgPSBweChtYXJnaW4gKyAwLjA3ICogcyk7XG4gICAgICAgIGxpbmtlZEluLnN0eWxlLnRvcCA9IHB4KHBvc1koYmlnS29yZSkgKyBzaXplWShiaWdLb3JlKSArIDAuMDUgKiBzKTtcblxuICAgICAgICBzdHlsZVRleHQocHJpdmFjeVBvbGljeSwgbGlua1RleHREZXRhaWxzKTtcbiAgICAgICAgcHJpdmFjeVBvbGljeS5zdHlsZS5sZWZ0ID0gcHgocyAtIHNpemVYKHByaXZhY3lQb2xpY3kpIC0gbWFyZ2luKTtcbiAgICAgICAgcHJpdmFjeVBvbGljeS5zdHlsZS50b3AgPSBweChwb3NZKGJpZ0tvcmUpICsgc2l6ZVkoYmlnS29yZSkgKyAwLjA1ICogcyk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBib2R5LCBmYWRlSW5BbmltYXRpb24sIG1ldGFsLCBtaWRCcm93biB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNMYW5kc2NhcGUsIHB4LCBzdHlsZVRleHQsIFRleHREZXRhaWxzIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEZvclBhZ2UsIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nIH0gZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFNWRywgZmV0Y2hTVkcgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFNxdWFyZSB7XG4gICAgbWFqb3I6IEhUTUxFbGVtZW50O1xuICAgIG1pbm9yczogSFRNTEVsZW1lbnRbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zY3JvbGxDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbENvbnRhaW5lcik7XG4oc2Nyb2xsQ29udGFpbmVyLnN0eWxlIGFzIGFueSkuc2Nyb2xsYmFyQ29sb3IgPSBgJHttaWRCcm93bn0gJHttZXRhbH01NWA7XG5cbnNjcm9sbENvbnRhaW5lci5vbndoZWVsID0gKGUpID0+IHtcbiAgICBpZiAoaXNMYW5kc2NhcGUoKSAmJiAhZS5zaGlmdEtleSkgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEJ5KHsgbGVmdDogZS5kZWx0YVkgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplU2Nyb2xsQ29udGFpbmVyTGFuZHNjYXBlKCkge1xuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGdldFNjcm9sbEhlaWdodCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHNjcm9sbEhlaWdodCAqIDAuNTtcblxuICAgIGNvbnN0IHVuZGVyU2Nyb2xsQ29udGFpbmVyID0gKGlubmVySGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0KSAvIDI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHB4KHNjcm9sbEhlaWdodCArIHVuZGVyU2Nyb2xsQ29udGFpbmVyKTsgLy8gcGxhY2Ugc2Nyb2xsIGJhciBhdCBib3R0b20gb2YgcGFnZVxuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHB4KGlubmVyV2lkdGggLSBzY3JvbGxMZWZ0KTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUudG9wID0gcHgoKGlubmVySGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0KSAvIDIpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcHgoc2Nyb2xsTGVmdCk7XG5cbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dYID0gXCJzY3JvbGxcIjtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcbiAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVNjcm9sbENvbnRhaW5lclBvcnRyYWl0KCkge1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICBjb25zdCBoZWFkZXJCYXJIZWlnaHQgPSBnZXRIZWFkZXJCYXJIZWlnaHQoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUud2lkdGggPSBweChzY3JvbGxXaWR0aCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHB4KGlubmVySGVpZ2h0IC0gaGVhZGVyQmFySGVpZ2h0KTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUubGVmdCA9IHB4KChpbm5lcldpZHRoIC0gc2Nyb2xsV2lkdGgpIC8gMik7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnRvcCA9IHB4KGhlYWRlckJhckhlaWdodCk7XG5cbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIjtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNpemVTY3JvbGxDb250YWluZXJGdWxsKCkge1xuICAgIGNvbnN0IGhlYWRlckJhckhlaWdodCA9IGdldEhlYWRlckJhckhlaWdodCgpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHB4KGlubmVyV2lkdGgpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBweChpbm5lckhlaWdodCAtIGhlYWRlckJhckhlaWdodCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBweCgwKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUudG9wID0gcHgoaGVhZGVyQmFySGVpZ2h0KTtcblxuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID0gMDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEhlYWRlckJhckhlaWdodCA9ICgpID0+IHtcbiAgICBpZiAoaXNMYW5kc2NhcGUoKSkge1xuICAgICAgICByZXR1cm4gKGlubmVySGVpZ2h0IC0gZ2V0U2Nyb2xsSGVpZ2h0KCkpIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW5uZXJIZWlnaHQgKiAwLjE7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbFBhZGRpbmcoKSB7XG4gICAgY29uc3Qgc2Nyb2xsUGFkZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Nyb2xsUGFkZGluZy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxQYWRkaW5nLnN0eWxlLndpZHRoID0gcHgoMSk7IC8vIGFueSBub256ZXJvIHRoaWNrbmVzcyBpcyBlbm91Z2ggdG8gZXh0ZW5kIHNjcm9sbENvbnRhaW5lclxuICAgIHNjcm9sbFBhZGRpbmcuc3R5bGUuaGVpZ2h0ID0gcHgoMSk7XG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsUGFkZGluZyk7XG4gICAgcmV0dXJuIHNjcm9sbFBhZGRpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxJbWFnZShzcmM6IHN0cmluZyk6IEhUTUxJbWFnZUVsZW1lbnQge1xuICAgIGNvbnN0IHNjcm9sbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxJbWFnZS5zcmMgPSBzcmM7XG4gICAgc2Nyb2xsSW1hZ2Uuc3R5bGUuYW5pbWF0aW9uID0gZmFkZUluQW5pbWF0aW9uKCk7XG4gICAgc2Nyb2xsSW1hZ2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICBhd2FpdExheW91dEZvckltYWdlTG9hZGluZyhzY3JvbGxJbWFnZSk7XG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsSW1hZ2UpO1xuICAgIHJldHVybiBzY3JvbGxJbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbFN2ZyhzcmM6IHN0cmluZykge1xuICAgIGNvbnN0IHNjcm9sbFN2ZyA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJzdmdcIik7XG4gICAgc2Nyb2xsU3ZnLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbFN2Zy5zdHlsZS5hbmltYXRpb24gPSBmYWRlSW5BbmltYXRpb24oKTtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGZldGNoZWQgPSBhd2FpdCBmZXRjaFNWRyhzcmMpO1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgZmV0Y2hlZC5hdHRyaWJ1dGVzKSBzY3JvbGxTdmcuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gICAgICAgIHdoaWxlIChmZXRjaGVkLmZpcnN0Q2hpbGQpIHNjcm9sbFN2Zy5hcHBlbmRDaGlsZChmZXRjaGVkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBmZXRjaENvbnRlbnQoKTtcblxuICAgIGFwcGVuZENoaWxkRm9yUGFnZShzY3JvbGxDb250YWluZXIsIHNjcm9sbFN2Zyk7XG4gICAgcmV0dXJuIHNjcm9sbFN2Zztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRleHQodGV4dDogc3RyaW5nLCBwYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc2Nyb2xsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNjcm9sbFRleHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsVGV4dC5pbm5lckhUTUwgPSB0ZXh0OyAvLyBaWlpaIGlubmVyVGV4dCB3b3VsZCBiZSBiZXR0ZXJcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmFuaW1hdGlvbiA9IGZhZGVJbkFuaW1hdGlvbigpO1xuICAgIGFwcGVuZENoaWxkRm9yUGFnZShwYXJlbnQsIHNjcm9sbFRleHQpO1xuICAgIHJldHVybiBzY3JvbGxUZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWRkVGV4dCh0ZXh0LCBzY3JvbGxDb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsVGV4dFNxdWFyZShtYWpvclRleHQ6IHN0cmluZywgLi4ubWlub3JUZXh0czogc3RyaW5nW10pOiBUZXh0U3F1YXJlIHtcbiAgICBjb25zdCBtYWpvciA9IGFkZFNjcm9sbFRleHQobWFqb3JUZXh0KTtcbiAgICBjb25zdCBtaW5vcnMgPSBtaW5vclRleHRzLm1hcChhZGRTY3JvbGxUZXh0KTtcbiAgICByZXR1cm4geyBtYWpvciwgbWlub3JzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVNjcm9sbFRleHRTcXVhcmUoeyBtYWpvciwgbWlub3JzIH06IFRleHRTcXVhcmUsIG1ham9yVGV4dERldGFpbHM6IFRleHREZXRhaWxzLCBtaW5vclRleHREZXRhaWxzOiBUZXh0RGV0YWlscykge1xuICAgIHN0eWxlVGV4dChtYWpvciwgbWFqb3JUZXh0RGV0YWlscyk7XG4gICAgZm9yIChjb25zdCBtaW5vciBvZiBtaW5vcnMpIHN0eWxlVGV4dChtaW5vciwgbWlub3JUZXh0RGV0YWlscyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIGlubmVySGVpZ2h0ICogMC43O1xuICAgIC8vIHJldHVybiAxLjAyICogaW5uZXJIZWlnaHQgLSAwLjAwMDQ4NSAqIGlubmVySGVpZ2h0ICogaW5uZXJIZWlnaHQ7XG4gICAgLy8gcmV0dXJuIGlubmVySGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgY29uc3QgU0NST0xMX1dJRFRIX1BST1BPUlRJT04gPSAxO1xuICAgIHJldHVybiBpbm5lcldpZHRoICogU0NST0xMX1dJRFRIX1BST1BPUlRJT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJXaXRoaW5TY3JvbGxZKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudCwgc2NhbGU6IG51bWJlcikge1xuICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxIZWlnaHQoKTtcbiAgICBjb25zdCBoZWlnaHQgPSBzICogc2NhbGU7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBweChoZWlnaHQpO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcHgoKHMgLSBoZWlnaHQpIC8gMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJXaXRoaW5TY3JvbGxYKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudCwgc2NhbGU6IG51bWJlcikge1xuICAgIGNvbnN0IHMgPSBnZXRTY3JvbGxXaWR0aCgpO1xuICAgIGNvbnN0IHdpZHRoID0gcyAqIHNjYWxlO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBweCh3aWR0aCk7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcHgoKHMgLSB3aWR0aCkgLyAyKTtcbn1cbiIsImV4cG9ydCBjbGFzcyBTaWduYWwge1xyXG4gICAgc3Vic2NyaWJlcnMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XHJcblxyXG4gICAgc3Vic2NyaWJlID0gKHN1YnNjcmliZXI6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgocykgPT4gcygpKTtcclxuICAgIH07XHJcblxyXG4gICAgdW5zdWJzY3JpYmUgPSAoc3Vic2NyaWJlcjogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1bnN1YnNjcmliZUFsbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmNsZWFyKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0KGZ1bmM6ICgpID0+IHZvaWQsIG9ic2VydmVkU2lnbmFsczogU2lnbmFsW10pIHtcclxuICAgIG9ic2VydmVkU2lnbmFscy5mb3JFYWNoKChvKSA9PiBvLnN1YnNjcmliZShmdW5jKSk7XHJcbiAgICBmdW5jKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZWZmZWN0LCBTaWduYWwgfSBmcm9tIFwiLi9zaWduYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpbmcge1xyXG4gICAgcG9zaXRpb246IG51bWJlcjtcclxuICAgIHRhcmdldDogbnVtYmVyO1xyXG4gICAgdmVsb2NpdHkgPSAwO1xyXG4gICAgZGFtcGluZyA9IDA7XHJcbiAgICBzdGlmZm5lc3MgPSAwO1xyXG4gICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBvblJlc3QgPSAoKSA9PiB7fTtcclxuICAgIG9uVW5yZXN0ID0gKCkgPT4ge307XHJcblxyXG4gICAgLy8gbXgnJyAtIGJ4JyA9IGt4XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gaW5pdGlhbFZhbHVlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gaW5pdGlhbFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRpY2soZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGFjY2VsZXJhdGlvbiA9IHRoaXMuc3RpZmZuZXNzICogKHRoaXMudGFyZ2V0IC0gdGhpcy5wb3NpdGlvbikgLSB0aGlzLmRhbXBpbmcgKiB0aGlzLnZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgKz0gYWNjZWxlcmF0aW9uICogZHQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiArPSB0aGlzLnZlbG9jaXR5ICogZHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RpZmZuZXNzQ3JpdGljYWwoc3RpZmZuZXNzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0aWZmbmVzcyA9IHN0aWZmbmVzcztcclxuICAgICAgICB0aGlzLmRhbXBpbmcgPSBNYXRoLnNxcnQoNCAqIHN0aWZmbmVzcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfQU5JTUFUSU9OX1RPTEVSQU5DRSA9IDAuMDE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZVNwcmluZyhzcHJpbmc6IFNwcmluZywgc2lnbmFsOiBTaWduYWwpIHtcclxuICAgIGlmIChzcHJpbmcuaXNBbmltYXRpbmcpIHJldHVybjtcclxuXHJcbiAgICBzcHJpbmcuaXNBbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgc3ByaW5nLm9uVW5yZXN0KCk7XHJcblxyXG4gICAgbGV0IGxhc3RNaWxsaXMgPSAwO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpcnN0RnJhbWUpO1xyXG4gICAgZnVuY3Rpb24gZmlyc3RGcmFtZShtaWxsaXM6IG51bWJlcikge1xyXG4gICAgICAgIGxhc3RNaWxsaXMgPSBtaWxsaXM7XHJcbiAgICAgICAgdGlja1NwcmluZyhtaWxsaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpY2tTcHJpbmcobWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzdGVwID0gbWlsbGlzIC0gbGFzdE1pbGxpcztcclxuICAgICAgICBsYXN0TWlsbGlzID0gbWlsbGlzO1xyXG5cclxuICAgICAgICBzcHJpbmcudGljayhzdGVwIC8gMTAwMCk7XHJcbiAgICAgICAgc2lnbmFsLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnMoc3ByaW5nLnRhcmdldCAtIHNwcmluZy5wb3NpdGlvbikgPCBERUZBVUxUX0FOSU1BVElPTl9UT0xFUkFOQ0UgJiYgTWF0aC5hYnMoc3ByaW5nLnZlbG9jaXR5KSA8IERFRkFVTFRfQU5JTUFUSU9OX1RPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICBzcHJpbmcucG9zaXRpb24gPSBzcHJpbmcudGFyZ2V0O1xyXG4gICAgICAgICAgICBzcHJpbmcudmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBzcHJpbmcuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2lnbmFsLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBzcHJpbmcub25SZXN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrU3ByaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVXaXRoU3ByaW5nKHN0aWZmbmVzczogbnVtYmVyLCBvdmVyVGltZTogKHRpbWU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ByaW5nID0gbmV3IFNwcmluZygwKTtcclxuICAgICAgICBjb25zdCBzcHJpbmdTaWcgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICAgICAgc3ByaW5nLnNldFN0aWZmbmVzc0NyaXRpY2FsKHN0aWZmbmVzcyk7XHJcbiAgICAgICAgc3ByaW5nLnRhcmdldCA9IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiBvdmVyVGltZShzcHJpbmcucG9zaXRpb24pO1xyXG4gICAgICAgIHNwcmluZy5vblJlc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNwcmluZ1NpZy51bnN1YnNjcmliZShhbmltYXRlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGVmZmVjdChhbmltYXRlLCBbc3ByaW5nU2lnXSk7XHJcblxyXG4gICAgICAgIGFuaW1hdGVTcHJpbmcoc3ByaW5nLCBzcHJpbmdTaWcpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNsZWVwID0gKGRlbGF5OiBudW1iZXIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFjZVRvRmlsZShzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKFwiIFwiLCBcIi1cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50U1ZHPEsgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4ocXVhbGlmaWVkTmFtZTogSykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBxdWFsaWZpZWROYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVybGFjZWQ8VCwgV2l0aGluPihpdGVtczogVFtdLCB3aXRoaW46IFdpdGhpbikge1xuICAgIGNvbnN0IGl0ZW1zSW50ZXJsYWNlZCA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpdGVtc0ludGVybGFjZWQucHVzaChpdGVtKTtcbiAgICAgICAgaXRlbXNJbnRlcmxhY2VkLnB1c2god2l0aGluKTtcbiAgICB9XG4gICAgaXRlbXNJbnRlcmxhY2VkLnBvcCgpO1xuICAgIHJldHVybiBpdGVtc0ludGVybGFjZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBSYW5nZShuOiBudW1iZXIsIHN0YXJ0MTogbnVtYmVyLCBzdG9wMTogbnVtYmVyLCBzdGFydDI6IG51bWJlciwgc3RvcDI6IG51bWJlcikge1xuICAgIHJldHVybiAoKG4gLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSkgKiAoc3RvcDIgLSBzdGFydDIpICsgc3RhcnQyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JPbkhvdmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb2xvcjogc3RyaW5nLCBob3ZlckNvbG9yOiBzdHJpbmcpIHtcbiAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgZWxlbWVudC5vbm1vdXNlb3ZlciA9ICgpID0+IChlbGVtZW50LnN0eWxlLmNvbG9yID0gaG92ZXJDb2xvcik7XG4gICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiAoZWxlbWVudC5zdHlsZS5jb2xvciA9IGNvbG9yKTtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImNvbG9yIDAuMnMgZWFzZS1vdXRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudDogRWxlbWVudCwgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU1ZHKGZldGNoU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoU3RyaW5nKTtcbiAgICBjb25zdCBzdmdDb250ZW50ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN2Z0NvbnRlbnQsIFwiaW1hZ2Uvc3ZnK3htbFwiKS5kb2N1bWVudEVsZW1lbnQgYXMgdW5rbm93biBhcyBTVkdTVkdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWRTVkcoc3ZnOiBTVkdTVkdFbGVtZW50LCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN2Zy5nZXRFbGVtZW50QnlJZChpZCkgYXMgU1ZHRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUljb25TVkcobG9jYWxTaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudFNWRyhcInN2Z1wiKTtcbiAgICBjb25zdCBwYWQgPSA0O1xuICAgIGljb24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgaWNvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBpY29uLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYCR7LXBhZH0gJHstcGFkfSAke2xvY2FsU2l6ZSArIDIgKiBwYWR9ICR7bG9jYWxTaXplICsgMiAqIHBhZH1gKTtcbiAgICByZXR1cm4gaWNvbjtcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VMaW5lID0gKHN2ZzogU1ZHU1ZHRWxlbWVudCwgc3Ryb2tlV2lkdGg6IG51bWJlcikgPT4gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSBjcmVhdGVFbGVtZW50U1ZHKFwibGluZVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIHsgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGggfSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIHJldHVybiBsaW5lO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VQb2x5bGluZSA9IChzdmc6IFNWR1NWR0VsZW1lbnQsIHN0cm9rZVdpZHRoOiBudW1iZXIpID0+ICgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gY3JlYXRlRWxlbWVudFNWRyhcInBvbHlsaW5lXCIpO1xuICAgIHNldEF0dHJpYnV0ZXMobGluZSwgeyBcInN0cm9rZS13aWR0aFwiOiBzdHJva2VXaWR0aCwgZmlsbDogXCJub25lXCIgfSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIHJldHVybiBsaW5lO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRIb21lUGFnZSwgYWRkTmF2QmFyIH0gZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuXG5hZGROYXZCYXIoKTtcbmFkZEhvbWVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=