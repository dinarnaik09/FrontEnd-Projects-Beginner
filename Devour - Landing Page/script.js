//Function to open a sidebar:
function openSideBar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

//Function to close the sidebar:
function closeSideBar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

//FUNCTION TO CLOSE A SIDEBAR AUTOMATICALLY WHEN RESIZING THE SCREEN:
window.addEventListener("resize" , () => {
    if(window.innerWidth > 768){
        closeSideBar();
    }

})