const links = document.querySelectorAll('.links-box__link');
const linksVariation = document.querySelectorAll('.links-variation-box__element')

const linkHandle = (e) =>{
    links.forEach(link => {
        link.classList.remove('links-box__link--active');
    })
    e.target.classList.add('links-box__link--active')

    linksVariation.forEach(link => {
        link.classList.remove('links-variation-box__element--active')
    })
    for(let i = 0; i < links.length; i++){
        if(links[i].classList.contains('links-box__link--active')){
            linksVariation[i].classList.add('links-variation-box__element--active')
        }
    }
}

links.forEach(link => {
    link.addEventListener('click', linkHandle)
})