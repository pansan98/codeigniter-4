export default class Storage {
    constructor()
    {
        this.storage = {};
        this.storage.page = 1;
    }

    /**
     * 
     * @param {*} key 
     * @returns 
     */
    get(key)
    {
        if(!key) {
            return this.storage;
        } else {
            return this.storage[key];
        }
    }

    /**
     * 
     * @param {*} key 
     * @param {*} value 
     */
    add(key, value)
    {
        if(this.storage[key]) {
            this.remove(key);
        }

        this.storage[key] = value;
    }

    /**
     * 
     * @param {*} key 
     */
    remove(key)
    {
        this.storage[key] = null;
    }
}
