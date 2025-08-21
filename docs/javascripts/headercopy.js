let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

Array.from(headers).forEach(function (element) {
    element.addEventListener('click', onClickHeader, false)
})

function onClickHeader(element) {
    let string = element.srcElement.innerText
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(string.slice(0, -1));
    return Promise.reject('The Clipboard API is not available.');
};

let links = document.getElementsByClassName("headerlink");
Array.from(links).forEach(function (element) {
    element.addEventListener('click', onClickLink, false)
})

function onClickLink() {
    setTimeout(() => {
        let url = window.location.href;
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
            return navigator.clipboard.writeText(url);
        return Promise.reject('The Clipboard API is not available.');
    }, 10);
};
