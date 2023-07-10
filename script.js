//your code here

let bandNames = ['The Beatles', 'Aerosmith', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones'];

// Remove articles from band names
let sortedBandNames = bandNames.map(name => name.replace(/^(a|an|the)\s+/i, ''));

// Sort the band names in lexicographic order
sortedBandNames.sort((a, b) => a.localeCompare(b));

// Get the 'band' element by its ID
let bandElement = document.getElementById('band');

// Clear any existing content inside the 'band' element
bandElement.innerHTML = '';

// Add each band name as a list item
sortedBandNames.forEach(name => {
  let listItem = document.createElement('li');
  listItem.textContent = name;
  bandElement.appendChild(listItem);
});