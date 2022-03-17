<?php
echo form_open('', ['id' => 'posts-form']);
?>
<fieldset class="app-input-block">
    <?php
    echo form_input([
        'type' => 'input',
        'name' => 'title',
        'class' => 'form-control'
    ]);
    ?>
</fieldset>
<fieldset class="app-textarea-block">
    <?php
    echo form_textarea([
        'type' => 'textarea',
        'name' => 'content',
        'class' => 'form-control'
    ])
    ?>
</fieldset>
<fieldset class="app-media-block" data-app-options-max-items="1" data-app-options-extensions="jpg,jpeg,JPEG,png,PNG" data-app-options-max-size="3" data-app-options-endpoint="<?php echo route_to('api_upload'); ?>" data-app-options-timeout="60000">
    <div class="dropzone dz-clickable">
        <div class="dz-message">
            <div class="drag-icon-cph">
                <i class="material-icons">touch_app</i>
            </div>
            <h3>Drop files here or click to upload.</h3>
        </div>
    </div>
</fieldset>
<?php echo form_close(); ?>