import {useState} from "react";
import Header from "@/components/Header.tsx";
import ListingsGrid from "@/components/ListingGrid.tsx";
import AuthPage from "@/components/AuthPage.tsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AuthPage onAuth={() => setIsAuthenticated(true)}/>;
  }

  return (
    <>
      <Header/>
      <main className="p-4 flex flex-row">
        <ListingsGrid/>
      </main>
      <footer className="p-4 mt-8 text-center text-gray-400 text-sm border-t border-gray-200">
        Development Testing Project by PrimalCodex <br/>
        <a
          href="https://nedimkevroinfo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:underline"
        >
          nedimkevroinfo.vercel.app
        </a>
      </footer>
    </>
  );
}

export default App;
