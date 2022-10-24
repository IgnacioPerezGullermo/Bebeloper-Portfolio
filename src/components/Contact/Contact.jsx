import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import draw from '../../assets/drawing.png';
import emailjs from '@emailjs/browser';
import '../../index.scss';

export const Contact = ({ sourceLang }) => {
  const form = useRef();
  const [Input, setInput] = useState({
    from_name: '',
    from_email: '',
    from_company: '',
    message: '',
    to_name: 'Bebeloper',
  });
  const handleChange = (event) => {
    setInput({ ...Input, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'portfolio',
      'portfolioContact',
      form.current,
      'hUXrAnQwoTXnULHls'
    );
    setInput({
      from_name: '',
      from_email: '',
      from_company: '',
      message: '',
      to_name: 'Bebeloper',
    });
  };

  return (
    <div className="contact-container">
      <p className="contact-title">{sourceLang.Contact.title}</p>
      <Box className="form" component="form" ref={form}>
        <div className="label-cont">
          <TextField
            className="text-field name"
            id="standard-basic"
            label={sourceLang.Contact.name}
            name="from_name"
            onChange={(e) => {
              handleChange(e);
            }}
            value={Input.from_name}
            color="primary"
            variant="standard"
            margin="dense"
          ></TextField>
          <TextField
            className="text-field bussiness"
            id="standard-basic"
            label={sourceLang.Contact.corporation}
            name="from_company"
            onChange={(e) => {
              handleChange(e);
            }}
            value={Input.from_company}
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
            name="from_email"
            onChange={(e) => {
              handleChange(e);
            }}
            value={Input.from_email}
            color="primary"
            variant="standard"
            margin="dense"
          ></TextField>
        </div>
        <TextField
          className="text-field long"
          id="standard-basic"
          label={sourceLang.Contact.message}
          name="message"
          onChange={(e) => {
            handleChange(e);
          }}
          value={Input.message}
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
            onClick={(e) => {
              handleSubmit(e);
            }}
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
