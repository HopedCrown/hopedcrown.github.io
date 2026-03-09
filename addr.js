
      async function getVisitorIP() {
        try {
        // Send a request to the ipify API
          const response = await fetch('https://api.ipify.org?format=json');
        
        // Parse the JSON response
          const data = await response.json();
        
        // The IP address is in the 'ip' field
          console.log('Visitor IP Address:', data.ip);
          const ipHTML = document.getElementById("ip");
          ipHTML.innerHTML = "IP:" + data;
        
        
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
