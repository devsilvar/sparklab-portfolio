import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import { userSites } from "@/lib/data/sites";

const SiteContext = createContext(undefined);

export const useSite = () => {
	const context = useContext(SiteContext);
	if (!context) {
		throw new Error("useSite must be used within a SiteProvider");
	}
	return context;
};


export const SiteProvider = ({ children }) => {
	const [currentSite, setCurrentSite] = useState(null);
	const [sites, setSites] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// Load sites on mount
	useEffect(() => {
		const loadSites = async () => {
			try {
				// Simulate API call
				await new Promise((resolve) => setTimeout(resolve, 1000));
				setSites(userSites); // Replace with actual API call
			} catch (error) {
				console.error("Failed to load sites", error);
			} finally {
				setIsLoading(false);
			}
		};

		loadSites();
	}, []);

	return (
		<SiteContext.Provider
			value={{ currentSite, setCurrentSite, sites, setSites, isLoading }}
		>
			{children}
		</SiteContext.Provider>
	);
};
