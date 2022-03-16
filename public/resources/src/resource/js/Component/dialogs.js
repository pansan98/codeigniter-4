'use strict';

import Inputs from './inputs';

export default class Dialogs {
    constructor(options) {
        this.inputs = new Inputs();

        this.field = document.getElementById('dialogs-field');
        this.options = options;
    }

    /**
     * 
     * @param {string} type 
     * @param {string} title 
     * @param {array} fields 
     * @returns 
     */
    puts(type, title, fields)
    {
        if(!this.field) return false;

        switch(type) {
            case 'inputs':
                this.create_inputs(title, JSON.parse(fields));
                break;
            default:
                break;
        }

        this.open();
    }

    open()
    {
        this.field.style.display = 'block';
        this.field.style.opacity = '1.08';
    }

    close()
    {
        if(this.field.style.display === 'block') {
            this.field.style.display = 'none';
            this.field.style.opacity = '-0.02';
            this.field.innerHTML = '';
        }
    }

    /**
     * 
     * @param {string} title 
     * @param {array} fields 
     */
    create_inputs(title, fields)
    {
        let _h = document.createElement('h2');
        _h.innerText = title;
        this.add(_h);

        if(fields.length) {
            for(let k in fields) {
                let block;
                switch(fields[k].type) {
                    case 'input':
                        block = this.inputs.input(fields[k]);
                        break;
                    case 'select':
                        block = this.inputs.select(fields[k]);
                        break;
                    case 'radio':
                        block = this.inputs.radio(fields[k]);
                        break;
                    case 'checkbox':
                        block = this.inputs.checkbox(fields[k]);
                        break;
                    case 'media':
                        block = this.inputs.media(fields[k]);
                        break;
                    default:
                        break;
                }

                if(block) {
                    this.add(block);
                }
            }
        }
    }

    /**
     * 
     * @param {Document} dom 
     */
    add(dom)
    {
        this.field.appendChild(dom);
    }

    buttons()
    {
        let _self = this;

        // button wrapper
        let buttons = document.createElement('div');
        buttons.classList.add('sa-button-container');

        // cancel
        let cancel = document.createElement('button');
        cancel.classList.add('cancel');
        cancel.style.display = 'inline-block';
        cancel.style.boxShadow = 'none';
        cancel.addEventListener('click', (e) => {
            _self.close();
        });

        buttons.appendChild(cancel);

        // ok
        let ok_container = document.createElement('div');
        ok_container.classList.add('sa-confirm-button-container');

        let ok = document.createElement('button');
        ok.classList.add('confirm');
        ok.style.display = 'inline-block';
        ok.style.backgroundColor = 'rgb(140, 212, 245)';
        ok.style.boxShadow = 'rgb(140 212 245 / 80%) 0px 0px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px inset';
        ok_container.appendChild(ok);

        buttons.appendChild(ok);

        this.field.appendChild(buttons);
    }
}