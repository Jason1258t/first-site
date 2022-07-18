let galerys = document.querySelectorAll(".production-galery");
let GALERY = [];


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
    }
];



for (let i = 0; i < galerys.length; i++) {
    var galery = galerys[i];
    var imgConf = config[i];
    var wrapper = document.getElementById(`wrapper-${i+1}`);
    for (let n = 0; n < imgConf.imgs.length; n++) {
        var newImg = document.createElement("img");
        var newContent = document.createElement("div");

        var src = imgConf.imgs[n].src;
        var alt = imgConf.imgs[n].alt;
        newImg.src = src;
        newImg.alt = alt;

        galery.appendChild(newImg);

        newContent.classList.add("content");
        var newP = document.createElement("p");
        newP.innerText = alt;

        wrapper.appendChild(newContent);

        var cardImg = document.createElement("img");
        cardImg.src = src;
        cardImg.alt = alt;

        newContent.appendChild(cardImg);
        newContent.appendChild(newP);
    }


    var imgs = galery.querySelectorAll("img");

    console.log(galery);
    console.log(imgs);

    GALERY[i] = {
        id: i+1,
        length: imgs.length,
        imgs: [],
        img: imgs,
        selectImage: 0,
    }
  
    clickedImage(imgs, GALERY[i].selectImage); 

}

let prodimgwidth = document.querySelector(".content").querySelector("img").offsetWidth;
console.log(galerys);


for (let i = 0; i < GALERY.length; i++) {
    var galery = galerys[i];
    var imgs = galery.querySelectorAll("img");
    for (let im = 0; im < GALERY[i].length; im++) {
        GALERY[i].imgs[im] = {
            id: im,
            pos: -im*prodimgwidth,
        }
        GALERY[i].img[im].addEventListener("click", {handleEvent: SetSelectedItem, id: im, pos: -im*prodimgwidth, imgs: GALERY[i].img, wrapper: i+1}, false)
    }
}

function SetSelectedItem(e) {
    var pos = this.pos;
    var imgs = this.imgs;

    clickedImage(imgs, this.id);

    var wrapper = document.getElementById(`wrapper-${this.wrapper}`);
    wrapper.style.left = `${pos}px`;
}

function clickedImage(imgs, imgid) {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.borderRadius = "0";
    }

    var img = imgs[imgid];
    img.style.borderRadius = "20px";
}