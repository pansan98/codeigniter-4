'use strict';

var AppModule = (page, options) => {
    this.filter_modules = ['app', 'blocks'];
    /**
     * グローバルモジュールを追加する
     */
    this.modules = {
        dialogs: require('./Component/dialogs')
    };

    this.block_modules = {};
    this.page = page;
    this.options = options;
}

AppModule.prototype.load_block_module = () => {
    if(this.page === 'input') {
        this.block_modules = {
            input: require('./Component/blocks/input'),
            select: require('./Component/blocks/select'),
            media: require('./Component/blocks/media')
        }
    
        // Blocks Modules
        window._services.blocks = {};
        for(let b_k in this.block_modules) {
            window._services.blocks[b_k] = new this.block_modules[b_k].default();
        }
    }
}

AppModule.prototype.get_app = (key) => {
    if(!key) {
        return this.modules;
    } else {
        return this.modules[key];
    }
}

AppModule.prototype.get_block = (key) => {
    if(!key) {
        return this.block_modules;
    } else {
        return this.block_modules[key];
    }
}

AppModule.prototype.load = () => {
    // App Modules
    for(let k in this.modules) {
        if(this.filter_modules.includes(k)) {
            throw Error('Oops... Not "blocks" key!!');
        }
        window._services[k] = new this.modules[k].default();
    }
}

window._services = {};
window._services.app = AppModule;