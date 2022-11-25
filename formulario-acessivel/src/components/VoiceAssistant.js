export default class VoiceAssistant {
    
    speechSynthes =  new SpeechSynthesisUtterance();
    synth = window.speechSynthesis;


    constructor (lang, velocity, volume) {
        this.speechSynthes.lang = lang
        this.speechSynthes.rate = velocity;
        this.speechSynthes.volume = volume  
    }

    readLabel (text) {
        this.speechSynthes.text = text;
        this.synth.speak(this.speechSynthes)
    }

    readInput(text){
        this.speechSynthes.text = text;
        this.synth.speak(this.speechSynthes)
    }
    
}