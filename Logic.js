let loca = String(window.location.href);

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 

console.log("here", db);

db.transaction(function (tx) {      
    tx.executeSql('SELECT * FROM Demo', [], function (tx, results) {  
        
        console.log(results.rows);   
    }, null);   
 });  

if(loca.includes("youtube")){
    var  body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "white" ;
    body.innerHTML = `<h1> You are trying to access Youtube which is blocked. </h1>`;
}