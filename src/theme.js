import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
	palette: {
		primary: {
			light: cyan[100],
			main: cyan[500],
			dark: cyan[800],
			contrastText: '#fff',
			contrastThreshold: 3
		},
		secondary: {
			light: grey[100],
			main: grey[500],
			dark: grey[900],
			contrastText: '#fff',
			contrastThreshold: 3
		}
	},
	typography: {
		useNextVariants: true,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	overrides: {
		MuiFormControl: {
			root: {
				textAlign: 'left'
			}
		},
		MuiInputBase: {
			root: {
				fontSize: '1.4em',
				width: '100%'
			}
		},
		MuiSelect: {
			root: {
				fontSize: '1em',
				width: '11em',
			}
		},
		MuiFormLabel: {
			root: {
				fontSize: '1.3em',
				lineHeight: '1.3em'
			}
		}
	}
});
