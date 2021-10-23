import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FormStep1 } from "./pages/Form/FormStep1";
import { FormStep2 } from "./pages/Form/FormStep2";
import { FormStep3 } from "./pages/Form/FormStep3";
import { Home } from "./pages/Home";
import { Cinema } from "./pages/Cinemas";
import { Shows } from "./pages/Shows";
import { Eventos } from "./pages/Eventos";
import { RockInRio } from "./pages/Rockinrio";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/cinema" exact component={Cinema} />
      <Route path="/rockinrio" exact component={RockInRio} />
      <Route path="/eventos" exact component={Eventos} />
      <Route path="/shows" exact component={Shows} />
      <Route path="/step1" exact component={FormStep1} />
      <Route path="/step2" component={FormStep2} />
      <Route path="/step3" component={FormStep3} />
    </BrowserRouter>
  );
};
