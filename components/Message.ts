import Notify, { NotifyType } from "../core/Notify";

// 参数	说明	类型	可选值	默认值
// content	提示的文本	String	-	-
// title	提示的标题	String	-	-
// type	提示类型	String	loading, info, warn, success, error	info
// timeout	显示多少毫秒后自动关闭	Number	-	全局配置timeout
// icon
// style
// className
export type MessageType = 'info' | 'success' | 'error' | 'loading'
let messageDOM: HTMLElement
const iconPrefixCls = 'ami-icon'
const prefixCls = 'message';
class Message extends Notify {
  public static notifyType: NotifyType = 'message'
  public static parentDOM : HTMLElement
  public static timeout: number = 2000
  prefixDOM: string
  // type: MessageType
  constructor(content: string, timeout?: number, type?: MessageType, onClose?: () => void, parentDOM?: HTMLElement) {
    super(Message.notifyType, content, timeout, onClose, parentDOM)
    this.timeout = Message.timeout
  }


  private static initMessage() {
    if (!messageDOM) {
      messageDOM = document.createElement('div')
      messageDOM.classList.add(`ami-${prefixCls}-container`)
      Message.parentDOM = messageDOM
      document.body.appendChild(messageDOM)
    }
  }

  public static info(content: string, timeout?: number, onClose?: () => void) {
    // TODO merge params
    content = `<div style="display:flex"><i class="${iconPrefixCls} iconfont icon-alert-circle-outline"></i>${content}</div>`
    console.log('init Message', content)
    Message.initMessage()
    timeout = timeout || Message.timeout
    return new Message(content, timeout, 'info', onClose, Message.parentDOM)
  }

  public static success() {
 
  }
  public static warn() {

  }
  public static error() {

  }
  public static loading() {

  }
}

export default Message