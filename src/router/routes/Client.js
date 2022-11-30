// ** React Imports
import { lazy } from 'react'

const ClientList = lazy(() => import('../../views/clients'))
const CompanyIdView = lazy(() => import('../../views/clients/company'))

const ClientRoutes = [
  {
    element: <ClientList />,
    path: '/client'
  },
  {
    element: <CompanyIdView />,
    path: '/companies/:id'
  }
]

export default ClientRoutes
