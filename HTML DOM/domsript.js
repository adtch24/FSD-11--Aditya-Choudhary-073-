function addparagraph(){
    const para=document.createElement("p");
    para.innerText="This is new ";
    para.style.color="Blue";
    const parent=document.getElementById("root");
    parent.appendChild(para);
}
const removeparagraph=()=>{
    const para=document.querySelector("p");
    const parent=document.getElementById("root");
    parent.removeChild(para);
}