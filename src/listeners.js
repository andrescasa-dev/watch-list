export default function listeners(){
  document.addEventListener('click', async event =>{
    const {target} = event
    if(target.matches('#find')){
      await this.findMovie();  
    }
  })
  input_search.addEventListener('keypress', async event =>{
    const {target, key} = event
    console.log({target, key})
    if(target.matches('#search') && key === 'Enter'){
      await this.findMovie();
    }
  })
  document.addEventListener('input', event => {
    const {target} = event;
    if(target === input_search){
      if(input_search.value === '') div_mount.innerHTML = StartComponent(); 
    }
  })
}