import Component from "@jhub-center/jhostify-script/framework/components/external/Component";
import Page from "@jhub-center/jhostify-script/framework/page/external/Page";
import Div from "@jhub-center/jhostify-script/framework/components/external/Div";

class LandingPage extends Page {

    constructor() {
        const components: Component[] = [];
        const d = new Div();
        d.content("test");
        d.color("red")
        
        const d2 = new Div();
        d2.content("inside div1");
        d2.backgroundColor("black");
        d2.color("pink");
        d.children().push(d2);
        components.push(d);
        const d3 = new Div();
        d3.content("inside div2");
        d3.backgroundColor("red");
        d2.children().push(d3);
        super("landingPage69", components);
    }

}


export default LandingPage;