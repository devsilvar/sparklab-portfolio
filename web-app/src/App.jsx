import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { AuthProvider } from "./context/AuthContext";
import { SiteProvider } from "./context/SiteContext";
import { MainLayout } from "./components/layout/main/MainLayout";
import { SiteLayout } from "./components/layout/site/SiteLayout";
import NotFound from "./pages/errors/404/NotFound";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Overview from "./pages/main/overview/Overview";
import Dashboard from "./pages/site/dashboard/Dashboard";
import SiteListing from "./pages/main/sites/SiteListing";
import CreateSite from "./pages/main/sites/CreateSite";
import Profile from "./pages/main/profile/Profile";
import Security from "./pages/main/security/Security";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<AuthProvider>
					<SiteProvider>
						<BrowserRouter>
							<Routes>
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />

								{/* Main app routes with header/footer layout */}
								<Route path="/" element={<MainLayout />}>
									<Route index element={<Overview />} />
									<Route
										path="sites"
										element={<SiteListing />}
									/>
									<Route
										path="sites/new"
										element={<CreateSite />}
									/>
									<Route
										path="account"
										element={<Profile />}
									/>
									<Route
										path="billing"
										element={<Dashboard />}
									/>
									<Route
										path="integrations"
										element={<Dashboard />}
									/>
									<Route
										path="security"
										element={<Security />}
									/>
									<Route
										path="support"
										element={<Dashboard />}
									/>
								</Route>

								{/* Store-specific admin routes with sidebar layout */}
								<Route
									path="/sites/:siteId"
									element={<SiteLayout />}
								>
									<Route index element={<Dashboard />} />
									<Route
										path="categories"
										element={<Dashboard />}
									/>
									<Route
										path="orders"
										element={<Dashboard />}
									/>
									<Route
										path="customers"
										element={<Dashboard />}
									/>
									<Route
										path="analytics"
										element={<Dashboard />}
									/>
									<Route
										path="settings"
										element={<Dashboard />}
									/>
								</Route>

								<Route path="*" element={<NotFound />} />
							</Routes>
						</BrowserRouter>
					</SiteProvider>
				</AuthProvider>
				<Toaster position="top-center" />
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App;
