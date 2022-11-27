// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (response) {
            return response.json();
        }).then(function (response) {

            const div = document.getElementById("container");


            //TODO: push out each Astronaut to the screen
            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
                // NOTES: the + on line 15 adds multiple astronauts to the document.The = only add one iteration of the response[i]
                div.innerHTML += `
        <div class="astronaut">
   <div class="bio">
      <h3>${response[i].firstName}${response[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${response[i].hoursInSpace}</li>
         <li>Active: ${response[i].active}</li>
         <li>Skills: ${response[i].skills.join(", ")}</li>
      </ul>
   </div>
   <img class="avatar" src="${response[i].picture}">
</div>
        `
            }
        })
});
