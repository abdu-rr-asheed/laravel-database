<?php

namespace App\Http\Controllers;

use App\Models\result;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResultController extends Controller
{
    public function index()
    {
        $result = result::all();
        return response()->json([
            'status' => 200,
            'result' => $result,
        ]);
    }

    public function addresult($id)
    {
        $student = Student::find($id);
        return response()->json([
            'status' => 200,
            'student' => $student,
        ]);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'student_id' => 'required',
            'knowledge_area' => 'required',
            'level' => 'required',
            'score' => 'required',
            'assessor' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {

            $result = new result;
            $result->student_id = $request->input('student_id');
            $result->knowledge_area = $request->input('knowledge_area');
            $result->level = $request->input('level');
            $result->score = $request->input('score');
            $result->assessor = $request->input('assessor');
            $result->overrall = $request->input('overrall') == true ? 'pass' : 'fail';

            // $asd = ($result->student_id = $request->input('student_id'));
            // $editStatus = Student::find($asd);
            // $editStatus->edit_status = 1;


            $result->save();
            $editStatus->update();

            return response()->json([
                'status' => 200,
                'message' => 'Student Result Added successfully',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'student_id' => 'required',
            'knowledge_area' => 'required',
            'level' => 'required',
            'score' => 'required',
            'assessor' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {

            $result = result::find($id);
            if ($result) {
                $result->student_id = $request->input('student_id');
                $result->knowledge_area = $request->input('knowledge_area');
                $result->level = $request->input('level');
                $result->score = $request->input('score');
                $result->assessor = $request->input('assessor');
                $result->overrall = $request->input('overrall') == true ? 'pass' : 'fail';
            }
            $result->update();

            return response()->json([
                'status' => 200,
                'message' => 'Student Result Added successfully',
            ]);
        }
    }

    public function edit($id)
    {

        $result = result::find($id);
        return response()->json([
            'status' => 200,
            'result' => $result,
        ]);
    }

    public function destroy($id)
    {
        $result = result::find($id);
        $result->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Student Result Deleted successfully',
        ]);
    }
}
