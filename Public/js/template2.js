// Attach an event listener to the DOMContentLoaded event


function generateresume() {
  console.log("namaste");

  let skillinput = document.getElementById('skill');
  let datat = [
    document.getElementById("namet1"),
    document.getElementById("phonenumbert1"),
    document.getElementById("addresst1"),
    document.getElementById("emailt1"),
    document.getElementById("linkedint1"),
    document.getElementById("githubt1"),
    document.getElementById("positiont1"),
    document.getElementById("aboutt1"),
  ]
  // console.log(datat)

  // take data from local storage 
  let taskarray = [];

  // console.log("hello")
  let user = localStorage.getItem("userInfo")
  console.log(user)
  if (user != null) {
    taskarray = JSON.parse(user)

  }

  //data set in resume 
  console.log(taskarray);
  for (let i = 0; i < 8; i++) {
    if (1 < i && i < 6) {

      datat[i].href = taskarray[i];
      // console.log(taskarray[i])
      datat[i].innerHTML = taskarray[i];
    } else {
      datat[i].innerHTML = taskarray[i];
    }
  }
  // skill
  let str = " ";
  let skillloop = (taskarray[8].length);
  for (let j = 0, k = 0; j < parseInt(skillloop / 3); j++, k = k + 3) {

    str = str + `   <ul>
      <li class="nav-link  text-bg-secondary  mt-1 p-1 rounded-2 fw-bold ">${taskarray[8][k]}</li>
      <li class="nav-link  text-bg-secondary  mt-1 p-1 rounded-2 fw-bold  ">${taskarray[8][k + 1]}</li>
      <li class="nav-link  text-bg-secondary  mt-1 p-1 rounded-2 fw-bold  ">${taskarray[8][k + 2]}</li>
      </ul>`
    // console.log(taskarray[i][j])
  }
  let str2 = "";
  for (let i = 0; i < (taskarray[8].length) % 3; i++) {
    str2 = str2 + ` <li class="nav-link  text-bg-secondary  mt-1 p-1 rounded-2 fw-bold  ">${taskarray[8][skillloop - i - 1]}</li>`;
  }
  str2 = `<ul>${str2}
    </ul>`;
  str = str + str2;
  skillinput.innerHTML = str;


  // education
  let education = document.getElementById("education");
  str = " ";

  for (let i = 0; i < taskarray[9].length; i++) {
    str = str + `     <div class="d-flex  justify-content-between  " >
      <div >
            <h5>${taskarray[9][i]}</h5>
            <p class=" ">${taskarray[11][i]} —<span class="fw-bold ">CGPA -${taskarray[10][i]}</span></p>
      </div>
      <div>
            <h5>${taskarray[12][i]}-${taskarray[13][i]}</h5>
        
      </div>
</div>

`
  }
  education.innerHTML = str;

  // work experience
  let workexperience = document.getElementById("workexperience");

  str = "";
  let countdescription = 0;
  
  for (let i = 0; i < taskarray[15].length; i++) {
    console.log("ttttt ji")
    console.log(taskarray[19][i])
    console.log(taskarray[18][i])
    if(taskarray[14][i]===undefined||taskarray[16][i]===undefined ){
      str = `${str} <div class="d-flex  justify-content-between  ">
      <div>
          <h4 class=" "> ${taskarray[15][i]}<i
         class="fa-solid fa-link"></i></h4>
         </div>
       <div>
          <h6 class=" "> ${taskarray[18][i]}-  ${taskarray[19][i]}</h6>

      </div>

    </div >
<div>  
<ul>
<li>${taskarray[17][i + countdescription]}</li>

</ul>
</div>
`
    }else{
      str = str + ` <div class="d-flex  justify-content-between  ">
      <div>
          <h4 class=" "> ${taskarray[15][i]}<i
         class="fa-solid fa-link"></i></h4>
           <h5>${taskarray[14][i]} |  ${taskarray[16][i]}</h5>
         </div>
       <div>
          <h6 class=" "> ${taskarray[18][i]}-  ${taskarray[19][i]}</h6>

      </div>

    </div >
<div>  
<ul>
<li>${taskarray[17][i + countdescription]}</li>

</ul>
</div>
`
    }
   
    countdescription = countdescription +0;
  }
  workexperience.innerHTML = str;
  // hobbies 
  let hobbies = document.getElementById("hobbies")
  str = ""
  for (let i = 0; i < taskarray[20].length; i++) {
    str = str + `<li class="nav-link  text-bg-secondary  mt-1 p-1 rounded-2 fw-bold ">
    <h4 class=" "> ${taskarray[20][i]}</h4>
  </li> `
  }
  str = `<ul class="d-flex gap-md-4   ">
    ${str}
    </ul>`;
  console.log("namaste ji")
  console.log(str)
  hobbies.innerHTML = str;
  // console.log(taskarray[18])
  // image 
  // let imageinput=document.getElementById("imageinput");
  // let url = taskarray[20];
  // let pathToRemove = "file:///C:/fakepath";
  // let newPath = url.replace(new RegExp(pathToRemove), "");
  // console.log(newPath);
  // imageinput.src=url;

}

function hideButton() {
  var button = document.getElementById('myButton');
  button.classList.add('hidden-print');
  
  // Listen for the 'afterprint' event to remove the hidden-print class after printing
  window.addEventListener('afterprint', function() {
      button.classList.remove('hidden-print');
  });

  // Trigger printing
  window.print();
}

document.addEventListener("DOMContentLoaded", function (event) {
  // Call your function here
  generateresume();


});
