import style from './StatisticsItem.module.css';

const StatisticsItem = ({data, icon : Icon}) => {
  return (
    <>
  <Icon size={30} />
  <span className={style.counter}>{data.total}</span>
  <p className={style.text}>{data.title}</p>
</>

  );
};

export default StatisticsItem;
