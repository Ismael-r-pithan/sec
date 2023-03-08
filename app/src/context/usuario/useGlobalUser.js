import createGlobalState from "react-create-global-state";

import { USER_KEY } from "../../constants";

const stateStorage = localStorage.getItem(USER_KEY);
const initialState = localStorage ? JSON.parse(stateStorage) : null;

const [_useUserLogin, Provider] = createGlobalState(initialState);

export function useGlobalUser() {
    const [_user, _setUser] = _useUserLogin();

    function setUser(user) {
        _setUser(user);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    return {
        _user, setUser
    }
}

export const UserLoginProvider = Provider;

