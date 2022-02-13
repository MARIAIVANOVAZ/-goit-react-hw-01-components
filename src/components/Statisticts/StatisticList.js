import PropTypes from "prop-types";
import s from "../Statisticts/Statisticts.module.css";
const StatisticList = ({ stats }) => (
  <li className={s.item}>
    <span className={s.label}>{stats.label}</span>
    <span className={s.percentage}>{stats.percentage}%</span>
  </li>
);

StatisticList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatisticList;
