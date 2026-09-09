// find
let students=[
  
    {id:1,name:"ram",marks:40},
     {id:2,name:"rama",marks:30},
      {id:3,name:"raam",marks:50}


];
let student =students.find(s=>s.id==2);
console.log(student);