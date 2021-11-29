<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

    // Public Routes
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    
    
    // Admin
    Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function() {
        Route::get('/checkingAuthenticated', function(){
            return response()->json(['message'=>'You are in', 'status'=>200], 200);
        });

        Route::post('/add-student' , [StudentController::class, 'store']);
        Route::post('/updatestudent/{id}' , [StudentController::class, 'update']);
        Route::get('/add-result/{id}' , [StudentController::class, 'addresult']);
        Route::delete('/delete-student/{id}' , [StudentController::class, 'destroy']);
        
        Route::post('logout' ,  [AuthController::class, 'logout']);
    });
    
    
    Route::middleware(['auth:sanctum'])->group(function() {
        
        Route::post('/updateresult/{id}' , [ResultController::class, 'update']);
        Route::post('/result', [ResultController::class, 'store']);
        Route::get('/edit-student/{id}' , [StudentController::class, 'edit']);
        Route::get('/students/search/{name}', [StudentController::class, 'search']);
        Route::get('/editResult/{id}', [ResultController::class, 'edit']);
        Route::get('view-result', [ResultController::class, 'index']);
        Route::delete('/resultDelete/{id}', [ResultController::class, 'destroy']);
        Route::get('/students' , [StudentController::class, 'index']);
        // Route::get('/studentsstatus' , [StudentController::class, 'indexstatus']);
        
        Route::post('logout' ,  [AuthController::class, 'logout']);
    });


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
