/*This is a self-invoking anonymous function (also known as an
immediately invoked function expression or IIFE)It is used to
create a closure and encapsulate the code within it. */
(function () {
    var container = document.querySelector('#_tcx-9sqln0inajw');
    if (!container) {
        return;
    }

/**
 * This creates a new `div` element with a specified URL
 * and text, and appends it to a container element.*/
    function addToContainer(url, text) {
        /* this creats the new `div`element.*/
        const wrapper = document.createElement('div');
        /*makes it so the url variable will stand for the `data-tcx-url` of the
        `wrapper` element*/
        wrapper.setAttribute('data-tcx-url', url);
        /* creates a new variable 'text' and sets it to the value of the text content os the `wrapper`
        element. */
        wrapper.innerText = text;
        /* this appends the `wrapper` element as a child to the `container` element. */
        container.appendChild(wrapper);
    }

/* The code is creating a new function called `fetch` that overrides the built-in
`fetch` function in JavaScript. */
    const fetch = window.fetch
    window.fetch = function () {
        return Promise.resolve(fetch.apply(window, arguments))
            .then(async response => {
                if (response.ok) {
                    try {
                        const clone = response.clone();
                        const json = await clone.json();
                        addToContainer(clone.url, JSON.stringify(json));
                    } catch (err) { }
                }
                return response;
            });
    };

    var XHR = XMLHttpRequest.prototype;
    var send = XHR.send;
    var open = XHR.open;
    XHR.open = function (method, url) {
        this.url = url;
        return open.apply(this, arguments);
    };

    //  Sends the XHR request and handles the response.
    XHR.send = function () {
        this.addEventListener('load', function () {
            try {
                const response = this.response;
                if (response && response.length) {
                    const firstChar = response[ 0 ];
                    if (firstChar === '[' || firstChar === '{') {
                        addToContainer(this.url, response);
                    }
                }
            } catch (err) {
                // No-op.
            }
        });
        return send.apply(this, arguments);
    };
})();