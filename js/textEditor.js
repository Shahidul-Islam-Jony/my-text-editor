
const textArea = document.getElementById('text-area');

function activeButtonEffect(id,classEffect){
    const btn = document.getElementById(id);
    btn.addEventListener('click',function(){
        btn.classList.toggle('active');
        textArea.classList.toggle(classEffect);
    })
}

// left side button
activeButtonEffect('bold','font-bold');
activeButtonEffect('italic','italic');
activeButtonEffect('underline','underline');

// mid button
activeButtonEffect('left','text-left');
activeButtonEffect('center','text-center');
activeButtonEffect('right','text-right');
activeButtonEffect('justify','text-justify');

// Right side button
// text size
document.getElementById('number').addEventListener('click', function () {
    const size = document.getElementById('number').value + "px";
    textArea.style.fontSize = size;
    console.log(textArea);
})
document.getElementById('number').addEventListener('keyup', function () {
    const size = document.getElementById('number').value + "px";
    textArea.style.fontSize = size;
})

// convert case
activeButtonEffect('capitalize','capitalize');

// font color
document.getElementById('color').addEventListener('mouseout', function () {
    const color = document.getElementById('color').value;
    textArea.style.color = color;
})


// problem: if you enter for next line it will effect same effect for each line