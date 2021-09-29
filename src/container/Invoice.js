import React,{useState} from 'react';
import './Invoice.css';

const Invoice = () => {

    const [show, setShow] = useState()
    const hide = (e) => {
        if(e.target.name) {
            console.log("GST")
        }
    }

    const change = (e) => {
        setShow({[e.target.name]: e.target.value})
    }

 
    return (
        <div className="container1">
            <section className="main-section">
                <div className="row pre-wrap">
                    <label>Select Country</label>
                    <select onchange={change} name={show}>
                        <option value="India">India</option>
                        <option value="US">US</option>
                    </select>
                    <div className="left-wrap">
                        <input type="text" className="custom-input-small" placeholder="Your Company" />
                        <input type="text" className="custom-input-small" placeholder="Your Name" />
                        <input type="text" className="custom-input-small" placeholder="Company Address" />
                        <input type="text" className="custom-input-small" placeholder="City, State Zip" />


                        <input type="text" className="custom-input-small" placeholder="USA" />

                    </div>
                    <div className="right-wrap">
                        <h1 className="">Invoice</h1>
                    </div>
                </div>
                <div className="row pre-wrap">
                    <div className="left-wrap invoice-bill-mt">
                        <h4 className="mb-0">Bill To:</h4>
                        <input type="text" className="custom-input-small" placeholder="Your Client's Company" />
                        <input type="text" className="custom-input-small" placeholder="Client's Address" />
                        <input type="text" className="custom-input-small" placeholder="City, State Zip" />
                        <input type="text" className="custom-input-small" placeholder="USA" />
                    </div>
                    <div className="right-wrap invoice-bill-mt invoice-bill-section">
                        <p><div><b>Invoice</b></div> <span>
                            <input type="text" className="custom-input-small w-auto mt-0" placeholder="INV-22" />
                        </span></p>
                        <p><div><b>Invoice Date</b></div> <span><input type="text" className="custom-input-small w-auto mt-0" placeholder="Sep 13,2021" /></span></p>
                        <p><div><b>Due Date</b></div> <span><input type="text" className="custom-input-small w-auto mt-0" placeholder="Sep 13,2021" /></span></p>
                    </div>
                </div>
                <table className="custom-tbl pre-wrap">
                    <thead>
                        <tr>
                            <th>Item Description</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <textarea rows="4" className="custom-textarea w-auto mt-0" placeholder="Brochure Design"></textarea>
                            </td>
                            <td><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="1" /></td>
                            <td><input type="text"  className="custom-input-small w-auto mt-0 text-right"  placeholder="1000.00" /></td>
                            <td><input type="text"  className="custom-input-small w-auto mt-0 text-right" placeholder="2000.00" /></td>
                        </tr>
                        <tr>
                            <td>
                                <textarea rows="4" className="custom-textarea w-auto mt-0" placeholder="Brochure Design"></textarea>
                            </td>
                            <td><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="1" /></td>
                            <td><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="1000.00" /></td>
                            <td><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="2000.00" /></td>
                        </tr>
                        <tr>
                            <td>
                                <textarea rows="4" className="custom-textarea w-auto mt-0" placeholder="Brochure Design"></textarea>
                            </td>
                            <td><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="1" /></td>
                            <td><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="1000.00" /></td>
                            <td><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="2000.00" /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="row pre-wrap">
                    <div className="left-wrap"></div>
                    <div className="right-wrap subtotal-box">
                        <div>
                            <p className="float-left"><input type="text" className="custom-input-small w-auto mt-0" placeholder="Sub Total" /></p>
                            <p className="float-right"><b><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="200.00" /></b></p>
                        </div>
                        <div className="clear-both"></div>
                        <div>
                            <p className="float-left"><input type="text" className="custom-input-small w-auto mt-0" placeholder="Sales Tax (10%)" /></p>
                            <p className="float-right"><b><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="20.00" /></b></p>
                        </div>
                        <div className="clear-both"></div>
                        <div className="sub-total sub-total-input">
                            <p className="float-left"><input type="text" className="custom-input-small w-auto mt-0" placeholder="TOTAL" /></p>
                            <p className="float-right"><b><input type="text" className="custom-input-small w-auto mt-0 text-right" placeholder="200.00" /></b></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="w-100 px-15 mt-15">
                        <input type="text" className="custom-input-small mt-0 w-100" placeholder="Notes" />
                    </div>
                </div>
                <div className="row">
                    <div className="w-100 px-15 my-15">
                        <input type="text" className="custom-input-small mt-0 w-100" placeholder="It was great doing business with you." />
                    </div>
                </div>
                <div className="row">
                    <div className="w-100 px-15 mt-50">
                        <input type="text" className="custom-input-small mt-0 w-100" placeholder="Terms & Conditions" />
                    </div>
                </div>
                <div className="row">
                    <div className="w-100 px-15 my-15">
                        <input type="text" className="custom-input-small mt-0 w-100" placeholder="Please make the payment by the due date." />
                    </div>
                </div>
            </section>
        </div>
    )



}

export default Invoice;