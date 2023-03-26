import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import Button from './Button'


// Theme
const theme = createTheme()

const Form = ({title, setEmail, setPassword, handleAction}) => {
    // pasword visibility state
    const [showPassword, SetShowPassword] = usestate(false)

    // handleShowPassword
    const handleClickShow = () => SetShowPassword((show) => !show)

    return ( 
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                sx={{
                    height: '100vh'
                }}
            >
                <CssBaseline />

                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50]: t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary-main' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography>
                            {title} Page
                        </Typography>

                        <Box
                            sx={{ mt: 1 }}
                            component= 'form'
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                margin="normal"
                                fullWidth
                                id='email'
                                label='Enter Your Email'
                                variant='outlined'
                                type={"password"}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="password"
                                label='Enter Your Password'
                                variant="outlined"
                                type={'password'}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button title={title} handleAction={handleAction} />

                            <Grid container>
                                <Grid item>
                                    Go back <Link href="/">Home</Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
     );
}
 
export default Form;