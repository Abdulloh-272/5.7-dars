let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

let a = data.map((value) => {
  const div = document.createElement("div");
  const body = document.querySelector(".body");
  body.appendChild(div);
  const h2 = document.createElement("h2");
  h2.textContent = value;
  div.appendChild(h2);
  div.classList.add("text-center", "mt-5");
  h2.classList.add("text-lg", "text-white", "font-medium");
  if (value >= 50) {
    div.classList.add("bg-green-500");
  } else {
    div.classList.add("bg-red-500");
  }
});

// let users = [
//   { firstName: "Abdulloh", lastName: "Fazliddinov", status: true },
//   { firstName: "Asliddin", lastName: "Fazliddinov", status: false },
//   { firstName: "Bahodir", lastName: "Fazliddinov", status: false },
//   { firstName: "Akmal", lastName: "Fazliddinov", status: false },
//   { firstName: "Javohir", lastName: "Fazliddinov", status: true },
// ];

// let b = users.filter((item) => {
//   return item.status === true;
// });

// console.log(b);

// const ul = document.querySelector(".list");

// console.log(users);

// let a = b.map((value) => {
//   const li = document.createElement("li");

//   const h2 = document.createElement("h2");
//   const wrapper2 = document.createElement("div");
//   const btn = document.createElement("button");
//   const btn2 = document.createElement("button");
//   btn.textContent = "DELETE";
//   h2.textContent = value.firstName + " " + value.lastName;
//   btn2.textContent = "Free";
//   wrapper2.classList.add("flex");

//   li.append(h2, wrapper2);
//   wrapper2.append(btn2, btn);
//   ul.appendChild(li);
// });
