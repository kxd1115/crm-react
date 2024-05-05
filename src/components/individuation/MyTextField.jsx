import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";


const LogintextField = styled(TextField) ({
    height: 60,
    width: 320,
    marginTop: 20,
    '& .MuiOutlinedInput-root': {
      borderRadius:8,
      height: 55,
      boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px',
      padding: '16.5px 14px',
    }
  });

  export {
    LogintextField
  }