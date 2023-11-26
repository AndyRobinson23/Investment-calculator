import { calculateInvestmentResults, formatter } from '../util/investment';

const ResultsTable = ({ userInput }) => {
  const calculatedData = calculateInvestmentResults(userInput);
  let totalInterest = 0;
  let startingInvestment = userInput.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((row) => {
          totalInterest += Math.ceil(row.interest);
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>
                {formatter.format((startingInvestment += row.annualInvestment))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
