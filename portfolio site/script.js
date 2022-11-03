function checkNumber() {
    let formCheck = document.forms['myCoolForm']['phone'].value;
    if (formCheck == '') {
        alert("Phone Number cannot be blank");
        return false;
    }
}