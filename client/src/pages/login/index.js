import '../../styles/login/styles.css'
// import logo from '../../public/razor.png'
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../../utils/mutations';
import { LOGIN } from '../../utils/mutations';


import Auth from '../../utils/auth';
function Login() {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const [login, { error }] = useMutation(LOGIN);

  // const redirectToPage = () => {
  //   //Redirect to the python page
  //   navigate("/Admin");
  // };
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className='block2'>
      <form className='form' noValidate validated={validated} onSubmit={handleFormSubmit}>
      <h1 className='name'>Hello Abraham</h1>
      {/* <img className='newrzr' src={logo}/> */}
        <input
          className='input'
          value={userFormData.username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          required
        />
        <input
          className='input'
          value={userFormData.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          required
        />
        <button
        className='input' 
        disabled={!(userFormData.username && userFormData.password)}
        type="submit" 
        variant='success'
        >Login
        </button>
      </form>
    </div>
  );
}

export default Login