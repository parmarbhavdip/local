const calculateSIP = (p, r, n) => {
    return p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
};

document.getElementById("sipForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const monthlyAmount = Number(document.getElementById("amount").value);
    const annualRate = Number(document.getElementById("rate").value);
    const years = Number(document.getElementById("years").value);

    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;

    const maturityAmount = calculateSIP(monthlyAmount, monthlyRate, months);
    const totalInvestment = monthlyAmount * months;
    const totalReturns = maturityAmount - totalInvestment;

    document.getElementById("invested").innerHTML =
        "Total Investment: ₹ " + totalInvestment.toFixed(2);

    document.getElementById("returns").innerHTML =
        "Total Returns: ₹ " + totalReturns.toFixed(2);

    document.getElementById("maturity").innerHTML =
        "Maturity Amount: ₹ " + maturityAmount.toFixed(2);
});
