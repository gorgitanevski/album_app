import { Toaster } from "react-hot-toast";
import UserList from "./features/users/UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="dark:bg-slate-950 h-screen">
          <div className="container mx-auto dark:text-slate-100">
            <UserList />
          </div>
          <Toaster />
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
