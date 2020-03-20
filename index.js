function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i;
        i++;
    }
};

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);



function* newFontGenerator(value) {
    while (true) {
        let i = yield value;
        if (i === "up") {
            value += 2;
        } else if (i === "down") {
            value -= 2;
        }
    }
}


const fontGenerator = newFontGenerator(18);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next().value);


window.onload = () => {
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    up.onclick = function(){
        let upFontSize = fontGenerator.next("up").value
        document.getElementById('text').style.fontSize = `${upFontSize}px`;
        document.getElementById('fontSize').innerHTML = `${upFontSize}px`;
    }

    down.onclick = function(){
        let downFontSize = fontGenerator.next("down").value
        document.getElementById('text').style.fontSize = `${downFontSize}px`;
        document.getElementById('fontSize').innerHTML = `${downFontSize}px`;
    }

}