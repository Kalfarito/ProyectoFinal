import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//Instalamos un App Bar de react material UI// 
const drawerWidth = 240;
const navItems = ['Login', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const headingStyle1 = {
    color: 'blue',
    fontSize: '40px',
    textAlign: 'center',
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Manual de Usuario
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Manual de Usuario
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
        <h1><p><headingStyle1><strong> App de notas</strong></headingStyle1></p></h1> 
        <div>
        <a href="Login">Login</a>

        </div>
  <h2>Grupo Progra 3</h2>
      <p><strong> + JOSE LEANDRO RUA RAMIREZ + JAVIER ALBERTO GARCIA SOLIS + ARMANDO ALONSO MONTIEL MONTES </strong></p>
  <h3>Guía de métodos para el RestController:</h3>
  <ol>
    <li>
      <p><strong> "/api" (GET):</strong> Descripción: Retorna un saludo simple "Hello, world!".</p>
    </li>
    <li>
      <p><strong> "/api/allUsers" (GET):</strong> Descripción: Retorna una lista de todos los usuarios almacenados en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/allNotes" (GET):</strong> Descripción: Retorna una lista de todas las notas almacenadas en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/Ubyid" (GET):</strong> Descripción: Retorna un usuario específico según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/Nbyid" (GET):</strong> Descripción: Retorna una nota específica según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/UpdateUbyid" (PUT):</strong> Descripción: Actualiza la información de un usuario específico según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/UpdateNbyid" (PUT):</strong> Descripción: Actualiza la información de una nota específica según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/newuser" (POST):</strong> Descripción: Inserta un nuevo usuario en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/newnote" (POST):</strong> Descripción: Inserta una nueva nota en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/login" (POST):</strong> Descripción: Autentica a un usuario según el nombre de usuario y la contraseña proporcionados, y genera un token JWT para el usuario autenticado.</p>
    </li>
    <li>
      <p><strong> "/api/DeleteUbyid" (DELETE):</strong> Descripción: Elimina un usuario específico de la base de datos según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/DeleteNbyid" (DELETE):</strong> Descripción: Elimina una nota específica de la base de datos según el ID proporcionado.</p>
    </li>
  </ol>
      </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;