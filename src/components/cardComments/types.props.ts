import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface CardCommentsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  paragraph: string
  button: string
}
