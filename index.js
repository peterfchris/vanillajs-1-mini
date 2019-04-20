var count = 0
var element = document.getElementById(counter)

function increase(count) {
    count++
    element.innerText = count
}

function decrease(count) {
    count--
    element.innerText = count
}

function reset(count) {
    count = 0
    element.innerHTML = "<mark>" + count + "</mark>"
}

function selectTheme(theme) {
    document.getElementsByTagName("body")[0].className = theme
    document.getElementsByTagName("main")[0].className = theme
    const buttons = document.getElementsByTagName

    for (i=0; i < buttons.length; i++) {
        button[i].classname = theme
    }
}



