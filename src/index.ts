import header from "./header/header.js";

const id = setInterval(() => {if (document.readyState === 'interactive' || document.readyState == 'complete') stop()}, 0);

function stop() {
    clearInterval(id);
    test();
}

function test() {
    const body = document.body;
    const element = document.createElement('test', {
        is: 'div'
    });
    // const node = new Node()
    
    // element.text
    element.innerHTML = header();
    body.append(element);
    
}