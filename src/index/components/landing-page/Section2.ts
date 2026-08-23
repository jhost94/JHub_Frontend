import Div from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Div";
import P from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/P";
import Section from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Section";
import H3 from "@jhub-center/jhostify-script/framework/components/external/basic/text/H3";

export default class Section2 extends Section {

    constructor() {
        super();

        const div = new Div();
        div.cssClass("card");
        
        const divH3 = new H3();
        divH3.content("Modern Design");
        div.children().push(divH3);
        
        const divP = new P();
        divP.content("Clean layout with a dark grey and dark purple aesthetic.");
        div.children().push(divP);
        
        const div2 = new Div();
        div2.cssClass("card");
        
        const div2H3 = new H3();
        div2H3.content("Simple Structure");
        div2.children().push(div2H3);
        
        const div2P = new P();
        div2P.content("Built with pure HTML and CSS — no scripts required.");
        div2.children().push(div2P);
        
        const div3 = new Div();
        div3.cssClass("card");
        
        const div3H3 = new H3();
        div3H3.content("Fast & Lightweight");
        div3.children().push(div3H3);
        
        const div3P = new P();
        div3P.content("Optimized for performance and easy customization.");
        div3.children().push(div3P);
        
        this.cssClass("content");
        this.children().push(div);
        this.children().push(div2);
        this.children().push(div3);
        
    }
}