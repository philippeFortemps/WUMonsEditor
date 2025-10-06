/**
 * @license
 * Copyright 2025 UMONS (for application to WUKONG 2040)
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.Msg.CUSTOM_WUMONS_HUE = '#FF0000'

Blockly.Msg.CUSTOM_WUMONS_LEDSNAME = 'wumons_leds'

toolboxJson.contents.push({   kind: 'SEP',    }); 
toolboxJson.contents.push({ 
      // WUMONS Category
      kind: 'CATEGORY', name: 'WUMONS',
      colour: '%{BKY_CUSTOM_WUMONS_HUE}',
      contents: [
        {   kind: 'BLOCK',  type: 'display_message_console',
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
        {   kind: 'BLOCK',  type: 'current_time',       },
        {   kind: 'LABEL',  text: 'On WUKONG',          },
        {   kind: 'BLOCK',  type: 'button_is_pressed',  },
        {   kind: 'BLOCK',  type: 'set_led_colour',     },
        {   kind: 'BLOCK',  type: 'set_both_leds_colour',    },
        {   kind: 'BLOCK',  type: 'play_music',         },
        {   kind: 'BLOCK',  type: 'set_motor_power',    },
        {   kind: 'BLOCK',  type: 'reverse_motor',      },
        {   kind: 'BLOCK',  type: 'set_servo_angle',    },
        {   kind: 'BLOCK',  type: 'set_servo_pulse_range',    },
        {   kind: 'BLOCK',  type: 'get_sensor_value',   },
        {   kind: 'LABEL',  text: 'On WUKONG I2C-DFrobot-URM09',},
        {   kind: 'BLOCK',  type: 'get_distance_value', },
        /** 
        * {   kind: 'BLOCK',  type: 'get_temperature_value', },
        * {   kind: 'LABEL',  text: 'On WUKONG I2C-DFrobot-0646',},
        * {   kind: 'BLOCK',  type: 'display_clear',      },
        * {   kind: 'LABEL',  text: 'On WUKONG I2C-DFrobot-0991',},
        * {   kind: 'BLOCK',  type: 'rgb_button_set_colour', },                
        **/
        {   kind: 'LABEL',  text: 'Utils',              },        
        {   kind: 'BLOCK',  type: 'colour_from_rgb',    },
      ],
    });
toolboxJson.contents.push({   kind: 'SEP',    }); 



// Define the appearance for each added block 
Blockly.defineBlocksWithJsonArray([ 
  {
    "type": "display_message_console",
    "message0": "display %1 on console",
    "args0": [
      {
        "type": "input_value",
        "name": "MESSAGE"
      }
    ],
    "previousStatement": null,    "nextStatement": null,
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Display the given message",
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
    "type": "current_time",
    "message0": "current value of internal clock",
    "output": "float",
    "colour": '%{BKY_LOGIC_HUE}',
    "tooltip": "Return the current value of the internal clock in seconds",
    "helpUrl": "https://docs.circuitpython.org/en/latest/shared-bindings/time/#time.monotonic",      
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
    "type": "set_both_leds_colour",
    "message0": "set leds to colour (0) %1 and colour (1) %2",
    "args0": [
      {
        "type": "input_value",
        "name": "COLOUR0",
        "check": "Colour",
      },
      {
        "type": "input_value",
        "name": "COLOUR1",
        "check": "Colour",
      }
    ],
    "previousStatement": null,          "nextStatement": null,
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Set the tow leds to given colours",
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
    "type": "reverse_motor",
    "message0": "reverse the direction of motor %1",
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
      }
    ],
    "previousStatement": null,          "nextStatement": null,
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Reverse the direction of a given power",
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
    "type": "set_servo_pulse_range",
    "message0": "set servo %1 pulse ranging from %2 to %3",
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
        "name": "MINPULSE",
        "check": "Number",
      },
      {
        "type": "input_value",
        "name": "MAXPULSE",
        "check": "Number",
      }
    ],
    "previousStatement": null,          "nextStatement": null,
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Set the selected servo pulse ranging into an interval",
    "helpUrl": "",
  },
  {
    "type": "get_sensor_value",
    "message0": "value of sensor %1",
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
    "type": "get_distance_value",
    "message0": "value of measured distance",
    "output": "float",
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Get the value measured by the distance sensor (in cm)",
    "helpUrl": "",
  },
  {
    "type": "get_temperature_value",
    "message0": "value of measured temperature",
    "output": "float",
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Get the value measured by the temperature sensor (in °C)",
    "helpUrl": "",
  },
  {
    "type": "display_clear",
    "message0": "clear 8-digit display",
    "previousStatement": null,          "nextStatement": null,
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Clear the 8-digit display",
    "helpUrl": "",
  },
  {
    "type": "rgb_button_set_colour",
    "message0": "set rgb button to colour %1",
    "args0": [
      {
        "type": "input_value",
        "name": "COLOUR",
        "check": "Colour",
      }
    ],
    "previousStatement": null,          "nextStatement": null,
    "colour": '%{BKY_CUSTOM_WUMONS_HUE}',
    "tooltip": "Set the RGB button to given colour",
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
python.pythonGenerator.forBlock['display_message_console'] = function(block, generator) { 
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

python.pythonGenerator.forBlock['current_time'] = function(block, generator) { 
  const code = 'time.monotonic()';
  generator.definitions_['import_time'] = [
      '# Import the time library',
      'import time'].join('\n');
  return [code, generator.ORDER_NONE];
} 


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
  const idCode = Blockly.Msg.CUSTOM_WUMONS_LEDSNAME
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

python.pythonGenerator.forBlock['set_both_leds_colour'] = function(block, generator) { 
  const value_colour0 = generator.valueToCode(block, 'COLOUR0', generator.ORDER_NONE) || 0;
  const value_colour1 = generator.valueToCode(block, 'COLOUR1', generator.ORDER_NONE) || 0;
  const idCode = Blockly.Msg.CUSTOM_WUMONS_LEDSNAME
  const code = [
    idCode+`[0]=${value_colour0}`,
    idCode+`[1]=${value_colour1}`,
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

python.pythonGenerator.forBlock['reverse_motor'] = function(block, generator) { 
  const dropdown_name = block.getFieldValue('MOTOR');
  const idCode = 'wumons_motor'
  const code = [
    idCode+`${dropdown_name}.reverse()`, ""].join('\n');
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

python.pythonGenerator.forBlock['set_servo_pulse_range'] = function(block, generator) { 
  const dropdown_name = block.getFieldValue('SERVO');
  const min_pulse = generator.valueToCode(block, 'MINPULSE', generator.ORDER_NONE) || 750;
  const max_pulse = generator.valueToCode(block, 'MAXPULSE', generator.ORDER_NONE) || 2250;
  const idCode = 'wumons_servo'
  const code = [
    idCode+`${dropdown_name}.set_pulse_width_range(${min_pulse},${max_pulse})`, ""].join('\n');
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
      '#   Connect the three possible sensors',
      idCode+'26 = wumons.Sensor(wumons.board.GP26)',
      idCode+'27 = wumons.Sensor(wumons.board.GP27)',
      idCode+'28 = wumons.Sensor(wumons.board.GP28)'].join('\n');  
  return [code, generator.ORDER_NONE];
}


python.pythonGenerator.forBlock['get_distance_value'] = function(block, generator) { 
  const idCode = 'distance_sensor'
  const code = idCode+'.get_distance()';
  generator.definitions_['import_wumons_distance'] = [
      '# Import the wumons library - distance',
      'from wumons_i2c.dfr_urm09 import DFRobot_URM09'].join('\n');
  generator.definitions_['connect_wum_sensors_distance'] = [
      '# Connect the distance sensor',
      idCode+' = DFRobot_URM09(wumons.i2c)'].join('\n');  
  return [code, generator.ORDER_NONE];
}

python.pythonGenerator.forBlock['get_temperature_value'] = function(block, generator) { 
  const idCode = 'distance_sensor'
  const code = idCode+'.get_temperature()';
  generator.definitions_['import_wumons_distance'] = [
      '# Import the wumons library - distance',
      'from wumons_i2c.dfr_urm09 import DFRobot_URM09'].join('\n');
  generator.definitions_['connect_wum_sensors_distance'] = [
      '# Connect the distance sensor',
      idCode+' = DFRobot_URM09(wumons.i2c)'].join('\n');  
  return [code, generator.ORDER_NONE];
}

python.pythonGenerator.forBlock['display_clear'] = function(block, generator) { 
  const idCode = 'digit_display'
  const code = [
      idCode+'.clear()'].join('\n');
  generator.definitions_['import_wumons_display'] = [
      '# Import the wumons library - display',
      'from wumons_i2c.dfr_0646 import DFRobot_0646'].join('\n');
  generator.definitions_['connect_wum_display'] = [
      '# Connect the 8-digit display',
      idCode+' = DFRobot_0646(wumons.i2c)'].join('\n');  
  return code;
}

/**
* Aussi possibles 
* display.int(4289)
* display.float(-3.14159)
* display.print("CircuitPython is great!")
*/

python.pythonGenerator.forBlock['rgb_button_set_colour'] = function(block, generator) { 
  const value_colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_NONE) || 0;
  const idCode = 'rgb_button'
  const code = [
    idCode+`.set_RGB_color(${value_colour})`].join('\n');
  generator.definitions_['import_wumons_display'] = [
      '# Import the wumons library - RGB button',
      'from wumons_i2c.dfr_0991 import DFRobot_RGB_Button'].join('\n');
  generator.definitions_['connect_wum_display'] = [
      '# Connect the RGB button display',
      idCode+' = DFRobot_RGB_Button(wumons.i2c, 0x2A)'].join('\n');  
  return code;
}


