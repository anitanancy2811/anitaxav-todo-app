import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'

const homePage = function (){
   

    const header = document.createElement('header')
    const h1 = levelHeading('h1','Anita Xavier ToDo App Fast, easy, and affordable')
   
    const login = link('login page', '/login')
    
    header.append(h1)
    header.append(login)
    

    return header
      
}

export default homePage