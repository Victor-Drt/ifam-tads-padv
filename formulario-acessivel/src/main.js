import VoiceAssistant from './components/VoiceAssistant.js';

const body = document.querySelector('body');

// voice configuration
const language = 'pt-br';
const rate = 1.5;
const volume = 1.0;

// instances the VoiceAssistant with configuration
const voiceAssistant =  new VoiceAssistant(language, rate, volume);

// click event that calls the VoiceAssistant
body.addEventListener('click', (e) => {

    const clickedElement = e.target;
    const tag = clickedElement.tagName;
    
    // verify clicked tag
    if(tag === 'IMG') {
       
        const previousElement = clickedElement.parentNode

        if(previousElement.tagName === 'BUTTON'){

            let previousDiv = previousElement.parentNode
            let previousInput = previousDiv.parentNode.children[0]
            let value = previousInput.value.trim();
            
            if( value != ""){
                voiceAssistant.readInput(value)
            }else {
                voiceAssistant.readInput("Campo vazio")
            }

            return;
        }

        const labelText = previousElement.textContent;
        voiceAssistant.readLabel(labelText)

    } else if(tag === 'BUTTON') {

        let buttonContent = clickedElement.textContent;
        voiceAssistant.readLabel(buttonContent)

    } else if (tag === 'INPUT') {

        let opcaoRadio = clickedElement.value;
        clickedElement.type === "radio" ? voiceAssistant.readLabel(opcaoRadio) : ''

    }
})

// mouse event that calls the VoiceAssistant
body.addEventListener('mouseover', e => {

    // element on the mouse pointer
    const mouseElement = e.target;
    const tag = mouseElement.tagName;

    if(tag === 'BUTTON') {

        let buttonContent = mouseElement.textContent;
        voiceAssistant.readLabel(buttonContent)
        
    }
})