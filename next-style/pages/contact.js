import React from 'react'
import styles from "../styles/Contact.module.css"
import stylesscss from "../styles/Contact.module.scss"

const contact = () => {
  return (
    <div className={styles.hightlights}>
         
        <h2>
        contact

        </h2>


        <h3 className={stylesscss.highlights}>Hey, how you doing ?</h3>

        <button className='btn btn-success'> success </button>
        </div>
  )
}

export default contact