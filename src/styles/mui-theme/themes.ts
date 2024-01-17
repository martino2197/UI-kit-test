import { createTheme } from '@mui/material/styles';
// import { esES } from "@mui/x-date-pickers/locales";

const theme = createTheme({
    palette: {
        primary: {
            main: '#db3b2b'
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    borderRadius: 19,
                    textTransform: 'none',
                    fontSize: 18,
                    // height: 47,
                    // width: 157,
                },
                sizeSmall: {

                },
                sizeMedium: {

                },
                sizeLarge: {
                    minHeight: 47,
                    minWidth: 157,
                },
                containedPrimary: {
                    backgroundColor: '#db3b2b',
                },
                containedWarning: {
                    backgroundColor: '#ed766c'
                },
                outlinedSecondary: {
                    borderColor: '#c3c3c3',
                    color: '#4c4c4c',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                adornedStart: {
                    borderRadius : '24px!important',
                    '&:hover fieldset': {
                        border: '1px solid #e1e1e1 !important',
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: '1px solid #e1e1e1 !important',
                    },
                },
                adornedEnd: {
                    borderRadius : '24px!important',
                    '&:hover fieldset': {
                        border: '1px solid #e1e1e1 !important',
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: '1px solid #e1e1e1 !important',
                    },
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                sx: {
                    borderRadius: 24,
                },
                InputLabelProps: {
                    sx: {
                        '&.MuiInputLabel-shrink ': {
                            color: '#333333',
                            fontSize: 18,
                            backgroundColor: 'white',
                            paddingRight: 0.6
                        }
                    },
                },
                InputProps: {
                    sx: {
                        "&.Mui-focused fieldset": {
                            border: '1px solid #e1e1e1 !important',
                        },
                        borderRadius: 6,
                        '&:hover fieldset': {
                            border: '1px solid #e1e1e1 !important',
                        },
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                            border: '1px solid #e1e1e1 !important',
                        },
                    },
                },
                inputProps: {
                    sx: {
                    },
                },
            },
        },
        MuiCheckbox:{},
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: 6,
                    [`&.MuiLinearProgress-colorPrimary`]: {
                        backgroundColor: '#ededed',
                    },
                    [`& .MuiLinearProgress-bar`]: {
                        backgroundImage: 'linear-gradient(to right, #53a0fd 0%, #51eccf 101%)',
                        border: 'none',
                        borderRadius: 10
                    },
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                colorPrimary: {
                    // backgroundColor: 'rgba(1, 198, 113, 0.1)',
                    fontWeight: 'bold',
                    // color: '#01c671',
                },    
                colorSecondary: {
                    backgroundColor: 'rgba(227, 104, 238, 0.20)',
                    fontWeight: 'bold',
                    color: '#E368EE',
                },
                colorError: {
                    backgroundColor: '#fee7e7',
                    color: '#ff0000',
                    fontWeight: 'bold'
                },
                colorInfo: {
                    backgroundColor: '#e4edfd',
                    color: '#005fff',
                    fontWeight: 'bold'
                },
                colorSuccess: {
                    backgroundColor: 'rgba(38, 211, 13, 0.20)',
                    fontWeight: 'bold',
                    color: '#01c671',
                },
                colorWarning: {
                    backgroundColor: 'rgba(255, 185, 96, 0.20)',
                    fontWeight: 'bold',
                    color: '#FF8D00',
                },
                outlined : {
                    backgroundColor: "#FFFFFF"
                },
            }
        },
        MuiSkeleton: {
            defaultProps : {
                variant: 'rounded',
                animation: 'wave'
            },
            styleOverrides: {
                root: {
                    bgcolor: 'grey.100',
                    borderRadius: '24px'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                filledSuccess : {
                    borderRadius: '20px'
                },
                filledError: {
                    borderRadius: '20px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                },
            }
        }
    }
});

export default theme;