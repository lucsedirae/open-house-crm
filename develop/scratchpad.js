const [annualTrxData, setAnnualTrxData] = useState({
  jan: null,
  feb: null,
  mar: null,
  april: null,
  may: null,
  june: null,
  july: null,
  aug: null,
  sept: null,
  oct: null,
  nov: null,
  dec: null,
});

transactions.map((transaction) => {
  switch (transaction.date) {
    case "jan":
      setAnnualTrxData(
        ...annualTrxData,
        annualTrxData.jan + transaction.revenue
      );
    case "feb":
      setAnnualTrxData(
        ...annualTrxData,
        annualTrxData.feb + transaction.revenue
      );
    case "mar":
      setAnnualTrxData(
        ...annualTrxData,
        annualTrxData.mar + transaction.revenue
      );
      default:
        setAnnualTrxData(
          ...annualTrxData
        )
  }
});
