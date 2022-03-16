'use strict';

var AppModule = (page, options) => {
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

    this.options = {};
}

AppModule.prototype.load_block_module = () => {
    this.block_modules = {
        input: require('./Component/blocks/input'),
        select: require('./Component/blocks/select')
    }
}

AppModule.prototype.get_app = () => {
    return this.modules;
}

AppModule.prototype.get_block = () => {
    return this.block_modules;
}

AppModule.prototype.flush = () => {
    //window._services = {};
    for(let k in this.modules) {
        window._services[k] = this.modules[k]
    }
}

window._services = {};
window._services.app = AppModule;