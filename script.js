let sliderBtn = document.getElementsByClassName("slider-nav-btn");

// sliderBtn.addEventListener('click', () => {
//     console.log('this is btn');
// });

// sliderBtn.forEach((el)=> {
//     el.addEventListener('click', () => {
//         el.classList.toggle()
//     })
// })

for (let i = 0; i<sliderBtn.length; i++) {
    sliderBtn[i].addEventListener('click', () => {
        if(sliderBtn[i].classList.contains("btn-active")) {
            return;
        } else {
            sliderBtn[i].classList.add("btn-active");
        }


    });
}
