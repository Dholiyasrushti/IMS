import React from 'react';
import Header from './Header';
import { Container, Row ,Col} from 'react-bootstrap';
import Fromdata from './Fromdata';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 


function AddCourse() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    
    const addcourse = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/course/course', {
             name,
        },{headers: {
            authorization: token
        },
     } )
        .then(function(res) {
            console.log(res.data);
            navigate("/Dashboard"); 
        })
        .catch(function(err) {
            console.log(err);
        });
    }
    return (
        <div>
            <Header></Header>
            <Container  fluid className="ps-0">
                <Row className="gx-0">
                <Col xl={2} lg={3} md={4}   className="bg-black height text-white text-opacity-50 border-top border-secondary">
                        
                        <Fromdata></Fromdata>
                    </Col>
                    <Col className='d-flex justify-content-center '> 
                        
                        <div    >
                        <form method='post' className='my-5 '  onSubmit={addcourse} >
                            <table border={1} className=' border-1  border-black p-3 rounded-2'>
                                <tr className='my-3 text-center'>
                                    <th colSpan={2} className='h1 py-3'>ADD COURSE</th>  
                                </tr>
                                <tr className='my-3'>
                                    <td className='py-1'>Name:</td>
                                    <td className='py-1'><input type='text' name='name' value={name} className='w-100' onChange={(e) => setName(e.target.value)} required></input></td>
                                </tr>
                                
                                <tr className='text-center'>
                                    <td colSpan={2} className='py-1'>
                                        <button className='bg-black text-white rounded-2 px-3 py-2' type='submit'>Submit</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddCourse;