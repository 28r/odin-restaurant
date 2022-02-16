export function LoadPage() {
    let header = document.createElement('h1');
    header.innerHTML = "Tony's Bistro & Bar";
    let content = document.getElementById("content");
    content.appendChild(header);
    let copy = document.createElement('p');
    copy.innerHTML = "No booleans, only Berninis.";
    content.appendChild(copy);
    let myImage = document.createElement("img");
    myImage.src = "../assets/restaurant-helena-lopes-696218.jpg";
    myImage.style = "width: 50vw; height: auto;";
    content.appendChild(myImage);
    let credits = document.createElement('p');
    credits.innerText = `Photo by `;
    let temp_span = document.createElement('span');
    let link = document.createElement('a');
    link.href = "https://www.pexels.com/photo/people-drinking-liquor-and-talking-on-dining-table-close-up-photo-696218/";
    link.target = '_blank';
    link.innerHTML = "Helena Lopes on Pexels";
    temp_span.appendChild(link);
    credits.appendChild(temp_span);
    content.appendChild(credits);
    return;
}

export function LoadFooter() {
    let footer = document.createElement('footer');
    footer.innerText = `Coded and styled by `;
    let temp_span = document.createElement('span');
    let link = document.createElement('a');
    link.href = "https://github.com/28r";
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = "Antônio Moraes";
    temp_span.appendChild(link);
    footer.appendChild(temp_span);
    let temp_span2 = document.createElement('span');
    temp_span2.innerHTML = " &copy; 2022";
    footer.appendChild(temp_span2);
    footer.classList.add('footer');
    document.body.appendChild(footer);
    return;
}