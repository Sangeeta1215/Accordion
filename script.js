fetch("module.json").then(data=>data.json()).then(allAccordions=>{
const container = document.getElementById("accordionExample");
function main(initial, final) {
  for (let i = initial; i < final; i++) {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";
    const accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
    const button = document.createElement("button");
    button.className = "accordion-button collapsed";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `collapse${i}`);
    button.setAttribute("data-bs-target", `#accordion${i}`);
    button.textContent = allAccordions[i].Question;
    const accordionData = document.createElement("div");
    accordionData.setAttribute("data-bs-parent", "#accordionExample");

    accordionData.className = "accordion-collapse collapse";

    accordionData.id = `accordion${i}`;
    accordionData.textContent = allAccordions[i].Answer;

    accordionHeader.appendChild(button);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionData);
    container.appendChild(accordionItem);
  }
  startfaq = endfaq;
  endfaq = endfaq + 3;
}
var startfaq = 0;
var endfaq = 5;
main(startfaq, endfaq);

container.addEventListener("click", (e) => {
  const target = e.target.getAttribute("aria-expanded");
  if (target === "true") {
    main(startfaq, endfaq)
  }
});
})