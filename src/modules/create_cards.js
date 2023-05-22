const createCards = async (cards) => {
  
  console.log(cards)
  let container = document.querySelector(".items-container")

  container.innerHTML = ""

  setTimeout(() => {
    for (const item of cards) {      
      let card = `
    <div class="card card-item text-center">
    
    <div class="card-body">
      <h4 class="card-title"></h4>
      <img src=${item.picture}>            
    </div>          
    
    <div class="card-header text-center d-flex justify-content-around">
               
            <h5>${item.name.charAt(0).toUpperCase() + item.name.slice(1) }</h5>
            <div class="d-flex flex-column gap-2">
              <i class="fa-solid fa-heart"></i>
              <div class="d-flex gap-2">
                <h6>n</h6> <h6>likes</h6>
              </div>
            </div>

          </div>
          <div class="card-header item-buttons-container d-flex flex-column gap-3" >
            <button type="button" class="btn btn-primary comments-window">Comments</button>
            <button type="button" class="btn btn-primary">Reservations</button>
          </div>


    </div>
    `    
    container.innerHTML += card
    }    
  }, 1000);

  

}

export default createCards
