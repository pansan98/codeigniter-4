<?php echo $this->include('_templates/head.html.php'); ?>

<body class="signup-page ls-closed">
    <div class="signup-box">
        <div class="logo">
            <a href="javascript: void(0);">
                Account Form
            </a>
            <small>Create Account Form - Material Design</small>
        </div>
        <div class="card">
            <div class="body">
                <?php
                    echo form_open(route_to('user_signup'), ['id' => 'sign_up']);
                ?>
                <?php echo form_label('Login ID', 'login_id'); ?>
                <div class="form-group">
                    <div class="form-line">
                        <?php
                            echo form_input([
                                'type' => 'input',
                                'name' => 'login_id',
                                'id' => 'login_id',
                                'value' => isset($posts['login_id']) ? esc($posts['login_id']) : '',
                                'class' => 'form-control',
                                'autocomplete' => 'off'
                            ]);
                        ?>
                    </div>
                    <?php echo __error('_templates/error.html.php', isset($errors['login_id']) ? $errors['login_id'] : ''); ?>
                </div>
    
                <?php echo form_label('Password', 'login_pass'); ?>
                <div class="form-group">
                    <div class="form-line">
                        <?php
                            echo form_input([
                                'type' => 'password',
                                'name' => 'login_pass',
                                'id' => 'login_pass',
                                'value' => '',
                                'class' => 'form-control',
                                'style' => 'margin-bottom: 0;'
                            ]);
                        ?>
                    </div>
                    <?php echo __error('_templates/error.html.php', isset($errors['login_pass']) ? $errors['login_pass'] : ''); ?>
                </div>
    
                <?php echo form_label('Password confirm', 'login_pass_conf'); ?>
                <div class="form-group">
                    <div class="form-line">
                        <?php
                            echo form_input([
                                'type' => 'password',
                                'name' => 'login_pass_conf',
                                'id' => 'login_pass_conf',
                                'value' => '',
                                'class' => 'form-control',
                                'style' => 'margin-bottom: 0;'
                            ]);
                        ?>
                    </div>
                    <?php echo __error('_templates/error.html.php', isset($errors['login_pass_conf']) ? $errors['login_pass_conf'] : ''); ?>
                </div>
    
                <?php echo form_label('nick name', 'nickname'); ?>
                <div class="form-group">
                    <div class="form-line">
                        <?php
                            echo form_input([
                                'type' => 'input',
                                'name' => 'nickname',
                                'id' => 'nickname',
                                'value' => isset($posts['nickname']) ? esc($posts['nickname']) : '',
                                'class' => 'form-control',
                                'autocomplete' => 'off'
                            ]);
                        ?>
                    </div>
                    <?php echo __error('_templates/error.html.php', isset($errors['nickname']) ? $errors['nickname'] : ''); ?>
                </div>
    
                <?php echo form_label('E-mail', 'mail'); ?>
                <div class="form-group">
                    <div class="form-line">
                        <?php
                            echo form_input([
                                'type' => 'email',
                                'name' => 'mail',
                                'id' => 'mail',
                                'value' => isset($posts['mail']) ? esc($posts['mail']) : '',
                                'class' => 'form-control',
                                'style' => 'margin-bottom: 0;',
                                'autocomplete' => 'off'
                            ]);
                        ?>
                    </div>
                    <?php echo __error('_templates/error.html.php', isset($errors['mail']) ? $errors['mail'] : ''); ?>
                </div>
    
                <?php
                    echo form_input([
                        'type' => 'hidden',
                        'name' => 'remote_ip',
                        'id' => 'remote_ip',
                        'value' => esc($posts['remote_ip'])
                    ]);
                ?>
    
                <?php
                    echo form_button([
                        'id' => 'signup-button',
                        'type' => 'submit',
                        'content' => 'Create',
                        'class' => 'btn btn-block btn-lg bg-pink waves-effect'
                    ]);
                ?>
                
                <div class="m-t-25 m-b--5 align-center">
                    <a href="<?php echo route_to('user_signin'); ?>">
                        You Already have a memberships?
                    </a>
                </div>
                <?php echo form_close(); ?>
            </div>
        </div>
    </div>

<?php echo $this->include('_templates/javascript.html.php'); ?>

</body>
</html>