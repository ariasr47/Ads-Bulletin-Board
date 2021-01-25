import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bb86fc",
      contrastText: "#000000",
    },
    secondary: {
      main: "#03DAC5",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
    action: {
      active: "rgb(187, 134, 252, 0.45)",
      hover: "rgba(255,255,255,0.08)",
      hoverOpacity: 0.08,
      selected: "rgb(187, 134, 252)",
      selectedOpacity: 0.16,
      disabled: "rgb(187, 134, 252, 0.12)",
      focus: "rgba(255,255,255,.24)",
      focusOpacity: 0.24,
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(255,255,255,0.6)",
    },
    divider: "rgba(255,255,255,0.12)",
  },
})

export default theme
