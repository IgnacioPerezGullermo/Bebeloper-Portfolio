import React from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import draw from '../../assets/drawing.png';
import '../../index.scss';

export const Contact = ({ sourceLang }) => {
  return (
    <div className="contact-container">
      <p className="contact-title">{sourceLang.Contact.title}</p>
      <Box className="form" component="form">
        <div className="label-cont">
          <TextField
            className="text-field name"
            id="standard-basic"
            label={sourceLang.Contact.name}
            color="primary"
            variant="standard"
            margin="dense"
          ></TextField>
          <TextField
            className="text-field bussiness"
            id="standard-basic"
            label={sourceLang.Contact.corporation}
            color="primary"
            variant="standard"
            margin="dense"
          ></TextField>
        </div>
        <br />
        <div className="label-cont">
          <TextField
            className="text-field long"
            id="standard-basic"
            label={sourceLang.Contact.email}
            color="primary"
            variant="standard"
            margin="dense"
          ></TextField>
        </div>
        <TextField
          className="text-field long"
          id="standard-basic"
          label={sourceLang.Contact.message}
          color="primary"
          multiline
          rows={4}
          variant="standard"
          margin="dense"
        ></TextField>
        <br />
        <Stack className="submit-container">
          <Button
            className="submit-button"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Enviar
          </Button>
        </Stack>
      </Box>
      <div className="draw-container"></div>
      <img className="draw-img" src={draw} alt="drawimage" />
    </div>
  );
};
