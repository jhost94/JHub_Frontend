import Page from "@jhub-center/jhostify-script/framework/page/external/Page";
import OpenApi from "@jhub-center/jhostify-script/framework/components/external/complex/OpenApi";
    
class TestPage extends Page {
    
    constructor() {
        const components = [
            new OpenApi("https://app.jhub.center/v3/api-docs")
        ];
        super("testPage", components);
    }
}

export default TestPage;