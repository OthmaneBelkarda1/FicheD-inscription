let command=[];
function CommandPage(){

  function saveToStorage() {
    localStorage.setItem('command', JSON.stringify(command));
  }
 function UserPage(){
 function LoadCommand(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
    
   command=JSON.parse(xhr.response);
   saveToStorage();
   html=Loadcommands();
   document.querySelector('body').innerHTML=html;
   
   return command;
     })
    
    xhr.open('GET','https://capucinebackend-helc.onrender.com/article');
    xhr.send();
    }
  LoadCommand();
  }
  UserPage();
  let html='';
  let i=1;
function Loadcommands(){
  command.forEach((item)=>{
      html=html+`<div class="student-info">
        <h2>Étudiant ${i}</h2>
        <p><strong>Nom du parent:</strong>${item.ParentLastName}</p>
        <p><strong>Prénom du parent:</strong> ${item.ParentFirstName}</p>
        <p><strong>Nom d'étudiant:</strong> ${item.StudentLastName}</p>
        <p><strong>Prénom d'étudiant:</strong> ${item.StudentFirstName}</p>
        <p><strong>Niveau:</strong> ${item.Niveau}</p>
        <p><strong>Âge:</strong> ${item.Age}</p>
        <p><strong>Numéro:</strong> ${item.Numero}</p>
        <p><strong>Email:</strong>${item.Email}</p>
    </div>

`
i++;
  }  )
  
  return html;}
}



document.querySelector('.refresh').addEventListener('click',()=>{
  setTimeout(function() {
    // Code to be executed after 2 seconds
    CommandPage();
  }, 3000);
  

})