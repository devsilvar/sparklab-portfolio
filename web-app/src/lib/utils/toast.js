import { toast } from "sonner";

export const showToast = {
	success: (message) => {
		toast.success(message, {
			duration: 4000,
			className: "bg-background text-foreground",
		});
	},
	error: (message) => {
		toast.error(message, {
			duration: 5000,
			className: "bg-background text-destructive",
		});
	},
	loading: (message) => {
		toast.loading(message, {
			className: "bg-background text-foreground",
		});
	},
	promise: async (
		promise,
		{
			loading = "Loading...",
			success = "Success!",
			error = "Something went wrong",
		}
	) => {
		return toast.promise(promise, {
			loading,
			success,
			error,
		});
	},
};
