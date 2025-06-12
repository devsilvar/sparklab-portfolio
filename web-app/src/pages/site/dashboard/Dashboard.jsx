import { useEffect, useState } from "react";
import { useSite } from "@/context/SiteContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
	const [dashboardLoading, setDashboardLoading] = useState(true);
	const { currentSite } = useSite();

	useEffect(() => {
		const loadData = async () => {
			try {
				// Simulate API call
				await new Promise((resolve) => setTimeout(resolve, 4000));
			} catch (error) {
				console.error("Failed to load sites", error);
			} finally {
				setDashboardLoading(false);
			}
		};

		loadData();
	}, []);

	if (dashboardLoading) {
		return <DashboardSkeleton />;
	}

	return (
		<>
			<div className="space-y-6">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-3xl font-bold text-gray-900">
							{currentSite?.name}
						</h1>
						<p className="text-gray-600 mt-2">
							Manage your site content and settings
						</p>
					</div>
					<Button
						variant="outline"
						onClick={() =>
							window.open(
								`https://${
									currentSite?.customDomain ||
									currentSite?.domain
								}`,
								"_blank"
							)
						}
					>
						<ExternalLink className="h-4 w-4 mr-2" />
						View Site
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card>
						<CardHeader>
							<CardTitle>Pages</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-3xl font-bold">
								{currentSite?.pageCount}
							</p>
							<p className="text-gray-600">Total pages</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Portfolios</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-3xl font-bold">
								{currentSite?.portfolioCount}
							</p>
							<p className="text-gray-600">Total portfolios</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Blog Posts</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-3xl font-bold">
								{currentSite?.blogCount}
							</p>
							<p className="text-gray-600">Total posts</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

export function DashboardSkeleton() {
	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<div>
					<Skeleton className="h-8 w-48 mb-2" />
					<Skeleton className="h-4 w-64" />
				</div>
				<Skeleton className="h-10 w-32" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{[1, 2, 3].map((i) => (
					<Card key={i}>
						<CardHeader>
							<Skeleton className="h-6 w-24" />
						</CardHeader>
						<CardContent>
							<Skeleton className="h-8 w-16 mb-2" />
							<Skeleton className="h-4 w-24" />
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
