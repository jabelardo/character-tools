import ErrorRoute from '@/routes/Error'
import Home from '@/routes/Home'
import { type FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CharacterBookEditorPage from '@/routes/CharacterBookEditorPage'
import CharacterBookLibrary from '@/routes/CharacterBookLibrary'
import CharacterEditorPage from '@/routes/CharacterEditor'
import CharacterLibrary from '@/routes/CharacterLibrary'
import ManageDatabase from '@/routes/ManageDatabase'

const router = createBrowserRouter(
  [
    { path: '/', element: <Home />, errorElement: <ErrorRoute /> },
    { path: '/character-editor', element: <CharacterEditorPage /> },
    { path: '/character-library', element: <CharacterLibrary /> },
    { path: '/characterbook-editor', element: <CharacterBookEditorPage /> },
    { path: '/characterbook-library', element: <CharacterBookLibrary /> },
    { path: '/manage-database', element: <ManageDatabase /> }
  ],
  {
    basename: import.meta.env.BASE_URL || '/character-tools' // Set the base path for the router
  }
)

const App: FC = () => {
  return <RouterProvider router={router} />
}

export default App
