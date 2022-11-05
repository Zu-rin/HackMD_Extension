const addCopyBtn = (elm) => {
    let btn = document.createElement("button");
    btn.classList.add("copy-btn");
    btn.textContent = "copy"
    btn.onclick = () => {
        const tagstr = elm.querySelector("div > div.code").textContent;
        navigator.clipboard.writeText(tagstr)
            .then(() => {
                console.log("COPY");
                console.log(tagstr);
            })
            .catch(err => {
                console.log("ERROR", err);
            });
    }
    elm.appendChild(btn);
}

window.onload = (e) => {
    const elms = document.querySelectorAll("pre > code")
    console.log(elms);
    elms.forEach(elm => {
        console.log(elm.textContent);
        addCopyBtn(elm);
    });
};