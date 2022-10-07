import listeners from "./listeners.js";
import RouterHandler from "./Router.js"

class App{
  constructor(){
    new RouterHandler();
    listeners();
  }
}

new App()