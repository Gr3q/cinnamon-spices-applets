const { windowList } = require('./window-list');

function main(metadata, orientation, panel_height, instance_id) {
    return weatherApplet.windowList(metadata, orientation, panel_height, instance_id);
}