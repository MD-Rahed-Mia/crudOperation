
let form = document.querySelector("form"),
  name = document.querySelector("#fName"),
  phone = document.querySelector("#phone"),
  email = document.querySelector("#email"),
  tBody = document.querySelector('#tBody'),
  trData = '';

function localData() {
  let lData = localStorage.getItem('objData') ? JSON.parse(localStorage.getItem('objData')) : [];


  tBody.innerHTML = '';
  lData.forEach((element, index) => {

    trData = `
        <tr>
          <td>${index+1}</td>
          <td>${element.name}</td>
          <td>${element.phone}</td>
          <td>${element.email}</td>
          <td class="delBtn">Delete</td>
          <td onclick="deleteData()">Edit</td>
        </tr>
    `;
    tBody.innerHTML += trData;
  })
}

let count = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj2 = {
    id: 1,
    name: name.value,
    phone: phone.value,
    email: email.value,
  }


  let lData = localStorage.getItem('objData') ? JSON.parse(localStorage.getItem('objData')) : [];
  lData.push(obj2);
  localStorage.setItem('objData', JSON.stringify(lData))
  localData();

  name.value = '';
  phone.value = '';
  email.value = '';
})

localData();


let delBtn = document.querySelectorAll(".delBtn");
console.log(delBtn);

delBtn.forEach((ele, ind) => {
  let lData = localStorage.getItem('objData') ? JSON.parse(localStorage.getItem('objData')) : [];


  ele.addEventListener('click', () => {

    ele.parentElement.remove();
    lData.splice(ind, 1);

    localStorage.setItem('objData', JSON.stringify(lData))
  })
})
