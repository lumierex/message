import Message from "../components/Message"
// Message.timeout = 10000
window.onload = ()=> { 
  console.log('hello world')
  // new Notify('message', 'hello world')


  // // new Notify('message', '<div class="hello world"> <div class="header1">hi</div></div>')
  // Message.info('<div class="hello world"> <div class="header1">hi</div></div>')
  // Message.info('')
  let messageIndex = 1
  document.getElementById('button').addEventListener('click', ()=> {
    Message.info(`<div>hello world${messageIndex ++}</div>`)
  })
}