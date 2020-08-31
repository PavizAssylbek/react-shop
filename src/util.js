export default function formatCurrency(num) {
  if (typeof num === Number) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + ""
  }
}