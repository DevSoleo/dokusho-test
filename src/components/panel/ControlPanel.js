import './Panel.css'
import { useState, useCallback } from 'react'
import HomeMenu from './menus/HomeMenu'
import CreateUserMenu from './menus/CreateUserMenu'
import SearchUserMenu from './menus/SearchUserMenu'

export default function ControlPanel({children}) {
  const [currentMenu, setCurrentMenu] = useState('home')

  const go = useCallback((menu) => setCurrentMenu(menu), [setCurrentMenu])

  let menu = <HomeMenu go={go} />

  if (currentMenu == 'create_user') {
    menu = <CreateUserMenu go={go} />
  } else if (currentMenu == 'search_user') {
    menu = <SearchUserMenu go={go} />
  }

  return (
    <div className="control-panel">
      { menu }
    </div>
  )
}