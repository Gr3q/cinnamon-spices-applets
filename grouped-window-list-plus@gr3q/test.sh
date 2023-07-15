#!/bin/bash

set -eou pipefail

# ./build.sh
#source ./build3_0.sh
#rm -rf ~/.local/share/cinnamon/applets/weather@mockturtl/
#mkdir ~/.local/share/cinnamon/applets/weather@mockturtl/
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null && pwd )"

# Save current dir for convenience
path=${PWD}

cd $DIR
mkdir -p ~/.local/share/cinnamon/applets/grouped-window-list-plus@gr3q/
cp -rf files/grouped-window-list-plus@gr3q/* ~/.local/share/cinnamon/applets/grouped-window-list-plus@gr3q/
cd ..
./cinnamon-spices-makepot grouped-window-list-plus@gr3q
cd $PWD
export DISPLAY=:0; cinnamon --replace &