// Checklisten-ID aus URL extrahieren
const urlParams = new URLSearchParams(window.location.search);
const checklistId = urlParams.get('id');

// Checkliste anzeigen
function displayChecklist(id) {
    const checklist = checklistData[id];

    if (!checklist) {
        document.getElementById('checklistContent').innerHTML = `
      <div class="danger-card">
        <h3>Fehler</h3>
        <p>Checkliste nicht gefunden.</p>
        <a href="../index.html" class="back-btn">Zurück zur Übersicht</a>
      </div>
    `;
        return;
    }

    let html = `
    <div class="checklist-header">
      <h1><span class="number">${id}</span> ${checklist.title}</h1>
      <p class="symptoms">${checklist.symptoms}</p>
    </div>
    
    <div class="checklist-steps">
  `;

    // Schritte anzeigen
    checklist.steps.forEach((step, index) => {
        html += `
      <div class="step">
        <span class="step-number">${index + 1}</span>
        <div class="step-content">${step}</div>
      </div>
    `;
    });

    html += `</div>`;

    // Info-Boxen anzeigen
    if (checklist.infoBoxes && checklist.infoBoxes.length > 0) {
        checklist.infoBoxes.forEach(box => {
            html += `
        <div class="${box.type}-card">
          <h3>${box.title}</h3>
          <p>${box.content}</p>
        </div>
      `;
        });
    }

    html += `
    <div class="source" style="margin-top: 2rem;">
      <p><small>Modifiziert nach: Operating Room Crisis Checklists, Ariadne Labs Boston; Emergency Quick Reference Guide, ESA; Stanford Anesthesia Cognitive Aid Group</small></p>
      <p><small>SMA4917 / 2.0 • Dokumenteneigner: Severin Urech • Gültig ab: 01.04.2025</small></p>
    </div>
  `;

    document.getElementById('checklistContent').innerHTML = html;

    // Titel der Seite setzen
    document.title = `${checklist.title} - OP Notfall`;
}

// Beim Laden der Seite
if (checklistId) {
    displayChecklist(checklistId);
} else {
    document.getElementById('checklistContent').innerHTML = `
    <div class="warning-card">
      <h3>Keine Checkliste ausgewählt</h3>
      <p>Bitte wähle eine Checkliste aus der Übersicht.</p>
      <a href="../index.html" class="back-btn">Zurück zur Übersicht</a>
    </div>
  `;
}