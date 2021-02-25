$(document).on('click', '.qty-plus', function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$(document).on('click', '.qty-minus', function () {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.add("show");
    }
    function leaveFunction(){
        document.getElementById("myDropdown").classList.remove("show");
    }
    // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}


// function displays(e){
//     var eyes =document.getElementsByClassName("mini-eye");
//         eyes.style.display = "block";
//         eyes.style.color = "red";
// }
// function dissappear(e){
//     var eyes = document.getElementsByClassName("eye");
//     eyes.style.display = "none";
// }
// function change(e){
//     var change = document.getElementById("mini-eye");
//     change.style.color = "white";
//     change.style.backgroundColor = "red";
// }
// function change1(e){
//     var change = document.getElementById("mini-eye");
//     change.style.color = "black";
//     change.style.backgroundColor = "white";
// }

function openPopup(){
    document.getElementById("bg-fade").style.display = "block";
    document.getElementById("popup").style.display = "block";
}
function closePopup(){
    document.getElementById("bg-fade").style.display = "none";
    document.getElementById("popup").style.display = "none";
}