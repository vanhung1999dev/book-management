import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';

export default function ComboBox(props) {

  const [item, setItem] = React.useState([]);
  const { selectedItem, setSelectedItem } = props;

  const onHandleSelectedItemChange = (e, value) => {
    if (selectedItem.filter(catalog => catalog === value).length === 0) {
      setSelectedItem([...selectedItem, value]);
    }
  };

  console.log('selected item array:', selectedItem);

  const handleCatalogs = async () => {
    const { data } = await Axios.get('http://localhost:3001/catelogs', {
      headers: {
        authorization: `bearer ${localStorage.getItem('jwt')}`
      }
    });
    setItem(data);
  }

  useEffect(() => {
    handleCatalogs();
  }, [])

  return (
    <Autocomplete
      id="combo-box-demo"
      onInputChange={onHandleSelectedItemChange}
      options={item}
      {...props}
      getOptionLabel={(option) => option.name}
      style={{ width: parseInt(props.width) }}
      renderInput={(params) => <TextField {...params} label="Catalog" variant="outlined" {...props.params} />}
    />
  );
}