import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, Building, MapPin, Save } from "lucide-react";

const Profile = () => {
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSave = async () => {
		setIsLoading(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsLoading(false);
		console.log("Profile saved");
	};

	return (
		<div className="w-site mx-auto space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-gray-900">
					Profile Settings
				</h1>
				<p className="text-gray-600 mt-2">
					Manage your account information and preferences
				</p>
			</div>

			<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
				{/* Profile Picture */}
				<Card>
					<CardHeader>
						<CardTitle>Profile Picture</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center space-x-4">
							<Avatar className="w-20 h-20">
								<AvatarImage src="/placeholder.svg" />
								<AvatarFallback className="text-lg">
									JD
								</AvatarFallback>
							</Avatar>
							<div className="space-y-2">
								<Button variant="outline">
									Change Picture
								</Button>
								<p className="text-sm text-gray-500">
									JPG, GIF or PNG. 1MB max.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Personal Information */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<User className="h-5 w-5" />
							Personal Information
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="firstName">First Name</Label>
								<Input id="firstName" defaultValue="John" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="lastName">Last Name</Label>
								<Input id="lastName" defaultValue="Doe" />
							</div>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="flex items-center gap-2"
							>
								<Mail className="h-4 w-4" />
								Email Address
							</Label>
							<Input
								id="email"
								type="email"
								defaultValue="john.doe@example.com"
							/>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="flex items-center gap-2"
							>
								<Phone className="h-4 w-4" />
								Phone Number
							</Label>
							<Input
								id="phone"
								type="tel"
								defaultValue="+1 (555) 123-4567"
							/>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="flex gap-6 w-full flex-col md:flex-row flex-wrap">
				{/* Business Information */}
				<Card className={"grow"}>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Building className="h-5 w-5" />
							Business Information
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="company">Company Name</Label>
							<Input
								id="company"
								defaultValue="Acme Corporation"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="jobTitle">Job Title</Label>
							<Input id="jobTitle" defaultValue="CEO" />
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="address"
								className="flex items-center gap-2"
							>
								<MapPin className="h-4 w-4" />
								Business Address
							</Label>
							<Input
								id="address"
								defaultValue="123 Business St, City, State 12345"
							/>
						</div>
					</CardContent>
				</Card>

				{/* Account Settings */}
				<Card className={"grow"}>
					<CardHeader>
						<CardTitle>Account Settings</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="timezone">Timezone</Label>
							<Input
								id="timezone"
								defaultValue="UTC-8 (Pacific Time)"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="language">Language</Label>
							<Input id="language" defaultValue="English (US)" />
						</div>
					</CardContent>
				</Card>
			</div>
			{/* Save Button */}
			<div className="flex justify-end">
				<Button
					onClick={handleSave}
					disabled={isLoading}
					className="flex items-center gap-2"
				>
					<Save className="h-4 w-4" />
					{isLoading ? "Saving..." : "Save Changes"}
				</Button>
			</div>
		</div>
	);
};

export default Profile;
