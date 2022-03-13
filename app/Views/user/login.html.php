<?php echo $this->include('_templates/head.html.php'); ?>

<body class="login-page ls-closed">
    <div class="login-box">
        <div class="logo">
            <a href="javascript: void(0);">
                Login Form
            </a>
            <small>Login Form - Material Design</small>
        </div>
        <div class="card">
            <div class="body">
                <?php
                    echo form_open(route_to('user_signin'), ['id' => 'sign_in']);
                ?>
                <?php echo form_label('ログインID', 'login_id'); ?>
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
                </div>
                <?php echo form_label('パスワード', 'login_pw'); ?>
                <div class="form-group">
                    <div class="form-line">
                        <?php
                            echo form_input([
                                'type' => 'password',
                                'name' => 'login_pw',
                                'id' => 'login_pw',
                                'value' => '',
                                'class' => 'form-control',
                                'style' => 'margin-bottom: 0;'
                            ]);
                        ?>
                    </div>
                </div>
    
                <?php
                    echo form_button([
                        'name' => 'submit',
                        'id' => 'signin-button',
                        'type' => 'submit',
                        'content' => 'LogIn',
                        'class' => 'btn btn-block bg-pink waves-effect'
                    ]);
                ?>
                <?php echo form_close(); ?>
            </div>
        </div>
    </div>

<?php echo $this->include('_templates/javascript.html.php'); ?>

</body>
</html>