export const handleExpanded = (button) => {
  const btns = document.querySelectorAll(button);

  btns.forEach(btn=>{
    btn .addEventListener("click", (e) => {
    const targetId = e.currentTarget.getAttribute("aria-controls");
    const isExpanded = e.currentTarget.getAttribute("aria-expanded") === "true";

    e.currentTarget.setAttribute("aria-expanded", String(!isExpanded));
  });
  })
};
