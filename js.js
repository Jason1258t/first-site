let showtimer

let prevScrollpos = window.pageYOffset;


window.onscroll = function () {
    let currentScrollpos = window.pageYOffset;
    if (currentScrollpos > 100) {
        nav = document.getElementById('nav');
        nav.classList.add('hide');
        showtimer = setTimeout(showNavMenu, 200);
    }
    else {
        clearTimeout(showtimer);
        document.getElementById('nav').style.position = "static";
        document.getElementById('nav').classList.remove('show-menu');
        document.getElementById('nav').classList.remove('hide');

    }
}

function showNavMenu() {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.zIndex = "10000"
    nav.classList.add('show-menu')
}

let count_wrappers = 4;
let wrappers = [];


for (let i = 1; i < count_wrappers + 1; i++) {
    let wrapper = document.querySelector("#wrapper" + i);
    let container = document.querySelector("#wrapper_container_" + i).querySelector("#navLinks");
    let links = container.querySelectorAll(".itemLinks");
    wrappers[i - 1] = {
        wrapper: wrapper,
        links: links,
        selectedItem: 0,
        count: links.length,
    }
    console.log(links);
    console.log(links.length);
    container = document.querySelector("#wrapper_container_" + i);
    let left = container.querySelector(".arrow-left");
    let right = container.querySelector(".arrow-right");
    left.addEventListener("click", { handleEvent: slideLeft, wrapper: i - 1 }, false);
    right.addEventListener("click", { handleEvent: slideRight, wrapper: i - 1 }, false);
}

// еще не все
function slideRight(e) {
    wrapid = this.wrapper;
    if (wrappers[wrapid].selectedItem < wrappers[wrapid].count - 1) {
        wrappers[wrapid].selectedItem++;

    } else {
        wrappers[wrapid].selectedItem = 0;
    }
    removeActiveLinks(wrappers[wrapid].links);
    changePos(wrapid, wrappers[wrapid].selectedItem);

}

function slideLeft(e) {
    wrapid = this.wrapper;
    if (wrappers[wrapid].selectedItem > 0) {
        wrappers[wrapid].selectedItem--;

    } else {
        wrappers[wrapid].selectedItem = wrappers[wrapid].count - 1;
    }
    removeActiveLinks(wrappers[wrapid].links);
    changePos(wrapid, wrappers[wrapid].selectedItem);
}

for (let i in wrappers) {
    var links = wrappers[i].links;
    for (let l = 0; l < links.length; l++) {
        var link = links[l];
        link.addEventListener("click", { handleEvent: setClickedItem, a: i }, false);
        link.itemID = l;
    }
}


for (let i in wrappers) {
    wrappers[i].links[wrappers[i].selectedItem].classList.add("active");
}

function setClickedItem(e) {
    removeActiveLinks(wrappers[this.a].links);
    wrappers[this.a].selectedItem = e.target.itemID;
    changePos(this.a, e.target.itemID);

}

function changePos(a, id) {
    var link = wrappers[a].links[id];
    link.classList.add("active");
    wrappers[a].wrapper.style.left = link.getAttribute("data-pos");

}

function removeActiveLinks(links) {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

console.log(wrappers);

function showMobileMenu() {
    let menu = document.getElementById("mob-nav");
    menu.classList.add("show");
}

function hideMobileMenu() {
    let menu = document.getElementById("mob-nav");
    menu.classList.remove("show")
}