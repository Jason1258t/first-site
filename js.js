let showtimer

let prevScrollpos = window.pageYOffset;


window.onscroll = function () {
    let currentScrollpos = window.pageYOffset;
    if (document.documentElement.clientWidth > 575) {
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
    } else {
        document.getElementById('nav').style.position = "fixed";
        document.getElementById('nav').style.zIndex = "100000";
    }
    let to_top = document.getElementById("to-top");
    if (currentScrollpos > 500) {
        to_top.classList.add("show");
    } else {
        to_top.classList.remove("show");
    }


}

window.onload = setTimeout(ResizeAll, 1000);


let hoverImage = 2;
galeryImg();
equipmentResize();
window.addEventListener("resize", ResizeAll);

function ResizeAll() {
    galeryImg();
    equipmentResize();
    
    for (let i = 0; i < GALERYS.length; i++) {
        sizeImgs(GALERYS[i].imgs);
    }
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

let galerys = document.querySelectorAll(".production-galery");
let visibleWidth = document.querySelector(".visible-galery").offsetWidth;

const config = [
    {
        imgs: [
            {
                src: "image/production-1/image-1.JPG",
                alt: "Отвертка"
            },
            {
                src: "image/production-1/image-2.JPG",
                alt: "Ползун"
            },
            {
                src: "image/production-1/image-3.JPG",
                alt: "Ролик"
            },
            {
                src: "image/production-1/image-4.JPG",
                alt: "Ручка"
            },
            {
                src: "image/production-1/image-5.JPG",
                alt: "Фланец"
            }
        ]
    },
    {
        imgs: [
            {
                src: "image/production-2/image-1.JPG",
                alt: "Втулка 65"
            },
            {
                src: "image/production-2/image-2.JPG",
                alt: "Втулка верхняя"
            },
            {
                src: "image/production-2/image-3.JPG",
                alt: "Заглушка на веревочную лесницу"
            },
            {
                src: "image/production-2/image-4.JPG",
                alt: "Заглушки Д8"
            },
            {
                src: "image/production-2/image-5.JPG",
                alt: "Заглушки полусферы"
            },
            {
                src: "image/production-2/image-6.JPG",
                alt: "Заглушки"
            },
            {
                src: "image/production-2/image-7.JPG",
                alt: "Кольцо гимнастическое"
            },
            {
                src: "image/production-2/image-8.JPG",
                alt: "Корпус 011"
            },
            {
                src: "image/production-2/image-9.JPG",
                alt: "Опора верхняя"
            },
            {
                src: "image/production-2/image-10.JPG",
                alt: "Опора  нижняя"
            },
            {
                src: "image/production-2/image-11.JPG",
                alt: "Полухомут большой"
            },
            {
                src: "image/production-2/image-12.JPG",
                alt: "Полухомут Д42"
            },
            {
                src: "image/production-2/image-13.JPG",
                alt: "Полухомут малый"
            },
            {
                src: "image/production-2/image-14.JPG",
                alt: "Полухомут"
            },
            {
                src: "image/production-2/image-15.JPG",
                alt: "Прокладка"
            },
            {
                src: "image/production-2/image-16.JPG",
                alt: "Ступень в сборе"
            },
            {
                src: "image/production-2/image-17.JPG",
                alt: "Хомуты"
            },
        ]
    },
    {
        imgs: [
            {
                src: "image/production-3/image-1.JPG",
                alt: "Бокс монтажный"
            },
            {
                src: "image/production-3/image-2.JPG",
                alt: "Вставка АБС"
            },
            {
                src: "image/production-3/image-3.JPG",
                alt: "Дугогосительная камера"
            },
            {
                src: "image/production-3/image-4.JPG",
                alt: "Заглушка круглая"
            },
            {
                src: "image/production-3/image-5.JPG",
                alt: "Заглушка ПВХ"
            },
            {
                src: "image/production-3/image-6.JPG",
                alt: "Заглушка фигурная"
            },
            {
                src: "image/production-3/image-7.JPG",
                alt: "Изолятор"
            },
            {
                src: "image/production-3/image-8.JPG",
                alt: "Коробка монтажная"
            },
            {
                src: "image/production-3/image-9.JPG",
                alt: "Корпус автомата ПА"
            },
            {
                src: "image/production-3/image-10.JPG",
                alt: "корпус автомата"
            },
            {
                src: "image/production-3/image-11.JPG",
                alt: "корпус антены"
            },
            {
                src: "image/production-3/image-12.JPG",
                alt: "Корпус полистирол"
            },
            {
                src: "image/production-3/image-13.JPG",
                alt: "Корпус прибора"
            },
            {
                src: "image/production-3/image-14.JPG",
                alt: "Корпус рапредкоробки"
            },
            {
                src: "image/production-3/image-15.JPG",
                alt: "Корус рэле давления"
            },
            {
                src: "image/production-3/image-16.JPG",
                alt: "Корпус шторки"
            },
            {
                src: "image/production-3/image-17.JPG",
                alt: "Крышка автомата ПА"
            },
            {
                src: "image/production-3/image-18.JPG",
                alt: "Крушка ПК"
            },
            {
                src: "image/production-3/image-19.JPG",
                alt: "Крышка ПП"
            },
            {
                src: "image/production-3/image-20.JPG",
                alt: "Прокладка ПК"
            },
            {
                src: "image/production-3/image-21.JPG",
                alt: "Указатель"
            },
        ]
    },
    {
        imgs: [
            {
                src: "image/production-4/image-1.JPG",
                alt: "Буфер"
            },
            {
                src: "image/production-4/image-2.JPG",
                alt: "Втулка переходная"
            },
            {
                src: "image/production-4/image-3.JPG",
                alt: "Гильза"
            },
            {
                src: "image/production-4/image-4.JPG",
                alt: "Заглушка газовая"
            },
            {
                src: "image/production-4/image-5.JPG",
                alt: "Заглушка ПК"
            },
            {
                src: "image/production-4/image-6.JPG",
                alt: "Клипса"
            },
            {
                src: "image/production-4/image-7.JPG",
                alt: "Ключ"
            },
            {
                src: "image/production-4/image-8.JPG",
                alt: "Кожух"
            },{
                src: "image/production-4/image-9.JPG",
                alt: "Колпачок средний"
            },
            {
                src: "image/production-4/image-10.JPG",
                alt: "Колпачок"
            },
            {
                src: "image/production-4/image-11.JPG",
                alt: "Конус"
            },
            {
                src: "image/production-4/image-12.JPG",
                alt: "Кронштейн"
            },
            {
                src: "image/production-4/image-13.JPG",
                alt: "Крышка ПЭ"
            },
            {
                src: "image/production-4/image-14.JPG",
                alt: "Ложемент"
            },
            {
                src: "image/production-4/image-15.JPG",
                alt: "Накладка"
            },
            {
                src: "image/production-4/image-16.JPG",
                alt: "Обойма"
            },
            {
                src: "image/production-4/image-17.JPG",
                alt: "Окно"
            },{
                src: "image/production-4/image-18.JPG",
                alt: "Опора"
            },
            {
                src: "image/production-4/image-19.JPG",
                alt: "Ролик малый"
            },
            {
                src: "image/production-4/image-20.JPG",
                alt: "Ручка конуса"
            },
            {
                src: "image/production-4/image-21.JPG",
                alt: "Ручка ЛОС"
            },
            {
                src: "image/production-4/image-22.JPG",
                alt: "Ручка ригеля"
            },
            {
                src: "image/production-4/image-23.JPG",
                alt: "Ручка черенка"
            },
            {
                src: "image/production-4/image-24.JPG",
                alt: "Стяжки садовые"
            },
            {
                src: "image/production-4/image-25.JPG",
                alt: "Толкатель"
            },
            {
                src: "image/production-4/image-26.JPG",
                alt: "Улстка"
            },{
                src: "image/production-4/image-27.JPG",
                alt: "Фланец"
            },
        ]
    }
];

fillContent();

let imgWidth = document.querySelector(".production-galery").querySelector("img").offsetWidth;
let margin = visibleWidth * 0.02;

let content = document.querySelector(".content");
let contWidth = content.offsetWidth;

let GALERYS = [];

for (let i = 0; i < galerys.length; i++) {
    let galery = galerys[i];
    console.log(galery);
    let imgs = galery.querySelectorAll("img");
    sizeImgs(imgs);
    console.log(imgWidth + " " + visibleWidth + " " + margin + "size imgs")
    GALERYS[i] = {
        galery: galery,
        imgs: imgs,
        selectedItem: 0,
        left: 0,
        imgsInfo: []
    };

    for (let n = 0; n < GALERYS[i].imgs.length; n++) {
        GALERYS[i].imgs[n] = {
            id: n,
            contLeft: contWidth * n,
        }
        var img = imgs[n];
        img.addEventListener("click", {handleEvent: onClickimg, id: i, item: n});
    };

    console.log(`#galery-section-${i}`);

    document.querySelector(`#galery-section-${i}`).querySelector(".slide-right").addEventListener("click", { handleEvent: nextItem, id: i });
    document.querySelector(`#galery-section-${i}`).querySelector(".slide-left").addEventListener("click", { handleEvent: previousItem, id: i });

    SetSelectedItem(i, GALERYS[i].selectedItem, "right")
}


function sizeImgs(imgs) {
    visibleWidth = document.querySelector(".visible-galery").offsetWidth;
    imgWidth = document.querySelector(".production-galery").querySelector("img").offsetWidth;
    margin = visibleWidth * 0.02;
    var imgHeight = document.querySelector(".production-galery").querySelector("img").offsetHeight;
    var section = imgs[0].offsetParent.offsetParent.offsetParent;
    var right = section.querySelector(".slide-right");
    var left = section.querySelector(".slide-left");
    right.style.height = left.style.height = `${imgHeight * 203/155}px`;
    right.style.width = left.style.width = `${32/203*imgHeight}px`;

    for (let n = 0; n < imgs.length; n++) {
        imgs[n].style.marginRight = `${margin}px`;
    }
}

function onClickimg(e) {
    var id = this.id;
    var item = this.item;
    var selectedItem = GALERYS[id].selectedItem;
    var dir;
    if (item >= selectedItem) {
        dir = "right"
    } else{
        dir = "left"
    };

    GALERYS[id].selectedItem = item;
    cleareSelect(id);
    SetSelectedItem(id, item, dir);

}

function nextItem(e) {
    var id = this.id;
    var galery = GALERYS[id];
    cleareSelect(id);

    if (GALERYS[id].imgs.length - 1 > GALERYS[id].selectedItem) {
        GALERYS[id].selectedItem++;
        console.log(`item = ${GALERYS[id].selectedItem}`)
    } else {
        GALERYS[id].selectedItem = 0;
        console.log("item = 0")
    }

    SetSelectedItem(id, GALERYS[id].selectedItem, "right");

}

function previousItem() {
    var id = this.id;
    var galery = GALERYS[id];
    cleareSelect(id);

    if (GALERYS[id].selectedItem > 0) {
        console.log("-item");
        GALERYS[id].selectedItem--;
    } else {
        GALERYS[id].selectedItem = GALERYS[id].imgs.length - 1;
    }

    SetSelectedItem(id, GALERYS[id].selectedItem, "left");
}

function cleareSelect(id) {
    var imgs = GALERYS[id].imgs;
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.border = "none";
        imgs[i].style.borderRadius = "0";
    }
}

function SetSelectedItem(id, item, dir) {
    var imgs = GALERYS[id].imgs;
    imgs[item].style.border = "2px solid #000";
    imgs[item].style.borderRadius = "10px";
    var chapter = document.getElementById(`production-${id+1}`);
    var counter = chapter.querySelector(".counter");

    counter.innerHTML = `${item+1}/${imgs.length}`;
    scrollGalery(id, item, dir);
    setCard(id, item);
}

function scrollGalery(id, item, dir) {
    console.log("scroll");
    var galery = GALERYS[id].galery;
    console.log(galery);
    var left = GALERYS[id].left;
    if (dir === "right") {
        if ((imgWidth * (item + 1) + margin * item + left) > visibleWidth) {
            galery.style.left = `${(GALERYS[id].left - imgWidth - margin)}px`;
            GALERYS[id].left -= (imgWidth + margin);
        } else {
            if (item != 0 && (imgWidth * item + margin * item - left) < 0) {
                console.log(imgWidth * item + margin * item - left);
                console.log("right");
                galery.style.left = `${(GALERYS[id].left + imgWidth + margin)}px`;
                GALERYS[id].left += (imgWidth + margin);
            } else {
                galery.style.left = "0";
                GALERYS[id].left = 0;
            }

        }
    } else {
        
        if (item != GALERYS[id].imgs.length - 1 && (imgWidth * item + margin * (item-1) + left) < 0) {
            console.log(imgWidth * item + margin * item + left);
            console.log(item);
            GALERYS[id].left += (imgWidth + margin);
            galery.style.left = `${GALERYS[id].left}px`;
            console.log(left + " --> " + GALERYS[id].left);
        } else if (item === GALERYS[id].imgs.length - 1) {
            console.log("хуй");
            GALERYS[id].left -= imgWidth * item + margin * (item-1) + (left - visibleWidth + imgWidth);
            galery.style.left = `${(GALERYS[id].left)}px`;
            
            console.log(left + " --> " + GALERYS[id].left);
        }
        
    }
    console.log("item: " + item);
    console.log("рсчетная залупа: " +  (imgWidth * item + margin * (item-1) - left))
    console.log("left: " + GALERYS[id].left)



}

function setCard(id, card) {
    var wrapper = document.getElementById(`wrapper-${id+1}`);
    wrapper.style.left = `${-card * contWidth}px`;
}




function fillContent() {
    for (let i = 0; i < galerys.length; i++) {
        var imgs = config[i].imgs;
        var chapter = document.getElementById(`production-${i+1}`);
        var counter = chapter.querySelector(".counter");
        console.log(counter);
        console.log(`0/${imgs.length}`)
        counter.innerHTML = `1/${imgs.length}`;

        for (let n = 0; n < imgs.length; n++) {

            var imgInfo = imgs[n];
            var alt = imgInfo.alt;
            var src = imgInfo.src;

            var wrapper = document.getElementById(`wrapper-${i+1}`);
            var galery = galerys[i];
            
            var newImg = document.createElement("img");
            var contentImg = document.createElement("img");
            newImg.src = contentImg.src = src;

            var content = document.createElement("div");
            content.classList.add("content");

            var p = document.createElement("p");
            p.innerText = alt;

            content.appendChild(contentImg);
            content.appendChild(p);

            wrapper.appendChild(content);
            galery.appendChild(newImg);
        }
    }
}

function showMobileMenu() {
    let menu = document.getElementById("mob-nav");
    menu.classList.add("show");
}

function hideMobileMenu() {
    let menu = document.getElementById("mob-nav");
    menu.classList.remove("show")
}