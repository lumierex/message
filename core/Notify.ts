
// 参数	说明	类型	可选值	默认值
// content	提示的文本	String	-	-
// title	提示的标题	String	-	-
// type	提示类型	String	loading, info, warn, success, error	info
// timeout	显示多少毫秒后自动关闭	Number	-	全局配置timeout
// icon
// style
// className
// h-notify-container
// Notice Message Modal
export type NotifyType = 'message' | 'notice'
class Notify {
  parentDOM: HTMLElement
  notifyDOM: HTMLElement
  // private template 
  //   text	提示的文本	String	-	-
  // type	提示类型	String	loading, info, warn, success, error	info
  // timeout
  // type: 'diaglog'
  timeout: Number = 1000
  title: string
  notifyCloseCls: string = 'ami-notify-close'
  closeIcon: boolean = false
  notifyCls: string = 'ami-notify'
  notifyHeaderCls: string
  notifyContentCls: string = 'ami-notify-content'
  notifyContainerCls: string = 'ami-notify-container'
  notifyShowCls = 'ami-notify-show';
  NotifyType: NotifyType = 'message'
  content: string = ''
  footer: boolean = false

  private defaultTpl: string = `
    <div class="${this.notifyContainerCls}">
      ${this.closeIcon ? `<span ${this.notifyCloseCls}></span>` : ''}
      ${this.title ? `<header class="ami-${this.NotifyType + 'header'}">${this.title}</header>` : ''}
      <div class="notify-content ${this.notifyContentCls}">${this.content}</div>
    </div>
  `

  constructor(
    NotifyType: NotifyType,
    content?: string,
    timeout?: Number,
    onClose?: () => void,
    parentDOM?: HTMLElement,
    closeIcon?: boolean,
  ) {
    this.NotifyType = NotifyType
    this.content = content
    this.timeout = timeout || 1000
    this.closeIcon = closeIcon
    this.parentDOM = parentDOM || document.body

    console.log('before create template', this.defaultTpl)
    this.createTemplate(this.defaultTpl)
  }



  // creatTemplate 提取到外层
  createTemplate(template: string) {
    console.log('createDefault Tpl', template)
    const notifyDOM = document.createElement('div')
    notifyDOM.classList.add(this.notifyCls)
    notifyDOM.innerHTML = template
    this.notifyDOM = notifyDOM
    this.parentDOM.appendChild(notifyDOM)
    if (this.isHTMLElement(this.content)) {
      const content = this.notifyDOM.querySelector('.notify-content')
      content.innerHTML = this.content
    }
    setTimeout(() => {
      this.notifyDOM.classList.add(this.notifyShowCls)
    }, 20)
  }


  isHTMLElement(html: string) {
    html = html.replace(/\s/g, '')
    return html.indexOf('<') > -1 && html.indexOf('</') > -1
  }

  $(element: string): HTMLElement {
    return document.querySelector(`${element}`)
  }

}


export default Notify