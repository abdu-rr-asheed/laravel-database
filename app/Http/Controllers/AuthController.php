<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name'=>'required|max:191',
            'email'=>'required|email|max:191|unique:users,email',
            'password'=>'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        } else {
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);

            if ($user->role_as == 1) // 1 = Admin
                {
                    $role = 'admin';
                    $token = $user->createToken($user->email.'_AdminToken', ['server:admin'])->plainTextToken;
                } else {
                    $role = '';                    
                    $token = $user->createToken($user->email.'_Token',[''])->plainTextToken;
                }

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>"Registered Successfully",
                'role'=>$role,
            ]);
        }


        
        //

        // $fields = $request->validate([
        //     'name' => 'required|string',
        //     'email' => 'required|string|unique:users,email',
        //     'password' => 'required|string|confirmed'
        // ]);

        // $user = user::create([
        //     'name' => $fields['name'],
        //     'email' => $fields['email'],
        //     'password' => bcrypt($fields['password'])
        // ]);

        // $token = $user->createToken('myapptoken')->plainTextToken;

        // $respones = [
        //     'user' => $user,
        //     'token' => $token
        // ];

        // return response($respones, 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'=> 'required|email|max:191',
            'password'=> 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        } else {
            $user = User::where('email', $request->email)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid Credentils',
                ]);
            }else{

                if ($user->role_as == 1) // 1 = Admin
                {
                    $role = 'admin';
                    $token = $user->createToken($user->email.'_AdminToken', ['server:admin'])->plainTextToken;
                } else {
                    $role = '';                    
                    $token = $user->createToken($user->email.'_Token',[''])->plainTextToken;
                }

                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'token'=>$token,
                    'message'=>"Logged in Successfully",
                    'role'=>$role,
                ]);
            }
        }
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
    
        return response()->json([
            'status'=>200,
            'message' => 'Logged out Successfully'
        ]);
    }
}
