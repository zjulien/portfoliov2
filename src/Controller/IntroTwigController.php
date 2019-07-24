<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IntroTwigController extends AbstractController
{
    /**
     * @Route("/intro/twig", name="intro_twig")
     */
    public function index()
    {
        return $this->render('intro_twig/index.html.twig', [
            'controller_name' => 'IntroTwigController',
        ]);
    }
}
