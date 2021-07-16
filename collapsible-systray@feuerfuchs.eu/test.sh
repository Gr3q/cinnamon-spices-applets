#!/bin/bash
#source ./build.sh
cd src/3.8/
tsc -p tsconfig.json
cd ../..
#source ./build3_0.sh
#rm -rf ~/.local/share/cinnamon/applets/weather@mockturtl/
#mkdir ~/.local/share/cinnamon/applets/weather@mockturtl/
cp -rf files/collapsible-systray@feuerfuchs.eu/* ~/.local/share/cinnamon/applets/collapsible-systray@feuerfuchs.eu/
export DISPLAY=:0; cinnamon --replace &