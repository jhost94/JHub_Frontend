import Component from "@jhub-center/jhostify-script/framework/components/external/Component";
import Page from "@jhub-center/jhostify-script/framework/page/external/Page";
import GenericCss from "./GenericCss";
import LandingPageHeader from "../components/landing-page/LandingPageHeader";
import Section1 from "../components/landing-page/Section1";
import Section2 from "../components/landing-page/Section2";
import LandingPageFooter from "../components/landing-page/LandingPageFooter";

class LandingPage extends Page {

    constructor() {
        const components: Component[] = [];

        components.push(new LandingPageHeader());
        components.push(new Section1());
        components.push(new Section2());
        components.push(new LandingPageFooter());

        super("landingPage", components, new GenericCss());
    }

}

export default LandingPage;