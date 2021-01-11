import React from 'react'
import './Header.css'

import Profile from 'components/Profile'
import MenuButton from './MenuButton'
import ContentWrapper from 'components/ContentWrapper'

const Header = () =>
  <div className='Header'>

      <Profile />
      <MenuButton />
    
  </div>

export default Header