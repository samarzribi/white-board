var cohort16=[

    {name:'Ghofrane',url:"student1.jpg",pins:{red:0 , blue:0 ,yellow:0}},
    {name:'wissem',url:"student3.jpg" ,pins:{red:0 , blue:0 ,yellow:0}},
    {name:'aymen', url :"student4.jpg" ,pins:{red:0 , blue:0 ,yellow:0}},
    {samar:'samar',url:"student2.png",pins:{red:0 , blue:0 ,yellow:0}}

]





$('#show').click(function(){
    for(var i=0; i<cohort16.length;i++){
        var student=cohort16[i].url 
    
       
    $('#div1').append('<img src='+student+'  class="item" style="height:100px , widh:30px">')
    
    }
    });
  

    var countred = 0;

    function redpin() {
        countred += 1;
        document.getElementById("click").innerHTML = countred;
        if(countred >=5 ){
            countred=0
        }
        
      
        
      };
    var countblue = 0;

    function bleupin() {
      countblue += 1;
      document.getElementById("clicks").innerHTML = countblue;
      if(countblue >=5 ){
          countblue=0
      }
      
    
      
    };

   
    var countyellow = 0;
    function yellowpin() {
      countyellow += 1;
      document.getElementById("clickse").innerHTML = countyellow;
      if(countyellow >=5 ){
       countyellow=0
      }

    
    
      
    };


//     // // $(".search").val()
//     // // console.log($("#search").val())
//     // // $("#btn").click(function(e){
//     // //     e.preventDefault()
//     // //     var search_rslt =cohort16.filter(function(elem ){
//     // //       return document.getElementBycla("search").value  === elem.name})
//     // //     console.log(search_rslt)
//     // //     $('.row').html("")
//     // //     for(var i=0; i<search_rslt.length;i++){
//     // //     $('.row').append(`
//     // //         <img src="`+search_rslt[i].url+`">
    
//     // //         `)
//     // // }
//     // //  $('.search').filter(function(e,i){ return e !== 0}).hide()
//     // }) 



function makeStudent(){
instanceofStudent={}
instanceofStudent.pins={
    blue:0,
    red:0,
    yellow:0
}
instanceofStudent.consequencesOfpins=consequencesOfpins;
instanceofStudent.addpins=addpins;
instanceofStudent.deletePins=deletePins; 
return instanceofStudent

}


var consequencesOfpins =function(name){
    if(this.pins["red"] === 5){
        delete this.student[name] 
    }
}


// var counter = 0;

// function onClick() {
//   counter += 1;
//   document.getElementById("click").innerHTML = counter;
//   if(counter >=5 ){
//       counter=0
//   }

  
// };
// var counter = 0;

// function onClick() {
//   counter += 1;
//   document.getElementById("click").innerHTML = counter;
//   if(counter >=5 ){
//       counter=0
//   }

  
// };




var addpins=function(type){
this.pins[type]++
return this

}

var deletePins=function(type,name){
  this.pins[type] = 0
    return this
}



// var addStudent= function(fullname , imageUrl , age ){
//     return {
//         fullname:fullname,
//         imageUrl:imageUrl,
//         age:age

//         }

// }


var container = document.getElementById('container');
var form =document.getElementById('form');
//creating inputs 

//student input
var nameofStudent=document.createElement('li');
nameofStudent.id='name';
nameofStudent.innerHTML='Student';
form.appendChild(nameofStudent);
var inputname=document.createElement('input');
inputname.id='input name';
form.appendChild(inputname);

//cover input
var cover=document.createElement('li');
cover.id='cover';
cover.innerHTML='Student Image';
form.appendChild(cover);
var inputCover=document.createElement('input');
inputCover.id='inputPrice';
form.appendChild(inputCover);

//add button
var addBtn = document.createElement('button');
addBtn.id='addBtn';
addBtn.innerHTML='Add';
form.appendChild(addBtn);



// create button 
// function addButton() {
//     var  btn =$('<input/>').attr({
//         type: "button",
//         id: "field"

//     });
//  }
//  $("body").append(addButton);

//creating students

var arrayOfstudents=[];
var ParentObj ={}

function createstudent(){
    var studentObj={};
    var student=addstudentDiv()
  
    //For name  :""
    var textstudent=document.createElement('h1');
    textstudent.id='textT';
    textstudent.innerHTML='';
    student.appendChild(textstudent);
//    
    studentObj.nameofStudent=nameofStudent();
    student.appendChild(studentObj.nameofStudent);
   
    studentObj.Cover=Cover()
    student.appendChild(studentObj.Cover);
      

    return arrayOfstudents.push(studentObj);

}

//Generating id's:

var count=0;
var counter=function(){
    return count+=1;
}

var idGenerator=function(str,counter){
    return str+counter();
} 


var student = function () {

    student= document.createElement('h1');
    student.id = idGenerator('student',counter);
    student.innerHTML = inputname.value;
    return student;
};



//create a cover for a student
var Cover = function () {
    cover = document.createElement('img');
    cover.id = idGenerator('cover',counter);
    cover.className='studentImg';
    cover.src = inputCover.value;
    return cover;
};

$('#addBtn').click(function(){
    $('#div1').append(Cover())
})
$('#addBtn').click(function(){
    $('#div1').append(student())
})
