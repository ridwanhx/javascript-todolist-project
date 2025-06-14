// # logic menambahkan element
// inisiasi arr untuk menyimpan setiap nilai dari input yang dikirimkan
const todoList = ["Belajar Javascript Dasar", "Belajar Javascript DOM"];

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

  const addTodoList = (index, todo) => {
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
    clsBtn.classList.add("close");
    clsBtn.textContent = "x";
    //   tambahkan event ketika tombol close ditekan
    clsBtn.onclick = () => removeTodoList(index);
    divAlert.appendChild(clsBtn);
  };

  // method untuk melakukan remove data todolist berdasarkan index todolist tersebut
  const removeTodoList = (index) => {
    todoList.splice(index, 1);
    //   jalankan display todolist ulang / refresh halaman
    displayTodolist();
  };

  // jalankan perulangan untuk setiap data yang ada didalam array todoList
  for (const item of todoList) {
    // inisiasi variabel untuk menyimpan nilai todoList saat ini kedalam variabel
    const todo = item;
    // inisiasi index
    const index = todoList.findIndex((item) => item.includes(todo));

    //   inisiasi text yang akan dicari
    const searchText = document.getElementById("search").value.toLowerCase();

    //   jika data todo, salah satu nilai nya (per huruf / karakter) sama dengan searchText
    if (todo.toLowerCase().includes(searchText)) {
      //  panggil method addTodoList
      addTodoList(index, todo);
    }
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

// dapatkan element input search
const search = document.getElementById("search");
// tambahkan event terhadap element
// event ketika keyboard dilepas
search.addEventListener("keyup", (event) => {
  displayTodolist();
});
// event ketika keyboard ditekan
search.addEventListener("keydown", (event) => {
  displayTodolist();
});

displayTodolist();
