import React from 'react';
import './Lists.css';

const Lists = ({ item, }) => {
  // console.log(item);
  return (
    
      item.map((i) => (
        <tr key={i.amount}>
          <th scope="row">1</th>
          <td>{i.date}</td>
          <td>{i.amount}</td>
          <td>{i.method}</td>
          <td>{i.remark}</td>
          {/* <td className='delete-btn' onClick={() => deleteBook(book.isbn)}>
         <i className="fa-solid fa-trash"></i> />
        </td> */}
        </tr>
      ))
    

  )
}

export default Lists