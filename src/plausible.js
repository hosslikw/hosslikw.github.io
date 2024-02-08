// Anonymous function to prevent polluting global scope
! function () {
// Enforce strict mode for JavaScript
"use strict";

// Define variables for window location and document
var a = window.location
, r = window.document,
// Get the script that is currently being processed
o = r.currentScript,
// Get the data-api attribute or default to origin + "/api/event"
l = o.getAttribute("data-api") || new URL(o.src)
.origin + "/api/event";

// Function to handle ignored events
function s(t, e) {
// If event is ignored, log a warning
if (t) console.warn("Ignoring Event: " + t);
// If a callback is provided, call it
if (e && e.callback) e.callback();
}

// Function to handle events
function t(t, e) {
// If running on localhost, ignore
if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname) || "file:" === a.protocol)
return s("localhost", e);
// If running on a headless browser, ignore
if (window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress)
return s(null, e);
// If plausible_ignore is set in localStorage, ignore
try {
if ("true" === window.localStorage.plausible_ignore)
return s("localStorage flag", e)
}
catch (t) {}

// Prepare the data to be sent
var n = {
n: t
, u: a.href
, d: o.getAttribute("data-domain")
, r: r.referrer || null
, };
if (e && e.meta) n.m = JSON.stringify(e.meta);

window.addEventListener("popstate", p);
"prerender" === r.visibilityState ? r.addEventListener("visibilitychange", function () {
n || "visible" !== r.visibilityState || p()
if (e && e.props) n.p = e.props;

// Create a new XMLHttpRequest
var i = new XMLHttpRequest;
// Open the request
i.open("POST", l, true);
// Set the request header
i.setRequestHeader("Content-Type", "text/plain");
// Send the request
i.send(JSON.stringify(n));
// Assign a function to handle state changes
i.onreadystatechange = function () {}): p()
};
// When the request is complete, call the callback if provided
if (4 === i.readyState && e && e.callback) e.callback();
}

// Handle queued events
var e = window.plausible && window.plausible.q || [];
window.plausible = t;
for (var n, i = 0; i < e.length; i++)
t.apply(this, e[i]);

// Function to handle page views
function p() {
// If the page has changed
if (n !== a.pathname) {
// Update the current page
n = a.pathname;
// Send a pageview event
t("pageview");
}
}

// Override the pushState function to detect page changes
var c, w = window.history;
if (w.pushState) {
c = w.pushState;
w.pushState = function () {
c.apply(this, arguments);
p();
};
window.addEventListener("popstate", p);
}

// If the page is being prerendered
if ("prerender" === r.visibilityState) {
// Wait for the page to become visible before sending a pageview event
r.addEventListener("visibilitychange", function () {
if (!n && "visible" === r.visibilityState) p();
});
}
else {
// Otherwise, send a pageview event immediately
p();
}
