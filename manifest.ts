
import packageJson from './package.json' assert { type: 'json' };


/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
export default {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  permissions: [
    'storage',
    'sidePanel'
  ],

  action: {
    default_popup: 'src/popup/index.html',
    default_icon: 'icon-34.png',
  },

  icons: {
    128: 'icon-128.png',
  },
  content_scripts: [
    {
      matches: [
        "http://*/*",
        "https://*/*",
        "<all_urls>"
      ],
      js: [
        "src/worker/worker.js"
      ]
    }
  ]

};




