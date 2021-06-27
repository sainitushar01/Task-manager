const taskContainer= document.querySelector(".task__container");
const globalStore=[];//for storing cards
const loadInitialCardData =()=>{
    const getCardData=localStorage.getItem("tasky");
    const {cards}=JSON.parse(getCardData);
    cards.map((cardObject)=>{taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    globalStore.push(cardObject);
}
)
};
const generateNewCard =(taskData)=>`
<div class="col-md-6 col-lg-4" id=${taskData.id}>
<div class="card">
    <div class="card-header d-flex justify-content-end gap-1">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
    </div>
    <img src=${taskData.imageUrl} class="card-img-top" alt=".....">
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
</div>
</div>
`
const saveChanges = () => {
    const taskData={
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };
taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));
globalStore.push(taskData);
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
//each time you push the object the previous data gets replaced .so that is why we are using arrays to store the data
}