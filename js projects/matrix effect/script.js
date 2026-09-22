const para = document.querySelector('p');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const text = para.innerText;

let interval=0;
function randomText(){
    
    const str = text.split("").map((ch,idx)=>{
        if(idx<interval){
            return ch;
        }
        return characters.split("")[Math.floor(Math.random()*characters.length)];
    }).join("");



    para.innerText = str;

    interval += 0.5;
}


let sn = setInterval(()=>{
    if(interval > text.length){
        clearInterval(sn);
        return;
    }
    randomText();
},30);