import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from 'components'

import styles from './styles.module.css'

export const Layout = (): JSX.Element => {
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    document.body.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <div className={styles.page}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
