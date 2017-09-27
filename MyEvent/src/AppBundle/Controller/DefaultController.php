<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/" , name="home")
     */
    public function indexAction(Request $request)
    {
        $ip = $request->server->get('REMOTE_ADDR');
        $addr = unserialize(file_get_contents("http://www.geoplugin.net/php.gp?ip=163.5.101.177"));// for now i fixed my ip adress
        $city = urlencode($addr["geoplugin_city"]);
        $eventiUrl = "http://api.eventful.com/json/events/search?app_key=dGjdZqXwmGHPDRx5&category=music&location=$city&sort_order=popularity";
        $contents = file_get_contents($eventiUrl);
        $results=json_decode($contents,true);
//        var_dump($results);
        return $this->render('default/index.html.twig' , array(
            'results' => $results,
            'addr'   => $addr,
            'lol' => "&",
        ));

    }

}
