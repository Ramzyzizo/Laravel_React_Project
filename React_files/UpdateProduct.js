import Header from './Header'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
function UpdateProduct(){
    const params = useParams();
    console.log(params.id);
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/product/`+params.id);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [params.id]);
    return(
        <div>
            <Header/>
            <h1>Update Product</h1>
            <input type="text" defaultValue={data.name}/> <br/><br/>
            <input type="text" defaultValue={data.price}/> <br/><br/>
            <input type="text" defaultValue={data.description}/> <br/><br/>
            <input type="file" defaultValue={data.file_path}/> <br/><br/>
            <img style={{width:100}} src={"http://localhost:8000/"+data.file_path } alt=""/>  <br/><br/>
            <button>Update product</button>
        </div>
    )
}

export default UpdateProduct