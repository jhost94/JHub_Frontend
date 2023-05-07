import Page from '../components/Page.js';
import InternalPage from '../components/internal/InternalPage.js';
import DefaultValues from '../constants/DefaultValues.js';

class PageRenderer {
    private static pages: Map<string, InternalPage> = new Map();
    private static defaultCondif: boolean = true;
    //The root element, the base for all the new elements to start from. Usually document.body, but could be reconfigured
    private static re: Element; 

    public static rootElement(el: Element): Element {
        this.re = el;
        return this.re;
    }

    public static page(id: string, page: InternalPage): InternalPage {
        this.pages.set(id, page);
        return this.pages.get(id) ?? page;
    }

    public static render(id: string = DefaultValues.DEFAULT_PAGE_ID): void {
        if (!this.pages.has(id)) throw "error";
        console.log(this.pages.get(id)!.get())
        this.re.appendChild(this.pages.get(id)!.get());
    }
}

export default PageRenderer;