import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './components/App'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7a5cfa',
    },
    secondary: {
      main: '#00FF00',
    },
  },
  typography: {
    h1: {
      fontSize: "3em",
      fontWeight: 600
    },
    h2: {
      fontSize: "1.75em",
      fontWeight: 600
    },
    h3: {
      fontSize: "1.5em",
      fontWeight: 600
    },

  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
