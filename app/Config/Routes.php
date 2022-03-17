<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');



// Product
$routes->get('product', 'Product::index');
$routes->group('api', function($routes) {
    /** @var \CodeIgniter\Router\RouteCollection $routes */
    $routes->get('posts/form', 'Api::posts_form', ['as' => 'api_posts_form']);
});


// User
$routes->group('user', function($routes) {
    /** @var \CodeIgniter\Router\RouteCollection $routes */
    $routes->get('create_table', 'User::connection');
    $routes->get('mypage', 'User::mypage');
    $routes->get('mypage/posts', 'User::myposts');
    $routes->get('signout', 'User::signout', ['as' => 'user_signout']);
    $routes->add('signin', 'User::signin', ['as' => 'user_signin']);
    $routes->add('signup', 'User::signup', ['as' => 'user_signup']);
});

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
