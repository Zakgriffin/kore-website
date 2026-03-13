import { black, bodySig, metal, tileBrown, white } from "../constants";
import { aligningWithGapsY, centerWithGapY, centerX, isLandscape, posEndX, posEndY, posX, posY, px, setImageSizeX, setImageSizeY, setPosX, setPosY, setSizeX, setSizeY, sizeX, sizeY, styleText } from "../layout";
import { Modal } from "../modal";
import { appendChildForPage, registerUpdateLayout } from "../page";
import { addScrollImage, addScrollText, addText, getHeaderBarHeight, getScrollWidth, resizeScrollContainerFull, scrollContainer } from "../scroll";
import { effect, Signal } from "../signal";
import { animateSpring, Spring } from "../spring";
import { colorOnHover, createIconSVG, makeLine, setAttributes } from "../util";

const T = -10000;

function layoutSectionLine(sectionLine: HTMLElement, y: number) {
    const s = getScrollWidth();
    setSizeY(sectionLine, 0.001 * s);
    setSizeX(sectionLine, innerWidth);
    setPosY(sectionLine, y);
}

interface NavItem {
    name: string;
    barElement: HTMLElement;
    jumpElement: HTMLElement;
}

const navItemFromString = {
    about: {} as NavItem,
    services: {} as NavItem,
    bio: {} as NavItem,
    recentProjects: {} as NavItem,
    contact: {} as NavItem,
};

function giveHover(element: HTMLElement, enterColor: string, leaveColor: string) {
    element.style.cursor = "pointer";
    element.style.transition = "color 0.2s";
    element.onmouseenter = () => (element.style.color = enterColor);
    element.onmouseleave = () => (element.style.color = leaveColor);
}

export function addMenuButton() {
    const sz = 60;
    const menuButton = createIconSVG(sz);
    menuButton.style.stroke = white;
    const menuLine = makeLine(menuButton, 4);
    const line1 = menuLine();
    const line2 = menuLine();
    const line3 = menuLine();

    const menuModal = new Modal(
        "#000000ee",
        (backdrop) => {
            const menuPageNavs: HTMLElement[] = [];
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
                    const s = getScrollWidth();
                    styleText(menuPageNav, { letterSpacing: 0.005 * s, fontWeight: 500, color: white, fontSize: 0.06 * s, fontFamily: "Roboto" });
                    setPosX(menuPageNav, s / 2 - sizeX(menuPageNav) / 2);
                }
                centerWithGapY(menuPageNavs, innerHeight * 0.08, innerHeight / 2);
            };

            menuButton.style.zIndex = "1";
        },
        (time) => {
            const s = time * sz;
            setAttributes(line1, { x1: 0, y1: 0, x2: sz, y2: s });
            line2.style.opacity = (sz - s) / sz + "";
            setAttributes(line2, { x1: 0, y1: sz / 2, x2: sz, y2: sz / 2 });
            setAttributes(line3, { x1: 0, y1: sz, x2: sz, y2: sz - s });
        },
        () => {
            menuButton.style.zIndex = "0";
        }
    );

    menuButton.onclick = () => {
        if (menuModal.isOpening) {
            menuModal.beginClose();
        } else {
            menuModal.beginOpen();
        }
    };

    document.body.appendChild(menuButton);

    effect(() => {
        if (isLandscape()) {
            setSizeX(menuButton, 0);
            setSizeY(menuButton, 0);
            setPosX(menuButton, 0);
            setPosY(menuButton, 0);
        } else {
            const s = getScrollWidth();
            const margin = 0.09 * s;

            const size = 0.07 * s;
            setSizeX(menuButton, size);
            setSizeY(menuButton, size);

            setPosX(menuButton, innerWidth - size - margin);
            setPosY(menuButton, (getHeaderBarHeight() - size) / 2);
        }
    }, [bodySig]);
}

export function addNavBar() {
    /// ZZZZ pull this out with one in scroll.ts
    function addImage(src: string) {
        const scrollImage = document.createElement("img");
        scrollImage.style.position = "absolute";
        scrollImage.src = src;
        scrollImage.style.cursor = "pointer";

        scrollImage.onload = () => bodySig.update(); // ZZZZ stupid

        document.body.appendChild(scrollImage);
        return scrollImage;
    }

    const koreLogo = addImage("big-kore.svg");

    const tagline = document.createElement("img");
    tagline.style.position = "absolute";
    tagline.src = "tagline.svg";
    document.body.appendChild(tagline);

    function addNavItem(navItemName: string) {
        const barElement = document.createElement("p");
        barElement.style.whiteSpace = "nowrap";
        barElement.innerText = navItemName;

        const navItem = {} as NavItem;
        navItem.barElement = barElement;
        navItem.name = navItemName;

        barElement.onclick = () => {
            navItem.jumpElement.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        giveHover(barElement, metal, white);

        document.body.appendChild(barElement);
        return navItem;
    }

    navItemFromString.about = addNavItem("ABOUT");
    navItemFromString.services = addNavItem("SERVICES");
    navItemFromString.bio = addNavItem("BIO");
    navItemFromString.recentProjects = addNavItem("RECENT PROJECTS");
    navItemFromString.contact = addNavItem("CONTACT");

    const barElements = Object.values(navItemFromString).map((b) => b.barElement);

    effect(() => {
        if (isLandscape()) {
            const s = getScrollWidth();
            const margin = 0.05 * s;

            const navBottom = 0.05 * s;

            setSizeX(koreLogo, 0.08 * s);
            setPosY(koreLogo, navBottom - sizeY(koreLogo) - 0.002 * s);
            setPosX(koreLogo, margin);

            setSizeX(tagline, 0.17 * s);
            setPosY(tagline, navBottom - sizeY(tagline));
            setPosX(tagline, posEndX(koreLogo) + 0.018 * s);

            const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: white, fontSize: 0.01 * s, fontFamily: "Roboto" };

            for (let i = barElements.length - 1; i >= 0; i--) {
                const navItem = barElements[i];
                const nextNavItem = barElements[i + 1];

                styleText(navItem, navItemTextDetails);
                if (nextNavItem) setPosX(navItem, posX(nextNavItem) - sizeX(navItem) - 0.02 * s);
                else setPosX(navItem, s - sizeX(navItem) - 0.07 * s);

                setPosY(navItem, navBottom - sizeY(navItem));
            }
        } else {
            const s = getScrollWidth();
            const margin = 0.09 * s; // ZZZZ take out

            setSizeX(koreLogo, 0.3 * s);
            setPosX(koreLogo, margin);
            setPosY(koreLogo, (getHeaderBarHeight() - sizeY(koreLogo)) / 2);

            setSizeX(tagline, T);
            setPosX(tagline, T);
            setPosY(tagline, T);

            const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: white, fontSize: 0.01 * s, fontFamily: "Roboto" };

            for (let i = barElements.length - 1; i >= 0; i--) {
                const navItem = barElements[i];
                const nextNavItem = barElements[i + 1];

                styleText(navItem, navItemTextDetails);
                if (nextNavItem) setPosX(navItem, T);
                else setPosX(navItem, T);

                setPosY(navItem, T);
            }
        }
    }, [bodySig]);
}

export function addHomePage() {
    function addSectionLine() {
        const sectionLine = document.createElement("div");
        sectionLine.style.position = "absolute";
        sectionLine.style.background = "#111111";

        appendChildForPage(scrollContainer, sectionLine);
        return sectionLine;
    }

    const headlineText = addScrollText("PROTECT YOURSELF FROM PROJECT HAZARDS.");
    const travelingThePath = addScrollText("Travelling the path unguided can cost you.");

    const logo = addScrollImage("logo.svg");
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

    const aboutName = addScrollText("SCOTT G. GRIFFIN");
    navItemFromString.about.jumpElement = aboutName;
    const aboutDescription = addScrollText("Founder<br><br>With 37 years in the trenches of broadcast, AV, and media systems integration, I’ve built my career protecting clients from being steamrolled by complexity, bad planning, and unrealistic promises.<br><br>I’m not here to play nice — I’m here to make sure things get done right.<br><br>As a Subject Matter Expert and Owner’s Rep, I bring clear-eyed strategy, engineering leadership, and a no-BS approach to complex projects. From early-stage visioning through final implementation, I make sure my clients are fully informed and stay in control — without being buried in technical noise or vendor spin.<br><br>I’ve led high-profile projects for the NBA, WWE, Univision, Disney, and more. My background includes running a successful integration firm, managing engineering teams of 50+, and overseeing some of the largest media facility builds of the last 30 years. Whether we’re talking network ops, cloud workflows, post-production, or studio ops workflows — I’ve done it, and I bring the scars (and lessons) with me.<br><br>My job is simple: make sure my clients are protected, respected, and have delivered exactly what they need—nothing more, and absolutely nothing less.");
    const portrait = addScrollImage("papa.png");

    const sectionLine2 = addSectionLine();

    const feelConfident = addScrollText("FEEL CONFIDENT KNOWING YOU’VE GOT IT ALL COVERED.");
    navItemFromString.services.jumpElement = feelConfident;

    let skillTileCountX = 1;
    let skillTileCountY = 1;
    const springSig = new Signal();
    function addSkillTile(title: string, description: string) {
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.background = metal;
        container.style.overflow = "hidden";

        appendChildForPage(scrollContainer, container);
        const titleText = addText(title, container);
        const descriptionText = addText(description, container);
        descriptionText.style.opacity = "0";
        descriptionText.style.transition = "opacity 0.25s";

        const springX = new Spring(0);
        const springY = new Spring(0);
        const springSizeY = new Spring(1);
        springX.setStiffnessCritical(200);
        springY.setStiffnessCritical(200);
        springSizeY.setStiffnessCritical(200);

        function tileAt(x: number, y: number) {
            return skillTiles.find((s) => s.springX.target === x && s.springY.target === y)!;
        }

        function flipTiles(spring1: Spring, spring2: Spring) {
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

            function slideHoleY(goalY: number) {
                const newDiffY = goalY - holeSkillTile.springY.target;
                const directionY = newDiffY > 0 ? 1 : -1;
                for (let y = holeSkillTile.springY.target; y !== goalY; y += directionY) {
                    flipTiles(
                        tileAt(holeSkillTile.springX.target, y).springY, //
                        tileAt(holeSkillTile.springX.target, y + directionY).springY
                    );
                }
                recalculateDiffs();
            }
            function slideHoleX(goalX: number) {
                const newDiffX = goalX - holeSkillTile.springX.target;
                const directionX = newDiffX > 0 ? 1 : -1;
                for (let x = holeSkillTile.springX.target; x !== goalX; x += directionX) {
                    flipTiles(
                        tileAt(x, holeSkillTile.springY.target).springX, //
                        tileAt(x + directionX, holeSkillTile.springY.target).springX
                    );
                }
                recalculateDiffs();
            }

            if (startedLow) slideHoleY(skillTileCountY - 2);
            else if (holeDiffY > 0) slideHoleY(holeGoalY);

            if (holeDiffX !== 0) slideHoleX(holeGoalX);

            if (startedLow) slideHoleY(holeGoalY);
            else if (holeDiffY < 0) slideHoleY(holeGoalY);

            for (const skillTile of skillTiles) {
                if (skillTile === holeSkillTile) continue;
                skillTile.container.style.background = metal;
                skillTile.springSizeY.target = 1;
                skillTile.descriptionText.style.opacity = "0";
            }

            container.style.background = tileBrown;
            springSizeY.target = 2;

            for (const skillTile of skillTiles) {
                animateSpring(skillTile.springX, skillTile.springSig);
                animateSpring(skillTile.springY, skillTile.springSig);
                animateSpring(skillTile.springSizeY, skillTile.springSig);
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
        addSkillTile("Owner<br>Representation", "KORE serves as your eyes, ears, and advocates, providing concierge-level guidance through every step of your project. We keep vendors and contractors honest, making sure nothing slips through the cracks. We begin by aligning all stakeholders early on, then defend your position throughout the process."), //
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

    function layoutTiles(tileSize: number, tileGap: number, tilePosX: (x: number) => number, tilePosY: (y: number) => number) {
        for (let i = 0; i < skillTiles.length; i++) {
            const skillTile = skillTiles[i];
            skillTile.springX.position = skillTile.springX.target = i % skillTileCountX;
            skillTile.springY.position = skillTile.springY.target = i % skillTileCountY;
        }

        springSig.unsubscribeAll();
        effect(() => {
            for (const skillTile of skillTiles) {
                const { container, titleText, descriptionText, springX, springY, springSizeY } = skillTile;

                setSizeX(container, tileSize);
                setSizeY(container, tileSize * springSizeY.position + (springSizeY.position - 1) * tileGap);

                setPosX(container, tilePosX(springX.position));
                setPosY(container, tilePosY(springY.position));

                // styleText(titleText, { letterSpacing: 0.0004 * s, fontWeight: 500, color: black, fontSize: 0.05 * s, fontFamily: "Roboto" });
                styleText(titleText, { letterSpacing: 0.0004 * tileSize, fontWeight: 500, color: black, fontSize: 0.1 * tileSize, fontFamily: "Roboto" });
                setPosX(titleText, 0.08 * tileSize);
                setPosY(titleText, tileSize / 2 - sizeY(titleText) / 2);

                // styleText(descriptionText, { letterSpacing: 0.0004 * s, fontWeight: 400, color: black, fontSize: 0.025 * s, lineHeight: 0.04 * s, fontFamily: "Roboto" });
                styleText(descriptionText, { letterSpacing: 0.001 * tileSize, fontWeight: 400, color: black, fontSize: 0.07 * tileSize, lineHeight: 0.095 * tileSize, fontFamily: "Roboto" });
                setSizeX(descriptionText, tileSize * 0.85);
                setPosX(descriptionText, 0.08 * tileSize);
                setPosY(descriptionText, 0.7 * tileSize);
            }
        }, [springSig]);
    }

    const sectionLine3 = addSectionLine();

    const bigNames = addScrollText("BIG NAMES<br>YOU KNOW");
    const hasTackled = addScrollText("<strong>Scott Griffin</strong> has tackled some of the most complex projects for some of the largest media companies in the world. He has seen it all, and you can tap into that experience.");

    const bigNameClients = [
        "ABS/CBN", //
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

    const bigNameClientTexts = bigNameClients.map((bigNameClient) => addScrollText(bigNameClient));

    const sectionLine4 = addSectionLine();

    const griffinBlackWhiteLandscape = addScrollImage("griffin-black-white-landscape.png");
    const griffinBlackWhitePortrait = addScrollImage("griffin-black-white-portrait.jpg");
    const griffinBlackWhiteText = addScrollText("I’ve been in this industry for more than 35 years, and I can’t think of one client who was able to successfully navigate the gauntlet that is a large media facility project without the support of an experienced, knowledgeable, and aggressive project facilitator.");
    griffinBlackWhiteText.style.fontStyle = "italic";

    const sectionLine5 = addSectionLine();

    // bio

    const bioHeader = addScrollText("HOW WE<br>GOT HERE");
    navItemFromString.bio.jumpElement = bioHeader;
    const bioText = addScrollText("I’ve always focused on the conceptualization and implementation of advanced technology solutions for facility and event systems integration. Along the way, that’s meant serving as design engineer, project manager, sales engineer, planning consultant, business builder/owner, and team leader.<br><br>It all started in technical theater, where I worked as a master electrician, lighting designer, sound designer, and front-of-house sound engineer in summer stock, touring, and off-Broadway theater. Following several years of freelance theatrical and concert technical support, I landed at AF Associates, a broadcast systems integrator.<br><br>After working on systems engineering efforts for NBC’s Today Show, CNBC, and USA Network, I moved to Sony Systems Integration. There, I oversaw design/builds for the Tribune Station Group and supported CBS Broadcast Operations & Engineering<br><br>At this point, I teamed up with two partners to launch The Systems Group. TSG specialized in large-scale, fast-track systems integration projects for the broadcast industry. During our 20-year run, we designed and built facilities for Serious Satellite Radio, MTV Networks, Syracuse University Newhouse, NFL Films Audio, NBCU, and Corus Entertainment, plus 200+ systems integration projects worldwide.<br><br>When TSG was acquired by Diversified in 2016, I established a small studio within the larger corporation, which allowed me to focus on critical early-stage project conceptualization, planning, and budgeting. Throughout those years, I was able to work shoulder to shoulder with some of the best and brightest across a wide range of disciplines in the media and entertainment industry. And the rest, as they say, is history.<br><br>Today, KORE offers a radically streamlined way to leverage a career’s worth of expertise, experience, and extensive industry relationships to help make sure your next project runs smoothly from planning to acceptance.<br><br>I hold a Bachelor of Science in Electrical Engineering from Penn State University, and am a member of SMPTE, AES, and SVG. I’m also kind to animals.");

    const sectionLine6 = addSectionLine();

    // recent projects

    const recentProjectHeader = addScrollText("RECENT<br>PROJECTS");
    navItemFromString.recentProjects.jumpElement = recentProjectHeader;

    function addProjectPair(projectName: string, projectDescription: string) {
        const projectNameText = addScrollText(projectName);
        const projectDescriptionText = addScrollText(projectDescription);

        return { projectNameText, projectDescriptionText };
    }

    const projects = [addProjectPair("NBA Entertainment", "Architectural planning and budgeting for new content operations center, replay operations center, and expansion of the NBA Network."), addProjectPair("Televisa/Univision Network", "System conceptualization, applications engineering, project budgeting, and account representation for the network operations center."), addProjectPair("Western Kentucky University", "PBS and NPR stations, College of Communications production and post facility, including ties to campus sports and presentation venues, development of a complete system design for three control rooms, two TV studios, four radio studios, and post-production operations."), addProjectPair("World Wrestling Entertainment", "New HQ digital media facility design and budgeting for production, post, transmission, and event coordination, plus formal analysis for Phase 2 workflow optimization and orchestration layer."), addProjectPair("Disney/Galaxy Consolidation", "The largest network operations center facility ever built in the US. It includes ABC Network, WABC TV, ESPN NY, Marvel Entertainment, and Disney Screening Theater. Scott oversaw contract administration across the entire project.")];

    // contact

    const sectionLine7 = addSectionLine();

    const tellMe = addScrollText("Tell me about your project.");
    navItemFromString.contact.jumpElement = tellMe;
    const oneConversation = addScrollText("One conversation won’t cost you anything. Not having one might.");
    const bigKore = addScrollImage("big-kore.svg");

    const email = addScrollText("Email");
    giveHover(email, white, metal);
    email.onclick = () => window.location.assign("mailto:lairofthegriffin@gmail.com");

    const linkedIn = addScrollText("LinkedIn");
    giveHover(linkedIn, white, metal);
    linkedIn.style.cursor = "pointer";
    linkedIn.onclick = () => {
        window.open("https://www.linkedin.com/in/sggriffin", "_blank");
    };

    const privacyPolicy = addScrollText("Privacy Policy © 2026 KORE SME LLC");

    const sectionLine8 = addSectionLine();

    registerUpdateLayout(() => {
        if (isLandscape()) {
            resizeScrollContainerFull();
            const s = getScrollWidth();

            const margin = 0.05 * s;
            const betweenMargin = s - margin * 2;
            const fromTop = 0.031 * s;

            const bigTextTextDetails = { fontWeight: 300, color: white, fontSize: 0.075 * s, lineHeight: 0.084 * s, fontFamily: "Roboto" };
            const subGrayTextDetails = { fontWeight: 400, color: metal, fontSize: 0.019 * s, fontFamily: "Roboto" };

            const bigTextNudge = 0.004 * s;
            const sectionLineGap = 0.04 * s;
            const gutter = 0.02 * s;
            const gutteredColumn = s / 2 + gutter;
            const gutteredWidthBetween = s / 2 - 2 * gutter;

            const bigTextToSubtextGap = 0.02 * s;

            styleText(headlineText, bigTextTextDetails);
            setSizeX(headlineText, 0.4 * s);
            setPosX(headlineText, margin - bigTextNudge);
            setPosY(headlineText, fromTop);

            styleText(travelingThePath, subGrayTextDetails);
            setPosX(travelingThePath, margin);
            setPosY(travelingThePath, posEndY(headlineText) + bigTextToSubtextGap);

            setImageSizeY(logo, sizeY(headlineText) * 1.04);
            setPosX(logo, innerWidth - logo.scrollWidth - margin);
            setPosY(logo, fromTop - 0.03 * s);

            layoutSectionLine(sectionLine1, posEndY(travelingThePath) + sectionLineGap);

            // about

            const longParagraphsTextDetails = { letterSpacing: 0.001 * s, fontWeight: 300, color: white, fontSize: 0.01 * s, lineHeight: 0.02 * s, fontFamily: "Merriweather" };
            styleText(aboutDescription, longParagraphsTextDetails);

            skillTileCountX = 5;
            skillTileCountY = 2;
            const scrollWidth = innerWidth - 2 * margin; // ZZZZ another scroll width?
            const tileGap = 0.015 * s;
            const tileSize = (scrollWidth - tileGap * (skillTileCountX - 1)) / skillTileCountX;

            function tilePosX(x: number) {
                return margin + (tileSize + tileGap) * x;
            }

            function tilePosY(y: number) {
                return (tileSize + tileGap) * y + posEndY(feelConfident) + 0.04 * s;
            }

            const aboutLeft = tilePosX(2);
            styleText(aboutName, { letterSpacing: 0.001 * s, fontWeight: 500, color: white, fontSize: 0.02 * s, fontFamily: "Roboto" });
            setPosY(aboutName, posY(sectionLine1) + sectionLineGap);
            setPosX(aboutName, aboutLeft);

            setSizeX(aboutDescription, s - aboutLeft - margin);
            setPosY(aboutDescription, posEndY(aboutName));
            setPosX(aboutDescription, aboutLeft);

            setImageSizeY(portrait, sizeY(aboutName) + sizeY(aboutDescription));
            setPosY(portrait, posY(aboutName));
            setPosX(portrait, margin);

            layoutSectionLine(sectionLine2, posEndY(aboutDescription) + sectionLineGap);

            // tiles

            const feelConfidentTextDetails = { fontWeight: 300, color: white, fontSize: 0.028 * s, fontFamily: "Roboto" };
            styleText(feelConfident, feelConfidentTextDetails);
            setSizeX(feelConfident, betweenMargin);
            setPosY(feelConfident, posY(sectionLine2) + sectionLineGap);
            setPosX(feelConfident, margin);

            layoutTiles(tileSize, tileGap, tilePosX, tilePosY);
            skillTiles[2].container.click();

            layoutSectionLine(sectionLine3, tilePosY(1) + tileSize + sectionLineGap);

            styleText(bigNames, bigTextTextDetails);
            setPosY(bigNames, posY(sectionLine3) + sectionLineGap);
            setPosX(bigNames, margin - bigTextNudge);

            const hasTackedTextDetails = { fontWeight: 300, color: metal, fontSize: 0.014 * s, lineHeight: 0.025 * s, fontFamily: "Roboto" };
            styleText(hasTackled, hasTackedTextDetails);
            setSizeX(hasTackled, sizeX(bigNames));
            setPosY(hasTackled, posEndY(bigNames) + bigTextToSubtextGap);
            setPosX(hasTackled, margin);

            const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1];
            const bigNamesTextDetails = { fontWeight: 300, color: white, fontSize: 0.018 * s, fontFamily: "Roboto" };

            const halfClientLength = Math.ceil(bigNameClientTexts.length / 2);
            for (let i = 0; i < bigNameClientTexts.length; i++) {
                const x = Math.floor(i / halfClientLength);
                const y = i % halfClientLength;
                const o = bigNameClientTexts[i];

                styleText(o, bigNamesTextDetails);

                setPosY(o, posY(bigNames) + 0.01 * s + 0.032 * y * s);
                setPosX(o, gutteredColumn + 0.22 * x * s);
            }

            layoutSectionLine(sectionLine4, posEndY(lastBigName) + sectionLineGap);

            setImageSizeX(griffinBlackWhitePortrait, 0);

            setImageSizeX(griffinBlackWhiteLandscape, s);
            setPosX(griffinBlackWhiteLandscape, 0);
            setPosY(griffinBlackWhiteLandscape, posEndY(sectionLine4) + sectionLineGap);

            const griffinBlackWhiteTextDetails = { fontWeight: 400, color: black, fontSize: 0.02 * s, lineHeight: 0.04 * s, fontFamily: "Merriweather" };
            styleText(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
            setSizeX(griffinBlackWhiteText, gutteredWidthBetween);
            setPosX(griffinBlackWhiteText, gutteredColumn);
            setPosY(griffinBlackWhiteText, posY(griffinBlackWhiteLandscape) + sizeY(griffinBlackWhiteLandscape) / 2 - sizeY(griffinBlackWhiteText) / 2);

            layoutSectionLine(sectionLine5, posEndY(griffinBlackWhiteLandscape) + sectionLineGap);

            // bio

            styleText(bioHeader, bigTextTextDetails);
            setPosY(bioHeader, posEndY(sectionLine5) + sectionLineGap);
            setPosX(bioHeader, margin - bigTextNudge);

            styleText(bioText, longParagraphsTextDetails);
            setSizeX(bioText, gutteredWidthBetween);
            setPosY(bioText, posY(bioHeader));
            setPosX(bioText, gutteredColumn);

            layoutSectionLine(sectionLine6, posEndY(bioText) + sectionLineGap);

            styleText(recentProjectHeader, bigTextTextDetails);
            setPosY(recentProjectHeader, posEndY(sectionLine6) + sectionLineGap);
            setPosX(recentProjectHeader, margin - bigTextNudge);

            for (const { projectNameText, projectDescriptionText } of projects) {
                styleText(projectNameText, { letterSpacing: 0.001 * s, fontWeight: 500, color: white, fontSize: 0.02 * s, fontFamily: "Roboto" });
                styleText(projectDescriptionText, longParagraphsTextDetails);
                setSizeX(projectDescriptionText, gutteredWidthBetween);
            }

            const projectsWithSpacing = projects.flatMap((project) => [project.projectNameText, 0.006 * s, project.projectDescriptionText, 0.028 * s]);
            const [alignments, _] = aligningWithGapsY(projectsWithSpacing);
            for (const { element, offset } of alignments) {
                setPosY(element, posY(recentProjectHeader) + offset);
                setPosX(element, gutteredColumn);
            }
            const lastProjectDescription = projects[projects.length - 1].projectDescriptionText;

            // contact

            layoutSectionLine(sectionLine7, posEndY(lastProjectDescription) + sectionLineGap);

            styleText(tellMe, { letterSpacing: 0.3, fontWeight: 400, color: white, fontSize: 0.019 * s, fontFamily: "Roboto" });
            setPosX(tellMe, margin);
            setPosY(tellMe, posEndY(sectionLine7) + sectionLineGap);

            styleText(oneConversation, subGrayTextDetails);
            setPosX(oneConversation, margin);
            setPosY(oneConversation, posEndY(tellMe) + 0.008 * s);

            setImageSizeX(bigKore, s - margin * 2);
            setPosX(bigKore, margin);
            setPosY(bigKore, posEndY(oneConversation) + 0.1 * s);

            const linkTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: metal, fontSize: 0.019 * s, fontFamily: "Roboto" };
            styleText(email, linkTextDetails);
            setPosX(email, margin);
            setPosY(email, posEndY(bigKore) + 0.05 * s);

            styleText(linkedIn, linkTextDetails);
            setPosX(linkedIn, margin + 0.07 * s);
            setPosY(linkedIn, posEndY(bigKore) + 0.05 * s);

            styleText(privacyPolicy, linkTextDetails);
            setPosX(privacyPolicy, s - sizeX(privacyPolicy) - margin);
            setPosY(privacyPolicy, posEndY(bigKore) + 0.05 * s);

            layoutSectionLine(sectionLine8, posEndY(email) + sectionLineGap);
        } else {
            resizeScrollContainerFull();
            const s = getScrollWidth();

            const margin = 0.09 * s;
            const betweenMargin = s - margin * 2;

            const bigTextTextDetails = { fontWeight: 300, color: white, fontSize: 0.15 * s, lineHeight: 0.18 * s, fontFamily: "Roboto" };
            const subGrayTextDetails = { fontWeight: 400, color: metal, fontSize: 0.09 * s, lineHeight: 0.13 * s, fontFamily: "Roboto" };

            const bigTextNudge = 0.004 * s;
            const sectionLineGap = 0.085 * s;

            const bigTextToSubtextGap = 0.03 * s;

            styleText(headlineText, bigTextTextDetails);
            setPosX(headlineText, margin);
            setPosY(headlineText, 0);

            styleText(travelingThePath, subGrayTextDetails);
            setSizeX(travelingThePath, betweenMargin);
            setPosX(travelingThePath, margin);
            setPosY(travelingThePath, posEndY(headlineText) + bigTextToSubtextGap);

            setImageSizeX(logo, betweenMargin);
            setPosX(logo, margin);
            setPosY(logo, posEndY(travelingThePath) + s * 0.17);

            layoutSectionLine(sectionLine1, posEndY(logo) + sectionLineGap);

            // about

            setImageSizeX(portrait, betweenMargin);
            setPosX(portrait, margin);
            setPosY(portrait, posEndY(sectionLine1) + sectionLineGap);

            styleText(aboutName, { letterSpacing: 0.001 * s, fontWeight: 500, color: white, fontSize: 0.09 * s, fontFamily: "Roboto" });
            setPosX(aboutName, margin);
            setPosY(aboutName, posEndY(portrait) + 0.2 * s);

            const longParagraphsTextDetails = { letterSpacing: 0.001 * s, fontWeight: 400, color: white, fontSize: 0.045 * s, lineHeight: 0.1 * s, fontFamily: "Merriweather" };
            styleText(aboutDescription, longParagraphsTextDetails);
            setSizeX(aboutDescription, betweenMargin);
            setPosX(aboutDescription, margin);
            setPosY(aboutDescription, posEndY(aboutName) + 0.006 * s);

            layoutSectionLine(sectionLine2, posEndY(aboutDescription) + sectionLineGap);

            // tiles

            const feelConfidentTextDetails = { fontWeight: 300, color: white, fontSize: 0.06 * s, fontFamily: "Roboto" };
            styleText(feelConfident, feelConfidentTextDetails);
            setSizeX(feelConfident, betweenMargin);
            setPosX(feelConfident, margin);
            setPosY(feelConfident, posY(sectionLine2) + sectionLineGap);

            skillTileCountX = 2;
            skillTileCountY = 5;
            const tileGap = 0.03 * s;
            const tileSize = (betweenMargin - tileGap * (skillTileCountX - 1)) / skillTileCountX;
            function tilePosX(x: number) {
                return margin + (tileSize + tileGap) * x;
            }
            function tilePosY(y: number) {
                return (tileSize + tileGap) * y + posEndY(feelConfident) + 0.04 * s;
            }
            layoutTiles(tileSize, tileGap, tilePosX, tilePosY);
            skillTiles[2].container.click();

            layoutSectionLine(sectionLine3, tilePosY(4) + tileSize + sectionLineGap);

            styleText(bigNames, bigTextTextDetails);
            setPosX(bigNames, margin);
            setPosY(bigNames, posY(sectionLine3) + sectionLineGap);

            const hasTackedTextDetails = { fontWeight: 400, color: metal, fontSize: 0.065 * s, lineHeight: 0.11 * s, fontFamily: "Roboto" };
            styleText(hasTackled, hasTackedTextDetails);
            setSizeX(hasTackled, sizeX(bigNames) - 0.025 * s);
            setPosX(hasTackled, margin);
            setPosY(hasTackled, posEndY(bigNames) + 0.06 * s);

            const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1];
            const bigNamesTextDetails = { fontWeight: 400, color: white, fontSize: 0.065 * s, lineHeight: 0.11 * s, fontFamily: "Roboto" };
            for (let i = 0; i < bigNameClientTexts.length; i++) {
                const o = bigNameClientTexts[i];

                styleText(o, bigNamesTextDetails);

                setPosX(o, margin);
                setPosY(o, posEndY(hasTackled) + 0.25 * s + 0.14 * i * s);
            }

            layoutSectionLine(sectionLine4, posEndY(lastBigName) + sectionLineGap);

            setImageSizeX(griffinBlackWhiteLandscape, 0);

            setImageSizeX(griffinBlackWhitePortrait, s);
            setPosX(griffinBlackWhitePortrait, 0);
            setPosY(griffinBlackWhitePortrait, posY(sectionLine4) + sectionLineGap);

            const griffinBlackWhiteTextDetails = { fontWeight: 400, color: black, fontSize: 0.073 * s, lineHeight: 0.14 * s, fontFamily: "Merriweather" };
            styleText(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
            setSizeX(griffinBlackWhiteText, betweenMargin);
            setPosX(griffinBlackWhiteText, margin);
            setPosY(griffinBlackWhiteText, posY(griffinBlackWhitePortrait) + 0.2 * s);

            layoutSectionLine(sectionLine5, posEndY(griffinBlackWhitePortrait) + sectionLineGap);

            // bio

            styleText(bioHeader, bigTextTextDetails);
            setPosX(bioHeader, margin);
            setPosY(bioHeader, posEndY(sectionLine5) + sectionLineGap);

            styleText(bioText, longParagraphsTextDetails);
            setSizeX(bioText, betweenMargin);
            setPosX(bioText, margin);
            setPosY(bioText, posEndY(bioHeader) + bigTextToSubtextGap);

            layoutSectionLine(sectionLine6, posEndY(bioText) + sectionLineGap);

            styleText(recentProjectHeader, bigTextTextDetails);
            setPosX(recentProjectHeader, margin);
            setPosY(recentProjectHeader, posY(sectionLine6) + sectionLineGap);

            for (const { projectNameText, projectDescriptionText } of projects) {
                styleText(projectNameText, { letterSpacing: 0.001 * s, fontWeight: 500, color: white, fontSize: 0.08 * s, fontFamily: "Roboto" });
                styleText(projectDescriptionText, longParagraphsTextDetails);
                setSizeX(projectDescriptionText, betweenMargin);
            }

            const projectsWithSpacing = projects.flatMap((project) => [project.projectNameText, 0.02 * s, project.projectDescriptionText, 0.1 * s]);
            const [alignments, _] = aligningWithGapsY(projectsWithSpacing);
            for (const { element, offset } of alignments) {
                setPosX(element, margin);
                setPosY(element, posEndY(recentProjectHeader) + 0.13 * s + offset);
            }
            const lastProjectDescription = projects[projects.length - 1].projectDescriptionText;

            // contact

            layoutSectionLine(sectionLine7, posEndY(lastProjectDescription) + sectionLineGap);

            styleText(tellMe, { letterSpacing: 0.3, fontWeight: 400, color: white, fontSize: 0.09 * s, lineHeight: 0.13 * s, fontFamily: "Roboto" });
            setSizeX(tellMe, 0.7 * s);
            setPosX(tellMe, margin);
            setPosY(tellMe, posY(sectionLine7) + 0.4 * s);

            styleText(oneConversation, subGrayTextDetails);
            setPosX(oneConversation, margin);
            setPosY(oneConversation, posEndY(tellMe) + 0.016 * s);

            setImageSizeX(bigKore, betweenMargin);
            setPosX(bigKore, margin);
            setPosY(bigKore, posEndY(oneConversation) + 0.5 * s);

            const linkTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: metal, fontSize: 0.08 * s, fontFamily: "Roboto" };
            styleText(email, linkTextDetails);
            setPosX(email, margin);
            setPosY(email, posEndY(bigKore) + 0.1 * s);

            styleText(linkedIn, linkTextDetails);
            setPosX(linkedIn, posEndX(email) + 0.08 * s);
            setPosY(linkedIn, posEndY(bigKore) + 0.1 * s);

            styleText(privacyPolicy, linkTextDetails);
            setPosX(privacyPolicy, margin);
            setPosY(privacyPolicy, posEndY(email) + 0.08 * s);

            layoutSectionLine(sectionLine8, posEndY(privacyPolicy) + sectionLineGap);
        }
    });
}
