import Toast from "./Toast";

const toast = {}

toast.install = function (Vue) {
  // console.log(11111111111);
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastConstructor()
  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div,添加到body中
  document.body.appendChild(toast.$el)
  //5.将toast添加到vue原型中
  Vue.prototype.$toast = toast;
}
export default toast
