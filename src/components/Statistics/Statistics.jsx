import StatistisItem from './StatisticsItem';
const Statistics = ({ items }) => {
  const elements = items.map(item => (
    <StatistisItem
      key={item.id}
      label={item.label}
      percentage={item.percentage}
    />
  ));
  return (
    <>
      <ul className="stat-list">{elements}</ul>
    </>
  );
};

export default Statistics;
