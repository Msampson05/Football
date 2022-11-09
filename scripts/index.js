"use strict";

window.onload = init;

const teams = [
 {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
 {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
 {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
 {code:"KAN", name:"Kansas City Chiefs",  plays:"Kansas City, MO"},
];


function init() {
 fillDropdown();
 const selectbtn = document.getElementById("selectbtn");
 selectbtn.onclick = selectbtnOnClick;
 // other events handlers connected here
}
  
function fillDropdown(){

    const footballTeamsList = document.getElementById("footballTeamsList");
    let selectTeamOption = document.createElement("option");
    selectTeamOption.value = "";
    selectTeamOption.textContent = "Select a Team ..";
    footballTeamsList.appendChild(selectTeamOption);
    
    
    
    let teamsLength = teams.length;
    for(let i = 0 ; i < teamsLength; i++){
        let newOption = document.createElement("option");
        newOption.value = teams[i].code;
        newOption.textContent = teams[i].name;
 
        footballTeamsList.appendChild(newOption);
    }
}

   function selectbtnOnClick(){
    const footballTeamsList = document.getElementById("footballTeamsList");
     let selectedTeamCode = footballTeamsList.value;
    let selectedTeam = getTeamFromCode(teams, selectedTeamCode);

    let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
    const teamInformation = document.getElementById("teamInformation");
    teamInformation.innerHTML = message;

   }
   function getTeamFromCode(teams, code){
    let teamscount = teams.length;
    for(let i = 0; i < teamscount;  i++){
        if(teams[i].code == code){
          return teams[i];
        }
    }
    return null;
   }