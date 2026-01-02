(function() {
    // 1. Savolni topish (Hozircha saytdagi barcha matnni oladi)
    let savol = document.body.innerText.substring(0, 200); 

    // 2. Ma'lumotni kodlash
    let data = btoa(encodeURIComponent(savol + '[:]' + 'variantlar'));

    // 3. Local faylni ochish
    window.open(`http://127.0.0.1:5501/local.html?data=${data}`, 'helper', 'width=200,height=200');
})();
