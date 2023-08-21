
const textArea = document.getElementById('text-area');

// left side button
function bold(){
    if(textArea.classList.contains('font-bold')){
        textArea.classList.remove('font-bold');
    }
    else{
        textArea.classList.add('font-bold');
    }

}

function italic(){
    if(textArea.classList.contains('italic')){
        textArea.classList.remove('italic');
    }
    else{
        textArea.classList.add('italic');
    }
}
function underline(){
    if(textArea.classList.contains('underline')){
        textArea.classList.remove('underline');
    }
    else{
        textArea.classList.add('underline');
    }
}
// mid button
// for left
document.getElementById('left').addEventListener('click',function(){
    if(textArea.classList.contains('text-left')){
        textArea.classList.remove('text-left');
    }
    else{
        textArea.classList.add('text-left');
    }
});

// for center
document.getElementById('center').addEventListener('click',function(){
    if(textArea.classList.contains('text-center')){
        const centerBtn = document.querySelector('.active-button');
        centerBtn.addEventListener('click',function(){
            centerBtn.classList.add('active');
        })
        textArea.classList.remove('text-center');
    }
    else{
        const centerBtn = document.querySelector('.active-button');
        centerBtn.addEventListener('click',function(){
            centerBtn.classList.remove('active');
        })
        textArea.classList.add('text-center');
        // console.log(centerBtn.classList);
    }
})

// for right
document.getElementById('right').addEventListener('click',function(){
    if(textArea.classList.contains('text-right')){
        textArea.classList.remove('text-right');
    }
    else{
        textArea.classList.add('text-right');
    }
});

// for  justify
document.getElementById('justify').addEventListener('click',function(){
    if(textArea.classList.contains('text-justify')){
        textArea.classList.remove('text-justify');
    }
    else{
        textArea.classList.add('text-justify');
    }
});

// Right side button
// text size
document.getElementById('number').addEventListener('click',function(){
    const size = document.getElementById('number').value + "px";
    textArea.style.fontSize = size;
})
document.getElementById('number').addEventListener('keyup',function(){
    const size = document.getElementById('number').value + "px";
    textArea.style.fontSize = size;
})

// convert case
function capitalize(){
    if(textArea.classList.contains('capitalize')){
        textArea.classList.remove('capitalize');
    }
    else{
        textArea.classList.add('capitalize');
    }
}

// font color
document.getElementById('color').addEventListener('mouseout',function (){
    const color = document.getElementById('color').value;
    textArea.style.color = color;
})
    