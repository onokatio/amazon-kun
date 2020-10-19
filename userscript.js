// ==UserScript==
// @name         あまぞんくん
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.co.jp/s?k=*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';


    const asin = Array.from(document.getElementsByClassName("s-asin"));
    asin.forEach( elm => {
	    //<div style="min-width: 935px; max-width: 960px; 

            const keepaParent = document.createElement("div");
	    keepaParent.style.cssText = "display: flex; height: 458px; margin: 10px 0px 0px; max-width: 20vw;";

            const keepaFrame = document.createElement("iframe");
	    keepaFrame.src = "https://keepa.com/iframe_addon.html#5-0-B0869C3SSN";
	    keepaFrame.style.cssText = "width: 100%;maxwidth: 20vw; border: 0 none; overflow: hidden";

	    keepaParent.appendChild(keepaFrame);

	    const productsBox = document.evaluate("div/span/div/div/div", elm, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	    productsBox.singleNodeValue.appendChild(keepaParent);
    })

})();
