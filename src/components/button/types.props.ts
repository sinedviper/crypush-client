import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme?: 'color'
  children: ReactNode
}
