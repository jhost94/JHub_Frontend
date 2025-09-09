import ElementVendor from "@jhub-center/jhostify-script/framework/requirements/ElementVendor";
import InternalComponent from "@jhub-center/jhostify-script/framework/components/internal/InternalComponent";
import Component from "@jhub-center/jhostify-script/framework/components/Component";
import Initializer from "@jhub-center/jhostify-script/framework/Initializer";

function header(elementBuilder: ElementVendor): InternalComponent {
    const template = `
    <header>
        Header
    </header>
    `;

    const component = new Component('header', template);
    return Initializer.getComponentBuilder().build(component);
}

export default header