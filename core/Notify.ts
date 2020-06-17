
import dom from "../helpers/dom"

// Notice Message Modal
export type NotifyType = 'message' | 'notice'
class Notify {
  parentDOM: HTMLElement
  notifyDOM: HTMLElement
  timeout: number
  title: string
  notifyCloseCls: string = 'ami-notify-close'
  closeIcon: boolean = false
  notifyCls: string = 'ami-notify'
  notifyHeaderCls: string
  notifyContentCls: string = 'ami-notify-content'
  notifyContainerCls: string = 'ami-notify-container'
  notifyShowCls = 'ami-notify-show';
  notifyHideCls = 'ami-notify-hide'
  NotifyType: NotifyType = 'message'
  content: string = ''
  footer: boolean = false

  private defaultTpl: string = `
    <div class="${this.notifyContainerCls}">
      ${this.closeIcon ? `<i class="${this.notifyCloseCls} ">d</i>` : ''}
      ${this.title ? `<header class="ami-${this.NotifyType + 'header'}">${this.title}</header>` : ''}
      <div class="notify-content ${this.notifyContentCls}">${this.content}</div>
    </div>
  `

  constructor(
    NotifyType: NotifyType,
    content?: string,
    timeout?: number,
    onClose?: () => void,
    parentDOM?: HTMLElement,
    closeIcon?: boolean,
  ) {
    this.NotifyType = NotifyType
    this.content = content
    this.timeout = timeout
    this.closeIcon = closeIcon
    this.parentDOM = parentDOM || document.body

    console.log('before create template', this.defaultTpl)
    // 不消失的话 就用手动关闭
    if(this.timeout === 0){
      this.closeIcon = true
    }
    console.log('timeout', this.timeout, 'this.closeIcon', this.closeIcon)
    this.createTemplate(this.generateTpl())
  }

  private generateTpl() {
    return `
      <div class="${this.notifyContainerCls}" style="${this.closeIcon ? 'padding-right:8px' : ''}">
        ${this.closeIcon ? `<i style="margin-left:8px" class="ami-icon icon-close ${this.notifyCloseCls} "></i>` : ''}
        ${this.title ? `<header class="ami-${this.NotifyType + 'header'}">${this.title}</header>` : ''}
        <div class="notify-content ${this.notifyContentCls}">${this.content}</div>
      </div>
    `
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
    // 显示
    setTimeout(() => {
      this.notifyDOM.classList.add(this.notifyShowCls)
    }, 20)
    // 关闭
    if (this.timeout !== 0) {
      setTimeout(() => {
        this.close()
      }, this.timeout)
    }
  }


  isHTMLElement(html: string) {
    html = html.replace(/\s/g, '')
    return html.indexOf('<') > -1 && html.indexOf('</') > -1
  }

  $(element: string): HTMLElement {
    return document.querySelector(`${element}`)
  }

  close() {
    this.notifyDOM.classList.remove(this.notifyShowCls)
    this.notifyDOM.classList.add(this.notifyHideCls)
    // 等到动画完成再移除dom节点
    console.log(this.notifyDOM, 'notifyDOM')

    this.notifyDOM.addEventListener('transitionend', () => {
      dom.removeElement(this.notifyDOM)
    })
  }

}


export default Notify