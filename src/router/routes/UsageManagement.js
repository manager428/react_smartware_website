// ** React Imports
import { lazy } from 'react'

const UsageManagement = lazy(() => import('../../views/usagemanagement'))

const ClientRoutes = [
  {
    element: <UsageManagement />,
    path: '/account'
  },
  {
    element: <UsageManagement />,
    path: '/accounts'
  },
  {
    element: <UsageManagement />,
    path: '/users'
  }
]

export default ClientRoutes
