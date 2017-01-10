"use strict";

// Created by Ludvig Böklin on 2017-01-02.
//
//  Remap for the swedish Programmer Dvorak layout. This is probably terrible 
//  for most people and I'm really just experimenting. 
//
//  The reason for the non-WASD-like controls is that Ä and Ö is where W 
//  and E would be on qwerty and those keys just don't exist in the 
//  javascript API and I don't want to go all the way to where R would be for 
//  forward movement.. 
//
//  Distributed under the AGPLv3 license. Use and modify to your hearts desire
//  and make available any changes under the same license.

(function() { // BEGIN LOCAL_SCOPE

    var MAPPING_NAME = "bok.sudoreboot.controllers.sv_dvorak_a5";

    var mapping = Controller.newMapping(MAPPING_NAME);

    // Movement directions controls
    mapping.from(Controller.Hardware.Keyboard.O).to(Controller.Actions.Forward);
    mapping.from(Controller.Hardware.Keyboard.A).to(Controller.Actions.Backward);
    // What you see here is an attempt at making things interesting while flying. Unfortunately it doesn't work.
    mapping.from(Controller.Hardware.Keyboard.E).when(Controller.Hardware.Application.Grounded).to(Controller.Actions.StrafeLeft);
    mapping.from(Controller.Hardware.Keyboard.E).invert().to(Controller.Actions.Roll);
    mapping.from(Controller.Hardware.Keyboard.U).when(Controller.Hardware.Application.Grounded).to(Controller.Actions.StrafeRight);
    mapping.from(Controller.Hardware.Keyboard.U).to(Controller.Actions.Roll);

    // Other movement controls
    mapping.from(Controller.Hardware.Keyboard.Space).to(Controller.Actions.Up);
    mapping.from(Controller.Hardware.Keyboard.Q).to(Controller.Actions.Down);
    mapping.from(Controller.Hardware.Keyboard.K).to(Controller.Actions.Down);
    mapping.from(Controller.Hardware.Keyboard.Y).to(Controller.Standard.RightPrimaryThumb);

    // Ctrl key has no API binding?
    //mapping.from(Controller.Hardware.Keyboard.Ctrl).to(Controller.Actions.Down);


    // Enable bindings
    Controller.enableMapping(MAPPING_NAME);

    // Disable mapping on script removal
    Script.scriptEnding.connect(function () {
        Controller.disableMapping(MAPPING_NAME);
    });

}());
