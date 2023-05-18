import Navigation from "./Navigator.js";
import Route from "./Route.js";

class Router {

    constructor(private navigation: Navigation, 
                private navigator: Navigator, 
                private location: Location, 
                private internalRoutes: Map<string, Route> = new Map(), 
                private externalRoutes: Map<string, Route> = new Map()) {
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

    public addInternalRoute(id: string, route: Route): void {
        this.internalRoutes.set(id, route);
    }

    public addExternalRoute(id: string, route: Route): void {
        this.externalRoutes.set(id, route);
    }

    public getClipboard(): Clipboard {
        return this.navigator.clipboard;
    }

    public getCurrentUrl(): string {
        return this.location.href;
    }

    public async getClipboardText(): Promise<string> {
        try {
            return await this.navigator.clipboard.readText();
        } catch (error) {
            console.error(error);
            return "";
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