import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedLayout({children}) {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isLoading && !user) {
            navigate(`/login?redirect=true&from=${encodeURIComponent(location.pathname)}`, { replace: true });
        }
    }, [user, isLoading, navigate, location.pathname]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary">
                    {" "}
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return <>{children}</>;
}
