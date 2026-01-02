(function() {
    // 1. Savolni yig'ish
    let savol = document.body.innerText.substring(0, 300); 
    let data = btoa(encodeURIComponent(savol + '[:]' + 'variantlar'));

    // 2. SIZNING LINKINGIZ (doniyor6444 ekanini hisobga olgan holda)
    // REPO_NOMI joyiga GitHub'dagi proyekt nomini yozing
    let onlineLink = "https://doniyor6444.github.io/REPO_NOMI/local.html";
    
    window.open(`${onlineLink}?data=${data}`, 'helper', 'width=200,height=200,left=0,top=0');
})();
