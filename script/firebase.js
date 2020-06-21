var firebaseConfig = {
  apiKey: "AIzaSyDMCq4n6mcNmGKeajvFbkxPdHOEF3k3BFw",
  authDomain: "laylowprojet.firebaseapp.com",
  databaseURL: "https://laylowprojet.firebaseio.com",
  projectId: "laylowprojet",
  storageBucket: "laylowprojet.appspot.com",
  messagingSenderId: "624705142317",
  appId: "1:624705142317:web:65526c356d5c436a7a82a4",
  measurementId: "G-XF6P962R0Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login
document.querySelector("#sub").addEventListener("click", function (event) {
    event.preventDefault()
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    console.log(email)
    console.log(password)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function () {
                    alert("Vous êtes connecté")
                    location.assign("admin.html")
                })
        })
        .catch(function (error) {
            console.log(error.code, error.message)
        })
})