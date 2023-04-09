import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoute } from '../journal/routes/JournalRoute'

export const AppRouter = () => {
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
