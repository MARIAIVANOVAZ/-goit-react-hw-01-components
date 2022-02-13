import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";
import s from "../TransactionHistory/TransactionHistory.module.css";
const TransactionHistory = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <TransactionHistoryItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
