const todos = [];

dummy = [{
  "taskId": "1",
  "title": "UI Issue 1",
  "discription": "This is a bug issue 1",
  "priority": "High",
  "hours": 1,
  "minutes": 1,
  "seconds": 1,
  "taskStatus": "Assigned"
},
{
  "taskId": "2",
  "title": "UI Issue 2",
  "discription": "This is a bug issue ",
  "priority": "High",
  "hours": 2,
  "minutes": 2,
  "seconds": 2,
  "taskStatus": "Assigned"
},
{
  "taskId": "123456",
  "title": "UI Issue 3",
  "discription": "This is a bug issue ",
  "priority": "High",
  "hours": 3,
  "minutes": 3,
  "seconds": 3,
  "taskStatus": "Assigned"
}]


function printTodos(){
  let mainTaskList = document.getElementById("main_task_list");
  mainTaskList.innerHTML = ''
  todos.forEach((val) => {
    let mainTaskList = document.getElementById("main_task_list");
      mainTaskList.innerHTML += `<div class="card my_card task_box" id="${"task_"+val['taskId']}" draggable="true" ondragstart="drag(event)">
      <span class="taskId">${val['taskId']}</span>
      <strong>${val['title']}</strong>
      <p>${val['discription']}</p>
      <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
              <span class="priority">${val['priority']}</span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 text-right">
              <span class="time_give theme_text">${val['hours']}:${val['minutes']}:${val['seconds']}</span>
          </div>
      </div>
  
      <ul class="actions_list">
          <li>
              <button class="btn_action btn_trash" id="${val['taskId']}" onclick="deleteTodo(${val['taskId']})">
                  <i class="fa fa-trash"></i>
              </button>
          </li>
          <li>
              <button class="btn_action btn_edit" onclick="getEditData(${val['taskId']})">
                  <i class="fa fa-pencil"></i>
              </button>
          </li>
      </ul>
  </div>`
  });
}

printTodos()

function addTask(e) {
  todoObj = {
    taskId: '',
    title: '',
    discription: '',
    priority: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
    taskStatus: '',
  }

  let taskIdfield = document.getElementById("taskidInput").value;
  let titlefield = document.getElementById("titleInput").value;
  let descriptionfield = document.getElementById("discriptionInput").value;
  let priorityfield = document.getElementById("priorityInput").value;
  let hoursfield = document.getElementById("hoursInput").value;
  let minutesfield = document.getElementById("minutesInput").value;
  let secondsfield = document.getElementById("secondsInput").value;

  if (
    taskIdfield == "" &&
    titlefield == "" &&
    descriptionfield == "" &&
    priorityfield == "" &&
    hoursfield == "" &&
    minutesfield == "" &&
    secondsfield == ""
  ) {
    document.getElementById("error_all").textContent = "* Fill All Fields";

    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";

    return false;
  } else if (taskIdfield == "") {
    document.getElementById("error_taskId").textContent = "* Fill Task Id";

    document.getElementById("error_all").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";
    return false;
  } else if (titlefield == "") {
    document.getElementById("error_titlename").textContent =
      "* Fill Title Name";

    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";
    return false;
  } else if (descriptionfield == "") {
    document.getElementById("error_discription").textContent =
      "* Fill Description";
    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";
    return false;
  } else if (priorityfield == "") {
    document.getElementById("error_priority").textContent = "* Fill Priority";
    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";
    return false;
  } else if (hoursfield == "" && minutesfield == "" && secondsfield == "") {
    document.getElementById("error_time").textContent = "* Fill Time Limit";
    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";
    return false;
  } else if (hoursfield == "") {
    document.getElementById("error_hours").textContent = "* Fill Hours";
    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";
    return false;
  } else if (minutesfield == "") {
    document.getElementById("error_minutes").textContent = "* Fill Minutes";
    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_seconds").textContent = "";
    return false;
  } else if (secondsfield == "") {
    document.getElementById("error_seconds").textContent = "* Fill Seconds";
    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    return false;
  } else {
    document.getElementById("error_all").textContent = "";
    document.getElementById("error_taskId").textContent = "";
    document.getElementById("error_titlename").textContent = "";
    document.getElementById("error_discription").textContent = "";
    document.getElementById("error_priority").textContent = "";
    document.getElementById("error_time").textContent = "";
    document.getElementById("error_hours").textContent = "";
    document.getElementById("error_minutes").textContent = "";
    document.getElementById("error_seconds").textContent = "";

    let sidebar = document.getElementById("addtodoSidebar");
    sidebar.classList.remove("show_Sidebar");
    overlay.classList.remove("show_overlay");

    todoObj.taskId = taskIdfield;
    todoObj.title = titlefield;
    todoObj.discription = descriptionfield;
    todoObj.priority = priorityfield;
    todoObj.hours = parseInt(hoursfield);
    todoObj.minutes = parseInt(minutesfield);
    todoObj.seconds = parseInt(secondsfield);
    todoObj.taskStatus = 'Assigned';
    // console.log(todoObj)
    todos.push(todoObj)
    console.log(todos)
    printTodos()
  }
}


function deleteTodo(id){
  task_id_is = id
  // console.log(task_id_is) 
  console.log(todos) 
  for(i=0;i<=todos.length - 1;i++){
    if(todos[i]['taskId'].includes(task_id_is)){
      console.log(`${todos[i]['taskId']} at ${i} this position`);
      id_pos = i;
      confirmation = confirm("Are you sure want to delete")
      if (confirmation == true){
        todos.splice(id_pos,1)
      }
      break;
    }
  }
  printTodos()
  console.log(todos)
}

function getEditData(id){
  task_id_is = id
  // console.log(task_id_is) 
  console.log(todos) 
  for(i=0;i<=todos.length - 1;i++){
    if(todos[i]['taskId'].includes(task_id_is)){
      console.log(`${todos[i]['taskId']} at ${i} this position`);
      id_pos = i;
      showAddSidebar()
      document.getElementById('taskidInput').readOnly = true
      document.getElementById('addtodoSidebar').classList.add("updateSidebar")

      document.getElementById('taskidInput').value = todos[i]['taskId'];
      document.getElementById('titleInput').value = todos[i]['title'];
      document.getElementById('discriptionInput').value = todos[i]['discription'];
      document.getElementById('priorityInput').value = todos[i]['priority'];
      document.getElementById('hoursInput').value = todos[i]['hours'];
      document.getElementById('minutesInput').value = todos[i]['minutes'];
      document.getElementById('secondsInput').value = todos[i]['seconds'];
      break;
    }
  }
}



function updateButton(){
  taskid_text = document.getElementById('taskidInput').value
  title_text = document.getElementById('titleInput').value
  description_text = document.getElementById('discriptionInput').value
  priority_text = document.getElementById('priorityInput').value
  hours_text = document.getElementById('hoursInput').value
  minutes_text = document.getElementById('minutesInput').value
  seconds_text = document.getElementById('secondsInput').value
  // alert(taskid_text)
  for(i=0;i<=todos.length - 1;i++){
    if(todos[i]['taskId'].includes(taskid_text)){
      console.log(`${todos[i]['taskId']} at ${i} this position`);
      id_pos = i;

      titleVal = todos[i]['title'];
      discriVal = todos[i]['discription'];
      priorityVal = todos[i]['priority'];
      hoursVal = todos[i]['hours'];
      minuteVal = todos[i]['minutes'];
      secondsVal = todos[i]['seconds'];

      console.log(titleVal , discriVal , priorityVal , hoursVal , minuteVal , secondsVal)

      if (title_text!=titleVal || description_text != discriVal || priority_text != priorityVal || hours_text != hoursVal || minutes_text != minuteVal || seconds_text != secondsVal){
        updateConfirmation = confirm("Do you want edit this todo")
        if(updateConfirmation==true){
          todos[i]['title'] = title_text
          todos[i]['discription'] = description_text
          todos[i]['priority'] = priority_text
          todos[i]['hours'] = hours_text
          todos[i]['minutes'] = minutes_text
          todos[i]['seconds'] = seconds_text
  
          console.log(todos[i]['title'] , todos[i]['discription'] , todos[i]['priority'] , todos[i]['hours'] , todos[i]['minutes'] , todos[i]['seconds'])
          console.log(todos[i])
        }
      }
      else{
        alert("Having Same Value")
      }
      break;
    }
  }

  hideSidebar()
  printTodos()
  console.log(todos)

}