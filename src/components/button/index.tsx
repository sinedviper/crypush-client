import React, { useState } from 'react'
import cn from 'classnames'

import ButtonProps from './types.props'
import styles from './styles.module.css'

export const Button = ({ theme, children }: ButtonProps): JSX.Element => {
  const [click, setClick] = useState(false)

  const gradient =
    theme === 'color'
      ? { border: 'none', background: 'var(--gradient-blue-light)', color: 'var(--light)' }
      : ''
  return (
    <button
      className={cn(styles.button, {
        [styles.button_active]: click,
      })}
      onMouseUpCapture={() => setClick(false)}
      onMouseDownCapture={() => setClick(true)}
      style={{ ...gradient }}
    >
      {children}
    </button>
  )
}
