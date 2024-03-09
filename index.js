function openModal() {
var modal = document.getElementById("lightboxModal");
var modalImage = document.getElementById("modalImage");
modal.style.display = "block";
modalImage.src = image.src;
}
function closeModal() {
var modal = document.getElementById("lightboxModal");
MediaCapabilities.style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("lightboxModal");
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('DOMContainerLoaded', function() {
    var navLinks = document.querySelectorAll('nav ur li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click',function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
                this.classList.add('active');
            });
        });
    });

document.addEventListener('DOMContentLoaded', function()
{
    ScrollReveal().reveal('.data-scroll', {
        Delay: 200,
        distance: '20px',
        orgin:'bottom',
        opacity: 1,
        duration: 1000,
        easing: 'ease-in-out'
    });
})
function validateForm(){
    var fullname =document.getElementById('name').value
    var  email =document.getElementById('email').value
    var  subject =document.getElementById('subject').value
    var  textarea =document.getElementById('textarea').value
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(name.trim() === '') {
    alert('please enter youn name.');
    return false;
}
if(!emailRegex.test(email)) {
    alert('please enter a valid email address.');
    return false;
}
if(textarea.trim() === '') {
    alert('please enter your message.');
    return false;
}
return true;
}