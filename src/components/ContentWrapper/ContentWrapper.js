import React from 'react'
import './ContentWrapper.css'

const ContentWrapper = ({row, space, children}) =>
  <div className={'ContentWrapper' + row ? 'ContentWrapper RowFlex ' + space : 'ContentWrapper ' + space }>
    {children}
  </div>

export default ContentWrapper