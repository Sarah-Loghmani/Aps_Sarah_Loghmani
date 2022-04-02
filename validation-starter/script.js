const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const submitError = document.getElementById("submitError");

function validateName() {
    const name = document.getElementById("contactName").value;

    if(name.length == 0){
        nameError.innerHTML= 'Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]/)){
        nameError.innerHTML= 'Write full name'
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone(){
    const phone = document.getElementById("contactPhone").value;


    if(phone.length == 0){
        phoneError.innerHTML='Phone No is required';
        return false;
    }
    if (phone.length !== 10) {
      phoneError.innerHTML = "Phone No should be 10 digits";
      return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'The phone must contains digits'
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    const email = document.getElementById("contactEmail").value;

    if(email.length ==0){
        emailError.innerHTML= 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
  const message = document.getElementById("contactMessage").value;
  const left = 30 - message.length;

//   if (message.length == 0) {
//     message.innerHTML = "Message is required";
//     return false;
//   }
  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(()=>{submitError.style.display = 'none'},3000)
        return false;
    }
}