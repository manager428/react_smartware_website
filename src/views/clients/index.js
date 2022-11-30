// ** User List Component
import Table from './Table'

// ** Custom Component
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/react/apps/app-users.scss'

const ClientList = () => {
  return (
    <div className='app-user-list'>
      <Breadcrumbs title='Clients' data={[{ title: 'Home' }, { title: 'Clients' }]} />
      <Table />
    </div>
  )
}

export default ClientList