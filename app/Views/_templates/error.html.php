<?php if(!empty($error)): ?>
    <?php if(is_array($error)): ?>
        <?php foreach ($error as $er): ?>
            <div class="alert bg-red"><?php echo esc($er); ?></div>
        <?php endforeach; ?>
    <?php else: ?>
        <div class="alert bg-red"><?php echo esc($error); ?></div>
    <?php endif; ?>
<?php endif; ?>