document.addEventListener("DOMContentLoaded", () =>{
const priority = document.getElementById("priority").value;   
const form = document.querySelector("form");
const description = document.getElementById("new-task-description").value;


   if(!description){
      console.log("Cannot submit since you must write something!")
   }
  
}
    form.addEventListener("submit",(e) =>{
      e.preventDefault();


      buildToDo(description,priority);
      form.reset();
    });
document.getElementById("sort-btn").addEventListener("click",sortTasks);
    function buildToDo(beDone,priority){
      const li = document.createElement("li");
      const button = document.createElement("btn");

      button.textContent = "edit";
      button.addEventListener("click", handleEdit(li,beDone,priority));

      li.textContent = beDone + "";
      li.appendChild(button);
      li.appendChild(deleteBtn)

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x"
      deleteBtn.addEventListener("click", handleDelete);

      document.querySelector("#list").appendChild(li);
   }
// To remove the <li>
   function handleDelete(e){
      e.target.parentNode.remove();
   }
   
      
   }) 