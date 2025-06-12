import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match");
			setIsLoading(false);
			return;
		}

		// TODO: Implement actual signup logic
		console.log("Signup attempt:", formData);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			// For now, just redirect to stores
			window.location.href = "/stores";
		}, 1000);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Create your account
					</CardTitle>
					<CardDescription className="text-center">
						Sign up to start building your online store
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="firstName">First name</Label>
								<Input
									id="firstName"
									name="firstName"
									type="text"
									placeholder="John"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="lastName">Last name</Label>
								<Input
									id="lastName"
									name="lastName"
									type="text"
									placeholder="Doe"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="john@example.com"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<Input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									placeholder="Create a password"
									value={formData.password}
									onChange={handleChange}
									required
									className="pr-10"
								/>
								<button
									type="button"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
								>
									{showPassword ? (
										<EyeOff size={20} />
									) : (
										<Eye size={20} />
									)}
								</button>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirmPassword">
								Confirm password
							</Label>
							<div className="relative">
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type={
										showConfirmPassword
											? "text"
											: "password"
									}
									placeholder="Confirm your password"
									value={formData.confirmPassword}
									onChange={handleChange}
									required
									className="pr-10"
								/>
								<button
									type="button"
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
									}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
								>
									{showConfirmPassword ? (
										<EyeOff size={20} />
									) : (
										<Eye size={20} />
									)}
								</button>
							</div>
						</div>
						<Button
							type="submit"
							className="w-full"
							disabled={isLoading}
						>
							{isLoading
								? "Creating account..."
								: "Create account"}
						</Button>
					</form>
					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							Already have an account?{" "}
							<Link
								to="/login"
								className="font-medium text-primary hover:underline"
							>
								Sign in
							</Link>
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Signup;
