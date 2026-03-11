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
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(koreNavSlogan, { letterSpacing: 0 * s, fontWeight: 400, color: _constants__WEBPACK_IMPORTED_MODULE_0__.metal, fontSize: 0.011 * s });
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
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioName, { letterSpacing: 1, fontWeight: 500, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.02 * s });
        bioName.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)((0,_layout__WEBPACK_IMPORTED_MODULE_1__.posY)(sectionLine1) + 0.1 * s);
        const longParagraphsTextDetails = { letterSpacing: 1, fontWeight: 300, color: _constants__WEBPACK_IMPORTED_MODULE_0__.white, fontSize: 0.01 * s, lineHeight: 0.02 * s, font: "Merriweather" };
        (0,_layout__WEBPACK_IMPORTED_MODULE_1__.styleText)(bioDescription, longParagraphsTextDetails);
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
        const bioLeft = tilePosX(2); // ZZZZ this guy got broken up
        bioDescription.style.width = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(s - bioLeft - margin);
        bioDescription.style.top = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioName.offsetTop + bioName.offsetHeight);
        bioDescription.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioLeft);
        bioName.style.left = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.px)(bioLeft);
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
    setTimeout(() => _constants__WEBPACK_IMPORTED_MODULE_0__.bodySig.update(), 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL2tvcmUvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvbGF5b3V0LnRzIiwid2VicGFjazovL2tvcmUvLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL3BhZ2VzL2hvbWUudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9zY3JvbGwudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9zaWduYWwudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy9zcHJpbmcudHMiLCJ3ZWJwYWNrOi8va29yZS8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL2tvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rb3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTGFuZHNjYXBlIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tIFwiLi9zaWduYWxcIjtcblxuZXhwb3J0IGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuZXhwb3J0IGNvbnN0IGJvZHlTaWcgPSBuZXcgU2lnbmFsKCk7XG53aW5kb3cub25yZXNpemUgPSBib2R5U2lnLnVwZGF0ZTtcblxuZXhwb3J0IGNvbnN0IG1pZEJyb3duID0gXCIjNjAzOTEzXCI7XG4vLyBleHBvcnQgY29uc3QgamVhbnMgPSBcIiMwMDM5NkZcIjtcbmV4cG9ydCBjb25zdCBqZWFucyA9IFwicmdiKDM4LCA1MSwgODYpXCJcbmV4cG9ydCBjb25zdCBkZWVwQnJvd24gPSBcIiMzQzI0MTVcIjtcbmV4cG9ydCBjb25zdCBibGFjayA9IFwiIzAwMDAwMFwiO1xuZXhwb3J0IGNvbnN0IHdoaXRlID0gXCIjRkZGRkZGXCI7XG5leHBvcnQgY29uc3QgbWV0YWwgPSBcIiM2QzcxNzVcIjtcbmV4cG9ydCBjb25zdCB0aWxlQnJvd24gPSBcIiM2OTUwMzhcIjtcblxuZXhwb3J0IGNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9ICgpID0+IGBmYWRlSW4ke2lzTGFuZHNjYXBlKCkgPyBcIlhcIiA6IFwiWVwifSBlYXNlIDAuNnNgO1xuXG5leHBvcnQgY29uc3QgU0NST0xMX1RFWFRfV0lEVEhfSEVJR0hUX1BST1BPUlRJT04gPSAwLjk1O1xuIiwiaW1wb3J0IHsgaW50ZXJsYWNlZCB9IGZyb20gXCIuL3V0aWxcIjtcblxuaW50ZXJmYWNlIEVsZW1lbnRBbGlnbm1lbnQge1xuICAgIGVsZW1lbnQ6IEJveEVsZW1lbnQ7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dERldGFpbHMge1xuICAgIGxldHRlclNwYWNpbmc6IG51bWJlcjtcbiAgICBmb250V2VpZ2h0OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGxpbmVIZWlnaHQ/OiBudW1iZXI7XG4gICAgZm9udD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQm94RWxlbWVudCA9IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHB4KHBpeGVsczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHBpeGVscyArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gYXhpc0FsaWduaW5nV2l0aEdhcHMoYXhpc1NpemU6IChlbGVtZW50OiBCb3hFbGVtZW50KSA9PiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGVsZW1lbnRPckdhcHM6IChCb3hFbGVtZW50IHwgbnVtYmVyKVtdKTogW0VsZW1lbnRBbGlnbm1lbnRbXSwgbnVtYmVyXSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRBbGlnbm1lbnRzID0gW107XG4gICAgICAgIGxldCBydW5uaW5nVG90YWwgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRPckdhcCBvZiBlbGVtZW50T3JHYXBzKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudE9yR2FwIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRBbGlnbm1lbnRzLnB1c2goeyBlbGVtZW50OiBlbGVtZW50T3JHYXAsIG9mZnNldDogcnVubmluZ1RvdGFsIH0pO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdUb3RhbCArPSBheGlzU2l6ZShlbGVtZW50T3JHYXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nVG90YWwgKz0gZWxlbWVudE9yR2FwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZWxlbWVudEFsaWdubWVudHMsIHJ1bm5pbmdUb3RhbF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdW5weCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZS5zbGljZSgwLCAtMikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvc1goZWxlbWVudDogQm94RWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldExlZnQgOiB1bnB4KGVsZW1lbnQuc3R5bGUubGVmdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NZKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgOiB1bnB4KGVsZW1lbnQuc3R5bGUudG9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVYKGVsZW1lbnQ6IEJveEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IGVsZW1lbnQuY2xpZW50V2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXplWShlbGVtZW50OiBCb3hFbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogZWxlbWVudC5jbGllbnRIZWlnaHQ7XG59XG5cbi8vIFpaWlogd2FudCBhIHNob3J0IGhhbmQgZm9yIGNvbW1vbiBzaW1wbGUgdXNlXG5leHBvcnQgY29uc3QgYWxpZ25pbmdXaXRoR2Fwc1ggPSBheGlzQWxpZ25pbmdXaXRoR2FwcyhzaXplWCk7XG5leHBvcnQgY29uc3QgYWxpZ25pbmdXaXRoR2Fwc1kgPSBheGlzQWxpZ25pbmdXaXRoR2FwcyhzaXplWSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmRzY2FwZSgpIHtcbiAgICByZXR1cm4gaW5uZXJXaWR0aCAvIGlubmVySGVpZ2h0ID4gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlcldpdGhHYXBZKGVsZW1lbnRzOiBIVE1MRWxlbWVudFtdLCBnYXA6IG51bWJlciwgY2VudGVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50c1dpdGhHYXBzID0gaW50ZXJsYWNlZChlbGVtZW50cywgZ2FwKTtcbiAgICBjb25zdCBbZWxlbWVudEFsaWdubWVudHMsIHRvdGFsSGVpZ2h0XSA9IGFsaWduaW5nV2l0aEdhcHNZKGVsZW1lbnRzV2l0aEdhcHMpO1xuXG4gICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIG9mZnNldCB9IG9mIGVsZW1lbnRBbGlnbm1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcHgob2Zmc2V0ICsgY2VudGVyIC0gdG90YWxIZWlnaHQgLyAyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJFbGVtZW50WChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KGlubmVyV2lkdGggLyAyIC0gc2l6ZVgoZWxlbWVudCkgLyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlckVsZW1lbnRZKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBweChpbm5lckhlaWdodCAvIDIgLSBzaXplWShlbGVtZW50KSAvIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVUZXh0KHNjcm9sbFRleHQ6IEhUTUxFbGVtZW50LCBzOiBUZXh0RGV0YWlscykge1xuICAgIHNjcm9sbFRleHQuc3R5bGUuZm9udEZhbWlseSA9IHMuZm9udCA/PyBcIlJvYm90b1wiO1xuICAgIHNjcm9sbFRleHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIiArIHMuZm9udFdlaWdodDtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmNvbG9yID0gcy5jb2xvcjtcbiAgICBzY3JvbGxUZXh0LnN0eWxlLmxldHRlclNwYWNpbmcgPSBweChzLmxldHRlclNwYWNpbmcpO1xuICAgIHNjcm9sbFRleHQuc3R5bGUuZm9udFNpemUgPSBweChzLmZvbnRTaXplKTtcbiAgICBpZiAocy53aWR0aCkgc2Nyb2xsVGV4dC5zdHlsZS53aWR0aCA9IHB4KHMud2lkdGgpO1xuICAgIGlmIChzLmxpbmVIZWlnaHQpIHNjcm9sbFRleHQuc3R5bGUubGluZUhlaWdodCA9IHB4KHMubGluZUhlaWdodCk7XG59XG4iLCJpbXBvcnQgeyBib2R5U2lnIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBlZmZlY3QgfSBmcm9tIFwiLi9zaWduYWxcIjtcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY29uc3QgcGFnZUNsZWFudXBzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xuXG5jb25zdCBhd2FpdEJlZm9yZUxheW91dHMgPSBuZXcgU2V0PFByb21pc2U8dm9pZD4+KCk7XG5jb25zdCBiZWZvcmVMYXlvdXRzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gYXdhaXRMYXlvdXRGb3JJbWFnZUxvYWRpbmcoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBhd2FpdEJlZm9yZUxheW91dHMuYWRkKGltYWdlLmRlY29kZSgpKTtcbn1cblxuLy8gVE9ETyBncm9zc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaGhoKCkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKGF3YWl0QmVmb3JlTGF5b3V0cyk7XG4gICAgYXdhaXRCZWZvcmVMYXlvdXRzLmNsZWFyKCk7XG4gICAgYXdhaXQgc2xlZXAoMTApO1xuICAgIHJ1bkFsbEFuZENsZWFyKGJlZm9yZUxheW91dHMpO1xuICAgIGJvZHlTaWcudXBkYXRlKCk7IC8vIFRPRE8gZ3Jvc3Ncbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXBkYXRlTGF5b3V0KHVwZGF0ZUxheW91dDogKCkgPT4gdm9pZCkge1xuICAgIGF3YWl0IHdhaGhoKCk7XG4gICAgZWZmZWN0KHVwZGF0ZUxheW91dCwgW2JvZHlTaWddKTtcbiAgICBwYWdlQ2xlYW51cHMuYWRkKCgpID0+IGJvZHlTaWcudW5zdWJzY3JpYmUodXBkYXRlTGF5b3V0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZEZvclBhZ2UocGFyZW50OiBFbGVtZW50LCBjaGlsZDogRWxlbWVudCkge1xuICAgIGJlZm9yZUxheW91dHMuYWRkKCgpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgcGFnZUNsZWFudXBzLmFkZCgoKSA9PiBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTGFzdFBhZ2UoKSB7XG4gICAgcnVuQWxsQW5kQ2xlYXIocGFnZUNsZWFudXBzKTtcbn1cblxuZnVuY3Rpb24gcnVuQWxsQW5kQ2xlYXIoc2V0OiBTZXQ8KCkgPT4gdm9pZD4pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2V0KSBpdGVtKCk7XG4gICAgc2V0LmNsZWFyKCk7XG59XG4iLCJpbXBvcnQgeyBibGFjaywgYm9keVNpZywgamVhbnMsIG1ldGFsLCB0aWxlQnJvd24sIHdoaXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWxpZ25pbmdXaXRoR2Fwc1ksIHBvc1gsIHBvc1ksIHB4LCBzaXplWCwgc2l6ZVksIHN0eWxlVGV4dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkRm9yUGFnZSwgcmVnaXN0ZXJVcGRhdGVMYXlvdXQgfSBmcm9tIFwiLi4vcGFnZVwiO1xuaW1wb3J0IHsgYWRkU2Nyb2xsSW1hZ2UsIGFkZFNjcm9sbFN2ZywgYWRkU2Nyb2xsVGV4dCwgcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCwgc2Nyb2xsQ29udGFpbmVyIH0gZnJvbSBcIi4uL3Njcm9sbFwiO1xuaW1wb3J0IHsgZWZmZWN0LCBTaWduYWwgfSBmcm9tIFwiLi4vc2lnbmFsXCI7XG5pbXBvcnQgeyBhbmltYXRlU3ByaW5nLCBTcHJpbmcgfSBmcm9tIFwiLi4vc3ByaW5nXCI7XG5cbmZ1bmN0aW9uIGxheW91dFNlY3Rpb25MaW5lKHNlY3Rpb25MaW5lOiBIVE1MRWxlbWVudCwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgcyA9IGlubmVyV2lkdGg7XG4gICAgc2VjdGlvbkxpbmUuc3R5bGUuaGVpZ2h0ID0gcHgoMC4wMDEgKiBzKTtcbiAgICBzZWN0aW9uTGluZS5zdHlsZS53aWR0aCA9IHB4KGlubmVyV2lkdGgpO1xuICAgIHNlY3Rpb25MaW5lLnN0eWxlLnRvcCA9IHB4KHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmF2QmFyKCkge1xuICAgIC8vLyBaWlpaIHB1bGwgdGhpcyBvdXQgd2l0aCBvbmUgaW4gc2Nyb2xsLnRzXG4gICAgZnVuY3Rpb24gYWRkSW1hZ2Uoc3JjOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBzY3JvbGxJbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgc2Nyb2xsSW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICBzY3JvbGxJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBzY3JvbGxJbWFnZS5vbmxvYWQgPSAoKSA9PiBib2R5U2lnLnVwZGF0ZSgpOyAvLyBaWlpaIHN0dXBpZFxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsSW1hZ2UpO1xuICAgICAgICByZXR1cm4gc2Nyb2xsSW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3Qga29yZUxvZ28gPSBhZGRJbWFnZShcImJpZy1rb3JlLnN2Z1wiKTtcblxuICAgIGNvbnN0IGtvcmVOYXZTbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBrb3JlTmF2U2xvZ2FuLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xuICAgIGtvcmVOYXZTbG9nYW4uaW5uZXJUZXh0ID0gXCJDbG9zZSB0aGUgZ2FwIGluIHN5c3RlbXMgaW50ZWdyYXRpb24uXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrb3JlTmF2U2xvZ2FuKTtcblxuICAgIGZ1bmN0aW9uIGFkZE5hdkl0ZW0obmF2SXRlbU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5hdkl0ZW0uc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIG5hdkl0ZW0uaW5uZXJUZXh0ID0gbmF2SXRlbU5hbWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG4gICAgICAgIHJldHVybiBuYXZJdGVtO1xuICAgIH1cblxuICAgIGNvbnN0IGFib3V0ID0gYWRkTmF2SXRlbShcIkFCT1VUXCIpO1xuICAgIGNvbnN0IHNlcnZpY2VzID0gYWRkTmF2SXRlbShcIlNFUlZJQ0VTXCIpO1xuICAgIGNvbnN0IGJpbyA9IGFkZE5hdkl0ZW0oXCJCSU9cIik7XG4gICAgY29uc3QgcmVjZW50UHJvamVjdHMgPSBhZGROYXZJdGVtKFwiUkVDRU5UIFBST0pFQ1RTXCIpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBhZGROYXZJdGVtKFwiQ09OVEFDVFwiKTtcblxuICAgIGNvbnN0IG5hdkl0ZW1zID0gW2Fib3V0LCBzZXJ2aWNlcywgYmlvLCByZWNlbnRQcm9qZWN0cywgY29udGFjdF07XG5cbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzID0gaW5uZXJXaWR0aDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gMC4wNSAqIHM7IC8vIFpaWlogdGFrZSBvdXRcblxuICAgICAgICBjb25zdCBuYXZCb3R0b20gPSBzICogMC4wNTtcblxuICAgICAgICBrb3JlTG9nby5zdHlsZS53aWR0aCA9IHB4KDAuMDggKiBzKTtcbiAgICAgICAga29yZUxvZ28uc3R5bGUudG9wID0gcHgobmF2Qm90dG9tIC0gc2l6ZVkoa29yZUxvZ28pIC0gMC4wMDIgKiBzKTtcbiAgICAgICAga29yZUxvZ28uc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG5cbiAgICAgICAgc3R5bGVUZXh0KGtvcmVOYXZTbG9nYW4sIHsgbGV0dGVyU3BhY2luZzogMCAqIHMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IG1ldGFsLCBmb250U2l6ZTogMC4wMTEgKiBzIH0pO1xuICAgICAgICBrb3JlTmF2U2xvZ2FuLnN0eWxlLnRvcCA9IHB4KG5hdkJvdHRvbSAtIHNpemVZKGtvcmVOYXZTbG9nYW4pKTtcbiAgICAgICAga29yZU5hdlNsb2dhbi5zdHlsZS5sZWZ0ID0gcHgocG9zWChrb3JlTG9nbykgKyBzaXplWChrb3JlTG9nbykgKyBzICogMC4wMik7XG5cbiAgICAgICAgY29uc3QgbmF2SXRlbVRleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAwLjAwMDkgKiBzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDEgKiBzIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG5hdkl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZJdGVtID0gbmF2SXRlbXNbaV07XG4gICAgICAgICAgICBjb25zdCBuZXh0TmF2SXRlbSA9IG5hdkl0ZW1zW2kgKyAxXTtcblxuICAgICAgICAgICAgc3R5bGVUZXh0KG5hdkl0ZW0sIG5hdkl0ZW1UZXh0RGV0YWlscyk7XG4gICAgICAgICAgICBpZiAobmV4dE5hdkl0ZW0pIG5hdkl0ZW0uc3R5bGUubGVmdCA9IHB4KHBvc1gobmV4dE5hdkl0ZW0pIC0gc2l6ZVgobmF2SXRlbSkgLSAwLjAyICogcyk7XG4gICAgICAgICAgICBlbHNlIG5hdkl0ZW0uc3R5bGUubGVmdCA9IHB4KHMgLSBzaXplWChjb250YWN0KSAtIDAuMDcgKiBzKTtcblxuICAgICAgICAgICAgbmF2SXRlbS5zdHlsZS50b3AgPSBweChuYXZCb3R0b20gLSBzaXplWShuYXZJdGVtKSk7XG4gICAgICAgIH1cbiAgICB9LCBbYm9keVNpZ10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG9tZVBhZ2UoKSB7XG4gICAgZnVuY3Rpb24gYWRkU2VjdGlvbkxpbmUoKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VjdGlvbkxpbmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHNlY3Rpb25MaW5lLnN0eWxlLmJhY2tncm91bmQgPSBqZWFucztcblxuICAgICAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzZWN0aW9uTGluZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uTGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkbGluZVRleHQgPSBhZGRTY3JvbGxUZXh0KFwiUFJPVEVDVCBZT1VSU0VMRiBGUk9NIFBST0pFQ1QgSEFaQVJEUy5cIik7XG4gICAgY29uc3QgdHJhdmVsaW5nVGhlUGF0aCA9IGFkZFNjcm9sbFRleHQoXCJUcmF2ZWxsaW5nIHRoZSBwYXRoIHVuZ3VpZGVkIGNhbiBjb3N0IHlvdS5cIik7XG5cbiAgICBjb25zdCBsb2dvID0gYWRkU2Nyb2xsU3ZnKFwibG9nby5zdmdcIik7XG4gICAgbG9nby5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xuICAgIGxvZ28ub25tb3VzZWVudGVyID0gKCkgPT4ge1xuICAgICAgICBsb2dvLnN0eWxlLmZpbHRlciA9IFwiZHJvcC1zaGFkb3coMTBweCAxMHB4IDEwcHggcmdiYSgyNTUsIDE4MCwgMTAwLCAwLjUpKVwiO1xuICAgICAgICBsb2dvLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC0xNXB4LCAtMTVweClcIjtcbiAgICB9O1xuICAgIGxvZ28ub25tb3VzZWxlYXZlID0gKCkgPT4ge1xuICAgICAgICBsb2dvLnN0eWxlLmZpbHRlciA9IFwiXCI7XG4gICAgICAgIGxvZ28uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMHB4LCAwcHgpXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lMSA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCBiaW9OYW1lID0gYWRkU2Nyb2xsVGV4dChcIlNDT1RUIEcuIEdSSUZGSU5cIik7XG4gICAgY29uc3QgYmlvRGVzY3JpcHRpb24gPSBhZGRTY3JvbGxUZXh0KFwiRm91bmRlcjxicj48YnI+V2l0aCAzNyB5ZWFycyBpbiB0aGUgdHJlbmNoZXMgb2YgYnJvYWRjYXN0LCBBViwgYW5kIG1lZGlhIHN5c3RlbXMgaW50ZWdyYXRpb24sIEnigJl2ZSBidWlsdCBteSBjYXJlZXIgcHJvdGVjdGluZyBjbGllbnRzIGZyb20gYmVpbmcgc3RlYW1yb2xsZWQgYnkgY29tcGxleGl0eSwgYmFkIHBsYW5uaW5nLCBhbmQgdW5yZWFsaXN0aWMgcHJvbWlzZXMuPGJyPjxicj5J4oCZbSBub3QgaGVyZSB0byBwbGF5IG5pY2Ug4oCUIEnigJltIGhlcmUgdG8gbWFrZSBzdXJlIHRoaW5ncyBnZXQgZG9uZSByaWdodC48YnI+PGJyPkFzIGEgU3ViamVjdCBNYXR0ZXIgRXhwZXJ0IGFuZCBPd25lcuKAmXMgUmVwLCBJIGJyaW5nIGNsZWFyLWV5ZWQgc3RyYXRlZ3ksIGVuZ2luZWVyaW5nIGxlYWRlcnNoaXAsIGFuZCBhIG5vLUJTIGFwcHJvYWNoIHRvIGNvbXBsZXggcHJvamVjdHMuIEZyb20gZWFybHktc3RhZ2UgdmlzaW9uaW5nIHRocm91Z2ggZmluYWwgaW1wbGVtZW50YXRpb24sIEkgbWFrZSBzdXJlIG15IGNsaWVudHMgYXJlIGZ1bGx5IGluZm9ybWVkIGFuZCBzdGF5IGluIGNvbnRyb2wg4oCUIHdpdGhvdXQgYmVpbmcgYnVyaWVkIGluIHRlY2huaWNhbCBub2lzZSBvciB2ZW5kb3Igc3Bpbi48YnI+PGJyPknigJl2ZSBsZWQgaGlnaC1wcm9maWxlIHByb2plY3RzIGZvciB0aGUgTkJBLCBXV0UsIFVuaXZpc2lvbiwgRGlzbmV5LCBhbmQgbW9yZS4gTXkgYmFja2dyb3VuZCBpbmNsdWRlcyBydW5uaW5nIGEgc3VjY2Vzc2Z1bCBpbnRlZ3JhdGlvbiBmaXJtLCBtYW5hZ2luZyBlbmdpbmVlcmluZyB0ZWFtcyBvZiA1MCssIGFuZCBvdmVyc2VlaW5nIHNvbWUgb2YgdGhlIGxhcmdlc3QgbWVkaWEgZmFjaWxpdHkgYnVpbGRzIG9mIHRoZSBsYXN0IDMwIHllYXJzLiBXaGV0aGVyIHdl4oCZcmUgdGFsa2luZyBuZXR3b3JrIG9wcywgY2xvdWQgd29ya2Zsb3dzLCBwb3N0LXByb2R1Y3Rpb24sIG9yIHN0dWRpbyBvcHMgd29ya2Zsb3dzIOKAlCBJ4oCZdmUgZG9uZSBpdCwgYW5kIEkgYnJpbmcgdGhlIHNjYXJzIChhbmQgbGVzc29ucykgd2l0aCBtZS48YnI+PGJyPk15IGpvYiBpcyBzaW1wbGU6IG1ha2Ugc3VyZSBteSBjbGllbnRzIGFyZSBwcm90ZWN0ZWQsIHJlc3BlY3RlZCwgYW5kIGhhdmUgZGVsaXZlcmVkIGV4YWN0bHkgd2hhdCB0aGV5IG5lZWTigJRub3RoaW5nIG1vcmUsIGFuZCBhYnNvbHV0ZWx5IG5vdGhpbmcgbGVzcy5cIik7XG4gICAgY29uc3QgcG9ydHJhaXQgPSBhZGRTY3JvbGxJbWFnZShcInBhcGEucG5nXCIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkxpbmUyID0gYWRkU2VjdGlvbkxpbmUoKTtcblxuICAgIGNvbnN0IGZlZWxDb25maWRlbnQgPSBhZGRTY3JvbGxUZXh0KFwiRkVFTCBDT05GSURFTlQgS05PV0lORyBZT1XigJlWRSBHT1QgSVQgQUxMIENPVkVSRUQuXCIpO1xuXG4gICAgY29uc3Qgc3ByaW5nU2lnID0gbmV3IFNpZ25hbCgpO1xuICAgIGZ1bmN0aW9uIGFkZFNraWxsVGlsZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gbWV0YWw7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gYWRkU2Nyb2xsVGV4dCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGFkZFNjcm9sbFRleHQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjI1c1wiO1xuXG4gICAgICAgIGNvbnN0IHNwcmluZ1ggPSBuZXcgU3ByaW5nKHgpO1xuICAgICAgICBjb25zdCBzcHJpbmdZID0gbmV3IFNwcmluZyh5KTtcbiAgICAgICAgY29uc3Qgc3ByaW5nU2l6ZVkgPSBuZXcgU3ByaW5nKDEpO1xuICAgICAgICBzcHJpbmdYLnNldFN0aWZmbmVzc0NyaXRpY2FsKDIwMCk7XG4gICAgICAgIHNwcmluZ1kuc2V0U3RpZmZuZXNzQ3JpdGljYWwoMjAwKTtcbiAgICAgICAgc3ByaW5nU2l6ZVkuc2V0U3RpZmZuZXNzQ3JpdGljYWwoMjAwKTtcblxuICAgICAgICBmdW5jdGlvbiB0aWxlQXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBza2lsbFRpbGVzLmZpbmQoKHMpID0+IHMuc3ByaW5nWC50YXJnZXQgPT09IHggJiYgcy5zcHJpbmdZLnRhcmdldCA9PT0geSkhO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmxpcChzcHJpbmcxOiBTcHJpbmcsIHNwcmluZzI6IFNwcmluZykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNwcmluZzEudGFyZ2V0O1xuICAgICAgICAgICAgc3ByaW5nMS50YXJnZXQgPSBzcHJpbmcyLnRhcmdldDtcbiAgICAgICAgICAgIHNwcmluZzIudGFyZ2V0ID0gcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNwcmluZ1kudGFyZ2V0ID09PSBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZmxpcChcbiAgICAgICAgICAgICAgICAgICAgdGlsZUF0KGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQsIDEgLSBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdZLCAvL1xuICAgICAgICAgICAgICAgICAgICBob2xlU2tpbGxUaWxlLnNwcmluZ1lcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXJlY2lvblggPSBzcHJpbmdYLnRhcmdldCAtIGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQgPCAwID8gLTEgOiAxO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IGhvbGVTa2lsbFRpbGUuc3ByaW5nWC50YXJnZXQ7IHggIT09IHNwcmluZ1gudGFyZ2V0OyB4ICs9IGRpcmVjaW9uWCkge1xuICAgICAgICAgICAgICAgIGZsaXAoXG4gICAgICAgICAgICAgICAgICAgIHRpbGVBdCh4LCBob2xlU2tpbGxUaWxlLnNwcmluZ1kudGFyZ2V0KS5zcHJpbmdYLCAvL1xuICAgICAgICAgICAgICAgICAgICB0aWxlQXQoeCArIGRpcmVjaW9uWCwgaG9sZVNraWxsVGlsZS5zcHJpbmdZLnRhcmdldCkuc3ByaW5nWFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcHJpbmdZLnRhcmdldCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsaXAoXG4gICAgICAgICAgICAgICAgICAgIHRpbGVBdChzcHJpbmdYLnRhcmdldCwgMSAtIHNwcmluZ1kudGFyZ2V0KS5zcHJpbmdZLCAvL1xuICAgICAgICAgICAgICAgICAgICBzcHJpbmdZXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCBza2lsbFRpbGUgb2Ygc2tpbGxUaWxlcykge1xuICAgICAgICAgICAgICAgIGlmIChza2lsbFRpbGUgPT09IGhvbGVTa2lsbFRpbGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IG1ldGFsO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5zcHJpbmdTaXplWS50YXJnZXQgPSAxO1xuICAgICAgICAgICAgICAgIHNraWxsVGlsZS5kZXNjcmlwdGlvblRleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IHRpbGVCcm93bjtcbiAgICAgICAgICAgIHNwcmluZ1NpemVZLnRhcmdldCA9IDI7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbGxUaWxlIG9mIHNraWxsVGlsZXMpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdYLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdZLCBza2lsbFRpbGUuc3ByaW5nU2lnKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlU3ByaW5nKHNraWxsVGlsZS5zcHJpbmdTaXplWSwgc2tpbGxUaWxlLnNwcmluZ1NpZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBvbkNsaWNrO1xuICAgICAgICB0aXRsZVRleHQub25jbGljayA9IG9uQ2xpY2s7XG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dC5vbmNsaWNrID0gb25DbGljaztcblxuICAgICAgICBjb250YWluZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIHRpdGxlVGV4dC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICAgIHJldHVybiB7IGNvbnRhaW5lciwgdGl0bGVUZXh0LCBkZXNjcmlwdGlvblRleHQsIHNwcmluZ1gsIHNwcmluZ1ksIHNwcmluZ1NpemVZLCBzcHJpbmdTaWcgfTtcbiAgICB9XG5cbiAgICBjb25zdCBob2xlU2tpbGxUaWxlID0gYWRkU2tpbGxUaWxlKFwiXCIsIFwiXCIsIDIsIDEpO1xuICAgIGhvbGVTa2lsbFRpbGUuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwMDAwMDAzM1wiO1xuXG4gICAgY29uc3Qgc2tpbGxUaWxlcyA9IFtcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiT3duZXI8YnI+UmVwcmVzZW50YXRpb25cIiwgXCJLT1JFIHNlcnZlcyBhcyB5b3VyIGV5ZXMsIGVhcnMsIGFuZCBhZHZvY2F0ZXMsIHByb3ZpZGluZyBjb25jaWVyZ2UtbGV2ZWwgZ3VpZGFuY2UgdGhyb3VnaCBldmVyeSBzdGVwIG9mIHlvdXIgcHJvamVjdC4gV2Uga2VlcCB2ZW5kb3JzIGFuZCBjb250cmFjdG9ycyBob25lc3QsIG1ha2luZyBzdXJlIG5vdGhpbmcgc2xpcHMgdGhyb3VnaCB0aGUgY3JhY2tzLiBXZSBiZWdpbiBieSBhbGlnbmluZyBhbGwgc3Rha2Vob2xkZXJzIGVhcmx5IG9uLCB0aGVuIGRlZmVuZCB5b3VyIHBvc2l0aW9uIHRocm91Z2hvdXQgdGhlIHByb2Nlc3MuXCIsIDAsIDApLCAvL1xuICAgICAgICBhZGRTa2lsbFRpbGUoXCJCYXNpcyBvZjxicj5EZXNpZ25cIiwgXCJLT1JFIGxpc3RlbnMgYmVmb3JlIHdlIGFkdmlzZS4gV2UgcmV2aWV3IHlvdXIgY3VycmVudCBvcGVyYXRpb24sIGZ1dHVyZSBwbGFucywgYW5kIG92ZXJhbGwgZ29hbHMuIFlvdXIgbmV3IHNwYWNlIGFuZCBzeXN0ZW1zIG11c3QgZ3JhY2VmdWxseSBzdXBwb3J0IG9wZXJhdGlvbmFsIG5lZWRzIGFuZCBmdXR1cmUgZ3Jvd3RoLiBEZWVwIGV4cGVydGlzZSBpbiBzeXN0ZW1zIHBsYW5uaW5nIGFuZCBpbmZyYXN0cnVjdHVyZSBzdHJhdGVneSBhbGxvd3MgS09SRSB0byB0cmFuc2xhdGUgdmlzaW9uIGludG8gYSBjb21wcmVoZW5zaXZlIEJvRC5cIiwgMSwgMCksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIlByb29mIG9mPGJyPkNvbmNlcHRcIiwgXCJLT1JFIGtub3dzIHlvdSBvbmx5IGdldCBvbmUgY2hhbmNlIHRvIGJ1aWxkIGEgbmV3IGZhY2lsaXR5IHJpZ2h0LiBZb3UgZGVzZXJ2ZSB0byBzZWUgaWRlYXMgdGhvcm91Z2hseSB0ZXN0ZWQgYW5kIHZhbGlkYXRlZCBiZWZvcmUgeW91IGNvbW1pdC4gV2UgdmV0IHRlY2hub2xvZ3ksIHZlbmRvcnMsIGFuZCBhc3N1cmFuY2VzIGFnYWluc3QgcmVhbC13b3JsZCBjcml0ZXJpYS4gVGhpcyBicmluZ3MgY2xhcml0eSB0byB5b3VyIHdvcmtmbG93IGFuZCBwdXRzIG1lYXN1cmFibGUgYWNjb3VudGFiaWxpdHkgYmVoaW5kIGV2ZXJ5IHByb21pc2UuXCIsIDIsIDApLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJQcm9qZWN0IFRlYW08YnI+QXNzZW1ibHlcIiwgXCJLT1JFIGJyaW5ncyB0b2dldGhlciB0aGUgcmlnaHQgdGVhbSBmb3IgeW91ciBwcm9qZWN0LiBXZSBkcmF3IGZyb20gYSBuZXR3b3JrIG9mIHRydXN0ZWQgZXhwZXJ0cyBpbiBkZXNpZ24sIGVuZ2luZWVyaW5nLCBpbnN0YWxsYXRpb24sIGFuZCBtb3JlLiBUaGVzZSBhcmUgcHJvdmVuIHByb3Mgd2hv4oCZdmUgc2hvd24gdGhleSBjYW4gZXhlY3V0ZSB1bmRlciBwcmVzc3VyZSB3aXRob3V0IG1pc3NpbmcgYSBiZWF0LiBUaGF0IHRyYW5zbGF0ZXMgdG8gcGVyZm9ybWFuY2UsIG5vdCBleGN1c2VzLlwiLCAzLCAwKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiUHVuY2ggTGlzdDxicj5NYW5hZ2VtZW50XCIsIFwiS09SRSB0cmFja3MgZXZlcnkgZGV0YWlsLCBmcm9tIGJ1aWxkaW5nIGNvbnN0cnVjdGlvbiB0byBzeXN0ZW1zIGludGVncmF0aW9uIHRvIG9uZ29pbmcgc2VydmljZXMuIEl04oCZcyBjcml0aWNhbCB0byBtYWtlIHN1cmUgYWxsIHRoZSB0ZWNoIHdvcmtzLCBhbGwgcHJvbWlzZXMgYXJlIGZ1bGZpbGxlZC4gTm90aGluZyBpcyBzaWduZWQtb2ZmIHVudGlsIGl04oCZcyB0ZXN0ZWQsIHZlcmlmaWVkLCBhbmQgcmlnaHQuIFJlbGVudGxlc3MgZm9sbG93LXRocm91Z2ggdGFrZXMgZXh0cmEgZWZmb3J0LCBidXQgd2Ugc3R1YmJvcm5seSByZWZ1c2UgdG8gY29tcHJvbWlzZS5cIiwgNCwgMCksXG4gICAgICAgIGFkZFNraWxsVGlsZShcIk5lZWRzPGJyPkFuYWx5c2lzXCIsIFwiS09SRSBndWlkZXMgeW91IHRvIHVuY292ZXIgYW5kIHVuZGVyc3RhbmQgZXhhY3RseSB3aGF04oCZcyBuZWVkZWQsIHdoYXQncyBwb3NzaWJsZSwgYW5kIHdoYXTigJlzIHdvcnRoIHB1cnN1aW5nLiBBc2sgYW55b25lIHdob+KAmXMgYmVlbiB0aHJvdWdoIHRoaXMgcHJvY2VzcyDigJMgZWFybHktcGhhc2UgcHJvamVjdCBpbnRlbGxpZ2VuY2UgbWFrZXMgYWxsIHRoZSBkaWZmZXJlbmNlLiBNYWtlIHNtYXJ0ZXIsIGZhc3RlciBkZWNpc2lvbnMgd2l0aCBjbGFyaXR5IGFuZCBjb25maWRlbmNlLCBhbmQgYXZvaWQgY29zdGx5IG1pc3Rha2VzLlwiLCAwLCAxKSxcbiAgICAgICAgYWRkU2tpbGxUaWxlKFwiQnVkZ2V0aW5nICY8YnI+RXN0aW1hdGluZ1wiLCBcIktPUkUgb2ZmZXJzIGEgYnVkZ2V0aW5nIHByb2Nlc3Mgc2hhcGVkIGJ5IHJlYWwtd29ybGQgZW5naW5lZXJpbmcgZXhwZXJpZW5jZS4gV2UgcHJvdmlkZSBlYXJseSBjb3N0IG1vZGVscywgZGV0YWlsZWQgcHJvamVjdGlvbnMsIGFuZCBwaGFzZWQgaW52ZXN0bWVudCBzdHJhdGVnaWVzIHRvIGhlbHAgeW91IHN0YXkgaW5mb3JtZWQsIGluIGNvbnRyb2wsIGFuZCB3aXRoaW4gYnVkZ2V0LiBPdXIgZWFybHkgd29yayBoZWxwcyB5b3UgdG8gbWluaW1pemUgc2NvcGUgY3JlZXAgYW5kIGF2b2lkIGZpbmFuY2lhbCBzdXJwcmlzZXMuXCIsIDEsIDEpLFxuICAgICAgICBob2xlU2tpbGxUaWxlLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJSRlAgQ3JlYXRpb248YnI+JiBBZG1pbmlzdHJhdGlvblwiLCBcIktPUkUgY2FwdHVyZXMgdGhlIHByb2plY3Qgb2JqZWN0aXZlcywgb3V0bGluZXMgdGhlIHNjb3BlLCBkZWZpbmVzIHRoZSBxdWFsaWZpY2F0aW9ucywgYW5kIHN0cnVjdHVyZXMgdGhlIHJlc3BvbnNlIHJlcXVpcmVkIG9mIGV2ZXJ5IHByb2plY3Qgc29saWNpdGF0aW9uIHRoYXQgd2UgcHJvZHVjZS4gV2UgdGhlbiBzdHJ1Y3R1cmUgdGhlIGJpZCBldmFsdWF0aW9uIHByb2Nlc3MgYW5kIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBjcml0aWNhbCBkZWNpc2lvbi1tYWtpbmcsIGxlYXZpbmcgbm90aGluZyB0byBjaGFuY2UuXCIsIDMsIDEpLFxuICAgICAgICBhZGRTa2lsbFRpbGUoXCJJbnRlZ3JhdG9yPGJyPlN1cHBvcnRcIiwgXCJLT1JFIHBhcnRuZXJzIHdpdGggeW91ciBpbnRlZ3JhdG9yIHRvIGxlYWQgdGhlIHByb2Nlc3MsIHByb3RlY3QgeW91ciB2aXNpb24sIGFuZCBtYWtlIHN1cmUgZXZlcnkgd29ya2Zsb3cgaXMgZGVsaXZlcmVkIGV4YWN0bHkgYXMgZGVzaWduZWQuIFdpdGggaW50ZWdyYXRpb24gbGVhZGVyc2hpcCBhbmQgb3ZlcnNpZ2h0IHJvb3RlZCBpbiBkZWNhZGVzIG9mIGV4cGVyaWVuY2UsIHdlIHByZXNlcnZlIHRoZSBpbnRlZ3JpdHkgb2YgeW91ciBkZXNpZ24uIFdlIGRvbuKAmXQgYWNjZXB0IGNvbXByb21pc2VzLiBOZWl0aGVyIHNob3VsZCB5b3UuXCIsIDQsIDEpLFxuICAgIF07XG4gICAgY29uc3Qgc2tpbGxUaWxlQ291bnRYID0gTWF0aC5tYXgoLi4uc2tpbGxUaWxlcy5tYXAoKHMpID0+IHMuc3ByaW5nWC50YXJnZXQpKSArIDE7XG4gICAgc2tpbGxUaWxlc1syXS5jb250YWluZXIuY2xpY2soKTtcblxuICAgIGNvbnN0IHNlY3Rpb25MaW5lMyA9IGFkZFNlY3Rpb25MaW5lKCk7XG5cbiAgICBjb25zdCBiaWdOYW1lcyA9IGFkZFNjcm9sbFRleHQoXCJCSUcgTkFNRVM8YnI+WU9VIEtOT1dcIik7XG4gICAgY29uc3QgaGFzVGFja2xlZCA9IGFkZFNjcm9sbFRleHQoXCI8c3Ryb25nPlNjb3R0IEdyaWZmaW48L3N0cm9uZz4gaGFzIHRhY2tsZWQgc29tZSBvZiB0aGUgbW9zdCBjb21wbGV4IHByb2plY3RzIGZvciBzb21lIG9mIHRoZSBsYXJnZXN0IG1lZGlhIGNvbXBhbmllcyBpbiB0aGUgd29ybGQuPGJyPkhlIGhhcyBzZWVuIGl0IGFsbCwgYW5kIHlvdSBjYW4gdGFwIGludG8gdGhhdCBleHBlcmllbmNlLlwiKTtcblxuICAgIGNvbnN0IGJpZ05hbWVDbGllbnRzID0gW1xuICAgICAgICBbXCJBQlMvQ0JOXCIsIFwiTmF0aW9uYWwgR2VvZ3JhcGhpY1wiXSwgLy9cbiAgICAgICAgW1wiQmxhY2tyb2NrXCIsIFwiTm9ydGh3ZXN0ZXJuIFVuaXZlcnNpdHlcIl0sXG4gICAgICAgIFtcIkJsYWNrc3RvbmVcIiwgXCJQYXJhbW91bnQvQ0JTXCJdLFxuICAgICAgICBbXCJDQlNcIiwgXCJNVFYvU2hvd3RpbWVcIl0sXG4gICAgICAgIFtcIkNOTlwiLCBcIlBlbm4gU3RhdGUgVW5pdmVyc2l0eVwiXSxcbiAgICAgICAgW1wiRGlzbmV5L0FCQy9FU1BOXCIsIFwiUHJ1ZGVudGlhbFwiXSxcbiAgICAgICAgW1wiRm94IE5ld3NcIiwgXCJTaXJpdXMgU2F0ZWxsaXRlIFJhZGlvXCJdLFxuICAgICAgICBbXCJNYWRpc29uIFNxdWFyZSBHYXJkZW5cIiwgXCJTeXJhY3VzZSBVbml2ZXJzaXR5XCJdLFxuICAgICAgICBbXCJNTEJcIiwgXCJUZWxldmlzYS1Vbml2aXNpb25cIl0sXG4gICAgICAgIFtcIk1TTkJDXCIsIFwiVGhlIE5ldyBZb3JrIFRpbWVzXCJdLFxuICAgICAgICBbXCJOQkFcIiwgXCJXV0VcIl0sXG4gICAgICAgIFtcIk5CQ1UvQ05CQ1wiXSxcbiAgICBdO1xuXG4gICAgY29uc3QgYmlnTmFtZUNsaWVudFRleHRzID0gYmlnTmFtZUNsaWVudHMubWFwKChiaWdOYW1lQ2xpZW50c1JvdykgPT4gYmlnTmFtZUNsaWVudHNSb3cubWFwKChiaWdOYW1lQ2xpZW50KSA9PiBhZGRTY3JvbGxUZXh0KGJpZ05hbWVDbGllbnQpKSk7XG5cbiAgICBjb25zdCBncmlmZmluQmxhY2tXaGl0ZSA9IGFkZFNjcm9sbEltYWdlKFwiZ3JpZmZpbi1ibGFjay13aGl0ZS5wbmdcIik7XG4gICAgY29uc3QgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0ID0gYWRkU2Nyb2xsVGV4dChcIknigJl2ZSBiZWVuIGluIHRoaXMgaW5kdXN0cnkgZm9yIG1vcmUgdGhhbiAzNSB5ZWFycywgYW5kIEkgY2Fu4oCZdCB0aGluayBvZiBvbmUgY2xpZW50IHdobyB3YXMgYWJsZSB0byBzdWNjZXNzZnVsbHkgbmF2aWdhdGUgdGhlIGdhdW50bGV0IHRoYXQgaXMgYSBsYXJnZSBtZWRpYSBmYWNpbGl0eSBwcm9qZWN0IHdpdGhvdXQgdGhlIHN1cHBvcnQgb2YgYW4gZXhwZXJpZW5jZWQsIGtub3dsZWRnZWFibGUsIGFuZCBhZ2dyZXNzaXZlIHByb2plY3QgZmFjaWxpdGF0b3IuXCIpO1xuXG4gICAgLy8gYmlvXG5cbiAgICBjb25zdCBiaW9IZWFkZXIgPSBhZGRTY3JvbGxUZXh0KFwiSE9XIFdFPGJyPkdPVCBIRVJFXCIpO1xuICAgIGNvbnN0IGJpb1RleHQgPSBhZGRTY3JvbGxUZXh0KFwiSeKAmXZlIGFsd2F5cyBmb2N1c2VkIG9uIHRoZSBjb25jZXB0dWFsaXphdGlvbiBhbmQgaW1wbGVtZW50YXRpb24gb2YgYWR2YW5jZWQgdGVjaG5vbG9neSBzb2x1dGlvbnMgZm9yIGZhY2lsaXR5IGFuZCBldmVudCBzeXN0ZW1zIGludGVncmF0aW9uLiBBbG9uZyB0aGUgd2F5LCB0aGF04oCZcyBtZWFudCBzZXJ2aW5nIGFzIGRlc2lnbiBlbmdpbmVlciwgcHJvamVjdCBtYW5hZ2VyLCBzYWxlcyBlbmdpbmVlciwgcGxhbm5pbmcgY29uc3VsdGFudCwgYnVzaW5lc3MgYnVpbGRlci9vd25lciwgYW5kIHRlYW0gbGVhZGVyLjxicj48YnI+SXQgYWxsIHN0YXJ0ZWQgaW4gdGVjaG5pY2FsIHRoZWF0ZXIsIHdoZXJlIEkgd29ya2VkIGFzIGEgbWFzdGVyIGVsZWN0cmljaWFuLCBsaWdodGluZyBkZXNpZ25lciwgc291bmQgZGVzaWduZXIsIGFuZCBmcm9udC1vZi1ob3VzZSBzb3VuZCBlbmdpbmVlciBpbiBzdW1tZXIgc3RvY2ssIHRvdXJpbmcsIGFuZCBvZmYtQnJvYWR3YXkgdGhlYXRlci4gRm9sbG93aW5nIHNldmVyYWwgeWVhcnMgb2YgZnJlZWxhbmNlIHRoZWF0cmljYWwgYW5kIGNvbmNlcnQgdGVjaG5pY2FsIHN1cHBvcnQsIEkgbGFuZGVkIGF0IEFGIEFzc29jaWF0ZXMsIGEgYnJvYWRjYXN0IHN5c3RlbXMgaW50ZWdyYXRvci48YnI+PGJyPkFmdGVyIHdvcmtpbmcgb24gc3lzdGVtcyBlbmdpbmVlcmluZyBlZmZvcnRzIGZvciBOQkPigJlzIFRvZGF5IFNob3csIENOQkMsIGFuZCBVU0EgTmV0d29yaywgSSBtb3ZlZCB0byBTb255IFN5c3RlbXMgSW50ZWdyYXRpb24uIFRoZXJlLCBJIG92ZXJzYXcgZGVzaWduL2J1aWxkcyBmb3IgdGhlIFRyaWJ1bmUgU3RhdGlvbiBHcm91cCBhbmQgc3VwcG9ydGVkIENCUyBCcm9hZGNhc3QgT3BlcmF0aW9ucyAmIEVuZ2luZWVyaW5nPGJyPjxicj5BdCB0aGlzIHBvaW50LCBJIHRlYW1lZCB1cCB3aXRoIHR3byBwYXJ0bmVycyB0byBsYXVuY2ggVGhlIFN5c3RlbXMgR3JvdXAuIFRTRyBzcGVjaWFsaXplZCBpbiBsYXJnZS1zY2FsZSwgZmFzdC10cmFjayBzeXN0ZW1zIGludGVncmF0aW9uIHByb2plY3RzIGZvciB0aGUgYnJvYWRjYXN0IGluZHVzdHJ5LiBEdXJpbmcgb3VyIDIwLXllYXIgcnVuLCB3ZSBkZXNpZ25lZCBhbmQgYnVpbHQgZmFjaWxpdGllcyBmb3IgU2VyaW91cyBTYXRlbGxpdGUgUmFkaW8sIE1UViBOZXR3b3JrcywgU3lyYWN1c2UgVW5pdmVyc2l0eSBOZXdob3VzZSwgTkZMIEZpbG1zIEF1ZGlvLCBOQkNVLCBhbmQgQ29ydXMgRW50ZXJ0YWlubWVudCwgcGx1cyAyMDArIHN5c3RlbXMgaW50ZWdyYXRpb24gcHJvamVjdHMgd29ybGR3aWRlLjxicj48YnI+V2hlbiBUU0cgd2FzIGFjcXVpcmVkIGJ5IERpdmVyc2lmaWVkIGluIDIwMTYsIEkgZXN0YWJsaXNoZWQgYSBzbWFsbCBzdHVkaW8gd2l0aGluIHRoZSBsYXJnZXIgY29ycG9yYXRpb24sIHdoaWNoIGFsbG93ZWQgbWUgdG8gZm9jdXMgb24gY3JpdGljYWwgZWFybHktc3RhZ2UgcHJvamVjdCBjb25jZXB0dWFsaXphdGlvbiwgcGxhbm5pbmcsIGFuZCBidWRnZXRpbmcuIFRocm91Z2hvdXQgdGhvc2UgeWVhcnMsIEkgd2FzIGFibGUgdG8gd29yayBzaG91bGRlciB0byBzaG91bGRlciB3aXRoIHNvbWUgb2YgdGhlIGJlc3QgYW5kIGJyaWdodGVzdCBhY3Jvc3MgYSB3aWRlIHJhbmdlIG9mIGRpc2NpcGxpbmVzIGluIHRoZSBtZWRpYSBhbmQgZW50ZXJ0YWlubWVudCBpbmR1c3RyeS4gQW5kIHRoZSByZXN0LCBhcyB0aGV5IHNheSwgaXMgaGlzdG9yeS48YnI+PGJyPlRvZGF5LCBLT1JFIG9mZmVycyBhIHJhZGljYWxseSBzdHJlYW1saW5lZCB3YXkgdG8gbGV2ZXJhZ2UgYSBjYXJlZXLigJlzIHdvcnRoIG9mIGV4cGVydGlzZSwgZXhwZXJpZW5jZSwgYW5kIGV4dGVuc2l2ZSBpbmR1c3RyeSByZWxhdGlvbnNoaXBzIHRvIGhlbHAgbWFrZSBzdXJlIHlvdXIgbmV4dCBwcm9qZWN0IHJ1bnMgc21vb3RobHkgZnJvbSBwbGFubmluZyB0byBhY2NlcHRhbmNlLjxicj48YnI+SSBob2xkIGEgQmFjaGVsb3Igb2YgU2NpZW5jZSBpbiBFbGVjdHJpY2FsIEVuZ2luZWVyaW5nIGZyb20gUGVubiBTdGF0ZSBVbml2ZXJzaXR5LCBhbmQgYW0gYSBtZW1iZXIgb2YgU01QVEUsIEFFUywgYW5kIFNWRy4gSeKAmW0gYWxzbyBraW5kIHRvIGFuaW1hbHMuXCIpO1xuXG4gICAgLy8gcmVjZW50IHByb2plY3RzXG5cbiAgICBjb25zdCByZWNlbnRQcm9qZWN0SGVhZGVyID0gYWRkU2Nyb2xsVGV4dChcIlJFQ0VOVDxicj5QUk9KRUNUU1wiKTtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RQYWlyKHByb2plY3ROYW1lOiBzdHJpbmcsIHByb2plY3REZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lVGV4dCA9IGFkZFNjcm9sbFRleHQocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25UZXh0ID0gYWRkU2Nyb2xsVGV4dChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJldHVybiB7IHByb2plY3ROYW1lVGV4dCwgcHJvamVjdERlc2NyaXB0aW9uVGV4dCB9O1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RzID0gW2FkZFByb2plY3RQYWlyKFwiTkJBIEVudGVydGFpbm1lbnRcIiwgXCJBcmNoaXRlY3R1cmFsIHBsYW5uaW5nIGFuZCBidWRnZXRpbmcgZm9yIG5ldyBjb250ZW50IG9wZXJhdGlvbnMgY2VudGVyLCByZXBsYXkgb3BlcmF0aW9ucyBjZW50ZXIsIGFuZCBleHBhbnNpb24gb2YgdGhlIE5CQSBOZXR3b3JrLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJUZWxldmlzYS9Vbml2aXNpb24gTmV0d29ya1wiLCBcIlN5c3RlbSBjb25jZXB0dWFsaXphdGlvbiwgYXBwbGljYXRpb25zIGVuZ2luZWVyaW5nLCBwcm9qZWN0IGJ1ZGdldGluZywgYW5kIGFjY291bnQgcmVwcmVzZW50YXRpb24gZm9yIHRoZSBuZXR3b3JrIG9wZXJhdGlvbnMgY2VudGVyLlwiKSwgYWRkUHJvamVjdFBhaXIoXCJXZXN0ZXJuIEtlbnR1Y2t5IFVuaXZlcnNpdHlcIiwgXCJQQlMgYW5kIE5QUiBzdGF0aW9ucywgQ29sbGVnZSBvZiBDb21tdW5pY2F0aW9ucyBwcm9kdWN0aW9uIGFuZCBwb3N0IGZhY2lsaXR5LCBpbmNsdWRpbmcgdGllcyB0byBjYW1wdXMgc3BvcnRzIGFuZCBwcmVzZW50YXRpb24gdmVudWVzLCBkZXZlbG9wbWVudCBvZiBhIGNvbXBsZXRlIHN5c3RlbSBkZXNpZ24gZm9yIHRocmVlIGNvbnRyb2wgcm9vbXMsIHR3byBUViBzdHVkaW9zLCBmb3VyIHJhZGlvIHN0dWRpb3MsIGFuZCBwb3N0LXByb2R1Y3Rpb24gb3BlcmF0aW9ucy5cIiksIGFkZFByb2plY3RQYWlyKFwiV29ybGQgV3Jlc3RsaW5nIEVudGVydGFpbm1lbnRcIiwgXCJOZXcgSFEgZGlnaXRhbCBtZWRpYSBmYWNpbGl0eSBkZXNpZ24gYW5kIGJ1ZGdldGluZyBmb3IgcHJvZHVjdGlvbiwgcG9zdCwgdHJhbnNtaXNzaW9uLCBhbmQgZXZlbnQgY29vcmRpbmF0aW9uLCBwbHVzIGZvcm1hbCBhbmFseXNpcyBmb3IgUGhhc2UgMiB3b3JrZmxvdyBvcHRpbWl6YXRpb24gYW5kIG9yY2hlc3RyYXRpb24gbGF5ZXIuXCIpLCBhZGRQcm9qZWN0UGFpcihcIkRpc25leS9HYWxheHkgQ29uc29saWRhdGlvblwiLCBcIlRoZSBsYXJnZXN0IG5ldHdvcmsgb3BlcmF0aW9ucyBjZW50ZXIgZmFjaWxpdHkgZXZlciBidWlsdCBpbiB0aGUgVVMuIEl0IGluY2x1ZGVzIEFCQyBOZXR3b3JrLCBXQUJDIFRWLCBFU1BOIE5ZLCBNYXJ2ZWwgRW50ZXJ0YWlubWVudCwgYW5kIERpc25leSBTY3JlZW5pbmcgVGhlYXRlci4gU2NvdHQgb3ZlcnNhdyBjb250cmFjdCBhZG1pbmlzdHJhdGlvbiBhY3Jvc3MgdGhlIGVudGlyZSBwcm9qZWN0LlwiKV07XG5cbiAgICAvLyBjb250YWN0XG5cbiAgICBjb25zdCB0ZWxsTWUgPSBhZGRTY3JvbGxUZXh0KFwiVGVsbCBtZSBhYm91dCB5b3VyIHByb2plY3QuXCIpO1xuICAgIGNvbnN0IG9uZUNvbnZlcnNhdGlvbiA9IGFkZFNjcm9sbFRleHQoXCJPbmUgY29udmVyc2F0aW9uIHdvbuKAmXQgY29zdCB5b3UgYW55dGhpbmcuIE5vdCBoYXZpbmcgb25lIG1pZ2h0LlwiKTtcbiAgICBjb25zdCBiaWdLb3JlID0gYWRkU2Nyb2xsU3ZnKFwiYmlnLWtvcmUuc3ZnXCIpO1xuXG4gICAgY29uc3QgZW1haWwgPSBhZGRTY3JvbGxUZXh0KFwiRW1haWxcIik7XG4gICAgY29uc3QgbGlua2VkSW4gPSBhZGRTY3JvbGxUZXh0KFwiTGlua2VkSW5cIik7XG4gICAgY29uc3QgcHJpdmFjeVBvbGljeSA9IGFkZFNjcm9sbFRleHQoXCJQcml2YWN5IFBvbGljeSDCqSAyMDI2IEtPUkUgU01FIExMQ1wiKTtcblxuICAgIHJlZ2lzdGVyVXBkYXRlTGF5b3V0KCgpID0+IHtcbiAgICAgICAgcmVzaXplU2Nyb2xsQ29udGFpbmVyRnVsbCgpO1xuICAgICAgICBjb25zdCBzID0gaW5uZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjA1ICogcztcbiAgICAgICAgY29uc3QgZnJvbVRvcCA9IDAuMDMxICogcztcblxuICAgICAgICBjb25zdCBiaWdUZXh0VGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAgKiBzLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDc1ICogcywgd2lkdGg6IDAuNCAqIHMsIGxpbmVIZWlnaHQ6IDAuMDg0ICogcyB9O1xuICAgICAgICBjb25zdCBzdWJHcmF5VGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogXCJncmF5XCIsIGZvbnRTaXplOiAwLjAxOSAqIHMgfTtcblxuICAgICAgICBjb25zdCBURU1QID0gMC4wMiAqIHM7XG4gICAgICAgIC8vIHRvcFxuXG4gICAgICAgIHN0eWxlVGV4dChoZWFkbGluZVRleHQsIGJpZ1RleHRUZXh0RGV0YWlscyk7XG4gICAgICAgIGhlYWRsaW5lVGV4dC5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luIC0gMC4wMDQgKiBzKTtcbiAgICAgICAgaGVhZGxpbmVUZXh0LnN0eWxlLnRvcCA9IHB4KGZyb21Ub3ApO1xuXG4gICAgICAgIHN0eWxlVGV4dCh0cmF2ZWxpbmdUaGVQYXRoLCBzdWJHcmF5VGV4dERldGFpbHMpO1xuICAgICAgICB0cmF2ZWxpbmdUaGVQYXRoLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuICAgICAgICB0cmF2ZWxpbmdUaGVQYXRoLnN0eWxlLnRvcCA9IHB4KHBvc1koaGVhZGxpbmVUZXh0KSArIHNpemVZKGhlYWRsaW5lVGV4dCkgKyBURU1QKTtcblxuICAgICAgICBsb2dvLnN0eWxlLmhlaWdodCA9IHB4KHNpemVZKGhlYWRsaW5lVGV4dCkgKiAxLjA0KTtcbiAgICAgICAgbG9nby5zdHlsZS5sZWZ0ID0gcHgoaW5uZXJXaWR0aCAtIGxvZ28uc2Nyb2xsV2lkdGggLSBtYXJnaW4pO1xuICAgICAgICBsb2dvLnN0eWxlLnRvcCA9IHB4KGZyb21Ub3AgLSAwLjAzICogcyk7XG5cbiAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUxLCBwb3NZKHRyYXZlbGluZ1RoZVBhdGgpICsgc2l6ZVkodHJhdmVsaW5nVGhlUGF0aCkgKyAwLjA1ICogcyk7XG5cbiAgICAgICAgLy8gYmlvXG5cbiAgICAgICAgc3R5bGVUZXh0KGJpb05hbWUsIHsgbGV0dGVyU3BhY2luZzogMSwgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAyICogcyB9KTtcbiAgICAgICAgYmlvTmFtZS5zdHlsZS50b3AgPSBweChwb3NZKHNlY3Rpb25MaW5lMSkgKyAwLjEgKiBzKTtcblxuICAgICAgICBjb25zdCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAxLCBmb250V2VpZ2h0OiAzMDAsIGNvbG9yOiB3aGl0ZSwgZm9udFNpemU6IDAuMDEgKiBzLCBsaW5lSGVpZ2h0OiAwLjAyICogcywgZm9udDogXCJNZXJyaXdlYXRoZXJcIiB9O1xuICAgICAgICBzdHlsZVRleHQoYmlvRGVzY3JpcHRpb24sIGxvbmdQYXJhZ3JhcGhzVGV4dERldGFpbHMpO1xuXG4gICAgICAgIHBvcnRyYWl0LnN0eWxlLmhlaWdodCA9IHB4KHBvc1koYmlvRGVzY3JpcHRpb24pICsgc2l6ZVkoYmlvRGVzY3JpcHRpb24pIC0gcG9zWShiaW9OYW1lKSk7XG4gICAgICAgIHBvcnRyYWl0LnN0eWxlLnRvcCA9IHB4KHBvc1koYmlvTmFtZSkpO1xuICAgICAgICBwb3J0cmFpdC5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luKTtcblxuICAgICAgICBsYXlvdXRTZWN0aW9uTGluZShzZWN0aW9uTGluZTIsIHBvc1koYmlvRGVzY3JpcHRpb24pICsgc2l6ZVkoYmlvRGVzY3JpcHRpb24pICsgMC4wNSAqIHMpO1xuXG4gICAgICAgIC8vIHRpbGVzXG5cbiAgICAgICAgY29uc3QgZmVlbENvbmZpZGVudFRleHREZXRhaWxzID0geyBsZXR0ZXJTcGFjaW5nOiAwICogcywgZm9udFdlaWdodDogMzAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAyOCAqIHMgfTtcbiAgICAgICAgc3R5bGVUZXh0KGZlZWxDb25maWRlbnQsIGZlZWxDb25maWRlbnRUZXh0RGV0YWlscyk7XG4gICAgICAgIGZlZWxDb25maWRlbnQuc3R5bGUudG9wID0gcHgocG9zWShzZWN0aW9uTGluZTIpICsgMC4wNCAqIHMpO1xuICAgICAgICBmZWVsQ29uZmlkZW50LnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gaW5uZXJXaWR0aCAtIDIgKiBtYXJnaW47XG4gICAgICAgIGNvbnN0IHRpbGVHYXAgPSBzICogMC4wMTU7XG4gICAgICAgIGNvbnN0IHRpbGVTaXplID0gKHNjcm9sbFdpZHRoIC0gdGlsZUdhcCAqIChza2lsbFRpbGVDb3VudFggLSAxKSkgLyBza2lsbFRpbGVDb3VudFg7XG5cbiAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1goeDogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFyZ2luICsgKHRpbGVTaXplICsgdGlsZUdhcCkgKiB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdGlsZVBvc1koeTogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRpbGVTaXplICsgdGlsZUdhcCkgKiB5ICsgcG9zWShmZWVsQ29uZmlkZW50KSArIHNpemVZKGZlZWxDb25maWRlbnQpICsgMC4wNCAqIHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiaW9MZWZ0ID0gdGlsZVBvc1goMik7IC8vIFpaWlogdGhpcyBndXkgZ290IGJyb2tlbiB1cFxuICAgICAgICBiaW9EZXNjcmlwdGlvbi5zdHlsZS53aWR0aCA9IHB4KHMgLSBiaW9MZWZ0IC0gbWFyZ2luKTtcbiAgICAgICAgYmlvRGVzY3JpcHRpb24uc3R5bGUudG9wID0gcHgoYmlvTmFtZS5vZmZzZXRUb3AgKyBiaW9OYW1lLm9mZnNldEhlaWdodCk7XG4gICAgICAgIGJpb0Rlc2NyaXB0aW9uLnN0eWxlLmxlZnQgPSBweChiaW9MZWZ0KTtcbiAgICAgICAgYmlvTmFtZS5zdHlsZS5sZWZ0ID0gcHgoYmlvTGVmdCk7XG5cbiAgICAgICAgc3ByaW5nU2lnLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNraWxsVGlsZSBvZiBza2lsbFRpbGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBjb250YWluZXIsIHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBzcHJpbmdYLCBzcHJpbmdZLCBzcHJpbmdTaXplWSB9ID0gc2tpbGxUaWxlO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gcHgodGlsZVNpemUpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBweCh0aWxlU2l6ZSAqIHNwcmluZ1NpemVZLnBvc2l0aW9uICsgKHNwcmluZ1NpemVZLnBvc2l0aW9uIC0gMSkgKiB0aWxlR2FwKTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcHgodGlsZVBvc1goc3ByaW5nWC5wb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSBweCh0aWxlUG9zWShzcHJpbmdZLnBvc2l0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQodGl0bGVUZXh0LCB7IGxldHRlclNwYWNpbmc6IDAuNSwgZm9udFdlaWdodDogNTAwLCBjb2xvcjogYmxhY2ssIGZvbnRTaXplOiAwLjAxOCAqIHMgfSk7XG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0LnN0eWxlLmxlZnQgPSBweCh0aWxlUG9zWChzcHJpbmdYLnBvc2l0aW9uKSArIDAuMDggKiB0aWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0LnN0eWxlLnRvcCA9IHB4KHRpbGVQb3NZKHNwcmluZ1kucG9zaXRpb24pICsgdGlsZVNpemUgLyAyIC0gc2l6ZVkodGl0bGVUZXh0KSAvIDIpO1xuXG4gICAgICAgICAgICAgICAgc3R5bGVUZXh0KGRlc2NyaXB0aW9uVGV4dCwgeyBsZXR0ZXJTcGFjaW5nOiAwLjUsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IGJsYWNrLCBmb250U2l6ZTogMC4wMTEgKiBzLCBsaW5lSGVpZ2h0OiAwLjAxNiAqIHMsIHdpZHRoOiB0aWxlU2l6ZSAtIHMgKiAwLjAzIH0pO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5sZWZ0ID0gcHgodGlsZVBvc1goc3ByaW5nWC5wb3NpdGlvbikgKyAwLjA4ICogdGlsZVNpemUpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS50b3AgPSBweChwb3NZKHRpdGxlVGV4dCkgKyBzaXplWSh0aXRsZVRleHQpICsgcyAqIDAuMDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbc3ByaW5nU2lnXSk7XG5cbiAgICAgICAgbGF5b3V0U2VjdGlvbkxpbmUoc2VjdGlvbkxpbmUzLCB0aWxlUG9zWSgxKSArIHRpbGVTaXplICsgMC4wOCAqIHMpO1xuXG4gICAgICAgIHN0eWxlVGV4dChiaWdOYW1lcywgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgYmlnTmFtZXMuc3R5bGUudG9wID0gcHgocG9zWShzZWN0aW9uTGluZTMpICsgMC4wNiAqIHMpO1xuICAgICAgICBiaWdOYW1lcy5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luIC0gMC4wMDcgKiBzKTtcblxuICAgICAgICBjb25zdCBoYXNUYWNrZWRUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMCAqIHMsIGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IFwiZ3JheVwiLCBmb250U2l6ZTogMC4wMTQgKiBzLCBsaW5lSGVpZ2h0OiAwLjAyNSAqIHMsIHdpZHRoOiBzaXplWChiaWdOYW1lcykgLSAwLjAyNSAqIHMgfTtcbiAgICAgICAgc3R5bGVUZXh0KGhhc1RhY2tsZWQsIGhhc1RhY2tlZFRleHREZXRhaWxzKTtcbiAgICAgICAgaGFzVGFja2xlZC5zdHlsZS50b3AgPSBweChwb3NZKGJpZ05hbWVzKSArIHNpemVZKGJpZ05hbWVzKSArIFRFTVApO1xuICAgICAgICBoYXNUYWNrbGVkLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuXG4gICAgICAgIGNvbnN0IGxhc3RCaWdOYW1lID0gYmlnTmFtZUNsaWVudFRleHRzW2JpZ05hbWVDbGllbnRUZXh0cy5sZW5ndGggLSAxXVswXTtcbiAgICAgICAgY29uc3QgYmlnTmFtZXNUZXh0RGV0YWlscyA9IHsgbGV0dGVyU3BhY2luZzogMCAqIHMsIGZvbnRXZWlnaHQ6IDMwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMTggKiBzIH07XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYmlnTmFtZUNsaWVudFRleHRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJpZ05hbWVDbGllbnRUZXh0c1t5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG8gPSBiaWdOYW1lQ2xpZW50VGV4dHNbeV1beF07XG5cbiAgICAgICAgICAgICAgICBzdHlsZVRleHQobywgYmlnTmFtZXNUZXh0RGV0YWlscyk7XG5cbiAgICAgICAgICAgICAgICBvLnN0eWxlLnRvcCA9IHB4KHBvc1koYmlnTmFtZXMpICsgcyAqIDAuMDEgKyBzICogMC4wMzIgKiB5KTtcbiAgICAgICAgICAgICAgICBvLnN0eWxlLmxlZnQgPSBweChwb3NYKGJpZ05hbWVzKSArIHNpemVYKGJpZ05hbWVzKSArIHMgKiAwLjA4ICsgcyAqIDAuMjIgKiB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWZmaW5CbGFja1doaXRlLnN0eWxlLndpZHRoID0gcHgocyk7XG4gICAgICAgIGdyaWZmaW5CbGFja1doaXRlLnN0eWxlLnRvcCA9IHB4KHBvc1kobGFzdEJpZ05hbWUpICsgc2l6ZVkobGFzdEJpZ05hbWUpICsgMC4wOCAqIHMpO1xuXG4gICAgICAgIGNvbnN0IGdyaWZmaW5CbGFja1doaXRlVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAgKiBzLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiBibGFjaywgZm9udFNpemU6IDAuMDIgKiBzLCB3aWR0aDogMC40MSAqIHMsIGxpbmVIZWlnaHQ6IDAuMDQgKiBzLCBmb250OiBcIk1lcnJpd2VhdGhlclwiIH07XG4gICAgICAgIGdyaWZmaW5CbGFja1doaXRlVGV4dC5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xuICAgICAgICBzdHlsZVRleHQoZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LCBncmlmZmluQmxhY2tXaGl0ZVRleHREZXRhaWxzKTtcbiAgICAgICAgZ3JpZmZpbkJsYWNrV2hpdGVUZXh0LnN0eWxlLmxlZnQgPSBweChwb3NYKGxhc3RCaWdOYW1lKSk7XG4gICAgICAgIGdyaWZmaW5CbGFja1doaXRlVGV4dC5zdHlsZS50b3AgPSBweChwb3NZKGdyaWZmaW5CbGFja1doaXRlKSArIHNpemVZKGdyaWZmaW5CbGFja1doaXRlKSAvIDIgLSBzaXplWShncmlmZmluQmxhY2tXaGl0ZVRleHQpIC8gMik7XG5cbiAgICAgICAgLy8gYmlvXG5cbiAgICAgICAgc3R5bGVUZXh0KGJpb0hlYWRlciwgYmlnVGV4dFRleHREZXRhaWxzKTtcbiAgICAgICAgYmlvSGVhZGVyLnN0eWxlLnRvcCA9IHB4KHBvc1koZ3JpZmZpbkJsYWNrV2hpdGUpICsgc2l6ZVkoZ3JpZmZpbkJsYWNrV2hpdGUpICsgMC4xICogcyk7XG4gICAgICAgIGJpb0hlYWRlci5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luIC0gMC4wMDcgKiBzKTtcblxuICAgICAgICBzdHlsZVRleHQoYmlvVGV4dCwgbG9uZ1BhcmFncmFwaHNUZXh0RGV0YWlscyk7XG4gICAgICAgIGJpb1RleHQuc3R5bGUud2lkdGggPSBweChzIC8gMiAtIG1hcmdpbik7XG4gICAgICAgIGJpb1RleHQuc3R5bGUudG9wID0gcHgocG9zWShiaW9IZWFkZXIpKTtcbiAgICAgICAgYmlvVGV4dC5zdHlsZS5sZWZ0ID0gcHgocyAvIDIpO1xuXG4gICAgICAgIHN0eWxlVGV4dChyZWNlbnRQcm9qZWN0SGVhZGVyLCBiaWdUZXh0VGV4dERldGFpbHMpO1xuICAgICAgICByZWNlbnRQcm9qZWN0SGVhZGVyLnN0eWxlLnRvcCA9IHB4KHBvc1koYmlvVGV4dCkgKyBzaXplWShiaW9UZXh0KSArIDAuMTIgKiBzKTtcbiAgICAgICAgcmVjZW50UHJvamVjdEhlYWRlci5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luIC0gMC4wMDcgKiBzKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHsgcHJvamVjdE5hbWVUZXh0LCBwcm9qZWN0RGVzY3JpcHRpb25UZXh0IH0gb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0TmFtZVRleHQsIHsgbGV0dGVyU3BhY2luZzogMSwgZm9udFdlaWdodDogNTAwLCBjb2xvcjogd2hpdGUsIGZvbnRTaXplOiAwLjAyICogcyB9KTtcbiAgICAgICAgICAgIHN0eWxlVGV4dChwcm9qZWN0RGVzY3JpcHRpb25UZXh0LCBsb25nUGFyYWdyYXBoc1RleHREZXRhaWxzKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvblRleHQuc3R5bGUud2lkdGggPSBweChzIC8gMiAtIG1hcmdpbik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0c1dpdGhTcGFjaW5nID0gcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gW3Byb2plY3QucHJvamVjdE5hbWVUZXh0LCAwLjAwNiAqIHMsIHByb2plY3QucHJvamVjdERlc2NyaXB0aW9uVGV4dCwgMC4wMjggKiBzXSk7XG4gICAgICAgIGNvbnN0IFthbGlnbm1lbnRzLCBfXSA9IGFsaWduaW5nV2l0aEdhcHNZKHByb2plY3RzV2l0aFNwYWNpbmcpO1xuICAgICAgICBmb3IgKGNvbnN0IHsgZWxlbWVudCwgb2Zmc2V0IH0gb2YgYWxpZ25tZW50cykge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBweChwb3NZKHJlY2VudFByb2plY3RIZWFkZXIpICsgb2Zmc2V0KTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHB4KHMgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0UHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0ucHJvamVjdERlc2NyaXB0aW9uVGV4dDtcblxuICAgICAgICAvLyBjb250YWN0XG5cbiAgICAgICAgc3R5bGVUZXh0KHRlbGxNZSwgeyBsZXR0ZXJTcGFjaW5nOiAwLjMsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IHdoaXRlLCBmb250U2l6ZTogMC4wMTkgKiBzIH0pO1xuICAgICAgICB0ZWxsTWUuc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG4gICAgICAgIHRlbGxNZS5zdHlsZS50b3AgPSBweChwb3NZKGxhc3RQcm9qZWN0RGVzY3JpcHRpb24pICsgc2l6ZVkobGFzdFByb2plY3REZXNjcmlwdGlvbikgKyAwLjIgKiBzKTtcblxuICAgICAgICBzdHlsZVRleHQob25lQ29udmVyc2F0aW9uLCBzdWJHcmF5VGV4dERldGFpbHMpO1xuICAgICAgICBvbmVDb252ZXJzYXRpb24uc3R5bGUubGVmdCA9IHB4KG1hcmdpbik7XG4gICAgICAgIG9uZUNvbnZlcnNhdGlvbi5zdHlsZS50b3AgPSBweChwb3NZKHRlbGxNZSkgKyBzaXplWSh0ZWxsTWUpICsgMC4wMDggKiBzKTtcblxuICAgICAgICBiaWdLb3JlLnN0eWxlLndpZHRoID0gcHgocyAtIG1hcmdpbiAqIDIpO1xuICAgICAgICBiaWdLb3JlLnN0eWxlLmxlZnQgPSBweChtYXJnaW4pO1xuICAgICAgICBiaWdLb3JlLnN0eWxlLnRvcCA9IHB4KHBvc1kob25lQ29udmVyc2F0aW9uKSArIHNpemVZKG9uZUNvbnZlcnNhdGlvbikgKyAwLjEgKiBzKTtcblxuICAgICAgICBjb25zdCBsaW5rVGV4dERldGFpbHMgPSB7IGxldHRlclNwYWNpbmc6IDAuMywgZm9udFdlaWdodDogNDAwLCBjb2xvcjogXCJncmF5XCIsIGZvbnRTaXplOiAwLjAxOSAqIHMgfTtcbiAgICAgICAgc3R5bGVUZXh0KGVtYWlsLCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICBlbWFpbC5zdHlsZS5sZWZ0ID0gcHgobWFyZ2luKTtcbiAgICAgICAgZW1haWwuc3R5bGUudG9wID0gcHgocG9zWShiaWdLb3JlKSArIHNpemVZKGJpZ0tvcmUpICsgMC4wNSAqIHMpO1xuXG4gICAgICAgIHN0eWxlVGV4dChsaW5rZWRJbiwgbGlua1RleHREZXRhaWxzKTtcbiAgICAgICAgbGlua2VkSW4uc3R5bGUubGVmdCA9IHB4KG1hcmdpbiArIDAuMDcgKiBzKTtcbiAgICAgICAgbGlua2VkSW4uc3R5bGUudG9wID0gcHgocG9zWShiaWdLb3JlKSArIHNpemVZKGJpZ0tvcmUpICsgMC4wNSAqIHMpO1xuXG4gICAgICAgIHN0eWxlVGV4dChwcml2YWN5UG9saWN5LCBsaW5rVGV4dERldGFpbHMpO1xuICAgICAgICBwcml2YWN5UG9saWN5LnN0eWxlLmxlZnQgPSBweChzIC0gc2l6ZVgocHJpdmFjeVBvbGljeSkgLSBtYXJnaW4pO1xuICAgICAgICBwcml2YWN5UG9saWN5LnN0eWxlLnRvcCA9IHB4KHBvc1koYmlnS29yZSkgKyBzaXplWShiaWdLb3JlKSArIDAuMDUgKiBzKTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gYm9keVNpZy51cGRhdGUoKSwgMTAwMClcbn1cbiIsImltcG9ydCB7IGJvZHksIGZhZGVJbkFuaW1hdGlvbiwgbWV0YWwsIG1pZEJyb3duIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc0xhbmRzY2FwZSwgcHgsIHN0eWxlVGV4dCwgVGV4dERldGFpbHMgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkRm9yUGFnZSwgYXdhaXRMYXlvdXRGb3JJbWFnZUxvYWRpbmcgfSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50U1ZHLCBmZXRjaFNWRyB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0U3F1YXJlIHtcbiAgICBtYWpvcjogSFRNTEVsZW1lbnQ7XG4gICAgbWlub3JzOiBIVE1MRWxlbWVudFtdO1xufVxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNjcm9sbENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsQ29udGFpbmVyKTtcbihzY3JvbGxDb250YWluZXIuc3R5bGUgYXMgYW55KS5zY3JvbGxiYXJDb2xvciA9IGAke21pZEJyb3dufSAke21ldGFsfTU1YDtcblxuc2Nyb2xsQ29udGFpbmVyLm9ud2hlZWwgPSAoZSkgPT4ge1xuICAgIGlmIChpc0xhbmRzY2FwZSgpICYmICFlLnNoaWZ0S2V5KSBzY3JvbGxDb250YWluZXIuc2Nyb2xsQnkoeyBsZWZ0OiBlLmRlbHRhWSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNpemVTY3JvbGxDb250YWluZXJMYW5kc2NhcGUoKSB7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZ2V0U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc2Nyb2xsSGVpZ2h0ICogMC41O1xuXG4gICAgY29uc3QgdW5kZXJTY3JvbGxDb250YWluZXIgPSAoaW5uZXJIZWlnaHQgLSBzY3JvbGxIZWlnaHQpIC8gMjtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcHgoc2Nyb2xsSGVpZ2h0ICsgdW5kZXJTY3JvbGxDb250YWluZXIpOyAvLyBwbGFjZSBzY3JvbGwgYmFyIGF0IGJvdHRvbSBvZiBwYWdlXG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcHgoaW5uZXJXaWR0aCAtIHNjcm9sbExlZnQpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS50b3AgPSBweCgoaW5uZXJIZWlnaHQgLSBzY3JvbGxIZWlnaHQpIC8gMik7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBweChzY3JvbGxMZWZ0KTtcblxuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplU2Nyb2xsQ29udGFpbmVyUG9ydHJhaXQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBnZXRTY3JvbGxXaWR0aCgpO1xuICAgIGNvbnN0IGhlYWRlckJhckhlaWdodCA9IGdldEhlYWRlckJhckhlaWdodCgpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHB4KHNjcm9sbFdpZHRoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcHgoaW5uZXJIZWlnaHQgLSBoZWFkZXJCYXJIZWlnaHQpO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcHgoKGlubmVyV2lkdGggLSBzY3JvbGxXaWR0aCkgLyAyKTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUudG9wID0gcHgoaGVhZGVyQmFySGVpZ2h0KTtcblxuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVNjcm9sbENvbnRhaW5lckZ1bGwoKSB7XG4gICAgY29uc3QgaGVhZGVyQmFySGVpZ2h0ID0gZ2V0SGVhZGVyQmFySGVpZ2h0KCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcHgoaW5uZXJXaWR0aCk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHB4KGlubmVySGVpZ2h0IC0gaGVhZGVyQmFySGVpZ2h0KTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUubGVmdCA9IHB4KDApO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS50b3AgPSBweChoZWFkZXJCYXJIZWlnaHQpO1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPSAwO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyQmFySGVpZ2h0ID0gKCkgPT4ge1xuICAgIGlmIChpc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgIHJldHVybiAoaW5uZXJIZWlnaHQgLSBnZXRTY3JvbGxIZWlnaHQoKSkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbm5lckhlaWdodCAqIDAuMTtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsUGFkZGluZygpIHtcbiAgICBjb25zdCBzY3JvbGxQYWRkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JvbGxQYWRkaW5nLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbFBhZGRpbmcuc3R5bGUud2lkdGggPSBweCgxKTsgLy8gYW55IG5vbnplcm8gdGhpY2tuZXNzIGlzIGVub3VnaCB0byBleHRlbmQgc2Nyb2xsQ29udGFpbmVyXG4gICAgc2Nyb2xsUGFkZGluZy5zdHlsZS5oZWlnaHQgPSBweCgxKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxQYWRkaW5nKTtcbiAgICByZXR1cm4gc2Nyb2xsUGFkZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjcm9sbEltYWdlKHNyYzogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgY29uc3Qgc2Nyb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNjcm9sbEltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNjcm9sbEltYWdlLnNyYyA9IHNyYztcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5hbmltYXRpb24gPSBmYWRlSW5BbmltYXRpb24oKTtcbiAgICBzY3JvbGxJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGF3YWl0TGF5b3V0Rm9ySW1hZ2VMb2FkaW5nKHNjcm9sbEltYWdlKTtcbiAgICBhcHBlbmRDaGlsZEZvclBhZ2Uoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxJbWFnZSk7XG4gICAgcmV0dXJuIHNjcm9sbEltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsU3ZnKHNyYzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3ZnID0gY3JlYXRlRWxlbWVudFNWRyhcInN2Z1wiKTtcbiAgICBzY3JvbGxTdmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2Nyb2xsU3ZnLnN0eWxlLmFuaW1hdGlvbiA9IGZhZGVJbkFuaW1hdGlvbigpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IGZldGNoU1ZHKHNyYyk7XG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBmZXRjaGVkLmF0dHJpYnV0ZXMpIHNjcm9sbFN2Zy5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICAgICAgd2hpbGUgKGZldGNoZWQuZmlyc3RDaGlsZCkgc2Nyb2xsU3ZnLmFwcGVuZENoaWxkKGZldGNoZWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZldGNoQ29udGVudCgpO1xuXG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsU3ZnKTtcbiAgICByZXR1cm4gc2Nyb2xsU3ZnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGV4dCh0ZXh0OiBzdHJpbmcsIHBhcmVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzY3JvbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2Nyb2xsVGV4dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzY3JvbGxUZXh0LmlubmVySFRNTCA9IHRleHQ7IC8vIFpaWlogaW5uZXJUZXh0IHdvdWxkIGJlIGJldHRlclxuICAgIHNjcm9sbFRleHQuc3R5bGUuYW5pbWF0aW9uID0gZmFkZUluQW5pbWF0aW9uKCk7XG4gICAgYXBwZW5kQ2hpbGRGb3JQYWdlKHBhcmVudCwgc2Nyb2xsVGV4dCk7XG4gICAgcmV0dXJuIHNjcm9sbFRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiBhZGRUZXh0KHRleHQsIHNjcm9sbENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGxUZXh0U3F1YXJlKG1ham9yVGV4dDogc3RyaW5nLCAuLi5taW5vclRleHRzOiBzdHJpbmdbXSk6IFRleHRTcXVhcmUge1xuICAgIGNvbnN0IG1ham9yID0gYWRkU2Nyb2xsVGV4dChtYWpvclRleHQpO1xuICAgIGNvbnN0IG1pbm9ycyA9IG1pbm9yVGV4dHMubWFwKGFkZFNjcm9sbFRleHQpO1xuICAgIHJldHVybiB7IG1ham9yLCBtaW5vcnMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlU2Nyb2xsVGV4dFNxdWFyZSh7IG1ham9yLCBtaW5vcnMgfTogVGV4dFNxdWFyZSwgbWFqb3JUZXh0RGV0YWlsczogVGV4dERldGFpbHMsIG1pbm9yVGV4dERldGFpbHM6IFRleHREZXRhaWxzKSB7XG4gICAgc3R5bGVUZXh0KG1ham9yLCBtYWpvclRleHREZXRhaWxzKTtcbiAgICBmb3IgKGNvbnN0IG1pbm9yIG9mIG1pbm9ycykgc3R5bGVUZXh0KG1pbm9yLCBtaW5vclRleHREZXRhaWxzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gaW5uZXJIZWlnaHQgKiAwLjc7XG4gICAgLy8gcmV0dXJuIDEuMDIgKiBpbm5lckhlaWdodCAtIDAuMDAwNDg1ICogaW5uZXJIZWlnaHQgKiBpbm5lckhlaWdodDtcbiAgICAvLyByZXR1cm4gaW5uZXJIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgICBjb25zdCBTQ1JPTExfV0lEVEhfUFJPUE9SVElPTiA9IDE7XG4gICAgcmV0dXJuIGlubmVyV2lkdGggKiBTQ1JPTExfV0lEVEhfUFJPUE9SVElPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlcldpdGhpblNjcm9sbFkoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBTVkdTVkdFbGVtZW50LCBzY2FsZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcyA9IGdldFNjcm9sbEhlaWdodCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHMgKiBzY2FsZTtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHB4KGhlaWdodCk7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBweCgocyAtIGhlaWdodCkgLyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlcldpdGhpblNjcm9sbFgoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBTVkdTVkdFbGVtZW50LCBzY2FsZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcyA9IGdldFNjcm9sbFdpZHRoKCk7XG4gICAgY29uc3Qgd2lkdGggPSBzICogc2NhbGU7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHB4KHdpZHRoKTtcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBweCgocyAtIHdpZHRoKSAvIDIpO1xufVxuIiwiZXhwb3J0IGNsYXNzIFNpZ25hbCB7XHJcbiAgICBzdWJzY3JpYmVycyA9IG5ldyBTZXQ8KCkgPT4gdm9pZD4oKTtcclxuXHJcbiAgICBzdWJzY3JpYmUgPSAoc3Vic2NyaWJlcjogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuYWRkKHN1YnNjcmliZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKChzKSA9PiBzKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1bnN1YnNjcmliZSA9IChzdWJzY3JpYmVyOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHVuc3Vic2NyaWJlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuY2xlYXIoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3QoZnVuYzogKCkgPT4gdm9pZCwgb2JzZXJ2ZWRTaWduYWxzOiBTaWduYWxbXSkge1xyXG4gICAgb2JzZXJ2ZWRTaWduYWxzLmZvckVhY2goKG8pID0+IG8uc3Vic2NyaWJlKGZ1bmMpKTtcclxuICAgIGZ1bmMoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBlZmZlY3QsIFNpZ25hbCB9IGZyb20gXCIuL3NpZ25hbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcmluZyB7XHJcbiAgICBwb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgdGFyZ2V0OiBudW1iZXI7XHJcbiAgICB2ZWxvY2l0eSA9IDA7XHJcbiAgICBkYW1waW5nID0gMDtcclxuICAgIHN0aWZmbmVzcyA9IDA7XHJcbiAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgIG9uUmVzdCA9ICgpID0+IHt9O1xyXG4gICAgb25VbnJlc3QgPSAoKSA9PiB7fTtcclxuXHJcbiAgICAvLyBteCcnIC0gYngnID0ga3hcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBpbml0aWFsVmFsdWU7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBpbml0aWFsVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGljayhkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYWNjZWxlcmF0aW9uID0gdGhpcy5zdGlmZm5lc3MgKiAodGhpcy50YXJnZXQgLSB0aGlzLnBvc2l0aW9uKSAtIHRoaXMuZGFtcGluZyAqIHRoaXMudmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSArPSBhY2NlbGVyYXRpb24gKiBkdDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uICs9IHRoaXMudmVsb2NpdHkgKiBkdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGlmZm5lc3NDcml0aWNhbChzdGlmZm5lc3M6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RpZmZuZXNzID0gc3RpZmZuZXNzO1xyXG4gICAgICAgIHRoaXMuZGFtcGluZyA9IE1hdGguc3FydCg0ICogc3RpZmZuZXNzKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9BTklNQVRJT05fVE9MRVJBTkNFID0gMC4wMTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlU3ByaW5nKHNwcmluZzogU3ByaW5nLCBzaWduYWw6IFNpZ25hbCkge1xyXG4gICAgaWYgKHNwcmluZy5pc0FuaW1hdGluZykgcmV0dXJuO1xyXG5cclxuICAgIHNwcmluZy5pc0FuaW1hdGluZyA9IHRydWU7XHJcbiAgICBzcHJpbmcub25VbnJlc3QoKTtcclxuXHJcbiAgICBsZXQgbGFzdE1pbGxpcyA9IDA7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlyc3RGcmFtZSk7XHJcbiAgICBmdW5jdGlvbiBmaXJzdEZyYW1lKG1pbGxpczogbnVtYmVyKSB7XHJcbiAgICAgICAgbGFzdE1pbGxpcyA9IG1pbGxpcztcclxuICAgICAgICB0aWNrU3ByaW5nKG1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGlja1NwcmluZyhtaWxsaXM6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBtaWxsaXMgLSBsYXN0TWlsbGlzO1xyXG4gICAgICAgIGxhc3RNaWxsaXMgPSBtaWxsaXM7XHJcblxyXG4gICAgICAgIHNwcmluZy50aWNrKHN0ZXAgLyAxMDAwKTtcclxuICAgICAgICBzaWduYWwudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhzcHJpbmcudGFyZ2V0IC0gc3ByaW5nLnBvc2l0aW9uKSA8IERFRkFVTFRfQU5JTUFUSU9OX1RPTEVSQU5DRSAmJiBNYXRoLmFicyhzcHJpbmcudmVsb2NpdHkpIDwgREVGQVVMVF9BTklNQVRJT05fVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgIHNwcmluZy5wb3NpdGlvbiA9IHNwcmluZy50YXJnZXQ7XHJcbiAgICAgICAgICAgIHNwcmluZy52ZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHNwcmluZy5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzaWduYWwudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHNwcmluZy5vblJlc3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2tTcHJpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZVdpdGhTcHJpbmcoc3RpZmZuZXNzOiBudW1iZXIsIG92ZXJUaW1lOiAodGltZTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICBjb25zdCBzcHJpbmcgPSBuZXcgU3ByaW5nKDApO1xyXG4gICAgICAgIGNvbnN0IHNwcmluZ1NpZyA9IG5ldyBTaWduYWwoKTtcclxuICAgICAgICBzcHJpbmcuc2V0U3RpZmZuZXNzQ3JpdGljYWwoc3RpZmZuZXNzKTtcclxuICAgICAgICBzcHJpbmcudGFyZ2V0ID0gMTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IG92ZXJUaW1lKHNwcmluZy5wb3NpdGlvbik7XHJcbiAgICAgICAgc3ByaW5nLm9uUmVzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc3ByaW5nU2lnLnVuc3Vic2NyaWJlKGFuaW1hdGUpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZWZmZWN0KGFuaW1hdGUsIFtzcHJpbmdTaWddKTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZVNwcmluZyhzcHJpbmcsIHNwcmluZ1NpZyk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc2xlZXAgPSAoZGVsYXk6IG51bWJlcikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwYWNlVG9GaWxlKHM6IHN0cmluZykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoXCIgXCIsIFwiLVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRTVkc8SyBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwPihxdWFsaWZpZWROYW1lOiBLKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHF1YWxpZmllZE5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJsYWNlZDxULCBXaXRoaW4+KGl0ZW1zOiBUW10sIHdpdGhpbjogV2l0aGluKSB7XG4gICAgY29uc3QgaXRlbXNJbnRlcmxhY2VkID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zSW50ZXJsYWNlZC5wdXNoKGl0ZW0pO1xuICAgICAgICBpdGVtc0ludGVybGFjZWQucHVzaCh3aXRoaW4pO1xuICAgIH1cbiAgICBpdGVtc0ludGVybGFjZWQucG9wKCk7XG4gICAgcmV0dXJuIGl0ZW1zSW50ZXJsYWNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFJhbmdlKG46IG51bWJlciwgc3RhcnQxOiBudW1iZXIsIHN0b3AxOiBudW1iZXIsIHN0YXJ0MjogbnVtYmVyLCBzdG9wMjogbnVtYmVyKSB7XG4gICAgcmV0dXJuICgobiAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKSAqIChzdG9wMiAtIHN0YXJ0MikgKyBzdGFydDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvck9uSG92ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbG9yOiBzdHJpbmcsIGhvdmVyQ29sb3I6IHN0cmluZykge1xuICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgICBlbGVtZW50Lm9ubW91c2VvdmVyID0gKCkgPT4gKGVsZW1lbnQuc3R5bGUuY29sb3IgPSBob3ZlckNvbG9yKTtcbiAgICBlbGVtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IChlbGVtZW50LnN0eWxlLmNvbG9yID0gY29sb3IpO1xuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiY29sb3IgMC4ycyBlYXNlLW91dFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50OiBFbGVtZW50LCBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTVkcoZmV0Y2hTdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hTdHJpbmcpO1xuICAgIGNvbnN0IHN2Z0NvbnRlbnQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3ZnQ29udGVudCwgXCJpbWFnZS9zdmcreG1sXCIpLmRvY3VtZW50RWxlbWVudCBhcyB1bmtub3duIGFzIFNWR1NWR0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZFNWRyhzdmc6IFNWR1NWR0VsZW1lbnQsIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3ZnLmdldEVsZW1lbnRCeUlkKGlkKSBhcyBTVkdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSWNvblNWRyhsb2NhbFNpemU6IG51bWJlcikge1xuICAgIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50U1ZHKFwic3ZnXCIpO1xuICAgIGNvbnN0IHBhZCA9IDQ7XG4gICAgaWNvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBpY29uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGljb24uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgJHstcGFkfSAkey1wYWR9ICR7bG9jYWxTaXplICsgMiAqIHBhZH0gJHtsb2NhbFNpemUgKyAyICogcGFkfWApO1xuICAgIHJldHVybiBpY29uO1xufVxuXG5leHBvcnQgY29uc3QgbWFrZUxpbmUgPSAoc3ZnOiBTVkdTVkdFbGVtZW50LCBzdHJva2VXaWR0aDogbnVtYmVyKSA9PiAoKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IGNyZWF0ZUVsZW1lbnRTVkcoXCJsaW5lXCIpO1xuICAgIHNldEF0dHJpYnV0ZXMobGluZSwgeyBcInN0cm9rZS13aWR0aFwiOiBzdHJva2VXaWR0aCB9KTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgcmV0dXJuIGxpbmU7XG59O1xuXG5leHBvcnQgY29uc3QgbWFrZVBvbHlsaW5lID0gKHN2ZzogU1ZHU1ZHRWxlbWVudCwgc3Ryb2tlV2lkdGg6IG51bWJlcikgPT4gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSBjcmVhdGVFbGVtZW50U1ZHKFwicG9seWxpbmVcIik7XG4gICAgc2V0QXR0cmlidXRlcyhsaW5lLCB7IFwic3Ryb2tlLXdpZHRoXCI6IHN0cm9rZVdpZHRoLCBmaWxsOiBcIm5vbmVcIiB9KTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgcmV0dXJuIGxpbmU7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZEhvbWVQYWdlLCBhZGROYXZCYXIgfSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5cbmFkZE5hdkJhcigpO1xuYWRkSG9tZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==