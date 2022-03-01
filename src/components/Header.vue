<template>
	<div class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">GNICT</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarColor01"
				aria-controls="navbarColor01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarColor01">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Features</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Pricing</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">관리자 페이지</a>
					</li>
				</ul>
				<ul class="nav navbar-nav ml-auto">
					<li class="nav-item">
						<router-link to="/login" class="nav-link">로그인</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/join" class="nav-link">회원가입</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped></style>
