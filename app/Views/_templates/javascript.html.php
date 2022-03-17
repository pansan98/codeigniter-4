<?php
use \Config\Bootstrap;
?>

<!-- jQuery Core Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/jquery/jquery.min.js"></script>

<!-- Bootstrap Core Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/bootstrap/js/bootstrap.min.js"></script>

<!-- Select Plugin Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/bootstrap-select/js/bootstrap-select.js"></script>

<!-- Slimscroll Plugin Js -->
<!--<script src="<?php //echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/jquery-slimscroll/jquery.slimscroll.js"></script>-->

<!-- Waves Effect Plugin Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/node-waves/waves.js"></script>

<!-- Jquery CountTo Plugin Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/jquery-countto/jquery.countTo.js"></script>

<!-- Morris Plugin Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/raphael/raphael.min.js"></script>
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/morrisjs/morris.js"></script>

<!-- ChartJs -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/chartjs/Chart.bundle.js"></script>

<!-- Flot Charts Plugin Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/flot-charts/jquery.flot.js"></script>
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/flot-charts/jquery.flot.resize.js"></script>
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/flot-charts/jquery.flot.pie.js"></script>
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/flot-charts/jquery.flot.categories.js"></script>
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/flot-charts/jquery.flot.time.js"></script>

<!-- Sparkline Chart Plugin Js -->
<script src="<?php echo Bootstrap::APP__BOOTSTRAP_RESOURCES_PATH(); ?>plugins/jquery-sparkline/jquery.sparkline.js"></script>

<!-- Custom Js -->
<script src="<?php echo Bootstrap::APP__BUNDLE_RESOURCES_PATH(); ?>js/admin.js"></script>

<!-- Custom App Js -->
<script src="<?php echo Bootstrap::APP__BUNDLE_RESOURCES_PATH(); ?>custom/js/AppModules.bundle.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function(e) {
        var AppModule = new window._services.app('<?php echo isset($app_page) ? $app_page : 'index'; ?>', {});
        AppModule.load();
    });
</script>