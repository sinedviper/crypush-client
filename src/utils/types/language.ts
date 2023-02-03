export type languageType = 'en' | 'ru' | 'uk'
export type languageSelect = 'ENG' | 'RUS' | 'UKR'
export interface languageWords {
  main: {
    scroll: string
  }
  header: {
    menu: {
      home: string
      about: string
      strategies: string
      account: string
    }
  }
  footer: {
    info1: string
    info2: string
    info3: string
  }
  home: {
    block1: {
      title: string
      paragpraph: string
      button: {
        first: string
        second: string
      }
      smallp: {
        first: string
        second: string
      }
      scroll: {
        first: string
        second: string
      }
    }
    block2: {
      title: string
      paragraph: string
      button: {
        wallet: string
        laptop: string
        robot: string
        tech: string
      }
      small: string
    }
    block3: {
      info1: {
        title: string
        paragraph: string
        button: string
      }
      info2: {
        title: string
        paragraph: string
        button: {
          first: string
          second: string
        }
      }
    }
    block4: {
      title: string
      paragraph: string
      button: string
      buttonComment: string
    }
    block5: {
      title: string
      button: {
        first: string
        second: string
      }
    }
  }
}
