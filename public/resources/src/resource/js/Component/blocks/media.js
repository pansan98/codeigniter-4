import Block from './block';
import Dispatcher from '../helper/dispatcher';
import Storage from '../helper/storage';
import State from '../state/mediaState';
import mediaState from '../state/mediaState';

export default class blockMedia extends Block {
    blocks = [];
    block_class_name = 'app-media-block';
    block_options = {
        maxItems: 'app-options-max-items',
        extensions: 'app-options-extensions',
        maxSize: 'app-options-max-size',
        endpoint: 'app-options-endpoint',
        timeout: 'app-options-timeout'
    };

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
                    if(dropzone) {
                        this.dropzone(dropzone);
                    }

                    let clickable = this.blocks[i].querySelector('.dz-clickable');
                    if(clickable) {
                        this.clickable(clickable);
                    }
                }
            }
        }
    }

    /**
     * Unique IdからStateを作成
     * @param {HTMLElements} blocks 
     */
    build_state(blocks)
    {
        if(blocks.length) {
            for(let i = 0; i < blocks.length; i++) {
                let uniqid = blocks[i].getAttribute('data-app-uniqid');
                if(!uniqid) {
                    throw new Error('Oops, Not Found UniqId...');
                }

                this.states[uniqid] = new mediaState(uniqid);
            }
        }
    }

    /**
     *
     * @param {HTMLElement} em
     */
    refresh() {
        this.blocks = document.getElementsByClassName(this.block_class_name);
        this.build();
        this.build_options();
    }

    /**
     *
     * @param {HTMLElement} field
     */
    dropzone(field)
    {
        const _self = this;
        field.addEventListener('dragenter', (e) => {
            e.stopPropagation();
            e.preventDefault();
            _self.activate(field);
        });

        field.addEventListener('dragover', (e) => {
            e.stopPropagation();
            e.preventDefault();
            _self.activate(field);
        });

        field.addEventListener('dragleave', (e) => {
            _self.diactivate(field);
        });

        // ドロップ
        $(field).on('drop', (e) => {
            let files = e.originalEvent.dataTransfer.files;
            _self.upload(e, files, field);
        });
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
            const storage = new Storage();
            storage.add('attachments', files);

            // CSRF
            let _csrf_name = $(field).closest('fieldset').attr('data-app-csrf-name');
            let _csrf = $(field).closest('fieldset').attr('data-app-csrf');
            storage.add(_csrf_name, _csrf);

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
        console.log(data);
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
        if(!field.classList.contains('dz-drag-hover')) {
            field.classList.add('dz-drag-hover');
        }
    }

    /**
     *
     * @param {HTMLElement} field
     */
    diactivate(field)
    {
        if(field.classList.contains('dz-drag-hover')) {
            field.classList.remove('dz-drag-hover');
        }
    }
}