import State from '../state/state';

export default class Block {
    blocks = [];
    states = [];
    block_class_name = 'block';
    block_options = {};
    options = {};

    constructor() {
        //this.blocks = document.getElementsByClassName(this.block_class_name);
        //this.build_options();
    }

    /**
     * オプションを格納する
     */
    build_options()
    {
        if(this.blocks.length) {
            for(let i = 0; i < this.blocks.length; i++) {
                for(let o_i in this.block_options) {
                    this.options[o_i] = this.blocks[i].getAttribute('data-' + this.block_options[o_i]);
                }

                this.blocks[i].classList.add('block-module-loaded');
            }
        }
    }

    /**
     *
     * @param {HTMLElement} block
     */
    build_state(block)
    {
        let uniqid = block.getAttribute('ada-app-uniqid');
        if(!uniqid) {
            throw new Error('Oops, Not Found UniqId...');
        }

        this.states[uniqid] = new State(uniqid);
    }

    refresh()
    {
        this.build_options();
    }
}