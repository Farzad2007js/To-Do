let txt=document.getElementById('txt-app');
let btn=document.getElementById('btn');
let n=0;
btn.addEventListener("click" , setapp);

function setapp(){
    if(txt.value===''){
        alert("Please Fill Out The Input");
    }
    else{
        let Li=document.createElement('li');
        Li.classList.toggle("li-app"+n);
        let textNode=document.createTextNode(txt.value);
        let remov=document.createElement('button');
        remov.innerHTML="X";
        Li.appendChild(textNode);
        Li.appendChild(remov);
        document.getElementById('ul').appendChild(Li);
        txt.value="";
        n++;
    }
}

let removeindex=document.querySelector('.li-app');
button.addEventListener("click" , function(){
    alert("DDDD");
});