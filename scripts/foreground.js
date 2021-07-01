

document.getElementById("runner").addEventListener("click", function() {
    let incognitoSwitch = document.getElementById("inc-switch");
    let links = document.getElementById('maininput').value || "https://www.google.com";
    let val = links.split("\n");

    if (incognitoSwitch.checked) {
        try {
            chrome.windows.create({
                url: val[0],
                incognito: true,
            }, (win) => {
                console.log({win});
                for (let i = 1; i < val.length; i++) {
                    chrome.tabs.create({
                        url: val[i],
                        windowId: win.id
                    });
                }
            })
        } catch (e) { console.log(e); }
    } else {
        for (let i = 0; i < val.length; i++) {
            chrome.tabs.create({url: val[i]});
        }
    }

    return 0;
});

document.getElementById("clearer").addEventListener("click", function() {
    document.getElementById('maininput').value = "";
});
