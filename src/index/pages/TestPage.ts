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
                <button type="button">Click Me!</button>
                <a href="/test2">test2</a> 
            </main>
            `;
        }
}

export default TestPage;