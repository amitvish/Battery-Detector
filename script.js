function updateBatteryStatus(battery) {
    document.getElementById('battery-level').textContent = `${(battery.level * 100).toFixed(0)}%`;
    document.getElementById('charging-status').textContent = battery.charging ? 'Charging' : 'Not Charging';

    // Update the information whenever a change occurs
    battery.addEventListener('chargingchange', () => updateBatteryStatus(battery));
    battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
}

if ('getBattery' in navigator) {
    navigator.getBattery().then(updateBatteryStatus);
} else {
    document.getElementById('battery-status').textContent = 'Battery Status API not supported';
}
