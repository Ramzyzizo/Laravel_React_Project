<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function add_product(Request $request){
        $product = Product::create(['name'=>$request->name,'price'=>$request->price,
        'description'=>$request->desc,'file_path'=>$request->file('file')->store('product')]);
        return $product;
    }

    public function list_products(){
        return Product::all();
    }

    public function delete($id){
        $result = Product::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"product has been deleted."];
        }
        else{
            return ["result"=>"Operation failed"];
        }
    }

    public function get_product($id){
        return Product::find($id);
    }

    public function search($key){
        return Product::where('name','Like',"%$key%")->get();
    }
}
