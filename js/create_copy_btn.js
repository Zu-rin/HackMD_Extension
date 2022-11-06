const addCopyBtn = (elm) => {
    let btn = document.createElement("div");
    btn.insertAdjacentHTML("beforeend", '<i class="fa fa-fw fa-light fa-copy"></i>');
    btn.classList.add("btn", "btn-sm", "pull-right");
    btn.onclick = () => {
        const tagstr = elm.querySelector("div > div.code").textContent;
        navigator.clipboard.writeText(tagstr)
            .then(() => {
                console.log("COPY", tagstr);
            })
            .catch(err => {
                console.log("ERROR", err);
            });
    }
    elm.parentNode.before(btn);
}

window.addEventListener("load", (e) => {
    // mermaid・graphvizの描画前に"pre>code"にマッチする要素が出現してしまうため描画待機 (TODO: 改善)
    setTimeout(() => {
        const elms = document.querySelectorAll("pre > code");
        elms.forEach(elm => {
            addCopyBtn(elm);
        }) 
    }, 2000)
}, false);