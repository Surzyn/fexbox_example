window.onload = function () {
    (function directionHandler() {
        var allDirections = getElementsByClass('direction-button');
        var container = getElementsByClass('directions')[0];
        setEventForButtons(allDirections, container, 'flex-direction');
    })();


    (function directionHandler() {
        var allButtons = getElementsByClass('wrap-button');
        var container = getElementsByClass('wrap')[0];
        setEventForButtons(allButtons, container, 'flex-wrap');
    })();


    (function justifyHandler() {
        var allButtons = getElementsByClass('justify-button');
        var container = getElementsByClass('justify')[0];
        setEventForButtons(allButtons, container, 'justify-content');
    })();

    (function alignHandler() {
        var allButtons = getElementsByClass('align-button');
        var container = getElementsByClass('align')[0];
        setEventForButtons(allButtons, container, 'align-items');
    })();

    (function alingSelfContentHandler() {
        var allButtons = getElementsByClass('align-self-button');
        var container = getElementsByClass('aling-self-square')[0];

        setEventForButtons(allButtons, container, 'align-self');
    })();

    function setEventForButtons(allButtons, container, styleName) {
        for (let index = 0; index < allButtons.length; index++) {
            const button = allButtons[index];
            button.onclick = function () {
                var value = button.innerText;
                setStyleForElement(container, styleName, value);

            }
        }
    }
    function getElementsByClass(className) {
        return document.getElementsByClassName(className);
    }

    function setStyleForElement(element, styleName, styleValue) {
        element.style[styleName] = styleValue;
    }
}