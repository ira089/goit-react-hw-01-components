import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';
import GetRandomColor from './RandomColor';

const Statistics = ({ title, items }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statlist}>
        {items.map(item => (
          <li
            className={styles.item}
            style={{ backgroundColor: GetRandomColor() }}
            key={item.id}
          >
            <StatisticsItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
