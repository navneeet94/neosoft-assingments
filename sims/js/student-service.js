const API = "http://localhost:3001/student/"

// fetch data
fetch(API)
  .then(res => res.json())
  .then(data => {
    data.forEach((edata, ind) => {
      document.getElementById("main_task_list").innerHTML += `
              <div class="col-lg-3 col-md-4 col-sm-6 pl-2 pr-2">
                <div class="card my_card task_box">
                 <span class="taskId">${edata.id}</span>
                 <strong class="d-block mb-3">${edata.name}</strong>
                 <p><b style="color:#b7b7b7">Class</b> :- ${edata.stuClass}</p>
                 <p><b style="color:#b7b7b7">Roll No</b> :- ${edata.rollno}</p>
                 <p><b style="color:#b7b7b7">Subject</b> :- ${edata.subject}</p>
                 <ul class="actions_list">
                 <li><button class="btn_action btn_trash" onclick='delStudent(${edata.id})'><i class="fa fa-trash"></i></button></li>
                 <li><a class="btn_action btn_edit" href='edit-student.html?eid=${edata.id}'><i class="fa fa-pencil"></i></a></li>
                 </ul>
                </div>
                </div>
             `
    })
  })
  .catch(err => console.log(err))

// create data

document.querySelector("#addStudent").addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let stuClass = document.getElementById("class").value;
  let rollno = parseInt(document.getElementById("rollno").value);
  let subject = document.getElementById("subject").value;
  fetch(API, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      stuClass: stuClass,
      rollno: rollno,
      subject: subject
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        alert("Data Post");
        window.location.href = "./index.html"
      }
    })
    .catch(err => console.log(err))
})


// delete data

function delStudent(id) {
  fetch(API + id, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        alert("Data deleted");
        window.location.href = "./index.html"
      }
    })
}


