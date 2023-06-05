import Page from "../components/Page.js";
import { Navigatable } from "./Navigator.js";

class Route {

    constructor(private baseUrl: string, private page: Page) {

    }

    public navigate(navigatable: Navigatable): void {
        
    }
}

export default Route;