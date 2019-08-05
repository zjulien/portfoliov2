<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index()
    {
        return $this->render('index.html.twig');
    }

    /**
     * @Route("/cv", name="cv")
     */
    public function cv(){

        return $this->render('../../assets/medias/curriculum_vitae_zinet_julien.pdf');
    }
}
