$(document).on('click', '.qty-plus', function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$(document).on('click', '.qty-minus', function () {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

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