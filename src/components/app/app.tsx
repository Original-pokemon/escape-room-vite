import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../../const/app-route';
import { authorizationStatus } from '../../const/authorization-status';
import Booking from '../../pages/booking';
import Contacts from '../../pages/contacts';
import Login from '../../pages/login';
import Main from '../../pages/main';
import MyQuests from '../../pages/my-quests';
import Quest from '../../pages/quest';
import PrivateRoute from '../private-route/private-route';

export default function App(): React.JSX.Element {
  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} >
          <Route
            index
            element={<Main />}
          />
          <Route
            path={AppRoute.Contacts}
            element={<Contacts />}
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyQuests />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Quest}
            element={<Quest />}
          />

          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Booking />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Login}
            element={<Login />}
          />

          {/* <Route path='*' element={<NotFoundPage />}></Route> */}
        </Route>
      </Routes >
    </BrowserRouter>
  );
}


