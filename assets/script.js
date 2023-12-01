   var home=document.getElementById('home');
var aboutme=document.getElementById('about');

function about(){
home.style.display="none";
aboutme.style.display="flex"
}
function home(){

}

 function showPage(page) {
            var pages = document.getElementsByClassName('content');
            for (var i = 0; i < pages.length; i++) {
                pages[i].style.display = 'none';
            }
            document.getElementById(page).style.display = 'block';
        }