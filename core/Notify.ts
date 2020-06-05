
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
  // private template 
//   text	提示的文本	String	-	-
// type	提示类型	String	loading, info, warn, success, error	info
// timeout
  // type: 'diaglog'
  type: NotifyType = 'message'
  content: string | HTMLElement = ''
  private tempalte: string = `
    <div> class="${}"</div>
  `
  constructor(type, content) {
    this.type = type
    this.content = content
  }
}


export default Notify