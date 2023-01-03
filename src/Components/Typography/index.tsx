import { ReactNode, CSSProperties } from 'react'

import * as S from './styled'

// Interface to avoid unwanted tags such as <div/>
type tagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type TypographyProps = {
  tag?: tagVariants
  children: ReactNode
}

/**
 * @tag will have default <p> since it'll probably be our most used tag
 * @props have all our CSS
 */
const Typography = ({ tag = 'p', children, ...props }: TypographyProps 
& CSSProperties) => (
  <S.DynamicTypography tag={tag} style={{ ...props }}>
    {children}
  </S.DynamicTypography>
)

export default Typography