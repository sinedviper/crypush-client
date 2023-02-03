import React, { MouseEvent, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCreative } from 'swiper'
import cn from 'classnames'

import 'swiper/css'
import 'swiper/css/effect-creative'

import {
  PngPhones,
  PngCrypto,
  PngVisa,
  PngMastercardW,
  PngMastercardD,
  PngTUSD,
  PngPhone,
} from 'assets/png'
import {
  SvgArrow,
  SvgBinance,
  SvgBitcoin,
  SvgHuobiGlobal,
  SvgLaptop,
  SvgOkay,
  SvgReview,
  SvgRobot,
  SvgTech,
  SvgWallet,
} from 'assets/svg'
import { Button, CardComments } from 'components'
import { useLanguage, useSelector } from 'utils/hooks'
import { getScroll, getTheme } from 'utils/store/select'

import styles from './styles.module.css'

export const Home = (): JSX.Element => {
  const { home } = useLanguage()

  const [phonesPosition, setPhonesPosition] = useState([0, 0])
  const [phonePosition, setPhonePosition] = useState([0, 0])
  const [swiperActive, setSwiperActive] = useState(0)

  const swiperRef = useRef<SwiperCore>()
  const refSection1 = useRef<HTMLDivElement>(null)
  const refSection2 = useRef<HTMLDivElement>(null)
  const refSection3 = useRef<HTMLDivElement>(null)
  const refSection4 = useRef<HTMLDivElement>(null)
  const refSection5 = useRef<HTMLDivElement>(null)

  const theme = useSelector(getTheme)
  const scroll = useSelector(getScroll)

  const titleComment = 'Lorem ipsum'
  const paragraphComment =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'

  const positionGradient = (position: number, value: number): number => {
    const initDeg = value / 2
    const posState = initDeg * 0.1

    if (position >= initDeg) {
      return (position - posState) * 0.1
    } else {
      return (position + posState) * 0.1
    }
  }

  const activeSwiper = (number: number, swiper: number): boolean => {
    return swiper === number
  }

  const activeScrollArrRef = (scr: number): boolean => {
    // eslint-disable-next-line
    const ref: any = [
      refSection1.current?.clientHeight,
      refSection2.current?.clientHeight,
      refSection3.current?.clientHeight,
      refSection4.current?.clientHeight,
      refSection5.current?.clientHeight,
    ]
    let value = 0

    for (let i = 1; i <= scr; i++) {
      if (i === scr) {
        value += ref[i] / 2
      } else {
        value += ref[i]
      }
    }
    return scroll > value
  }

  return (
    <>
      <section ref={refSection1} className={styles.main_section1}>
        <section className={styles.section1_info}>
          <h2>{home.block1.title}</h2>
          <p>{home.block1.paragpraph}</p>
          <div>
            <Button theme={'color'}>
              {home.block1.button.first}
              <SvgArrow />
            </Button>
            <Button>{home.block1.button.second}</Button>
          </div>
          <div>
            <p>
              {home.block1.smallp.first}
              <SvgOkay />
            </p>
            <p>
              {home.block1.smallp.second}
              <SvgOkay />
            </p>
          </div>
          <div>
            <SvgHuobiGlobal />
            <SvgBinance />
          </div>
        </section>
        <section
          className={styles.section1_phones}
          onMouseMove={(e: MouseEvent<HTMLSpanElement>) => {
            setPhonesPosition([e.nativeEvent.offsetX, e.nativeEvent.offsetY])
          }}
        >
          <span
            style={{
              top: positionGradient(phonesPosition[1], 850),
              left: positionGradient(phonesPosition[0], 756),
            }}
          ></span>
          <img src={PngPhones} alt={'phones'} />
        </section>
        <div className={styles.section1_bitcoin}>
          <div>
            <span></span>
            <SvgBitcoin />
          </div>
        </div>
        <div className={styles.section1_down}>
          <div>
            <a href={'#first'}>
              <button className={styles.down_button}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </a>
            <span className={styles.down_div_span}>
              <p>{home.block1.scroll.first}</p>
              <p>{home.block1.scroll.second}</p>
            </span>
          </div>
        </div>
      </section>
      <section
        ref={refSection2}
        className={cn(styles.main_section2, {
          [styles.main_section2_active]: activeScrollArrRef(1),
        })}
        id={'first'}
      >
        <h2>{home.block2.title}</h2>
        <p>{home.block2.paragraph}</p>
        <div className={styles.section2_info}>
          <div>
            <button
              className={cn(styles.info_buttonswiper, {
                [styles.info_buttonswiper_active]: activeSwiper(0, swiperActive),
              })}
              onClick={() => {
                setSwiperActive(0)
                swiperRef.current?.slideTo(0)
              }}
            >
              <SvgWallet />
              <p>{home.block2.button.wallet}</p>
            </button>
            <button
              className={cn(styles.info_buttonswiper, {
                [styles.info_buttonswiper_active]: activeSwiper(1, swiperActive),
              })}
              onClick={() => {
                setSwiperActive(1)
                swiperRef.current?.slideTo(1)
              }}
            >
              <SvgLaptop />
              <p>{home.block2.button.laptop}</p>
            </button>
            <button
              className={cn(styles.info_buttonswiper, {
                [styles.info_buttonswiper_active]: activeSwiper(2, swiperActive),
              })}
              onClick={() => {
                setSwiperActive(2)
                swiperRef.current?.slideTo(2)
              }}
            >
              <SvgRobot />
              <p>{home.block2.button.robot}</p>
            </button>
            <button
              className={cn(styles.info_buttonswiper, {
                [styles.info_buttonswiper_active]: activeSwiper(3, swiperActive),
              })}
              onClick={() => {
                setSwiperActive(3)
                swiperRef.current?.slideTo(3)
              }}
            >
              <SvgTech />
              <p>{home.block2.button.tech}</p>
            </button>
          </div>
          <div>
            <Swiper
              modules={[EffectCreative]}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-120%', 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ['120%', 0, -500],
                },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}
              className={'swiper_info'}
            >
              <SwiperSlide>
                <img className={styles.swiper_imgcrypto} src={PngCrypto} alt={'crypto'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={PngCrypto} alt={'crypto'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={PngCrypto} alt={'crypto'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={PngCrypto} alt={'crypto'} />
              </SwiperSlide>
            </Swiper>
            <p>{home.block2.small}</p>
          </div>
        </div>
      </section>
      <section
        ref={refSection3}
        className={cn(styles.main_section3, {
          [styles.main_section3_active]: activeScrollArrRef(2),
        })}
      >
        <section className={styles.section3_info1}>
          <div className={styles.info1_block}>
            <h2>{home.block3.info1.title}</h2>
            <p>{home.block3.info1.paragraph}</p>
            <Button theme={'color'}>
              {home.block3.info1.button}
              <SvgArrow />
            </Button>
          </div>
          <div className={styles.info1_block}>
            <h2>{home.block3.info2.title}</h2>
            <p>{home.block3.info2.paragraph}</p>
            <div>
              <Button>{home.block3.info2.button.first}</Button>
              <Button theme={'color'}>{home.block3.info2.button.second}</Button>
            </div>
          </div>
        </section>
        <section className={styles.section3_info2}>
          <img src={!theme ? PngMastercardD : PngMastercardW} alt={'mastercard'} />
          <img src={PngVisa} alt={'visa'} />
          <img src={PngTUSD} alt={'tusd'} />
        </section>
        <span></span>
      </section>
      <section
        ref={refSection4}
        className={cn(styles.main_section4, {
          [styles.main_section4_active]: activeScrollArrRef(3),
        })}
      >
        <span></span>
        <h2>{home.block4.title}</h2>
        <div>
          <p>{home.block4.paragraph}</p>
          <Button>
            {home.block4.button}
            <SvgReview />
          </Button>
        </div>
        <section className={styles.section4_comments_wrapper}>
          <CardComments
            title={titleComment}
            button={home.block4.buttonComment}
            paragraph={paragraphComment}
          />
          <CardComments
            title={titleComment}
            button={home.block4.buttonComment}
            paragraph={paragraphComment}
          />
          <CardComments
            title={titleComment}
            button={home.block4.buttonComment}
            paragraph={paragraphComment}
          />
          <CardComments
            title={titleComment}
            button={home.block4.buttonComment}
            paragraph={paragraphComment}
          />
          <CardComments
            title={titleComment}
            button={home.block4.buttonComment}
            paragraph={paragraphComment}
          />
          <CardComments
            title={titleComment}
            button={home.block4.buttonComment}
            paragraph={paragraphComment}
          />
        </section>
      </section>
      <section
        ref={refSection5}
        className={cn(styles.main_section5, {
          [styles.main_section5_active]: activeScrollArrRef(4),
        })}
      >
        <div>
          <h2>{home.block5.title}</h2>
          <div>
            <Button theme={'color'}>
              {home.block5.button.first}
              <SvgArrow />
            </Button>
            <Button>{home.block5.button.second}</Button>
          </div>
        </div>
        <div
          className={styles.section1_phone}
          onMouseMove={(e: MouseEvent<HTMLSpanElement>) => {
            setPhonePosition([e.nativeEvent.offsetX, e.nativeEvent.offsetY])
          }}
        >
          <span
            style={{
              top: positionGradient(phonePosition[1], 725),
              left: positionGradient(phonePosition[0], 752),
            }}
          ></span>
          <img src={PngPhone} alt={'phones'} />
        </div>
      </section>
    </>
  )
}
