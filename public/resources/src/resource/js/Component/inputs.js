'use strict';

import Input from './blocks/input';
import Select from './blocks/select';
import Radio from './blocks/radio';
import Checkbox from './blocks/checkbox';
import Media from './blocks/media';

export default class Inputs {
    
    /**
     * @param {array} params 
     */
    constructor(params) {
        this.blocks = {
            input: new Input(params),
            select: new Select(params),
            radio: new Radio(params),
            checkbox: new Checkbox(params),
            media: new Media(params)
        }
    }

    /**
     * 
     * @param {array} blocks 
     * @returns 
     */
    input(blocks)
    {
        return this.blocks.input.create(blocks);
    }

    /**
     * 
     * @param {array} blocks 
     * @returns 
     */
    select(blocks)
    {
        return this.blocks.select.create(blocks);
    }

    /**
     * 
     * @param {array} blocks 
     * @returns 
     */
    radio(blocks)
    {
        return this.blocks.radio.create(blocks);
    }

    /**
     * 
     * @param {array} blocks 
     * @returns 
     */
    checkbox(blocks)
    {
        return this.blocks.checkbox.create(blocks);
    }

    /**
     * 
     * @param {array} blocks 
     * @returns 
     */
    media(blocks)
    {
        return this.blocks.media.create(blocks);
    }
}