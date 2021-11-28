<?php

namespace App\Models;

use Carbon\Carbon;
// use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = 'students';
    protected $fillable = [
        'first_Name',
        'last_Name',
        'email',
        'industry',
        'profile_photo',
        'edit_status',
    ];

    protected $dateFormat = 'd/m/Y';
}
