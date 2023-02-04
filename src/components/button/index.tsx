import React, { useState } from 'react'
import cn from 'classnames'

import ButtonProps from './types.props'
import styles from './styles.module.css'

export const Button = ({ animation, theme, children }: ButtonProps): JSX.Element => {
  const [click, setClick] = useState(false)

  return (
    <button
      className={cn(styles.button, {
        [styles.button_active]: click,
        [styles.button_theme]: theme === 'color',
        [styles.button_animation]: animation === 'slow',
      })}
      onMouseUpCapture={() => setClick(false)}
      onMouseDownCapture={() => setClick(true)}
    >
      {children}
    </button>
  )
}
