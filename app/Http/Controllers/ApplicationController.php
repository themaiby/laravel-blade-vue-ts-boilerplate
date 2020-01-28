<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
use Illuminate\View\View;

class ApplicationController extends Controller
{
    /**
     * @return ResponseFactory|Response|View
     */
    public function __invoke()
    {
        return view()->exists('index') ? view('index') : response();
    }
}
