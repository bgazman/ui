import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
                        import { ThemeProvider } from "@theme/theme-context";
                        import { LayoutProvider } from "@layout/context/layout-context";
                        import LayoutDemo from "@pages/layout-demo/layout-demo";
                        import DynamicGridDemo from "@pages/dynamic-grid-demo/dynamic-grid-demo";
                        import Home from "@pages/home/home";

const App = () => {
    return (
        <ThemeProvider>
            <LayoutProvider>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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