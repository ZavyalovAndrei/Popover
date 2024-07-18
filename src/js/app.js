import { Popup } from "./popup.js";

const form = document.querySelector('.form');
const popupFactory = new Popup();
let actualMessages = [];
const showPopup = (el) => {
    actualMessages.push({
        name: el.name,
        id: popupFactory.showPopup(el)
    })
}

form.addEventListener('click', (e) => {
    e.preventDefault();
    const filteredMessages = actualMessages.filter(actual => actual.name ===(e.target.name)); 
    if (e.target.classList.contains("btn") ) {
        actualMessages.forEach((message) => popupFactory.removePopup(message.id));
        actualMessages = [];
        if (filteredMessages.length > 0) {
            return true;
        } else {
            showPopup(e.target);
            return true;
        }
    } 
});