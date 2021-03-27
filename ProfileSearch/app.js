  //Add event listener to button
  document.getElementById("next").addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
    .then(parseJSON)
    .then(updateUser)

    function parseJSON(res) {
      return res.json();
    }

    function updateUser(user){
      document.getElementById("img").innerHTML = `
      <img src=${user.results[0].picture.large} />
      `

      document.getElementById("name").innerText = `
      Name: ${user.results[0].name.first} ${user.results[0].name.last}
      `
      document.getElementById("age").innerText = `
      Age: ${user.results[0].dob.age} 
      `
      document.getElementById("location").innerText = `
      City: ${user.results[0].location.city} 
      `
      document.getElementById("gender").innerText = `
      Gender: ${user.results[0].gender} 
      `
      document.getElementById("email").innerText = `
      Email: ${user.results[0].email} 
      `

    }


  });

 



  
