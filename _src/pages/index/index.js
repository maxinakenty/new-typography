import ToggleButton from 'Toggle-button';
import VerticalRhythm from 'Rhythm-debug';
import GridDebug from 'Grid-debug';
import BreakpointsDebug from 'Breakpoints-debug';
import FontSizeDebug from '../../_js/Font-size-debug';

const toggleButton = new ToggleButton();
const verticalRhythm = new VerticalRhythm();
const gridDebug = new GridDebug();
const breakpointsDebug = new BreakpointsDebug();
const fontSizeDebug = new FontSizeDebug();

toggleButton.init();
verticalRhythm.init();
gridDebug.init();
fontSizeDebug.init();


toggleButton.getElem().addEventListener('click', () => {
  verticalRhythm.toggleState(toggleButton.getState());
});


