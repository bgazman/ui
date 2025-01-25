import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-context.tsx";
import { LayoutProvider } from "./components/layout/context/layout-context.tsx";
import LayoutDemo from "./pages/layout-demo/layout-demo.tsx";
import DynamicGridDemo from "./pages/dynamic-grid-demo/dynamic-grid-demo.tsx";
import Home from "./pages/home/home.tsx";



const App = () => {
    return (
        <ThemeProvider>
            <LayoutProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/layout-demo" element={<LayoutDemo />} />
                        <Route path="/dynamic-grid-demo" element={<DynamicGridDemo />} />
                    </Routes>
                </Router>
            </LayoutProvider>
        </ThemeProvider>
    );
};

export default App;