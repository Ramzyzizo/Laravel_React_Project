import Header from './Header';
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Table} from "react-bootstrap";

function SearchProduct(){
    const [data,setData] = useState([])

    async function search(key){
        let response = await fetch(`http://localhost:8000/api/search/`+key);
        let result = await response.json();
        console.warn(result);

        setData(result);

    }
    async function deleteOperation(id){
        let result = await  fetch('http://localhost:8000/api/delete/'+id,{
            method:"DELETE"
        })
        result = await result.json();
        getdata()
        console.warn(result);
    }
    async function getdata(){
        let result = await fetch('http://localhost:8000/api/list_products');
        result = await result.json();
        setData(result)
    }
    return(
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
               <h1>Search Product</h1>
                <br/>
                <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product"/>
                <Table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                    <tbody>
                    {
                        data.map((item)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{width:300}} src={"http://localhost:8000/"+item.file_path}/></td>
                                <td> <span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span> </td>
                                <td>
                                    <Link to={"/update/"+item.id}>
                                        <span className="update">Update</span>
                                    </Link>

                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default SearchProduct