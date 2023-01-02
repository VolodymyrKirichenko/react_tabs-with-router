import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../Navigation/NavBar/NavBar';
import { TabsPage } from '../Pages/TabsPage/TabsPage';
import { HomePage } from '../Pages/HomePage/HomePage';
import { ErrorPage } from '../Pages/ErrorPage/ErrorPage';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
