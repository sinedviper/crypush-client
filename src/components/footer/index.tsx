import React from 'react'

import { SvgChat, SvgInstagram, SvgLogo, SvgTelegram, SvgTwitter } from 'assets/svg'
import { useLanguage } from 'utils/hooks'

import styles from './styles.module.css'

export const Footer = (): JSX.Element => {
  const { footer } = useLanguage()

  return (
    <footer className={styles.layout_footer}>
      <section className={styles.footer_info}>
        <section className={styles.info_main}>
          <SvgLogo className={styles.header_logo} />
          <p>{footer.info1}</p>
        </section>
        <section className={styles.info_links}>
          <p>{footer.info3}</p>
          <div>
            <button className={styles.links_social}>
              <SvgTelegram />
            </button>
            <button className={styles.links_social}>
              <SvgTwitter />
            </button>
            <button className={styles.links_social}>
              <SvgInstagram />
            </button>
          </div>
        </section>
      </section>
      <section className={styles.footer_down}>
        <p>{footer.info2}</p>
        <SvgChat />
      </section>
    </footer>
  )
}
