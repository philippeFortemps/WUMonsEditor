/**
 * @license
 * Copyright 2022 Google LLC
 * Copyright 2025 UMONS (for the application to WUKONG 2040)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview JavaScript for Blockly's Wukong App.
 */
'use strict';

let language = 'en'; // Default to English.

/**
 * Initialize the page once everything is loaded.
 */
function init() { 
    document.getElementById('copy-code-button').addEventListener('click', myCopyFunction); 
    document.getElementById('save-blocks-button').addEventListener('click', saveBlocks);
    document.getElementById('load-blocks-button').addEventListener('click', () => {
        document.getElementById('file-input').click();
    });
    document.getElementById('file-input').addEventListener('change', loadBlocks);

    // Inject Blockly.
    const workspace = Blockly.inject('blocklyDiv', {
      media: 'https://unpkg.com/blockly/media/',
      toolbox: toolboxJson,
      grid:
      {
          spacing: 25,
          length: 3,
          colour: '#ccc',
          snap: true
      },    
      zoom:
      {
          controls: true,
          wheel: true
      }
    });

    workspace.addChangeListener(regenerate);
    reloadBlocks();
}

/**
 * Regenerate the code and save on localStorage .
 * Called when the blocks change.
 */
function regenerate(_e) {
  if (_e.type == Blockly.Events.UI) {
    // Ignore UI events
    return;
  }
  
  // Update the Python code
  const generateLang = "python";
  const generator = window[generateLang][`${generateLang}Generator`];
  const code = Blockly.Python.workspaceToCode(Blockly.getMainWorkspace());
  const codeHolder = document.getElementById('codeHolder');
  codeHolder.innerHTML = ''; // Delete old code.
  codeHolder.classList.remove('prettyprinted');
  codeHolder.appendChild(document.createTextNode(code));
  if (typeof PR === 'object') {
    PR.prettyPrint();
  }
  
  // Save blocs on localStorage
  const xmlDom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  const xmlTxt = Blockly.Xml.domToText(xmlDom);
  localStorage.setItem('blocksBlockly',xmlTxt);
}

function reloadBlocks() {
    const xmlText = localStorage.getItem('blocksBlockly');
    if (xmlText) {
        try {
            const xmlDom = Blockly.utils.xml.textToDom(xmlText);
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xmlDom, Blockly.getMainWorkspace());
        } catch (e) {
            console.warn("Impossible de charger les blocs : ", e);
        }
  }
}

function myCopyFunction() {
  let text = document.getElementById("codeHolder").innerText;
   // Copy the text inside the text field
  navigator.clipboard.writeText(text);
  // Log the copy action
  console.log("Copied to clipboard");
};

function saveBlocks() {
    const xmlDom  = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    const xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    const blob = new Blob([xmlText], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);

    const options = { year: 'numeric', month: '2-digit', day: '2-digit', 
                        hour: '2-digit', minute: '2-digit' };
    var today = new Intl.DateTimeFormat("fr-CA",options).format(new Date());

    const a = document.createElement('a');
    a.href = url;
    a.download = 'blocks-' + today + '.xml';
    a.click();
    URL.revokeObjectURL(url); 
    console.log("File saved: "+a.download);
};

function loadBlocks() {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const xmlText = e.target.result;
            const xmlDom = Blockly.utils.xml.textToDom(xmlText);
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xmlDom, Blockly.getMainWorkspace());
            console.log("File loaded");
        } catch (e) {
            alert("Error when loading : " + e.message);
        }
    };
    reader.readAsText(file);
};

