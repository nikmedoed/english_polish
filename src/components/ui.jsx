import MuiButton from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
export function Button({ label, secondary = false, text = false, ...props }) {
  return (
    <MuiButton
      variant={text ? "text" : secondary ? "outlined" : "contained"}
      disableElevation
      {...props}
    >
      {label}
    </MuiButton>
  );
}
export function InputText(props) {
  return <InputBase fullWidth {...props} />;
}
