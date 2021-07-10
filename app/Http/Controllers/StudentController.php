<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class StudentController extends Controller
{
    public function index()
    {
        $student = Student::all();
        return response()->json([
            'status' => 200,
            'students' => $student,
        ]);
    }

    public function store(Request $request)
    {
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
        $student = Student::find($id);
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
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        $destination = 'images/students/'.$student->profile_photo;
            if (File::exists($destination)) {
                File::delete($destination);
            }
        $student->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Student Deleted successfully',
        ]);
    }
}
