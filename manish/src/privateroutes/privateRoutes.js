import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);
    
    if (!token) {
        return null;
    }
    return children;
}
export default PrivateRoute