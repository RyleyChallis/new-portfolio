const formURL = "https://script.google.com/macros/s/AKfycbwxijOF-M-rfitNRjxqI3wyBsEGAsIxwAFVmAJAFS8TgD7ToL5fBbTv3-_RXkawCcPDAw/exec";
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if (!form) {
    console.error("CRITICAL: Form cannot be found");
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let firstInvalidInput = null;

    requiredFields.forEach(field => {
        if (!field.checkValidity() && !firstInvalidInput) {
            firstInvalidInput = field;
        }
    });

    if (firstInvalidInput) {
        firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidInput.focus();
        return;
    }

    const formData = new FormData(form);

    fetch(formURL, { 
        method: 'POST', 
        mode: 'no-cors',
        body: formData 
    })
    .then(response => {
        console.log('Success!', response);
        submitBtn.style.backgroundColor = "#598738";
        submitBtn.innerText = "Success!";
        form.reset();
    })
    .catch(error => {
        console.error('Error!', error);
    });
});