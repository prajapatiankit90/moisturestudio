import React, { useState, useEffect } from "react";
import MSInput from "../../components/MSInput";
import "./Invoice.css";

const Invoice = () => {

  const defaultState = {
    client_company: "",
    client_address: "",
    client_contry: "",
    client_panno: "",
    client_gstno: "",
    invoice_no: "",
    invoice_date: "",
    due_date: "",
    country: "",
    sub_total: "0",
    sgst: "0",
    cgst: "0",
    total: "0",
    per: "18"
  };

  const [itemDes, setitemDes] = useState({ description: "", rate: "", qty: "", amount: "0" })
  const [country, setCountry] = useState([
    {
      name: "india"
    },
    {
      name: "US"
    }
  ]);
  const [invoiceDetail, setInvoiceDetail] = useState(defaultState);
  const [item, setItem] = useState([]);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setInvoiceDetail(prevInvoice => ({ ...prevInvoice, [name]: value }));
    setitemDes(prev => ({ ...prev, [name]: value }));

  };

  const Click = () => {
    const newAmount = {
      ...itemDes,
      amount: itemDes.qty * itemDes.rate
    };
    setItem(prev => [...prev, newAmount]);

    
  };

  useEffect(() => {
    setitemDes({
      description: " ", rate: " ", qty: " ", amount: "0" 
    })

    const sub = item.reduce((a, itm) => a + itm.amount, 0)
    const sgst = invoiceDetail.country === "india" ? (sub / invoiceDetail.per) * 100 : 0.00
    const cgst = invoiceDetail.country === "india" ? (sub / invoiceDetail.per) * 100 : 0.00
    const igst = invoiceDetail.country === "india" ? (sub / invoiceDetail.per) * 100 : 0.00

    setInvoiceDetail(invoiceDetail => ({
      ...invoiceDetail,
      sub_total: sub,
      sgst: sgst,
      cgst: cgst,
      igst: igst,
      total: sub + cgst + sgst + igst
    }));


  }, [item])

  const dataSubmit = () => {
    console.log(invoiceDetail)
  }

  const _eventDelete = (dIndex) => {
    const dataAfterDelete = item.filter((_, index) => index !== dIndex);
    setItem(dataAfterDelete);
  }

  return (
    <div className="container1">
      <section className="main-section">
        <div className="row">
          <div class="col-md-4">
            <h1 className="">Invoice</h1>
          </div>
          <div class="col-md-4 offset-md-4">
            <button className="btn btn-purple" onClick={() => dataSubmit()} >Save</button>
          </div>

        </div>
        <div className="row">


          <div className="col-md-6">
            <div className="main">
              <div className="gst-country company mb-10">
                <label>Select Country</label>
                <select onChange={handleChange} name="country" value={invoiceDetail.country}>
                  <option > Select Country</option>
                  {
                    country.map((item) => {
                      return (
                        <option value={item.name} >{item.name}</option>
                      )
                    })
                  }
                </select>
              </div>
              <label className="company">MOISTURE SOLUTION</label>
              <label className="company">
                403, SILVER BUSINESS POINT NR, VIP CIRCLE, OPP.ROYAL SQURE,
                UTRAN, SURAT-394105
              </label>

              <label className="company">
                GST NO :- 24ABQFM8005J1Z0 <br />
                PAN NO :- ABQFM8005J
              </label>

              <label className="company">
                E-Mail : moisturestudio@gmail.com{" "}
              </label>
              <label className="company">Contact No. : +91 7859835832 </label>
            </div>


          </div>


        </div>
        <div className="row pre-wrap">
          <div className="col-md-6 invoice-bill-mt">
            <h4 className="mb-0">Bill To:</h4>
            <MSInput
              page="invoice"
              type="text"
              name="client_company"
              className="custom-input-small"
              placeholder="Your Client's Company"
              dataValue={invoiceDetail.client_company}
              handleChange={handleChange}
            />
            <MSInput
              page="invoice"
              type="text"
              name="client_address"
              className="custom-input-small"
              placeholder="Client's Address"
              dataValue={invoiceDetail.client_address}
              handleChange={handleChange}
            />

            <MSInput
              page="invoice"
              type="text"
              name="client_country"
              className="custom-input-small"
              placeholder="Country"
              dataValue={invoiceDetail.client_country}
              handleChange={handleChange}
            />
            <MSInput
              page="invoice"
              type="text"
              name="client_panno"
              className="custom-input-small"
              placeholder="PAN NO"
              dataValue={invoiceDetail.client_panno}
              handleChange={handleChange}
            />
            <MSInput
              page="invoice"
              type="text"
              name="client_gstno"
              className="custom-input-small"
              placeholder="GST NO"
              dataValue={invoiceDetail.client_gstno}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-6  invoice-bill-mt invoice-bill-section">
            <p>
              <div>
                <b>Invoice No</b>

                <MSInput
                  page="invoice"
                  type="text"
                  name="invoice_no"
                  className="custom-input-small mt-1 mb-1 w-auto"
                  placeholder="INV-22"
                  dataValue={invoiceDetail.invoice_no}
                  handleChange={handleChange}
                />
              </div>
            </p>
            <p>
              <div>
                <b>Invoice Date</b>

                <MSInput
                  page="invoice"
                  type="date"
                  name="invoice_date"
                  className="custom-input-small mt-1 mb-1 w-auto"
                  dataValue={invoiceDetail.invoice_date}
                  handleChange={handleChange}
                />
              </div>
            </p>
            <p>
              <div>
                <b>Due Date</b>

                <MSInput
                  page="invoice"
                  type="date"
                  name="due_date"
                  className="custom-input-small w-auto mb-1 mt-1"
                  dataValue={invoiceDetail.due_date}
                  handleChange={handleChange}
                />
              </div>
            </p>
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
                <MSInput
                  type="textarea"
                  name="description"
                  rows="3"
                  className="custom-textarea w-auto mt-0"
                  placeholder="Item description"
                  dataValue={itemDes.description}
                  handleChange={handleChange}
                />
              </td>
              <td>
                <MSInput
                  page="invoice"
                  type="number"
                  name="qty"
                  className="custom-input-small w-auto mt-0 text-right"
                  placeholder="0"
                  value={itemDes.qty}
                  handleChange={handleChange}
                />
              </td>
              <td>
                <MSInput
                  page="invoice"
                  type="number"
                  name="rate"
                  className="custom-input-small w-auto mt-0 text-right"
                  placeholder="0.00"
                  dataValue={itemDes.rate}
                  handleChange={handleChange}
                />
              </td>
              <td>
                <label>{itemDes.rate * itemDes.qty}</label>
              </td>
              <td><i class="fa fa-plus addicon" onClick={() => Click()}></i></td>
            </tr>
            {item && item.map((el, i) => {
              return (
                <tr>
                  <td>
                    {el.description}
                  </td>
                  <td>
                    {el.qty}
                  </td>
                  <td>
                    {el.rate}
                  </td>
                  <td>
                    {el.amount}
                  </td>
                  <td>
                    <i onClick={() => _eventDelete(i)} className="fa fa-close icon" ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="row pre-wrap">
          <div className="left-wrap"></div>
          <div className="right-wrap subtotal-box">
            <div className="subtotal-div-box">
              <label className="company w-100">Sub Total</label>
              <label className="w-auto mt-0 text-right label-total">{invoiceDetail.sub_total}</label>

            </div>

            {invoiceDetail.country === "india" ?
              (
                <>
                  <div className="subtotal-div-box">
                    <label className="company">SGST <MSInput
                      page="invoice"
                      type="text"
                      name="per"
                      className="custom-input-small"
                      placeholder="0.00"
                      dataValue={invoiceDetail.per}
                      handleChange={handleChange} ></MSInput> (%)</label>
                    <label className=" w-auto mt-0 text-right label-total">{Math.round(invoiceDetail.sgst)}</label>
                  </div>
                  <div className="subtotal-div-box">
                    <label className="company">CGST <MSInput
                      page="invoice"
                      type="text"
                      name="per"
                      className="custom-input-small"
                      placeholder="0.00"
                      dataValue={invoiceDetail.per}
                      handleChange={handleChange} ></MSInput>(%)</label>
                    <label className=" w-auto mt-0 text-right label-total">{Math.round(invoiceDetail.cgst)}</label>
                  </div>
                  <div className="subtotal-div-box">
                    <label className="company">IGST <MSInput
                      page="invoice"
                      type="text"
                      name="per"
                      className="custom-input-small"
                      placeholder="0.00"
                      dataValue={invoiceDetail.per}
                      handleChange={handleChange} ></MSInput>(%)</label>
                    <label className=" w-auto mt-0 text-right label-total">{Math.round(invoiceDetail.igst)}</label>
                  </div>
                </>
              ) : null}

            <div className="subtotal-div-box">

              <label className="company">Total</label>

              <label className="w-auto mt-0 text-right label-total">{Math.round(invoiceDetail.total)}</label>

              {/* <MSInput
                    page="invoice"
                    type="text"
                    name="total"
                    className="custom-input-small w-auto mt-0 text-right"
                    placeholder="0.00"
                    dataValue={invoiceDetail && invoiceDetail.total}
                    handleChange={handleChange}
                  /> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w-100 px-15 mt-15">
            <label className="company">Bank Details</label>
          </div>
        </div>
        <div className="row">
          <div className="w-100 px-15 my-15">
            <label className="company">Bank Name : HDFC BANK</label> <br />
            <label className="company">Bank A/C : 50200060136820</label> <br />
            <label className="company">Bank IFSC : HDFC0004693</label>
          </div>
        </div>
        <div className="row">
          <div className="w-100 px-15 ">
            <label className="company"> Terms & Conditions</label>
          </div>
        </div>
        <div className="row">
          <div className="w-100 px-15">
            <label className="company">
              To be paid in full in maximum 3 Days after receving the invoice
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invoice;