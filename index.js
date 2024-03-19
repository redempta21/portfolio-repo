
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('full-name').value;
     if(name.length == 0) {
        nameError.innerHTML = 'name is required';
        return false;
     }
     if(!name.match(/^[A-Za-z]*\s{  1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return false; 
     }
      nameError.innerHTML = ''; 
      return true;          
}
function validateEmail() {
    var email = document.getElementById('contact-email').value; 
    if(email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'email invalid';
        return false; 
    }
    emailError.innerHTML = '';
        return true;
}

function validateSubject() {
    var subject = document.getElementById('contact-subject').value;
     if(subject.length == 0) {
        subjectError.innerHTML = 'subject is required';
        return false;
     }
     if(!subject.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '';
        return false; 
     }
      subjectError.innerHTML = ''; 
      return true; 
    }

    function validateMessage() {
        var message = document.getElementById('contact-message').value;
        var required = 30;
        var left = required - message.length;

        if (left > 0) {
            messageError.innerHTML = left + 'more character required';
            return false;
        }
            messageError.innerHTML = '';
            return true;
       
    }
function validateForm() {
    if(!validateName() || validateEmail() || !validateSubject() || !validateMessage()) {
        submitError.style.display = 'block';
      submitError.innerHTML = 'please fix error to submit'; 
      setTimeout(function(){submitError.style.display = 'none';}, 3000);
      return false;  
    }
}



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
});