import React from 'react'
import TextField from '@mui/material/TextField';

type Prop = {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchForm({setUserInput} : Prop) {

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Please enter the name of the recipe"
        variant="standard"
        onChange={onChangeHandler}
        helperText="Some suggestions: vegan, vegetarian, pizza, etc."
      />
    </div>

  )
}
