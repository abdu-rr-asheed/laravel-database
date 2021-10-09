<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public Routes
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/result', [ResultController::class, 'store']);
    Route::get('view-result', [ResultController::class, 'index']);

// Admin
Route::middleware(['auth:sanctum'])->group(function() {
    Route::get('/checkingAuthenticated', function(){
        return response()->json(['message'=>'You are in', 'status'=>200], 200);
    });
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
