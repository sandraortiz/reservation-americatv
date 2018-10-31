const form = document.getElementById("fom")
const data = firebase.database().ref('users');
data.on('child_added', function (snapshot) {
  // updateStarCount();
  // console.log();
const snap  = snapshot.val().Circus.products
const snaps  = snapshot.val()
// console.log(snaps);
show(snap,snaps)
});

const show = (snap,snaps) =>{


form.innerHTML =+`
<p>${snaps.Circus.name}</p>
   <div class="input-group ">
     <select class="custom-select" id="inputGroupSelect01">
       <option selected>Nomca cola </option>
       <option value="1">${snap[0]}</option>
       <option value="2">${snap[1]}</option>
     </select>
   </div>
   <br>
     <button>enter</button>`
}