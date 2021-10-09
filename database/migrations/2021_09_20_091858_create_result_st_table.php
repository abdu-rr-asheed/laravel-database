<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultStTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('result_st', function (Blueprint $table) {
            $table->id();
            $table->string('student_id');
            $table->string('knowledge_area');
            $table->string('level');
            $table->string('score');
            $table->string('assessor');
            $table->string('overrall');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('result_st');
    }
}
