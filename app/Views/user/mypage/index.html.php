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
                            the posts.
                        </h2>
                        <?php
                        $forms = json_encode([
                            'name' => [
                                'type' => 'input',
                                'options' => [
                                    'name' => 'content',
                                    'placeholder' => 'the content...',
                                    'class' => ['form-control']
                                ]
                            ]
                        ],\JSON_UNESCAPED_SLASHES);
                        ?>
                        <button type="button" class="btn btn-primary btn-circle-lg waves-effect waves-circle waves-float pull-right app-alert app-dialogs-puts" style="position: absolute; right: 0; top: 0;" data-type="post" data-dialogs-type="inputs" data-dialogs-endpoint="<?php echo route_to('api_posts_form'); ?>" data-dialogs-event="click">
                            <a href="javascript: void(0)" style="color: white;">
                                <i class="material-icons" style="font-size: 30px !important; left: -14px !important; top: 4px !important;">add_to_photos</i>
                            </a>
                        </button>
                    </div>
                    <div class="body">
                        <div>
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active">
                                    <a href="#timeline" aria-controls="timeline" role="tab" data-toggle="tab" aria-expanded="true" app-load="timeline" app-load-execute="current" class="app-pages">
                                        <i class="material-icons">timeline</i>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#dm" aria-controls="dm" role="tab" data-toggle="tab" aria-expanded="true" app-load="dm" app-load-execute="loaded" class="app-pages">
                                        <i class="material-icons">message</i>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#search" aria-controls="search" data-toggle="tab" aria-expanded="true" app-load="search" app-load-execute="loaded" class="app-pages">
                                        <i class="material-icons">location_searching</i>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade active in" id="timeline">
                                    <?php if(!empty($timelines)): ?>
                                    <div class="panel panel-default panel-post">
                                        <div class="panel-heading">
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href="javascript:void(0)">
                                                        <img src="" alt="User Image">
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">
                                                        <a href="javascript: void(0);"></a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <div class="post">
                                                <div class="post-heading">
                                                    <p>
                                                        Text TextText TextText TextText TextText TextText TextText Text<br/>
                                                        Text TextText Text
                                                    </p>
                                                </div>
                                                <div class="post-content">
                                                    <p>
                                                        Text TextText TextText TextText TextText TextText TextText Text<br/>
                                                        Text TextText Text
                                                    </p>
                                                    
                                                    <img src="" alt="post-1">
                                                    <img src="" alt="post-2">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-footer">
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);">
                                                        <i class="material-icons">favorite</i>
                                                        <span>10 favorite.</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">
                                                        <i class="material-icons">comment</i>
                                                        <span>4 Comments.</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <?php
                                                        echo form_input([
                                                            'type' => 'input',
                                                            'id' => 'comment',
                                                            'name' => 'comment',
                                                            'class' => 'form-control',
                                                            'placeholder' => 'Comments...'
                                                        ]);
                                                    ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php else: ?>
                                        <p>no posts... follow as</p>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $this->endSection(); ?>
