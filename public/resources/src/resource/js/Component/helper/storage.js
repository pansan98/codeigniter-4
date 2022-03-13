export default class Storage {
    constructor()
    {
        this.storage = {};
        this.storage.page = 1;
    }

    get(key)
    {
        if(!key) {
            return this.storage;
        } else {
            return this.storage[key];
        }
    }

    add(key, value)
    {
        if(this.storage[key]) {
            this.remove(this.storage[key]);
        }

        this.storage[key] = value;
    }

    remove(key)
    {
        this.storage[key] = null;
    }

    has(doms, key, attr, active_class) {
        if(doms) {
            for(let i = 0; i < doms.length; i++) {
                if(doms[i].classList.contains(active_class)) {
                    let value = doms[i].getAttribute(attr);
                    this.add(key, value);
                }
            }
        }
    }
}
