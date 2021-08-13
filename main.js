var cohort16=[

    {name:'Ghofran', url:"student1.jpg"},
    {name: 'raoua',url:"student3.jpg"},
    {name: 'Heni' , url :"student4.jpg"}

]




$('#show').click(function(){
    for(var i=0; i<cohort16.length;i++){
        var student=cohort16[i].url
    $('#div1').append('<img stye :" height" :"300px" , "widh":"100px" src='+student+'>')
    }
    });


    var counter = 0;

    function onClick() {
      counter += 1;
      document.getElementById("click").innerHTML = counter;
      if(counter >=5 ){
          counter=0
      }
    
      
    };




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

var counte=0
$('#red').click(function(type){
    $(btns1).append()
    


});

var counter = 0;

function onClick() {
  counter += 1;
  document.getElementById("click").innerHTML = counter;
  if(counter >=5 ){
      counter=0
  }

  
};
var counter = 0;

function onClick() {
  counter += 1;
  document.getElementById("click").innerHTML = counter;
  if(counter >=5 ){
      counter=0
  }

  
};




var addpins=function(type){
this.pins[type]++
return this

}

var deletePins=function(type,name){
  this.pins[type] = 0
    return this
}



var addStudent= function(fullname , imageUrl , age ){
    return {
        fullname:fullname,
        imageUrl:imageUrl,
        age:age

        }

}


// var student1=addStudent('ghofran hammoudi' , '', 22)
// var student2=addStudent('mohamed aziz ben hsin ' ,'',  20)
// var student3=addStudent('med elyes ben khoud' , '',27)


