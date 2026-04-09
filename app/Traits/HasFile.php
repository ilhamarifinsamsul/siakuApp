<?php
namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

trait HasFile{
    public function upload_file(Request $request, string $column,  string $folder): ?string
    {
        return $request->hasFile($column) ? $request->file($column)->store($folder) : null;
    }

    public function update_file(Request $request, Model $model, string $column,  string $folder): ?string
    {
        if ($request->hasFile($column)) {
            $this->delete_file($model, $column);

            $thumbnail = $request->file($column)->store($folder);

        } else {
            $thumbnail = $model->$column;
        }

        return $thumbnail;
    }

    // hapus file
    public function delete_file(Model $model, string $column): void
    {
        // hapus file lama
        if ($model->$column) {
            Storage::delete($model->$column);
        }
    }
}



?>
