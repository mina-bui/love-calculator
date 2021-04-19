// Scripts for the Love Calculator

calculateLove() {
    var nameOne = document.getElementById("name-one");
    var nameTwo = document.getElementById("name-two");

    if (nameOne == "") {
        alert('Please enter your name');
    } else if (nameOne.length <= 2) {
        alert('Please enter a valid name.');
    } else if (!isNaN(nameOne)) {
        alert('Please enter valid characters only (Sorry, X Æ A-12).')
    }

    if (nameTwo == "") {
        alert('Please enter your name');
    } else if (nameTwo.length <= 2) {
        alert('Please enter a valid name.');
    } else if (!isNaN(nameTwo)) {
        alert('Please enter valid characters only (Sorry, X Æ A-12).')
    }

}