import database from '../Firebase'
import Firebase from '../Firebase';



//insert user details in database
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
    if (check) {
        return check;
    }
    //  console.log("Error",check.message);

}

//check user id and password for authentication
export async function checkLogin(username, password) {

    var arr = {
        username: username,
        password: password
    }
    console.log(arr);

    let data = await Firebase.firebase.auth().signInWithEmailAndPassword(username, password).then(() => {
        console.log("succefully login");
        console.log('data1' + data);

    })
        .catch(function (error) {
            console.log("Error code", error.code);
            console.log("error message", error.message);
            return error;
        });
    console.log("error", data);
    return data;

}
//Get user from database
export function getUser(username) {


    Firebase.database.ref('users').orderByChild('Email_id').equalTo(username).on("value", snap => {


        snap.forEach(function (snap) {

            var email = snap.child('Email_id').val();
            var fname = snap.child('FirstName').val();
            var lname = snap.child('LastName').val();
            var key = snap.key;

            localStorage.setItem("Email", email);
            localStorage.setItem("userKey", key);
            localStorage.setItem("FirstName", fname);
            localStorage.setItem("LastName", lname);

            console.log("Key---", key);
            console.log("Email-------", email);
            console.log("Name", fname);



        })
    });



}
//pasword reset if user forget password
export function resetPass(username) {



    var arr = {
        username: username
    }
    console.log(arr);

    let data = Firebase.database.ref("users").orderByChild("Email_Id");
    console.log('data-', data);


    if (data) {
        var auth = Firebase.firebase.auth();
        var emailAddress = username;

        var x = auth.sendPasswordResetEmail(emailAddress).then(function () {
            console.log("assddd", x);

            // Email sent.
        }).catch(function (error) {
            console.log("Reset password---", error.message);
            data = error;
            return error;
        });

    } else {
        console.log("aaassdadf" + data);

        return data;
    }


    return data;



}

// add notes in database
export async function insertNotes(title, description, isReminder, isCollaborator, isColor, isImage, isArchived, isPinned,isTrash,label) {
    var arr = [];

    console.log("reminder in database",isReminder);
    
    arr.push(label);
    var arrData = {
        Title: title,
        Description: description,
        Reminder: isReminder,
        Collaborator: isCollaborator,
        Colors: isColor,
        Images: isImage,
        Archive: isArchived,
        Pinned: isPinned,
        Trash:isTrash,
        label: label,
        userid: localStorage.getItem("userKey")

    }
    database.database.ref("/notes").push(arrData);
    console.log("ttt", arrData);
    if (label) {
        arr.map(async (noteData, index) => {
            var lblArrData = {
                name: noteData,
                user: arrData.userid
            }
            var varLbl = await database.database.ref("/label").push(lblArrData);
            var key = await varLbl.child("/label").push().getKey();
            arr.label = key;
        })
    }


    await database.database.ref("/notes").push(arr);
}


export function getNotes(callback) {
    console.log("getNotes");

    database.database.ref('/notes').orderByChild('userid').equalTo(localStorage.getItem("userKey")).on("value", function (snap) {

        var value = snap.val();

        return callback(value);

    })

}
export function getLabel(callback) {
    database.database.ref('/label').orderByChild("user").equalTo(localStorage.getItem("userKey")).on("value", function (snap) {
        var value = snap.val();
        console.log("valueeee--", snap.val());
        return callback(value);


    });
}
export function updateNotes(key, note) {

    database.database.ref("/notes").child(key).update(note);
}
export function editNotesData(Title, Description, note, key) {

    console.log("notesssss--", note);
    console.log("title in database==", Title);


    console.log("notesssss key--", key);

    note = {
        Title: Title,
        Description: Description
    }

    console.log("updated notes in database==", note);

    updateNotes(key, note);
}

export function archiveNote(note, key) {
    if (note.Archive === false) {
        note.Archive = true;
        note.Pinned=false;
        
       

    }
    else{
        note.Archive=false
    }

    updateNotes(key,note);

}
export function pinnedNote(note,key){
    if (note.Pinned===false) {
        note.Pinned=true;
        note.Archive=false;
      
       
        
    } else {
        note.Pinned=false
        
    }

    updateNotes(key,note)
}
export function deleteNotes(note,key){
    database.database.ref("/notes").child(key).remove();

}
export function colorNote(color,note,key){

    note={
        Colors:color
    }
    console.log("note in datbase---",note);
    console.log("color in database==",color);
    
    
    updateNotes(key,note);
}
export function trashNote(note,key){
    if(note.Trash===false){
        note.Trash=true
        note.Pinned = false;
        note.Archive = false;

    }
    else{
        note.Trash=false
    }
    updateNotes(key,note);
}
export function editReminder(d,note,key){

    console.log("reminder inm database==-990",d);
    
    note={
        Reminder:d
    }
    console.log("reminder in dataaasdsa-",note);
    
    updateNotes(key,note);

}


export function addNewLabel(NewLabel,note,key){
    console.log("label in database"+NewLabel);
    note={
        label: note.label.push(NewLabel)
    }
   
   console.log("label in database",NewLabel);
   
    database.database.ref("/notes").child("label").push(note);
    
    

    updateNotes(key,note);


}