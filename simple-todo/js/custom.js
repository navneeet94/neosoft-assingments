let overlay = document.getElementById('overlay')

function showAddSidebar(){
    let sidebar = document.getElementById('addtodoSidebar')
    sidebar.classList.add("show_Sidebar");
    overlay.classList.add("show_overlay");
}

function hideSidebar(){
    let sidebar = document.getElementById('addtodoSidebar')
    sidebar.classList.remove("show_Sidebar");
    overlay.classList.remove("show_overlay");
}

function overlaySidebarClick(){
    let sidebar = document.getElementById('addtodoSidebar')
    sidebar.classList.remove("show_Sidebar");
    overlay.classList.remove("show_overlay");
}

function deleteShowClick(){
    delete_buttons = document.querySelectorAll(".btn_trash")
    console.log(delete_buttons)
    // delete_buttons.classList.add("Herro")
}
