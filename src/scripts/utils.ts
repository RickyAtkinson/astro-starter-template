// Default click event handler for disclosure buttons - Toggles the disclosure
// panel in the buttons `aria-controls` attribute.
export const handleDisclosureButtonClick = (button: HTMLButtonElement) => {
  const ariaControls = button.getAttribute('aria-controls');
  if (!ariaControls) return;
  const targetPanel = document.querySelector(`#${ariaControls}`);
  if (!targetPanel) return;
  const buttons = document.querySelectorAll(
    `[aria-controls="${ariaControls}"]`
  );
  const isOpen = targetPanel?.getAttribute('data-state-open') === '';

  // Update the `aria-expanded` attribute for all buttons that control the same
  // panel
  buttons.forEach((button) => {
    button.setAttribute('aria-expanded', isOpen.toString());
    toggleOpenDataState(button as HTMLElement);
  });

  // Toggle the panels `data-state`
  toggleOpenDataState(targetPanel);
};

// Toggles aria-hidden between "true" and "false"
export const toggleARIAHidden = (ele: HTMLElement) => {
  ele.getAttribute('aria-hidden') === 'true'
    ? ele.removeAttribute('aria-hidden')
    : ele.setAttribute('aria-hidden', 'true');
};

// Toggles between `data-state-closed` and `data-state-open`
export const toggleOpenDataState = (ele: Element) => {
  if (ele.getAttribute('data-state-open') === '') {
    ele.removeAttribute('data-state-open');
    ele.setAttribute('data-state-closed', '');
  } else {
    ele.removeAttribute('data-state-closed');
    ele.setAttribute('data-state-open', '');
  }
};

// Toggles tabindex between "0" and "-1"
export const toggleTabbable = (element: HTMLElement) => {
  if (element.tabIndex < 0) {
    element.tabIndex = 0;
  } else {
    element.tabIndex = -1;
  }
};
