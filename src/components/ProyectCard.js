import React from 'react';
import Image from 'next/image';
import styles from '@componentStyle/ProyectCard.module.css';
function ProyectCard({
  hrefProyect,
  hrefImage,
  title,
  arrIconTecnologies = [],
  phone,
}) {
  return (
    <a
      href={hrefProyect}
      className={`${styles.card} ${phone && styles.cardPhone}`}
      rel="noreferrer"
      target="_blank"
    >
      <div className={styles.card__image}>
        <Image
          src={hrefImage}
          alt={title}
          layout="fill"
          loading="lazy"
          objectFit="fill"
        />
      </div>
      <div className={styles.card__information}>
        <p className={styles.cart__informationTitle}>{title}</p>
        <span className={styles.cart__informationTechnologies}>
          {arrIconTecnologies?.map((icon, idx) => (
            <div key={idx}>{icon}</div>
          ))}
        </span>
      </div>
    </a>
  );
}

export default ProyectCard;
