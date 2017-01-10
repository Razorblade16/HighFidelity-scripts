"use strict";

// Created by Ludvig Böklin on 2017-01-02.
//
//  Remaps the inputs of the gamepad controller so that it better resembles a 
//  control scheme you might find in a typical, non-VR game.
//
//  Distributed under the AGPLv3 license. Use and modify to your hearts desire
//  and make available any changes under the same license.

(function() { // BEGIN LOCAL_SCOPE

    var MAPPING_NAME = "bok.sudoreboot.controllers.gamepad-nohmd";

    var mapping = Controller.newMapping(MAPPING_NAME);

    // Left stick
    // Failed attempt at making things interesting when flying.. Leaving for historical records and to spark the imagination of younger generations.
    //mapping.from(Controller.Hardware.GamePad.LX).deadZone(0.35).when(Controller.Hardware.Application.Grounded).to(Controller.Actions.TranslateX);
    //mapping.from(Controller.Hardware.GamePad.LX).deadZone(0.35).to(Controller.Actions.Roll); // I'm a peacock and you gotta let me fly, but no
    mapping.from(Controller.Hardware.GamePad.LX).deadZone(0.35).to(Controller.Actions.TranslateX);
    mapping.from(Controller.Hardware.GamePad.LY).deadZone(0.35).to(Controller.Actions.TranslateZ);
    mapping.from(Controller.Hardware.GamePad.LS).to(Controller.Actions.Down);


    // Right stick
    mapping.from(Controller.Hardware.GamePad.RX).deadZone(0.2).to(Controller.Actions.Yaw);
    mapping.from(Controller.Hardware.GamePad.RY).deadZone(0.2).to(Controller.Actions.PitchDown);
    mapping.from(Controller.Hardware.GamePad.RS).to(Controller.Standard.RightPrimaryThumb);


    // Buttons
    //mapping.from(Controller.Hardware.GamePad.X).to(Controller.Actions.Down);
    //mapping.from(Controller.Hardware.GamePad.Y).to(Controller.Actions.Down);
    mapping.from(Controller.Hardware.GamePad.A).to(Controller.Actions.Up);
    //mapping.from(Controller.Hardware.GamePad.B).to(Controller.Actions.Down);


    // Bumpers
    mapping.from(Controller.Hardware.GamePad.LB).to(Controller.Actions.Down);
    mapping.from(Controller.Hardware.GamePad.RB).to(Controller.Actions.Up);


    // Enable the new mapping
    Controller.enableMapping(MAPPING_NAME);
    //mapping.enable();

    // Disable mapping on script removal
    Script.scriptEnding.connect(function () {
        Controller.disableMapping(MAPPING_NAME);
    });

}());
