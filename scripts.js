function fillSkills() {
    const skills = {
        "HTML/CSS/Javascript": 5,
        "Python": 5,
        "Node.js": 5,
        "Excel/Sheets": 5, 
        "Java": 4, 
        "SQL": 3,
        "Git": 3,
        "C": 2,
        "OCaml": 2
    }; 

    const div = document.getElementsByClassName('skill-items')[0];

    for (let k of Object.keys(skills)) {
        const ratingEle = document.createElement('div'); 
        ratingEle.classList.add('left-col')
        const level = skills[k]; 
        for (let i = 1; i <= 5; i++) {
            const circleEle = document.createElement('span'); 
            circleEle.innerText = '\u2B24'
            if (i <= level) {
                circleEle.classList.add('fill')
                ratingEle.appendChild(circleEle); 
            }
        }
        const skillNameEle = document.createElement('span'); 
        skillNameEle.innerText = k;
        skillNameEle.classList.add('right-col'); 
        div.appendChild(ratingEle);
        div.appendChild(skillNameEle);  

    }
}

fillSkills(); 