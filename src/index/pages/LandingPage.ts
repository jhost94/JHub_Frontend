import Page from "@jhub-center/jhostify-script/framework/page/external/Page";

class LandingPage extends Page {

    constructor() {
        super("landingPage69");
        this.buildTemplate();
    }

    private buildTemplate(): void {
        this.template = `
        <header>
            landing header
        </header>
        <navbar>
            landing navbar
        </navbar>
        <main>
            landing main content
            <input type='button' value="test">
        </main>
        `;
    }
}

export default LandingPage;