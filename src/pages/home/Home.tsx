import CurrencyConverter from "../../components/converter/Converter";

function Home() {
  return (
    <div>
      <CurrencyConverter from="EUR" to="USD" />
    </div>
  );
}

export default Home;
