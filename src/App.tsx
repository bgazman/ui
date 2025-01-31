import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@theme/theme-context";
import { LayoutProvider } from "@layout/context/layout-context";

import Home from "@pages/home/home";
import DocsPage from "@pages/docs/docs"; // Import the DocsPage component
import DemoPage from "@pages/demo/demo";
const App = () => {
    return (
        <ThemeProvider>
            <LayoutProvider>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/docs" element={<DocsPage />} /> {/* Add the DocsPage route */}
                        <Route path="/test" element={<DemoPage />} />
                    </Routes>
                </Router>
            </LayoutProvider>
        </ThemeProvider>
    );
};

export default App;