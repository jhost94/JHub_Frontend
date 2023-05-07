import Objects from "../utils/Objects.js";
import InitialConfiguration, { Configuration } from "./Configuration.js";
import Router from "./router/Router.js";
import PageRenderer from "./renderers/PageRenderer.js";
import PageBuilder from "./builders/PageBuilder.js";
import ComponentBuilder from "./builders/ComponentBuilder.js";
import InternalPage from "./components/internal/InternalPage.js";

class Initializer {
    private static configuration: InitialConfiguration;
    private static isRunning: boolean = false;
    private static router: Router;
    private static currentPageBeingRendered: string | null = null;
    private static pageBuilder: PageBuilder;
    private static componentBuilder: ComponentBuilder;

    public static configure(config: InitialConfiguration, router: Router, rootElement: Element): void {
        if (Objects.nonNull(this.configuration)) throw "Initial configuration already done.";
        this.configuration = config;
        this.router = router;
        this.componentBuilder = new ComponentBuilder(config.getElementBuilder());
        this.pageBuilder = new PageBuilder(config.getElementBuilder());
        PageRenderer.rootElement(rootElement);
        PageRenderer.page(this.configuration.get("defaultPageName") as string, this.configuration.get("defaultPage") as InternalPage)
    }

    public static updateConfig(name: keyof Configuration, value: any): void {
        if (Objects.diferentType(this.configuration.get(name), value)) throw "Diferent type of config value";
        this.configuration.set(name, value);
    }

    public static init(): void {
        if (this.running()) throw "Application already running";
        if (Objects.isNull(this.configuration)) throw "Initial configuration not set";
        //test
        this.render(this.config().defaultPageName)
    }

    public static running(): boolean {
        return this.isRunning;
    }

    public static config(): Configuration {
        return this.configuration.getConfig();
    }

    public static render(id: string): void {
        PageRenderer.render(id);
        this.currentPageBeingRendered = id;
    }

    public static getPageBuilder(): PageBuilder {
        return this.pageBuilder;
    }

    public static getComponentBuilder(): ComponentBuilder {
        return this.componentBuilder;
    }
}

export default Initializer;