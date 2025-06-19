import { Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ButtonCss } from "./css/ButtonCss";
import { ButtonStyled } from "./css/ButtonStyled";
import { ThemeProvider } from "./css/ThemeContext";
import ThemedComponent from "./css/ThemeComponent";
import { ButtonTailwind } from "./tailwind/ButtonTailwind";
import { InputTailwind } from "./tailwind/InputTailwind";
import { TailwindWorking } from "./tailwind/TailwindWorking";
import { BootstrapButton } from "./bootstrap/BootstrapButtom";
import { DaisyButton } from "./daisy-ui/DaisyButton";

export default function App() {
  return (
    <>
   <DaisyButton />
    <TailwindWorking />
    <BootstrapButton />
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          background: "#21262d",
        }}
      >
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <ButtonCss />
      <ButtonStyled />
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
      <ButtonTailwind />


         <AppRoutes />
    </>
  );
}
