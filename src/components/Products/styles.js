import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
  },
  searchs: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '40px',
    },
    container: {
      marginBottom: '64px', // Adjust the value to increase or decrease the gap
    },
    toolbar: theme.mixins.toolbar,
    title: {
      marginTop: '32px', // Adjust the value to increase or decrease the gap
    },
    hr: {
      marginTop: '16px', // Adjust the value to increase or decrease the gap
    },
    cardDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '32px', // Adjust the value to increase or decrease the gap
      alignItems: 'center',
    },
    emptyButton: {
      marginRight: '16px', // Adjust the value to increase or decrease the gap
    },
    checkoutButton: {
      marginLeft: '16px', // Adjust the value to increase or decrease the gap
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  searchb: {
    marginBottom: '10px',
    height: '50%',
    width: '50%',
    paddingLeft: '10px',
    },
}));
