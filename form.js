var form = document.querySelector("#application-form");
var errorList = document.querySelector("#errors");
console.log(form);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    errorList.innerHTML = "";
    
    var fgoal = document.querySelector('#fgoal').value;
    var fname = document.querySelector('#fname').value;
    var about = document.querySelector('#about').value;
    const regExp = /[a-zA-Z]/g;
    
    console.log(fname);

    if(fname === "" || fgoal === "" || about === "") {
        addError("Missing information");
    }

    if(regExp.test(fgoal) || regExp.test(fgoal) || regExp.test(fgoal)){
      addError("Invalid input type for fundraiser goal");
      console.log('hello');
    }
  }
  );

  function addError(message) {
    let li = document.createElement("Li");
    li.innerText = message;
    errorList.appendChild(li);
  }