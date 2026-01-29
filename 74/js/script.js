function taskkeep(){
    let taskform = document.getElementById("taskInput");
    localStorage.setItem('task', taskform.value);
    let data = localStorage.getItem("task");
    alert(data);
    let taskul = document.getElementById("list");
    let newdiv = document.createElement("div");
    let taskli = document.createElement("li");
    taskli.id = "li";
    taskli.innerHTML = data;
    newdiv.classList.add("lis");
    newdiv.id = "divli";
    taskul.appendChild(newdiv);
    newdiv.appendChild(taskli);
    let bton = document.createElement("button");
    bton.setAttribute("onclick","taskdelete()");
    bton.textContent = "削除";
    newdiv.appendChild(bton);
    taskform.value = "";
}

function taskdelete(){
    let del = document.getElementById("divli");
    del.remove();
}