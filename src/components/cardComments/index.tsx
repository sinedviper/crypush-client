import React, { useState } from 'react'
import cn from 'classnames'

import { SvgStar } from 'assets/svg'
import { useSelector } from 'utils/hooks'
import { getTheme } from 'utils/store/select'

import CardCommentsProps from './types.props'
import styles from './styles.module.css'

export const CardComments = ({ title, paragraph, button }: CardCommentsProps): JSX.Element => {
  const [clickComment, setClickComment] = useState(false)

  const theme = useSelector(getTheme)

  return (
    <div
      onClick={() => setClickComment(true)}
      onMouseLeave={() => setClickComment(false)}
      className={cn(styles.section4_comments, {
        [styles.section4_comments_active]: clickComment,
        [styles.section_comments_theme]: theme,
      })}
    >
      <div>
        <h3>{title}</h3>
        <div>
          <SvgStar />
          <SvgStar />
          <SvgStar />
          <SvgStar />
          <SvgStar />
        </div>
      </div>
      <p>{paragraph}</p>
      <button>{button}</button>
    </div>
  )
}
