// ** Mock Adapter
import mock from '../mock'

const now = new Date()
const dayAfterTomorrow = now.setDate(now.getDate() + 2)

const changeIndex = (arr, fromIndex, toIndex) => {
  const element = arr[fromIndex]
  arr.splice(fromIndex, 1)
  arr.splice(toIndex, 0, element)
}

const data = {
  boards: [
    {
      id: 'todo',
      title: 'TODO'
    },
    {
      id: 'in-progress',
      title: 'In Progress'
    },
    {
      id: 'done',
      title: 'Done'
    }
  ],
  tasks: [
    {
      id: 1,
      labels: ['UX'],
      boardId: 'todo',
      description: 'lorem',
      dueDate: dayAfterTomorrow,
      title: 'Research FAQ page UX',
      attachments: [
        {
          name: 'documentation.doc',
          img: require('@src/assets/images/icons/file-icons/doc.png').default
        },
        {
          name: 'app.js',
          img: require('@src/assets/images/icons/file-icons/js.png').default
        }
      ],
      comments: [
        {
          name: 'Joey Tribbiani',
          img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Chandler Bing',
          img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Ross Geller',
          img: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default
        },
        {
          title: 'Pheobe Buffay',
          img: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default
        }
      ]
    },
    {
      id: 2,
      labels: ['Images'],
      boardId: 'todo',
      coverImage: require('@src/assets/images/slider/03.jpg').default,
      description: 'lorem',
      dueDate: dayAfterTomorrow,
      title: 'Find new images for the apps',
      comments: [],
      attachments: [
        {
          name: 'book.pdf',
          img: require('@src/assets/images/icons/file-icons/pdf.png').default
        },
        {
          name: 'app.js',
          img: require('@src/assets/images/icons/file-icons/js.png').default
        }
      ],
      assignedTo: [
        {
          title: 'Rachel Green',
          img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default
        }
      ]
    },
    {
      id: 3,
      labels: ['App'],
      attachments: [
        {
          name: 'list.txt',
          img: require('@src/assets/images/icons/file-icons/txt.png').default
        },
        {
          name: 'pdf.png',
          img: require('@src/assets/images/icons/file-icons/pdf.png').default
        }
      ],
      boardId: 'in-progress',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Review completed Apps',
      comments: [
        {
          name: 'Chandler Bing',
          img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Joey Tribbiani',
          img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Rachel Green',
          img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Ross Geller',
          img: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Pheobe Buffay',
          img: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Monica Geller',
          img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default
        },
        {
          title: 'Chandler Bing',
          img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default
        }
      ]
    },
    {
      id: 4,
      labels: ['Code Review'],
      attachments: [
        {
          name: 'list.txt',
          img: require('@src/assets/images/icons/file-icons/txt.png').default
        },
        {
          name: 'pdf.png',
          img: require('@src/assets/images/icons/file-icons/pdf.png').default
        },
        {
          name: 'documentation.doc',
          img: require('@src/assets/images/icons/file-icons/doc.png').default
        },
        {
          name: 'app.js',
          img: require('@src/assets/images/icons/file-icons/js.png').default
        }
      ],
      boardId: 'in-progress',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Review Javascript Code',
      comments: [
        {
          name: 'Chandler Bing',
          img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Joey Tribbiani',
          img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default
        },
        {
          title: 'Jerry Seinfeld',
          img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default
        }
      ]
    },
    {
      id: 5,
      labels: ['Forms'],
      attachments: [
        {
          name: 'list.txt',
          img: require('@src/assets/images/icons/file-icons/txt.png').default
        }
      ],
      boardId: 'done',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Forms & Tables Section',
      comments: [
        {
          name: 'Chandler Bing',
          img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Astro Kramer',
          img: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default
        },
        {
          title: 'George Costanza',
          img: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default
        }
      ]
    },
    {
      id: 6,
      labels: ['Charts & Maps'],
      attachments: [
        {
          name: 'documentation.doc',
          img: require('@src/assets/images/icons/file-icons/doc.png').default
        },
        {
          name: 'app.js',
          img: require('@src/assets/images/icons/file-icons/js.png').default
        },
        {
          name: 'book.pdf',
          img: require('@src/assets/images/icons/file-icons/pdf.png').default
        }
      ],
      boardId: 'done',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Completed Charts & Maps',
      comments: [
        {
          name: 'Elaine Benes',
          img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default,
          comment: 'Complete this on priority'
        },
        {
          name: 'Newman Knight',
          img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Charlie Kelly',
          img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default
        },
        {
          title: 'Dennis Reynolds',
          img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default
        }
      ]
    }
  ]
}

// ------------------------------------------------
// GET: Returns Boards
// ------------------------------------------------
mock.onGet('/apps/kanban/boards').reply(() => {
  return [200, data.boards]
})

// ------------------------------------------------
// GET: Returns Tasks
// ------------------------------------------------
mock.onGet('/apps/kanban/tasks').reply(() => {
  return [200, data.tasks]
})

// ------------------------------------------------
// POST: Reorder Tasks
// ------------------------------------------------
mock.onPost('/apps/kanban/reorder-tasks').reply(config => {
  const reOrderedTasks = JSON.parse(config.data).data

  const srcIndex = data.tasks.findIndex(i => Number(reOrderedTasks.taskId) === i.id)
  const targetIndex = data.tasks.findIndex(i => Number(reOrderedTasks.targetTaskId) === i.id)

  if (srcIndex !== -1 && targetIndex !== -1) {
    changeIndex(data.tasks, targetIndex, srcIndex)
  }

  return [200, data.tasks]
})

// ------------------------------------------------
// POST: Update Task Board
// ------------------------------------------------
mock.onPost('/apps/kanban/update-task-board').reply(config => {
  const updatedTask = JSON.parse(config.data).data

  const task = data.tasks.find(i => i.id === Number(updatedTask.taskId))

  task.boardId = updatedTask.newBoardId

  return [200, data.tasks]
})

// ------------------------------------------------
// POST: Adds Task
// ------------------------------------------------
mock.onPost('/apps/kanban/add-task').reply(config => {
  const task = JSON.parse(config.data).data

  const { length } = data.tasks

  let lastIndex = 0

  if (length) {
    lastIndex = data.tasks[length - 1].id
  }

  task.id = lastIndex + 1

  const newTask = {
    ...task,
    labels: [],
    attachments: [],
    dueDate: dayAfterTomorrow,
    comments: [],
    assignedTo: []
  }

  data.tasks.push(newTask)

  return [200, { newTask }]
})

// ------------------------------------------------
// POST: Adds Board
// ------------------------------------------------
mock.onPost('/apps/kanban/add-board').reply(config => {
  const board = JSON.parse(config.data).data
  data.boards.push(board)

  return [200, { board }]
})

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost('/apps/kanban/update-task').reply(config => {
  const taskData = JSON.parse(config.data).data
  const task = data.tasks.find(task => task.id === taskData.id)
  Object.assign(task, taskData)

  return [200, { task }]
})

// ------------------------------------------------
// Delete: Deletes Boards
// ------------------------------------------------
mock.onDelete('/apps/kanban/delete-board').reply(config => {
  const Id = config.data

  const filteredBoards = data.boards.filter(b => b.id !== Id)
  const filteredTasks = data.tasks.filter(t => t.boardId !== Id)

  data.tasks = filteredTasks
  data.boards = filteredBoards

  return [200]
})

// ------------------------------------------------
// Delete: Clears Tasks
// ------------------------------------------------
mock.onDelete('/apps/kanban/clear-tasks').reply(config => {
  const Id = config.data
  const filteredTasks = data.tasks.filter(t => t.boardId !== Id)
  data.tasks = filteredTasks

  return [200]
})
