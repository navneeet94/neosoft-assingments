tags = document.getElementsByClassName('list-inline-item');
// console.log(localStorage)
if(localStorage.length != 0){
   document.getElementById("username").innerHTML = localStorage.getItem("username");
   document.getElementById('btnSetLogin').style.display = 'none';  
   document.getElementById('btnLogOut').style.display = 'inline-block';  
}

// for (let [i,v] of tags.entries()){
//     i.classList.add(v,'show');
// }


function allCity(){
   var x = document.getElementById("viewAll");
   if (x.textContent === "View All") {
      x.textContent = "View Less";
   } else {
      x.textContent = "View All";
   }
   hidden_city = document.getElementById('hiddenItems')
   hidden_city.classList.toggle('show')

}

function btnLogin(event){
   // alert('Hello')
   email = document.getElementById('email').value;
   pwd = document.getElementById('pwd').value;
   // alert(`${email} ${pwd}`)
   if (email === "admin" && pwd === "admin"){
      localStorage.setItem("username", "admin");
      localStorage.setItem("pwd", "admin");
      alert('Log In Successfully')
      window.location.reload()
      console.log(localStorage.getItem("username"))
      console.log(localStorage.getItem("pwd"))
   }
   else{
      alert('Username & Pwd not matched')
   }
}

function btnLogOut(){
   localStorage.removeItem("username");
   localStorage.removeItem("pwd");
   alert('Log Out Successfully')
   window.location.reload()
}