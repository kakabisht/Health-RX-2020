axios.defaults.baseURL = "http://127.0.0.1:8080";

let d = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
let day = days[d.getDay()];
let full_date = `${day} ${month} ${d.getDate()}`;
document.getElementById("date").innerHTML = full_date;

document.querySelector('form.input-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const { breakfast, lunch, dinner, snacks, drinks } = event.target.elements;
  axios.post("/entries", { breakfast, lunch, dinner, snacks, drinks }).then((response) => {
    console.log(response.data)
    event.target.reset();
  });
});

