const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let theme = document.querySelector('.theme-button');
var element = document.body;

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

theme.onclick = () => {
	element.classList.toggle("light-mode");
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.user_info',{delay:190, origin:'bottom'})
sr.reveal('.about,.skills,.portfolio,.contact',{delay:200, origin:'bottom'})


function urlclicked(){
	document.getElementById('insta').href = "https://www.instagram.com/anam_singak?igsh=NWR2bTI4ZnhmdnJk";
	document.getElementById('github').href = "https://github.com/dashboard";
	document.getElementById('linkedin').href = "";
	document.getElementById('whatsapp').href = "";
	document.getElementById('facebook').href= "https://www.facebook.com/limboosinghak.abishek/";
}

