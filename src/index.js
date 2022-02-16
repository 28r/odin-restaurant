import { LoadPage, LoadFooter } from './loadpage.js'
import { LoadContact, LoadHomePage, LoadMenu } from './loadtabs.js'

const homebutton = document.getElementById('home');
const contactbutton = document.getElementById('contact');
const menubutton = document.getElementById('menu');

LoadPage();
LoadFooter();

homebutton.addEventListener("click", function(){LoadHomePage();});
contactbutton.addEventListener("click", function(){LoadContact();});
menubutton.addEventListener("click", function(){LoadMenu();});