import Block from './block';
import Dispatcher from '../helper/dispatcher';
import Storage from '../helper/storage';

export default class blockMedia extends Block {
    blocks;
    block_class_name = 'app-media-block';
    block_options = ['app-options-max-items', 'app-options-extensions', 'app-options-max-size', 'app-options-endpoint', 'app-options-timeout'];

    constructor() {
        super();
        this.blocks = document.getElementsByClassName(this.block_class_name);
        this.build();
        this.build_options();
    }

    build() {
        if(this.blocks && this.blocks.length) {
            for(let i = 0; i < this.blocks.length; i++) {
                if(!this.blocks[i].classList.contains('block-module-loaded')) {
                    let dropzone = this.blocks[i].querySelector('.dropzone');
                    if(dropzone.length) {
                        this.dropzone(dropzone);
                    }

                    let clickable = this.blocks[i].querySelector('.dz-clickable');
                    if(clickable.length) {
                        this.clickable(clickable);
                    }
                }
            }
        }
    }

    /**
     *
     * @param {HTMLElement} field
     */
    dropzone(field)
    {
        console.log('aaa');
        const _self = this;
        field.addEventListener('dragenter', (e) => {
            e.stopPropagation();
            e.preventDefault();
            _self.activate(this);
        });

        field.addEventListener('dragover', (e) => {
            e.stopPropagation();
            e.preventDefault();
            _self.activate(this);
        });

        field.addEventListener('dragleave', (e) => {
            _self.diactivate(this);
        })
    }

    /**
     *
     * @param {HTMLElement} field
     */
    clickable(field)
    {

    }

    upload(e, files, field) {
        const _self = this;
        e.preventDefault();

        if(!_self.upload_has(field, 'uploading')) {
            _self.upload_active(field, 'uploading');

            const options = {
                url: _self.options.endpoint,
                type: 'POST',
                processData: false,
                contentType: false,
                dataType: 'json',
                timeout: parseInt(_self.options.timeout)
            }

            const dispatcher = new Dispatcher(options);
            const storage = Storage();
            storage.add('attachments', files);

            dispatcher.flush(storage, (data) => {
                _self.uploaded(data, field);
            }, (xhr, textStatus, errorThrow) => {

            }, () => {
                _self.upload_diactive(field, 'uploading');
            });
        }
    }

    uploaded(data, field)
    {

    }

    upload_has(field, has)
    {
        return field.classList.contains(has);
    }

    upload_active(field, active)
    {
        field.classList.add(active);
    }

    upload_diactive(field, diactive)
    {
        field.classList.remove(diactive);
    }

    /**
     *
     * @param {HTMLElement} field
     */
    activate(field)
    {
        field.classList.add('dz-drag-hover');
    }

    /**
     *
     * @param {HTMLElement} field
     */
    diactivate(field)
    {
        field.classList.remove('dz-drag-hover');
    }
}