// @ts-ignore
import React from "react"
import { Box, ButtonGroup, Divider, Icon, IconButton } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { FaSortNumericDown } from "@react-icons/all-files/fa/FaSortNumericDown"
import { FaSortNumericUp } from "@react-icons/all-files/fa/FaSortNumericUp"
import { FaYenSign } from "@react-icons/all-files/fa/FaYenSign"
import { FaEuroSign } from "@react-icons/all-files/fa/FaEuroSign"
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign"
import { FaList } from "@react-icons/all-files/fa/FaList"
import { FaTh } from "@react-icons/all-files/fa/FaTh"
import { Link, navigate } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      "& svg": {
        margin: theme.spacing(0.4),
      },
      "& hr": {
        margin: theme.spacing(0, 0.3),
      },
    },
  })
)

const NumericalSort = ({ order }) => {
  console.log("Rendering <NumericalSort>")

  return (
    <ButtonGroup aria-label="primary button group">
      <IconButton
        onClick={() => {
          if (order == "ASC") navigate("/sorted/DESC/ads")
        }}
      >
        <Icon
          component={FaSortNumericDown}
          color={order == "DESC" ? "primary" : "disabled"}
        />
      </IconButton>

      <IconButton
        onClick={() => {
          if (order == "DESC") navigate("/sorted/ASC/ads")
        }}
      >
        <Icon
          component={FaSortNumericUp}
          color={order == "ASC" ? "primary" : "disabled"}
        />
      </IconButton>
    </ButtonGroup>
  )
}

const FilterBar = ({ order }) => {
  console.log("rendering <FilterBar>")

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <ButtonGroup aria-label="primary button group">
        <IconButton aria-label="view list" disabled={true}>
          <Icon component={FaList} color={"disabled"} />
        </IconButton>
        <IconButton aria-label="module">
          <Icon component={FaTh} color={"primary"} />
        </IconButton>
      </ButtonGroup>
      <Divider orientation="vertical" flexItem />
      <ButtonGroup aria-label="outlined primary button group">
        <IconButton aria-label="usd">
          <Icon component={FaDollarSign} color={"primary"} />
        </IconButton>
        <IconButton aria-label="euro" disabled={true}>
          <Icon component={FaEuroSign} color={"disabled"} />
        </IconButton>
        <IconButton disabled={true}>
          <Icon component={FaYenSign} color={"disabled"} />
        </IconButton>
      </ButtonGroup>
      <Divider orientation="vertical" flexItem />
      <NumericalSort order={order} />
    </Box>
  )
}

export default FilterBar
