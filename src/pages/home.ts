import { black, bodySig, jeans, metal, tileBrown, white } from "../constants";
import { aligningWithGapsY, posX, posY, px, sizeX, sizeY, styleText } from "../layout";
import { appendChildForPage, registerUpdateLayout } from "../page";
import { addScrollImage, addScrollSvg, addScrollText, addText, getScrollWidth, resizeScrollContainerFull, scrollContainer } from "../scroll";
import { effect, Signal } from "../signal";
import { animateSpring, Spring } from "../spring";

function layoutSectionLine(sectionLine: HTMLElement, y: number) {
    const s = getScrollWidth();
    sectionLine.style.height = px(0.001 * s);
    sectionLine.style.width = px(innerWidth);
    sectionLine.style.top = px(y);
}

const navItemJumpElements: {
    about?: HTMLElement;
    services?: HTMLElement;
    bio?: HTMLElement;
    recentProjects?: HTMLElement;
    contact?: HTMLElement;
} = {};

function giveHover(element: HTMLElement, enterColor: string, leaveColor: string) {
    element.style.cursor = "pointer";
    element.style.transition = "color 0.2s";
    element.onmouseenter = () => (element.style.color = enterColor);
    element.onmouseleave = () => (element.style.color = leaveColor);
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

    function addNavItem(navItemName: string, k: keyof typeof navItemJumpElements) {
        const navItem = document.createElement("p");
        navItem.style.whiteSpace = "nowrap";
        navItem.innerText = navItemName;

        navItem.onclick = () => {
            navItemJumpElements[k]?.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        giveHover(navItem, metal, white);

        document.body.appendChild(navItem);
        return navItem;
    }

    const about = addNavItem("ABOUT", "about");
    const services = addNavItem("SERVICES", "services");
    const bio = addNavItem("BIO", "bio");
    const recentProjects = addNavItem("RECENT PROJECTS", "recentProjects");
    const contact = addNavItem("CONTACT", "contact");

    const navItems = [about, services, bio, recentProjects, contact];

    effect(() => {
        const s = getScrollWidth();
        const margin = 0.05 * s; // ZZZZ take out

        const navBottom = 0.05 * s;

        koreLogo.style.width = px(0.08 * s);
        koreLogo.style.top = px(navBottom - sizeY(koreLogo) - 0.002 * s);
        koreLogo.style.left = px(margin);

        tagline.style.width = px(0.17 * s);
        tagline.style.top = px(navBottom - sizeY(tagline));
        tagline.style.left = px(posX(koreLogo) + sizeX(koreLogo) + 0.018 * s);

        console.log(s);
        const navItemTextDetails = { letterSpacing: 0.0008 * s, fontWeight: 500, color: white, fontSize: 0.01 * s, fontFamily: "Roboto" };

        for (let i = navItems.length - 1; i >= 0; i--) {
            const navItem = navItems[i];
            const nextNavItem = navItems[i + 1];

            styleText(navItem, navItemTextDetails);
            if (nextNavItem) navItem.style.left = px(posX(nextNavItem) - sizeX(navItem) - 0.02 * s);
            else navItem.style.left = px(s - sizeX(contact) - 0.07 * s);

            navItem.style.top = px(navBottom - sizeY(navItem));
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

    const logo = addScrollSvg("logo.svg");
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
    navItemJumpElements.about = aboutName;
    const aboutDescription = addScrollText("Founder<br><br>With 37 years in the trenches of broadcast, AV, and media systems integration, I’ve built my career protecting clients from being steamrolled by complexity, bad planning, and unrealistic promises.<br><br>I’m not here to play nice — I’m here to make sure things get done right.<br><br>As a Subject Matter Expert and Owner’s Rep, I bring clear-eyed strategy, engineering leadership, and a no-BS approach to complex projects. From early-stage visioning through final implementation, I make sure my clients are fully informed and stay in control — without being buried in technical noise or vendor spin.<br><br>I’ve led high-profile projects for the NBA, WWE, Univision, Disney, and more. My background includes running a successful integration firm, managing engineering teams of 50+, and overseeing some of the largest media facility builds of the last 30 years. Whether we’re talking network ops, cloud workflows, post-production, or studio ops workflows — I’ve done it, and I bring the scars (and lessons) with me.<br><br>My job is simple: make sure my clients are protected, respected, and have delivered exactly what they need—nothing more, and absolutely nothing less.");
    const portrait = addScrollImage("papa.png");

    const sectionLine2 = addSectionLine();

    const feelConfident = addScrollText("FEEL CONFIDENT KNOWING YOU’VE GOT IT ALL COVERED.");
    navItemJumpElements.services = feelConfident;

    const springSig = new Signal();
    function addSkillTile(title: string, description: string, x: number, y: number) {
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.background = metal;
        container.style.overflow = "hidden";

        appendChildForPage(scrollContainer, container);
        const titleText = addText(title, container);
        const descriptionText = addText(description, container);
        descriptionText.style.opacity = "0";
        descriptionText.style.transition = "opacity 0.25s";

        const springX = new Spring(x);
        const springY = new Spring(y);
        const springSizeY = new Spring(1);
        springX.setStiffnessCritical(200);
        springY.setStiffnessCritical(200);
        springSizeY.setStiffnessCritical(200);

        function tileAt(x: number, y: number) {
            return skillTiles.find((s) => s.springX.target === x && s.springY.target === y)!;
        }

        function flip(spring1: Spring, spring2: Spring) {
            const s = spring1.target;
            spring1.target = spring2.target;
            spring2.target = s;
        }

        const onClick = () => {
            if (springY.target === holeSkillTile.springY.target) {
                flip(
                    tileAt(holeSkillTile.springX.target, 1 - holeSkillTile.springY.target).springY, //
                    holeSkillTile.springY
                );
            }

            const direcionX = springX.target - holeSkillTile.springX.target < 0 ? -1 : 1;
            for (let x = holeSkillTile.springX.target; x !== springX.target; x += direcionX) {
                flip(
                    tileAt(x, holeSkillTile.springY.target).springX, //
                    tileAt(x + direcionX, holeSkillTile.springY.target).springX
                );
            }

            if (springY.target === 1) {
                flip(
                    tileAt(springX.target, 1 - springY.target).springY, //
                    springY
                );
            }

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

    const holeSkillTile = addSkillTile("", "", 2, 1);
    holeSkillTile.container.style.background = "#00000033";

    const skillTiles = [
        addSkillTile("Owner<br>Representation", "KORE serves as your eyes, ears, and advocates, providing concierge-level guidance through every step of your project. We keep vendors and contractors honest, making sure nothing slips through the cracks. We begin by aligning all stakeholders early on, then defend your position throughout the process.", 0, 0), //
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

    const bigNames = addScrollText("BIG NAMES<br>YOU KNOW");
    const hasTackled = addScrollText("<strong>Scott Griffin</strong> has tackled some of the most complex projects for some of the largest media companies in the world.<br>He has seen it all, and you can tap into that experience.");

    const bigNameClients = [
        ["ABS/CBN", "National Geographic"], //
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

    const bigNameClientTexts = bigNameClients.map((bigNameClientsRow) => bigNameClientsRow.map((bigNameClient) => addScrollText(bigNameClient)));

    const sectionLine4 = addSectionLine();

    const griffinBlackWhite = addScrollImage("griffin-black-white.png");
    const griffinBlackWhiteText = addScrollText("I’ve been in this industry for more than 35 years, and I can’t think of one client who was able to successfully navigate the gauntlet that is a large media facility project without the support of an experienced, knowledgeable, and aggressive project facilitator.");

    const sectionLine5 = addSectionLine();

    // bio

    const bioHeader = addScrollText("HOW WE<br>GOT HERE");
    navItemJumpElements.bio = bioHeader;
    const bioText = addScrollText("I’ve always focused on the conceptualization and implementation of advanced technology solutions for facility and event systems integration. Along the way, that’s meant serving as design engineer, project manager, sales engineer, planning consultant, business builder/owner, and team leader.<br><br>It all started in technical theater, where I worked as a master electrician, lighting designer, sound designer, and front-of-house sound engineer in summer stock, touring, and off-Broadway theater. Following several years of freelance theatrical and concert technical support, I landed at AF Associates, a broadcast systems integrator.<br><br>After working on systems engineering efforts for NBC’s Today Show, CNBC, and USA Network, I moved to Sony Systems Integration. There, I oversaw design/builds for the Tribune Station Group and supported CBS Broadcast Operations & Engineering<br><br>At this point, I teamed up with two partners to launch The Systems Group. TSG specialized in large-scale, fast-track systems integration projects for the broadcast industry. During our 20-year run, we designed and built facilities for Serious Satellite Radio, MTV Networks, Syracuse University Newhouse, NFL Films Audio, NBCU, and Corus Entertainment, plus 200+ systems integration projects worldwide.<br><br>When TSG was acquired by Diversified in 2016, I established a small studio within the larger corporation, which allowed me to focus on critical early-stage project conceptualization, planning, and budgeting. Throughout those years, I was able to work shoulder to shoulder with some of the best and brightest across a wide range of disciplines in the media and entertainment industry. And the rest, as they say, is history.<br><br>Today, KORE offers a radically streamlined way to leverage a career’s worth of expertise, experience, and extensive industry relationships to help make sure your next project runs smoothly from planning to acceptance.<br><br>I hold a Bachelor of Science in Electrical Engineering from Penn State University, and am a member of SMPTE, AES, and SVG. I’m also kind to animals.");

    const sectionLine6 = addSectionLine();

    // recent projects

    const recentProjectHeader = addScrollText("RECENT<br>PROJECTS");
    navItemJumpElements.recentProjects = recentProjectHeader;

    function addProjectPair(projectName: string, projectDescription: string) {
        const projectNameText = addScrollText(projectName);
        const projectDescriptionText = addScrollText(projectDescription);

        return { projectNameText, projectDescriptionText };
    }

    const projects = [addProjectPair("NBA Entertainment", "Architectural planning and budgeting for new content operations center, replay operations center, and expansion of the NBA Network."), addProjectPair("Televisa/Univision Network", "System conceptualization, applications engineering, project budgeting, and account representation for the network operations center."), addProjectPair("Western Kentucky University", "PBS and NPR stations, College of Communications production and post facility, including ties to campus sports and presentation venues, development of a complete system design for three control rooms, two TV studios, four radio studios, and post-production operations."), addProjectPair("World Wrestling Entertainment", "New HQ digital media facility design and budgeting for production, post, transmission, and event coordination, plus formal analysis for Phase 2 workflow optimization and orchestration layer."), addProjectPair("Disney/Galaxy Consolidation", "The largest network operations center facility ever built in the US. It includes ABC Network, WABC TV, ESPN NY, Marvel Entertainment, and Disney Screening Theater. Scott oversaw contract administration across the entire project.")];

    // contact

    const sectionLine7 = addSectionLine();

    const tellMe = addScrollText("Tell me about your project.");
    navItemJumpElements.contact = tellMe;
    const oneConversation = addScrollText("One conversation won’t cost you anything. Not having one might.");
    const bigKore = addScrollSvg("big-kore.svg");

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
        resizeScrollContainerFull();
        const s = getScrollWidth();

        const margin = 0.05 * s;
        const fromTop = 0.031 * s;

        const bigTextTextDetails = { fontWeight: 300, color: white, fontSize: 0.075 * s, width: 0.4 * s, lineHeight: 0.084 * s, fontFamily: "Roboto" };
        const subGrayTextDetails = { fontWeight: 400, color: metal, fontSize: 0.019 * s, fontFamily: "Roboto" };

        const bigTextNudge = 0.004 * s;
        const sectionLineGap = 0.04 * s;
        const gutter = 0.02 * s;
        const gutteredColumn = s / 2 + gutter;
        const gutteredWidthBetween = s / 2 - 2 * gutter;

        const TEMP = 0.02 * s;

        styleText(headlineText, bigTextTextDetails);
        headlineText.style.left = px(margin - bigTextNudge);
        headlineText.style.top = px(fromTop);

        styleText(travelingThePath, subGrayTextDetails);
        travelingThePath.style.left = px(margin);
        travelingThePath.style.top = px(posY(headlineText) + sizeY(headlineText) + TEMP);

        logo.style.height = px(sizeY(headlineText) * 1.04);
        logo.style.left = px(innerWidth - logo.scrollWidth - margin);
        logo.style.top = px(fromTop - 0.03 * s);

        layoutSectionLine(sectionLine1, posY(travelingThePath) + sizeY(travelingThePath) + sectionLineGap);

        // about

        const longParagraphsTextDetails = { letterSpacing: 0.001 * s, fontWeight: 300, color: white, fontSize: 0.01 * s, lineHeight: 0.02 * s, fontFamily: "Merriweather" };
        styleText(aboutDescription, longParagraphsTextDetails);

        const scrollWidth = innerWidth - 2 * margin; // ZZZZ another scroll width?
        const tileGap = 0.015 * s;
        const tileSize = (scrollWidth - tileGap * (skillTileCountX - 1)) / skillTileCountX;

        function tilePosX(x: number) {
            return margin + (tileSize + tileGap) * x;
        }

        function tilePosY(y: number) {
            return (tileSize + tileGap) * y + posY(feelConfident) + sizeY(feelConfident) + 0.04 * s;
        }

        const aboutLeft = tilePosX(2);
        styleText(aboutName, { letterSpacing: 0.001 * s, fontWeight: 500, color: white, fontSize: 0.02 * s, fontFamily: "Roboto" });
        aboutName.style.top = px(posY(sectionLine1) + sectionLineGap);
        aboutName.style.left = px(aboutLeft);

        aboutDescription.style.width = px(s - aboutLeft - margin);
        aboutDescription.style.top = px(posY(aboutName) + sizeY(aboutName));
        aboutDescription.style.left = px(aboutLeft);

        document.body.offsetHeight; // flush or whatever
        portrait.style.height = px(sizeY(aboutName) + sizeY(aboutDescription));
        portrait.style.top = px(posY(aboutName));
        portrait.style.left = px(margin);

        layoutSectionLine(sectionLine2, posY(aboutDescription) + sizeY(aboutDescription) + sectionLineGap);

        // tiles

        const feelConfidentTextDetails = { fontWeight: 300, color: white, fontSize: 0.028 * s, fontFamily: "Roboto" };
        styleText(feelConfident, feelConfidentTextDetails);
        feelConfident.style.top = px(posY(sectionLine2) + sectionLineGap);
        feelConfident.style.left = px(margin);

        springSig.unsubscribeAll();
        effect(() => {
            for (const skillTile of skillTiles) {
                const { container, titleText, descriptionText, springX, springY, springSizeY } = skillTile;

                container.style.width = px(tileSize);
                container.style.height = px(tileSize * springSizeY.position + (springSizeY.position - 1) * tileGap);

                container.style.left = px(tilePosX(springX.position));
                container.style.top = px(tilePosY(springY.position));

                styleText(titleText, { letterSpacing: 0.0004 * s, fontWeight: 500, color: black, fontSize: 0.018 * s, fontFamily: "Roboto" });
                titleText.style.left = px(0.08 * tileSize);
                titleText.style.top = px(tileSize / 2 - sizeY(titleText) / 2);

                styleText(descriptionText, { letterSpacing: 0.0004 * s, fontWeight: 400, color: black, fontSize: 0.011 * s, lineHeight: 0.016 * s, width: tileSize - 0.03 * s, fontFamily: "Roboto" });
                descriptionText.style.left = px(0.08 * tileSize);
                descriptionText.style.top = px(0.11 * s);
            }
        }, [springSig]);

        layoutSectionLine(sectionLine3, tilePosY(1) + tileSize + sectionLineGap);

        styleText(bigNames, bigTextTextDetails);
        bigNames.style.top = px(posY(sectionLine3) + sectionLineGap);
        bigNames.style.left = px(margin - bigTextNudge);

        const hasTackedTextDetails = { fontWeight: 300, color: metal, fontSize: 0.014 * s, lineHeight: 0.025 * s, width: sizeX(bigNames) - 0.025 * s, fontFamily: "Roboto" };
        styleText(hasTackled, hasTackedTextDetails);
        hasTackled.style.top = px(posY(bigNames) + sizeY(bigNames) + TEMP);
        hasTackled.style.left = px(margin);

        const lastBigName = bigNameClientTexts[bigNameClientTexts.length - 1][0];
        const bigNamesTextDetails = { fontWeight: 300, color: white, fontSize: 0.018 * s, fontFamily: "Roboto" };
        for (let y = 0; y < bigNameClientTexts.length; y++) {
            for (let x = 0; x < bigNameClientTexts[y].length; x++) {
                const o = bigNameClientTexts[y][x];

                styleText(o, bigNamesTextDetails);

                o.style.top = px(posY(bigNames) + 0.01 * s + 0.032 * y * s);
                o.style.left = px(gutteredColumn + 0.22 * x * s);
            }
        }

        layoutSectionLine(sectionLine4, posY(lastBigName) + sizeY(lastBigName) + sectionLineGap);

        griffinBlackWhite.style.width = px(s);
        griffinBlackWhite.style.top = px(posY(sectionLine4) + sizeY(sectionLine4) + sectionLineGap);

        const griffinBlackWhiteTextDetails = { fontWeight: 400, color: black, fontSize: 0.02 * s, width: 0.41 * s, lineHeight: 0.04 * s, fontFamily: "Merriweather" };
        griffinBlackWhiteText.style.fontStyle = "italic";
        styleText(griffinBlackWhiteText, griffinBlackWhiteTextDetails);
        griffinBlackWhiteText.style.left = px(gutteredColumn);
        griffinBlackWhiteText.style.top = px(posY(griffinBlackWhite) + sizeY(griffinBlackWhite) / 2 - sizeY(griffinBlackWhiteText) / 2);

        layoutSectionLine(sectionLine5, posY(griffinBlackWhite) + sizeY(griffinBlackWhite) + sectionLineGap);

        // bio

        styleText(bioHeader, bigTextTextDetails);
        bioHeader.style.top = px(posY(sectionLine5) + sizeY(sectionLine5) + sectionLineGap);
        bioHeader.style.left = px(margin - bigTextNudge);

        styleText(bioText, longParagraphsTextDetails);
        bioText.style.width = px(gutteredWidthBetween);
        bioText.style.top = px(posY(bioHeader));
        bioText.style.left = px(gutteredColumn);

        layoutSectionLine(sectionLine6, posY(bioText) + sizeY(bioText) + sectionLineGap);

        styleText(recentProjectHeader, bigTextTextDetails);
        recentProjectHeader.style.top = px(posY(sectionLine6) + sizeY(sectionLine6) + sectionLineGap);
        recentProjectHeader.style.left = px(margin - bigTextNudge);

        for (const { projectNameText, projectDescriptionText } of projects) {
            styleText(projectNameText, { letterSpacing: 0.001 * s, fontWeight: 500, color: white, fontSize: 0.02 * s, fontFamily: "Roboto" });
            styleText(projectDescriptionText, longParagraphsTextDetails);
            projectDescriptionText.style.width = px(gutteredWidthBetween);
        }

        const projectsWithSpacing = projects.flatMap((project) => [project.projectNameText, 0.006 * s, project.projectDescriptionText, 0.028 * s]);
        const [alignments, _] = aligningWithGapsY(projectsWithSpacing);
        for (const { element, offset } of alignments) {
            element.style.top = px(posY(recentProjectHeader) + offset);
            element.style.left = px(gutteredColumn);
        }
        const lastProjectDescription = projects[projects.length - 1].projectDescriptionText;

        // contact

        layoutSectionLine(sectionLine7, posY(lastProjectDescription) + sizeY(lastProjectDescription) + sectionLineGap);

        styleText(tellMe, { letterSpacing: 0.3, fontWeight: 400, color: white, fontSize: 0.019 * s, fontFamily: "Roboto" });
        tellMe.style.left = px(margin);
        tellMe.style.top = px(posY(sectionLine7) + sizeY(sectionLine7) + sectionLineGap);

        styleText(oneConversation, subGrayTextDetails);
        oneConversation.style.left = px(margin);
        oneConversation.style.top = px(posY(tellMe) + sizeY(tellMe) + 0.008 * s);

        bigKore.style.width = px(s - margin * 2);
        bigKore.style.left = px(margin);
        bigKore.style.top = px(posY(oneConversation) + sizeY(oneConversation) + 0.1 * s);

        const linkTextDetails = { letterSpacing: 0.3, fontWeight: 400, color: metal, fontSize: 0.019 * s, fontFamily: "Roboto" };
        styleText(email, linkTextDetails);
        email.style.left = px(margin);
        email.style.top = px(posY(bigKore) + sizeY(bigKore) + 0.05 * s);

        styleText(linkedIn, linkTextDetails);
        linkedIn.style.left = px(margin + 0.07 * s);
        linkedIn.style.top = px(posY(bigKore) + sizeY(bigKore) + 0.05 * s);

        styleText(privacyPolicy, linkTextDetails);
        privacyPolicy.style.left = px(s - sizeX(privacyPolicy) - margin);
        privacyPolicy.style.top = px(posY(bigKore) + sizeY(bigKore) + 0.05 * s);

        layoutSectionLine(sectionLine8, posY(email) + sizeY(email) + sectionLineGap);
    });
}
