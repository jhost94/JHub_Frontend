import Button from "@jhub-center/jhostify-script/framework/components/external/basic/form/Button";
import Aside from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Aside";
import Div from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Div";
import Span from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Span";

export default class Sidebar extends Aside {

    constructor() {
        super();
        this.id = "sidebar";
        this.cssClass("sidebar");

        const d = new Div();
        d.cssClass("sidebar-header");

        const db = new Button();
        db.cssClass("toggle-btn");
        // db.onClick(() => document.getElementById("sidebar")?.classList.toggle("expanded"));

        const ds = new Span();
        d.children().push(db);


        this.children().push(d);
    }
}