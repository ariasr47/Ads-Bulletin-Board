// @ts-ignore
import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Chip from "@material-ui/core/Chip"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone"
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone"
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone"
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded"
import Paper from "@material-ui/core/Paper"
import { navigate } from "gatsby"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 290,
    minWidth: 290,
    maxHeight: 380,
    minHeight: 380,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    opacity: 0.12,
  },
  textArea: {
    height: 60,
    position: "relative",
    overflow: "hidden",
  },
  Title: {
    width: 125,
  },
  cardOverlay: {
    maxWidth: 290,
    minWidth: 290,
    maxHeight: 380,
    minHeight: 380,
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(187, 134, 252, 0.05)",
  },
}))

export type CardProps = {
  id: string
  title: string
  category: string
  price: number
  description: string
}

const FormCard = (props: CardProps) => {
  console.log("Rendering <FormCard>")
  const classes = useStyles()

  const handleClick = (e: React.MouseEvent) => {
    const path = window.location.pathname
    if (path != `/ad/${props.id}`) navigate(`/ad/${props.id}`)
  }

  return (
    <Card className={classes.root} onClick={handleClick}>
      <Paper className={classes.cardOverlay}>
        <CardHeader
          avatar={
            <Chip
              color="primary"
              icon={<AttachMoneyRoundedIcon />}
              label={props.price}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertTwoToneIcon color="primary" />
            </IconButton>
          }
          title={props.title}
          titleTypographyProps={{ noWrap: true, className: classes.Title }}
          subheader={props.category}
        />
        <CardMedia className={classes.media} image="" title="" />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.textArea}
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteTwoToneIcon color="primary" />
          </IconButton>
          <IconButton aria-label="share">
            <ShareTwoToneIcon color="primary" />
          </IconButton>
        </CardActions>
      </Paper>
    </Card>
  )
}

export default FormCard
