import React from 'react';
import './App.css';
import { useState } from 'react';
function Form() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [pro, setPro] = useState("");
    function getFormData(e) {
        console.warn(name, tnc, pro)
        e.preventDefault();
    }
    return (
        <div className='Form'>
            <p className='mt-5'>  <strong>Form in react Js</strong>  </p>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Enter Your Name:' onChange={(e) => setName(e.target.value)} />
                <br></br>
                <select onChange={(e) => setPro(e.target.value)}>
                    <option selected disabled>Province</option>
                    <option>Punjob</option>
                    <option>Sindh</option>
                    <option>Balochistan</option>
                    <option>KPK</option>
                </select>
                <br></br>
                {/* <br></br>
                <br></br> */}
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />  <span>Accept terms and conditions</span>
                <br></br>
                <button type='Submit'>Submit</button>

            </form>

        </div>
    );
}
export default Form;import React from 'react';
import './App.css';
import { useState } from 'react';
function Form() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [pro, setPro] = useState("");
    function getFormData(e) {
        console.warn(name, tnc, pro)
        e.preventDefault();
    }
    return (
        <div className='Form'>
            <p className='mt-5'>  <strong>Form in react Js</strong>  </p>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Enter Your Name:' onChange={(e) => setName(e.target.value)} />
                <br></br>
                <select onChange={(e) => setPro(e.target.value)}>
                    <option selected disabled>Province</option>
                    <option>Punjob</option>
                    <option>Sindh</option>
                    <option>Balochistan</option>
                    <option>KPK</option>
                </select>
                <br></br>
                {/* <br></br>
                <br></br> */}
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />  <span>Accept terms and conditions</span>
                <br></br>
                <button type='Submit'>Submit</button>

            </form>

        </div>
    );
}
export default Form;