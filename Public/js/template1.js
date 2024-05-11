// // Attach an event listener to the DOMContentLoaded event


// function generateresume() {
//   console.log("namaste");

//   let skillinput = document.getElementById('skill');
//   let datat = [
//     document.getElementById("namet1"),
//     document.getElementById("phonenumbert1"),
//     document.getElementById("addresst1"),
//     document.getElementById("emailt1"),
//     document.getElementById("linkedint1"),
//     document.getElementById("githubt1"),
//     document.getElementById("positiont1"),
//     document.getElementById("aboutt1"),
//   ]
//   console.log(datat)
  
//   // take data from local storage 
//   let taskarray = [];
 
//   console.log("hello")
//   let user = localStorage.getItem("userInfo")
//   console.log(user)
//   if (user != null) {
//     taskarray = JSON.parse(user)

//   }

//   //data set in resume 
//  console.log(taskarray);
//   for (let i = 0; i < 8; i++) {
//     if (1 < i && i < 6) {
//       datat[i].href = taskarray[i];
//       datat[i].innerHTML = taskarray[i];
//     } else {
//       datat[i].innerHTML = taskarray[i];
//     }
// }
// // skill
// let str = " ";
// for (let j = 0; j < taskarray[8].length; j++) {
  
//   str = str + `  <div class="skill">
//   <div >
//         <span class="text-bg-light rounded-2  px-2 ">${taskarray[8][j]}</span>
//   </div>
 
// </div>
//  `
//   // console.log(taskarray[i][j])
// }
// skillinput.innerHTML=`   <div class=" w-100 d-flex flex-wrap gap-2  ">
// ${str}
// </div>`;


// // education
// let education=document.getElementById("education");
// str=" ";

// for(let i=0;i<taskarray[9].length;i++){
//   str=str+`  <p class="">
//   ${taskarray[9][i]}
// </p>
// <p>
//   ${taskarray[10][i]}
// </p>
// <p>
//   ${taskarray[11][i]}-${taskarray[12][i]}
// </p>`
// }
// education.innerHTML=str;

// // work experience
//  let workexperience=document.getElementById("workexperience");
  
//  str="";
//  let countdescription=0;
//  for(let i=0;i<taskarray[13].length;i++){
//    str=str+ `  <li>
//    <div class="jobPosition">
//          <span class="bolded">
//                ${taskarray[13][i]}
//          </span>
//          <span>
//          ${taskarray[17][i]}-  ${taskarray[18][i]}
//          </span>
//    </div>
//    <div class="projectName bolded">
//          <span>
//          ${taskarray[14][i]}|  ${taskarray[15][i]}
//          </span>
//    </div>
//    <div>
//          <ul>
//                <li> ${taskarray[16][i+countdescription]}</li>
//          </ul>
//    </div>
// </li>`
// countdescription=countdescription+2;
//  }
// workexperience.innerHTML=str;
// // hobbies 
// let hobbies=document.getElementById("hobbies")
//  str=""
//  for(let i=0;i<taskarray[19].length;i++){
//   str=str+`<h6 class="text-bg-light  mt-1 p-1 rounded-2 ">${taskarray[19][i]} </h6>`
//  }
// str=`<div class="d-flex flex-wrap  gap-1">
// ${str}
// </div>`;
// console.log("namaste ji")
// console.log(str)
// hobbies.innerHTML=str;
// // console.log(taskarray[18])
// // image 
// // let imageinput=document.getElementById("imageinput");
// // let url = taskarray[20];
// // let pathToRemove = "file:///C:/fakepath";
// // let newPath = url.replace(new RegExp(pathToRemove), "");
// // console.log(newPath);
// // imageinput.src=url;

// }

// // function print(){
// //   window.print();
// // }

// document.addEventListener("DOMContentLoaded", function(event) {
//   // Call your function here
//   generateresume();
  
  
// });


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
  console.log(datat)
  
  // take data from local storage 
  let taskarray = [];
 
  console.log("hello")
  let user = localStorage.getItem("userInfo")
  console.log(user)
  if (user != null) {
    taskarray = JSON.parse(user)
    
  }
  console.log(taskarray)

  //data set in resume 
//  console.log(taskarray);
  for (let i = 0; i < 8; i++) {
    if (1 < i && i < 6) {
      datat[i].href = taskarray[i];
      datat[i].innerHTML = taskarray[i];
    } else {
      datat[i].innerHTML = taskarray[i];
    }
}
// skill
let str = " ";
for (let j = 0; j < taskarray[8].length; j++) {
  
  str = str + `  <div class="skill">
  <div >
        <span class="text-bg-light rounded-2  px-2 m-1   ">${taskarray[8][j]}</span>
  </div>
 
</div>
 `
  // console.log(taskarray[i][j])
}
skillinput.innerHTML=`   <div class=" w-100 d-flex flex-wrap gap-1 ">
${str}
</div>`;


// education
let education=document.getElementById("education");
str=" ";

for(let i=0;i<taskarray[9].length;i++){
  console.log(taskarray[9])
  str=str+` <div class="d-flex justify-content-between ">
  <h2 class="m-0">
  ${taskarray[9][i]}
  
</h2>
<p>${taskarray[10][i]}</p>
</div> 
<h4 class="m-0">
  ${taskarray[11][i]}
</h4>
<p>
  ${taskarray[12][i]}-${taskarray[13][i]}
</p>`
}
education.innerHTML=str;

// work experience
 let workexperience=document.getElementById("workexperience");
  
 str="";
 let countdescription=0;
 for(let i=0;i<taskarray[14].length;i++){
  console.log("ttttt ji")
  console.log(taskarray[19][i])
  console.log(taskarray[18][i])
   str=str+ `  <li>
   <div class="jobPosition">
         <span class="bolded h2">
               ${taskarray[14][i]}
         </span>
         <span>
         ${taskarray[18][i]}-  ${taskarray[19][i]}
         </span>
   </div>
   <div class="projectName bolded">
         <span class="h4">
         ${taskarray[15][i]}|  ${taskarray[16][i]}
         </span>
   </div>
   <div>
         <ul>
               <li> ${taskarray[17][i]}</li>
         </ul>
   </div>
</li>`
countdescription=countdescription+2;
 }
workexperience.innerHTML=str;
// hobbies 
let hobbies=document.getElementById("hobbies")
 str=""
 for(let i=0;i<taskarray[20].length;i++){
  str=str+`<h6 class="text-bg-light  mt-1 p-1 rounded-2 ">
  ${taskarray[20][i]} </h6>`
 }
str=`<div class="d-flex flex-wrap  gap-1">
${str}
</div>`;
console.log("namaste ji")
console.log(str)
hobbies.innerHTML=str;
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


document.addEventListener("DOMContentLoaded", function(event) {
  // Call your function here
  generateresume();
  
  
});
