<?php

namespace App\Http\Controllers;

use App\Models\result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResultController extends Controller
{
        public function index()
    {
        $result = result::all();
        return response()->json([
            'status'=>200,
            'result'=>$result,
        ]);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'student_id'=>'required',
            'knowledge_area'=>'required',
            'level'=>'required',
            'score'=>'required',
            'assessor'=>'required',
            'overrall'=>'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' =>422,
                'errors' =>$validator->messages(),
            ]);
        } else {
            
            $result = new result;
            $result -> student_id = $request->input('student_id');
            $result -> knowledge_area = $request->input('knowledge_area');
            $result -> level = $request->input('level');
            $result -> score = $request->input('score');
            $result -> assessor = $request->input('assessor');
            $result -> overrall = $request->input('overrall');
            $result -> save();
    
            return response()->json([
                'status' => 200,
                'message' => 'Student Result Added successfully',
            ]);
                    
        }
        
    }
}
