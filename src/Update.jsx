import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    useEffect(() => {
        axios.get("http://localhost:3000/users/" + id)
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err))
    }, [])
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3000/users/" + id, user)
            .then((res) => {
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (<>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Update User</h1>
                <form onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <label htmlFor="name">Name : </label>
                        <input type="text" name="name" className="form-control" placeholder='Enter Name'
                            value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="username">UserName : </label>
                        <input type="text" name="username" className="form-control" placeholder='Enter UserName'
                            value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" className="form-control" placeholder='Enter Email'
                            value={user.email} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone : </label>
                        <input type="number" name="phone" className="form-control" placeholder='Enter Phone'
                            value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="website">Website : </label>
                        <input type="text" name="website" className="form-control" placeholder='Enter Website'
                            value={user.website} onChange={(e) => setUser({ ...user, website: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>

    </>);
}

export default Update;