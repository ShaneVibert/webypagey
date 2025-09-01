// Function to validate service quality
function validateQuality(quality) {
  quality = quality.toLowerCase();
  if (quality === "great" || quality === "ok" || quality === "poor") {
    return quality;
  } else {
    alert("Invalid service quality entered. Please enter Great, Ok, or Poor.");
    return null;
  }
}

// Function to validate service amount
function validateAmount(amount) {
  if (isNaN(amount) || amount < 5 || amount > 500) {
    alert("Invalid amount. Please enter a number between $5.00 and $500.00.");
    return null;
  } else {
    return amount;
  }
}

// Function to calculate tip
function calculateTip(amount, quality) {
  let tipPercent = 0;
  if (quality === "great") {
    tipPercent = 0.20;
  } else if (quality === "ok") {
    tipPercent = 0.15;
  } else if (quality === "poor") {
    tipPercent = 0.10;
  }
  return amount * tipPercent;
}

// Main script
function runTipCalculator() {
  let amountInput = prompt("Enter the dollar amount of the service:");
  let amount = validateAmount(parseFloat(amountInput));
  if (amount === null) return;

  let qualityInput = prompt("Was the service quality Great, Ok, or Poor?");
  let quality = validateQuality(qualityInput);
  if (quality === null) return;

  let tip = calculateTip(amount, quality);

  alert(
    `Service amount: $${amount.toFixed(2)}\n` +
    `Service quality: ${quality}\n` +
    `Recommended tip: $${tip.toFixed(2)}`
  );
}
