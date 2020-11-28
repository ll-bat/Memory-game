const dom = document;

function $1(id) {
    return dom.getElementById(id);
}

function elt(elem, cls, id, style){
    let el = dom.createElement(elem);
    if (cls) el.className = cls;
    if (id) el.setAttribute('id', id);
    if (style){
        for (let a in style){
            el.style[a] = style[a]
        }
    }
    return el;
}

function tout(fn, t=200){
    return setTimeout(fn, t);
}

function setStyle(el, style){
    for (let a in style){
        el.style[a] = style[a]
    }
}