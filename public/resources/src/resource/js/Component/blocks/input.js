'use strict';

import Block from './block';

export default class blockInput extends Block {

    blocks = [];
    block_class_name = 'app-input-block';
    block_options = [];

    constructor() {
        super();
        this.build_options();
    }

    create(blocks)
    {
        let fields = document.createElement('fieldset');
        let input = document.createElement('input');
        
        input.type = blocks.options.type;
        input.name = blocks.options.name;
        input.id = blocks.options.name;
        input.placeholder = blocks.options.placeholder;
        if(blocks.options.class.length) {
            for(let k in blocks.options.class) {
                input.classList.add(blocks.options.class[k]);
            }
        }

        fields.appendChild(input);

        return fields;
    }
}