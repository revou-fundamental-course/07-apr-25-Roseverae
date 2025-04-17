// Function to validate the form
function replaceName() {
    let name = prompt("What is your name?","");
    document.getElementById("name").innerHTML = name
}

replaceName();


// Function to Validate Message Form
// Menangani event submit form
document.getElementById('messageForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload

  // Ambil data dari form
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('messageText').value;
  const currentTime = new Date().toLocaleString();

  // Menampilkan hasilnya ke div output
  document.getElementById('output').innerHTML = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;
});

// Function Auto Slide
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img-slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}




