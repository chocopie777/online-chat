import { Box, Container } from "@mui/material"
import { Authorization } from "./components/registration-authorization/authorization/Authorization"
// import { Registration } from "./components/registration-authorization/registration/Registration"

function App() {

  return (
    <>
      <Container maxWidth='xl'>
        <Box justifyContent='center'>
          <Authorization />
        </Box>
      </Container>
    </>
  )
}

export default App
