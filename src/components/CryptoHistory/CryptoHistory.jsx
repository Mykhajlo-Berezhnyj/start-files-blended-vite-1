import style from './CryptoHistory.module.css'

const CryptoHistory = ({items}) => {
  return (
  <>
  <h2>CryptoHistory</h2>
<table className={style.table}>
  <thead className={style.thead}>
          <tr>{["№", "PRICE", "AMOUNT", "DATE"].map((value, index) => (
          <th className={style.th} key={index}>{value}</th>
    ))}
      {/* <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th> */}
    </tr>
  </thead>

  <tbody>{items.map(({id, price, amount, date}, index) => (
          <tr className={style.tr} key={id}>
      <td className={style.td}>{index+1}</td>
      <td className={style.td}>{price}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{new Date(date).toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })}</td>
    </tr>
    ))}
      {/* <td className={style.td}>1</td>
      <td className={style.td}>3190</td>
      <td className={style.td}>0.24843</td>
      <td className={style.td}>02/01/2022, 1:14 PM</td> */}
    
  </tbody>
</table>
    </>
  );
};

export default CryptoHistory;
