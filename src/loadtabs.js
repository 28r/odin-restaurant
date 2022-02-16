import { LoadPage } from "./loadpage.js";

let content = document.getElementById("content");

export function LoadContact() {
    content.innerHTML = "";
    let p = document.createElement('p');
    p.innerHTML = 'Feel free to contact us for any business inquiries at'
    p.classList.add('phonenumber');
    content.appendChild(p);
    let h2 = document.createElement('h2');
    h2.innerHTML = '+1 617-495-1000';
    content.appendChild(h2);
    return;
}

export function LoadMenu() {
    content.innerHTML = "";
    let ul = document.createElement('ul');
    let li = [];
    let innerHTML = ["Strawberry Bernini, $5.50", "Grapefruit Bernini, $6.50", "Blueberry Bagel, $2.50", "Aperol Spritz, $3.50", "Açaí com Banana, $6.50", "Misugaru, $3.50", "Club Soda, $1.50"]
    for (let i = 0; i < 7; i++) {
        li[i] = document.createElement('li');
        li[i].innerHTML = innerHTML[i];
        ul.appendChild(li[i]);
    }
    ul.classList.add('menulist');
    content.appendChild(ul);
    return;
}

export function LoadHomePage() {
    content.innerHTML = "";
    LoadPage();
    return;
}