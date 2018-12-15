function allCategories_Button() {
  document.getElementById("categoryValueText").innerHTML = null;
  document.getElementById("categoryValue").innerHTML = "Bitte wählen Sie eine Kategorie oder eine Textsorte aus.";
  document.getElementById("categories").style.width = "100%";

}

function openNav() {}

function closeNav() {
  document.getElementById("categories").style.width = "0%";
}

var allData = {
  Karrierewege: "Karrierewege is wichtig!",
  Promotion: "Promotion ohne geehts auch?",
  Arbeitsplatz: "Arbeitsplatz sollte immer aufgeräumt sein ;)?!",
  Habilitation: "Habilitation wünschen sich alle Eltern für ihre Kinder",
  Juniorprofessur: "Juniorprofessur mit allen ehren",
  "Berufungs-verfahren": "Berufungs-verfahren endlich Geschworener!",
  "Familie, Partnerschaft, Alltag": "Familie, Partnerschaft, Alltag .... etc.",
  Mobilität: "Mobilität ist besser als Morbidität",
  "Blick aus dem Ausland": "Blick aus dem Ausland -> in's Land",
  Allgemein: "Allgemein aber nicht konkret"
};

function getNode(el) {
  document.getElementById("categoryValue").innerHTML = el.innerHTML.trim();
  document.getElementById("categoryValueText").innerHTML = allData[el.innerHTML.trim()];
  el.focus();
}
