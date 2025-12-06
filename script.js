const target = new Date('2025-11-17T09:00:00');
function updateCountdown() {
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const elDays = document.getElementById('days'); if(elDays) elDays.innerText = d;
  const elHrs = document.getElementById('hrs'); if(elHrs) elHrs.innerText = h;
  const elMins = document.getElementById('mins'); if(elMins) elMins.innerText = m;
}
updateCountdown();
setInterval(updateCountdown, 60000);
