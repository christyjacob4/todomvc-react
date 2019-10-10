import React from 'react'
import PropTypes from 'prop-types';
import TodoTextInput from '../TodoTextInput/TodoTextInput'
import Button from '@material-ui/core/Button';

const Header = ({addTodo, props}) => {

  const handleSave = text => {
    if (text.length !== 0) {
      addTodo(text)
    }
  }

  return (
    <header className="header">
      <div>
        <h1>todos</h1>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("HEADER", props)
              props.auth.logout(()=>{
                props.history.push('/signin')
              });
            }}
          >
            Logout
          </Button>
      </div>
      
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  )
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
