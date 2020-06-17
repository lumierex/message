import Notify, { NotifyType } from "../core/Notify";

enum iconType {
  info = 'info',
  success = 'success',
  warn = 'warn',
  error = 'error',
  loading = 'loading'
}
enum iconColor {
  info = 'blue icon-info',
  success = 'green icon-success',
  warn = 'yellow icon-info',
  error = 'red icon-error',
  loading = 'blue'
}

export type MessageType = 'info' | 'success' | 'error' | 'loading' | 'warn'
let messageDOM: HTMLElement
const iconPrefixCls = 'ami-icon'
const prefixCls = 'message';
class Message extends Notify {
  public static notifyType: NotifyType = 'message'
  public static parentDOM: HTMLElement
  public static timeout: number = 2000
  prefixDOM: string
 constructor(content: string, timeout?: number, type?: MessageType, onClose?: () => void, parentDOM?: HTMLElement) {
    super(Message.notifyType, content, timeout, onClose, parentDOM)
  } // type: MessageType
  


  private static initMessage() {
    if (!messageDOM) {
      messageDOM = document.createElement('div')
      messageDOM.classList.add(`ami-${prefixCls}-container`)
      Message.parentDOM = messageDOM
      document.body.appendChild(messageDOM)
    }
  }

  private static generateContentTpl(type = 'info', content) {
    return `<div style="display:flex"><i  style="margin-right: 8px" class="${iconPrefixCls}-${iconType[type]} ${iconColor[type]} ${iconPrefixCls}"></i>
    <div style="display:inline-block">${content}</div>
    </div>`
  }

  public static info(content: string, timeout?: number,  onClose?: () => void) {
    const type = 'info'
    content = Message.generateContentTpl(type, content)
    Message.initMessage()
    timeout = timeout !== 0 ?  Message.timeout: 0
    return new Message(content, timeout, type, onClose, Message.parentDOM)
  }

  public static success(content: string, timeout?: number,  onClose?: () => void) {
    const type = 'success'
    content = Message.generateContentTpl(type, content)
    Message.initMessage()
    timeout = timeout !== 0 ?  Message.timeout: 0
    return new Message(content, timeout, type, onClose, Message.parentDOM)
  }
  public static warn(content: string, timeout?: number,  onClose?: () => void) {
    const type = 'warn'
    content = Message.generateContentTpl(type, content)
    Message.initMessage()
    timeout = timeout !== 0 ?  Message.timeout: 0
    return new Message(content, timeout, type, onClose, Message.parentDOM)
  }
  public static error(content: string, timeout?: number,  onClose?: () => void) {
    const type = 'error'
    content = Message.generateContentTpl(type, content)
    Message.initMessage()
    timeout = timeout !== 0 ?  Message.timeout: 0
    return new Message(content, timeout, type, onClose, Message.parentDOM)
  }
  public static loading(content: string, timeout?: number,  onClose?: () => void) {

  }
}

export default Message