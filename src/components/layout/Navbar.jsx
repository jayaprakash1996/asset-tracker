import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between">
      <h5>Dashboard</h5>

      <button
        className="btn btn-danger btn-sm"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;