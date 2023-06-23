//   myPassWord = () => {
//     var pass= document.getElementById("myPass");
//     if (pass.type === "password") {
//       pass.type = "text";
//     } else {
//       pass.type = "password";
//     }
//   }


const pass =document.getElementById('myPass');
function myPassWord() {
if (pass.type === "password") {
pass.type = "text";
} else {
pass.type = "password";
}
}
const passes =document.getElementById('myPasses');
function myPassWords() {
if (passes.type === "password") {
passes.type = "text";
} else {
passes.type = "password";
}
}
  let menu =document.querySelector('#lock');
  menu.addEventListener('click', () =>{
      menu.classList.toggle('fa-lock-open');
     
  });
  let menus =document.querySelector('#locks');
  menus.addEventListener('click', () =>{
      menus.classList.toggle('fa-lock-open');
     
  });

// const themes = document.querySelector('#theme');
// themes.addEventListener('click', () =>{
//     themes.classList.toggle('fa-user-slash');
       
// });
