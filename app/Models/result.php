<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class result extends Model
{
    use HasFactory;
    protected $table = 'result_st';
    protected $fillable = [
        'student_id',
        'knowledge_area',
        'level',
        'score',
        'assessor',
        'overrall',
    ];

    protected $with = ['Student'];
    public function student()
    {
        return $this->belongsTo(Student::class,'student_id','id');
    }
}
