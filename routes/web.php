<?php

use App\Http\Controllers\ApplicationController;

Route::get('{any?}', ApplicationController::class)->where('any', '^(?!api).*$');
