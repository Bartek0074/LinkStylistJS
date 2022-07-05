const links = document.querySelectorAll('.link-type');
const linksVariationBox = document.querySelectorAll('.link-variation-box')
const linksVariation = document.querySelectorAll('.link-variation')
const optionsOpener = document.querySelector('.options-opener')
const optionsCloser = document.querySelector('.options-closer')
const optionsFrame = document.querySelector('.options')
const generatorOpener = document.querySelector('.generator-opener')
const generatorCloser = document.querySelector('.generator-closer')
const generateCodeFrame = document.querySelector('.generator')
const codeHtml = document.querySelector('.html-code')
const stageLink = document.querySelector('.link')
const root = document.querySelector(':root')
const textInput = document.querySelector('#text')
const fontSizeInput = document.querySelector('#font-size')
const fontFamilyInput = document.querySelector('#font-family')
const fontWeightInput = document.querySelector('#font-weight')
const fontStyleInput = document.querySelector('#font-style')
const bgcInputText = document.querySelector('.bgc-input-text')
const bgcInputColor = document.querySelector('#bgc-color')
const fontColorInputText = document.querySelector('.font-color-input-text')
const fontColorInputColor = document.querySelector('#font-color')
const mainColorInputText = document.querySelector('.main-color-input-text')
const mainColorInputColor = document.querySelector('#main-color')
const underlineHeightInput = document.querySelector('#underline-height')
const resetInput = document.querySelector('.reset-input')

const linkHandle = (e) =>{
    // REMOVING ACTIVE CLASS FROM ALL LINK BOXES
    links.forEach(link => {
        link.classList.remove('link-type--active');
    })
    // ADDING ACTIVE CLASS TO CLICKED LINK BOX
    e.target.classList.add('link-type--active')

    // REMOVING ACTIVE CLASS FROM ALL LINK VARIATION BOXES
    linksVariationBox.forEach(link => {
        link.classList.remove('link-variation-box--active')
    })
    for(let i = 0; i < links.length; i++){
        if(links[i].classList.contains('link-type--active')){
            // ADDING ACTIVE CLASS TO CLICKED LINK VARIATION BOX
            linksVariationBox[i].classList.add('link-variation-box--active')
            // REMOVING ACTIVE CLASS FROM ALL VARIATION ELEMENTS
            linksVariation.forEach(link => {
                link.classList.remove('link-variation--active')
            })
            // ADDING ACTIVE CLASS TO LINK VARIATION ELEMENTS WHICH ARE INSIDE CLICKED LINK BOX
            linksVariationBox[i].firstElementChild.classList.add('link-variation--active')

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
        link.classList.remove('link-variation--active')
    })

    // ADDING ACTIVE CLASS TO CLICKED VARIATION ELEMENT
    e.target.classList.add('link-variation--active')

    // REMOVING ALL CLASSES FROM STAGE LINK
    stageLink.removeAttribute('class')
    // ADDING LINK VARIATION's CLASS TO STAGE LINK
    stageLink.classList.add(e.target.classList[1])
}

const openOptions = () => {
    optionsFrame.classList.add('options--active')
    optionsOpener.classList.add('options-opener--active')
}

const closeOptions = () => {
    optionsFrame.classList.remove('options--active')
    optionsOpener.classList.remove('options-opener--active')
}

const openGenerateCode = () => {
    generateCodeFrame.classList.add('generator--active')
    generatorOpener.classList.add('.generator-opener--active')
}

const closeGenerateCode = () => {
    generateCodeFrame.classList.remove('generator--active')
    generatorOpener.classList.remove('.generator-opener--active')
}

const actualizeCode = () => {
    // HTML
    let linkClass = ""

    linksVariation.forEach(link => {
        if (link.classList.contains('link-variation--active')){
            linkClass = link.classList[1]
        }
    })
    
    console.log(linkClass)

    codeHtml.value = `<a class="${linkClass}">${textInput.value}</a>`
}

// TEXT VALUE OPTION
const textHandle = () =>(
    stageLink.innerHTML = textInput.value
)

// FONT FAMILY OPTION
const fontFamilyInputHandle = () =>{
    console.log(fontFamilyInput.value)
    switch(fontFamilyInput.value) {
        case 'Times New Roman':
            root.style.setProperty('--font-family', "'Times New Roman', Times, serif") 
            break;
        case 'Arial':
            root.style.setProperty('--font-family', "Arial, Helvetica, sans-serif") 
            break;
        case 'Courier New':
            root.style.setProperty('--font-family', "'Courier New', Courier, monospace") 
            break;
        case 'Cambria':
            root.style.setProperty('--font-family', "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif") 
            break;
        case 'Verdana':
            root.style.setProperty('--font-family', "Verdana, Geneva, Tahoma, sans-serif") 
            break;
        case 'Georgia':
            root.style.setProperty('--font-family', "Georgia, 'Times New Roman', Times, serif") 
            break;
        case 'Gill Sans':
            root.style.setProperty('--font-family', "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif") 
            break;
        case 'Lucida Sans':
            root.style.setProperty('--font-family', "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif") 
            break;
        default:
          // code block
      }
}

// FONT SIZE OPTION
const fontSizeInputHandle = () =>{
    if(fontSizeInput.value >= 8  && fontSizeInput.value <= 42){
        root.style.setProperty('--font-size',`${fontSizeInput.value}px`) 
    }
}

// FONT WEIGHT OPTION
const fontWeightInputHandle = () => {
    if (fontWeightInput.checked === true){
        root.style.setProperty('--font-weight', 'bold')
    }
    else {
        root.style.setProperty('--font-weight', 'normal')
    }
}

// FONT STYLE OPTION
const fontStyleInputHandle = () => {
    if (fontStyleInput.checked === true){
        root.style.setProperty('--font-style', 'italic')
    }
    else {
        root.style.setProperty('--font-style', 'normal')
    }
}

// BACKGROUND COLOR OPTION - TEXT INPUT
const backgroundColorInputTextHandle = () => {
    if (bgcInputText.value.length===7){
        root.style.setProperty('--bgc-color', bgcInputText.value) 
        document.body.style.backgroundColor = bgcInputText.value
        bgcInputColor.value = bgcInputText.value
    }
    else{
        root.style.setProperty('--bgc-color', '#dbdbdb') 
        document.body.style.backgroundColor = '#dbdbdb'
        bgcInputColor.value = '#dbdbdb'
    }
}
// BACKGROUND COLOR OPTION - COLOR INPUT
const backgroundColorInputColorHandle = () => {
    root.style.setProperty('--bgc-color', bgcInputColor.value) 
    document.body.style.backgroundColor = bgcInputColor.value
    bgcInputText.value = bgcInputColor.value
}

// FONT COLOR OPTION - TEXT INPUT
const fontColorInputTextHandle = () => {
    if (fontColorInputText.value.length===7){
        root.style.setProperty('--font-color', fontColorInputText.value)
        fontColorInputColor.value = fontColorInputText.value
    }
    else{
        root.style.setProperty('--font-color', '#000000') 
        fontColorInputColor.value = '#000000'
    }
}
// FONT COLOR OPTION - COLOR INPUT
const fontColorInputColorHandle = () => {
    root.style.setProperty('--font-color', fontColorInputColor.value)
    fontColorInputText.value = fontColorInputColor.value
}

// MAIN COLOR OPTION - TEXT INPUT
const mainColorInputTextHandle = () => {
    if (mainColorInputText.value.length===7){
        root.style.setProperty('--main-color', mainColorInputText.value)
        mainColorInputColor.value = mainColorInputText.value
    }
    else{
        root.style.setProperty('--main-color', '#1363df') 
        mainColorInputColor.value = '#1363df'
    }
}
// MAIN COLOR OPTION - COLOR INPUT
const mainColorInputColorHandle = () => {
    root.style.setProperty('--main-color', mainColorInputColor.value)
    mainColorInputText.value = mainColorInputColor.value
}

// UNDERLINE HEIGHT OPTION
const underlineHeightInputHandle = () =>{
    if(underlineHeightInput.value >= 1  && underlineHeightInput.value <= 10){
        root.style.setProperty('--underline-size',`${underlineHeightInput.value}px`) 
    }
}

// RESET OPTION
const resetInputHandle = () => {
    stageLink.innerHTML = 'Link'
    root.style.setProperty('--font-family', "'Times New Roman', Times, serif")
    root.style.setProperty('--font-size','32px') 
    root.style.setProperty('--font-weight', 'normal')
    root.style.setProperty('--font-style', 'normal')
    root.style.setProperty('--bgc-color', '#dbdbdb') 
    document.body.style.backgroundColor = '#dbdbdb'
    root.style.setProperty('--font-color', '#000000') 
    root.style.setProperty('--main-color', '#1363df') 
    root.style.setProperty('--underline-size','3px') 
}


links.forEach(link => {
    link.addEventListener('click', linkHandle)
    link.addEventListener('click', closeGenerateCode)
})

linksVariation.forEach(link => {
    link.addEventListener('click', linkVariationHandle)
    link.addEventListener('click', closeGenerateCode)
})

textInput.addEventListener('keyup', textHandle)

fontFamilyInput.addEventListener('change', fontFamilyInputHandle)

fontSizeInput.addEventListener('change', fontSizeInputHandle)

fontWeightInput.addEventListener('click', fontWeightInputHandle)

fontStyleInput.addEventListener('click', fontStyleInputHandle)

generatorOpener.addEventListener('click', openGenerateCode)
generatorCloser.addEventListener('click', closeGenerateCode)

generatorOpener.addEventListener('click', actualizeCode)

optionsOpener.addEventListener('click', openOptions)
optionsCloser.addEventListener('click', closeOptions)

bgcInputText.addEventListener('keyup', backgroundColorInputTextHandle)
bgcInputColor.addEventListener('change', backgroundColorInputColorHandle)

fontColorInputText.addEventListener('keyup', fontColorInputTextHandle)
fontColorInputColor.addEventListener('change', fontColorInputColorHandle)

mainColorInputText.addEventListener('keyup', mainColorInputTextHandle)
mainColorInputColor.addEventListener('change', mainColorInputColorHandle)

underlineHeightInput.addEventListener('change', underlineHeightInputHandle)

resetInput.addEventListener('click', resetInputHandle)