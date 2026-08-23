import Page from "@jhub-center/jhostify-script/framework/page/external/Page";
import SSETester from "../components/test/SSETester";
    
class TestPage extends Page {
    
    constructor() {
            
        super("testPage", [new SSETester()]);
    }
}

export default TestPage;