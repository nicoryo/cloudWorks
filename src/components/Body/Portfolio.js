import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Portfolio01Card from './Portfolios/Portfolio01';
import Portfolio02Card from './Portfolios/Portfolio02';
import Portfolio03Card from './Portfolios/Portfolio03';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}> */}
          <section class="page-section bg-light" id="portfolio">
            <div class="row justify-content-center mb-5">
              <div class="col-lg-8 text-center">
                <h2 class="section-heading text-uppercase">Portfolio</h2>
                  <hr class="divider light my-4" />
                    <div className="portfolioContainer">
                      <Portfolio01Card />
                      <Portfolio02Card />
                      <Portfolio03Card />
                    </div>
              </div>
            </div>
          </section>
        {/* </Typography> */}

      </Container>
    </React.Fragment>
  );
}