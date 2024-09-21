// Function to format numbers as currency
function formatCurrency(value) {
  return `$${value.toLocaleString()}`; // Format as currency
}

export { formatCurrency };
