import { useEffect, useState } from "react";

// Use esse hook para obter o país do usuário - client only
// Exemplo de uso:
// const userCountry = useUserCountry();
function useUserCountry() {
  const [userCountry, setUserCountry] = useState("");

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        const userIP = data.ip;

        const countryResponse = await fetch(`https://api.country.is/${userIP}`);
        const { country } = await countryResponse.json();

        setUserCountry(country);
      } catch (error) {
        console.error("Error fetching user country:", error);
      }
    };

    fetchUserCountry();
  }, []);

  return userCountry;
}

export default useUserCountry;
