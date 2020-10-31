const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click",changeColor);
// btn.addEventListener("focus",changeColor);
// btn.addEventListener("dblclick",changeColor);
// btn.addEventListener("mouseover",changeColor);
// btn.addEventListener("mouseout",changeColor);

function changeColor() {
    let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    let anotherRandomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = randomColor;
    btn.style.backgroundColor = anotherRandomColor;
}