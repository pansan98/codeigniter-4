<?php $this->extend('base/index.html.php'); ?>

<?php $this->section('content'); ?>
<section class="content">
    <div class="container-fluid">
        <!-- Basic Table -->
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>
                            Home
                        </h2>
                    </div>
                    <div class="body table-responsive">
                        <div class="m-b-20 m-t--20">
                            <a href="javascript: void(0);" class="btn btn-primary m-t-15 waves-effect">新規作成</a>
                        </div>
                        <table class="table text-enter">
                            <tr>
                                <th class="text-center">Name1</th>
                                <th class="text-center">Name2</th>
                                <th class="text-center">Name3</th>
                                <th class="text-center">Name4</th>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <button type="button" class="btn btn-info btn-circle-lg waves-effect waves-circle waves-float"><a href="javascript: void(0);" style="color: white;"><i class="material-icons" style="font-size: 30px !important; left: -14px !important; top: 4px !important;">edit</i></a></button>
                                </td>
                                <td>Value1</td>
                                <td>Value2</td>
                                <td>Value3</td>
                                <td class="text-center">
                                    <form action="./" method="post">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                                        <button style="padding: 5px 10px;" type="submit" class="btn btn-danger btn-lg waves-effect" aria-label="Left Align"><span class="glyphicon glyphicon-trash"></span></button>
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $this->endSection(); ?>
