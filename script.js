const networksContainer = document.getElementById('networks-container');

// Fetch data from the API
try {
  fetch('http://api.citybik.es/v2/networks?fields=id,name,href')
    .then(response => response.json())
    .then(data => {
      // Process the response data
      const networks = data.networks;

      // Create and append network elements to the container
      networks.forEach(network => {
        const networkElement = document.createElement('div');
        networkElement.innerHTML = 
        `<div class="card">     
                <div class="card-body">
                    <h5 class="card-title">City Bike</h5>
                    <p class="card-text">ID: ${network.id}</p>
                    <p class="card-text">Name: ${network.name}</p>
                    <p class="card-text"><a href="${network.href}" class="btn btn-primary">Go To ${network.name}</a></p>        
                </div>
        </div>`
        networksContainer.appendChild(networkElement);
      });
    })
    
} catch (error) {
  console.error(error)
}