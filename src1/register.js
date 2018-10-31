  const post = document.getElementById("list")

document.getElementById("add").onclick = function() {
  //First things first, we need our text:
  var text = document.getElementById("idea").value; //.value gets input values
  //Now construct a quick list element
  //Now use appendChild and add it to the list!
  // document.getElementById("list"(li);
  const list = document.createElement('li')
  list.innerHTML=text
  post.appendChild(list)
}

const LoginButtonForm = document.getElementById("login")
const registerButtonForm = document.getElementById("register")
const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")
registerButtonForm.addEventListener("click" , () => {
loginForm.style.display = 'none'
registerForm.style.display = 'block'
LoginButtonForm.disabled = false
registerButtonForm.disabled = true
})

LoginButtonForm.addEventListener("click" , () => {
  loginForm.style.display = 'block'
  registerForm.style.display = 'none'
  LoginButtonForm.disabled = true
  registerButtonForm.disabled = false
  })
  
const userEmail = document.getElementById("email1");
const userPassword = document.getElementById("password");
const userAgencia = document.getElementById("agencia");
const buttonRegister = document.getElementById("registers")
const userPasswordVerification=document.getElementById("passwordVerification")
buttonRegister.addEventListener('click', () => {
  const userEmailvalue = userEmail.value;
  const userPasswordvalue = userPassword.value;
  const userAgenciavalue = userAgencia.value;

  const userPasswordVerificationvalue = userPasswordVerification.value;
  console.log(userAgenciavalue);
  
  if (userPasswordvalue.length >= 6) {
      if (userPasswordvalue == userPasswordVerificationvalue) {
          firebase.auth().createUserWithEmailAndPassword(userEmailvalue, userPasswordvalue)
              .then(() => {
                  console.log("usuario creado");
                   
              })
              .catch((error) => {
                  console.log("error de firebase > Codigo > " + error.code);
                  console.log("error de firebase > Mensaje >" + error.message)
              });
      }
      else {
          errorMessagePassword.innerText = "Las contraseñas no coinciden";
      }
  }
  else {
      errorMessagePassword1.innerText = '*Su contraseña debe tener más de 6 caracteres';
  }

//   const writeUserDataFirebase = (userId, name, email, imageUrl) => {
//     firebase.database().ref('users/' + userId).set({
//         username: name,
//         email: email,
//         profile_picture: imageUrl
//     });
// }
})

  