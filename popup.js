let optionButton = document.getElementById('optionButton');

optionButton.addEventListener("click", function(element) {
    chrome.runtime.openOptionsPage();
});

let newLang = function(element) {
    let lang = element.target.value;
    console.log("Lang is " + lang)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        oldUrl = tabs[0].url
        regex = /.*\.khanacademy/gi

        newUrl = oldUrl.replace(regex, "https://" + lang + ".khanacademy")
        console.log("Redirecting to " + newUrl)
        chrome.tabs.update(tabs[0].id, {url: newUrl});
    });
};

chrome.storage.sync.get('langs', function(data) {
    console.log("Langs are now " + data.langs)
    let page = document.getElementById('buttonDiv');

    for (let lang of data.langs) {
        if (lang.active) {
            let button = document.createElement('button');
            button.innerHTML = lang.name;
            button.setAttribute('value', lang.id);
            button.addEventListener("click", newLang);

            page.appendChild(button);
        }
    }
});
