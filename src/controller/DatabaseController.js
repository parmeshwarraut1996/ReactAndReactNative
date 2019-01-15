import database from '../Firebase'
import Firebase from '../Firebase';


export default function getData(fname, lname, email, pass, cpass, contact) {
    var data = {
        FirstName: fname,
        LastName: lname,
        Email_id: email,
        Password: pass,
        ConfirmPassword: cpass,
        ContactNumber: contact

    }
    console.log(fname);

    Firebase.firebase.auth().createUserWithEmailAndPassword(email, pass).then(() => {
        console.log("Create user");

        var user = Firebase.firebase.auth().currentUser;
        user.sendEmailVerification().then(() => {


        })
    })
        .catch(function (error) {
            if (error) {
                console.log(error);

            }
            return error;
        });


    database.database.ref('/users').push(data);
}
export  function checkLogin(username, password) {
    
        var arr={
        username: username,
        password: password
        }

Firebase.firebase.auth().signInWithEmailAndPassword(username, password).then(()=>{
console.log("succefully login");

})
.catch(function (error) {
            console.log("Error code",error.code);
            console.log("error message",error.message);
            return error;
        });
}