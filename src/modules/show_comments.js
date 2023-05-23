const showComments = (index, arrayOfPokemons) => {
  const modal = document.querySelector('.modal-pokemon');  
  modal.className = 'modal-pokemon active d-flex align-items-center justify-content-center';
  index = index-1

  // console.log(index, arrayOfPokemons)
  
  modal.innerHTML = `
  
    
  <div class="card col-10 col-md-8">
    
    <div class="card-body  d-sm-flex ">

      <div class="button-close-modal" >
        <i class="fa-solid fa-xmark" ></i>
      </div>

      <div class="col-sm-6" >
        <img src=${arrayOfPokemons[index].picture} alt="">
        <h4 class="text-center" > ${arrayOfPokemons[index].name} </h4>
        <h6>Hablity #1:  ${arrayOfPokemons[index].mov1} </h6>
        <h6>hability #2:  ${arrayOfPokemons[index].mov2}</h6>
        <h5>Comments(2)</h5>
        <h6>fecha  comment</h6>
        <h6>fecha  comment</h6>        
      </div>
      
      <div class="col-sm-6 d-flex align-items-center" >
        <form action="" class="d-flex flex-column justify-content-aroun" >
          <div class="mb-3">            
            <h6>Add a comment</h6>
            <input type="text"
              class="form-control" name="name" id="" aria-describedby="helpId" placeholder="your name">            
          </div>
          <div class="mb-3 flex-grow-1">            
            <textarea class="form-control" name="" id="" rows="7" placeholder="your insights"></textarea>
          </div>
          <button type="button" class="btn btn-primary align-self-end justify-self-end">Comment</button>
        </form>
      </div>

    </div>
    
  </div>


  
  `



};

const closeModal = () => {
  const modal = document.querySelector('.modal-pokemon');
  modal.className = 'modal-pokemon d-flex align-items-center justify-content-center check';
  modal.innerHTML = ""
};

export { showComments, closeModal };