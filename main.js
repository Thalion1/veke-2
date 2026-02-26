function color_changer() {// 
    var style = document.querySelector('body');
    if (getComputedStyle(style).getPropertyValue('--background-color') === 'white') {
        style.style.setProperty('--background-color', 'black');
        console.log('test white');
        return
    } else {
        style.style.setProperty('--background-color', 'white');
        console.log('test not white');
        return
    }
}