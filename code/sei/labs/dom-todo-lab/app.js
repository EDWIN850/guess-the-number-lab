const inpTodo = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')



submitBtn.addEventListener('click', function(evt) {
  
  if(inpTodo.value === "") return 
  
  const newLi = document.createElement('li')
  newLi.textContent = inpTodo.value
  
  todoList.appendChild(newLi)
  inpTodo.value = ''
})

todoList.addEventListener('click', function(ev) {
  
  const parentNode = ev.target.parentNode
  parentNode.removechild(ev.target)
})
