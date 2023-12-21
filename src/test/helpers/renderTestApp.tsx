import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'
import { createReduxStore } from '../../store/store'
type TOptions = {
  initialState?: object
  initialRoute?: string
}

export const renderTestApp = (
  component: JSX.Element | null,
  options: TOptions = {}
) => {
  const { initialState = {}, initialRoute = '/' } = options
  const store = createReduxStore(initialState)
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  )
}
