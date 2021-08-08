
//参数：func函数，delay延迟时间
export function debounce(func, delay = 50) {
    let timer = null
    return function (...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
  