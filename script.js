let url = 'https://kontests.net/api/v1/all'
let apiresult;
let response = fetch(url)
response.then((value) => {
  apiresult = value.json()
  return apiresult
}).then((apiresult) => {
  let innerHtml = ''
  for (result in apiresult) {

    innerHtml += ` <div class="card" style="width: 18rem;">
      <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${apiresult[result].name}</h5>
        <p class="card-text">Source: ${apiresult[result].site}</p>
        <a href="${apiresult[result].url}" class="btn btn-primary">Visit Link</a>
      </div>
    </div>`


  }
  let containerbody = document.getElementById("cardContainer")
  containerbody.innerHTML = innerHtml;



})




