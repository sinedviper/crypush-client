import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  theme: boolean
  setTheme: (val: boolean) => void
}
