import { addHomePage, addNavBar } from "./pages/home";

(async () => {
    await Promise.all([
        document.fonts.load("200 10px Roboto"), //
        document.fonts.load("300 20px Roboto"), //
        document.fonts.load("400 30px Roboto"), //
        document.fonts.load("500 40px Roboto"), //
        document.fonts.load("600 50px Roboto"),
        document.fonts.load("200 20px Merriweather"),
        document.fonts.load("300 30px Merriweather"),
        document.fonts.load("400 40px Merriweather"),
        document.fonts.load("500 50px Merriweather"),
        document.fonts.load("600 60px Merriweather"),
    ]);
    await document.fonts.ready
    await new Promise(requestAnimationFrame);
    await new Promise(requestAnimationFrame);

    addNavBar();
    addHomePage();
})();
