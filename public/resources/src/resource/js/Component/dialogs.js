'use strict';

import Inputs from './inputs';
import Dispatcher from './helper/dispatcher';
import Storage from './helper/storage';

export default class Dialogs {
    constructor(options) {
        this.inputs = new Inputs();

        this.field = document.getElementById('dialogs-field');
        this.overlay = document.getElementById('dialogs-overlay');
        this.options = options;

        this.load();
    }

    load() {
        const _self = this;
        let puts = document.getElementsByClassName('app-dialogs-puts');
        if(puts.length) {
            for(let i = 0; i < puts.length; i++) {
                let type = puts[i].getAttribute('data-dialogs-type');
                let endpoint = puts[i].getAttribute('data-dialogs-endpoint');
                let event = puts[i].getAttribute('data-dialogs-event');
                puts[i].addEventListener(event, (e) => {
                    _self.puts(type, endpoint, puts[i]);
                });
            }
        }
    }

    /**
     * 
     * @param {string} type 
     * @param {string} title 
     * @param {array} fields 
     * @returns 
     */
    puts(type, endpoint, em)
    {
        if(!this.field) return false;

        switch(type) {
            case 'inputs':
                this.get_inputs(endpoint, em);
                break;
            default:
                break;
        }
    }

    open()
    {
        this.showOveraly();
        this.field.style.display = 'block';
        this.field.style.position = 'absolute';
        this.field.style.overflow = 'auto';
        this.field.style.top = '0';
        this.field.style.width = '50%';
        this.field.style.height = '100%';
        this.field.style.background = '#FFF';
        this.field.style.padding = '20px 10px';
        this.field.style.left = '25%';
        this.field.style.right = '25%';
        this.field.style.zIndex = 100;
    }

    close()
    {
        if(this.field.style.display === 'block') {
            this.field.style.display = 'none';
            this.field.innerHTML = '';
            this.hideOverlay();
        }
    }

    /**
     * 
     * @param {string} endpoint 
     */
    get_inputs(endpoint, em)
    {
        const _self = this;

        const options = {
            url: endpoint,
            type: 'GET',
            dataType: 'json',
            processData: false,
            contentType: false,
            timeout: 60000
        };

        const storage = new Storage();
        const dispatcher = new Dispatcher(options);

        dispatcher.flush(storage, (data) => {
            if(data.html) {
                _self.add(data.html);

                _self.buttons();
                _self.open();

                // TODO ダイアログ表示後のコールバック適用
                _self.callback_flush(em);
            }
        }, dispatcher.fail);
    }

    /**
     * コールバックを実行
     * @param {HTMLElement} em
     */
    callback_flush(em)
    {
        let callback_block = em.getAttribute('data-dialogs-callback-block-module');
        let callback_packages = em.getAttribute('data-dialogs-callback-packages');
        if(callback_block && callback_packages) {
            if(typeof window._services[callback_packages] !== 'undefined') {
                let packages = window._services[callback_packages];
                if(typeof packages[callback_block] !== 'undefined') {
                    let block = packages[callback_block];
                    if(block) {
                        block.refresh();
                    }
                }
            }
        }
    }

    /**
     *
     * @param {*} dom
     */
    add(dom)
    {
        switch(typeof dom) {
            case 'object':
                this.field.appendChild(dom);
                break;
            case 'string':
                this.field.insertAdjacentHTML('beforeend', dom);
                break;
        }
    }

    buttons()
    {
        let _self = this;

        // button wrapper
        let buttons = document.createElement('div');
        buttons.classList.add('sa-button-container');
        buttons.style.marginTop = '20px';

        // cancel
        let cancel = document.createElement('button');
        cancel.classList.add('cancel');
        cancel.style.display = 'inline-block';
        cancel.style.boxShadow = 'none';
        cancel.style.marginRight = '20px';
        cancel.innerText = 'Cancel';
        cancel.addEventListener('click', (e) => {
            _self.close();
        });

        buttons.appendChild(cancel);

        // ok
        let ok_container = document.createElement('div');
        ok_container.classList.add('sa-confirm-button-container');

        let ok = document.createElement('button');
        ok.classList.add('confirm');
        ok.innerText = '投稿';
        ok.style.display = 'inline-block';
        ok.style.backgroundColor = 'rgb(140, 212, 245)';
        ok.style.boxShadow = 'rgb(140 212 245 / 80%) 0px 0px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px inset';
        ok.addEventListener('click', (e) => {
            //
        });
        ok_container.appendChild(ok);

        buttons.appendChild(ok);

        this.field.appendChild(buttons);
    }

    showOveraly()
    {
        this.overlay.style.display = 'block';
        this.overlay.style.opacity = '0.4';
        this.overlay.style.position = 'fixed';
        this.overlay.style.width = '100%';
        this.overlay.style.height = '100%';
        this.overlay.style.top = 0;
        this.overlay.style.bottom = 0;
        this.overlay.style.background = '#000';
        this.overlay.style.zIndex = 50;
    }

    hideOverlay()
    {
        this.overlay.style.display = 'none';
    }
}