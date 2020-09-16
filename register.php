<?php include 'header.php';?>
<main>
	<section class="breadcrumbs">
		<div class="avarta"><img src="images/account.svg" class="img-fluid w-100" alt=""></div>
		<div class="info-bread text-center">
			<div class="container">
				<h2 class="text-uppercase">ĐĂNG KÝ TÀI KHẢN</h2>
				<ul class="list-inline text-uppercase">
					<li class="list-inline-item"><a href="index.php">Trang chủ</a></li>
					<li class="list-inline-item"><a href="javascript:void(0)">Liên hệ</a></li>
				</ul> 
			</div>
		</div>
	</section>
	<section id="account">
		<div class="container">
			<div class="account-info">
				<div class="box-login">
					<p class="text-center">Đăng nhập hoặc đăng ký để lưu sản phẩm yêu thích, đánh giá và nhận thông tin sản phẩm</p>
					<p class="text-center">ĐĂNG NHẬP BẰNG FACEBOOK</p>
					<div class="login-fb text-center">
						<a href=""><img src="images/fb.svg" class="img-fluid" alt=""></a>
					</div>
					<p class="text-center">ĐĂNG NHẬP BẰNG EMAIL</p>
					<div class="login-mail text-center">
						<p>Ghi địa chỉ Email của bạn tại đây</p>
						<input type="text" placeholder="Your email">
						<button type="submit" class="text-uppercase">Tiếp tục</button>
					</div>
				</div>
				
				<div class="other-acc text-center">
					<ul>
						<li><img src="images/ac-1.svg" class="img-fluid" alt=""></li>
						<li><img src="images/ac-2.svg" class="img-fluid" alt=""></li>
						<li><img src="images/ac-3.svg" class="img-fluid" alt=""></li>
						<li><img src="images/ac-4.svg" class="img-fluid" alt=""></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	
	<?php include 'send-mail.php';?>
</main>   
<?php include 'footer.php';?>     
     