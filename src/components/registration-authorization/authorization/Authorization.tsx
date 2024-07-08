import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"

export const Authorization = () => {
    return (
        <Container maxWidth='sm'>
            <Paper elevation={3} sx={{ marginTop: '100px', padding: '20px', paddingTop: '30px', paddingBottom: '30px' }}>
                <Box display='flex' justifyContent='center' mb='30px'>
                    <Typography variant="h3">
                        Authorization
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ marginBottom: '10px' }} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ marginBottom: '20px' }} />
                    <Button variant="contained" size="large">Log In</Button>
                </Box>
            </Paper>
        </Container>
    )
}
