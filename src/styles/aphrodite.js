import {StyleSheet, css} from "aphrodite";

const descendantHandler = (selector, baseSelector,
    generateSubtreeStyles) => {
if (selector[0] !== '^') {
return null;
}
return generateSubtreeStyles(
`.${selector.slice(1)} ${baseSelector}`);
};

const descendantHandlerExtension = {
selectorHandler: descendantHandler,
};


export default StyleSheet.extend([descendantHandlerExtension]);