const text="Mr Jii Gamer";
const names=document.querySelector(".name");
let index=0;
function type(){
    if(index<text.length){
        names.textContent +=text[index];
        index++;
        setTimeout(type,100);
    }
}
type();
