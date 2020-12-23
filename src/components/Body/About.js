import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function AboutContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <Typography component="div" style={{ backgroundColor: '#ffffff', height: '20vh' }}></Typography> */}
        <section class="page-section bg-light" id="about">
						<div class="container">
								<div class="row justify-content-center">
										<div class="col-lg-8 text-center">
												<h2 class="section-heading text-uppercase">About</h2>
												<hr class="divider light my-4" />
												<p class="text-muted px-3">在宅ワークで時間を持て余し、趣味で始めたプログラミングでいろいろなことができるようになりました。
                        業務でもデータの取り扱いを担当しており、プログラミングを使ってデータ収集を行っております。
												ルーチン作業の自動化やスクレイピング等、幅広くご相談ください。
														<a href="https://note.com/mi_212" target="_blank" rel="noopener noreferrer">note</a>や<a href="https://twitter.com/mi21216" target="_blank" rel="noopener noreferrer">Twitter</a>でも情報発信しています。
														仕事の依頼も含めたご連絡は<a href="https://twitter.com/mi21216" target="_blank" rel="noopener noreferrer">Twitter</a>のDMよりお願い致します。
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