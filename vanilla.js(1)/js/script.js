const Data=[
  {
    id:0,
    name:"Subhan",
    status:"Graduate",
    uni:"GCUF"
  },
  {
    id:1,
    name:"Umer",
    status:"Student",
    uni:"BZU"
  },
  {
    id:2,
    name:"Ahmed",
    status:"Graduate",
    uni:"NUML"
  },
  {
    id:3,
    name:"Rehan",
    status:"Student",
    uni:"GCUF"
  },
  {
    id:4,
    name:"Nasir",
    status:"Graduate",
    uni:"GCUF"
  },
  {
    id:5,
    name:"Hussain",
    status:"Student",
    uni:"NUML"
  },
  {
    id:6,
    name:"Umair",
    status:"Student",
    uni:"DPS"
  },
  {
    id:7,
    name:"Arham",
    status:"Student",
    uni:"DPS"
  },
  {
    id:8,
    name:"Awais",
    status:"Graduate",
    uni:"GCUF"
  },
];
function xyz(){
  let Search=document.getElementById("search").value;
  if(Search===""||Search===null){
    alert("enter some value");
  }
  else{
    Data.forEach((val,ind)=>{
      if(Search==Data[ind].uni||Search==Data[ind].name){
        var renderMyTable=()=>{
          table.innerHTML =`<tr>
                           <td><b>Id</b></td>`+
                           `<td><b>Name</b></td>`+
                           `<td><b>Status</b></td>`+
                           `<td><b>University</b></td>
                           </tr>`;
           Data.forEach((val,ind) => {
            if(Search==Data[ind].uni||Search==Data[ind].name){
              table.innerHTML += `<tr id='${ind}'>
              <td>${Data[ind].id}</td>`+
              `<td>${Data[ind].name}</td>`+
              `<td>${Data[ind].status}</td>`+
              `<td>${Data[ind].uni}</td>
              </tr>`;
            }         
           });        
        }
        renderMyTable();        
      }
    })
  }
}
function show(){
  light.innerHTML=`<label style="margin-right:30px;"><input type="checkbox" onchange="graduate();"/> Graduate</label>`+
                  `<label><input type="checkbox" onchange="student();"/> Students</label>`;
  Data.forEach((val,ind)=>{
      var renderMyTable=()=>{
        table.innerHTML =`<tr>
                         <td><b>Id</b></td>`+
                         `<td><b>Name</b></td>`+
                         `<td><b>Status</b></td>`+
                         `<td><b>University</b></td>
                         </tr>`;
         Data.forEach((val,ind) => {
          
            table.innerHTML += `<tr id='${ind}'>
            <td>${Data[ind].id}</td>`+
            `<td>${Data[ind].name}</td>`+
            `<td>${Data[ind].status}</td>`+
            `<td>${Data[ind].uni}</td>
            </tr>`;
                   
         });        
      }
      renderMyTable();
  })

}

function graduate(){
  Data.forEach((val,ind)=>{
    if(Data[ind].status=="Graduate"){
      document.getElementById(ind).style.backgroundColor="pink";
    }  
  }) 
}
function student(){
  Data.forEach((val,ind)=>{
    if(Data[ind].status=="Student"){
      document.getElementById(ind).style.backgroundColor="#A5D9D9";
    }  
  }) 
}

