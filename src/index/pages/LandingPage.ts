import Component from "@jhub-center/jhostify-script/framework/components/external/Component";
import Page from "@jhub-center/jhostify-script/framework/page/external/Page";
import Div from "@jhub-center/jhostify-script/framework/components/external/formatting/Div";
import Header from "@jhub-center/jhostify-script/framework/components/external/formatting/Header";
import Footer from "@jhub-center/jhostify-script/framework/components/external/formatting/Footer";
import Nav from "@jhub-center/jhostify-script/framework/components/external/formatting/Nav";
import Section from "@jhub-center/jhostify-script/framework/components/external/formatting/Section";
import P from "@jhub-center/jhostify-script/framework/components/external/formatting/P";
import H1 from "@jhub-center/jhostify-script/framework/components/external/text/H1";
import H2 from "@jhub-center/jhostify-script/framework/components/external/text/H2";
import H3 from "@jhub-center/jhostify-script/framework/components/external/text/H3";
import A from "@jhub-center/jhostify-script/framework/components/external/link/A";

class LandingPage extends Page {

    constructor() {
        const components: Component[] = [];

        // ############ HEADER
        const header = new Header();
        
        const hH1 = new H1();
        hH1.content("JHub");
        header.children().push(hH1);
        
        const n1 = new Nav();
        const aHome = new A()
        const aProjects = new A()
        const aAbout = new A()
        const aContact = new A()
        aHome.content("Home");
        aHome.href("#");
        n1.children().push(aHome);
        aProjects.content("Projects");
        aProjects.href("#");
        n1.children().push(aProjects);
        aAbout.content("About");
        aAbout.href("#");
        n1.children().push(aAbout);
        aContact.content("Contact");
        aContact.href("#");
        n1.children().push(aContact);
        header.children().push(n1);
        
        // ############ Section1
        const s1 = new Section();
        s1.cssClass("hero");
        
        const s1H2 = new H2();
        s1H2.content("Welcome to JHub");
        s1.children().push(s1H2);
        
        const s1P = new P();
        s1P.content("Your central place for innovation, development, and creativity.");
        s1.children().push(s1P);
        
        const s1A = new A();
        s1A.content("Get Started");
        s1A.href("#")
        s1A.cssClass("btn");
        
        // ############ Section2
        const s2 = new Section();
        s2.cssClass("content");
        
        const s2Div = new Div();
        s2Div.cssClass("card");
        
        const s2DivH3 = new H3();
        s2DivH3.content("Modern Design");
        s2Div.children().push(s2DivH3);
        
        const s2DivP = new P();
        s2DivP.content("Clean layout with a dark grey and dark purple aesthetic.");
        s2Div.children().push(s2DivP);
        
        const s2Div2 = new Div();
        s2Div2.cssClass("card");
        
        const s2Div2H3 = new H3();
        s2Div2H3.content("Simple Structure");
        s2Div2.children().push(s2Div2H3);
        
        const s2Div2P = new P();
        s2Div2P.content("Built with pure HTML and CSS — no scripts required.");
        s2Div2.children().push(s2Div2P);
        
        const s2Div3 = new Div();
        s2Div3.cssClass("card");
        
        const s2Div3H3 = new H3();
        s2Div3H3.content("Fast & Lightweight");
        s2Div3.children().push(s2Div3H3);
        
        const s2Div3P = new P();
        s2Div3P.content("Optimized for performance and easy customization.");
        s2Div3.children().push(s2Div3P);
        s2.children().push(s2Div);
        s2.children().push(s2Div2);
        s2.children().push(s2Div3);
        
        // ############ Section2
        const footer = new Footer();
        const fP = new P();
        fP.content("© 2026 JHub. All rights reserved.");
        footer.children().push(fP);


        components.push(header);
        components.push(s1);
        components.push(s2);
        components.push(footer);
        super("landingPage", components);
    }

}

export default LandingPage;