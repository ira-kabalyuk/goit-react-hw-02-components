import PropTypes from 'prop-types';
import styles from './Notification.module.scss'

const Notification  = ({ message }) => {
  return (
    <p className={styles.message}>{message}</p>
  )
}
  
Notification.propTypes = {
  children: PropTypes.node.isRequired,
}

export {Notification}