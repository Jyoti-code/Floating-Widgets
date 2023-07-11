function submitEnquiry() {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var contact = document.getElementById('contactInput').value;
    var textarea = document.getElementById('textareaInput').value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Contact: " + contact);
    console.log("Textarea: " + textarea);

    $('#enquiryModal').modal('hide');
}