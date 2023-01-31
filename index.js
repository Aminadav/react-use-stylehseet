const { useEffect } = require("react")

module.exports.useStylesheet=(css)=>{
  useEffect(()=>{
    var element=document.createElement('style')
    document.body.appendChild(element)
    element.innerText=css
    return ()=>{
      document.body.removeChild(element)
    }
  },[css])
}