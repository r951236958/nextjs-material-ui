import {
    Divider, Link, List,
    ListItem,

    ListItemIcon, ListItemText
} from '@material-ui/core'
import React from 'react'
import Icon from '@material-ui/core/Icon';


export default function MyLink() {
  return (

      <List className="menulist">
        <ListItem button>
          <ListItemIcon>
            
            <Icon>g_translate</Icon>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
          >
            <ListItemText primary="Google翻譯" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon>today</Icon>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1gzDP5JSYbjPs3ypXvHgZXDp7hbczR5l0OxVDBulMjG0"
          >
            <ListItemText primary="日報" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon>history_edu</Icon>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/document/d/1rxUeCFo3CkjF4Vj-GWdrom10mPnWe6_bKdR6CT_GjV8"
          >
            <ListItemText primary="批注詞" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon>calculate</Icon>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1mtz6488MHF6LxGPVro5X5qneZJt2Hv3SqLekWwwk0zw"
          >
            <ListItemText primary="數據計算" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon>filter_alt</Icon>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/18SWgCzsUB4rHSNl_qEe8OrlbmwGvqnZkv3wuKQznshY"
          >
            <ListItemText primary="篩選總表" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon>source</Icon>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1BEgZRROTF-8GyU7KFfG0BT-Gkh1o9qJlzNECzQh14jI"
          >
            <ListItemText primary="匯入處理" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon>folder_shared</Icon>
          </ListItemIcon>

          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws"
          >
            <ListItemText primary="採購部共用" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon>folder_shared </Icon>
          </ListItemIcon>

          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA"
          >
            <ListItemText primary="Jayden共用" />
          </Link>
        </ListItem>
        <Divider />
      </List>

  )
}