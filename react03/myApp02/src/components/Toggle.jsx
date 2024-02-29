import React, { useState } from 'react'
import styles from './App.module.css'

function Toggle() {
  let para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime sed laboriosam dolore officia incidunt ipsum dolores optio quidem itaque, et, error distinctio accusamus, odio illo alias non deserunt cupiditate.`
  const [paraEx, setParaEx] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={`${styles.parent}`}>
      <p>
        {paraEx ? para : `${para.slice(0, 20)}...`}
        <a
          className={`${styles.link1}`}
          href="javascript:void()"
          onClick={() => setParaEx(!paraEx)}
        >
          {paraEx ? 'See Less' : 'See More'}
        </a>
      </p>
    </div>
  )
}

export default Toggle
