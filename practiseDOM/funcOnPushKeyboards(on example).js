'use strict'

function runOnKeys(func, ...codes) {
  let keys = new Set()
  
  document.addEventListener("keydown", function(event) {
    keys.add(event.code)
    
    for (let code of codes) {
      if(!keys.has(code)) {
        return
      }
    }
    keys.clear()
    func()
  })

  document.addEventListener("keyup", function(event) {
    keys.delete(event.code)
  })
}

runOnKeys(() => {
  alert('Success')
}, "KeyR", "KeyU")