// listen for submit button
document.getElementById('Asphalt-form').addEventListener('submit', calculateResults);

// calculate Results
function calculateResults(e) {
  //  console.log('calculating...');
 //  UI vars
  const Length = document.getElementById('length');
  const Width = document.getElementById('width');
  const Thickness = document.getElementById('thickness');
  const Density = document.getElementById('density');
  const Mass = document.getElementById('mass');
  const Amount = document.getElementById('Amount');
  const Cost = document.getElementById('cost');


const calculatedLength = parseFloat(Length.value).toFixed(2);
const calculatedWidth = parseFloat(Width.value).toFixed(2);
const calculatedThickness = parseFloat(Thickness.value).toFixed(2);
const calculatedDensity = parseFloat(Density.value).toFixed(2);
const calculatedAmount = parseFloat(Amount.value).toFixed(2);
  
  const calculatedVolume = parseFloat(calculatedLength * calculatedWidth * calculatedThickness)

  Mass.value = parseFloat(calculatedDensity * calculatedVolume).toFixed(2);
  Cost.value = calculatedAmount * Mass.value

  console.log(Mass.value);
  console.log(Cost.value);




e.preventDefault();
}