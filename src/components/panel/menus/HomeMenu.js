import { useCallback } from 'react'

export default function HomeMenu({go}) {
  return (
    <div>
      <button onClick={() => go('create_user')}>Nouvel utilisateur</button>
      <button onClick={() => go('search_user')}>Rechercher</button>
      <button onClick={() => go('new_user')}>Sauvegarde</button>
    </div>
  )
}