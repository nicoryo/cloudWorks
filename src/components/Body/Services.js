import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Service01Card from './Services/Service01';
import Service02Card from './Services/Service02';
import Service03Card from './Services/Service03';
import '../../App.css';

export default function ServicesContainer() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} /> */}
        <section class="page-section" id="services">
						<div class="container">
                <div class="col-lg-8 text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <hr class="divider light my-4" />
                    <p class="text-muted px-3">私の主なサービスを紹介します。下記に該当しない場合も気軽にご相談ください。</p>
                </div>
                <div className="serviceContainer">
                  <Service01Card />
                  <Service02Card />
                  <Service03Card />
                </div>
						</div>
				</section>
      </Container>
    </React.Fragment>
  );
}