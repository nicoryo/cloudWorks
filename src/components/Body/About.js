import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function AboutContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="md"> */}
      <Container fixed>
        {/* <Typography component="div" style={{ backgroundColor: '#ffffff', height: '20vh' }}></Typography> */}
        <section class="page-section bg-light" id="about">
						<div class="container">
								<div class="row justify-content-center">
										<div class="col-lg-8 text-center">
												<h2 class="section-heading text-uppercase">About</h2>
												<hr class="divider light my-4" />
												<p class="text-muted px-3">
                        業務でもデータの取り扱いを担当しており、プログラミングを使ってデータ収集や自動化を行っております。
												ルーチン作業の自動化やスクレイピング等、幅広くご相談ください。
                        </p>
												{/* <!--<h3 class="section-subheading text-muted">これまでの</h3>--> */}
										</div>
								</div>
						</div>
				</section>
      </Container>
    </React.Fragment>
  );
}