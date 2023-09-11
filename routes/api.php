<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[UserController::class,'register']);
Route::post('logiin',[UserContrroller::class,'login']);
Route::post('addproduct',[ProductController::class,'add_product']);
Route::get('list_products',[ProductController::class,'list_products']);
Route::delete('delete/{id}',[ProductController::class,'delete']);
Route::get('product/{id}',[ProductController::class,'get_product']);
Route::get('search/{key}',[ProductController::class,'search']);
