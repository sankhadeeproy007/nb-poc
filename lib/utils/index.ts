/* eslint-disable import/prefer-default-export */
import { colors as colorsType, derivedColorsType } from "../Types";
import { ButtonProps } from "../composites/Button";

export const getColorFromProps = (
  props: ButtonProps,
  colors: colorsType
): derivedColorsType => {
  /* 
    Initial colors set for primary
  */
  const derivedColors: derivedColorsType = {
    backgroundColor: colors.PRIMARY,
    borderColor: colors.PRIMARY,
    color: colors.ON_PRIMARY
  };
  /* 
    Handle error and secondary types
  */
  if (props.variant === "error") {
    derivedColors.backgroundColor = colors.ERROR;
    derivedColors.borderColor = colors.ERROR;
    derivedColors.color = colors.ON_ERROR;
  }
  if (props.variant === "secondary") {
    derivedColors.backgroundColor = colors.SECONDARY;
    derivedColors.borderColor = colors.SECONDARY;
    derivedColors.color = colors.ON_SECONDARY;
  }
  /* 
    Outline and transparent have the same color properties,
    except fot the border-color
  */
  if (props.outline || props.transparent) {
    derivedColors.backgroundColor = colors.TRANSPARENT;
    if (props.variant === "error") {
      derivedColors.color = colors.ERROR;
    } else if (props.variant === "secondary") {
      derivedColors.color = colors.SECONDARY;
    } else derivedColors.color = colors.PRIMARY;
  }
  /* 
    Remove border-color for transparent
  */
  if (props.transparent) {
    derivedColors.borderColor = colors.TRANSPARENT;
  }
  return derivedColors;
};
