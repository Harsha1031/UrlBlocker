
var blockedWebsite = document.getElementById("Blocked-website");

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 

console.log("here", db);

db.transaction(function (tx) {     
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (name, url)');   
 });  

db.transaction(function (tx) {   
    console.log("here",tx)
    tx.executeSql('SELECT * FROM Demo', [], function (tx, results) {   
        for (let i = 0; i < results.rows.length; i++) {
            msg = `<div>${i+1}) ${results.rows[i].name} : ${results.rows[i].url}</div>`;
            document.getElementById("Blocked-website").innerHTML += msg;
         }
    }, null);   
 });  

document.getElementById("data").addEventListener("click", putData)

function putData(){
    let name = document.getElementById("name").value;
    let url = document.getElementById("urlb").value;

    document.getElementById("name").value = "";
    document.getElementById("urlb").value = "";

    console.log(name,url);

    let query = `INSERT INTO DEMO (name, url) VALUES ("${name}","${url}")`;

    db.transaction(function (tx) {     
        tx.executeSql(query);   
     });  

}