import { useDispatch } from 'react-redux';
import { logout } from '../../reducer/authReducers';

const Logout = () => {
    const dispatch = useDispatch();

    dispatch(
        logout({
            user: "",
            isAuthenticated: false,
        })
    )
}

export default Logout