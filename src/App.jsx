import { useRef } from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";

function App() {
    const projectRef = useRef(null);

    return (
        <div className="App">
            <Main projectRef={projectRef} />
            <Projects projectRef={projectRef} />
            <Footer />
        </div>
    );
}

export default App;
