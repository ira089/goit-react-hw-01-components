import styles from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};

export default Statistics;
