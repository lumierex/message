export default {
  removeElement(element: HTMLElement) {
    if(element.parentNode) {
      element.parentNode.removeChild(element)
    }
  }
}