import React from "react";
import { Link } from "react-router-dom";

export const MainFooter = () => {
	return (
		<footer className="bg-white border-t border-gray-200">
			{/* <div className="w-site mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-[1]">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">
							FolioEngine
						</h3>
						<p className="text-sm text-gray-600">
							The all-in-one platform for managing your e-commerce
							stores.
						</p>
					</div>

					<div>
						<h4 className="font-medium text-gray-900 mb-3">
							Product
						</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link
									to="/features"
									className="hover:text-primary"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									to="/pricing"
									className="hover:text-primary"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									to="/integrations"
									className="hover:text-primary"
								>
									Integrations
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium text-gray-900 mb-3">
							Support
						</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link
									to="/support"
									className="hover:text-primary"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-primary"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									to="/status"
									className="hover:text-primary"
								>
									System Status
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium text-gray-900 mb-3">
							Company
						</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link
									to="/about"
									className="hover:text-primary"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="hover:text-primary"
								>
									Privacy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="hover:text-primary"
								>
									Terms
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div> */}

			{/* Footer Bottom */}
			<div className="w-site relative z-[1]">
				<div className="py-8 text-center">
					<p className="text-sm text-gray-600">
						© 2024 FolioEngine. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
