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
<?php echo form_close(); ?>