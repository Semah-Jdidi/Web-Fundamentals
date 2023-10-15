var likes = document.querySelector(".likes");
var count = 3 ;


function add(element){
    if (element.innerText != "Liked"){
    count++;
    likes.innerText = count + " Likes";
    element.innerText = "Liked"
}   else{
    count--;
    likes.innerText = count + " Likes"
    element.innerText = "Like"
}

}