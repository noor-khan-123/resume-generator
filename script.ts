document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    (document.getElementById('resume-name') as HTMLParagraphElement).innerText = `Name: ${name}`;
    (document.getElementById('resume-email') as HTMLParagraphElement).innerText = `Email: ${email}`;
    (document.getElementById('resume-education') as HTMLParagraphElement).innerText = `Education: ${education}`;
    (document.getElementById('resume-work') as HTMLParagraphElement).innerText = `Work Experience: ${work}`;
    (document.getElementById('resume-skills') as HTMLParagraphElement).innerText = `Skills: ${skills}`;
});
