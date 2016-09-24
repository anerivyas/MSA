// JavaScript Document
function eraseText() {
    var value = document.getElementById("output").value = "";
}
function cancel() {
    var responseVoice = responsiveVoice.cancel($('#ouput').val(), $('#voiceselection').val());
}
function resume() {
    var responseVoice = responsiveVoice.resume($('#ouput').val(), $('#voiceselection').val());
}
function pause() {
    var responseVoice = responsiveVoice.pause($('#ouput').val(), $('#voiceselection').val());
}
function play() { var responseVoice = responsiveVoice.speak($('#output').val(), $('#voiceselection').val()); }
///<reference path="tts.d.ts" />
