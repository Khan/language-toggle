let setLang = function(id, active) {
    chrome.storage.sync.get('langs', function(data) {
        let langs = data.langs
        for (let lang of langs) {
            if (lang.id == id) {
                console.log("Setting " + lang.name + " to " + active)
                lang.active = active
                chrome.storage.sync.set({langs: langs})
                return
            }
        }
        console.error("Tried to set " + id + " but didn't find it")
    });
};


chrome.storage.sync.get('langs', function(data) {
    const page = document.getElementById('langaugesDiv');
    const langs = data.langs
    for (let item of langs) {
        let label = document.createElement('label')
        label.name = item.id
        label.innerHTML = item.name + "<br>"
        let button = document.createElement('input');
        button.type="checkbox"
        button.checked = item.active
        button.name = item.id
        button.addEventListener('click', function() {
            setLang(item.id, button.checked)
        });
        page.appendChild(button);
        page.appendChild(label);
    }
});
