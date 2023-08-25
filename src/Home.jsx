import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    },[])

    const handleDelete=(id)=>{
        const confirm=window.confirm("Would you like to delete ?");
        if (confirm) {
            axios.delete("http://localhost:3000/users/"+id)
            .then((res)=>{
                navigate('/');
            })
            .catch(err => console.log(err))
        }
    }
    return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light mt-5 mx-auto'>
        <h1>List Of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>+Add</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>
                                    <Link to={`/read/${item.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                    <button onClick={(e)=>{handleDelete(item.id)}} className='btn btn-sm btn-danger me-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>);
}

export default Home;