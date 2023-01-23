import Employee from "./Employees";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Employee />
      <Footer />
    </div>
  );
}
