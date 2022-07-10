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
const buttonCopyHtml = document.querySelector('.button-copy-html')
const buttonCopyCss = document.querySelector('.button-copy-css')
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
        case 'simple-hover':
            codeCss.value = `.simple-hover {
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
    transition: color .3s
}

.simple-hover:hover {
    color: ${mainColorInputText.value};
}` 
            break;

        case 'simple-hover-with-underline':
            codeCss.value = `.simple-hover-with-underline {
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
    transition: color .3s, text-decoration .3s
}
            
.simple-hover-with-underline:hover {
    color: ${mainColorInputText.value};
    text-decoration: underline;
}` 
            break;
       

        case 'underline-hover':
            codeCss.value = `.underline-hover {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    border-bottom: ${underlineHeightInput.value}px solid transparent;
    cursor: pointer;
    transition: border-bottom .3s;
}
.underline-hover:hover {
    border-bottom-color: ${mainColorInputText.value};
}` 
            break;

        case 'underline-scaling-height':
            codeCss.value = `.underline-scaling-height {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-scaling-height::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
    transform: scaleY(0);
    transition: transform .3s;
}  
.underline-scaling-height:before {
    transform: scaleY(1);
}` 
            break;

        case 'underline-center-to-edges':
            codeCss.value = `.underline-center-to-edges {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-center-to-edges::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transition: transform .3s;
}  
.underline-center-to-edges:before {
    transform: scaleX(1);
}` 
            break;

        case 'underline-center-to-edges-reverse-return':
            codeCss.value = `.underline-center-to-edges-reverse-return {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-center-to-edges-reverse-return::before,
.underline-center-to-edges-reverse-return::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: ${underlineHeightInput.value}px;
    width: 51%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transition: transform .3s;
}  
.underline-center-to-edges-reverse-return::before {
    left: 0;
    transform-origin: left;
}
.underline-center-to-edges-reverse-return::after {
    right: 0;
    transform-origin: right;
}
.underline-center-to-edges-reverse-return:hover::before {
    transform: scaleX(1);
    transform-origin: right;
} 
.underline-center-to-edges-reverse-return:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}` 
            break;

        case 'underline-edges-to-center':
            codeCss.value = `.underline-edges-to-center {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-edges-to-center::before,
.underline-edges-to-center::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: ${underlineHeightInput.value}px;
    width: 51%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transition: transform .3s;
}
.underline-edges-to-center::before {
    transform-origin: left;
    left: 0;
}  
.underline-edges-to-center::after {
    transform-origin: right;
    right: 0;
}
.underline-edges-to-center:hover::before,
.underline-edges-to-center:hover::after {
    transform: scaleX(1);
}` 
            break;

        case 'underline-edges-to-center-reverse-return':
            codeCss.value = `.underline-edges-to-center-reverse-return {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-edges-to-center-reverse-return::before,
.underline-edges-to-center-reverse-return::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: ${underlineHeightInput.value}px;
    width: 51%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transition: transform .3s;
}
.underline-edges-to-center-reverse-return::before {
    left: 0;
    transform-origin: right;
}  
.underline-edges-to-center-reverse-return::after {
    right: 0;
    transform-origin: left;
}
.underline-edges-to-center-reverse-return:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}  
.underline-edges-to-center-reverse-return:hover::after {
    transform: scaleX(1);
    transform-origin: right;
}` 
            break;

        case 'underline-left-to-right':
            codeCss.value = `.underline-left-to-right {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-left-to-right::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s;
} 
.underline-left-to-right:hover::before {
    transform: scaleX(1);
}` 
            break;

        case 'underline-left-to-right-reverse-return':
            codeCss.value = `.underline-left-to-right-reverse-return {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-left-to-right-reverse-return::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s ease-in;
}
.underline-left-to-right-reverse-return:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}` 
            break;
    
        case 'underline-right-to-left':
            codeCss.value = `.underline-right-to-left {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-right-to-left::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s;
} 
.underline-right-to-left:hover::before {
    transform: scaleX(1);
}` 
            break;

        case 'underline-right-to-left-reverse-return':
            codeCss.value = `.underline-right-to-left-reverse-return {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
}
.underline-right-to-left-reverse-return::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${underlineHeightInput.value}px;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s ease-in;
}
.underline-right-to-left-reverse-return:hover::before {
    transform: scaleX(1);
    transform-origin: right;
}` 
            break;


        case 'background-hover':
            codeCss.value = `.background-hover {
    position: relative;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
    transition: color .3s, background-color .3s;
}
.background-hover:hover {
    background-color: ${mainColorInputText.value};
    color: ${bgcInputText.value});
}` 
            break;

        case 'background-center-to-edges-vertical':
            codeCss.value = `.background-center-to-edges-vertical {
    position: relative;
    z-index: 0;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
    transition: color .3s;
}
.background-center-to-edges-vertical::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleY(0);
    transition: transform .3s;
} 
.background-center-to-edges-vertical:hover::before {
    transform: scaleY(1);
}
.background-center-to-edges-vertical:hover {
    color: ${bgcInputText.value};
}` 
            break;
     
        case 'background-center-to-edges-vertical-reverse-return':
            codeCss.value = `.background-center-to-edges-vertical-reverse-return {
    position: relative;
    z-index: 0;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
    transition: color .3s;
}
.background-center-to-edges-vertical-reverse-return::before,
background-center-to-edges-vertical-reverse-return::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleY(0);
    transition: transform .3s;
} 
.workspace .link-stage .background-center-to-edges-vertical-reverse-return::before {
    bottom: 0;
    transform-origin: bottom;
}
.workspace .link-stage .background-center-to-edges-vertical-reverse-return::after {
    top: 0;
    transform-origin: top;
}
.workspace .link-stage .background-center-to-edges-vertical-reverse-return:hover::before {
    transform: scaleY(1);
    transform-origin: top;
} 
.workspace .link-stage .background-center-to-edges-vertical-reverse-return:hover::after {
    transform: scaleY(1);
    transform-origin: bottom;
}
.background-center-to-edges-vertical-reverse-return:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-center-to-edges-horizontal':
            codeCss.value = `.background-center-to-edges-horizontal {
    position: relative;
    z-index: 0;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    transition: color .3s;
}
.background-center-to-edges-horizontal::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transition: transform .3s;
}
.background-center-to-edges-horizontal:hover::before {
    transform: scaleX(1);
}
.background-center-to-edges-horizontal:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-center-to-edges-horizontal-reverse-return':
            codeCss.value = `.background-center-to-edges-horizontal-reverse-return {
    position: relative;
    z-index: 0;
    color: ${fontColorInputText.value};
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    cursor: pointer;
    transition: color .3s;
}
.background-center-to-edges-horizontal-reverse-return::before,
background-center-to-edges-horizontal-reverse-return::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 51%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transition: transform .3s;
} 
.workspace .link-stage .background-center-to-edges-horizontal-reverse-return::before {
    left: 0;
    transform-origin: left;
}
.workspace .link-stage .background-center-to-edges-horizontal-reverse-return::after {
    right: 0;
    transform-origin: right;
}
.workspace .link-stage .background-center-to-edges-horizontal-reverse-return:hover::before {
    transform: scaleX(1);
    transform-origin: right;
} 
.workspace .link-stage .background-center-to-edges-horizontal-reverse-return:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}
.background-center-to-edges-horizontal-reverse-return:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-bottom-to-top':
            codeCss.value = `.background-bottom-to-top {
    position: relative;
    z-index: 0;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    transition: color .3s;
}
.background-bottom-to-top::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform .3s;
}
.background-bottom-to-top:hover::before {
    transform: scaleY(1);
}
.background-bottom-to-top:hover {
    color: ${bgcInputText.value};
}` 
            break;
       
        case 'background-bottom-to-top-reverse-return':
            codeCss.value = `.background-bottom-to-top-reverse-return {
    position: relative;
    z-index: 0;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    transition: color .3s;
}
.background-bottom-to-top-reverse-return::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform .3s;
} 
.background-bottom-to-top-reverse-return:hover::before {
    transform-origin: bottom;
    transform: scaleY(1);
} 
.background-bottom-to-top-reverse-return:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-top-to-bottom':
            codeCss.value = `.background-top-to-bottom {
    position: relative;
    z-index: 0;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    transition: color .3s;
}
.background-top-to-bottom::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform .3s;
}
.background-top-to-bottom:hover::before {
    transform: scaleY(1);
}
.background-top-to-bottom:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-top-to-bottom-reverse-return':
            codeCss.value = `.background-top-to-bottom-reverse-return {
    position: relative;
    z-index: 0;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    transition: color .3s;
}
.background-top-to-bottom-reverse-return::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform .3s;
} 
.background-top-to-bottom-reverse-return:hover::before {
    transform-origin: top;
    transform: scaleY(1);
} 
.background-top-to-bottom-reverse-return:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-left-to-right':
            codeCss.value = `.background-left-to-right {
    position: relative;
    z-index: 0;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    transition: color .3s;
}
.background-left-to-right::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s;
}
.background-left-to-right:hover::before {
    transform: scaleX(1);
}
.background-left-to-right:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-left-to-right-reverse-return':
            codeCss.value = `.background-left-to-right-reverse-return {
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
    transition: color .3s;
}
.background-left-to-right-reverse-return::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s;
}
.background-left-to-right-reverse-return:hover::before {
    transform: scaleX(1);
    transform-origin: left;
} 
.background-left-to-right-reverse-return:hover {
    color: ${bgcInputText.value};
}` 
            break;
      
        case 'background-right-to-left':
            codeCss.value = `.background-right-to-left {
    position: relative;
    z-index: 0;
    font-family: ${fontFamilyInput.value};
    font-size: ${fontSizeInput.value}px;
    font-weight: ${root.style.getPropertyValue('--font-weight')};
    font-style: ${root.style.getPropertyValue('--font-style')};
    text-decoration: none;
    color: ${fontColorInputText.value};
    cursor: pointer;
    transition: color .3s;
}
.background-right-to-left::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s;
}
.background-right-to-left:hover::before {
    transform: scaleX(1);
}
.background-right-to-left:hover {
    color: ${bgcInputText.value};
}` 
            break;

        case 'background-right-to-left-reverse-return':
            codeCss.value = `.background-right-to-left-reverse-return {
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
    transition: color .3s;
}
.background-right-to-left-reverse-return::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainColorInputText.value};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s;
}
.background-right-to-left-reverse-return:hover::before {
    transform: scaleX(1);
    transform-origin: right;
} 
.background-right-to-left-reverse-return:hover {
    color: ${bgcInputText.value};
}` 
            break;

        default:
            console.log('class not found')
      }
}

const copyToClipboard = (code) => {
    code.select()
    document.execCommand('copy')
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
    stageLink.innerHTML = 'Hover Me'
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

buttonCopyHtml.addEventListener('click', () => copyToClipboard(codeHtml))
buttonCopyCss.addEventListener('click', () => copyToClipboard(codeCss))

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