<?php echo $this->include('_templates/head.html.php'); ?>

<body class="theme-red">

<!-- Page Loader -->
<div class="page-loader-wrapper">
    <div class="loader">
        <div class="preloader">
            <div class="spinner-layer pl-red">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <p>Please wait...</p>
    </div>
</div>
<!-- #END# Page Loader -->
<!-- Overlay For Sidebars -->
<div class="overlay"></div>
<!-- #END# Overlay For Sidebars -->

<section class="content" style="margin: 100px 0 0 0;">
    <div class="container-fluid">
        <!-- Basic Table -->
        <div class="row clearfix">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="margin: 0 auto;">
                <div class="card">
                    <div class="header" style="text-align: center;">
                        <h2>Account Form</h2>
                    </div>
                    <div class="body">
                        <?php
                        echo form_open(route_to('user_signup'), ['id' => 'signin-form']);
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
                                    'class' => 'form-control'
                                ])
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
                                    'style' => 'margin-bottom: 0;'
                                ])
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
                            'class' => 'btn btn-primary m-t-15 waves-effect'
                        ]);
                        ?>
                        <?php echo form_close(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php echo $this->include('_templates/javascript.html.php'); ?>

</body>
</html>