import styled from "@emotion/styled";
import Button from "@mui/material/Button";


const LoginButton = styled(Button) ({
    height: 48,
    width: 320,
    borderRadius: 8,
    backgroundColor: 'rgb(33, 43, 54)',
    marginTop: 20,
    color: 'white',
    boxShadow: 'rgba(145, 158, 171, 0.2) 0px 3px 1px -2px, rgba(145, 158, 171, 0.14) 0px 2px 2px 0px, rgba(145, 158, 171, 0.12) 0px 1px 5px 0px',
    '&: hover': {
      backgroundColor: 'rgb(33, 43, 54)'
    }
});

export {
    LoginButton
};