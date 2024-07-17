import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"
import { Auth, signInWithEmailAndPassword } from "firebase/auth"
import { FC, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

type props = {
    auth: Auth,
}

export const Authorization: FC<props> = ({ auth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isFormError, setIsFormError] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const authorization = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate("/account");
                })
                .catch((error) => {
                    setErrorCode(error.code);
                    setErrorMessage(error.message);
                });
        } catch (e) {
            setIsFormError(true);
        }
        setEmail('');
        setPassword('');
    }


    return (
        <Container maxWidth='sm'>
            <Paper elevation={3} sx={{ marginTop: '100px', padding: '20px', paddingTop: '30px', paddingBottom: '30px' }}>
                <Box display='flex' justifyContent='center' mb='30px'>
                    <Typography variant="h3">
                        Authorization
                    </Typography>
                </Box>
                <form onSubmit={authorization}>
                    <Box display='flex' flexDirection='column'>
                        <TextField id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            sx={{ marginBottom: '10px' }}
                            onChange={e => setEmail(e.target.value)} />
                        <TextField id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            sx={{ marginBottom: '20px' }}
                            onChange={e => setPassword(e.target.value)} />
                        {
                            isFormError &&
                            <Typography>
                                {errorCode + ' ' + errorMessage}
                            </Typography>
                        }
                        <Button variant="contained" size="large" type="submit">Log In</Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    )
}
