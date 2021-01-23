// @ts-ignore
import React from "react"
import DashboardIcon from "@material-ui/icons/Dashboard"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { FaMicrochip } from "@react-icons/all-files/fa/FaMicrochip"
import { FaCarSide } from "@react-icons/all-files/fa/FaCarSide"
import { FaTshirt } from "@react-icons/all-files/fa/FaTshirt"
import { FaHeart } from "@react-icons/all-files/fa/FaHeart"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Paper from "@material-ui/core/Paper"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Icon from "@material-ui/core/Icon"
import Fab from "@material-ui/core/Fab"
import { Link } from "gatsby"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    drawerOverlay: {
      height: "100%",
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "rgba(187, 134, 252, 0.09)",
    },
  })
)

export default function MyDrawer() {
  console.log("Rendering <Drawer>")
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Paper className={classes.drawerOverlay} elevation={4}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                {" "}
                <DashboardIcon color={"primary"} />{" "}
              </ListItemIcon>
              <ListItemText primary={"All Listings"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                {" "}
                <Icon component={FaMicrochip} color={"disabled"} />{" "}
              </ListItemIcon>
              <ListItemText primary={"Electronics"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                {" "}
                <Icon component={FaCarSide} color={"disabled"} />{" "}
              </ListItemIcon>
              <ListItemText primary={"Vehicles"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                {" "}
                <Icon component={FaTshirt} color={"disabled"} />{" "}
              </ListItemIcon>
              <ListItemText primary={"Fashion"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key={"Favorites"}>
              <ListItemIcon>
                <Icon component={FaHeart} color="disabled" />{" "}
              </ListItemIcon>
              <ListItemText primary={"Favorites"} />
            </ListItem>
          </List>
        </div>
        {
          <Link to={"/Post"}>
            <Fab color="secondary" aria-label="add">
              <FaPlus />
            </Fab>
          </Link>
        }
      </Paper>
    </Drawer>
  )
}
