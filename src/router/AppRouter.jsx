import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoute } from '../journal/routes/JournalRoute'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>

        {/* Login y Registro */}
        <Route path='/auth/*' element={ <AuthRoutes /> } />
        

        {/* JournalApp */}
        <Route path='/*' element={ <JournalRoute /> } />

        <Route />

    </Routes>
  )
}
