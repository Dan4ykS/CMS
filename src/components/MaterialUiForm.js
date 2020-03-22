import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Icon } from '@material-ui/core';

const axios = require('axios').default;

const MaterialUiForm = () => {
  const [values, setValues] = useState({
    userName: '',
    password: '',
    showPassword: false,
  });

  const submitForm = (e) => {
    e.preventDefault();
    const sendDate = { userName: values.userName, password: values.password };
    axios.post('http://127.0.0.1:8000/api/addUser', sendDate);
    setValues({
      userName: '',
      password: '',
      showPassword: false,
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form style={{ margin: 15 }} noValidate autoComplete='off' onSubmit={(e) => submitForm(e)}>
      <TextField id='standard-basic' label='Введите имя' value={values.userName} onChange={(event) => setValues({ ...values, userName: event.target.value })} />
      <FormControl>
        <InputLabel htmlFor='standard-adornment-password'>Придумайте пароль</InputLabel>
        <Input
          id='standard-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type='submit' variant='contained' color='primary' endIcon={<Icon>send</Icon>}>
        Войти
      </Button>
    </form>
  );
};

export default MaterialUiForm;
