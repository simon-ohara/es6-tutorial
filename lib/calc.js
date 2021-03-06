import Mortgage from './modules/mortgage';

let getInputValues = () => {
  let values = {};

  [ 'principal', 'years', 'rate' ].forEach(input => {
    values[input] = document.getElementById(input).value;
  });

  return values;
};

let buildAmortizationTable = amortization => {
  let html = '';

  amortization.forEach((year, index) => html += `
    <tr>
      <td>${index + 1}</td>
      <td class="currency">${Math.round(year.principalY)}</td>
      <td class="stretch">
        <div class="flex">
          <div class="bar principal" style="flex:${year.principalY};-webkit-flex:${year.principalY}"></div>
          <div class="bar interest" style="flex:${year.interestY};-webkit-flex:${year.interestY}"></div>
        </div>
      </td>
      <td class="currency left">${Math.round(year.interestY)}</td>
      <td class="currency">${Math.round(year.balance)}</td>
    </tr>
  `);

  return html;
};

let handleClick = () => {
  let { principal, years, rate } = getInputValues();
  let mortgage = new Mortgage(principal, years, rate);

  document.getElementById('monthlyPayment').innerHTML = mortgage.monthlyPayment.toFixed(2);
  document.getElementById('monthlyRate').innerHTML = (rate / 12).toFixed(2);
  document.getElementById('amortization').innerHTML = buildAmortizationTable(mortgage.amortization);
};

document.getElementById('calcBtn').addEventListener('click', handleClick);
