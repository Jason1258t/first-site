const form = document.forms["contact"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

console.log(button);

formArr.forEach((el) => {
    if(el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArr.push(el);
    }
})

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target)
    }
}

function inputCheck(el) {
    const value = el.value;
    const InputReg = el.getAttribute("data-reg");
    const reg = new RegExp(InputReg);

    if(reg.test(value)) {
        el.setAttribute("is-valid", "1");
        el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
        el.setAttribute("is-valid", "0");
        el.style.border = "2px solid rgb(255, 0, 0)";
        console.log(el.getAttribute("is-valid"));
    }
}

function buttonHandler(e) {
    var isValid = true;
    validFormArr.forEach((el) => {
        if (el.getAttribute("is-valid") === "0") {
            isValid = false;
        }
    });

    if (!Boolean(Number(isValid))) {
        e.preventDefault();
    }
}

// $(document).ready(function () {
//     $("form").submit(function () {
//         var formID = $(this).attr('id');
//         var formNm = $('#' + formID);
//         $.ajax({
//             type: "POST",
//             url: "./send.php",
//             data: formNm.serialize(),
//             beforeSend: function() {
//                 $(formNm).html('<p style="text-align: center"> Отправка... </p>');
//             },
//             success: function() {
//                 $(formNm).html('<p style="text-align: center">Отправлено</p>');
//             },
//             error: function() {
//                 $(formNm).html('<p style="text-align: center"> Ошибка </p>');
//             }
//         });
//         return false;
//     });
// });