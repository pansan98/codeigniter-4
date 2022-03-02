<?php
namespace App\Libraries;

use CodeIgniter\Autoloader\FileLocator;
use Config\View as ViewConfig;
use Psr\Log\LoggerInterface;
use Config\Bootstrap;

class View extends \Codeigniter\View\View {
    public $bootstrap = Bootstrap::class;

    public function __construct(ViewConfig $config, ?string $viewPath = null, ?FileLocator $loader = null, ?bool $debug = null, ?LoggerInterface $logger = null)
    {
        parent::__construct($config, $viewPath, $loader, $debug, $logger);
    }
}