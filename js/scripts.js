

/* Typing Animation */

var typed = new Typed(".typing",{
    strings:[" ","Web Designer","Graphic Designer","Full Stack Web developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

/*----- popup-success ------*/

function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('hidden');
  popup.classList.add('show');

  // Hide after 3 seconds
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.classList.add('hidden'), 400);
  }, 3000);
}


/*----- EMAIL JS ------*/

function sendMail() {
  
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  
  [name, email, subject, message].forEach((field) => {
    field.classList.remove("is-invalid");
  });


  let isValid = true;

  if (!name.value.trim()) {
    name.classList.add("is-invalid");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailPattern.test(email.value)) {
    email.classList.add("is-invalid");
    isValid = false;
  }

  if (!subject.value.trim()) {
    subject.classList.add("is-invalid");
    isValid = false;
  }

  if (!message.value.trim()) {
    message.classList.add("is-invalid");
    isValid = false;
  }

  // If any field is invalid, stop the process
  if (!isValid) {
    return;
  }

  // Prepare email parameters
  const params = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  const serviceID = "service_a8jubza";
  const templateID = "template_jiket5l";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      // Clear the form
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";

      // Show success popup
      showPopup();
    })
    .catch((err) => {
      console.log("EmailJS Error:", err);
    });
}


