import Header from './Header';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function AddProduct(){
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    async function addProduct(){
        const formData = new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('desc',desc);
        let result =  await fetch("http://localhost:8000/api/addproduct",{
            method:'Post',
            body:formData
        })
        alert("Data has been saved.")
    }

    return(
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <input type="text" className="form-control" placeholder="Name"
                onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="file" className="form-control" placeholder="file"
                       onChange={(e)=>setFile(e.target.files[0])}/><br/>
                <input type="text" className="form-control" placeholder="price"
                       onChange={(e)=>setPrice(e.target.value)}/><br/>
                <input type="text" className="form-control" placeholder="description"
                       onChange={(e)=>setDesc(e.target.value)}/><br/>
                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>

        </div>
    )
}

export default AddProduct