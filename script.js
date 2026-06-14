const form = document.querySelector("form");
const input1 = document.querySelector("#name");
const input2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

let userData = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Liam Anderson",
    email: "liam@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    email: "sophia@example.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Noah Thompson",
    email: "noah@example.com",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia@example.com",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "James Taylor",
    email: "james@example.com",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300&h=300&fit=crop",
  },
];


let editIndex = null;

const ui = () => {
  users.innerHTML = "";
  userData.forEach((val, index) => {
    users.innerHTML += `<div class="users-card">
            <div class="img-box">
                <img src="${val.image}" alt="">
            </div>
            <div class="text">
                <h3>Name: ${val.name}</h3>
                <p>Email: ${val.email}</p>
            </div>

            <div class="action">
            <button onclick="editCard(${index})" id="edit">Edit</button>
            <button onclick="deleteCard(${index})" id="delete">Delete</button>
        </div>
        </div>
        
        
        `;
  });
};

ui();

form.addEventListener("submit", (events) => {
  events.preventDefault();

  let name = input1.value;
  let email = input2.value;
  let image = url.value;

  if (name.trim() === "" && email.trim() === "" && image.trim() === "") {
    return;
  }

 if (editIndex !== null) {
    userData[editIndex] = {
        ...userData[editIndex],
        name,
        email,
        image,
    };

    editIndex = null;
} else {
    userData.push({
        id: Date.now(),
        name,
        email,
        image,
    });
}

  ui();

  form.reset();
});


let deleteCard = (index) => {
    userData.splice(index, 1);
    ui();
}

let editCard = (index) => {
    input1.value = userData[index].name;
    input2.value = userData[index].email;
    url.value = userData[index].image;

    editIndex = index;
};