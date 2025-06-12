import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
	Shield,
	Key,
	Smartphone,
	Monitor,
	AlertTriangle,
	CheckCircle2,
} from "lucide-react";

const Security = () => {
	const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);
	const [emailNotifications, setEmailNotifications] = React.useState(true);
	const [loginAlerts, setLoginAlerts] = React.useState(true);

	const activeSessions = [
		{
			id: 1,
			device: "MacBook Pro",
			location: "San Francisco, CA",
			lastActive: "2 minutes ago",
			current: true,
		},
		{
			id: 2,
			device: "iPhone 15",
			location: "San Francisco, CA",
			lastActive: "1 hour ago",
			current: false,
		},
		{
			id: 3,
			device: "Chrome on Windows",
			location: "New York, NY",
			lastActive: "2 days ago",
			current: false,
		},
	];

	return (
		<div className="w-site mx-auto space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-gray-900">
					Security Settings
				</h1>
				<p className="text-gray-600 mt-2">
					Manage your account security and privacy settings
				</p>
			</div>

			<div className="grid gap-6">
				{/* Password */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Key className="h-5 w-5" />
							Password
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="currentPassword">
								Current Password
							</Label>
							<Input id="currentPassword" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="newPassword">New Password</Label>
							<Input id="newPassword" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirmPassword">
								Confirm New Password
							</Label>
							<Input id="confirmPassword" type="password" />
						</div>
						<Button>Update Password</Button>
					</CardContent>
				</Card>

				{/* Two-Factor Authentication */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Smartphone className="h-5 w-5" />
							Two-Factor Authentication
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="font-medium">Enable 2FA</h3>
								<p className="text-sm text-gray-500">
									Add an extra layer of security to your
									account
								</p>
							</div>
							<div className="flex items-center gap-2">
								{twoFactorEnabled && (
									<Badge
										variant="secondary"
										className="text-green-600 bg-green-100"
									>
										<CheckCircle2 className="h-3 w-3 mr-1" />
										Enabled
									</Badge>
								)}
								<Switch
									checked={twoFactorEnabled}
									onCheckedChange={setTwoFactorEnabled}
								/>
							</div>
						</div>

						{twoFactorEnabled && (
							<div className="space-y-3 pt-4 border-t">
								<p className="text-sm text-gray-600">
									Backup codes
								</p>
								<Button variant="outline">
									View Backup Codes
								</Button>
							</div>
						)}
					</CardContent>
				</Card>

				{/* Active Sessions */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Monitor className="h-5 w-5" />
							Active Sessions
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{activeSessions.map((session, index) => (
							<div key={session.id}>
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<h3 className="font-medium">
												{session.device}
											</h3>
											{session.current && (
												<Badge
													variant="secondary"
													className="text-green-600 bg-green-100"
												>
													Current
												</Badge>
											)}
										</div>
										<p className="text-sm text-gray-500">
											{session.location}
										</p>
										<p className="text-xs text-gray-400">
											Last active: {session.lastActive}
										</p>
									</div>
									{!session.current && (
										<Button variant="outline" size="sm">
											Revoke
										</Button>
									)}
								</div>
								{index < activeSessions.length - 1 && (
									<Separator className="mt-4" />
								)}
							</div>
						))}
					</CardContent>
				</Card>

				{/* Security Notifications */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<AlertTriangle className="h-5 w-5" />
							Security Notifications
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="font-medium">
									Email notifications
								</h3>
								<p className="text-sm text-gray-500">
									Get notified about account security events
								</p>
							</div>
							<Switch
								checked={emailNotifications}
								onCheckedChange={setEmailNotifications}
							/>
						</div>

						<Separator />

						<div className="flex items-center justify-between">
							<div>
								<h3 className="font-medium">Login alerts</h3>
								<p className="text-sm text-gray-500">
									Get alerted when someone logs into your
									account
								</p>
							</div>
							<Switch
								checked={loginAlerts}
								onCheckedChange={setLoginAlerts}
							/>
						</div>
					</CardContent>
				</Card>

				{/* Danger Zone */}
				<Card className="border-red-200">
					<CardHeader>
						<CardTitle className="text-red-600">
							Danger Zone
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="font-medium">Delete Account</h3>
								<p className="text-sm text-gray-500">
									Permanently delete your account and all data
								</p>
							</div>
							<Button variant="destructive">
								Delete Account
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Security;
