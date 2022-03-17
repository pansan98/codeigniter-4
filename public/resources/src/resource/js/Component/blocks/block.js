export default class Block {
    blocks;
    block_class_name = 'block';
    block_options = [];
    options = [];

    constructor() {
        //this.blocks = document.getElementsByClassName(this.block_class_name);
        //this.build_options();
    }

    /**
     * オプションを格納する
     */
    build_options()
    {
        if(this.block_options.length) {
            for(let i = 0; i < this.blocks.length; i++) {
                for(let o_i = 0; o_i < this.block_options.length; o_i++) {
                    this.options[this.block_options[o_i]] = this.blocks[i].getAttribute('data-' + this.block_options[o_i]);
                }

                this.blocks[i].classList.add('block-module-loaded');
            }
        }
    }
}