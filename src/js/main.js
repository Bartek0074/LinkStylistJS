const links = document.querySelectorAll('.links-box__link');
const linksVariationBox = document.querySelectorAll('.links-variation-box__element')
const linksVariation = document.querySelectorAll('.links-variation-box__link')
const optionsOpener = document.querySelector('.link-options-opener')
const optionsCloser = document.querySelector('.link-options-closer')
const optionsFrame = document.querySelector('.link-options')
const stageLink = document.querySelector('.link-stage__element')
const bgcInputText = document.querySelector('.bgc-input-text')
const bgcInputColor = document.querySelector('.bgc-input-color')
const fontColorInputText = document.querySelector('.font-input-text')
const fontColorInputColor = document.querySelector('.font-input-color')

const linkHandle = (e) =>{
    // REMOVING ACTIVE CLASS FROM ALL LINK BOXES
    links.forEach(link => {
        link.classList.remove('links-box__link--active');
    })
    // ADDING ACTIVE CLASS TO CLICKED LINK BOX
    e.target.classList.add('links-box__link--active')

    // REMOVING ACTIVE CLASS FROM ALL LINK VARIATION BOXES
    linksVariationBox.forEach(link => {
        link.classList.remove('links-variation-box__element--active')
    })
    for(let i = 0; i < links.length; i++){
        if(links[i].classList.contains('links-box__link--active')){
            // ADDING ACTIVE CLASS TO CLICKED LINK VARIATION BOX
            linksVariationBox[i].classList.add('links-variation-box__element--active')
            // REMOVING ACTIVE CLASS FROM ALL VARIATION ELEMENTS
            linksVariation.forEach(link => {
                link.classList.remove('links-variation-box__link--active')
            })
            // ADDING ACTIVE CLASS TO LINK VARIATION ELEMENTS WHICH ARE INSIDE CLICKED LINK BOX
            linksVariationBox[i].firstElementChild.classList.add('links-variation-box__link--active')

            // REMOVING ALL CLASSES FROM STAGE LINK
            stageLink.removeAttribute('class')
            // ADDING LINK VARIATION BOX's FIRST VARIATION TO STAGE LINK
            stageLink.classList.add(linksVariationBox[i].firstElementChild.classList[1])
        }
    }
}

const linkVariationHandle = (e) => {
    // REMOVING ACTIVE CLASS FROM ALL VARIATION ELEMENTS
    linksVariation.forEach(link => {
        link.classList.remove('links-variation-box__link--active')
    })

    // ADDING ACTIVE CLASS TO CLICKED VARIATION ELEMENT
    e.target.classList.add('links-variation-box__link--active')

    // REMOVING ALL CLASSES FROM STAGE LINK
    stageLink.removeAttribute('class')
    // ADDING LINK VARIATION's CLASS TO STAGE LINK
    stageLink.classList.add(e.target.classList[1])
}

const openOptions = () => {
    optionsFrame.classList.add('link-options--active')
    optionsOpener.classList.add('link-options-opener--active')
}

const closeOptions = () => {
    optionsFrame.classList.remove('link-options--active')
    optionsOpener.classList.remove('link-options-opener--active')
}

// BACKGROUND COLOR OPTION - TEXT INPUT
const backgroundColorInputTextHandle = () => {
    if (bgcInputText.value.length===7){
        document.body.style.backgroundColor = bgcInputText.value
        bgcInputColor.value = bgcInputText.value
    }
    else{
        document.body.style.backgroundColor = '#dbdbdb'
        bgcInputColor.value = '#dbdbdb'
    }
}
// BACKGROUND COLOR OPTION - COLOR INPUT
const backgroundColorInputColorHandle = () => {
    document.body.style.backgroundColor = bgcInputColor.value
    bgcInputText.value = bgcInputColor.value
}

// BACKGROUND COLOR OPTION - TEXT INPUT
const fontColorInputTextHandle = () => {
    if (bgcInputText.value.length===7){
        stageLink.style.color = fontColorInputText.value
        fontColorInputColor.value = fontColorInputText.value
    }
    else{
        document.body.style.color = '#000000'
        fontColorInputColor.value = '#000000'
    }
}
// BACKGROUND COLOR OPTION - COLOR INPUT
const fontColorInputColorHandle = () => {
    stageLink.style.color = fontColorInputColor.value
    fontColorInputText.value = fontColorInputColor.value
}




links.forEach(link => {
    link.addEventListener('click', linkHandle)
})

linksVariation.forEach(link => {
    link.addEventListener('click', linkVariationHandle)
})

optionsOpener.addEventListener('click', openOptions)
optionsCloser.addEventListener('click', closeOptions)

bgcInputText.addEventListener('keyup', backgroundColorInputTextHandle)
bgcInputColor.addEventListener('change', backgroundColorInputColorHandle)

fontColorInputText.addEventListener('keyup', fontColorInputTextHandle)
fontColorInputColor.addEventListener('change', fontColorInputColorHandle)