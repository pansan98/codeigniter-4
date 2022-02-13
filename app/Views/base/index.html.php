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

<?php echo $this->include('_templates/navigation.html.php'); ?>

<?php echo $this->include('_templates/sides.html.php'); ?>

<?php
/**
 * render content area
 */
$this->renderSection('content');
?>

<?php echo $this->include('_templates/javascript.html.php'); ?>

</body>
</html>
