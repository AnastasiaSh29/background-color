window.addEventListener('DOMContentLoaded', ()=>{

    const button = document.querySelector('.wrapper__button'),
          colorName = document.querySelector('.wrapper__color'),
          wrapper = document.querySelector('.wrapper');

        button.addEventListener('mouseover', ()=>{
            button.style.background = '#000';
            button.style.color = '#fff';
        })

        
        button.addEventListener('click', ()=>{
            color();
            button.style.background = '#000';
        })


    function color() {
        let randomRgba = `rgb(${rRgba(0,255)}, ${rRgba(0,255)}, ${rRgba(0,255)})`;

        wrapper.style.background = randomRgba;
        button.style.background = randomRgba;
        colorName.innerHTML = randomRgba;

        button.addEventListener('mouseleave', ()=>{
            button.style.background = randomRgba;
            button.style.color = '#000';
        })
    }


    function rRgba(a, b) {
        return Math.floor(Math.random() * (a - b + 1) + b);
    }

    color();
   
})