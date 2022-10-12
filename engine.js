
const buttons = document.getElementById('buttons');
const sixteenBtn =  document.getElementById('sixteen');
const threetwoBtn = document.getElementById('threetwo');



sixteenBtn.addEventListener('click', e => {
    sixteenDiv()

})

threetwoBtn.addEventListener('click', e => {
    threetwoDiv()
})




const sixteenDiv = () => {

    // for loop for the amount of div i want 
    for(i = 0; i < 256 ; i++){

        // create a div called div16
        const div16 = document.createElement('div');

        // gave the div16 the attributes of the css class
        div16.setAttribute('class', 'button')
        // added the div to the buttons id with appendchild // appendchild adds children to the parent class.
        document.getElementById('buttons').appendChild(div16);

        // made a eventListener that when u a div, it'll change color; leaving a trail behind.
        div16.addEventListener('mouseover', e => {
            div16.style.backgroundColor = '#454c69'
        })
    }
}

const threetwoDiv = () => {
    buttons.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "
    buttons.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
    for(i = 0; i < 1024; i++){
        const div32 = document.createElement('div')
        div32.setAttribute('class', 'button');
        document.getElementById('buttons').appendChild(div32);
        div32.addEventListener('mouseover', e => {
            div32.style.backgroundColor = '#454c69'
            div16.style.display = 'none'
        })

    }
    
}





