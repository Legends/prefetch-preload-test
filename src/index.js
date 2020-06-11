
setTimeout(() => {
     import(/* webpackPreload: true */"./b.js").then((res) => { alert(res) }); 
}, 5000);


document.addEventListener("DOMContentLoaded", (e) => {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        import(/* webpackPrefetch: true */"./a.js").then(({ a: res }) => { console.log(res) });
        import(/* webpackPreload: true */"./c.js").then((res) => { alert(res) }); 
    });
})