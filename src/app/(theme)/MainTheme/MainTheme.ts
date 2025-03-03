import { createTheme } from '@mui/material/styles';

export let mainTheme = createTheme({
   palette: {
      primary: {
         light: '#D3D3D3',
         main: '#212121',
         dark: '#3A3A3A',
      },
   },
   typography: {
      h5: {
         fontWeight: 500,
         fontSize: 26,
         letterSpacing: 0.5,
      },
   },
   shape: {
      borderRadius: 8,
   },
   components: {
      MuiTab: {
         defaultProps: {
            disableRipple: true,
         },
      },
   },
   mixins: {
      toolbar: {
         minHeight: 48,
      },
   },
});

mainTheme = {
   ...mainTheme,
   components: {
      MuiDrawer: {
         styleOverrides: {
            paper: {
               backgroundColor: '#3A3A3A',
               width: 256,
            },
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               textTransform: 'none',
            },
            contained: {
               boxShadow: 'none',
               '&:active': {
                  boxShadow: 'none',
               },
            },
         },
      },
      MuiTabs: {
         styleOverrides: {
            root: {
               marginLeft: mainTheme.spacing(1),
            },
            indicator: {
               height: 3,
               borderTopLeftRadius: 3,
               borderTopRightRadius: 3,
               backgroundColor: mainTheme.palette.common.white,
            },
         },
      },
      MuiTab: {
         styleOverrides: {
            root: {
               textTransform: 'none',
               margin: '0 16px',
               minWidth: 0,
               padding: 0,
               [mainTheme.breakpoints.up('md')]: {
                  padding: 0,
                  minWidth: 0,
               },
            },
         },
      },
      MuiIconButton: {
         styleOverrides: {
            root: {
               padding: mainTheme.spacing(1),
            },
         },
      },
      MuiTooltip: {
         styleOverrides: {
            tooltip: {
               borderRadius: 4,
            },
         },
      },
      MuiDivider: {
         styleOverrides: {
            root: {
               backgroundColor: 'rgb(255,255,255,0.15)',
            },
         },
      },
      MuiListItemButton: {
         styleOverrides: {
            root: {
               '&.Mui-selected': {
                  color: '#4fc3f7',
               },
            },
         },
      },
      MuiListItemText: {
         styleOverrides: {
            primary: {
               fontSize: 14,
               fontWeight: mainTheme.typography.fontWeightMedium,
            },
         },
      },
      MuiListItemIcon: {
         styleOverrides: {
            root: {
               color: 'inherit',
               minWidth: 'auto',
               marginRight: mainTheme.spacing(2),
               '& svg': {
                  fontSize: 20,
               },
            },
         },
      },
      MuiAvatar: {
         styleOverrides: {
            root: {
               width: 32,
               height: 32,
            },
         },
      },
   },
};
