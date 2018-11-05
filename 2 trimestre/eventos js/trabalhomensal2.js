window.addEventListener('load', init, false)

function init() {
    document.getElementById("um").addEventListener('mouseover', umfuncao, false)
    document.getElementById("um").addEventListener('click', umfuncao2, false)
    document.getElementById("dois").addEventListener('click', doisfuncao, false)
    document.getElementById("tres").addEventListener('mouseover', tresfuncao, false)
}

function umfuncao(a) {
    alert("um mouse")
    a.stopPropagation();
}

function umfuncao2(a) {
    alert("um clique")
    a.stopPropagation();
}

function doisfuncao(b) {
    alert("dois cliques")
    b.stopPropagation();
}

function tresfuncao(c) {
    alert("tres mouse")
    c.stopPropagation();
}