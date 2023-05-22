const createApp = () => {
  let url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"  
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }


  fetch(url,config)
    .then(Response => Response.text())
    .then(data => {
      console.log(data) 
    })
    .catch (error => {
      console.log("an error occured: ",error)
    })
    


}

export default createApp