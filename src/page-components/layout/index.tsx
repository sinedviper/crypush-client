import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import cn from 'classnames'

import { Footer, Header } from 'components'
import { useDispatch, useLanguage, useSelector } from 'utils/hooks'
import { getScroll, getTheme } from 'utils/store/select'
import { actionChangeScroll } from 'utils/store/slice'

import styles from './styles.module.css'

export const Layout = (): JSX.Element => {
  const dispatch = useDispatch()
  const body = useRef<HTMLDivElement>(null)
  const { main } = useLanguage()

  const theme = useSelector(getTheme)
  const scroll = useSelector(getScroll)

  useEffect(() => {
    document.body.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <div
      ref={body}
      id={'boom'}
      className={styles.page}
      // eslint-disable-next-line
      onScroll={(e: any) => {
        dispatch(actionChangeScroll(e.target.scrollTop))
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <section
        className={cn(styles.buttonUp, {
          [styles.buttonUp_active]: scroll > 1500,
        })}
      >
        <p>{main.scroll}</p>
        <a href={'#header'}>
          <button className={styles.down_button}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </a>
      </section>
    </div>
  )
}
