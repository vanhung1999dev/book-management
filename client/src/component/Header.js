import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
const jwt = require('jsonwebtoken');

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


export default function ButtonAppBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [item, setItem] = React.useState([]);
    const handleCatalogs = async () => {
        const { data } = await Axios.get('http://localhost:3001/catelogs', {
            headers: {
                authorization: `bearer ${localStorage.getItem('jwt')}`
            }
        })

        setItem([...item,data]);
        console.log(item);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    let isLogged = localStorage.getItem('isLogin');
    console.log('isLogged start:', isLogged);

    const history = useHistory();
    const handleLogin = () => {
        if (!isLogged) {
            console.log('it work');
            history.push('/login');
        }
    }

    let name;
    if (isLogged) {
        name = jwt.decode(localStorage.getItem('jwt')).name;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            onClick={handleCatalogs}
                        >
                            catalog
                        </Button>
                        <StyledMenu
                            id="customized"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {
                                item.map(item => (
                                    <StyledMenuItem key={item.id}>
                                        <ListItemText primary={item.name}></ListItemText>
                                    </StyledMenuItem>
                                ))
                            }
                        </StyledMenu>
                    </div>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <>
                        {
                            isLogged ?
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <StyledMenu
                                        id="customized-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <StyledMenuItem>
                                            <ListItemIcon>
                                                <SendIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={name}></ListItemText>
                                        </StyledMenuItem>
                                        <StyledMenuItem>
                                            <ListItemIcon>
                                                <DraftsIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Drafts" />
                                        </StyledMenuItem>
                                        <StyledMenuItem>
                                            <ListItemIcon>
                                                <InboxIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Inbox" />
                                        </StyledMenuItem>
                                    </StyledMenu>
                                </div> :
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleLogin}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                        }
                    </>
                </Toolbar>
            </AppBar>
        </div >
    );
}
