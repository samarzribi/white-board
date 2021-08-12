function makeStudent(name , age  ){
instanceofStudent={}
instanceofStudent.name=name;
instanceofStudent.age=age;
instanceofStudent.pins={
    blue:0,
    red:0,
    yellow:0
}
instanceofStudent.consequencesOfpins=consequencesOfpins;
instanceofStudent.addStudent=addStudent;
instanceofStudent.addpins=addpins;
instanceofStudent.deletePins=deletePins;
// instanceofStudent.deleteStudent=deleteStudent;
 
return instanceofStudent

}
var consequencesOfpins =function(){
    if(this.pins["red"] === 5){
        
    }
}

var addpins=function(type){
this.pins[type]++
return this

}

var deletePins=function(type){
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


var student1=addStudent('ghofran hammoudi' , '', 22)
var student2=addStudent('mohamed aziz ben hsin ' ,'',  20)
var student3=addStudent('med elyes ben khoud' , '',27)

students=[student1,student2,student3]





