import LandingPage from './pages/landing-page.tsx';
import {LayoutProvider} from "./components/layout/components/layout-switcher/layout-context.tsx";
import {ThemeProvider} from "./components/theme/theme-context.tsx";
import Toolbar from "./components/tools/toolbar.tsx";

const App = () => {
    return (
        <ThemeProvider>

        <LayoutProvider>
            <div className="app">
                <Toolbar/>
                <LandingPage/>
            </div>
        </LayoutProvider>
        </ThemeProvider>
    );
};

export default App;