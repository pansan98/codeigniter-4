<?php
echo form_open('', ['id' => 'posts-form']);
?>
<fieldset>
    <?php
    echo form_input([
        'type' => 'input',
        'name' => 'title',
        'class' => 'form-control'
    ]);
    ?>
</fieldset>
<fieldset>
    <?php
    echo form_textarea([
        'type' => 'textarea',
        'name' => 'content',
        'class' => 'form-control'
    ])
    ?>
</fieldset>
<fieldset>
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