

// import LayoutDemo from './pages/layout-demo/layout-demo.tsx'; // Import the new page (replace location if needed)
import { ThemeProvider } from "./components/theme/theme-context.tsx";
import Toolbar from "./components/tools/toolbar.tsx";
import LayoutDemo from "./pages/layout-demo/layout-demo.tsx";
import {LayoutProvider} from "./components/layout/context/layout-context.tsx";

const App = () => {
    return (
        <ThemeProvider>
            <LayoutProvider>
                    <LayoutDemo />
                    <Toolbar />

            </LayoutProvider>
        </ThemeProvider>
    );
};

export default App;