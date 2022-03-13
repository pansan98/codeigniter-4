export default class History {
    constructor()
    {
        this.query = '';
        this.connection = '';
    }

    /**
     * [push 履歴URLの生成]
     * @param  {[Class]} storage [Storage Class]
     */
    push(storage)
    {
        this.clear();

        const current_request = this.path(window.location.href);

        const lineup = storage.get('lineup');
        const page = storage.get('page');
        const lineup_category = storage.get('lineup_category');
        const media = storage.get('media');
        const keyword = storage.get('keyword');

        if(lineup && lineup !== 'ALL') {
            this.create('lineup', lineup);
        }

        if(lineup_category && lineup_category !== 'ALL') {
            this.create('lineup_category', lineup_category);
        }

        if(page && parseInt(page) !== 1) {
            this.create('page', page);
        }

        if(media && media !== 'ALL') {
            this.create('media', media);
        }

        if(keyword) {
            this.create('keyword', keyword);
        }

        const url = this.get(current_request);
        history.pushState(null, null, url);
    }

    create(key, value)
    {
        if(!this.query) {
            this.query = key+'='+value;
            this.connection = '&';
        } else {
            this.query += this.connection + key + '=' + value;
        }
    }

    path(url)
    {
        let path = url.replace(/\?.*$/, '');
        return path;
    }

    clear()
    {
        this.query = '';
        this.connection = '';
    }

    get(request)
    {
        let push_uri = '';
        if(this.query) {
            push_uri = request + '?' + this.query;
        } else {
            push_uri = request;
        }

        return push_uri;
    }
}
