import React from 'react';

const LoginForm = () => {
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    console.log('somewhere');
  };
  return (
    <div className="login-form">
      <form onSubmit={handlerSubmit}>
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" id="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
