<?php include 'header.php';?>
<main>
	<section class="breadcrumbs">
		<div class="avarta"><img src="images/account.svg" class="img-fluid w-100" alt=""></div>
		<div class="info-bread text-center">
			<div class="container">
				<h2 class="text-uppercase">TÀI KHOẢN CÁ NHÂN</h2>
				<ul class="list-inline text-uppercase">
					<li class="list-inline-item"><a href="index.php">Trang chủ</a></li>
					<li class="list-inline-item"><a href="javascript:void(0)">Liên hệ</a></li>
				</ul> 
			</div>
		</div>
	</section>
	<section id="account">
		<div class="container">
			<div class="title-black text-center">QUẢN LÝ TÀI KHOẢN</div>
			<div class="account-info">
				<div class="box-user">
					<div class="regis">
						<form action="">
							<div class="item"><input type="text" placeholder="Họ Và Tên"></div>
							<div class="item"><input type="text" placeholder="Địa Chỉ Email"></div>
							<div class="item"><input type="text" placeholder="Mật Khẩu"></div>
							<div class="item"><input type="text" placeholder="Đổi Mật Khẩu"></div>
							<div class="item text-center"><button>Hủy Đăng Ký</button></div>
						</form>
					</div>
					<div class="avarta"><img src="images/user.svg" class="img-fluid" alt=""></div>
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
    