import "./App.css";
import { Container } from "semantic-ui-react";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplaceBalances from "./components/DisplaceBalances";
import DisplaceBalance from "./components/DisplaceBalance";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budge" type="h1" />
      <DisplaceBalance title="Your balance:" value="2550.53" size="small" />

      <DisplaceBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="Something" value="10" isExpense={true} />
      <EntryLine description="Something" value="10" />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
