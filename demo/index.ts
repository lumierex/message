import Message from "../components/Message"
Message.timeout = 4000
window.onload = ()=> { 
  console.log('hello world')
  // new Notify('message', 'hello world')


  // // new Notify('message', '<div class="hello world"> <div class="header1">hi</div></div>')
  // Message.info('<div class="hello world"> <div class="header1">hi</div></div>')
  // Message.info('')
  let messageIndex = 1
  const words = 'abcdefghijklmnopqrstuvwxyz'
  let message = ()=> words.slice(0, Math.floor(Math.random() * words.length + 1))
  const btns = document.querySelectorAll('button')
  btns.forEach(_=> {
    switch(_.textContent) {
      case 'info' : {
        _.addEventListener('click', ()=> {
          Message.info(`<div>info ${message()}${messageIndex ++}</div>`)
        })
        break
      }
      case 'error' : {
        _.addEventListener('click', ()=> {
          Message.error(`<div>error ${message()}${messageIndex ++}</div>`)
        })
        break
      }
      case 'warn' : {
        _.addEventListener('click', ()=> {
          Message.warn(`<div>warn ${message()}${messageIndex ++}</div>`)
        })
        break
      }
      case 'success' : {
        _.addEventListener('click', ()=> {
          Message.success(`<div>success ${message()}${messageIndex ++}</div>`, 0)
        })
        break
      }
      case 'loading' : {
        _.addEventListener('click', ()=> {
          Message.loading(`<div>loading ${message()}${messageIndex ++}</div>`)
        })
        break
      }
    }
  })
}