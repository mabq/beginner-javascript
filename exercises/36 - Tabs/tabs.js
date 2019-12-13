// Select elements
const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"');

function handleTabClick(e) {
  // mark all tabs as unselected
  tabButtons.forEach(tabButton => {
    if (tabButton.getAttribute("aria-selected") === "true") {
      tabButton.setAttribute("aria-selected", false);
    }
  });

  // hide all tab panels
  const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
  tabPanels.forEach(tabPanel => {
    if (tabPanel.getAttribute("hidden") === null) {
      tabPanel.setAttribute("hidden", "");
    }
  });

  // Select tab button
  e.target.setAttribute("aria-selected", true);

  // Show selected panel
  const panel = tabs.querySelector(`[aria-labelledby="${e.target.id}"]`);
  panel.removeAttribute("hidden");
}

tabButtons.forEach(tabButton =>
  tabButton.addEventListener("click", handleTabClick)
);
