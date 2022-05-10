import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children, className }) => {
  return (
    <div className={className}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Section };
