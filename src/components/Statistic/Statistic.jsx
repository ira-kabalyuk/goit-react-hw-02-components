import PropTypes from 'prop-types';
import styles from './Statistic.module.scss';
import { Section } from '../Section';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  const listElements = [
    { id: '1', text: 'Good', value: good, element: '' },
    { id: '2', text: 'Neutral', value: neutral, element: '' },
    { id: '3', text: 'Bad', value: bad, element: '' },
    { id: '4', text: 'Total', value: total, element: '' },
    {
      id: '5',
      text: 'Positive Feedback',
      value: positivePercentage,
      element: '%',
    },
  ];
  return (
    <Section title="Statistics" className={styles.statistics}>
      {listElements.map(({ id, value, text, element }) => (
        <p key={id} className={styles.value}>
          <span className={styles.text}>{text}:</span>
          {value}
          {element}
        </p>
      ))}
    </Section>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistic };
