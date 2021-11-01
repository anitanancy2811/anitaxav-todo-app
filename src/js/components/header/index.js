import makeElement from "../../utils/makeElement"




const header = function (title="uiHeader"){
    const template = ` <h1 class="temp">${title}</h1>`
    
    
    const element = makeElement(template)
    console.log(element.nodeType)
   

    return element
}

export default header