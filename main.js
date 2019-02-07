//Answer 1.
document.addEventListener('DOMContentLoaded', function () {

//Answer2.

    const liElements = document.querySelectorAll(".character");
        for(const liElement of liElements){
        if (liElement.innerText == "Homestar Runner" || liElement.innerText == "Shinji Ikari") {    liElement.parentElement.removeChild(liElement);
}
};

//Answer3.

    const body = document.querySelector("body");
    const anotherParagraph = document.createElement('p');
    anotherParagraph.innerHTML = ("<strong>Palwinder Sandhu</strong>");
    body.insertAdjacentElement('beforeBegin', anotherParagraph);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = ("<strong>Palwinder Sandhu</strong>");
    body.appendChild(paragraph);

 //Answer4.

    const newElement= document.createElement("li")
    newElement.innerHTML = ("<li class = 'character'> Mickey</li>");
    element = document.createElement("li")
    element.innerHTML = ("<li class = 'character'> Doremon</li>");
     for (const liElement of liElements){
      if(liElement.innerText == "Mario"){
        liElement.insertAdjacentElement('afterend',newElement);
     } else if(liElement.innerText == "Tryndamere") {
        liElement.insertAdjacentElement('afterend',element);
    }
};

//Answer5.

    const password = document.querySelector('#password');
    const confirm = document.querySelector('#password-confirmation');
    const match = document.querySelector('#matching-passwords');{
    function myFunction(e) {
        if ( confirm.value !== password.value ){
        match.textContent ="Passwords not match!";
    }else{
       match.textContent = "";
   }
}
    confirm.addEventListener("keyup",myFunction);
};

//Answer6.

/*I can't declare the variable again,const liElements = document.querySelectorAll(".character").Its declared above.*/
const newLiElements = document.querySelectorAll(".character"); {
    for(newLiElement of newLiElements){
        function changeColor(e){
       e.target.style.color = 'red';
   };
    newLiElement.addEventListener('click',changeColor);
}
    
};

    });

