import './App.css'
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CarShop from './CarShop'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme } from './themes'

function App() {

  return (
    <>
      <Container maxWidth='xl'>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Car shop</Typography>
        </Toolbar>
      </AppBar>
        <CarShop />
        </ThemeProvider>
      </Container>
    </>
  )
}

export default App
