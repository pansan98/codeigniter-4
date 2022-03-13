'use strict';

export default class AppModule {
    constructor(page)
    {
        /**
         * グローバルモジュールを追加する
         */
        this.modules = {
            dialogs: require('./Component/dialogs')
        };

        this.block_modules = {};
        if(page === 'input') {
            /**
             * ブロックモジュールを追加する
             */
            this.load_block_modules();
        }
    }

    load_block_modules()
    {

    }

    get_app()
    {
        return this.modules;
    }

    get_block()
    {
        return this.block_modules;
    }
}

window._services = {};
window.services = (new AppModule).get_app();