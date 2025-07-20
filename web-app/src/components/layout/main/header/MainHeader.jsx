import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Store, User, Shield, HelpCircle, LogOut, Menu } from "lucide-react";
import StickyHeader from "./StickyHeader";

export const MainHeader = () => {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [profileMenuOpen, setProfileMenuOpen] = useState(false);

	const isActive = (path) => location.pathname === path;

	const navLinks = (
		<>
			<NavigationMenuItem>
				<Link
					to="/"
					className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
						isActive("/")
							? "text-primary bg-primary/10"
							: "text-gray-700 hover:text-primary"
					}`}
					onClick={() => setMobileOpen(false)}
				>
					Overview
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Link
					to="/sites"
					className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
						isActive("/sites")
							? "text-primary bg-primary/10"
							: "text-gray-700 hover:text-primary"
					}`}
					onClick={() => setMobileOpen(false)}
				>
					<Store className="h-4 w-4" />
					Sites
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Link
					to="/support"
					className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
						isActive("/support")
							? "text-primary bg-primary/10"
							: "text-gray-700 hover:text-primary"
					}`}
					onClick={() => setMobileOpen(false)}
				>
					<HelpCircle className="h-4 w-4" />
					Support
				</Link>
			</NavigationMenuItem>
		</>
	);

	const handleLogout = () => {
		// TODO: Implement actual logout logic
		console.log("Logout clicked");
		window.location.href = "/login";
	};

	return (
		<StickyHeader>
			<header className="w-full bg-card border-b border-gray-200">
				<div className="w-site mx-auto px-4">
					<div className="flex items-center justify-between py-4 space-x-8">
						<div className="flex items-center grow space-x-8">
							{/* Logo */}
							<Link
								to="/"
								className="text-2xl font-bold text-gray-900"
							>
								FolioEngine
							</Link>
							{/* Desktop Navigation */}
							<nav className="hidden md:block grow">
								<NavigationMenu className="max-w-[100%] justify-end">
									<NavigationMenuList className="space-x-6">
										{navLinks}
									</NavigationMenuList>
								</NavigationMenu>
							</nav>
						</div>
						{/* Profile Icon (Desktop) */}
						<div className="hidden md:flex items-center relative">
							<button
								className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none cursor-pointer"
								onClick={() => setProfileMenuOpen((v) => !v)}
								aria-label="Open profile menu"
							>
								<User className="h-6 w-6 text-gray-700" />
							</button>
							{/* Profile Dropdown */}
							{profileMenuOpen && (
								<div
									className="absolute right-0 top-11 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden"
									onMouseLeave={() =>
										setProfileMenuOpen(false)
									}
								>
									<Link
										to="/account"
										className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() =>
											setProfileMenuOpen(false)
										}
									>
										<User className="h-4 w-4 mr-2" />
										Profile Settings
									</Link>
									<Link
										to="/security"
										className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() =>
											setProfileMenuOpen(false)
										}
									>
										<Shield className="h-4 w-4 mr-2" />
										Security
									</Link>
									<Link
										to="/billing"
										className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() =>
											setProfileMenuOpen(false)
										}
									>
										<User className="h-4 w-4 mr-2" />
										Billing & Plans
									</Link>
									<button
										className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => {
											setProfileMenuOpen(false);
											handleLogout();
										}}
									>
										<LogOut className="h-4 w-4 mr-2" />
										Logout
									</button>
								</div>
							)}
						</div>
						{/* Hamburger (Mobile) */}
						<button
							className="md:hidden p-2 rounded hover:bg-gray-100"
							onClick={() => setMobileOpen(true)}
							aria-label="Open menu"
						>
							<Menu className="h-6 w-6" />
						</button>
					</div>
				</div>
				{/* Mobile Slide-in Menu */}
				<div
					className={`fixed inset-0 z-50 transition-all duration-300 ${
						mobileOpen ? "visible" : "invisible pointer-events-none"
					}`}
				>
					{/* Overlay */}
					<div
						className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
							mobileOpen ? "opacity-100" : "opacity-0"
						}`}
						onClick={() => setMobileOpen(false)}
					/>
					{/* Slide-in Panel */}
					<div
						className={`absolute top-0 right-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 flex flex-col ${
							mobileOpen ? "translate-x-0" : "translate-x-full"
						}`}
					>
						<div className="flex items-center justify-between px-4 py-4 border-b">
							<Link
								to="/"
								className="text-2xl font-bold text-gray-900"
								onClick={() => setMobileOpen(false)}
							>
								FolioEngine
							</Link>
							<button
								className="p-2 rounded hover:bg-gray-100"
								onClick={() => setMobileOpen(false)}
								aria-label="Close menu"
							>
								<span className="sr-only">Close</span>
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<nav className="flex-1 overflow-y-auto px-4 py-6">
							<ul className="flex flex-col space-y-2">
								<li>
									<Link
										to="/"
										className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
											isActive("/")
												? "text-primary bg-primary/10"
												: "text-gray-700 hover:text-primary"
										}`}
										onClick={() => setMobileOpen(false)}
									>
										Overview
									</Link>
								</li>
								<li>
									<Link
										to="/sites"
										className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2 ${
											isActive("/sites")
												? "text-primary bg-primary/10"
												: "text-gray-700 hover:text-primary"
										}`}
										onClick={() => setMobileOpen(false)}
									>
										<Store className="h-4 w-4" />
										Sites
									</Link>
								</li>
								<li>
									<Link
										to="/support"
										className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2 ${
											isActive("/support")
												? "text-primary bg-primary/10"
												: "text-gray-700 hover:text-primary"
										}`}
										onClick={() => setMobileOpen(false)}
									>
										<HelpCircle className="h-4 w-4" />
										Support
									</Link>
								</li>
							</ul>
							{/* Profile Section */}
							<div className="mt-8 border-t pt-4">
								<Link
									to="/account"
									className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors gap-2 ${
										isActive("/account")
											? "text-primary bg-primary/10"
											: "text-gray-700 hover:text-primary"
									}`}
									onClick={() => setMobileOpen(false)}
								>
									<User className="h-4 w-4" />
									Profile Settings
								</Link>
								<Link
									to="/security"
									className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors gap-2 ${
										isActive("/security")
											? "text-primary bg-primary/10"
											: "text-gray-700 hover:text-primary"
									}`}
									onClick={() => setMobileOpen(false)}
								>
									<Shield className="h-4 w-4" />
									Security
								</Link>
								<Link
									to="/billing"
									className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors gap-2 ${
										isActive("/billing")
											? "text-primary bg-primary/10"
											: "text-gray-700 hover:text-primary"
									}`}
									onClick={() => setMobileOpen(false)}
								>
									<User className="h-4 w-4" />
									Billing & Plans
								</Link>
								<button
									className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary transition-colors mt-2"
									onClick={() => {
										setMobileOpen(false);
										handleLogout();
									}}
								>
									<LogOut className="h-4 w-4" />
									Logout
								</button>
							</div>
						</nav>
					</div>
				</div>
			</header>
		</StickyHeader>
	);
};
