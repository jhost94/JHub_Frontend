import P from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/P";
import Section from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Section";
import A from "@jhub-center/jhostify-script/framework/components/external/basic/link/A";
import H2 from "@jhub-center/jhostify-script/framework/components/external/basic/text/H2";

export default class Section1 extends Section {

    constructor() {
        super();

        const h2 = new H2();
        h2.content("Welcome to JHub");
        
        const p = new P();
        p.content("Something amazing is being built, please be patient!");
        
        const a = new A();
        a.content("Get Started");
        a.href("#")
        a.cssClass("btn");

        this.cssClass("hero");
        this.children().push(h2);
        this.children().push(p);
    }
}