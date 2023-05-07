import Page from "../../framework/components/Page.js";

class LandingPage extends Page {

    constructor() {
        super("landingPage69");
        this.buildTemplate();
    }

    private buildTemplate(): void {
        this.template = `
        <header>
            test header
        </header>
        <navbar>
            test navbar
        </navbar>
        <main>
            test main content
        </main>
        `;
    }
}

export default LandingPage;