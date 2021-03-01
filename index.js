//CHARGED IMAGES
const images = [];
images[0] = "assets/images/Foto1.png";
images[1] = "assets/images/Foto2.png";
images[2] = "assets/images/Foto3.png";
images[3] = "assets/images/Foto4.png";

const imagesx2 = [];
imagesx2[0] = "assets/images/Foto1_2x.png";
imagesx2[1] = "assets/images/Foto2_2x.png";
imagesx2[2] = "assets/images/Foto3_2x.png";
imagesx2[3] = "assets/images/Foto4_2x.png";

//PROCESS TO MOUNT THE IMAGES
const slides = document.getElementById("slides");

const picture = document.createElement("picture");
picture.className = "picture-container";

const source = document.createElement("source");
source.media = "(max-width:768px)";
/* source.srcset = `${images[i]}`; */

const image = document.createElement("img");
image.className = "picture-container__img";
/* image.src = `${imagesx2[1]}`; */
// Defining variables for show and hide the password when the "eye icon" is clicked
const showHidePassword = document.getElementById("show/hide-password");

const nodeToReplacePassword = document.querySelector(".hide-pass-logo");

const newNodePassword = document.createElement("span");
newNodePassword.className = "show-pass-logo";

const nodeToReplaceType = document.querySelector(".main-login__password-input");

const newNodeType = document.createElement("input");
newNodeType.className = "main-login__password-input";
newNodeType.type = "text";
//CREATING THE VALIDATION LOGUIN WHEN THE BUTTON IS CLICKED
const button = document.querySelector(".session-btn");
//add the piece of code each "x" seconds recreating slider
let index = 0;
cambiarImagen = () => {
  if (index < imagesx2.length) {
    image.src = `${imagesx2[index]}`;
    source.srcset = `${images[index]}`;
    picture.append(source, image);
    slides.append(picture);
    index++;
  } else {
    index = 0;
  }
};

setInterval(cambiarImagen, 2500);

//CREATING THE EVENTS
passwordShowed = () => {
  showHidePassword.replaceChild(newNodePassword, nodeToReplacePassword);
  showHidePassword.replaceChild(newNodeType, nodeToReplaceType);
  console.log();
};
passwordHidded = () => {
  showHidePassword.replaceChild(nodeToReplacePassword, newNodePassword);
  showHidePassword.replaceChild(nodeToReplaceType, newNodeType);
};
nodeToReplacePassword.addEventListener("click", passwordShowed);
newNodePassword.addEventListener("click", passwordHidded);
accion = () => {
  valor = document.querySelector(".main-login__email-input").value;
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(valor)) {
    swal({
      title: "Good job!",
      text: "Your email is correct!",
      icon: "success",
    });
  } else {
    swal({
      title: "Your email is incorrect",
      text: "Please, introduce a correct email",
      icon: "error",
    });
  }
};
button.addEventListener("click", accion);
