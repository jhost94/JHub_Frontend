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
import Css from "@jhub-center/jhostify-script/framework/components/external/Css";

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
        s1P.content("Something amazing is being built, please be patient!");
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

        const css = new Css(`/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #1e1e1e; /* Dark Grey */
    color: #e0e0e0;
    line-height: 1.6;
}

/* Header */
header {
    background-color: #2a2a2a;
    padding: 20px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #4b0082; /* Dark Purple */
}

header h1 {
    color: #9b59ff;
    font-size: 28px;
}

nav a {
    color: #ccc;
    text-decoration: none;
    margin-left: 20px;
    transition: 0.3s;
}

nav a:hover {
    color: #9b59ff;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 100px 20px;
    background: linear-gradient(135deg, #1e1e1e, #2b003b);
}

.hero h2 {
    font-size: 40px;
    margin-bottom: 20px;
    color: #ffffff;
}

.hero p {
    margin-bottom: 30px;
    font-size: 30px;
    color: #bbbbbb;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background-color: #4b0082;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
}

.btn:hover {
    background-color: #6a0dad;
}

/* Content Section */
.content {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 60px 10%;
    flex-wrap: wrap;
}

.card {
    background-color: #2a2a2a;
    padding: 30px;
    border-radius: 8px;
    width: 280px;
    border: 1px solid #4b0082;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    border-color: #9b59ff;
}

.card h3 {
    margin-bottom: 15px;
    color: #9b59ff;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background-color: #2a2a2a;
    border-top: 2px solid #4b0082;
    font-size: 14px;
    color: #888;
}`);

        super("landingPage", components, css);
    }

}

export default LandingPage;