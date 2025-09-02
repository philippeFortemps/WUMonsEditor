/**
 * @license
 * Copyright 2025 UMONS (for the application to WUKONG 2040)
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.Msg.CUSTOM_WUMONS_HUE = '#FF0000'

toolboxJson.contents.push({   kind: 'SEP',    }); 
toolboxJson.contents.push({ 
      // WUMONS Category
      kind: 'CATEGORY', name: 'WUMONS',
      colour: '%{BKY_CUSTOM_WUMONS_HUE}',
      contents: [
        {   kind: 'BLOCK',  type: 'afficher_message',
            inputs: {
                MESSAGE: {
                  shadow: {
                    type: 'text',
                    fields: {TEXT: 'abc'},
                  },
                },
            },
        },
        {   kind: 'BLOCK',  type: 'pause',              },
        {   kind: 'LABEL',  text: 'On WUKONG',          },
        {   kind: 'BLOCK',  type: 'button_is_pressed',  },
        {   kind: 'BLOCK',  type: 'set_led_colour',     },
        {   kind: 'BLOCK',  type: 'play_music',         },
        {   kind: 'BLOCK',  type: 'set_motor_power',    },
        {   kind: 'BLOCK',  type: 'set_servo_angle',    },
        {   kind: 'BLOCK',  type: 'get_sensor_value',   },
        {   kind: 'LABEL',  text: 'Utils',              },        
        {   kind: 'BLOCK',  type: 'colour_from_rgb',    },
      ],
    });
toolboxJson.contents.push({   kind: 'SEP',    }); 



// Define the appearance for each added block 
Blockly.defineBlocksWithJsonArray([ 
    {
      "type": "afficher_message",
      "message0": "afficher %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "previousStatement": null,    "nextStatement": null,
      "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
      "tooltip": "Affiche un message",
      "helpUrl": ""
    },
    {
      "type": "pause",
      "message0": "pause for %1 seconds",
      "args0": [
        {
          "type": "input_value",
          "name": "SECONDS",
          "check": "Number",
        }
      ],
      "previousStatement": null,    "nextStatement": null,
      "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
      "tooltip": "Pause the program for a given number of seconds",
      "helpUrl": "https://docs.circuitpython.org/en/latest/shared-bindings/time/#time.sleep"
    },
    {
      "type": "button_is_pressed",
      "message0": "button %1 is pressed ?",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BUTTON",
          "options": [
            [
              "A",  "a"
            ],
            [
              "B",  "b"
            ]
          ]
        }
      ],
      "output": "Boolean",
      "colour": '%{BKY_LOGIC_HUE}',
      "tooltip": "Check if selected button is pressed",
      "helpUrl": "",      
    },
    {
      "type": "colour_from_rgb",
      "message0": "colour with R: %1 G: %2 B: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "RED",
          "check": "Number",
        },
        {
          "type": "input_value",
          "name": "GREEN",
          "align": "RIGHT",
          "check": "Number",
        },
        {
          "type": "input_value",
          "name": "BLUE",
          "align": "RIGHT",
          "check": "Number",
        }
      ],
      "output": "Colour",
      "colour": '%{BKY_MATH_HUE}',
      "inputsInline": true,
      "tooltip": "colour with a given percentage [0, 100] of Red, Green and Blue",
      "helpUrl": "",
    },
    {
      "type": "set_led_colour",
      "message0": "set led %1 to colour %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LED",
          "options": [
            [
              "A",  "0"
            ],
            [
              "B",  "1"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "COLOUR",
          "check": "Colour",
        }
      ],
      "previousStatement": null,          "nextStatement": null,
      "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
      "tooltip": "Set the selected led to given colour",
      "helpUrl": "",
    },
    {
      "type": "set_motor_power",
      "message0": "run motor %1 at power %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MOTOR",
          "options": [
            [   "M1",   "1" ],
            [   "M2",   "2" ],
            [   "M3",   "3" ],
            [   "M4",   "4" ],
          ]
        },
        {
          "type": "input_value",
          "name": "POWER",
          "check": "Number",
        }
      ],
      "previousStatement": null,          "nextStatement": null,
      "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
      "tooltip": "Set the selected motor to a given power",
      "helpUrl": "",
    },
    {
      "type": "set_servo_angle",
      "message0": "set servo %1 to angle %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SERVO",
          "options": [
            [   "S0",   "0" ],
            [   "S1",   "1" ],
            [   "S2",   "2" ],
            [   "S3",   "3" ],
          ]
        },
        {
          "type": "input_value",
          "name": "ANGLE",
          "check": "Number",
        }
      ],
      "previousStatement": null,          "nextStatement": null,
      "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
      "tooltip": "Set the selected servo to a given angle",
      "helpUrl": "",
    },
    {
      "type": "get_sensor_value",
      "message0": "get the value of sensor %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SENSOR",
          "options": [
            [   "S26",   "26" ],
            [   "S27",   "27" ],
            [   "S28",   "28" ]
          ]
        }
      ],
      "output": "number",
      "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
      "tooltip": "Get the value observed by a sensor",
      "helpUrl": "",
    },
    {
      "type": "play_music",
      "message0": "play music %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MUSIC",
          "options": [
            [   "DADADADUM",  "DADADADUM"   ],
            [   "ENTERTAINER","ENTERTAINER" ],
            [   "PRELUDE",    "PRELUDE"     ],
            [   "ODE",        "ODE"         ],
            [   "NYAN",       "NYAN"        ],
            [   "RINGTONE",   "RINGTONE"    ],
            [   "FUNK",       "FUNK"        ],
            [   "BLUES",      "BLUES"       ],
            [   "BIRTHDAY",   "BIRTHDAY"    ],
            [   "WEDDING",    "WEDDING"     ],
            [   "FUNERAL",    "FUNERAL"     ],
            [   "PUNCHLINE",  "PUNCHLINE"   ],
            [   "PYTHON",     "PYTHON"      ],
            [   "BADDY",      "BADDY"       ],
            [   "CHASE",      "CHASE"       ],
            [   "BA_DING",    "BA_DING"     ],
            [   "WAWAWAWAA",  "WAWAWAWAA"   ],
            [   "JUMP_UP",    "JUMP_UP"     ],
            [   "JUMP_DOWN",  "JUMP_DOWN"   ],
            [   "POWER_UP",   "POWER_UP"    ],
            [   "POWER_DOWN", "POWER_DOWN"  ]
          ]
        }
      ],
      "previousStatement": null,    "nextStatement": null,
      "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
      "tooltip": "Play the selected music",
      "helpUrl": "",
    },
  ]);
  
// Define the Python generator for each added block 
python.pythonGenerator.forBlock['afficher_message'] = function(block, generator) { 
  const value_message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_NONE) || '""';
  const code = `print(${value_message})\n`;
  return code;
}; 

python.pythonGenerator.forBlock['pause'] = function(block, generator) { 
  const seconds = generator.valueToCode(block, 'SECONDS', generator.ORDER_NONE) || 0;
  const code = `time.sleep(${seconds})\n`;
  generator.definitions_['import_time'] = [
      '# Import the time library',
      'import time'].join('\n');
  return code;
}; 

python.pythonGenerator.forBlock['button_is_pressed'] = function(block, generator) { 
  const dropdown_name = block.getFieldValue('BUTTON');
  const idCode = 'wumons_button_'
  const code = idCode+dropdown_name+'.is_pressed()';
  generator.definitions_['import_wumons'] = [
      '# Import the wumons library',
      'import wumons'].join('\n');
  generator.definitions_['connect_wum_buttons'] = [
      '# Connect the Wukong buttons',   
      idCode+'a = wumons.DigitalButton(wumons.board.GP18)',
      idCode+'b = wumons.DigitalButton(wumons.board.GP19)'].join('\n');
  return [code, generator.ORDER_NONE];
} 

python.pythonGenerator.forBlock['colour_from_rgb'] = function(block, generator) { 
  const value_red = generator.valueToCode(block, 'RED', generator.ORDER_NONE) || 0;
  const value_green = generator.valueToCode(block, 'GREEN', generator.ORDER_NONE) || 0;
  const value_blue = generator.valueToCode(block, 'BLUE', generator.ORDER_NONE) || 0;
  const code = `colour_from_rgb(${value_red},${value_green},${value_blue})`;
  generator.definitions_['colour_from_rgb'] = [
    "def colour_from_rgb(r, g, b):",
    "   r = round(min(100, max(0, r)) * 2.55)",
    "   g = round(min(100, max(0, g)) * 2.55)",
    "   b = round(min(100, max(0, b)) * 2.55)",
    "   return '#%02x%02x%02x' % (r, g, b)"].join('\n');
  return [code, generator.ORDER_NONE];
} 


python.pythonGenerator.forBlock['set_led_colour'] = function(block, generator) { 
  const dropdown_name = block.getFieldValue('LED');
  const value_colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_NONE) || 0;
  const idCode = 'wumons_pixels'
  const code = [
    idCode+`[${dropdown_name}]=${value_colour}`,
    idCode+'.show()', ""].join('\n');
  generator.definitions_['import_wumons'] = [
      '# Import the wumons library',
      'import wumons'].join('\n');
  generator.definitions_['connect_wum_leds'] = [
      '# Connect the Wukong leds',
      idCode+' = wumons.NeoPixel(wumons.board.GP22, 2, brightness=0.5, auto_write=False)'].join('\n');  
  return code;
}


python.pythonGenerator.forBlock['play_music'] = function(block, generator) {
  const dropdown_name = block.getFieldValue('MUSIC');
  const idCode = 'wumons_music_player'
  const code = [
    idCode+`.play(${idCode}.${dropdown_name})`,
    ""].join('\n');
  generator.definitions_['import_wumons'] = [
      '# Import the wumons library',
      'import wumons'].join('\n');
  generator.definitions_['connect_wum_music'] = [
      '# Connect the Wukong Music',
      idCode+' = wumons.Music(wumons.board.GP9)'].join('\n');  
  return code;
}

python.pythonGenerator.forBlock['set_motor_power'] = function(block, generator) { 
  const dropdown_name = block.getFieldValue('MOTOR');
  const value_power = generator.valueToCode(block, 'POWER', generator.ORDER_NONE) || 0;
  const idCode = 'wumons_motor'
  const code = [
    idCode+`${dropdown_name}.set_speed(${value_power})`, ""].join('\n');
  generator.definitions_['import_wumons'] = [
      '# Import the wumons library',
      'import wumons'].join('\n');
  generator.definitions_['connect_wum_motors'] = [
      '#   Connect the four possible motors',
      idCode+'1 = wumons.DCMotor(wumons.board.GP20, wumons.board.GP21)',
      idCode+'2 = wumons.DCMotor(wumons.board.GP10, wumons.board.GP11)',
      idCode+'3 = wumons.DCMotor(wumons.board.GP14, wumons.board.GP15)',
      idCode+'4 = wumons.DCMotor(wumons.board.GP12, wumons.board.GP13)'].join('\n');  
  return code;
}

python.pythonGenerator.forBlock['set_servo_angle'] = function(block, generator) { 
  const dropdown_name = block.getFieldValue('SERVO');
  const value_angle = generator.valueToCode(block, 'ANGLE', generator.ORDER_NONE) || 0;
  const idCode = 'wumons_servo'
  const code = [
    idCode+`${dropdown_name}.set_angle(${value_angle})`, ""].join('\n');
  generator.definitions_['import_wumons'] = [
      '# Import the wumons library',
      'import wumons'].join('\n');
  generator.definitions_['connect_wum_servos'] = [
      '#   Connect the four possible servos',
      idCode+'0 = wumons.Servo(wumons.board.GP0)',
      idCode+'1 = wumons.Servo(wumons.board.GP1)',
      idCode+'2 = wumons.Servo(wumons.board.GP2)',
      idCode+'3 = wumons.Servo(wumons.board.GP3)'].join('\n');  
  return code;
}

python.pythonGenerator.forBlock['get_sensor_value'] = function(block, generator) { 
  const dropdown_name = block.getFieldValue('SENSOR');
  const idCode = 'wumons_sensor'
  const code = idCode+dropdown_name+'.get_value()';
  generator.definitions_['import_wumons'] = [
      '# Import the wumons library',
      'import wumons'].join('\n');
  generator.definitions_['connect_wum_sensors'] = [
      '#   Connect the four possible servos',
      idCode+'26 = wumons.Sensor(wumons.board.GP26)',
      idCode+'27 = wumons.Sensor(wumons.board.GP27)',
      idCode+'28 = wumons.Sensor(wumons.board.GP28)'].join('\n');  
  return [code, generator.ORDER_NONE];
}


