const indices = document.querySelectorAll("select");
let trocarImage = document.querySelector(".containerLogin");
const logo = document.querySelector(".logo img");
const texto = document.getElementById("texto");

let icons = [
  "./assets/kindjhin.svg",
  "./assets/iconKarma.png",
  "./assets/iconTeemo.png",
  "./assets/IconZed.png",
];
let images = [
  `url('./assets/dark-cosmic-jhin-splash-art-lol-4K-87.png')`,
  `url('./assets/Karma.jpg')`,
  `url('./assets/Teemo.jpg')`,
  `url('./assets/zed.jpg')`,
];

i = 0;

function Loop() {
  setTimeout(function () {
    trocarImage.style.backgroundImage = images[i];
    logo.src = icons[i];
    i++;
    if (i < images.length) {
      Loop();
    } else {
      i = 0;
      Loop();
    }
  }, 5000);
}
Loop();

indices.forEach((items) => {
  items.addEventListener("click", (e) => {
    const id = e.target.value;
    trocarImage.style.backgroundImage = images[id];
    logo.src = icons[id];
  });
});

const error = document.querySelector(".error");
const box = document.querySelector(".Box");
error.addEventListener("click", () => {
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
});

const validar = () => {
  let input = document.getElementById("texto").value;
  let password = document.getElementById("pass").value;
  const re = /\S+@\S+.\S+/;

  
  let result = re.test(input)
  console.log(result);

  if (result == false) {
    alert("[ERRO] Email invalido!");
  }

  else if(password.length==0){
      alert('Digite uma senha válida!')
  }
  else{
      alert('Tudo certo!')
  }
};
