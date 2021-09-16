<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::resource('products', ProductController::class);

// Route::get('/products', [ProductController::class, 'index']);
// Route::get('/products/{id}', [ProductController::class, 'show']);


// Protected Routes

// Route::group(['middleware' => ['auth:sanctum']], function () {
    // Route::post('/products', [ProductController::class, 'store']);    
    // Route::put('/products/{id}', [ProductController::class, 'update']);    
    // Route::delete('/products/{id}', [ProductController::class, 'destroy']);    
    //     Route::post('/logout', [AuthController::class, 'logout']);
    // });
    
    // Route::get('/products', [ProductController::class, 'index']);
    // Route::post('/products', [ProductController::class, 'store']);
    
// Public Routes
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

// Admin
Route::middleware(['auth:sanctum'])->group(function() {
    Route::get('/checkingAuthenticated', function(){
        return response()->json(['message'=>'You are in', 'status'=>200], 200);
    });
});
    
//logout
Route::middleware(['auth:sanctum'])->group(function() {
    Route::post('logout' ,  [AuthController::class, 'logout']);
});


//Student

Route::get('/students' , [StudentController::class, 'index']);
Route::post('/add-student' , [StudentController::class, 'store']);
Route::get('/edit-student/{id}' , [StudentController::class, 'edit']);
Route::post('/updatestudent/{id}' , [StudentController::class, 'update']);
Route::delete('/delete-student/{id}' , [StudentController::class, 'destroy']);
Route::get('/students/search/{name}', [StudentController::class, 'search']);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
