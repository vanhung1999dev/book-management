import React, { useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';

export default function ComboBox(props) {

  const [item, setItem] = React.useState([]);
  const handleCatalogs = async () => {
      const { data } = await Axios.get('http://localhost:3001/catelogs', {
          headers: {
              authorization: `bearer ${localStorage.getItem('jwt')}`
          }
      })
      setItem(data);
  }

  useEffect(() => {
      handleCatalogs();
  },[])

  return (
        <Autocomplete
          id="combo-box-demo"
          options={item}
          {...props}
          getOptionLabel={(option) => option.name}
          style={{ width: parseInt(props.width) }}
          renderInput={(params) => <TextField {...params} label="Catalog" variant="outlined" {...props.params} />}
        />
      );
}