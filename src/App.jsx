import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-2">Overview</h1>
        <img
          src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="img-fluid rounded"
        />
        <p className="fs-6">
          The iPhone is a line of smartphones produced by Apple Inc. that use
          Apple's own iOS mobile operating system. The iPhone was the first
          mobile phone to use multi-touch technology.
        </p>
      </main>
      <Footer />
    </>
  );
}
