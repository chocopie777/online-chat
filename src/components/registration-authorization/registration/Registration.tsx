import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"

export const Registration = () => {
    return (
        <Container maxWidth='sm'>
            <Paper elevation={3} sx={{ marginTop: '100px', padding: '20px', paddingTop: '30px', paddingBottom: '30px' }}>
                <Box display='flex' justifyContent='center' mb='30px'>
                    <Typography variant="h3">
                        Registration
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ marginBottom: '10px' }} />
                    <TextField id="outlined-basic" label="NickName" variant="outlined" sx={{ marginBottom: '10px' }} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ marginBottom: '10px' }} />
                    <TextField id="outlined-basic" label="Repeat Password" variant="outlined" sx={{ marginBottom: '20px' }} />
                    <Button variant="contained" size="large">Regiter</Button>
                </Box>
            </Paper>
        </Container>
    )
}
