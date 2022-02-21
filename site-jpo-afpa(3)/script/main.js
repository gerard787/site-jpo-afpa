const jeunes = document.getElementById("jeunes");
const profil_jeunes = document.getElementById("profil_jeunes");

const salarie = document.getElementById("salarie");
const profil_salarie = document.getElementById("profil_salarie");

const reconversion = document.getElementById("reconversion");
const profil_reconversion = document.getElementById("profil_reconversion");

const migrants = document.getElementById("migrants");
const profil_migrants = document.getElementById("profil_migrants");

const handicap = document.getElementById("handicap");
const profil_handicap = document.getElementById("profil_handicap");


profil_jeunes.addEventListener("mouseover", () => {
	jeunes.style.display = "block";
	salarie.style.display = "none";
	reconversion.style.display = "none";
	migrants.style.display = "none";
	handicap.style.display = "none";
});
profil_salarie.addEventListener("mouseover", () => {
	jeunes.style.display = "none";
	salarie.style.display = "block";
	reconversion.style.display = "none";
	migrants.style.display = "none";
	handicap.style.display = "none";
});

profil_reconversion.addEventListener("mouseover", () => {
	jeunes.style.display = "none";
	salarie.style.display = "none";
	reconversion.style.display = "block";
	migrants.style.display = "none";
	handicap.style.display = "none";
});

profil_migrants.addEventListener("mouseover", () => {
jeunes.style.display = "none";
	salarie.style.display = "none";
	reconversion.style.display = "none";
	migrants.style.display = "block";
	handicap.style.display = "none";
});

profil_handicap.addEventListener("mouseover", () => {
jeunes.style.display = "none";
	salarie.style.display = "none";
	reconversion.style.display = "none";
	migrants.style.display = "none";
	handicap.style.display = "block";
});
// profil_handicap.addEventListener("mouseout", () => {handicap.style.display = "none";});