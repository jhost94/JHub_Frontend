import Header from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Header";
import Nav from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Nav";
import A from "@jhub-center/jhostify-script/framework/components/external/basic/link/A";
import H1 from "@jhub-center/jhostify-script/framework/components/external/basic/text/H1";

export default class LandingPageHeader extends Header {

    constructor() {
        super();
        
        const hH1 = new H1();
        hH1.content("JHub");
        
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
        
        this.children().push(hH1);
        this.children().push(n1);
    }
}