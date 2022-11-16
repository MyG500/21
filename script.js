
class color {
    constructor() {

    }
    try() {
        return " color is going ";
    }
}

class color2 extends color {
    constructor()
    try() {
        return " color2 is going ";
    }
}

class morecolor extends color {
    constructor()
    try() {
        return " morecolor is going ";
    }
}
function processData(form) {
    var type = form.color.value;
    var v;
    if (type == "color2") {
        v = new color2();
    } else if (type == "morecolor") {
        v = new morecolor();
    } else {
        v = new color();
    }
    msg = v.try();
    document.getElementById("result").innerHTML = msg;
}