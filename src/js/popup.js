export class Popup {
    constructor() {
        this._popup = [];
    }

    showPopup(element) {
        const popup = document.createElement('DIV');
        popup.classList.add('popup');
        document.body.append(popup);
        popup.innerHTML = "<div class='popup-arrow'></div><h3 class='popup-title'>" + element.title + "</h3><div class='popup-form'>" + element.getAttribute('data-content') + "</div>";

        const id = performance.now();

        this._popup.push({
            id,
            element: popup
        })

        const { right, top } = element.getBoundingClientRect();
        popup.style.left = right - element.offsetWidth / 2 - popup.offsetWidth / 2 + 'px';
        popup.style.top = top - element.offsetHeight - popup.offsetHeight / 2  + 1 +'px';
        return id;
    }

    removePopup(id) {
        const popup = this._popup.find(t => t.id === id);

        popup.element.remove();

        this._popup = this._popup.filter(t => t.id !== id);
    }
}