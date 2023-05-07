import InitialConfiguration, { ConfigurationOptions } from "./framework/Configuration.js";
import Initializer from "./framework/Initializer.js";
import Page from "./framework/components/Page.js";
import Navigation from "./framework/router/Navigator.js";
import Router from "./framework/router/Router.js";
import LandingPage from "./index/pages/LandingPage.js";

const id = setInterval(() => {if (document.readyState === 'interactive' || document.readyState == 'complete') stop()}, 0);

function stop() {
    clearInterval(id);
    render();
}

function render(): void {
    const body = document.body;

    const landingPageName = "landingPage"
    // const landingPage = new Page(landingPageName);
    const landingPage = new LandingPage();
    const configOptions: ConfigurationOptions = {
        defaultPage: landingPage,
        defaultPageName: landingPageName
    }
    const frameworkConfig = new InitialConfiguration(document, configOptions);
    const router = new Router(new Navigation(), window.navigator, document.location);
    Initializer.configure(frameworkConfig, router, body);

    Initializer.init()
}