import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidthDesktop = 240;

const openedMixinDesktop = (theme) => ({
    width: drawerWidthDesktop + 20,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: 50
    }),
    overflowX: "hidden"
});

const closedMixinDesktop = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: 50
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(16)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(16)} + 1px)`
    }
});

const DrawerHeaderDesktop = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const AppBarDesktop = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidthDesktop,
        width: { xs: '0', sm: `calc(100% - ${drawerWidthDesktop}px)` },
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const DrawerDesktop = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open, }) => ({
    zIndex: 1202,
    width: drawerWidthDesktop,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixinDesktop(theme),
        "& .MuiDrawer-paper": openedMixinDesktop(theme)
    }),
    ...(!open && {
        ...closedMixinDesktop(theme),
        "& .MuiDrawer-paper": closedMixinDesktop(theme)
    }),
}));

const Navigation = (props) => {
    //mobile -  display: { sm: 'none' }
    //desktop -  display: { xs: 'none', sm: 'block' }
    const [open, setOpen] = useState(false);

    return (
        <div className='navigation-container'>
            <Box sx={{ display: "flex" }}>
                <AppBarDesktop position="fixed" sx={{ backgroundColor: '#F7F7F7', color: '#000000' }} open={open}>
                    <Toolbar sx={{ justifyContent: { xs: 'space-between', sm: 'end' } }}>
                        <Box component={Link} to="/">
                            <Box
                                component="img"
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    height: 50,
                                    padding: 1,
                                }}
                                alt="Your logo."
                                src={props?.logo}
                            />
                        </Box>
                        <Box component={'div'} sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <Typography></Typography>
                        </Box>
                        <Box component={'div'} sx={{ display: 'flex' }}>
                            {props?.topNavItems?.map((item, index) => {
                                return <IconButton key={index} component={Link} to={item?.link} color="inherit">
                                    {item.icon}
                                </IconButton>
                            })}
                        </Box>
                    </Toolbar>
                </AppBarDesktop >
                <DrawerDesktop variant='permanent' open={open} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Box sx={{ height: '100%', width: 'calc(100% - 16px)', backgroundColor: '#F7F7F7', borderRight: '1px solid rgba(0, 0, 0, 0.12)', boxShadow: '-3px 0 10px 0 #000' }}>
                        <Box onClick={() => setOpen(!open)} component={'div'} sx={{ cursor: 'pointer', display: 'flex', padding: '26px 0px', justifyContent: 'center', position: 'absolute', top: 'calc(50% - 50px)', right: 1, backgroundColor: '#F7F7F7', height: 80, width: 16, border: '1px solid rgba(0, 0, 0, 0.12)', borderLeft: 'none', borderRadius: '0px 8px 8px 0px' }}>
                            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </Box>
                        <Box component={Link} to="/" sx={{ textDecoration: 'none', color: '#000' }}>
                            <DrawerHeaderDesktop sx={{ justifyContent: open ? 'start' : 'center' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        display: { xs: 'none', sm: 'block' },
                                        height: 75,
                                        padding: 1,
                                    }}
                                    alt="Your logo."
                                    src={props?.logo}
                                />
                                {open && <Typography variant='h5' sx={{ fontWeight: '700' }}>{props?.title}</Typography>}
                            </DrawerHeaderDesktop>
                        </Box>
                        <Box component={'div'} sx={{ padding: 1, marginTop: '30px' }} >
                            {props?.navItems?.map((item, index) => {
                                return <Box key={index} sx={{ py: '6px' }}>
                                    <Button component={Link} to={item?.link} color="inherit" sx={{ width: '100%', display: open ? 'inline-flex' : 'block', justifyContent: 'start', textTransform: 'capitalize' }}>
                                        <Box sx={{ width: open ? '50px' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {item.icon}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography sx={{ fontSize: open ? 14 : 12, fontWeight: '500', textWrap: 'balance', verticalAlign: 'middle', textAlign: 'center' }}>{item.label}</Typography>
                                        </Box>
                                    </Button>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </DrawerDesktop>
                <Box component="main" sx={{ flexGrow: 1, padding: 3, maxWidth: '100%', maxHeight: '100%', overflow: 'auto' }}>
                    <DrawerHeaderDesktop />
                    {props.children}
                </Box>
                <AppBar position="fixed" color="primary" sx={{ display: { sm: 'none' }, top: 'auto', bottom: 0, backgroundColor: '#F7F7F7', color: '#000000', zIndex: 1202 }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        {props?.navItems.slice(0, 4)?.map((item, index) => {
                            return <IconButton key={index} component={Link} to={item?.link} color="inherit" sx={{ display: 'block', maxWidth: '80px' }}>
                                <Box sx={{ display: 'flex', width: '60px', justifyContent: 'center' }} >
                                    {item.icon}
                                </Box>
                                <Typography sx={{ fontSize: 12 }}>{item.label}</Typography>
                            </IconButton>
                        })}
                        {props?.navItems.length > 4 && <IconButton color="inherit" sx={{ display: 'block', maxWidth: '80px' }} onClick={() => setOpen(!open)}>
                            <Box sx={{ display: 'flex', width: '60px', justifyContent: 'center' }}  >
                                {open ? <MoreHorizOutlinedIcon /> : <MoreVertOutlinedIcon />}
                            </Box>
                            <Typography sx={{ fontSize: 12 }}>{open ? 'Less' : 'More'}</Typography>
                        </IconButton>}
                    </Toolbar>
                </AppBar>
                <Drawer variant='persistent' sx={{ display: { sm: 'none' }, zIndex: 1201 }}
                    anchor='bottom'
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box sx={{ minHeight: '0', width: 'calc(100%)', paddingBottom: '65px', backgroundColor: '#F7F7F7', borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}>
                        <Box component={'div'} sx={{ padding: 2 }} >
                            {open && props?.navItems?.length > 4 && props?.navItems?.slice(4, props?.navItems?.length)?.map((item, index) => {
                                return <Box key={index} sx={{ py: '6px' }}>
                                    <Button component={Link} to={item?.link} color="inherit" sx={{ width: '100%', display: open ? 'inline-flex' : 'block', justifyContent: 'start', textTransform: 'capitalize' }}>
                                        <Box sx={{ width: open ? '50px' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {item.icon}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography sx={{ fontSize: open ? 14 : 12, fontWeight: '500', textWrap: 'balance', verticalAlign: 'middle', textAlign: 'center' }}>{item.label}</Typography>
                                        </Box>
                                    </Button>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </Drawer>
            </Box>
        </div>
    );
}

export default Navigation;