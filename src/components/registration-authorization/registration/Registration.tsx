import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"
import { FC, FormEvent, useState } from "react";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type props = {
    auth: Auth,
}

export const Registration: FC<props> = ({ auth }) => {
    const [email, setEmail] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
    const [isFormError, setIsFormError] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const registration = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
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
        setNickName('');
        setPassword('');
        setRepPassword('');
    }

    return (
        <Container maxWidth='sm'>
            <Paper elevation={3} sx={{ marginTop: '100px', padding: '20px', paddingTop: '30px', paddingBottom: '30px' }}>
                <Box display='flex' justifyContent='center' mb='30px'>
                    <Typography variant="h3">
                        Registration
                    </Typography>
                </Box>
                <form onSubmit={registration}>
                    <Box display='flex' flexDirection='column'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ marginBottom: '10px' }}
                            value={email} onChange={e => setEmail(e.target.value)} />
                        <TextField id="outlined-basic" label="NickName" variant="outlined" sx={{ marginBottom: '10px' }}
                            value={nickName} onChange={e => setNickName(e.target.value)} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ marginBottom: '10px' }}
                            value={password} onChange={e => setPassword(e.target.value)} />
                        <TextField id="outlined-basic" label="Repeat Password" variant="outlined"
                            sx={{ marginBottom: '20px' }} value={repPassword}
                            onChange={e => setRepPassword(e.target.value)} />
                        {
                            isFormError &&
                            <Typography>
                                {errorCode + ' ' +  errorMessage}
                            </Typography>
                        }
                        <Button variant="contained" size="large" type='submit'>Register</Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    )
}
