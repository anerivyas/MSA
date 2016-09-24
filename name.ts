// JavaScript Document


function eraseText() {
	var value = (<HTMLInputElement>document.getElementById("output")).value = "";
}

function cancel() {
var responseVoice = responsiveVoice.cancel($('#ouput').val(),$('#voiceselection').val());}


function resume() {
var responseVoice = responsiveVoice.resume($('#ouput').val(),$('#voiceselection').val());}

function pause() {
    var responseVoice = responsiveVoice.pause($('#ouput').val(), $('#voiceselection').val());
}

function play()
{var responseVoice = responsiveVoice.speak($('#output').val(),$('#voiceselection').val());}

function select() {
var voicelist = responsiveVoice.getVoices();
var vselect = $("#voiceselection");
$.each(voicelist, function () {
    vselect.append($("<option />").val(this.name).text(this.name));
});}

 ///<reference path="tts.d.ts" />

