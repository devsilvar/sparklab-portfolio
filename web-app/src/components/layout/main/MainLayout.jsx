import React from "react";
import { Outlet } from "react-router-dom";
import { MainHeader } from "./header/MainHeader";
import { MainFooter } from "./footer/MainFooter";
import { MainBody } from "./body/MainBody";
import ProtectedLayout from "../ProtectedLayout";

export const MainLayout = () => {
	return (
		<ProtectedLayout>
			<div className="min-h-screen bg-background text-foreground">
				<div className="max-w-[105rem] mx-auto flex flex-col">
					<MainHeader />
					<MainBody>
						<Outlet />
					</MainBody>
					<MainFooter />
				</div>
			</div>
		</ProtectedLayout>
	);
};
