<template>
	<div
		class="modal modal-signin position-static d-block bg-secondary py-5"
		tabindex="-1"
		role="dialog"
		id="modalSignin"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<!-- <h5 class="modal-title">Modal title</h5> -->
					<h2 class="fw-bold mb-0">계정 만들기</h2>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>

				<div class="modal-body p-5 pt-0">
					<form class="">
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control rounded-4"
								id="user_name"
								placeholder="이름"
								required="required"
							/>
							<label for="user_name">이름</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="email"
								class="form-control rounded-4"
								id="user_email"
								placeholder="이메일"
								required="required"
							/>
							<label for="user_email">이메일</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="password"
								class="form-control rounded-4"
								id="user_password"
								placeholder="비밀번호"
								required="required"
							/>
							<label for="user_password">비밀번호</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="password"
								class="form-control rounded-4"
								id="user_password_confirmation"
								placeholder="비밀번호 확인"
								required="required"
							/>
							<label for="user_password_confirmation">비밀번호 확인</label>
						</div>
						<div class="col-12 mb-3">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="invalidCheck"
									required
								/>
								<label class="form-check-label" for="invalidCheck">
									이용약관 및 개인정보 처리방침 에 동의합니다.
								</label>
								<div class="invalid-feedback">
									You must agree before submitting.
								</div>
							</div>
						</div>
						<button
							class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
							type="submit"
						>
							계정 만들기
						</button>
						<small class="text-muted"
							>By clicking Sign up, you agree to the terms of use.</small
						>
						<hr class="my-4" />
						<h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
						<button
							class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4"
							type="submit"
						>
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#twitter" />
							</svg>
							Sign up with Twitter
						</button>
						<button
							class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4"
							type="submit"
						>
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#facebook" />
							</svg>
							Sign up with Facebook
						</button>
						<button
							class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4"
							type="submit"
						>
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#github" />
							</svg>
							Sign up with GitHub
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped></style>
