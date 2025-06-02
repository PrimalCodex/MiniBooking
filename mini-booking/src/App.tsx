import {Routes, Route} from "react-router-dom";
import Header from "@/components/Header";
import ListingsGrid from "@/components/ListingGrid";
import AuthPage from "@/components/AuthPage";


import {useState} from "react";
import ListingDetails from "@/pages/ListingDetails.tsx";
import ConfirmationPage from "@/pages/ConfirmationPage.tsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AuthPage onAuth={() => setIsAuthenticated(true)}/>;
  }

  return (
    <>
      <Header/>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<ListingsGrid/>}/>
          <Route path="/listing/:id" element={<ListingDetails/>}/>
          <Route path="/confirmation" element={<ConfirmationPage/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
