let loca = String(window.location.href);

setTimeout(() => {

    chrome.storage.local.get(["URL"]).then((result) => {
        if (result.URL.length) {
            for (let i = 0; i < result.URL.length; i++) {
                if (loca.includes(result.URL[i])) {
                    var body = document.getElementsByTagName("body")[0];
                    body.style.backgroundColor = "white";
                    body.innerHTML = `<h1> You are trying to access ${result.URL[i]}. Which is blocked website. </h1>`;
                }
            }
        }
    });
}, 1500);