import { ru, en, uk } from 'assets/language'
import { useSelector } from 'utils/hooks'
import { getLanguage } from 'utils/store/select'
import { languageWords } from 'utils/types'

export const useLanguage = (): languageWords => {
  const language = useSelector(getLanguage)

  switch (language) {
    case 'en': {
      return en
    }
    case 'ru': {
      return ru
    }
    case 'uk': {
      return uk
    }
  }
}
