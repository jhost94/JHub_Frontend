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
    const routes: Map<string, Route> = new Map;
    routes.set('test', new Route('/test', testPage));
    routes.set('', new Route('/', landingPage));
    // Config
    const configOptions: ConfigurationOptions = {
        notFoundPage: landingPage,
        defaultPage: landingPage,
        defaultPageName: landingPageName
    }
    const frameworkConfig = new InitialConfiguration(document, configOptions);
    const router = new Router(window.history, window.navigator, document.location, routes);
    
    Initializer.configure(frameworkConfig, router, body);
    
    //TODO: make sure pages is registered in PageRenderer class
    
    Initializer.init();
}

//TODO LIST:
// - REMOVE REQUIREJS AND INTRODUCE CUSTOM AMD LOADER
