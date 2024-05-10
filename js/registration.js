function validateForm(event) {
    const middleName = document.getElementById("middleName").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const mobileNumber = document.getElementById("mobileNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const state = document.getElementById("state").value.trim();
    const district = document.getElementById("district").value.trim();
    const fromNumber = document.getElementById("fromNumber").value.trim();
    const bankAccount = document.getElementById("bankAccount").value.trim();
    const ifscCode = document.getElementById("ifscCode").value.trim();
    const pdfProof = document.getElementById("pdfProof").value.trim();
    const adharCard = document.getElementById("adharCard").value.trim();

    // Validating first name
    if (firstName === "") {
        alert("Please enter your first name.");
        event.preventDefault();
        return false;
    }

    // Validating last name
    if (lastName === "") {
        alert("Please enter your last name.");
        event.preventDefault();
        return false;
    }

    // Validating mobile number
    if (mobileNumber === "") {
        alert("Please enter your mobile number.");
        event.preventDefault();
        return false;
    }

    // Validating email
    if (email === "") { 
        alert("Please enter your email address.");
        event.preventDefault();
        return false;
    }

    // Validating state
    if (state === "") {
        alert("Please enter your state.");
        event.preventDefault();
        return false;
    }

    // Validating district
    if (district === "") {
        alert("Please enter your district.");
        event.preventDefault();
        return false;
    }

    // Validating from number
    if (fromNumber === "") {
        alert("Please enter your 7/12 From No.");
        event.preventDefault();
        return false;
    }

    // Validating bank account
    if (bankAccount === "") {
        alert("Please enter your bank account number.");
        event.preventDefault();
        return false;
    }

    // Validating IFSC code
    if (ifscCode === "") {
        alert("Please enter your IFSC code.");
        event.preventDefault();
        return false;
    }

    // Validating pdf proof
    if (pdfProof === "") {
        alert("Please upload PDF proof.");
        event.preventDefault();
        return false;
    }

    // Validating adhar card
    if (adharCard === "") {
        alert("Please upload Aadhar card.");
        event.preventDefault();
        return false;
    }

    // Validating first name
    if (firstName === "" || !/^[a-zA-Z]+$/.test(firstName)) {
        alert("Please enter a valid first name without digits.");
        return false;
    }

    // Validating middle name
    if (!/^[a-zA-Z]*$/.test(middleName)) {
        alert("Middle name should not contain digits.");
        return false;
    }

    // Validating last name
    if (lastName === "" || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("Please enter a valid last name without digits.");
        return false;
    }

    // Validating mobile number
    if (mobileNumber === "" || !/^\d{10}$/.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Validating email
    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validating ifsc Code
    if (ifscCode === "" || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validation passed
    return true;
}