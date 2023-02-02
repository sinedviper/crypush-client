import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'

import { SvgAccount, SvgGlobus, SvgLogo } from 'assets/svg'
import { actionChangeLanguage } from 'utils/store/slice'
import { getLanguage } from 'utils/store/select'
import { languageType, languageSelect } from 'utils/types'
import { useDispatch, useSelector, useLanguage } from 'utils/hooks'

import HeaderProps from './types.props'
import styles from './styles.module.css'

export const Header = ({ theme, setTheme }: HeaderProps): JSX.Element => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const { header } = useLanguage()

  const [select, setSelect] = useState(false)

  const language = useSelector(getLanguage)

  const languageMain = (lang: languageType): languageSelect => {
    switch (lang) {
      case 'ru': {
        return 'RUS'
      }
      case 'uk': {
        return 'UKR'
      }
      case 'en': {
        return 'ENG'
      }
    }
  }

  const languageSelect = (lang: languageType): { label: string; lang: string }[] => {
    return [
      { label: 'UKR', lang: 'uk' },
      { label: 'ENG', lang: 'en' },
      { label: 'RUS', lang: 'ru' },
    ].filter((lan) => lan.lang !== lang)
  }

  return (
    <header className={styles.layout_header}>
      <SvgLogo className={styles.header_logo} />
      <nav className={styles.header_nav}>
        <NavLink to={'/'} className={styles.nav_link}>
          {header.menu.home}
          <span
            className={cn(styles.link, {
              [styles.link_active]: pathname === '/',
            })}
          ></span>
          {pathname !== '/' && <span className={styles.link_hover}></span>}
        </NavLink>
        <NavLink to={'/'} className={styles.nav_link}>
          {header.menu.about}
          <span
            className={cn(styles.link, {
              [styles.link_active]: pathname === '/about',
            })}
          ></span>
          {pathname !== '/about' && <span className={styles.link_hover}></span>}
        </NavLink>
        <NavLink to={'/'} className={styles.nav_link}>
          {header.menu.strategies}
          <span
            className={cn(styles.link, {
              [styles.link_active]: pathname === '/strategies',
            })}
          ></span>
          {pathname !== '/strategies' && <span className={styles.link_hover}></span>}
        </NavLink>
        <div
          className={styles.nav_language}
          onMouseEnter={() => setSelect(true)}
          onMouseLeave={() => setSelect(false)}
        >
          <SvgGlobus />
          <span>{languageMain(language)}</span>
          <span
            className={cn(styles.language_border, {
              [styles.language_border_active]: select,
            })}
          ></span>
          <div
            className={cn(styles.language_select, {
              [styles.language_select_active]: select,
            })}
          >
            {languageSelect(language).map((obj, index) => (
              <button
                key={index}
                className={styles.select_option}
                onClick={() => dispatch(actionChangeLanguage(obj.lang as languageType))}
              >
                {obj.label}
              </button>
            ))}
          </div>
        </div>
        <button className={styles.nav_theme} onClick={() => setTheme(!theme)}>
          <span
            className={cn(styles.theme_circle, {
              [styles.theme_circle_active]: theme,
            })}
          ></span>
        </button>
        <button className={styles.nav_account}>
          <SvgAccount />
          <p>{header.menu.account}</p>
        </button>
      </nav>
    </header>
  )
}
