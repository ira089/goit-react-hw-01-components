import Statistics from './Statistics';

const StatisticsItem = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
};

export default StatisticsItem;
