import React, { useState, useEffect } from "react";

export default function DiscordUserCount() {
  const [playerCount, setPlayerCount] = useState(null);
  const [error, setError] = useState(null);
  const guildId = "1211919261011025942"; // Replace with your actual guild ID

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch(
          `https://discord.com/api/guilds/${guildId}/widget.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlayerCount(data.presence_count);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlayerCount();
  }, [guildId]);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : playerCount !== null ? (
        <p>Active users: {playerCount}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
