function color_changer() {
    var style = window.getComputedStyle(document.body).getPropertyValue('--background-color');
    // var colors = window.getComputedStyle(document.body).getPropertyValue('--background-color');
    var r = document.querySelector(':root');
    if (style === 'white') {// TODO Rplace color
        r.style.setProperty('--background-color', 'green');
        console.log('test white');
        return
    } else {
        document.documentElement.style.cssText = "--background-color: black";
        console.log('test not white');
        return
    }
}