import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Registrar } from '../pages/registrar/Registrar';
import { BrowserRouter, Routes as RRDRouter, Route } from 'react-router-dom';

export function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
