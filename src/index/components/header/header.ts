import ElementVendor from "@jhub-center/jhostify-script/framework/requirements/ElementVendor";
import InternalComponent from "@jhub-center/jhostify-script/framework/components/internal/InternalComponent";
import Component from "@jhub-center/jhostify-script/framework/components/external/Component";
import Context from "@jhub-center/jhostify-script/framework/Context";

function header(elementBuilder: ElementVendor): InternalComponent {
    const template = `
    <header>
        Header
    </header>
    `;

    const component = new Component('header', template);
    return Context.getComponentBuilder().build(component);
}

export default header