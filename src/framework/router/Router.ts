import Navigation from "./Navigator.js";
import Route from "./Route.js";

class Router {

    constructor(private navigation: Navigation, private navigator: Navigator, private location: Location, private internalRoutes: Route[] = [], private externalRoutes: Route[] = []) {
        console.log(this.navigator);
        console.log(this.location);
    }

    public navigate(navigationOption: NavigationOption): void {
        const navigationMethod: NavigationMethod = {

        };

        switch(navigationOption.type) {
            case "INTERNAL": 
                this.navigateInternal(navigationMethod);
                break;
            case "EXTERNAL": 
                this.navigateExternal(navigationMethod);
                break;
            default:
                throw `Unallowed NaviagtionType ${navigationOption.type}`
        }
    }

    private navigateInternal(navigationMethod: NavigationMethod): void {

    }

    private navigateExternal(navigationMethod: NavigationMethod): void {

    }
}

interface NavigationMethod {

}

interface NavigationOption {
    type: NavigationType,
    id?: string
}

type NavigationType = "INTERNAL" | "EXTERNAL";

export default Router;
export { NavigationOption, NavigationType }