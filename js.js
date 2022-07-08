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
        if (window.offsetWidth > 575) {
            clearTimeout(showtimer);
            document.getElementById('nav').style.position = "static";
            document.getElementById('nav').classList.remove('show-menu');
            document.getElementById('nav').classList.remove('hide');
        }

    }
    let to_top = document.getElementById("to-top");
    if (currentScrollpos > 500) {
        to_top.classList.add("show");
    } else {
        to_top.classList.remove("show");
    }

}

let hoverImage = 2;
galeryImg();
equipmentResize();
window.addEventListener("resize", ResizeAll);

function ResizeAll() {
    galeryImg();
    equipmentResize();
}

function galeryImg() {
    let galery = document.querySelector(".galery");
    let images = galery.querySelectorAll("img");
    let imgContainers = galery.querySelectorAll(".gimContainer");

    if (document.documentElement.clientWidth > 900) {

        images[2].style.width = "255px";
        images[2].style.height = "178px";
        images[2].style.marginTop = "65px";

        images[1].style.width = "350px";
        images[1].style.height = "245px";

        images[0].style.width = "255px";
        images[0].style.height = "178px";
        images[0].style.marginTop = "65px";

        for (let i = 0; i < 3; i++) {
            images[i].style.borderRadius = "7px";
        }

        for (let cont = 0; cont < 3; cont++) {
            imgContainers[cont].style.minWidth = "0";
            imgContainers[cont].style.maxWidth = "50%";
            imgContainers[cont].style.marginRight = "0";
        }
    } else {
        if (document.documentElement.clientWidth > 575) {
            for (let img = 0; img < 3; img++) {
                images[img].style.width = "auto";
                images[img].style.height = "100%";
                images[img].style.marginTop = "0";
                images[img].style.borderRadius = "0";
            }

            for (let i = 0; i < 3; i++) {

                if (i != hoverImage) {

                    let maxWidth = Math.floor((galery.offsetWidth - images[hoverImage].offsetWidth) / galery.offsetWidth * 100) / 2 - 1;

                    imgContainers[i].style.minWidth = `${maxWidth}%`;
                    imgContainers[i].style.maxWidth = `${maxWidth}%`;
                } else {
                    imgContainers[i].style.minWidth = "0";

                    let maxWidth = Math.round(images[i].offsetWidth / galery.offsetWidth * 100);
                    imgContainers[i].style.maxWidth = `${maxWidth}%`;
                }

                imgContainers[i].addEventListener("mouseover", selectImage);
            }
        } else {
            for (let i = 0; i < 3; i++) {
                images[i].style.width = "100%";
                images[i].style.height = "auto";
                images[i].style.marginTop = "0";
                images[i].style.borderRadius = "0";

                imgContainers[i].style.minWidth = "0";
                imgContainers[i].style.maxWidth = "100%";
                imgContainers[i].style.width = "100%";
                imgContainers[i].style.height = "auto";

            }
        }
    }
}


function equipmentResize() {
    let lines = document.querySelectorAll(".line");
    let line2 = lines[1];
    if (document.documentElement.clientWidth <= 767) {
        let imageWidth = line2.offsetWidth * 0.45;
        let imageHeight = imageWidth * 0.73;

        line2.style.marginTop = `${-imageHeight - 4}px`;

        console.log(-imageHeight);

        for (let i = 0; i < 2; i++) {
            let img = lines[i].querySelector("img");
            img.style.maxWidth = `${imageWidth}px`;
            img.style.maxHeight = `${imageHeight}px`;

            img.style.width = `${imageWidth}px`;
            img.style.height = `${imageHeight}px`;

            if (i === 0) {
                img.style.left = `${line2.offsetWidth * 0.05}px`;
                img.style.bottom = "0";
            } else {
                img.style.marginLeft = `${imageWidth + line2.offsetWidth * 0.05}px`;
                img.style.marginBottom = "20px";
            }
        }
    } else {
        line2.style.marginTop = "0";

        for (let i = 0; i < 2; i++) {
            let img = lines[i].querySelector("img");
            img.style.maxWidth = "45%";
            img.style.maxHeight = "45%";
            img.style.width = "45%";
            img.style.height = "45%";
            img.style.marginLeft = "0";
            img.style.marginBottom = "0";
        }
    }
}

function selectImage(e) {
    let image = e.target;
    let id = Number(image.id);

    hoverImage = id;
    galeryImg();
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