// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manually defined sidebar for RxView360 documentation
  tutorialSidebar: [
    {
      type: 'category',
      label: 'RxView360 Documentation',
      items: [
        'rxview360/cover',
        'rxview360/introduction',
        'rxview360/disclaimer',
        'rxview360/rxview360-html-gui',
        'rxview360/methods', // Keep methods.md here
      ],
    },
  ],
};

export default sidebars;
