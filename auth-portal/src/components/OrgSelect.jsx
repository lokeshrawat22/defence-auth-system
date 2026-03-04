import { TextField, MenuItem } from "@mui/material";

export default function OrgSelect({ value, setValue }) {
  return (
    <TextField
      select
      fullWidth
      label="Select Organisation"
      margin="normal"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <MenuItem value="navy">Indian Navy</MenuItem>
      <MenuItem value="army">Indian Army</MenuItem>
      <MenuItem value="airforce">Indian Airforce</MenuItem>
    </TextField>
  );
}
