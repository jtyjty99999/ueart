function observer(value) {
    Object.keys(value).forEach((key) => bindData(value, key, value[key] , cb))
}

function bindData (obj, key, val, cb) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: ()=>{
        },
        set:val=> {
            //
        }
    })
}

class Ureact {
    constructor(options) {
        this._data = options.data;
        observer(this._data, options.render)
    }
}

let app = new Vue({
    el: '#app',
    data: {
        text: 'text',
        text2: 'text2'
    },
    render(){
        console.log("render");
    }
})

 class VNode {
    tag: string
  
    constructor (
      tag: string,
    ) {
      /*当前节点的标签名*/
      this.tag = tag
    }
  
    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    get child (): Component | void {
      return this.componentInstance
    }
  }

  // 依赖收集
  class Collection () {
    constructor () {
        this.subs = [];
    }

    addSub (sub) {
        this.subs.push(sub)
    }

    removeSub (sub) {
        remove(this.subs, sub)
    }
    notify () {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}

class Watcher () {
    constructor (vm, cb, options) {
        this.cb = cb;
        this.vm = vm;
        this.cb.call(this.vm);
    }

    update () {
        this.cb.call(this.vm);
    }
}