import InitialConfiguration, { ConfigurationOptions } from "./framework/Configuration.js";
import Initializer from "./framework/Initializer.js";
import Navigation from "./framework/router/Navigator.js";
import Route from "./framework/router/Route.js";
import Router from "./framework/router/Router.js";
import LandingPage from "./index/pages/LandingPage.js";
import TestPage from "./index/pages/TestPage.js";

const id = setInterval(() => {if (docReady() && dependeciesReady()) stop()}, 0);

function docReady(): boolean {
    return document.readyState === 'interactive' || document.readyState == 'complete';
}

function stop() {
    clearInterval(id);
    render();
}

function dependeciesReady(): boolean {
    return requireReady();
}

function requireReady(): boolean {
    return require !== undefined/* && define !== undefined*/;
}

function render(): void {
    const body = document.body;

    const landingPageName = "landingPage"
    // const landingPage = new Page(landingPageName);
    const landingPage = new LandingPage();
    // Pages
    const testPage = new TestPage();
    // Routes
    // const testRoute = new Route("/test", testPage);
    // Config
    const configOptions: ConfigurationOptions = {
        defaultPage: landingPage,
        defaultPageName: landingPageName
    }
    const frameworkConfig = new InitialConfiguration(document, configOptions);
    const router = new Router(new Navigation(), window.navigator, document.location);
    
    Initializer.configure(frameworkConfig, router, body);
    
    Initializer.init();
    window.addEventListener('popstate', () => {
        const path = window.location.pathname;
        console.log(path);
    });
    // router.addInternalRoute("test", testRoute);
    // console.log(Initializer.config())
    // window.location.assign("/test");
}

//TODO LIST:
// - REMOVE REQUIREJS AND INTRODUCE CUSTOM AMD LOADER
