
export default class Dispatcher {
    constructor()
    {
        this.options = {};
        this.data = {};
        this.jqxhr = null;
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

    add_data(key, value)
    {
        if(this.data[key]) {
            this.remove_data(key);
        }

        this.data[key] = value;
    }

    remove_data(key)
    {
        this.data[key] = null;
    }

    /**
     * [flush description]
     * @param  {[class]} storage [Storage Class]
     * @return {[type]}         [description]
     */
    flush(storage, callable, faild)
    {
        if(this.jqxhr) this.jqxhr.abort();

        const page = storage.get('page');
        const lineup_category = storage.get('lineup_category');
        const lineup = storage.get('lineup');
        const media = storage.get('media');
        const keyword = storage.get('keyword');

        let datas = {};
        datas.page = page;
        datas.lineup_category = lineup_category;
        datas.lineup = lineup;
        datas.media = media;
        datas.keyword = keyword;

        const options = {
            url: this.options.endpoint,
            type: 'GET',
            data: datas,
            dataType: 'json',
        };

        this.jqxhr = $.ajax(options).done(callable).fail(faild);
    }
}
