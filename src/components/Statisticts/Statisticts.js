import PropTypes from "prop-types";
import StatisticList from "./StatisticList";
import s from "../Statisticts/Statisticts.module.css";
const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
      {stats.map((el) => (
        <StatisticList key={el.id} stats={el} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = { title: PropTypes.string, stats: PropTypes.array };

export default Statistics;
