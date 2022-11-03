"use strict";
window.onload = init;

   function init() {
    const selectbtn = document.getElementById("selectbtn");
    selectbtn.onclick =selectbtnOnClick;
    // other events handlers connected here
   }


let teams = [
 {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
 {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
 {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
 {code:"KAN", name:"Kansas City Chiefs", 
 plays:"Kansas City, MO"},
];

   
   function selectbtnOnClick(){
    const footballTeamsList = document.getElementById("footballTeamsList");
     
    let length = teams.length;
    for(let i = 0; i < length; i++) {

        let theOption = new Option(teams[i]);
        footballTeamsList.appendChild(theOption) ;
    }
   }