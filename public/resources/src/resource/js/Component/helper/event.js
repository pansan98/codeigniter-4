export default class Event {
    constructor() {
        this.events = {};
    }

    /**
     * 
     * @param {*} dom 
     * @param {*} type 
     * @param {*} call 
     */
    add(dom, type, call)
    {
        if(dom) {
            if(!this.events[type]) {
                this.events[type] = [];
            }
            this.events[type].push(call);
            dom.addEventListener(type, call);
        }
    }

    /**
     * 
     * @returns 
     */
    get()
    {
        return this.events;
    }

    /**
     * [switch 切り替えイベント]
     * @param  {[HTMLCollection]} target       [イベントを受け取ったDOM]
     * @param  {[HTMLCollection]} doms         [切り替えるHTMLCollection]
     * @param  {[String]} attr         [比較する属性]
     * @param  {[String]} active_class [アクティブクラス]
     */
    switch(target, doms, attr, active_class)
    {
        if(!active_class) {
            active_class = 'is-active';
        }

        if(target && doms) {
            for(let i = 0; i < doms.length; i++) {
                if(target.getAttribute(attr) == doms[i].getAttribute(attr)) {
                    if(!doms[i].classList.contains(active_class)) {
                        doms[i].classList.add(active_class);
                    }
                } else {
                    if(doms[i].classList.contains(active_class)) {
                        doms[i].classList.remove(active_class);
                    }
                }
            }
        }
    }
}
