import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="md"> */}
      <Container fixed>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          {/* <BottomNavigationAction label="Twetter" icon={<TwitterIcon />} />
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} /> */}
          <Typography paragraph>
          Copyright SATO2828,  2021
          </Typography>
          
        </BottomNavigation>
      </Container>
    </React.Fragment>
  );
}
