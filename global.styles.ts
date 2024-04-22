const baseStyles = '@import "./src/shared/styles/_base.scss"';
const breakpointsStyles = '@import "./src/shared/styles/_breakpoints.scss"';
const colorsStyles = '@import "./src/shared/styles/_colors.scss"';
const mixinsStyles = '@import "./src/shared/styles/_mixins.scss"';

const styles = [baseStyles, breakpointsStyles, colorsStyles, mixinsStyles];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ";", "");
