// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
// import todo from '@src/views/apps/todo/store'
// import chat from '@src/views/apps/chat/store'
import users from '@src/views/clients/store'
// import email from '@src/views/apps/email/store'
// import kanban from '@src/views/apps/kanban/store'
import invoice from '@src/views/clients/company/invoice/store'
import calendar from '@src/views/calendar/store'
// import ecommerce from '@src/views/apps/ecommerce/store'
// import dataTables from '@src/views/tables/data-tables/store'
// import permissions from '@src/views/apps/roles-permissions/store'

const rootReducer = {
  auth,
  // todo,
  // chat,
  // email,
  users,
  // kanban,
  navbar,
  layout,
  invoice,
  calendar
  // ecommerce,
  // dataTables
  // permissions
}

export default rootReducer
