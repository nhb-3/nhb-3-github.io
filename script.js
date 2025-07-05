function dots(){
    let dotspan = document.createElement('span');
    dotspan.classList.add('dots');
    return dotspan;
}
async function para(text, time) {
    let paragraph = document.createElement('div');
    paragraph.classList.add('para');
    paragraph.innerText = text || '';
    paragraph.appendChild(dots());
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(paragraph);
        }, time);
    });
    
}

 async function updateSteps (content1, content2, t1, t2){
    let p = await para(content1, t1);
    document.body.querySelector(".terminal").appendChild(p);
    return new Promise((resolve) => {
        setTimeout(() => {  
            p.querySelector('.dots').remove();
            p.innerText = content2;
            resolve(p);
        }, t2);
    });
}
 
async function Hacker() {

    await updateSteps("Initialized Hacking","Hacking Initialized and gained access to the system", 1000, 2000);
    await updateSteps("Reading all the files","Read all the files successfully", 2000, 6000);
    await updateSteps("Password files Detected","Gained access for all the password files", 1000, 3000);
    await updateSteps("Sending all passwords and personal files to server","Successfully sent the files to the server", 2000, 1000);
    await updateSteps("Cleaning up","Your System is Hacked", 2000, 3000);
}
Hacker()