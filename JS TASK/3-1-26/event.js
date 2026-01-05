let btn = document.getElementById("btn-add");
let form = document.getElementById("form");
let p = document.createElement("p")
btn.addEventListener("click", () => {
  form.style.display =
    form.style.display === "none" ? "block" : "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("eventname").value.trim();
  const date = document.getElementById("eventDate").value;
  const time = document.getElementById("eventTime").value;
  const venue = document.getElementById("eventVenue").value.trim();
  const disc = document.getElementById("descrip").value.trim();

  if (!validation(name, date, time, venue)) {
    return;
  }

  const userData = JSON.parse(localStorage.getItem("user")) || []
  const newData = {
    name,
    date,
    time,
    venue,
    disc,
  };
userData.push(newData)
  localStorage.setItem("user", JSON.stringify(userData));
  form.reset();
  alert("Event saved successfully!");
});

function validation(name, date, time, venue) {
  if (name === "") {
    let names = document.getElementById("name")
    names.innerText = "requird"
    return false;
  }

  if (name.length < 2 || name.length > 100) {
    alert("Event name must be between 2 and 100 characters");
    return false;
  }

  if (date === "") {
      let ins = document.getElementById("small")
    ins.innerText = "requird"
    return false;
  }

  if (time === "") {
      let ins = document.getElementById("small")
    ins.innerText = "requird"
    return false;
  }

  if (venue === "") {
    let ins = document.getElementById("small")
    ins.style.display = "color:red"
    
    return false;
  }

  return true; 
}
form.append(p)