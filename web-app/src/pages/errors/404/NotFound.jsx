import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

const NotFound = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname
		);
	}, [location.pathname]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-muted">
			<Card className="w-full max-w-md shadow-lg">
				<CardHeader>
					<CardTitle className="text-5xl font-extrabold text-primary mb-2">
						404
					</CardTitle>
					<CardDescription>
						Sorry, we couldn't find that page.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-gray-700 mb-2">
						The page doesn’t exist or may have been moved.
					</p>
					<p className="text-gray-500">
						Please check the URL, return to the homepage, or go back
						to where you were.
					</p>
				</CardContent>
				<CardFooter className="flex justify-between gap-2">
					<Button variant="outline" onClick={() => navigate(-1)}>
						Go Back
					</Button>
					<Button asChild variant="default">
						<Link to="/">Go to Homepage</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default NotFound;
