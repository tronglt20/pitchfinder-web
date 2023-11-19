import React from "react";
import { login } from "../../Store/auth";
import { Authentication } from "../../Services/iamService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";

const SignInPage = () => {
	const dispatch = useDispatch();
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = new FormData(event.currentTarget);
			const response = await Authentication(
				data.get("username"),
				data.get("password")
			);
			if (response.status === 200) {
				dispatch(login(response.data));
				localStorage.setItem("accessToken", response.data.accessToken);
				localStorage.setItem("isAuthentication", true);
				toast.success("Login successful!");
				redirect("/dashboard");
			} else {
				toast.error("Error");
			}
		} catch {
			toast.error("Got Error at somewhere");
		}
	};

	return (
		<div className="min-h-screen gradient flex">
			<div className="bg-white px-16 py-12 max-w-lg m-auto rounded-lg shadow-lg">
				<div className="text-center">
					<div className="mx-auto w-12 h-12 bg-primary rounded-full text-white">
						<div className="w-full h-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-full mx-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
								/>
							</svg>
						</div>
					</div>
					<h1 className="mt-2 text-2xl font-medium text-secondary">Sign in</h1>
				</div>
				<form onSubmit={handleSubmit} className="mt-6 space-y-4">
					<label className="block text-secondary text-md font-medium mb-2">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-primary focus:shadow-outline"
							name="username"
							type="email"
							placeholder="Username"
						/>
					</label>
					<label className="block text-secondary text-md font-medium mb-2">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-primary focus:shadow-outline"
							name="password"
							type="password"
							placeholder="Password"
						/>
					</label>
					<div className="flex items-center justify-between">
						<input
							id="checkbox"
							type="checkbox"
							value=""
							className="w-4 h-4 text-primary rounded accent-secondary"
						/>
						<label
							className="items-center align-middle text-secondary text-md font-medium ml-1 mr-4"
							htmlFor="checkbox"
						>
							Remember me
						</label>
						<a
							href="/"
							className="text-md font-medium text-primary hover:underline"
						>
							Forgot password?
						</a>
					</div>
					<button
						type="submit"
						className="w-full py-2 bg-primary hover:bg-secondary text-white rounded-md font-medium text-lg"
					>
						Sign In
					</button>
					<button className="w-full flex items-center justify-center py-2 bg-secondary hover:bg-dark text-white rounded-md font-medium text-lg">
						<svg
							className="h-6 w-6 mr-2"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-0.5 0 48 48"
							version="1.1"
						>
							<g
								id="Icons"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g id="Color-" transform="translate(-401.000000, -860.000000)">
									<g id="Google" transform="translate(401.000000, 860.000000)">
										<path
											d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
											id="Fill-1"
											fill="#FBBC05"
										>
											{" "}
										</path>
										<path
											d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
											id="Fill-2"
											fill="#EB4335"
										>
											{" "}
										</path>
										<path
											d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
											id="Fill-3"
											fill="#34A853"
										>
											{" "}
										</path>
										<path
											d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
											id="Fill-4"
											fill="#4285F4"
										>
											{" "}
										</path>
									</g>
								</g>
							</g>
						</svg>
						<span>Continue with Google</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignInPage;
