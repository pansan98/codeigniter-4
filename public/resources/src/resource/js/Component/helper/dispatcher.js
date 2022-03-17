/**
 * HelperのStorageと一緒に利用
 */

export default class Dispatcher {
    options;
    jqxhr;

    constructor(options)
    {
        this.options = options;
    }

    add(key, value)
    {
        if(this.options[key]) {
            this.remove(key);
        }

        this.options[key] = value;
    }

    remove(key)
    {
        this.options[key] = null;
    }

    /**
     * [flush description]
     * @param  {[class]} storage [Storage Class]
     * @return {[type]}         [description]
     */
    flush(storage, callable, faild, always)
    {
        const _self = this;
        if(this.jqxhr) this.jqxhr.abort();

        let storages = storage.get();
        let fd;
        if(this.options.type.toUpperCase() === 'POST') {
            let fd = new FormData();
            for(let k in storages) {
                fd.append(k, storages[k]);
            }
        } else {
            fd = {};
            for(let k in storages) {
                fd[k] = storages[k];
            }
            //fd = encodeURI(fd);
        }

        this.options.data = fd;

        this.jqxhr = $.ajax(this.options).done((data) => {
            callable(data);
        }).fail((xhr, textStatus, errorThrow) => {
            if(typeof faild !== 'function') {
                _self.faild(xhr, textStatus, errorThrow);
            } else {
                faild(xhr, textStatus, errorThrow);
            }
        }).always(() => {
            if(typeof always === 'function') {
                always();
            }
        });
    }

    /**
     * デフォルトfaild
     * @param {*} xhr 
     * @param {*} textStatus 
     * @param {*} errorThrow 
     */
    fail(xhr, textStatus, errorThrow) {
        console.log(textStatus);
        console.log(errorThrow);
    }
}
