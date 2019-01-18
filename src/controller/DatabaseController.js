import database from '../Firebase'
import Firebase from '../Firebase';


export default async function getData(fname, lname, email, pass, cpass, contact) {
    var data = {
        FirstName: fname,
        LastName: lname,
        Email_id: email,
        Password: pass,
        ConfirmPassword: cpass,
        ContactNumber: contact

    }
    console.log(fname);
    
    let check = await Firebase.firebase.auth().createUserWithEmailAndPassword(email, pass).then(() => {
        console.log("Create user");
        database.database.ref('/users').push(data);

        var user = Firebase.firebase.auth().currentUser;
        user.sendEmailVerification().then(() => {


        })
    })
        .catch(function (error) {
            if (error) {
                console.log(error);
                return error;
            }
            
        })
        if(check){
            return check;
        }
        //  console.log("Error",check.message);
        
    }

export async function checkLogin(username, password) {

    var arr = {
        username: username,
        password: password
    }
    console.log(arr);
    
    let data = await Firebase.firebase.auth().signInWithEmailAndPassword(username, password).then(() => {
        console.log("succefully login");
        console.log('data1' +data);

    })
        .catch(function (error) {
            console.log("Error code", error.code);
            console.log("error message", error.message);
            return error;
        });
    console.log("error",data);
    return data;

}
export function getUser(usename){
   
}