import makeElement from "../../utils/makeElement"




const button = function (titlel="uibutton"){
    const template = ` <button>${title}</button>`
    
    
    const element = makeElement(template)
    console.log(element.nodeType)
   

    return element
}

export default button