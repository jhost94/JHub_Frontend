import Page from "src/framework/components/Page";

class TestPage extends Page {
    
        constructor() {
            super("testPage");
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

export default TestPage;