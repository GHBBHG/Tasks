import { Home } from "../pages/home/Home";
import { Tasks } from "../pages/tasks/Tasks";
import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";

export function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
