import StatistisItem from './StatisticsItem';
// const Statistics = ({ items }) => {
//   const elements = items.map(item => (
//     <StatistisItem
//       key={item.id}
//       label={item.label}
//       percentage={item.percentage}
//     />
//   ));
//   return (
//     <>
//       <ul className="stat-list">{elements}</ul>
//     </>
//   );
// };
const Statistics = ({ label, percentage }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
