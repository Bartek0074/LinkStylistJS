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
const codeCss = document.querySelector('.css-code')
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
const footerYear = document.querySelector('.footer-year')

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
    codeHtml.value = `<a class="${linkClass}">${textInput.value}</a>`
    
    // CSS


    // RESET FONT-WEIGHT AND FONT-STYLE VALUES
    if (root.style.getPropertyValue('--font-weight') === ""){
        root.style.setProperty('--font-weight', 'normal')
    }
    if (root.style.getPropertyValue('--font-style') === ""){
        root.style.setProperty('--font-style', 'normal')
    }

    switch(linkClass) {
        case 'hover__first':
            codeCss.value = `.hover__first {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
    color: ${fontColorInputText.value};
}
            
.hover__first,
.hover__first::before,
.hover__first::after {
    transition: .3s;
}

.hover__first:hover {
    color: ${mainColorInputText.value};
}` 
            break;
        case 'hover__second':
            codeCss.value = `.hover__second {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    border-bottom: ${underlineHeightInput.value}px solid transparent;
}
            
.hover__second,
.hover__second::before,
.hover__second::after {
    transition: .3s;
}

.hover__second:hover {
    color: ${mainColorInputText.value};
}` 
            break;
       
        case 'underline__first':
            codeCss.value = `.underline__first {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    border-bottom: ${underlineHeightInput.value}px solid transparent;
}
.underline__first:hover {
    border-bottom-color: ${mainColorInputText.value};
}` 
            break;
        case 'underline__second':
            codeCss.value = `.underline__second {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.underline__second::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    transform: scaleX(0);
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
}  
.underline__second:before {
    transform: scaleX(1);
}` 
            break;
        case 'underline__third':
            codeCss.value = `.underline__third {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.underline__third::before,
.underline__third::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: ${underlineHeightInput.value}px;
    width: 51%;
    transform: scaleX(0);
    background-color: ${mainColorInputText.value};
    transition: transform .3s;
}  
.underline__third::before {
    left: 0;
    transform-origin: left;
}
.underline__third::after {
    right: 0;
    transform-origin: right;
}
.underline__third:hover::before {
    transform: scaleX(1);
    transform-origin: right;
} 
.underline__third:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}` 
            break;
        case 'underline__fourth':
            codeCss.value = `.underline__fourth {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.underline__fourth::before,
.underline__fourth::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: ${underlineHeightInput.value}px;
    width: 51%;
    transform: scaleX(0);
    background-color: ${mainColorInputText.value};
    transition: transform .3s;
}
.underline__fourth::before {
    left: 0;
    transform-origin: right;
}  
.underline__fourth::after {
    right: 0;
    transform-origin: left;
}
.underline__fourth:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}  
.underline__fourth:hover::after {
    transform: scaleX(1);
    transform-origin: right;
}` 
            break;
        case 'underline__fifth':
            codeCss.value = `.underline__fifth {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.underline__fifth::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
} 
.underline__fifth:hover::before {
    transform: scaleX(1);
}` 
            break;
        case 'underline__sixth':
            codeCss.value = `.underline__sixth {
    position: relative;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.underline__sixth::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
    transition: transform .3s ease-in;
}
.underline__sixth:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}` 
            break;
    
        case 'background__first':
            codeCss.value = `.background__first {
    position: relative;
    padding: 10px 20px;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.background__first:hover {
    background-color: ${mainColorInputText.value};
    color: ${bgcInputText.value});
}` 
            break;
            break;
        case 'background__second':
            codeCss.value = `.background__second {
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.background__second::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleY(0);
    background-color: ${mainColorInputText.value};
    z-index: -1;
} 
.background__second:hover::before {
    transform: scaleY(1);
}
.background__second:hover {
    color: ${bgcInputText.value};
}` 
            break;
        case 'background__third':
            codeCss.value = `.background__third {
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.background__third::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleY(0);
    transform-origin: bottom;
    background-color: ${mainColorInputText.value};
    z-index: -1;
}
.background__third:hover::before {
    transform: scaleY(1);
}
.background__third:hover {
    color: ${bgcInputText.value};
}` 
            break;
        case 'background__fourth':
            codeCss.value = `.background__fourth {
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.background__fourth::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleY(0);
    transform-origin: top;
    background-color: ${mainColorInputText.value};
    z-index: -1;
    transition: transform .3s;
} 
.background__fourth:hover::before {
    transform-origin: bottom;
    transform: scaleY(1);
} 
.background__fourth:hover {
    color: ${bgcInputText.value};
}` 
            break;
        case 'background__fifth':
            codeCss.value = `.background__fifth {
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.background__fifth::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    background-color: ${mainColorInputText.value};
    z-index: -1;
}
.background__fifth:hover::before {
        transform: scaleX(1);
}
.background__fifth:hover {
    color: ${bgcInputText.value};
}` 
            break;
        case 'background__sixth':
            codeCss.value = `.background__sixth {
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.background__sixth::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    background-color: ${mainColorInputText.value};
    z-index: -1;
}
.background__sixth:hover::before {
    transform: scaleX(1);
}
.background__sixth:hover {
    color: ${bgcInputText.value};
}` 
            break;
        case 'background__seventh':
            codeCss.value = `.background__seventh {
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
}
.background__seventh::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    background-color: ${mainColorInputText.value};
    z-index: -1;
    transition: transform .3s;
}
.background__seventh:hover::before {
    transform: scaleX(1);
    transform-origin: left;
} 
.background__seventh:hover {
    color: ${bgcInputText.value};
}` 
            break;
        default:
            console.log('nie ma')
      }
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

// FOOTER YEAR
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();

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