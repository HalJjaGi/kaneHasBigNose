const canvas = document.getElementById("output");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "kaneKo.png";
const nose = new Image();
nose.src = "KoFeather.png";
let i = 0;
function enlarge() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 718, 332, 484, 416);
    ctx.drawImage(nose, 718-i/2, 332-i/2, 484+i, 416+i);
    i+=2;
}



canvas.addEventListener("click", function(e) {
    clearInterval(start);
    const enlargeNose = setInterval(enlarge, 1);
})

ctx.drawImage(img, 718, 332, 484, 416);

function draw() {
    ctx.drawImage(img, 718, 332, 484, 416);
}

const start = setInterval(draw, 1);