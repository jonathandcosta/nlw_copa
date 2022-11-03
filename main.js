function creatGame(player1, hour, player2) {
  return `
  <li>
  <img src="./assets/icons_flags/icon=${player1}.svg" alt="banderia do ${player1}">
  <strong>${hour}</strong>
  <img src="./assets/icons_flags/icon=${player2}.svg" alt="bandeira de ${player2}">
</li>`;
}

function creatCard(date, day, games) {
  return `
  <div class="card">
        <h2>${date}<span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
      </div>
  `;
}

document.querySelector("#cards").innerHTML =
  creatCard(
    "24/11",
    "quinta",
    creatGame("brazil", "16:00", "serbia") +
      creatGame("brazil", "16:00", "serbia") +
      creatGame("brazil", "16:00", "serbia") +
      creatGame("brazil", "16:00", "serbia")
  ) +
  creatCard(
    "28/11",
    "segunda",
    creatGame("switzerland", "13:00", "brazil") +
      creatGame("portugal", "15:00", "uruguay") +
      creatGame("portugal", "15:00", "uruguay")
  ) +
  creatCard(
    "02/12",
    "sexta",
    creatGame("brazil", "16:00", "cameroon") +
      creatGame("brazil", "16:00", "serbia") +
      creatGame("brazil", "16:00", "serbia")
  );
