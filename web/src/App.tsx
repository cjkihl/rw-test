import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

import './index.css'
import { HttpOptions } from '@apollo/client'

const httpLinkConfig: HttpOptions = {
  // In order to support CORS with wildcard as origin (*)
  // Credentials must be set to 'omit'
  credentials: 'omit',
  // Example of customer header
  // Tenant might be read from the subdomain (e.g. acme-inc.myapp.com)
  // or from local storage
  headers: { 'X-Tenant': 'acme-inc' },
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <RedwoodApolloProvider
          useAuth={useAuth}
          graphQLClientConfig={{ httpLinkConfig }}
        >
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
