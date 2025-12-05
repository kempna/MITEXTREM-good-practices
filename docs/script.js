let allPractices = [];

async function loadData() {
  try {
    const response = await fetch("dobre_praktiky.json");
    const data = await response.json();
    allPractices = data;
    initFilters(data);
    renderTable(data);
  } catch (e) {
    console.error("Chyba při načítání JSON:", e);
  }
}

function initFilters(data) {
  const hazardSelect = document.getElementById("filter-hazard");
  const scaleSelect = document.getElementById("filter-scale");

  // unikátní hodnoty
  const hazards = new Set();
  const scales = new Set();

  data.forEach((row) => {
    if (row["Typ extrému"]) {
      row["Typ extrému"]
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s)
        .forEach((h) => hazards.add(h));
    }

    if (row["Měřítko aplikace"]) {
      scales.add(row["Měřítko aplikace"].trim());
    }
  });

  [...hazards].sort().forEach((h) => {
    const opt = document.createElement("option");
    opt.value = h;
    opt.textContent = h;
    hazardSelect.appendChild(opt);
  });

  [...scales].sort().forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    scaleSelect.appendChild(opt);
  });

  document
    .getElementById("reset-filters")
    .addEventListener("click", () => resetFilters());
  ["filter-hazard", "filter-scale", "filter-location"].forEach((id) => {
    document.getElementById(id).addEventListener("input", applyFilters);
  });
}

function applyFilters() {
  const hazard = document.getElementById("filter-hazard").value;
  const scale = document.getElementById("filter-scale").value;
  const locationText = document
    .getElementById("filter-location")
    .value.toLowerCase();

  const filtered = allPractices.filter((row) => {
    let ok = true;

    if (hazard) {
      const cell = (row["Typ extrému"] || "").toLowerCase();
      ok = ok && cell.includes(hazard.toLowerCase());
    }

    if (scale) {
      const cell = (row["Měřítko aplikace"] || "").toLowerCase();
      ok = ok && cell === scale.toLowerCase();
    }

    if (locationText) {
      const cell = (row["Lokalita"] || "").toLowerCase();
      ok = ok && cell.includes(locationText);
    }

    return ok;
  });

  renderTable(filtered);
}

function resetFilters() {
  document.getElementById("filter-hazard").value = "";
  document.getElementById("filter-scale").value = "";
  document.getElementById("filter-location").value = "";
  renderTable(allPractices);
}

function renderTable(data) {
  const tbody = document.querySelector("#practices-table tbody");
  tbody.innerHTML = "";

  data.forEach((row) => {
    const tr = document.createElement("tr");

    const cols = [
      "ID",
      "Název praktiky",
      "Typ extrému",
      "Měřítko aplikace",
      "Lokalita",
      "Přínosy a výhody",
      "Rizika a omezení",
      "Reference a zdroje",
    ];

    cols.forEach((col) => {
      const td = document.createElement("td");
      let value = row[col] || "";

      // zkrácení velmi dlouhých textů v tabulce (detail si můžeš doplnit později)
      if (["Přínosy a výhody", "Rizika a omezení"].includes(col) && value.length > 250) {
        value = value.slice(0, 250) + "…";
      }

      // Reference – pokud obsahuje http, udělej z toho odkaz
      if (col === "Reference a zdroje" && value.includes("http")) {
        const a = document.createElement("a");
        a.href = value;
        a.textContent = "Odkaz";
        a.target = "_blank";
        td.appendChild(a);
      } else {
        td.textContent = value;
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", loadData);
