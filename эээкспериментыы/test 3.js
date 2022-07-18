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

let imgWidth = visibleWidth * 0.236;
let margin = visibleWidth * 0.02;

let content = document.querySelector(".content");
let contWidth = content.offsetWidth;

let GALERYS = [];

for (let i = 0; i < galerys.length; i++) {
    let galery = galerys[i];
    console.log(galery);
    let imgs = galery.querySelectorAll("img");
    sizeImgs(imgs);
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
        img.addEventListener("click", {handleEvent: onClickimg, id: i, item: n}) 
    };

    document.getElementById(`${i}`).querySelector(".slide-right").addEventListener("click", { handleEvent: nextItem, id: i });
    document.getElementById(`${i}`).querySelector(".slide-left").addEventListener("click", { handleEvent: previousItem, id: i });

    SetSelectedItem(i, GALERYS[i].selectedItem, "right")
}


function sizeImgs(imgs) {
    console.log("sizeImgs");
    console.log(imgs);
    console.log(imgs.length);
    for (let n = 0; n < imgs.length; n++) {
        imgs[n].style.width = `${imgWidth}px`;
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