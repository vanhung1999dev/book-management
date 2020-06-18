import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
const jwt = require('jsonwebtoken');

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

export default function Account() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let isLogged = localStorage.getItem('isLogin');

    const history = useHistory();
    const handleLogin = () => {
        if (!isLogged) {
            history.push('/login');
        }
    }

    let name;
    if (isLogged) {
        name = jwt.decode(localStorage.getItem('jwt')).name;
    }

    return (
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
                                    <AccountCircleIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={name}></ListItemText>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemText primary="Manage" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemText primary="Log out" />
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
    );
}