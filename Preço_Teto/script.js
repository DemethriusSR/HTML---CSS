function calculatePriceTeto() {
    var assetNameInput = document.getElementById('assetName');
    var referencePriceInput = document.getElementById('referencePrice');
    var ceilingPercentageInput = document.getElementById('ceilingPercentage');
    var resultDiv = document.getElementById('result');
  
    var assetName = assetNameInput.value.trim();
    var referencePrice = parseFloat(referencePriceInput.value);
    var ceilingPercentage = parseFloat(ceilingPercentageInput.value);
  
    if (assetName === '' || isNaN(referencePrice) || isNaN(ceilingPercentage)) {
      resultDiv.innerText = 'Por favor, preencha todos os campos com valores válidos.';
      resultDiv.classList.remove('success');
      resultDiv.classList.add('error');
    } else {
      var ceilingPrice = referencePrice * (1 + (ceilingPercentage / 100));
      resultDiv.innerText = 'O preço teto para o ativo ' + assetName + ' é: R$ ' + ceilingPrice.toFixed(2);
      resultDiv.classList.remove('error');
      resultDiv}
    }