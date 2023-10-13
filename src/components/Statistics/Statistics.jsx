
import css from './Statistics.module.css'


const generateColor = () => {
  const generate = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${generate}`;
      };

const Statistics = ({stats,title = false}) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}    
 
        <ul className={css.statList} key={stats.id}>
          {stats.map(item => (
            <li style={{backgroundColor: generateColor()}} className={css.item} key={item.id}>{item.backgroundColor}
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          ))}
  </ul>
</section>
    )
}
export default Statistics;