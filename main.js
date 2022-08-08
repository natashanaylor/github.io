const displayImg = () => {
    const img = document.createElement("img");
    img.src = "../images/natasha.jpg";

    img.setAttribute("alt", "headshot of Natasha Naylor");

    img.style.display = "block";
    img.style.order = "0";
    img.style.margin = "0 auto";
    img.style.width = "225px";
    img.style.height = "300px";
    img.style.border = "5px double var(--gold)";
    img.style.borderRadius = "50%";

    document.querySelector('.container .portrait').appendChild(img);
};

displayImg();