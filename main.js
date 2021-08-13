var cohort16=[

    {name:'Ghofran'},
    {name: 'Aziz'},
    {name: 'fawez'},
    {name: 'amin'},
    {name: 'firas'},
    {name: 'raoua'},
    {name: 'rima'},
    {name: 'samar'},
    {name: 'sahar'},
    {name: 'taieb'},
    {name: 'slim'},
    {name: 'lilia'},
    {name: 'aymen'},

]



$('#show').click(function(){
    for(var i=0; i<cohort16.length;i++){
        var student=cohort16[i].name
    $('#div1').append('<div>'+student+'</div>')
    }
    });


    var student1=cohort16.name
$('student').click(function(){
    for(var i=0; i<cohort16.length;i++){
       
    $('#div1').append("<img src=''background.jpg'><'/img>")
    }
});





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


