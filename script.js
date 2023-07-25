
var blockedWebsite = document.getElementById("Blocked-website");

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (name, url)');
});

let blockedUrls = []

db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM Demo', [], function (tx, results) {
        for (let i = 0; i < results.rows.length; i++) {
            blockedUrls.push(results.rows[i].url);
            msg = `<div>${i + 1}) ${results.rows[i].name} : ${results.rows[i].url}</div>`;
            document.getElementById("Blocked-website").innerHTML += msg;
        }
    }, null);
});

document.getElementById("data").addEventListener("click", putData)

setTimeout(()=>{
    chrome.storage.local.set({ "URL": blockedUrls })
    
      chrome.storage.local.get(["URL"])
},1000);

function putData() {
    let name = document.getElementById("name").value;
    let url = document.getElementById("urlb").value;

    document.getElementById("name").value = "";
    document.getElementById("urlb").value = "";

    let query = `INSERT INTO DEMO (name, url) VALUES ("${name}","${url}")`;

    db.transaction(function (tx) {
        tx.executeSql(query);
    });

}