// let generatecv =document.getElementById("generatecv")  
let yourname = document.getElementById("yourname")

let hobbies = document.getElementById("hobbies")

// console.log(yourname.value)
// console.log("helloji")
// function addeducation(){

// }
let work = () => {
  console.log("hello")
  let Newnode = document.createElement('textarea');
  Newnode.classList.add("form-control");
  Newnode.classList.add("mt-2")
  Newnode.classList.add("workt");
  Newnode.setAttribute("rows", 1);
  Newnode.placeholder="about Project/experience"
  let newnodestartL = document.createElement('label')
  let newnodestartT = document.createElement('input')
  newnodestartL.classList.add("workstartlabelt")
  newnodestartL.classList.add("mt-2")
  newnodestartT.classList.add("form-control")
  newnodestartT.classList.add("workstart")
  newnodestartT.type = "date";
  newnodestartT.name = "startwt";
  Newnode.name = "workexperience";
  let newnodeendL = document.createElement('label')
  let newnodeendT = document.createElement('input')
  newnodeendL.classList.add("workendlabelt")
  newnodeendL.classList.add("mt-2")
  newnodeendT.classList.add("form-control")
  newnodeendT.classList.add("workend")
  newnodeendT.type = "date";
  newnodeendT.name = "endwt";
  let workt = document.getElementById("workid");
  let addbt = document.getElementById("addbt");

  let y = document.getElementById("y");
  // insert(Newnode);

  newnodestartL.innerHTML = "Starting Time"
  newnodeendL.innerHTML = "ending Time"

  //  work Position
  let newnodeposition=document.createElement("input")
  newnodeposition.classList.add("form-control")
  newnodeposition.classList.add("workpositiont")
  newnodeposition.classList.add("mt-2")
  newnodeposition.placeholder="Position"
  newnodeposition.type="text"
  //  work project
  let newnodeproject=document.createElement("input")
  newnodeproject.classList.add("form-control")
  newnodeproject.classList.add("workprojectt")
  newnodeproject.classList.add("mt-2")
  newnodeproject.placeholder="Project"
  newnodeproject.type="text"
  //  work company
  let newnodecompany=document.createElement("input")
  newnodecompany.classList.add("form-control")
  newnodecompany.classList.add("workcompanyt")
  newnodecompany.classList.add("mt-2")
  newnodecompany.placeholder="company"
  newnodecompany.type="text"



  let hr=document.createElement("hr");
  hr.classList.add("m-0")
  hr.classList.add("mt-1")
  hr.classList.add("opacity-100")
  hr.classList.add("mb-1")
  hr.classList.add("hrtW")
  y.append(hr)
  y.append(newnodeposition)
  y.append(newnodeproject)
  y.append(newnodecompany)
  y.append(Newnode)
  y.append(newnodestartL)
  y.append(newnodestartT)
  y.append(newnodeendL)
  y.append(newnodeendT)


}

// remove work detail
function removeworkInputsByClassName() {
  let elements=[]
   elements[0] = document.querySelectorAll('.hrtW');   
   elements[1] = document.querySelectorAll('.workpositiont');   
   elements[2] = document.querySelectorAll('.workprojectt');
   elements[3] = document.querySelectorAll('.workcompanyt');
   elements[4] = document.querySelectorAll('.workt');
   elements[5] = document.querySelectorAll('.workstartlabelt');
   elements[6] = document.querySelectorAll('.workstart');
   elements[7] = document.querySelectorAll('.workendlabelt');
   elements[8] = document.querySelectorAll('.workend');
// console.log(typeof(elements));
// console.log(elements);

    let numberOfProperties =[];
    for(let i=0;i<9;i++){
      numberOfProperties[i]=(Object.keys(elements[i]).length)-1;
    }
    for(let i=0;i<9;i++){
      elements[i][numberOfProperties[i]].remove();
    }
}

// education
let educationdetail = () => {

  // console.log("hello")
  // course
  let Newnode = document.createElement('input');
  Newnode.classList.add("form-control");
  Newnode.classList.add("mt-2")
  Newnode.classList.add("educationt");
  Newnode.type="text";
  Newnode.name = "education";
  Newnode.placeholder="course"
  // score
  let Newnodescore = document.createElement('input');
  Newnodescore.classList.add("form-control");
  Newnodescore.classList.add("mt-2")
  Newnodescore.classList.add("coursescore");
  Newnodescore.type="number";
  Newnodescore.step="0.01";
  Newnodescore.name = "coursescore";
  Newnodescore.placeholder="course score "
  // course university
  let newnodecourseuniversity=document.createElement('input');
  newnodecourseuniversity.classList.add('form-control')
  newnodecourseuniversity.classList.add('mt-2')
  newnodecourseuniversity.classList.add('educationcourse')
  newnodecourseuniversity.type="text";
  newnodecourseuniversity.name = "educationcourse";
  newnodecourseuniversity.placeholder="course university";
  // start time 
  
  let newnodestartT = document.createElement('input')
  // newnodestartL.classList.add("educationt")
  
  newnodestartT.classList.add("form-control")
  newnodestartT.classList.add("educationstarttime")
  newnodestartT.type = "number";
  newnodestartT.min="1900"
  newnodestartT.max="2099"
  newnodestartT.name = "startEt";
  newnodestartT.placeholder = "start time year";
  newnodestartT.classList.add("my-2");

 
  // end time
  
  let newnodeendT = document.createElement('input')
  // newnodeendL.classList.add("educationt")
  
  newnodeendT.classList.add("form-control")
  newnodeendT.classList.add("educationendtime")
  newnodeendT.type = "number";
  newnodestartT.min="1900"
  newnodestartT.max="2099"
  newnodeendT.name = "endEt";
  newnodeendT.placeholder = "end time year";
  newnodeendT.classList.add("my-2");
  // let workt = document.getElementById("workid");
  // let addbt = document.getElementById("addbt");

  let y = document.getElementById("diveducation");
  // insert(Newnode);

  let hr=document.createElement("hr");
  hr.classList.add("m-0")
  hr.classList.add("opacity-100")
  hr.classList.add("mb-1")
  hr.classList.add("hrtE")
  
  y.append(hr)
  y.append(Newnode)
  y.append(Newnodescore)
  y.append(newnodecourseuniversity)
  y.append(newnodestartT)
  y.append(newnodeendT)

}

// remove education detail
function removeeducationInputsByClassName() {
  let elements=[]
  elements[0] = document.querySelectorAll('.hrtE');   
  elements[1] = document.querySelectorAll('.educationt');   
   elements[2] = document.querySelectorAll('.coursescore');   
   elements[3] = document.querySelectorAll('.educationcourse');
   elements[4] = document.querySelectorAll('.educationstarttime');
   elements[5] = document.querySelectorAll('.educationendtime');
console.log(typeof(elements));
// console.log(elements);

    let numberOfProperties =[];
    for(let i=0;i<6;i++){
      numberOfProperties[i]=(Object.keys(elements[i]).length)-1;
    }
    for(let i=0;i<6;i++){
      elements[i][numberOfProperties[i]].remove();
    }
}


let addskill = () => {
  let newnode = document.createElement("input");
  newnode.classList.add("form-control");
  newnode.classList.add("mt-2");
  newnode.classList.add("skillt");
  newnode.type = "text";
  newnode.name = "skill";
  newnode.placeholder = "skill";

  let divskill = document.getElementById("divskill");

  divskill.append(newnode);

}
// remove skills
function removeskillInputsByClassName() {
  let elements = document.querySelectorAll('.skillt');
// console.log(typeof(elements))
// console.log(elements)

    let numberOfProperties = (Object.keys(elements).length)-1;
    elements[numberOfProperties].remove();
}

let addhobbies = () => {
  let newnode = document.createElement("input");
  newnode.classList.add("form-control");
  newnode.classList.add("mt-2");
  newnode.classList.add("hobbiest");
  newnode.type = "text";
  newnode.name = "hobbies";
  newnode.placeholder = "hobbies";

  let divhobbies = document.getElementById("divhobbies");

  divhobbies.append(newnode);
  // let removeButton = document.createElement('button');
  // removeButton.textContent = 'Remove';
  // removeButton.classList.add('btn-primary');
  // removeButton.onclick = function() {
  //     newnode.remove(); // Remove the input element when the button is clicked
  //     removeButton.remove(); // Remove the button itself as well
  // };
  // divhobbies.appendChild(removeButton);

}


// remove hobbies
function removeInputsByClassName() {
  let elements = document.querySelectorAll('.hobbiest');
// console.log(typeof(elements))
// console.log(elements)

    let numberOfProperties = (Object.keys(elements).length)-1;
    elements[numberOfProperties].remove();
}

// Example usage:
// removeInputsByClassName('input-class');


let generateresume = () => {
  // console.log("namaste");

  let data = [
    document.getElementById("yourname").value.trim(),
    document.getElementById("yourcontact").value.trim(),
    document.getElementById("address").value.trim(),
    document.getElementById("emailid").value.trim(),
    document.getElementById("linkedinlink").value.trim(),
    document.getElementById("githublink").value.trim(),
    document.getElementById("yourposition").value.trim(),
    document.getElementById("yourabout").value.trim(),
  ]
  // console.log(data)
  let inputElements = document.querySelectorAll('.skillt');

  // Initialize an empty array to store skills
  let skills = [];
  // Loop through each input element
  inputElements.forEach(function (inputElement) {
    // Get the value from each input element
    var skill = inputElement.value;
    // Push the skill into the array
    skills.push(skill);
  });
  skills = skills.filter((item, index) => skills.indexOf(item) === index);
  skills = skills.filter(item => item.trim() !== "");

  data.push(skills);

  // education detail
  let education = document.querySelectorAll(".educationt")
  // console.log(education)

  let educationarray = [];
  // Loop through each input element
  education.forEach(function (inputElement) {
    // Get the value from each input element
    var t = inputElement.value.trim();
    // Push the education detail into the array
    educationarray.push(t);
  });
  educationarray = educationarray.filter((item, index) => educationarray.indexOf(item) === index);
  data.push(educationarray);

  let score = document.querySelectorAll(".coursescore")
  // console.log(score)
  // console.log("score")

  let scorearray = [];
  // Loop through each input element
  score.forEach(function (inputElement) {
    // Get the value from each input element
    var t = inputElement.value.trim();
    // Push the education detail into the array
    scorearray.push(t);
  });
  // scorearray = educationarray.filter((item, index) => scorearray.indexOf(item) === index);
  data.push(scorearray);
  // console.log('tt ji')
  // console.log(scorearray)
  // education university course 
  let educationcourse = document.querySelectorAll(".educationcourse")
  // console.log(education)

  let educationcoursearray = [];
  // Loop through each input element
  educationcourse.forEach(function (inputElement) {
    // Get the value from each input element
    var r = inputElement.value.trim();
    // Push the education detail into the array
    educationcoursearray.push(r);
  });
  
  data.push(educationcoursearray);

  //  education start time
  let educationstarttime = document.querySelectorAll(".educationstarttime")
  let educationstarttimearray = [];
  // Loop through each input element
  educationstarttime.forEach(function (inputElement) {
    // Get the value from each input element
    var u = inputElement.value;
    // Push the education into the array
    educationstarttimearray.push(u);
  });
  educationstarttimearray = educationstarttimearray.filter((item, index) => educationstarttimearray.indexOf(item) === index);
  data.push(educationstarttimearray);
  //  education end time
  let educationendtime = document.querySelectorAll(".educationendtime")
  let educationendtimearray = [];
  // Loop through each input element
  educationendtime.forEach(function (inputElement) {
    // Get the value from each input element
    var v = inputElement.value;
    // Push the education into the array
    educationendtimearray.push(v);
  });
  educationendtimearray = educationendtimearray.filter((item, index) => educationendtimearray.indexOf(item) === index);
  data.push(educationendtimearray);

  // work experience 
  // work position
  let workposition = document.querySelectorAll('.workpositiont');

  // Initialize an empty array to store skills
  let position = [];
  // Loop through each input element
  workposition.forEach(function (inputElement) {
    // Get the value from each input element
    var workp = inputElement.value;
    // Push the skill into the array
    position.push(workp);
  });
  position = position.filter(item => item.trim() !== "");
//  console.log(position)
  data.push(position);
  
  // work project
  let workproject = document.querySelectorAll('.workprojectt');

  // Initialize an empty array to store skills
  let project = [];
  // Loop through each input element
  workproject.forEach(function (inputElement) {
    // Get the value from each input element
    var workp = inputElement.value;
    // Push the skill into the array
    project.push(workp);
  });
  project = project.filter(item => item.trim() !== "");
//  console.log(project)
  data.push(project);

  // work company
  let workcompany = document.querySelectorAll('.workcompanyt');

  // Initialize an empty array to store skills
  let company = [];
  // Loop through each input element
  workcompany.forEach(function (inputElement) {
    // Get the value from each input element
    var workp = inputElement.value;
    // Push the skill into the array
    company.push(workp);
  });
  company = company.filter(item => item.trim() !== "");
//  console.log(company)
  data.push(company);
  
  // workpoint
  let workpoint = document.querySelectorAll('.workt');

  // Initialize an empty array to store skills
  let point = [];
  // Loop through each input element
  workpoint.forEach(function (inputElement) {
    // Get the value from each input element
    var workp = inputElement.value;
    // Push the skill into the array
    point.push(workp);
  });

  // point = point.filter(item => item.trim() !== "");
//  console.log(point)
  data.push(point);
  // workstart
  let workstart = document.querySelectorAll('.workstart');

  // Initialize an empty array to store skills
  let start = [];
  // Loop through each input element
  workstart.forEach(function (inputElement) {
    // Get the value from each input element
    var workp = inputElement.value;
    // Push the skill into the array
    start.push(workp);
  });
  // start = start.filter((item, index) => start.indexOf(item) === index);
  start = start.filter(item => item.trim() !== "");
//  console.log(start)
  data.push(start);
  // workstart
  let workend = document.querySelectorAll('.workend');

  // Initialize an empty array to store skills
  let end = [];
  // Loop through each input element
  workend.forEach(function (inputElement) {
    // Get the value from each input element
    var workp = inputElement.value;
    // Push the skill into the array
    end.push(workp);
  });
  // end = end.filter((item, index) => end.indexOf(item) === index);
  end = end.filter(item => item.trim() !== "");
//  console.log(end)
  data.push(end);
  
  
  //hobbies
  let hobbiesinput=document.querySelectorAll(".hobbiest");  
//  console.log("tyd")
//  console.log(hobbiesinput)
 // Initialize an empty array to store skills
 let hobbies = [];
 // Loop through each input element
 hobbiesinput.forEach(function (inputElement) {
   // Get the value from each input element
   var hobbiesin = inputElement.value;
   // Push the skill into the array
   hobbies.push(hobbiesin);
 });
//  hobbies = hobbies.filter((item, index) => hobbies.indexOf(item) === index);
 hobbies = hobbies.filter(item => item.trim() !== "");
//  console.log("ttt")
// console.log(hobbies)
 data.push(hobbies);
// console.log("hello ji")
// console.log(data)
 //image
 let imageinput=document.getElementById("imageinput") 
//  data.push(imageinput.value)
//  console.log(imageinput.value)

  // console.log(data);
  let str = JSON.stringify(data)
  localStorage.setItem("userInfo", str)

}

// module.exports=generateresume;
// module.exports=generateresume;

// module.exports=generateresume;