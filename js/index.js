var cible = new Date("March 30, 2022 10:00:00");


var mms_jour = 24 * 60 * 60 * 1000;
var mms_heure = 60 * 60 * 1000;
var mms_minute = 60 * 1000;
var mms_seconde = 1000;


function decompte() {


var aujourdhui = new Date();


var change_j = -1;
var change_h = -1;
var change_m = -1;


var diff_mms = cible.getTime() - aujourdhui.getTime();


diff_jours = Math.floor(diff_mms / mms_jour);
diff_mms -= diff_jours * mms_jour;


diff_heures = Math.floor(diff_mms / mms_heure);
diff_mms -= diff_heures * mms_heure;


diff_minutes = Math.floor(diff_mms / mms_minute);
diff_mms -= diff_minutes * mms_minute;


var diff_secondes = Math.floor(diff_mms / mms_seconde);




document.getElementById("jours").innerText = diff_jours;
document.getElementById("heures").innerText  = diff_heures;
document.getElementById("minutes").innerText  = diff_minutes;
document.getElementById("secondes").innerText = diff_secondes;


setTimeout("decompte()",1000);
}

decompte()