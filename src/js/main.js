const links = document.querySelectorAll('.links-box__link');
const linksVariationBox = document.querySelectorAll('.links-variation-box__element')
const linksVariation = document.querySelectorAll('.links-variation-box__link')

const linkHandle = (e) =>{
    links.forEach(link => {
        link.classList.remove('links-box__link--active');
    })
    e.target.classList.add('links-box__link--active')

    linksVariationBox.forEach(link => {
        link.classList.remove('links-variation-box__element--active')
    })
    for(let i = 0; i < links.length; i++){
        if(links[i].classList.contains('links-box__link--active')){
            linksVariationBox[i].classList.add('links-variation-box__element--active')
            linksVariation.forEach(link => {
                link.classList.remove('links-variation-box__link--active')

            })
            linksVariationBox[i].firstElementChild.classList.add('links-variation-box__link--active')
        }
    }
}

const linkVariationHandle = (e) => {
    linksVariation.forEach(link => {
        link.classList.remove('links-variation-box__link--active')
    })

    e.target.classList.add('links-variation-box__link--active')
}

links.forEach(link => {
    link.addEventListener('click', linkHandle)
})

linksVariation.forEach(link => {
    link.addEventListener('click', linkVariationHandle)
})