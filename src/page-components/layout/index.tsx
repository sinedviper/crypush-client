import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from 'components'
import { useSelector } from 'utils/hooks'
import { getTheme } from 'utils/store/select'

import styles from './styles.module.css'

export const Layout = (): JSX.Element => {
  const theme = useSelector(getTheme)

  useEffect(() => {
    document.body.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
