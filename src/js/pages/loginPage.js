import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'
import { dataFetcher } from "./../utils/dataFetcher"
const loginPage = function (){
   

    const header = document.createElement('header')
    const h1 = levelHeading('h1','Anita Xavier ToDo App Fast, easy, and affordable')
    
    const home = link('home page', '/')
    
    header.append(h1)
    header.append(home)

   
 

    return header
    const temp = dataFetcher('./data/todo.json')
      
}

export default loginPage