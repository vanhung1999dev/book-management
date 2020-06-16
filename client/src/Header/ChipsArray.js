import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add'
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function ChipsArray(props) {
    const classes = useStyles();

    const { selectedItem, setSelectedItem } = props;

    const [catalog, setCatalog] = React.useState([]);

    const handleCatalogs = async () => {
        const { data } = await Axios.get('http://localhost:3001/catelogs', {
            headers: {
                authorization: `bearer ${localStorage.getItem('jwt')}`
            }
        });
        setCatalog(data);
    }

    useEffect(() => {
        handleCatalogs();
    }, [])

    const handleDelete = (catalogToOff) => () => {
        if (selectedItem.filter(catalog => catalog === catalogToOff.name).length === 0) {
            setSelectedItem([...selectedItem, catalogToOff.name]);
        }else {
            setSelectedItem(selectedItem => selectedItem.filter(catalog => catalog !== catalogToOff.name));
        }
    }

    console.log('selected item after handle Delete', selectedItem);

    return (
        <div>
            {catalog.map((data) => {
                let icon;

                if (selectedItem.includes(data.name))
                    return (
                        <Chip key={data.id}
                            icon={icon}
                            label={data.name}
                            deleteIcon={<HighlightOffIcon />}
                            onDelete={handleDelete(data)}
                            className={classes.chip}
                        />
                    );
                else {
                    return (
                        <Chip key={data.id}
                            icon={icon}
                            label={data.name}
                            deleteIcon={<AddIcon />}
                            onDelete={handleDelete(data)}
                            className={classes.chip}
                        />
                    );
                }
            })}
        </div>
    );
}