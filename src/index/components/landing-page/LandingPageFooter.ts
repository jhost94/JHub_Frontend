import Footer from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Footer";
import P from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/P";

export default class LandingPageFooter extends Footer {

    constructor() {
        super();
        const fP = new P();
        fP.content("© 2026 JHub. All rights reserved.");
        
        
        this.children().push(fP);

    }
}