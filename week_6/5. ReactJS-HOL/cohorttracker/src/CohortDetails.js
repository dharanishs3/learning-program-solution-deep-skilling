import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const { name, startDate, endDate, status } = cohort;

  return (
    <div className={styles.box}>
      <h3 className={status === 'ongoing' ? styles.green : styles.blue}>
        {name}
      </h3>
      <dl>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
        <dt>End Date:</dt>
        <dd>{endDate}</dd>
        <dt>Status:</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;