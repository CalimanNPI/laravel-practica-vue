<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {
        $tasks = Task::all();
        return response()->json($tasks);
    }

    public function store(TaskRequest $request)
    {
        Task::create($request->validated());
        return response()->json([
            'message' => 'Added task'
        ]);
    }

    public function show(Task $task)
    {
        return response()->json($task);
    }

    public function update(TaskRequest $request, Task $task)
    {
        $task->update($request->validated());
        return response()->json([
            'message' => 'Updated task'
        ], 200);
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json([
            'message' => 'Deleted task'
        ], 200);
    }

    public function completed(Request $request)
    {
        mb_strlen()
        return response()->json([
            'message' => 'Updated task completed'
        ], 200);
    }
}
