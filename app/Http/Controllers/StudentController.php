<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
// use App\Models\result;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index()
    {
        $student = Student::paginate(6);
        return response()->json([
            'status' => 200,
            'students' => $student,
        ]);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'first_Name'=>'required|max:191',
            'last_Name'=>'required|max:191',
            'email'=>'required|max:191',
            'industry'=>'required|max:191',
            'profile_photo'=>'required|image|mimes:jpeg,png,jpg|dimensions:ratio=1/1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' =>422,
                'errors' =>$validator->messages(),
            ]);
        } else {
            
            $student = new Student;
            $student -> first_Name = $request->input('first_Name');
            $student -> last_Name = $request->input('last_Name');
            $student -> email = $request->input('email');
            $student -> industry = $request->input('industry');
            if ($request->hasFile('profile_photo')) {
                $file = $request->file('profile_photo');
                $extention = $file->getClientOriginalExtension();
                $filename = time().'.'.$extention;
                $file->move('images/students/' , $filename);
                $student->profile_photo = $filename;
            }
            $student -> save();
    
            return response()->json([
                'status' => 200,
                'message' => 'Student Added successfully',
            ]);
                    
        }
        
    }

    public function edit($id)
    {
        $student = Student::find($id);
        return response()->json([
            'status'=> 200,
            'student'=> $student,
        ]);
    }

    public function update(Request $request , $id)
    {


        $validator = Validator::make($request->all(),[
            'first_Name'=>'required|max:191',
            'last_Name'=>'required|max:191',
            'email'=>'required|max:191',
            'industry'=>'required|max:191',
            // 'profile_photo'=>'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' =>422,
                'errors' =>$validator->messages(),
            ]);
        } else {
            
            $student = Student::find($id);
            if ($student) {
            
            $student -> first_Name = $request->input('first_Name');
            $student -> last_Name = $request->input('last_Name');
            $student -> email = $request->input('email');
            $student -> industry = $request->input('industry');
            if ($request->hasFile('profile_photo')) {
                $destination = 'images/students/'.$student->profile_photo;
                if (File::exists($destination)) {
                    File::delete($destination);
                }
                $file = $request->file('profile_photo');
                $extention = $file->getClientOriginalExtension();
                $filename = time().'.'.$extention;
                $file->move('images/students/' , $filename);
                $student->profile_photo = $filename;
            }
            $student -> update();
    
            return response()->json([
                'status' => 200,
                'message' => 'Student Updated successfully',
            ]);

            } else {
                return response()->json([
                'status' => 404,
                'message' => 'Id Not Found',
            ]);
            }
                    
        }



        // ............................
        // $student = Student::find($id);

        // if ($student) {

        //     $student -> first_Name = $request->input('first_Name');
        //     $student -> last_Name = $request->input('last_Name');
        //     $student -> email = $request->input('email');
        //     $student -> industry = $request->input('industry');
        //     if ($request->hasFile('profile_photo')) {
        //         $destination = 'images/students/'.$student->profile_photo;
        //         if (File::exists($destination)) {
        //             File::delete($destination);
        //         }
        //         $file = $request->file('profile_photo');
        //         $extention = $file->getClientOriginalExtension();
        //         $filename = time().'.'.$extention;
        //         $file->move('images/students/' , $filename);
        //         $student->profile_photo = $filename;
        //     }
            
        //     $student ->update();

        //     return response()->json([
        //         'status' => 200,
        //         'message' => 'Student Added successfully',
        //     ]);

        // } else {
        //     return response()->json([
        //     'status' => 404,
        //     'message' => 'Student not found',
        // ]);
        // }


        // $student = Student::find($id);
        // $student -> first_Name = $request->input('first_Name');
        // $student -> last_Name = $request->input('last_Name');
        // $student -> email = $request->input('email');
        // $student -> industry = $request->input('industry');
        // if ($request->hasFile('profile_photo')) {
        //     $destination = 'images/students/'.$student->profile_photo;
        //     if (File::exists($destination)) {
        //         File::delete($destination);
        //     }
        //     $file = $request->file('profile_photo');
        //     $extention = $file->getClientOriginalExtension();
        //     $filename = time().'.'.$extention;
        //     $file->move('images/students/' , $filename);
        //     $student->profile_photo = $filename;
        // }
        // $student->save();

        // return response()->json([
        //     'status' => 200,
        //     'message' => 'Student Updated successfully',
        // ]);
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        // $result = result::where('student_id',$id)->first();
        $destination = 'images/students/'.$student->profile_photo;
            if (File::exists($destination)) {
                File::delete($destination);
            }
        $student->delete();
        // $result->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Student Deleted successfully',
        ]);
    }
    public function search($name)
    {
        return Student::where('last_Name', 'Like', '%'.$name.'%')->get();
    }
}
