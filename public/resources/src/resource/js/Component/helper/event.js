export default class Event {

    add(dom, type, call)
    {
        if(dom) {
            dom.addEventListener(type, call);
        }
    }

    get()
    {
        return this;
    }

    category_switch(target, doms)
    {
        if(target && doms) {
            for(let i = 0; i < doms.length; i++) {
                if(target.getAttribute('data-lineup-category') == doms[i].getAttribute('data-lineup-category')) {
                    if(!doms[i].classList.contains('is-active')) {
                        doms[i].classList.add('is-active');
                    }
                } else {
                    if(doms[i].classList.contains('is-active')) {
                        doms[i].classList.remove('is-active');
                    }
                }
            }
        }
    }

    lineup_switch(target, doms)
    {
        if(target && doms) {
            for(let i = 0; i < doms.length; i++) {
                if(target.getAttribute('data-lineup') == doms[i].getAttribute('data-lineup')) {
                    if(!doms[i].classList.contains('is-active')) {
                        doms[i].classList.add('is-active');
                    }
                } else {
                    if(doms[i].classList.contains('is-active')) {
                        doms[i].classList.remove('is-active');
                    }
                }
            }
        }
    }

    media_switch(target, doms)
    {
        if(target && doms) {
            for(let i = 0; i < doms.length; i++) {
                if(target.getAttribute('data-media') == doms[i].getAttribute('data-media')) {
                    if(!doms[i].classList.contains('is-active')) {
                        doms[i].classList.add('is-active');
                    }
                } else {
                    if(doms[i].classList.contains('is-active')) {
                        doms[i].classList.remove('is-active');
                    }
                }
            }
        }
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
