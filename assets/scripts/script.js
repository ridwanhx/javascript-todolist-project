// # logic menambahkan element
// inisiasi arr untuk menyimpan setiap nilai dari input yang dikirimkan
const todoList = [
    'Belajar Javascript Dasar',
    'Belajar Javascript DOM'
];

// inisiasi method untuk mereset data todolist
const clearTodolist = () => {
  // ambil element todolist body
  const todoListBody = document.getElementById("todolistBody");
  // hanya lakukan perulangan ketika first child di todolist body nya bukan first child yang sama dengan sebelumnya
  while (todoListBody.firstChild) {
    todoListBody.removeChild(todoListBody.firstChild);
  }
};

// inisiasi method untuk menampilkan data todolist ke layar
const displayTodolist = () => {
  // reset data todolist
  clearTodolist();

  // inisiasi todoListBody
  const todoListBody = document.getElementById("todolistBody");
  console.info(todoListBody);

  // jalankan perulangan untuk setiap data yang ada didalam array todoList
  for (const item of todoList) {
    // inisiasi variabel untuk menyimpan nilai todoList saat ini kedalam variabel
    const todo = item;

    // inisiasi var untuk menyimpan data create element 'div'
    const divAlert = document.createElement("div");
    divAlert.classList.add("alert", "mb-2");
    todoListBody.appendChild(divAlert);

    //   inisiasi untuk element div yang akan membungkus checkbox dan deskripsinya
    const div = document.createElement("div");
    divAlert.appendChild(div);

    // inisiasi var untuk menyimpan data create element input checkbox
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.name = "checked";
    inputCheckbox.classList.add("checked");
    // inputCheckbox.checked = 1;
    div.appendChild(inputCheckbox);

    // inisiasi var untuk menyimpan data deskripsi todo hasil input
    const spanTodo = document.createElement("span");
    spanTodo.textContent = todo;
    // spanTodo.classList.add("slice");
    div.appendChild(spanTodo);

    todoListBody.appendChild(divAlert);

    // inisiasi var untuk menyimpan data create element close button
    const clsBtn = document.createElement("button");
    clsBtn.type = "button";
    clsBtn.title = "close";
    clsBtn.classList.add('close');
    clsBtn.textContent = "x";
    divAlert.appendChild(clsBtn);
  }
};

// beri event ketika form di submit
document.forms["todoForm"].addEventListener("submit", (event) => {
  // ignore submit
  event.preventDefault();

  // ambil data todo
  const todo = document.forms["todoForm"]["todo"].value;
  // simpan data todo kedalam array todoList
  todoList.push(todo);
  // console.info(todoList);
  // bersihkan input value sebelumnya
  document.forms["todoForm"].reset();

  // tampilkan todolist
  displayTodolist();
});

displayTodolist();