import React, { useEffect } from "react";
import { Outlet, Navigate, useParams, useNavigate } from "react-router-dom";
import {
	SidebarProvider,
	SidebarInset,
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { SitesHeader } from "./header/SitesHeader";
import { SiteSidebar } from "./sidebar/SiteSidebar";
import { useSite } from "@/context/SiteContext";
import ProtectedLayout from "../ProtectedLayout";

export const SiteLayout = () => {
	const navigate = useNavigate();
	const { siteId } = useParams();
	const { sites, setCurrentSite, isLoading } = useSite();

	// TODO: In a real app, you would fetch the site data based on siteId
	// For now, we'll just check if we have a valid siteId
	if (!siteId) {
		return <Navigate to="/sites" replace />;
	}

	useEffect(() => {
		if (!isLoading) {
			const site = sites.find((s) => s.id === siteId);
			if (site) {
				setCurrentSite(site);
			} else {
				console.error(`Site with id ${siteId} not found`);
				navigate("/sites");
			}
		}
	}, [siteId, sites, isLoading, setCurrentSite, navigate]);

	if (isLoading) {
		return <SiteLayoutSkeleton />;
	}

	return (
		<ProtectedLayout>
			<div className="min-h-screen">
				<SidebarProvider
					style={{
						"--sidebar-width": "calc(var(--spacing) * 72)",
						"--header-height": "calc(var(--spacing) * 12)",
					}}
				>
					{/* Sidebar */}
					<SiteSidebar variant="inset" />
					<SidebarInset>
						<div className="min-h-screen">
							<SitesHeader />
							<div className="px-4 lg:px-8 py-4 lg:py-6">
								<Outlet />
							</div>
						</div>
					</SidebarInset>
				</SidebarProvider>
			</div>
		</ProtectedLayout>
	);
};


function SiteLayoutSkeleton({ ...props }) {
	return (
		<ProtectedLayout>
			<div className="min-h-screen">
				<SidebarProvider
					style={{
						"--sidebar-width": "calc(var(--spacing) * 72)",
						"--header-height": "calc(var(--spacing) * 12)",
					}}
				>
					{/* Sidebar Skeleton */}
					<Sidebar variant="inset" collapsible="icon" {...props}>
						<SidebarHeader>
							{/* Site Switcher Skeleton */}
							<Skeleton className="h-12 w-full mb-8" />
						</SidebarHeader>

						<SidebarContent>
							{/* Navigation Groups */}
							<SidebarGroup>
								<SidebarGroupContent>
									{/* Main Navigation */}
									<SidebarMenu>
										{[1, 2, 3, 4].map((i) => (
											<SidebarMenuItem key={i}>
												<div className="flex items-center mb-4">
													<Skeleton className="h-8 w-full" />{" "}
													{/* Label */}
												</div>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>

							{/* User Section */}
							<SidebarGroup className="mt-auto">
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarMenuItem>
											<div className="flex items-center gap-3">
												<Skeleton className="h-8 w-8 rounded-full" />{" "}
												{/* Avatar */}
												<div className="space-y-1">
													<Skeleton className="h-3 w-20" />{" "}
													{/* Name */}
													<Skeleton className="h-3 w-16" />{" "}
													{/* Email */}
												</div>
											</div>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarContent>
					</Sidebar>

					{/* Main Content Skeleton */}
					<SidebarInset>
						<div className="min-h-screen">
							{/* Header */}
							<div className="border-b">
								<div className="flex h-[var(--header-height)] items-center px-6">
									<Skeleton className="h-8 w-48" />
								</div>
							</div>

							{/* Content */}
							<div className="px-4 lg:px-8 py-4 lg:py-6">
								<div className="space-y-6">
									<Skeleton className="h-8 w-48" />{" "}
									{/* Page Title */}
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
										{[1, 2, 3].map((i) => (
											<Skeleton
												key={i}
												className="h-32 w-full"
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</SidebarInset>
				</SidebarProvider>
			</div>
		</ProtectedLayout>
	);
}