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
                        <h2>Login Form</h2>
                    </div>
                    <div class="body">
                        <?php
                        echo form_open(route_to('user_signin'), ['id' => 'signin-form']);
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