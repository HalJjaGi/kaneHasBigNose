let imgElement = document.getElementById("kaneKo");

let imageURL = "./kaneKo.png";
let downloadImg = new Image;
downloadImg.crossOrigin = "Anonymous";
downloadImg.src = imageURL;

document.querySelector('body').appendChild(downloadImg);



imgElement.setAttribute("Access-Control-Allow-Origin", "*");
let mat = cv.imread(imgElement);
console.log(mat);
cv.imshow("ouput", mat)
const exp = 2       // 볼록, 오목 지수 (오목 : 0.1 ~ 1, 볼록 : 1.1~)
const scale = 1           // 변환 영역 크기 (0 ~ 1), 극좌표에서 반지름에 제한