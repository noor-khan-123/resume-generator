document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var work = document.getElementById('work').value;
    var skills = document.getElementById('skills').value;
    document.getElementById('resume-name').innerText = "Name: ".concat(name);
    document.getElementById('resume-email').innerText = "Email: ".concat(email);
    document.getElementById('resume-education').innerText = "Education: ".concat(education);
    document.getElementById('resume-work').innerText = "Work Experience: ".concat(work);
    document.getElementById('resume-skills').innerText = "Skills: ".concat(skills);
});
