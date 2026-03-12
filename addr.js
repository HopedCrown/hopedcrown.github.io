
      async function getVisitorIP() {
        try {
        // Send a request to the ipify API
          fetch('https://api.example.com/data')
                .then(response => response.json()) // This handles the JSON parsing
                .then(data => {
                    console.log(data); // 'data' is already a JavaScript object
                      const ipHTML = document.getElementById("ip");
                      ipHTML.innerHTML = "IP:" + data.ip;
          })
          .catch(error => {
              console.error('Error fetching or parsing JSON:', error);
          });

        
        // Parse the JSON response
          const data = await response.json();
        
        // The IP address is in the 'ip' field
          console.log('Visitor IP Address:', data.ip);
        
        
        // You can then use this IP address in your website logic
          return data.ip;

          } catch (error) {
            console.error('Error fetching IP address:', error);
            const ipHTML = document.getElementById("ip");
            ipHTML.innerHTML = "IP Failed. Retry Later.";
            return null;
          }
      }
      getVisitorIP();
