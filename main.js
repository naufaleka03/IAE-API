fetchingStanding();

async function fetchingStanding(){
    try {
      var response = await fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=70d6d88c95826e29174e23252249df8b6cd0a41a24aaa7e77aee6e9ef390deef');
        var data = await response.json();
        console.log(data);
        return data;
    }
        
    catch(error){
        return error;
    }
}

async function fill(){
    var standingBody = document.getElementById("standings-body");
    var data = await fetchingStanding();
    if(data){
        data.forEach(club => {
            var row = document.createElement("tr")
            row.innerHTML = `
            <td>${club.overall_league_position}</td>
            <td><img src="${club.team_badge}" class="team-logo">${club.team_name}</td>
            <td>${club.overall_league_payed}</td>
            <td>${club.overall_league_W}</td>
            <td>${club.overall_league_D}</td>
            <td>${club.overall_league_L}</td>
            <td>${club.overall_league_PTS}</td>`
            ;
            standingBody.appendChild(row);
        })
    }
}

document.addEventListener("DOMContentLoaded", function(){
    fill();
})