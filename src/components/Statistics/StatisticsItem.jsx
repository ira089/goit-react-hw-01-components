import styles from './Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};

export default StatisticsItem;
