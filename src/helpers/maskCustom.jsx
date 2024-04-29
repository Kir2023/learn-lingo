/* eslint-disable react/prop-types */

import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

export const MaskCustom = forwardRef(function MaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+38(#*0)000-00-00"
      definitions={{
        "#": /[0]/,
        "*": /[6,7,8,9,5]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
