import React, { useEffect, useState } from 'react';
import Lists from '../Lists/Lists';
import './ReceipeForm.css';



// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('items');
  console.log(data)
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

const ReceipeForm = () => {
  const [item, setItem] = useState(getDatafromLS())
  console.log(item)
  const [date, setDate] = useState(" ")
  const [amount, setAmount] = useState(" ")
  const [method, setMethod] = useState(" ")
  const [remark, setRemark] = useState(" ")

  const handleForm = (e) => {
    e.preventDefault()
    let formItems = {
      date,
      amount,
      method,
      remark
    }

    setItem([...item, formItems])
    setAmount('')
    setMethod('')
    setRemark('')

  }


  // set item to the locastorage 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(item))
  }, [item])

  

  return (
    <div className="ReceipeForm">
      <div className="formbox">
        <p className="title">Receipt Details</p>
        <form onSubmit={handleForm}>
          {/* date */}
          <div className="inputBox">
            <div className="d-flex justify-content-start align-items-center">
              <p className="date-title">Date<span className="star">*</span></p>
              <input type="text" placeholder="Enter Date" className="form-control date" required onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
          {/* amount */}
          <div className="inputBox">
            <div className="d-flex justify-content-start align-items-center">
              <p className="amount-title">Amount<span className="star">*</span></p>
              <input type="number" placeholder="Enter Amount (in INR)" className="form-control amount" required onChange={(e) => setAmount(e.target.value)} />
            </div>
          </div>
          {/* payment method */}
          <div className="inputBox">
            <div className="d-flex justify-content-start align-items-center">
              <p className="amount-title">Paymnet method<span className="star">*</span></p>
              <select className="form-select cash" aria-label="Default select example" onChange={(e) => setMethod(e.target.value)}>
                <option value="cash" onChange={(e) => setMethod(e.target.value)}>Cash</option>
                <option value="Bank" onChange={(e) => setMethod(e.target.value)}>Bank</option>
              </select>
            </div>
          </div>
          {/* remark */}
          <div className="inputBox">
            <div className="d-flex justify-content-start align-items-center">
              <p className="amount-title">Remark</p>
              <input type="text" placeholder="Enter Remark" className="form-control remark" onChange={(e) => setRemark(e.target.value)} />
            </div>
          </div>

          {/* button container */}
          <div className="btnBoxes">
            <button className="btn-cancel">CANCEL <br /> <span className="esc">(ESC)</span></button>
            <button className="btn-submit" type="submit" >SUBMIT <br /> <span className="sub">(⌘ S)</span></button>
          </div>
        </form>
      </div>
      <div className="list-container container mt-5">
        {
          // item.length > 0 && <>
            
          // </>
          <div className="list-container container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Paymnet method</th>
                    <th scope="col">Remark</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <Lists item={item} />
                </tbody>
              </table>
            </div>
        }
        {item.length < 1 && <div>No receipt are added yet</div>}
      </div>
    </div>
  )
}

export default ReceipeForm