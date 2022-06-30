const links = document.querySelectorAll('.links-box__link');
const linksVariationBox = document.querySelectorAll('.links-variation-box__element')
const linksVariation = document.querySelectorAll('.links-variation-box__link')
const optionsOpener = document.querySelector('.link-options-opener')
const optionsCloser = document.querySelector('.link-options-closer')
const optionsFrame = document.querySelector('.link-options')
const stageLink = document.querySelector('.link-stage__element')


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
            stageLink.removeAttribute('class')
            stageLink.classList.add(linksVariationBox[i].firstElementChild.classList[1])
        }
    }
}

const linkVariationHandle = (e) => {
    linksVariation.forEach(link => {
        link.classList.remove('links-variation-box__link--active')
    })

    e.target.classList.add('links-variation-box__link--active')

    stageLink.removeAttribute('class')
    stageLink.classList.add(e.target.classList[1])
}

const openOptions = () =>{
    optionsFrame.classList.add('link-options--active')
    optionsOpener.classList.add('link-options-opener--active')
}

const closeOptions = () =>{
    optionsFrame.classList.remove('link-options--active')
    optionsOpener.classList.remove('link-options-opener--active')
}


links.forEach(link => {
    link.addEventListener('click', linkHandle)
})

linksVariation.forEach(link => {
    link.addEventListener('click', linkVariationHandle)
})

optionsOpener.addEventListener('click', openOptions)
optionsCloser.addEventListener('click', closeOptions)